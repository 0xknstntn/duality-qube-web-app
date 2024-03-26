import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseMsgCreateVestingAccount() {
  return {
    from_address: "",
    to_address: "",
    amount: [],
    end_time: Long.ZERO,
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (!message.end_time.isZero()) {
      writer.uint32(32).int64(message.end_time);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.end_time = reader.int64();
          break;
        case 5:
          message.delayed = reader.bool();
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
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : [],
      end_time: isSet(object.end_time) ? Long.fromValue(object.end_time) : Long.ZERO,
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  fromPartial(object) {
    var _object$from_address, _object$to_address, _object$amount, _object$delayed;
    const message = createBaseMsgCreateVestingAccount();
    message.from_address = (_object$from_address = object.from_address) !== null && _object$from_address !== void 0 ? _object$from_address : "";
    message.to_address = (_object$to_address = object.to_address) !== null && _object$to_address !== void 0 ? _object$to_address : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? Long.fromValue(object.end_time) : Long.ZERO;
    message.delayed = (_object$delayed = object.delayed) !== null && _object$delayed !== void 0 ? _object$delayed : false;
    return message;
  }
};
function createBaseMsgCreateVestingAccountResponse() {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
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
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccount() {
  return {
    from_address: "",
    to_address: "",
    amount: []
  };
}
export const MsgCreatePermanentLockedAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$from_address2, _object$to_address2, _object$amount2;
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.from_address = (_object$from_address2 = object.from_address) !== null && _object$from_address2 !== void 0 ? _object$from_address2 : "";
    message.to_address = (_object$to_address2 = object.to_address) !== null && _object$to_address2 !== void 0 ? _object$to_address2 : "";
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
  return {};
}
export const MsgCreatePermanentLockedAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccount() {
  return {
    from_address: "",
    to_address: "",
    start_time: Long.ZERO,
    vesting_periods: []
  };
}
export const MsgCreatePeriodicVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    if (!message.start_time.isZero()) {
      writer.uint32(24).int64(message.start_time);
    }
    for (const v of message.vesting_periods) {
      Period.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.start_time = reader.int64();
          break;
        case 4:
          message.vesting_periods.push(Period.decode(reader, reader.uint32()));
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
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      start_time: isSet(object.start_time) ? Long.fromValue(object.start_time) : Long.ZERO,
      vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods) ? object.vesting_periods.map(e => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$from_address3, _object$to_address3, _object$vesting_perio;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.from_address = (_object$from_address3 = object.from_address) !== null && _object$from_address3 !== void 0 ? _object$from_address3 : "";
    message.to_address = (_object$to_address3 = object.to_address) !== null && _object$to_address3 !== void 0 ? _object$to_address3 : "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Long.fromValue(object.start_time) : Long.ZERO;
    message.vesting_periods = ((_object$vesting_perio = object.vesting_periods) === null || _object$vesting_perio === void 0 ? void 0 : _object$vesting_perio.map(e => Period.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
  return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }
};