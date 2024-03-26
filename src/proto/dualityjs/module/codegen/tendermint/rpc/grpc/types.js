import { ResponseCheckTx, ResponseDeliverTx } from "../../abci/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
function createBaseRequestPing() {
  return {};
}
export const RequestPing = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPing();
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
    const message = createBaseRequestPing();
    return message;
  }
};
function createBaseRequestBroadcastTx() {
  return {
    tx: new Uint8Array()
  };
}
export const RequestBroadcastTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBroadcastTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
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
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$tx;
    const message = createBaseRequestBroadcastTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    return message;
  }
};
function createBaseResponsePing() {
  return {};
}
export const ResponsePing = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePing();
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
    const message = createBaseResponsePing();
    return message;
  }
};
function createBaseResponseBroadcastTx() {
  return {
    check_tx: ResponseCheckTx.fromPartial({}),
    deliver_tx: ResponseDeliverTx.fromPartial({})
  };
}
export const ResponseBroadcastTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.check_tx !== undefined) {
      ResponseCheckTx.encode(message.check_tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliver_tx !== undefined) {
      ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBroadcastTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.deliver_tx = ResponseDeliverTx.decode(reader, reader.uint32());
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
      check_tx: isSet(object.check_tx) ? ResponseCheckTx.fromJSON(object.check_tx) : undefined,
      deliver_tx: isSet(object.deliver_tx) ? ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseResponseBroadcastTx();
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
    message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? ResponseDeliverTx.fromPartial(object.deliver_tx) : undefined;
    return message;
  }
};