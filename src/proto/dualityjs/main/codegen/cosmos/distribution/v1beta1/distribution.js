"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorHistoricalRewards = exports.ValidatorCurrentRewards = exports.ValidatorAccumulatedCommission = exports.Params = exports.FeePool = exports.DelegatorStartingInfo = exports.DelegationDelegatorReward = exports.CommunityPoolSpendProposalWithDeposit = exports.CommunityPoolSpendProposal = void 0;
var _coin = require("../../base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _math = require("@cosmjs/math");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.community_tax !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.community_tax, 18).atomics);
    }
    if (message.base_proposer_reward !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.base_proposer_reward, 18).atomics);
    }
    if (message.bonus_proposer_reward !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.bonus_proposer_reward, 18).atomics);
    }
    if (message.withdraw_addr_enabled === true) {
      writer.uint32(32).bool(message.withdraw_addr_enabled);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community_tax = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.base_proposer_reward = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bonus_proposer_reward = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromJSON: function fromJSON(object) {
    return {
      community_tax: (0, _helpers.isSet)(object.community_tax) ? String(object.community_tax) : "",
      base_proposer_reward: (0, _helpers.isSet)(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
      bonus_proposer_reward: (0, _helpers.isSet)(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
      withdraw_addr_enabled: (0, _helpers.isSet)(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$community_tax, _object$base_proposer, _object$bonus_propose, _object$withdraw_addr;
    var message = createBaseParams();
    message.community_tax = (_object$community_tax = object.community_tax) !== null && _object$community_tax !== void 0 ? _object$community_tax : "";
    message.base_proposer_reward = (_object$base_proposer = object.base_proposer_reward) !== null && _object$base_proposer !== void 0 ? _object$base_proposer : "";
    message.bonus_proposer_reward = (_object$bonus_propose = object.bonus_proposer_reward) !== null && _object$bonus_propose !== void 0 ? _object$bonus_propose : "";
    message.withdraw_addr_enabled = (_object$withdraw_addr = object.withdraw_addr_enabled) !== null && _object$withdraw_addr !== void 0 ? _object$withdraw_addr : false;
    return message;
  }
};
exports.Params = Params;
function createBaseValidatorHistoricalRewards() {
  return {
    cumulative_reward_ratio: [],
    reference_count: 0
  };
}
var ValidatorHistoricalRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.cumulative_reward_ratio),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.reference_count !== 0) {
      writer.uint32(16).uint32(message.reference_count);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulative_reward_ratio.push(_coin.DecCoin.decode(reader, reader.uint32()));
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
  fromJSON: function fromJSON(object) {
    return {
      cumulative_reward_ratio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : [],
      reference_count: (0, _helpers.isSet)(object.reference_count) ? Number(object.reference_count) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$cumulative_re, _object$reference_cou;
    var message = createBaseValidatorHistoricalRewards();
    message.cumulative_reward_ratio = ((_object$cumulative_re = object.cumulative_reward_ratio) === null || _object$cumulative_re === void 0 ? void 0 : _object$cumulative_re.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    message.reference_count = (_object$reference_cou = object.reference_count) !== null && _object$reference_cou !== void 0 ? _object$reference_cou : 0;
    return message;
  }
};
exports.ValidatorHistoricalRewards = ValidatorHistoricalRewards;
function createBaseValidatorCurrentRewards() {
  return {
    rewards: [],
    period: _helpers.Long.UZERO
  };
}
var ValidatorCurrentRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.rewards),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
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
  fromJSON: function fromJSON(object) {
    return {
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : [],
      period: (0, _helpers.isSet)(object.period) ? _helpers.Long.fromValue(object.period) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$rewards;
    var message = createBaseValidatorCurrentRewards();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    message.period = object.period !== undefined && object.period !== null ? _helpers.Long.fromValue(object.period) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ValidatorCurrentRewards = ValidatorCurrentRewards;
function createBaseValidatorAccumulatedCommission() {
  return {
    commission: []
  };
}
var ValidatorAccumulatedCommission = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.commission),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$commission;
    var message = createBaseValidatorAccumulatedCommission();
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorAccumulatedCommission = ValidatorAccumulatedCommission;
function createBaseValidatorOutstandingRewards() {
  return {
    rewards: []
  };
}
var ValidatorOutstandingRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.rewards),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$rewards2;
    var message = createBaseValidatorOutstandingRewards();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorOutstandingRewards = ValidatorOutstandingRewards;
function createBaseValidatorSlashEvent() {
  return {
    validator_period: _helpers.Long.UZERO,
    fraction: ""
  };
}
var ValidatorSlashEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.validator_period.isZero()) {
      writer.uint32(8).uint64(message.validator_period);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.fraction, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_period = reader.uint64();
          break;
        case 2:
          message.fraction = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validator_period: (0, _helpers.isSet)(object.validator_period) ? _helpers.Long.fromValue(object.validator_period) : _helpers.Long.UZERO,
      fraction: (0, _helpers.isSet)(object.fraction) ? String(object.fraction) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fraction;
    var message = createBaseValidatorSlashEvent();
    message.validator_period = object.validator_period !== undefined && object.validator_period !== null ? _helpers.Long.fromValue(object.validator_period) : _helpers.Long.UZERO;
    message.fraction = (_object$fraction = object.fraction) !== null && _object$fraction !== void 0 ? _object$fraction : "";
    return message;
  }
};
exports.ValidatorSlashEvent = ValidatorSlashEvent;
function createBaseValidatorSlashEvents() {
  return {
    validator_slash_events: []
  };
}
var ValidatorSlashEvents = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.validator_slash_events),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events) ? object.validator_slash_events.map(function (e) {
        return ValidatorSlashEvent.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_sla;
    var message = createBaseValidatorSlashEvents();
    message.validator_slash_events = ((_object$validator_sla = object.validator_slash_events) === null || _object$validator_sla === void 0 ? void 0 : _object$validator_sla.map(function (e) {
      return ValidatorSlashEvent.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorSlashEvents = ValidatorSlashEvents;
function createBaseFeePool() {
  return {
    community_pool: []
  };
}
var FeePool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.community_pool),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFeePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community_pool.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      community_pool: Array.isArray(object === null || object === void 0 ? void 0 : object.community_pool) ? object.community_pool.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$community_poo;
    var message = createBaseFeePool();
    message.community_pool = ((_object$community_poo = object.community_pool) === null || _object$community_poo === void 0 ? void 0 : _object$community_poo.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FeePool = FeePool;
function createBaseCommunityPoolSpendProposal() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
var CommunityPoolSpendProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    var _iterator7 = _createForOfIteratorHelper(message.amount),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      recipient: (0, _helpers.isSet)(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$description, _object$recipient, _object$amount;
    var message = createBaseCommunityPoolSpendProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.recipient = (_object$recipient = object.recipient) !== null && _object$recipient !== void 0 ? _object$recipient : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.CommunityPoolSpendProposal = CommunityPoolSpendProposal;
function createBaseDelegatorStartingInfo() {
  return {
    previous_period: _helpers.Long.UZERO,
    stake: "",
    height: _helpers.Long.UZERO
  };
}
var DelegatorStartingInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.previous_period.isZero()) {
      writer.uint32(8).uint64(message.previous_period);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.stake, 18).atomics);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previous_period = reader.uint64();
          break;
        case 2:
          message.stake = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromJSON: function fromJSON(object) {
    return {
      previous_period: (0, _helpers.isSet)(object.previous_period) ? _helpers.Long.fromValue(object.previous_period) : _helpers.Long.UZERO,
      stake: (0, _helpers.isSet)(object.stake) ? String(object.stake) : "",
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$stake;
    var message = createBaseDelegatorStartingInfo();
    message.previous_period = object.previous_period !== undefined && object.previous_period !== null ? _helpers.Long.fromValue(object.previous_period) : _helpers.Long.UZERO;
    message.stake = (_object$stake = object.stake) !== null && _object$stake !== void 0 ? _object$stake : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    return message;
  }
};
exports.DelegatorStartingInfo = DelegatorStartingInfo;
function createBaseDelegationDelegatorReward() {
  return {
    validator_address: "",
    reward: []
  };
}
var DelegationDelegatorReward = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    var _iterator8 = _createForOfIteratorHelper(message.reward),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.reward.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward) ? object.reward.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add, _object$reward;
    var message = createBaseDelegationDelegatorReward();
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    message.reward = ((_object$reward = object.reward) === null || _object$reward === void 0 ? void 0 : _object$reward.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.DelegationDelegatorReward = DelegationDelegatorReward;
function createBaseCommunityPoolSpendProposalWithDeposit() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
var CommunityPoolSpendProposalWithDeposit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      recipient: (0, _helpers.isSet)(object.recipient) ? String(object.recipient) : "",
      amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : "",
      deposit: (0, _helpers.isSet)(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title2, _object$description2, _object$recipient2, _object$amount2, _object$deposit;
    var message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.recipient = (_object$recipient2 = object.recipient) !== null && _object$recipient2 !== void 0 ? _object$recipient2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    message.deposit = (_object$deposit = object.deposit) !== null && _object$deposit !== void 0 ? _object$deposit : "";
    return message;
  }
};
exports.CommunityPoolSpendProposalWithDeposit = CommunityPoolSpendProposalWithDeposit;