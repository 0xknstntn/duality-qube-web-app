import { Block } from "../types/block";
import { Long, isSet, DeepPartial } from "../../helpers";
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
export interface StatusRequest {}
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
function createBaseBlockRequest(): BlockRequest {
  return {
    height: Long.ZERO
  };
}
export const BlockRequest = {
  encode(message: BlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockRequest {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<BlockRequest>): BlockRequest {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseNoBlockResponse(): NoBlockResponse {
  return {
    height: Long.ZERO
  };
}
export const NoBlockResponse = {
  encode(message: NoBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NoBlockResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<NoBlockResponse>): NoBlockResponse {
    const message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseBlockResponse(): BlockResponse {
  return {
    block: Block.fromPartial({})
  };
}
export const BlockResponse = {
  encode(message: BlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockResponse {
    return {
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },
  fromPartial(object: DeepPartial<BlockResponse>): BlockResponse {
    const message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): StatusRequest {
    return {};
  },
  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    height: Long.ZERO,
    base: Long.ZERO
  };
}
export const StatusResponse = {
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.base = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StatusResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      base: isSet(object.base) ? Long.fromValue(object.base) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    block_request: undefined,
    no_block_response: undefined,
    block_response: undefined,
    status_request: undefined,
    status_response: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block_request !== undefined) {
      BlockRequest.encode(message.block_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.no_block_response !== undefined) {
      NoBlockResponse.encode(message.no_block_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.block_response !== undefined) {
      BlockResponse.encode(message.block_response, writer.uint32(26).fork()).ldelim();
    }
    if (message.status_request !== undefined) {
      StatusRequest.encode(message.status_request, writer.uint32(34).fork()).ldelim();
    }
    if (message.status_response !== undefined) {
      StatusResponse.encode(message.status_response, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_request = BlockRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.no_block_response = NoBlockResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.block_response = BlockResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.status_request = StatusRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.status_response = StatusResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Message {
    return {
      block_request: isSet(object.block_request) ? BlockRequest.fromJSON(object.block_request) : undefined,
      no_block_response: isSet(object.no_block_response) ? NoBlockResponse.fromJSON(object.no_block_response) : undefined,
      block_response: isSet(object.block_response) ? BlockResponse.fromJSON(object.block_response) : undefined,
      status_request: isSet(object.status_request) ? StatusRequest.fromJSON(object.status_request) : undefined,
      status_response: isSet(object.status_response) ? StatusResponse.fromJSON(object.status_response) : undefined
    };
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.block_request = object.block_request !== undefined && object.block_request !== null ? BlockRequest.fromPartial(object.block_request) : undefined;
    message.no_block_response = object.no_block_response !== undefined && object.no_block_response !== null ? NoBlockResponse.fromPartial(object.no_block_response) : undefined;
    message.block_response = object.block_response !== undefined && object.block_response !== null ? BlockResponse.fromPartial(object.block_response) : undefined;
    message.status_request = object.status_request !== undefined && object.status_request !== null ? StatusRequest.fromPartial(object.status_request) : undefined;
    message.status_response = object.status_response !== undefined && object.status_response !== null ? StatusResponse.fromPartial(object.status_response) : undefined;
    return message;
  }
};