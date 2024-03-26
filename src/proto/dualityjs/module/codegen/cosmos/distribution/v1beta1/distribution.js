import { DecCoin, Coin } from "../../base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
/** Params defines the set of params for the distribution module. */

/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */

/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

/** FeePool is the global fee pool for distribution. */

/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 * 
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
/** @deprecated */
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
function createBaseParams() {
  return {
    community_tax: "",
    base_proposer_reward: "",
    bonus_proposer_reward: "",
    withdraw_addr_enabled: false
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.community_tax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.community_tax, 18).atomics);
    }
    if (message.base_proposer_reward !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.base_proposer_reward, 18).atomics);
    }
    if (message.bonus_proposer_reward !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.bonus_proposer_reward, 18).atomics);
    }
    if (message.withdraw_addr_enabled === true) {
      writer.uint32(32).bool(message.withdraw_addr_enabled);
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
          message.community_tax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.base_proposer_reward = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bonus_proposer_reward = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.withdraw_addr_enabled = reader.bool();
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
      community_tax: isSet(object.community_tax) ? String(object.community_tax) : "",
      base_proposer_reward: isSet(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
      bonus_proposer_reward: isSet(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
      withdraw_addr_enabled: isSet(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false
    };
  },
  fromPartial(object) {
    var _object$community_tax, _object$base_proposer, _object$bonus_propose, _object$withdraw_addr;
    const message = createBaseParams();
    message.community_tax = (_object$community_tax = object.community_tax) !== null && _object$community_tax !== void 0 ? _object$community_tax : "";
    message.base_proposer_reward = (_object$base_proposer = object.base_proposer_reward) !== null && _object$base_proposer !== void 0 ? _object$base_proposer : "";
    message.bonus_proposer_reward = (_object$bonus_propose = object.bonus_proposer_reward) !== null && _object$bonus_propose !== void 0 ? _object$bonus_propose : "";
    message.withdraw_addr_enabled = (_object$withdraw_addr = object.withdraw_addr_enabled) !== null && _object$withdraw_addr !== void 0 ? _object$withdraw_addr : false;
    return message;
  }
};
function createBaseValidatorHistoricalRewards() {
  return {
    cumulative_reward_ratio: [],
    reference_count: 0
  };
}
export const ValidatorHistoricalRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.cumulative_reward_ratio) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.reference_count !== 0) {
      writer.uint32(16).uint32(message.reference_count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulative_reward_ratio.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.reference_count = reader.uint32();
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
      cumulative_reward_ratio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map(e => DecCoin.fromJSON(e)) : [],
      reference_count: isSet(object.reference_count) ? Number(object.reference_count) : 0
    };
  },
  fromPartial(object) {
    var _object$cumulative_re, _object$reference_cou;
    const message = createBaseValidatorHistoricalRewards();
    message.cumulative_reward_ratio = ((_object$cumulative_re = object.cumulative_reward_ratio) === null || _object$cumulative_re === void 0 ? void 0 : _object$cumulative_re.map(e => DecCoin.fromPartial(e))) || [];
    message.reference_count = (_object$reference_cou = object.reference_count) !== null && _object$reference_cou !== void 0 ? _object$reference_cou : 0;
    return message;
  }
};
function createBaseValidatorCurrentRewards() {
  return {
    rewards: [],
    period: Long.UZERO
  };
}
export const ValidatorCurrentRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64();
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(e => DecCoin.fromJSON(e)) : [],
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$rewards;
    const message = createBaseValidatorCurrentRewards();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(e => DecCoin.fromPartial(e))) || [];
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  }
};
function createBaseValidatorAccumulatedCommission() {
  return {
    commission: []
  };
}
export const ValidatorAccumulatedCommission = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.commission) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
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
      commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$commission;
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorOutstandingRewards() {
  return {
    rewards: []
  };
}
export const ValidatorOutstandingRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$rewards2;
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorSlashEvent() {
  return {
    validator_period: Long.UZERO,
    fraction: ""
  };
}
export const ValidatorSlashEvent = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.validator_period.isZero()) {
      writer.uint32(8).uint64(message.validator_period);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.fraction, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_period = reader.uint64();
          break;
        case 2:
          message.fraction = Decimal.fromAtomics(reader.string(), 18).toString();
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
      validator_period: isSet(object.validator_period) ? Long.fromValue(object.validator_period) : Long.UZERO,
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  fromPartial(object) {
    var _object$fraction;
    const message = createBaseValidatorSlashEvent();
    message.validator_period = object.validator_period !== undefined && object.validator_period !== null ? Long.fromValue(object.validator_period) : Long.UZERO;
    message.fraction = (_object$fraction = object.fraction) !== null && _object$fraction !== void 0 ? _object$fraction : "";
    return message;
  }
};
function createBaseValidatorSlashEvents() {
  return {
    validator_slash_events: []
  };
}
export const ValidatorSlashEvents = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validator_slash_events) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_slash_events.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
      validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events) ? object.validator_slash_events.map(e => ValidatorSlashEvent.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$validator_sla;
    const message = createBaseValidatorSlashEvents();
    message.validator_slash_events = ((_object$validator_sla = object.validator_slash_events) === null || _object$validator_sla === void 0 ? void 0 : _object$validator_sla.map(e => ValidatorSlashEvent.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFeePool() {
  return {
    community_pool: []
  };
}
export const FeePool = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.community_pool) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community_pool.push(DecCoin.decode(reader, reader.uint32()));
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
      community_pool: Array.isArray(object === null || object === void 0 ? void 0 : object.community_pool) ? object.community_pool.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$community_poo;
    const message = createBaseFeePool();
    message.community_pool = ((_object$community_poo = object.community_pool) === null || _object$community_poo === void 0 ? void 0 : _object$community_poo.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommunityPoolSpendProposal() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
export const CommunityPoolSpendProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$recipient, _object$amount;
    const message = createBaseCommunityPoolSpendProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.recipient = (_object$recipient = object.recipient) !== null && _object$recipient !== void 0 ? _object$recipient : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDelegatorStartingInfo() {
  return {
    previous_period: Long.UZERO,
    stake: "",
    height: Long.UZERO
  };
}
export const DelegatorStartingInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.previous_period.isZero()) {
      writer.uint32(8).uint64(message.previous_period);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.stake, 18).atomics);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previous_period = reader.uint64();
          break;
        case 2:
          message.stake = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.height = reader.uint64();
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
      previous_period: isSet(object.previous_period) ? Long.fromValue(object.previous_period) : Long.UZERO,
      stake: isSet(object.stake) ? String(object.stake) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$stake;
    const message = createBaseDelegatorStartingInfo();
    message.previous_period = object.previous_period !== undefined && object.previous_period !== null ? Long.fromValue(object.previous_period) : Long.UZERO;
    message.stake = (_object$stake = object.stake) !== null && _object$stake !== void 0 ? _object$stake : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  }
};
function createBaseDelegationDelegatorReward() {
  return {
    validator_address: "",
    reward: []
  };
}
export const DelegationDelegatorReward = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.reward) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
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
      reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward) ? object.reward.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$validator_add, _object$reward;
    const message = createBaseDelegationDelegatorReward();
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    message.reward = ((_object$reward = object.reward) === null || _object$reward === void 0 ? void 0 : _object$reward.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
export const CommunityPoolSpendProposalWithDeposit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object) {
    var _object$title2, _object$description2, _object$recipient2, _object$amount2, _object$deposit;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.recipient = (_object$recipient2 = object.recipient) !== null && _object$recipient2 !== void 0 ? _object$recipient2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    message.deposit = (_object$deposit = object.deposit) !== null && _object$deposit !== void 0 ? _object$deposit : "";
    return message;
  }
};