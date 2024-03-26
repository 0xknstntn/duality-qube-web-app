import { Block } from "../types/block";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockRequest requests a block for a specific height */

/** NoBlockResponse informs the node that the peer does not have block at the requested height */

/** BlockResponse returns block to the requested */

/** StatusRequest requests the status of a peer. */

/** StatusResponse is a peer response to inform their status. */

function createBaseBlockRequest() {
  return {
    height: Long.ZERO
  };
}
export const BlockRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseNoBlockResponse() {
  return {
    height: Long.ZERO
  };
}
export const NoBlockResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseBlockResponse() {
  return {
    block: Block.fromPartial({})
  };
}
export const BlockResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromJSON(object) {
    return {
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  }
};
function createBaseStatusRequest() {
  return {};
}
export const StatusRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseStatusRequest();
    return message;
  }
};
function createBaseStatusResponse() {
  return {
    height: Long.ZERO,
    base: Long.ZERO
  };
}
export const StatusResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.base = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      base: isSet(object.base) ? Long.fromValue(object.base) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    return message;
  }
};
function createBaseMessage() {
  return {
    block_request: undefined,
    no_block_response: undefined,
    block_response: undefined,
    status_request: undefined,
    status_response: undefined
  };
}
export const Message = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
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
  fromJSON(object) {
    return {
      block_request: isSet(object.block_request) ? BlockRequest.fromJSON(object.block_request) : undefined,
      no_block_response: isSet(object.no_block_response) ? NoBlockResponse.fromJSON(object.no_block_response) : undefined,
      block_response: isSet(object.block_response) ? BlockResponse.fromJSON(object.block_response) : undefined,
      status_request: isSet(object.status_request) ? StatusRequest.fromJSON(object.status_request) : undefined,
      status_response: isSet(object.status_response) ? StatusResponse.fromJSON(object.status_response) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMessage();
    message.block_request = object.block_request !== undefined && object.block_request !== null ? BlockRequest.fromPartial(object.block_request) : undefined;
    message.no_block_response = object.no_block_response !== undefined && object.no_block_response !== null ? NoBlockResponse.fromPartial(object.no_block_response) : undefined;
    message.block_response = object.block_response !== undefined && object.block_response !== null ? BlockResponse.fromPartial(object.block_response) : undefined;
    message.status_request = object.status_request !== undefined && object.status_request !== null ? StatusRequest.fromPartial(object.status_request) : undefined;
    message.status_response = object.status_response !== undefined && object.status_response !== null ? StatusResponse.fromPartial(object.status_response) : undefined;
    return message;
  }
};