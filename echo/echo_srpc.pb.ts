// @generated by protoc-gen-es-starpc v0.30.1 with parameter "target=ts"
// @generated from file github.com/aperturerobotics/starpc/echo/echo.proto (package echo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { EchoMsg } from './echo_pb.js'
import type { PartialMessage } from '@bufbuild/protobuf'
import { MethodKind } from '@bufbuild/protobuf'
import { RpcStreamPacket } from '../rpcstream/rpcstream_pb.js'
import {
  buildDecodeMessageTransform,
  buildEncodeMessageTransform,
  ProtoRpc,
} from 'starpc'

/**
 * Echoer service returns the given message.
 *
 * @generated from service echo.Echoer
 */
export const EchoerDefinition = {
  typeName: 'echo.Echoer',
  methods: {
    /**
     * Echo returns the given message.
     *
     * @generated from rpc echo.Echoer.Echo
     */
    echo: {
      name: 'Echo',
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.Unary,
    },
    /**
     * EchoServerStream is an example of a server -> client one-way stream.
     *
     * @generated from rpc echo.Echoer.EchoServerStream
     */
    echoServerStream: {
      name: 'EchoServerStream',
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * EchoClientStream is an example of client->server one-way stream.
     *
     * @generated from rpc echo.Echoer.EchoClientStream
     */
    echoClientStream: {
      name: 'EchoClientStream',
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * EchoBidiStream is an example of a two-way stream.
     *
     * @generated from rpc echo.Echoer.EchoBidiStream
     */
    echoBidiStream: {
      name: 'EchoBidiStream',
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * RpcStream opens a nested rpc call stream.
     *
     * @generated from rpc echo.Echoer.RpcStream
     */
    rpcStream: {
      name: 'RpcStream',
      I: RpcStreamPacket,
      O: RpcStreamPacket,
      kind: MethodKind.BiDiStreaming,
    },
  },
} as const

/**
 * Echoer service returns the given message.
 *
 * @generated from service echo.Echoer
 */
export interface Echoer {
  /**
   * Echo returns the given message.
   *
   * @generated from rpc echo.Echoer.Echo
   */
  echo(
    request: PartialMessage<EchoMsg>,
    abortSignal?: AbortSignal,
  ): Promise<EchoMsg>

  /**
   * EchoServerStream is an example of a server -> client one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoServerStream
   */
  echoServerStream(
    request: PartialMessage<EchoMsg>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<EchoMsg>

  /**
   * EchoClientStream is an example of client->server one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoClientStream
   */
  echoClientStream(
    request: AsyncIterable<PartialMessage<EchoMsg>>,
    abortSignal?: AbortSignal,
  ): Promise<EchoMsg>

  /**
   * EchoBidiStream is an example of a two-way stream.
   *
   * @generated from rpc echo.Echoer.EchoBidiStream
   */
  echoBidiStream(
    request: AsyncIterable<PartialMessage<EchoMsg>>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<EchoMsg>

  /**
   * RpcStream opens a nested rpc call stream.
   *
   * @generated from rpc echo.Echoer.RpcStream
   */
  rpcStream(
    request: AsyncIterable<PartialMessage<RpcStreamPacket>>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<RpcStreamPacket>
}

export const EchoerServiceName = EchoerDefinition.typeName

export class EchoerClient implements Echoer {
  private readonly rpc: ProtoRpc
  private readonly service: string
  constructor(rpc: ProtoRpc, opts?: { service?: string }) {
    this.service = opts?.service || EchoerServiceName
    this.rpc = rpc
    this.echo = this.echo.bind(this)
    this.echoServerStream = this.echoServerStream.bind(this)
    this.echoClientStream = this.echoClientStream.bind(this)
    this.echoBidiStream = this.echoBidiStream.bind(this)
    this.rpcStream = this.rpcStream.bind(this)
  }
  /**
   * Echo returns the given message.
   *
   * @generated from rpc echo.Echoer.Echo
   */
  async echo(
    request: PartialMessage<EchoMsg>,
    abortSignal?: AbortSignal,
  ): Promise<EchoMsg> {
    const requestMsg = new EchoMsg(request)
    const result = await this.rpc.request(
      this.service,
      EchoerDefinition.methods.echo.name,
      requestMsg.toBinary(),
      abortSignal || undefined,
    )
    return EchoMsg.fromBinary(result)
  }

  /**
   * EchoServerStream is an example of a server -> client one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoServerStream
   */
  echoServerStream(
    request: PartialMessage<EchoMsg>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<EchoMsg> {
    const requestMsg = new EchoMsg(request)
    const result = this.rpc.serverStreamingRequest(
      this.service,
      EchoerDefinition.methods.echoServerStream.name,
      requestMsg.toBinary(),
      abortSignal || undefined,
    )
    return buildDecodeMessageTransform(EchoMsg)(result)
  }

  /**
   * EchoClientStream is an example of client->server one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoClientStream
   */
  echoClientStream(
    request: AsyncIterable<PartialMessage<EchoMsg>>,
    abortSignal?: AbortSignal,
  ): Promise<EchoMsg> {
    const result = await this.rpc.clientStreamingRequest(
      this.service,
      EchoerDefinition.methods.echoClientStream.name,
      buildEncodeMessageTransform(EchoMsg)(request),
      abortSignal || undefined,
    )
    return EchoMsg.fromBinary(result)
  }

  /**
   * EchoBidiStream is an example of a two-way stream.
   *
   * @generated from rpc echo.Echoer.EchoBidiStream
   */
  echoBidiStream(
    request: AsyncIterable<PartialMessage<EchoMsg>>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<EchoMsg> {
    const result = this.rpc.bidirectionalStreamingRequest(
      this.service,
      EchoerDefinition.methods.echoBidiStream.name,
      buildEncodeMessageTransform(EchoMsg)(request),
      abortSignal || undefined,
    )
    return buildDecodeMessageTransform(EchoMsg)(result)
  }

  /**
   * RpcStream opens a nested rpc call stream.
   *
   * @generated from rpc echo.Echoer.RpcStream
   */
  rpcStream(
    request: AsyncIterable<PartialMessage<RpcStreamPacket>>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<RpcStreamPacket> {
    const result = this.rpc.bidirectionalStreamingRequest(
      this.service,
      EchoerDefinition.methods.rpcStream.name,
      buildEncodeMessageTransform(RpcStreamPacket)(request),
      abortSignal || undefined,
    )
    return buildDecodeMessageTransform(RpcStreamPacket)(result)
  }
}
