import { Observable, from as observableFrom } from 'rxjs'
import type { TsProtoRpc } from './ts-proto-rpc'
import type { OpenStreamFunc } from './stream'
import { DataCb, ClientRPC } from './client-rpc'
import { pipe } from 'it-pipe'
import { pushable, Pushable } from 'it-pushable'
import {
  decodePacketSource,
  encodePacketSource,
  parseLengthPrefixTransform,
  prependLengthPrefixTransform,
} from './packet'

// unaryDataCb builds a new unary request data callback.
function unaryDataCb(resolve: (data: Uint8Array) => void): DataCb {
  return async (
    data: Uint8Array
  ): Promise<boolean | void> => {
    // resolve the promise
    resolve(data)
    // this is the last data we expect.
    return false
  }
}

// streamingDataCb builds a new streaming request data callback.
/*
function streamingDataCb(resolve: (data: Uint8Array) => void): DataCb {
  return async (
    data: Uint8Array
  ): Promise<boolean | void> => {
    // TODO
  }
}
*/

// writeClientStream registers the subscriber to write the client data stream.
function writeClientStream(call: ClientRPC, data: Observable<Uint8Array>) {
  data.subscribe({
    next(value) {
      call.writeCallData(value)
    },
    error(err) {
      call.close(err)
    },
    complete() {
      call.writeCallData(new Uint8Array(0), true)
    },
  })
}

// waitCallComplete handles the call complete promise.
function waitCallComplete(
  call: ClientRPC,
  resolve: (data: Uint8Array) => void,
  reject: (err: Error) => void,
) {
  call.waitComplete().catch(reject).finally(() => {
    // ensure we resolve it if no data was ever returned.
    resolve(new Uint8Array())
  })
}

// Client implements the ts-proto Rpc interface with the drpcproto protocol.
export class Client implements TsProtoRpc {
  // openConnFn is the open connection function.
  // called when starting RPC.
  private openConnFn: OpenStreamFunc

  constructor(openConnFn: OpenStreamFunc) {
    this.openConnFn = openConnFn
  }

  // request starts a non-streaming request.
  public async request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      const dataCb = unaryDataCb(resolve)
      this.startRpc(service, method, data, dataCb)
        .then((call) => {
          waitCallComplete(call, resolve, reject)
        })
        .catch(reject)
    })
  }

  // clientStreamingRequest starts a client side streaming request.
  public clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      const dataCb = unaryDataCb(resolve)
      this.startRpc(service, method, null, dataCb)
        .then((call) => {
          writeClientStream(call, data)
          waitCallComplete(call, resolve, reject)
        })
        .catch(reject)
    })
  }

  // serverStreamingRequest starts a server-side streaming request.
  public serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array> {
    const pushServerData: Pushable<Uint8Array> = pushable()
    const serverData = observableFrom(pushServerData)
    const dataCb: DataCb = async (data: Uint8Array): Promise<boolean | void> => {
      // push the message to the observable
      pushServerData.push(data)
      // expect more messages
      return true
    }
    this.startRpc(service, method, data, dataCb)
      .then((call) => {
        call.waitComplete().catch((err: Error) => {
          pushServerData.throw(err)
        }).finally(() => {
          pushServerData.end()
        })
      })
      .catch(pushServerData.throw.bind(pushServerData))
    return serverData
  }

  // bidirectionalStreamingRequest starts a two-way streaming request.
  public bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array> {
    const pushServerData: Pushable<Uint8Array> = pushable()
    const serverData = observableFrom(pushServerData)
    const dataCb: DataCb = async (data: Uint8Array): Promise<boolean | void> => {
      // push the message to the observable
      pushServerData.push(data)
      // expect more messages
      return true
    }
    this.startRpc(service, method, null, dataCb)
      .then((call) => {
        writeClientStream(call, data)
        call.waitComplete().catch((err: Error) => {
          pushServerData.throw(err)
        }).finally(() => {
          pushServerData.end()
        })
      })
      .catch(pushServerData.throw.bind(pushServerData))
    return serverData
  }

  // startRpc is a common utility function to begin a rpc call.
  // throws any error starting the rpc call
  private async startRpc(
    rpcService: string,
    rpcMethod: string,
    data: Uint8Array | null,
    dataCb: DataCb
  ): Promise<ClientRPC> {
    const conn = await this.openConnFn()
    const call = new ClientRPC(rpcService, rpcMethod, dataCb)
    pipe(
      conn,
      parseLengthPrefixTransform(),
      decodePacketSource,
      call,
      encodePacketSource,
      prependLengthPrefixTransform(),
      conn,
    )
    await call.writeCallStart(data || undefined)
    return call
  }
}
