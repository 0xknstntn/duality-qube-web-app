import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */

/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */

/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */

/** Period defines a length of time and amount of coins that will vest. */

/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */

/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseBaseVestingAccount() {
  return {
    base_account: BaseAccount.fromPartial({}),
    original_vesting: [],
    delegated_free: [],
    delegated_vesting: [],
    end_time: Long.ZERO
  };
}
export const BaseVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.original_vesting) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegated_free) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegated_vesting) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (!message.end_time.isZero()) {
      writer.uint32(40).int64(message.end_time);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.original_vesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegated_free.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegated_vesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.end_time = reader.int64();
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
      base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      original_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.original_vesting) ? object.original_vesting.map(e => Coin.fromJSON(e)) : [],
      delegated_free: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_free) ? object.delegated_free.map(e => Coin.fromJSON(e)) : [],
      delegated_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_vesting) ? object.delegated_vesting.map(e => Coin.fromJSON(e)) : [],
      end_time: isSet(object.end_time) ? Long.fromValue(object.end_time) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$original_vest, _object$delegated_fre, _object$delegated_ves;
    const message = createBaseBaseVestingAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.original_vesting = ((_object$original_vest = object.original_vesting) === null || _object$original_vest === void 0 ? void 0 : _object$original_vest.map(e => Coin.fromPartial(e))) || [];
    message.delegated_free = ((_object$delegated_fre = object.delegated_free) === null || _object$delegated_fre === void 0 ? void 0 : _object$delegated_fre.map(e => Coin.fromPartial(e))) || [];
    message.delegated_vesting = ((_object$delegated_ves = object.delegated_vesting) === null || _object$delegated_ves === void 0 ? void 0 : _object$delegated_ves.map(e => Coin.fromPartial(e))) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? Long.fromValue(object.end_time) : Long.ZERO;
    return message;
  }
};
function createBaseContinuousVestingAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({}),
    start_time: Long.ZERO
  };
}
export const ContinuousVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    if (!message.start_time.isZero()) {
      writer.uint32(16).int64(message.start_time);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.start_time = reader.int64();
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
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
      start_time: isSet(object.start_time) ? Long.fromValue(object.start_time) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseContinuousVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Long.fromValue(object.start_time) : Long.ZERO;
    return message;
  }
};
function createBaseDelayedVestingAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({})
  };
}
export const DelayedVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
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
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseDelayedVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  }
};
function createBasePeriod() {
  return {
    length: Long.ZERO,
    amount: []
  };
}
export const Period = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.length.isZero()) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
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
      length: isSet(object.length) ? Long.fromValue(object.length) : Long.ZERO,
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$amount;
    const message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? Long.fromValue(object.length) : Long.ZERO;
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBasePeriodicVestingAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({}),
    start_time: Long.ZERO,
    vesting_periods: []
  };
}
export const PeriodicVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    if (!message.start_time.isZero()) {
      writer.uint32(16).int64(message.start_time);
    }
    for (const v of message.vesting_periods) {
      Period.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.start_time = reader.int64();
          break;
        case 3:
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
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
      start_time: isSet(object.start_time) ? Long.fromValue(object.start_time) : Long.ZERO,
      vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods) ? object.vesting_periods.map(e => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$vesting_perio;
    const message = createBasePeriodicVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Long.fromValue(object.start_time) : Long.ZERO;
    message.vesting_periods = ((_object$vesting_perio = object.vesting_periods) === null || _object$vesting_perio === void 0 ? void 0 : _object$vesting_perio.map(e => Period.fromPartial(e))) || [];
    return message;
  }
};
function createBasePermanentLockedAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({})
  };
}
export const PermanentLockedAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
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
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
    };
  },
  fromPartial(object) {
    const message = createBasePermanentLockedAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  }
};