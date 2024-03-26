import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariant_module_name: "",
    invariant_route: ""
  };
}
export const MsgVerifyInvariant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariant_module_name !== "") {
      writer.uint32(18).string(message.invariant_module_name);
    }
    if (message.invariant_route !== "") {
      writer.uint32(26).string(message.invariant_route);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariant_module_name = reader.string();
          break;
        case 3:
          message.invariant_route = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      invariant_module_name: isSet(object.invariant_module_name) ? String(object.invariant_module_name) : "",
      invariant_route: isSet(object.invariant_route) ? String(object.invariant_route) : ""
    };
  },
  fromPartial(object) {
    var _object$sender, _object$invariant_mod, _object$invariant_rou;
    const message = createBaseMsgVerifyInvariant();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.invariant_module_name = (_object$invariant_mod = object.invariant_module_name) !== null && _object$invariant_mod !== void 0 ? _object$invariant_mod : "";
    message.invariant_route = (_object$invariant_rou = object.invariant_route) !== null && _object$invariant_rou !== void 0 ? _object$invariant_rou : "";
    return message;
  }
};
function createBaseMsgVerifyInvariantResponse() {
  return {};
}
export const MsgVerifyInvariantResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    constant_fee: Coin.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.constant_fee !== undefined) {
      Coin.encode(message.constant_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.constant_fee = Coin.decode(reader, reader.uint32());
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      constant_fee: isSet(object.constant_fee) ? Coin.fromJSON(object.constant_fee) : undefined
    };
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.constant_fee = object.constant_fee !== undefined && object.constant_fee !== null ? Coin.fromPartial(object.constant_fee) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};