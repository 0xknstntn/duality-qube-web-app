import { DecCoin } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool } from "./distribution";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */

/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */

/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */

/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */

/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */

/** DelegatorStartingInfoRecord used for import / export via genesis json. */

/** ValidatorSlashEventRecord is used for import / export via genesis json. */

/** GenesisState defines the distribution module's genesis state. */

function createBaseDelegatorWithdrawInfo() {
  return {
    delegator_address: "",
    withdraw_address: ""
  };
}
export const DelegatorWithdrawInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.withdraw_address !== "") {
      writer.uint32(18).string(message.withdraw_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.withdraw_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add, _object$withdraw_addr;
    const message = createBaseDelegatorWithdrawInfo();
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.withdraw_address = (_object$withdraw_addr = object.withdraw_address) !== null && _object$withdraw_addr !== void 0 ? _object$withdraw_addr : "";
    return message;
  }
};
function createBaseValidatorOutstandingRewardsRecord() {
  return {
    validator_address: "",
    outstanding_rewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.outstanding_rewards) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards) ? object.outstanding_rewards.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$validator_add, _object$outstanding_r;
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    message.outstanding_rewards = ((_object$outstanding_r = object.outstanding_rewards) === null || _object$outstanding_r === void 0 ? void 0 : _object$outstanding_r.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorAccumulatedCommissionRecord() {
  return {
    validator_address: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add2;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  }
};
function createBaseValidatorHistoricalRewardsRecord() {
  return {
    validator_address: "",
    period: Long.UZERO,
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add3;
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  }
};
function createBaseValidatorCurrentRewardsRecord() {
  return {
    validator_address: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add4;
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validator_address = (_object$validator_add4 = object.validator_address) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  }
};
function createBaseDelegatorStartingInfoRecord() {
  return {
    delegator_address: "",
    validator_address: "",
    starting_info: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.starting_info !== undefined) {
      DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add2, _object$validator_add5;
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_address = (_object$validator_add5 = object.validator_address) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    message.starting_info = object.starting_info !== undefined && object.starting_info !== null ? DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
    return message;
  }
};
function createBaseValidatorSlashEventRecord() {
  return {
    validator_address: "",
    height: Long.UZERO,
    period: Long.UZERO,
    validator_slash_event: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).uint64(message.height);
    }
    if (!message.period.isZero()) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validator_slash_event !== undefined) {
      ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      validator_slash_event: isSet(object.validator_slash_event) ? ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add6;
    const message = createBaseValidatorSlashEventRecord();
    message.validator_address = (_object$validator_add6 = object.validator_address) !== null && _object$validator_add6 !== void 0 ? _object$validator_add6 : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.validator_slash_event = object.validator_slash_event !== undefined && object.validator_slash_event !== null ? ValidatorSlashEvent.fromPartial(object.validator_slash_event) : undefined;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    fee_pool: FeePool.fromPartial({}),
    delegator_withdraw_infos: [],
    previous_proposer: "",
    outstanding_rewards: [],
    validator_accumulated_commissions: [],
    validator_historical_rewards: [],
    validator_current_rewards: [],
    delegator_starting_infos: [],
    validator_slash_events: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee_pool !== undefined) {
      FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegator_withdraw_infos) {
      DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.previous_proposer !== "") {
      writer.uint32(34).string(message.previous_proposer);
    }
    for (const v of message.outstanding_rewards) {
      ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validator_accumulated_commissions) {
      ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validator_historical_rewards) {
      ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validator_current_rewards) {
      ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegator_starting_infos) {
      DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validator_slash_events) {
      ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee_pool = FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previous_proposer = reader.string();
          break;
        case 5:
          message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      fee_pool: isSet(object.fee_pool) ? FeePool.fromJSON(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map(e => DelegatorWithdrawInfo.fromJSON(e)) : [],
      previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
      outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards) ? object.outstanding_rewards.map(e => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
      validator_accumulated_commissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map(e => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
      validator_historical_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_historical_rewards) ? object.validator_historical_rewards.map(e => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
      validator_current_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_current_rewards) ? object.validator_current_rewards.map(e => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
      delegator_starting_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_starting_infos) ? object.delegator_starting_infos.map(e => DelegatorStartingInfoRecord.fromJSON(e)) : [],
      validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events) ? object.validator_slash_events.map(e => ValidatorSlashEventRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$delegator_wit, _object$previous_prop, _object$outstanding_r2, _object$validator_acc, _object$validator_his, _object$validator_cur, _object$delegator_sta, _object$validator_sla;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? FeePool.fromPartial(object.fee_pool) : undefined;
    message.delegator_withdraw_infos = ((_object$delegator_wit = object.delegator_withdraw_infos) === null || _object$delegator_wit === void 0 ? void 0 : _object$delegator_wit.map(e => DelegatorWithdrawInfo.fromPartial(e))) || [];
    message.previous_proposer = (_object$previous_prop = object.previous_proposer) !== null && _object$previous_prop !== void 0 ? _object$previous_prop : "";
    message.outstanding_rewards = ((_object$outstanding_r2 = object.outstanding_rewards) === null || _object$outstanding_r2 === void 0 ? void 0 : _object$outstanding_r2.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e))) || [];
    message.validator_accumulated_commissions = ((_object$validator_acc = object.validator_accumulated_commissions) === null || _object$validator_acc === void 0 ? void 0 : _object$validator_acc.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e))) || [];
    message.validator_historical_rewards = ((_object$validator_his = object.validator_historical_rewards) === null || _object$validator_his === void 0 ? void 0 : _object$validator_his.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e))) || [];
    message.validator_current_rewards = ((_object$validator_cur = object.validator_current_rewards) === null || _object$validator_cur === void 0 ? void 0 : _object$validator_cur.map(e => ValidatorCurrentRewardsRecord.fromPartial(e))) || [];
    message.delegator_starting_infos = ((_object$delegator_sta = object.delegator_starting_infos) === null || _object$delegator_sta === void 0 ? void 0 : _object$delegator_sta.map(e => DelegatorStartingInfoRecord.fromPartial(e))) || [];
    message.validator_slash_events = ((_object$validator_sla = object.validator_slash_events) === null || _object$validator_sla === void 0 ? void 0 : _object$validator_sla.map(e => ValidatorSlashEventRecord.fromPartial(e))) || [];
    return message;
  }
};