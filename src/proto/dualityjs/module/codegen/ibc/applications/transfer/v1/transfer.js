import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */

function createBaseDenomTrace() {
  return {
    path: "",
    base_denom: ""
  };
}
export const DenomTrace = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.base_denom !== "") {
      writer.uint32(18).string(message.base_denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.base_denom = reader.string();
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
      path: isSet(object.path) ? String(object.path) : "",
      base_denom: isSet(object.base_denom) ? String(object.base_denom) : ""
    };
  },
  fromPartial(object) {
    var _object$path, _object$base_denom;
    const message = createBaseDenomTrace();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.base_denom = (_object$base_denom = object.base_denom) !== null && _object$base_denom !== void 0 ? _object$base_denom : "";
    return message;
  }
};
function createBaseParams() {
  return {
    send_enabled: false,
    receive_enabled: false
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.send_enabled === true) {
      writer.uint32(8).bool(message.send_enabled);
    }
    if (message.receive_enabled === true) {
      writer.uint32(16).bool(message.receive_enabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.send_enabled = reader.bool();
          break;
        case 2:
          message.receive_enabled = reader.bool();
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
      send_enabled: isSet(object.send_enabled) ? Boolean(object.send_enabled) : false,
      receive_enabled: isSet(object.receive_enabled) ? Boolean(object.receive_enabled) : false
    };
  },
  fromPartial(object) {
    var _object$send_enabled, _object$receive_enabl;
    const message = createBaseParams();
    message.send_enabled = (_object$send_enabled = object.send_enabled) !== null && _object$send_enabled !== void 0 ? _object$send_enabled : false;
    message.receive_enabled = (_object$receive_enabl = object.receive_enabled) !== null && _object$receive_enabl !== void 0 ? _object$receive_enabl : false;
    return message;
  }
};