import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */
export let AuthorizationType = /*#__PURE__*/function (AuthorizationType) {
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
  AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AuthorizationType;
}({});
export function authorizationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "AUTHORIZATION_TYPE_DELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
    case 2:
    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
    case 3:
    case "AUTHORIZATION_TYPE_REDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}
export function authorizationTypeToJSON(object) {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";
    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return "AUTHORIZATION_TYPE_DELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return "AUTHORIZATION_TYPE_UNDELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return "AUTHORIZATION_TYPE_REDELEGATE";
    case AuthorizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */

/** Validators defines list of validator addresses. */

function createBaseStakeAuthorization() {
  return {
    max_tokens: Coin.fromPartial({}),
    allow_list: undefined,
    deny_list: undefined,
    authorization_type: 0
  };
}
export const StakeAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.max_tokens !== undefined) {
      Coin.encode(message.max_tokens, writer.uint32(10).fork()).ldelim();
    }
    if (message.allow_list !== undefined) {
      StakeAuthorization_Validators.encode(message.allow_list, writer.uint32(18).fork()).ldelim();
    }
    if (message.deny_list !== undefined) {
      StakeAuthorization_Validators.encode(message.deny_list, writer.uint32(26).fork()).ldelim();
    }
    if (message.authorization_type !== 0) {
      writer.uint32(32).int32(message.authorization_type);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_tokens = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allow_list = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 3:
          message.deny_list = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 4:
          message.authorization_type = reader.int32();
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
      max_tokens: isSet(object.max_tokens) ? Coin.fromJSON(object.max_tokens) : undefined,
      allow_list: isSet(object.allow_list) ? StakeAuthorization_Validators.fromJSON(object.allow_list) : undefined,
      deny_list: isSet(object.deny_list) ? StakeAuthorization_Validators.fromJSON(object.deny_list) : undefined,
      authorization_type: isSet(object.authorization_type) ? authorizationTypeFromJSON(object.authorization_type) : -1
    };
  },
  fromPartial(object) {
    var _object$authorization;
    const message = createBaseStakeAuthorization();
    message.max_tokens = object.max_tokens !== undefined && object.max_tokens !== null ? Coin.fromPartial(object.max_tokens) : undefined;
    message.allow_list = object.allow_list !== undefined && object.allow_list !== null ? StakeAuthorization_Validators.fromPartial(object.allow_list) : undefined;
    message.deny_list = object.deny_list !== undefined && object.deny_list !== null ? StakeAuthorization_Validators.fromPartial(object.deny_list) : undefined;
    message.authorization_type = (_object$authorization = object.authorization_type) !== null && _object$authorization !== void 0 ? _object$authorization : 0;
    return message;
  }
};
function createBaseStakeAuthorization_Validators() {
  return {
    address: []
  };
}
export const StakeAuthorization_Validators = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.address) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
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
      address: Array.isArray(object === null || object === void 0 ? void 0 : object.address) ? object.address.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseStakeAuthorization_Validators();
    message.address = ((_object$address = object.address) === null || _object$address === void 0 ? void 0 : _object$address.map(e => e)) || [];
    return message;
  }
};