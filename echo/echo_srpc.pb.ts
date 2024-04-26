// @generated by protoc-gen-es-starpc none with parameter "target=ts,ts_nocheck=false"
// @generated from file github.com/aperturerobotics/starpc/echo/echo.proto (package echo, syntax proto3)
/* eslint-disable */

import { EchoMsg } from "./echo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { RpcStreamPacket } from "../rpcstream/rpcstream_pb.js";
import { Message } from "@aptre/protobuf-es-lite";
import { buildDecodeMessageTransform, buildEncodeMessageTransform, MessageStream, ProtoRpc } from "starpc";

/**
 * Echoer service returns the given message.
 *
 * @generated from service echo.Echoer
 */
export const EchoerDefinition = {
  typeName: "echo.Echoer",
  methods: {
    /**
     * Echo returns the given message.
     *
     * @generated from rpc echo.Echoer.Echo
     */
    Echo: {
      name: "Echo",
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.Unary,
    },
    /**
     * EchoServerStream is an example of a server -> client one-way stream.
     *
     * @generated from rpc echo.Echoer.EchoServerStream
     */
    EchoServerStream: {
      name: "EchoServerStream",
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * EchoClientStream is an example of client->server one-way stream.
     *
     * @generated from rpc echo.Echoer.EchoClientStream
     */
    EchoClientStream: {
      name: "EchoClientStream",
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * EchoBidiStream is an example of a two-way stream.
     *
     * @generated from rpc echo.Echoer.EchoBidiStream
     */
    EchoBidiStream: {
      name: "EchoBidiStream",
      I: EchoMsg,
      O: EchoMsg,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * RpcStream opens a nested rpc call stream.
     *
     * @generated from rpc echo.Echoer.RpcStream
     */
    RpcStream: {
      name: "RpcStream",
      I: RpcStreamPacket,
      O: RpcStreamPacket,
      kind: MethodKind.BiDiStreaming,
    },
  }
} as const;

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
  Echo(
request: Message<EchoMsg>, abortSignal?: AbortSignal
): 
Promise<Message<EchoMsg>>

  /**
   * EchoServerStream is an example of a server -> client one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoServerStream
   */
  EchoServerStream(
request: Message<EchoMsg>, abortSignal?: AbortSignal
): 
MessageStream<EchoMsg>

  /**
   * EchoClientStream is an example of client->server one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoClientStream
   */
  EchoClientStream(
request: MessageStream<EchoMsg>, abortSignal?: AbortSignal
): 
Promise<Message<EchoMsg>>

  /**
   * EchoBidiStream is an example of a two-way stream.
   *
   * @generated from rpc echo.Echoer.EchoBidiStream
   */
  EchoBidiStream(
request: MessageStream<EchoMsg>, abortSignal?: AbortSignal
): 
MessageStream<EchoMsg>

  /**
   * RpcStream opens a nested rpc call stream.
   *
   * @generated from rpc echo.Echoer.RpcStream
   */
  RpcStream(
request: MessageStream<RpcStreamPacket>, abortSignal?: AbortSignal
): 
MessageStream<RpcStreamPacket>

}

export const EchoerServiceName = EchoerDefinition.typeName

export class EchoerClient implements Echoer {
  private readonly rpc: ProtoRpc
  private readonly service: string
  constructor(rpc: ProtoRpc, opts?: { service?: string }) {
    this.service = opts?.service || EchoerServiceName
    this.rpc = rpc
    this.Echo = this.Echo.bind(this)
    this.EchoServerStream = this.EchoServerStream.bind(this)
    this.EchoClientStream = this.EchoClientStream.bind(this)
    this.EchoBidiStream = this.EchoBidiStream.bind(this)
    this.RpcStream = this.RpcStream.bind(this)
  }
  /**
   * Echo returns the given message.
   *
   * @generated from rpc echo.Echoer.Echo
   */
  async Echo(
request: Message<EchoMsg>, abortSignal?: AbortSignal
): 
Promise<Message<EchoMsg>> {
    const requestMsg = EchoMsg.create(request)
    const result = await this.rpc.request(
      this.service,
      EchoerDefinition.methods.Echo.name,
      EchoMsg.toBinary(requestMsg),
      abortSignal || undefined,
    )
    return EchoMsg.fromBinary(result)
  }

  /**
   * EchoServerStream is an example of a server -> client one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoServerStream
   */
  EchoServerStream(
request: Message<EchoMsg>, abortSignal?: AbortSignal
): 
MessageStream<EchoMsg> {
    const requestMsg = EchoMsg.create(request)
    const result = this.rpc.serverStreamingRequest(
      this.service,
      EchoerDefinition.methods.EchoServerStream.name,
      EchoMsg.toBinary(requestMsg),
      abortSignal || undefined,
    )
    return buildDecodeMessageTransform(EchoMsg)(result)
  }

  /**
   * EchoClientStream is an example of client->server one-way stream.
   *
   * @generated from rpc echo.Echoer.EchoClientStream
   */
  async EchoClientStream(
request: MessageStream<EchoMsg>, abortSignal?: AbortSignal
): 
Promise<Message<EchoMsg>> {
    const result = await this.rpc.clientStreamingRequest(
      this.service,
      EchoerDefinition.methods.EchoClientStream.name,
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
  EchoBidiStream(
request: MessageStream<EchoMsg>, abortSignal?: AbortSignal
): 
MessageStream<EchoMsg> {
    const result = this.rpc.bidirectionalStreamingRequest(
      this.service,
      EchoerDefinition.methods.EchoBidiStream.name,
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
  RpcStream(
request: MessageStream<RpcStreamPacket>, abortSignal?: AbortSignal
): 
MessageStream<RpcStreamPacket> {
    const result = this.rpc.bidirectionalStreamingRequest(
      this.service,
      EchoerDefinition.methods.RpcStream.name,
      buildEncodeMessageTransform(RpcStreamPacket)(request),
      abortSignal || undefined,
    )
    return buildDecodeMessageTransform(RpcStreamPacket)(result)
  }

}