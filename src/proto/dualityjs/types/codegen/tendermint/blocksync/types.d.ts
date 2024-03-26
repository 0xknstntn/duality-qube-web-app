import { Block } from "../types/block";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
    height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
    height: Long;
}
/** BlockResponse returns block to the requested */
export interface BlockResponse {
    block: Block;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequest {
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
    height: Long;
    base: Long;
}
export interface Message {
    block_request?: BlockRequest;
    no_block_response?: NoBlockResponse;
    block_response?: BlockResponse;
    status_request?: StatusRequest;
    status_response?: StatusResponse;
}
export declare const BlockRequest: {
    encode(message: BlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest;
    fromJSON(object: any): BlockRequest;
    fromPartial(object: DeepPartial<BlockRequest>): BlockRequest;
};
export declare const NoBlockResponse: {
    encode(message: NoBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse;
    fromJSON(object: any): NoBlockResponse;
    fromPartial(object: DeepPartial<NoBlockResponse>): NoBlockResponse;
};
export declare const BlockResponse: {
    encode(message: BlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse;
    fromJSON(object: any): BlockResponse;
    fromPartial(object: DeepPartial<BlockResponse>): BlockResponse;
};
export declare const StatusRequest: {
    encode(_: StatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest;
    fromJSON(_: any): StatusRequest;
    fromPartial(_: DeepPartial<StatusRequest>): StatusRequest;
};
export declare const StatusResponse: {
    encode(message: StatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse;
    fromJSON(object: any): StatusResponse;
    fromPartial(object: DeepPartial<StatusResponse>): StatusResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    fromPartial(object: DeepPartial<Message>): Message;
};
