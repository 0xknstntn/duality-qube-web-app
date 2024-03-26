import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgIBCSend */

/** MsgIBCSendResponse */

/** MsgIBCCloseChannel port and channel need to be owned by the contract */

function createBaseMsgIBCSend() {
  return {
    channel: "",
    timeout_height: Long.UZERO,
    timeout_timestamp: Long.UZERO,
    data: new Uint8Array()
  };
}
export const MsgIBCSend = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (!message.timeout_height.isZero()) {
      writer.uint32(32).uint64(message.timeout_height);
    }
    if (!message.timeout_timestamp.isZero()) {
      writer.uint32(40).uint64(message.timeout_timestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        case 4:
          message.timeout_height = reader.uint64();
          break;
        case 5:
          message.timeout_timestamp = reader.uint64();
          break;
        case 6:
          message.data = reader.bytes();
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
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeout_height: isSet(object.timeout_height) ? Long.fromValue(object.timeout_height) : Long.UZERO,
      timeout_timestamp: isSet(object.timeout_timestamp) ? Long.fromValue(object.timeout_timestamp) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$channel, _object$data;
    const message = createBaseMsgIBCSend();
    message.channel = (_object$channel = object.channel) !== null && _object$channel !== void 0 ? _object$channel : "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Long.fromValue(object.timeout_height) : Long.UZERO;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? Long.fromValue(object.timeout_timestamp) : Long.UZERO;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
function createBaseMsgIBCSendResponse() {
  return {
    sequence: Long.UZERO
  };
}
export const MsgIBCSendResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
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
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseMsgIBCSendResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};
function createBaseMsgIBCCloseChannel() {
  return {
    channel: ""
  };
}
export const MsgIBCCloseChannel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
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
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object) {
    var _object$channel2;
    const message = createBaseMsgIBCCloseChannel();
    message.channel = (_object$channel2 = object.channel) !== null && _object$channel2 !== void 0 ? _object$channel2 : "";
    return message;
  }
};