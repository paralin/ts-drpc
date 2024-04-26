// ProtoRpc matches the Rpc interface generated by ts-proto.
// Implemented by the srpc client.
export interface ProtoRpc {
  // request fires a one-off unary RPC request.
  request(
    service: string,
    method: string,
    data: Uint8Array,
    abortSignal?: AbortSignal,
  ): Promise<Uint8Array>
  // clientStreamingRequest fires a one-way client->server streaming request.
  clientStreamingRequest(
    service: string,
    method: string,
    data: AsyncIterable<Uint8Array>,
    abortSignal?: AbortSignal,
  ): Promise<Uint8Array>
  // serverStreamingRequest fires a one-way server->client streaming request.
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array,
    abortSignal?: AbortSignal,
  ): AsyncIterable<Uint8Array>
  // bidirectionalStreamingRequest implements a two-way streaming request.
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: AsyncIterable<Uint8Array>,
    abortSignal?: AbortSignal,
  ): AsyncIterable<Uint8Array>
}