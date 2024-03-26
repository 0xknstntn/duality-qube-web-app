import { EpochInfo } from "./genesis";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryEpochsInfoRequest() {
  return {};
}
export const QueryEpochsInfoRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
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
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  }
};
function createBaseQueryEpochsInfoResponse() {
  return {
    epochs: []
  };
}
export const QueryEpochsInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.epochs) {
      EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
      epochs: Array.isArray(object === null || object === void 0 ? void 0 : object.epochs) ? object.epochs.map(e => EpochInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$epochs;
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = ((_object$epochs = object.epochs) === null || _object$epochs === void 0 ? void 0 : _object$epochs.map(e => EpochInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryCurrentEpochRequest() {
  return {
    identifier: ""
  };
}
export const QueryCurrentEpochRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
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
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  },
  fromPartial(object) {
    var _object$identifier;
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    return message;
  }
};
function createBaseQueryCurrentEpochResponse() {
  return {
    current_epoch: Long.ZERO
  };
}
export const QueryCurrentEpochResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.current_epoch.isZero()) {
      writer.uint32(8).int64(message.current_epoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.current_epoch = reader.int64();
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
      current_epoch: isSet(object.current_epoch) ? Long.fromValue(object.current_epoch) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentEpochResponse();
    message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? Long.fromValue(object.current_epoch) : Long.ZERO;
    return message;
  }
};