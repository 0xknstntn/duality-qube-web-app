import { NetAddress } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBasePexRequest() {
  return {};
}
export const PexRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePexRequest();
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
    const message = createBasePexRequest();
    return message;
  }
};
function createBasePexAddrs() {
  return {
    addrs: []
  };
}
export const PexAddrs = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.addrs) {
      NetAddress.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePexAddrs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addrs.push(NetAddress.decode(reader, reader.uint32()));
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
      addrs: Array.isArray(object === null || object === void 0 ? void 0 : object.addrs) ? object.addrs.map(e => NetAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$addrs;
    const message = createBasePexAddrs();
    message.addrs = ((_object$addrs = object.addrs) === null || _object$addrs === void 0 ? void 0 : _object$addrs.map(e => NetAddress.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMessage() {
  return {
    pex_request: undefined,
    pex_addrs: undefined
  };
}
export const Message = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pex_request !== undefined) {
      PexRequest.encode(message.pex_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.pex_addrs !== undefined) {
      PexAddrs.encode(message.pex_addrs, writer.uint32(18).fork()).ldelim();
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
          message.pex_request = PexRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.pex_addrs = PexAddrs.decode(reader, reader.uint32());
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
      pex_request: isSet(object.pex_request) ? PexRequest.fromJSON(object.pex_request) : undefined,
      pex_addrs: isSet(object.pex_addrs) ? PexAddrs.fromJSON(object.pex_addrs) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMessage();
    message.pex_request = object.pex_request !== undefined && object.pex_request !== null ? PexRequest.fromPartial(object.pex_request) : undefined;
    message.pex_addrs = object.pex_addrs !== undefined && object.pex_addrs !== null ? PexAddrs.fromPartial(object.pex_addrs) : undefined;
    return message;
  }
};