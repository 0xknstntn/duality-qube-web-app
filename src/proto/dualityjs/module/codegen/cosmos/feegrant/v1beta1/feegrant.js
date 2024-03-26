import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */

/** AllowedMsgAllowance creates allowance only for specified message types. */

/** Grant is stored in the KVStore to record a grant with full context */

function createBaseBasicAllowance() {
  return {
    spend_limit: [],
    expiration: Timestamp.fromPartial({})
  };
}
export const BasicAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.spend_limit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spend_limit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = Timestamp.decode(reader, reader.uint32());
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
      spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.spend_limit) ? object.spend_limit.map(e => Coin.fromJSON(e)) : [],
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object) {
    var _object$spend_limit;
    const message = createBaseBasicAllowance();
    message.spend_limit = ((_object$spend_limit = object.spend_limit) === null || _object$spend_limit === void 0 ? void 0 : _object$spend_limit.map(e => Coin.fromPartial(e))) || [];
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
function createBasePeriodicAllowance() {
  return {
    basic: BasicAllowance.fromPartial({}),
    period: Duration.fromPartial({}),
    period_spend_limit: [],
    period_can_spend: [],
    period_reset: Timestamp.fromPartial({})
  };
}
export const PeriodicAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.period_spend_limit) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.period_can_spend) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.period_reset !== undefined) {
      Timestamp.encode(message.period_reset, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.period_spend_limit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.period_can_spend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.period_reset = Timestamp.decode(reader, reader.uint32());
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
      basic: isSet(object.basic) ? BasicAllowance.fromJSON(object.basic) : undefined,
      period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
      period_spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.period_spend_limit) ? object.period_spend_limit.map(e => Coin.fromJSON(e)) : [],
      period_can_spend: Array.isArray(object === null || object === void 0 ? void 0 : object.period_can_spend) ? object.period_can_spend.map(e => Coin.fromJSON(e)) : [],
      period_reset: isSet(object.period_reset) ? fromJsonTimestamp(object.period_reset) : undefined
    };
  },
  fromPartial(object) {
    var _object$period_spend_, _object$period_can_sp;
    const message = createBasePeriodicAllowance();
    message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    message.period_spend_limit = ((_object$period_spend_ = object.period_spend_limit) === null || _object$period_spend_ === void 0 ? void 0 : _object$period_spend_.map(e => Coin.fromPartial(e))) || [];
    message.period_can_spend = ((_object$period_can_sp = object.period_can_spend) === null || _object$period_can_sp === void 0 ? void 0 : _object$period_can_sp.map(e => Coin.fromPartial(e))) || [];
    message.period_reset = object.period_reset !== undefined && object.period_reset !== null ? Timestamp.fromPartial(object.period_reset) : undefined;
    return message;
  }
};
function createBaseAllowedMsgAllowance() {
  return {
    allowance: Any.fromPartial({}),
    allowed_messages: []
  };
}
export const AllowedMsgAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowed_messages) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowed_messages.push(reader.string());
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
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
      allowed_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_messages) ? object.allowed_messages.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$allowed_messa;
    const message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    message.allowed_messages = ((_object$allowed_messa = object.allowed_messages) === null || _object$allowed_messa === void 0 ? void 0 : _object$allowed_messa.map(e => e)) || [];
    return message;
  }
};
function createBaseGrant() {
  return {
    granter: "",
    grantee: "",
    allowance: Any.fromPartial({})
  };
}
export const Grant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
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
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
    };
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  }
};