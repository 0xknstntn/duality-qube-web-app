import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** EventGrant is emitted on Msg/Grant */

/** EventRevoke is emitted on Msg/Revoke */

function createBaseEventGrant() {
  return {
    msg_type_url: "",
    granter: "",
    grantee: ""
  };
}
export const EventGrant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg_type_url !== "") {
      writer.uint32(18).string(message.msg_type_url);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msg_type_url = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
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
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  fromPartial(object) {
    var _object$msg_type_url, _object$granter, _object$grantee;
    const message = createBaseEventGrant();
    message.msg_type_url = (_object$msg_type_url = object.msg_type_url) !== null && _object$msg_type_url !== void 0 ? _object$msg_type_url : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    return message;
  }
};
function createBaseEventRevoke() {
  return {
    msg_type_url: "",
    granter: "",
    grantee: ""
  };
}
export const EventRevoke = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg_type_url !== "") {
      writer.uint32(18).string(message.msg_type_url);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msg_type_url = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
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
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  fromPartial(object) {
    var _object$msg_type_url2, _object$granter2, _object$grantee2;
    const message = createBaseEventRevoke();
    message.msg_type_url = (_object$msg_type_url2 = object.msg_type_url) !== null && _object$msg_type_url2 !== void 0 ? _object$msg_type_url2 : "";
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    return message;
  }
};