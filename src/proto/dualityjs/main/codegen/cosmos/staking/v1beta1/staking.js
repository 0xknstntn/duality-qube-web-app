"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorUpdates = exports.Validator = exports.ValAddresses = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.RedelegationEntry = exports.Redelegation = exports.Pool = exports.Params = exports.Infraction = exports.HistoricalInfo = exports.Description = exports.DelegationResponse = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.CommissionRates = exports.Commission = exports.BondStatus = void 0;
exports.bondStatusFromJSON = bondStatusFromJSON;
exports.bondStatusToJSON = bondStatusToJSON;
exports.infractionFromJSON = infractionFromJSON;
exports.infractionToJSON = infractionToJSON;
var _types = require("../../../tendermint/types/types");
var _timestamp = require("../../../google/protobuf/timestamp");
var _any = require("../../../google/protobuf/any");
var _duration = require("../../../google/protobuf/duration");
var _coin = require("../../base/v1beta1/coin");
var _types2 = require("../../../tendermint/abci/types");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _math = require("@cosmjs/math");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** BondStatus is the status of a validator. */
var BondStatus = /*#__PURE__*/function (BondStatus) {
  BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BondStatus;
}({});
exports.BondStatus = BondStatus;
function bondStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
function bondStatusToJSON(object) {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Infraction indicates the infraction a validator commited. */
var Infraction = /*#__PURE__*/function (Infraction) {
  Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
  Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
  Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
  Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Infraction;
}({});
exports.Infraction = Infraction;
function infractionFromJSON(object) {
  switch (object) {
    case 0:
    case "INFRACTION_UNSPECIFIED":
      return Infraction.INFRACTION_UNSPECIFIED;
    case 1:
    case "INFRACTION_DOUBLE_SIGN":
      return Infraction.INFRACTION_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_DOWNTIME":
      return Infraction.INFRACTION_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Infraction.UNRECOGNIZED;
  }
}
function infractionToJSON(object) {
  switch (object) {
    case Infraction.INFRACTION_UNSPECIFIED:
      return "INFRACTION_UNSPECIFIED";
    case Infraction.INFRACTION_DOUBLE_SIGN:
      return "INFRACTION_DOUBLE_SIGN";
    case Infraction.INFRACTION_DOWNTIME:
      return "INFRACTION_DOWNTIME";
    case Infraction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */

/** Commission defines commission parameters for a given validator. */

/** Description defines a validator description. */

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */

/** ValAddresses defines a repeated set of validator addresses. */

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */

/** DVPairs defines an array of DVPair objects. */

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */

/** DVVTriplets defines an array of DVVTriplet objects. */

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */

/** RedelegationEntry defines a redelegation object with relevant metadata. */

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */

/** Params defines the parameters for the x/staking module. */

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */

/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 */

function createBaseHistoricalInfo() {
  return {
    header: _types.Header.fromPartial({}),
    valset: []
  };
}
var HistoricalInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.valset),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
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
      header: (0, _helpers.isSet)(object.header) ? _types.Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object === null || object === void 0 ? void 0 : object.valset) ? object.valset.map(function (e) {
        return Validator.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$valset;
    var message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.valset = ((_object$valset = object.valset) === null || _object$valset === void 0 ? void 0 : _object$valset.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.HistoricalInfo = HistoricalInfo;
function createBaseCommissionRates() {
  return {
    rate: "",
    max_rate: "",
    max_change_rate: ""
  };
}
var CommissionRates = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rate !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.max_rate !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.max_rate, 18).atomics);
    }
    if (message.max_change_rate !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.max_change_rate, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommissionRates();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.max_rate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.max_change_rate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
      rate: (0, _helpers.isSet)(object.rate) ? String(object.rate) : "",
      max_rate: (0, _helpers.isSet)(object.max_rate) ? String(object.max_rate) : "",
      max_change_rate: (0, _helpers.isSet)(object.max_change_rate) ? String(object.max_change_rate) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$rate, _object$max_rate, _object$max_change_ra;
    var message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) !== null && _object$rate !== void 0 ? _object$rate : "";
    message.max_rate = (_object$max_rate = object.max_rate) !== null && _object$max_rate !== void 0 ? _object$max_rate : "";
    message.max_change_rate = (_object$max_change_ra = object.max_change_rate) !== null && _object$max_change_ra !== void 0 ? _object$max_change_ra : "";
    return message;
  }
};
exports.CommissionRates = CommissionRates;
function createBaseCommission() {
  return {
    commission_rates: CommissionRates.fromPartial({}),
    update_time: _timestamp.Timestamp.fromPartial({})
  };
}
var Commission = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.commission_rates !== undefined) {
      CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      _timestamp.Timestamp.encode(message.update_time, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission_rates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.update_time = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      commission_rates: (0, _helpers.isSet)(object.commission_rates) ? CommissionRates.fromJSON(object.commission_rates) : undefined,
      update_time: (0, _helpers.isSet)(object.update_time) ? (0, _helpers.fromJsonTimestamp)(object.update_time) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseCommission();
    message.commission_rates = object.commission_rates !== undefined && object.commission_rates !== null ? CommissionRates.fromPartial(object.commission_rates) : undefined;
    message.update_time = object.update_time !== undefined && object.update_time !== null ? _timestamp.Timestamp.fromPartial(object.update_time) : undefined;
    return message;
  }
};
exports.Commission = Commission;
function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    security_contact: "",
    details: ""
  };
}
var Description = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.security_contact !== "") {
      writer.uint32(34).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescription();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.security_contact = reader.string();
          break;
        case 5:
          message.details = reader.string();
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
      moniker: (0, _helpers.isSet)(object.moniker) ? String(object.moniker) : "",
      identity: (0, _helpers.isSet)(object.identity) ? String(object.identity) : "",
      website: (0, _helpers.isSet)(object.website) ? String(object.website) : "",
      security_contact: (0, _helpers.isSet)(object.security_contact) ? String(object.security_contact) : "",
      details: (0, _helpers.isSet)(object.details) ? String(object.details) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$security_cont, _object$details;
    var message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) !== null && _object$identity !== void 0 ? _object$identity : "";
    message.website = (_object$website = object.website) !== null && _object$website !== void 0 ? _object$website : "";
    message.security_contact = (_object$security_cont = object.security_contact) !== null && _object$security_cont !== void 0 ? _object$security_cont : "";
    message.details = (_object$details = object.details) !== null && _object$details !== void 0 ? _object$details : "";
    return message;
  }
};
exports.Description = Description;
function createBaseValidator() {
  return {
    operator_address: "",
    consensus_pubkey: _any.Any.fromPartial({}),
    jailed: false,
    status: 0,
    tokens: "",
    delegator_shares: "",
    description: Description.fromPartial({}),
    unbonding_height: _helpers.Long.ZERO,
    unbonding_time: _timestamp.Timestamp.fromPartial({}),
    commission: Commission.fromPartial({}),
    min_self_delegation: "",
    unbonding_on_hold_ref_count: _helpers.Long.ZERO,
    unbonding_ids: []
  };
}
var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    if (message.consensus_pubkey !== undefined) {
      _any.Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegator_shares !== "") {
      writer.uint32(50).string(_math.Decimal.fromUserInput(message.delegator_shares, 18).atomics);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (!message.unbonding_height.isZero()) {
      writer.uint32(64).int64(message.unbonding_height);
    }
    if (message.unbonding_time !== undefined) {
      _timestamp.Timestamp.encode(message.unbonding_time, writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(90).string(message.min_self_delegation);
    }
    if (!message.unbonding_on_hold_ref_count.isZero()) {
      writer.uint32(96).int64(message.unbonding_on_hold_ref_count);
    }
    writer.uint32(106).fork();
    var _iterator2 = _createForOfIteratorHelper(message.unbonding_ids),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;
        case 2:
          message.consensus_pubkey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegator_shares = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbonding_height = reader.int64();
          break;
        case 9:
          message.unbonding_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.min_self_delegation = reader.string();
          break;
        case 12:
          message.unbonding_on_hold_ref_count = reader.int64();
          break;
        case 13:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbonding_ids.push(reader.uint64());
            }
          } else {
            message.unbonding_ids.push(reader.uint64());
          }
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
      operator_address: (0, _helpers.isSet)(object.operator_address) ? String(object.operator_address) : "",
      consensus_pubkey: (0, _helpers.isSet)(object.consensus_pubkey) ? _any.Any.fromJSON(object.consensus_pubkey) : undefined,
      jailed: (0, _helpers.isSet)(object.jailed) ? Boolean(object.jailed) : false,
      status: (0, _helpers.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: (0, _helpers.isSet)(object.tokens) ? String(object.tokens) : "",
      delegator_shares: (0, _helpers.isSet)(object.delegator_shares) ? String(object.delegator_shares) : "",
      description: (0, _helpers.isSet)(object.description) ? Description.fromJSON(object.description) : undefined,
      unbonding_height: (0, _helpers.isSet)(object.unbonding_height) ? _helpers.Long.fromValue(object.unbonding_height) : _helpers.Long.ZERO,
      unbonding_time: (0, _helpers.isSet)(object.unbonding_time) ? (0, _helpers.fromJsonTimestamp)(object.unbonding_time) : undefined,
      commission: (0, _helpers.isSet)(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      min_self_delegation: (0, _helpers.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      unbonding_on_hold_ref_count: (0, _helpers.isSet)(object.unbonding_on_hold_ref_count) ? _helpers.Long.fromValue(object.unbonding_on_hold_ref_count) : _helpers.Long.ZERO,
      unbonding_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_ids) ? object.unbonding_ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$operator_addr, _object$jailed, _object$status, _object$tokens, _object$delegator_sha, _object$min_self_dele, _object$unbonding_ids;
    var message = createBaseValidator();
    message.operator_address = (_object$operator_addr = object.operator_address) !== null && _object$operator_addr !== void 0 ? _object$operator_addr : "";
    message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? _any.Any.fromPartial(object.consensus_pubkey) : undefined;
    message.jailed = (_object$jailed = object.jailed) !== null && _object$jailed !== void 0 ? _object$jailed : false;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tokens = (_object$tokens = object.tokens) !== null && _object$tokens !== void 0 ? _object$tokens : "";
    message.delegator_shares = (_object$delegator_sha = object.delegator_shares) !== null && _object$delegator_sha !== void 0 ? _object$delegator_sha : "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? _helpers.Long.fromValue(object.unbonding_height) : _helpers.Long.ZERO;
    message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? _timestamp.Timestamp.fromPartial(object.unbonding_time) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.min_self_delegation = (_object$min_self_dele = object.min_self_delegation) !== null && _object$min_self_dele !== void 0 ? _object$min_self_dele : "";
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? _helpers.Long.fromValue(object.unbonding_on_hold_ref_count) : _helpers.Long.ZERO;
    message.unbonding_ids = ((_object$unbonding_ids = object.unbonding_ids) === null || _object$unbonding_ids === void 0 ? void 0 : _object$unbonding_ids.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.Validator = Validator;
function createBaseValAddresses() {
  return {
    addresses: []
  };
}
var ValAddresses = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.addresses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(10).string(v);
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
    var message = createBaseValAddresses();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
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
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$addresses;
    var message = createBaseValAddresses();
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ValAddresses = ValAddresses;
function createBaseDVPair() {
  return {
    delegator_address: "",
    validator_address: ""
  };
}
var DVPair = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVPair();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add, _object$validator_add;
    var message = createBaseDVPair();
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    return message;
  }
};
exports.DVPair = DVPair;
function createBaseDVPairs() {
  return {
    pairs: []
  };
}
var DVPairs = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.pairs),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        DVPair.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseDVPairs();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
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
      pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(function (e) {
        return DVPair.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairs;
    var message = createBaseDVPairs();
    message.pairs = ((_object$pairs = object.pairs) === null || _object$pairs === void 0 ? void 0 : _object$pairs.map(function (e) {
      return DVPair.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.DVPairs = DVPairs;
function createBaseDVVTriplet() {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: ""
  };
}
var DVVTriplet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVVTriplet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: (0, _helpers.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: (0, _helpers.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add2, _object$validator_src, _object$validator_dst;
    var message = createBaseDVVTriplet();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_src_address = (_object$validator_src = object.validator_src_address) !== null && _object$validator_src !== void 0 ? _object$validator_src : "";
    message.validator_dst_address = (_object$validator_dst = object.validator_dst_address) !== null && _object$validator_dst !== void 0 ? _object$validator_dst : "";
    return message;
  }
};
exports.DVVTriplet = DVVTriplet;
function createBaseDVVTriplets() {
  return {
    triplets: []
  };
}
var DVVTriplets = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.triplets),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseDVVTriplets();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
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
      triplets: Array.isArray(object === null || object === void 0 ? void 0 : object.triplets) ? object.triplets.map(function (e) {
        return DVVTriplet.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$triplets;
    var message = createBaseDVVTriplets();
    message.triplets = ((_object$triplets = object.triplets) === null || _object$triplets === void 0 ? void 0 : _object$triplets.map(function (e) {
      return DVVTriplet.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.DVVTriplets = DVVTriplets;
function createBaseDelegation() {
  return {
    delegator_address: "",
    validator_address: "",
    shares: ""
  };
}
var Delegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.shares = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      shares: (0, _helpers.isSet)(object.shares) ? String(object.shares) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add3, _object$validator_add2, _object$shares;
    var message = createBaseDelegation();
    message.delegator_address = (_object$delegator_add3 = object.delegator_address) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.shares = (_object$shares = object.shares) !== null && _object$shares !== void 0 ? _object$shares : "";
    return message;
  }
};
exports.Delegation = Delegation;
function createBaseUnbondingDelegation() {
  return {
    delegator_address: "",
    validator_address: "",
    entries: []
  };
}
var UnbondingDelegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    var _iterator6 = _createForOfIteratorHelper(message.entries),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return UnbondingDelegationEntry.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add4, _object$validator_add3, _object$entries;
    var message = createBaseUnbondingDelegation();
    message.delegator_address = (_object$delegator_add4 = object.delegator_address) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(function (e) {
      return UnbondingDelegationEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.UnbondingDelegation = UnbondingDelegation;
function createBaseUnbondingDelegationEntry() {
  return {
    creation_height: _helpers.Long.ZERO,
    completion_time: _timestamp.Timestamp.fromPartial({}),
    initial_balance: "",
    balance: "",
    unbonding_id: _helpers.Long.UZERO,
    unbonding_on_hold_ref_count: _helpers.Long.ZERO
  };
}
var UnbondingDelegationEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.creation_height.isZero()) {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      _timestamp.Timestamp.encode(message.completion_time, writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (!message.unbonding_id.isZero()) {
      writer.uint32(40).uint64(message.unbonding_id);
    }
    if (!message.unbonding_on_hold_ref_count.isZero()) {
      writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;
        case 2:
          message.completion_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initial_balance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbonding_id = reader.uint64();
          break;
        case 6:
          message.unbonding_on_hold_ref_count = reader.int64();
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
      creation_height: (0, _helpers.isSet)(object.creation_height) ? _helpers.Long.fromValue(object.creation_height) : _helpers.Long.ZERO,
      completion_time: (0, _helpers.isSet)(object.completion_time) ? (0, _helpers.fromJsonTimestamp)(object.completion_time) : undefined,
      initial_balance: (0, _helpers.isSet)(object.initial_balance) ? String(object.initial_balance) : "",
      balance: (0, _helpers.isSet)(object.balance) ? String(object.balance) : "",
      unbonding_id: (0, _helpers.isSet)(object.unbonding_id) ? _helpers.Long.fromValue(object.unbonding_id) : _helpers.Long.UZERO,
      unbonding_on_hold_ref_count: (0, _helpers.isSet)(object.unbonding_on_hold_ref_count) ? _helpers.Long.fromValue(object.unbonding_on_hold_ref_count) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$initial_balan, _object$balance;
    var message = createBaseUnbondingDelegationEntry();
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? _helpers.Long.fromValue(object.creation_height) : _helpers.Long.ZERO;
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? _timestamp.Timestamp.fromPartial(object.completion_time) : undefined;
    message.initial_balance = (_object$initial_balan = object.initial_balance) !== null && _object$initial_balan !== void 0 ? _object$initial_balan : "";
    message.balance = (_object$balance = object.balance) !== null && _object$balance !== void 0 ? _object$balance : "";
    message.unbonding_id = object.unbonding_id !== undefined && object.unbonding_id !== null ? _helpers.Long.fromValue(object.unbonding_id) : _helpers.Long.UZERO;
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? _helpers.Long.fromValue(object.unbonding_on_hold_ref_count) : _helpers.Long.ZERO;
    return message;
  }
};
exports.UnbondingDelegationEntry = UnbondingDelegationEntry;
function createBaseRedelegationEntry() {
  return {
    creation_height: _helpers.Long.ZERO,
    completion_time: _timestamp.Timestamp.fromPartial({}),
    initial_balance: "",
    shares_dst: "",
    unbonding_id: _helpers.Long.UZERO,
    unbonding_on_hold_ref_count: _helpers.Long.ZERO
  };
}
var RedelegationEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.creation_height.isZero()) {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      _timestamp.Timestamp.encode(message.completion_time, writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.shares_dst !== "") {
      writer.uint32(34).string(_math.Decimal.fromUserInput(message.shares_dst, 18).atomics);
    }
    if (!message.unbonding_id.isZero()) {
      writer.uint32(40).uint64(message.unbonding_id);
    }
    if (!message.unbonding_on_hold_ref_count.isZero()) {
      writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;
        case 2:
          message.completion_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initial_balance = reader.string();
          break;
        case 4:
          message.shares_dst = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.unbonding_id = reader.uint64();
          break;
        case 6:
          message.unbonding_on_hold_ref_count = reader.int64();
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
      creation_height: (0, _helpers.isSet)(object.creation_height) ? _helpers.Long.fromValue(object.creation_height) : _helpers.Long.ZERO,
      completion_time: (0, _helpers.isSet)(object.completion_time) ? (0, _helpers.fromJsonTimestamp)(object.completion_time) : undefined,
      initial_balance: (0, _helpers.isSet)(object.initial_balance) ? String(object.initial_balance) : "",
      shares_dst: (0, _helpers.isSet)(object.shares_dst) ? String(object.shares_dst) : "",
      unbonding_id: (0, _helpers.isSet)(object.unbonding_id) ? _helpers.Long.fromValue(object.unbonding_id) : _helpers.Long.UZERO,
      unbonding_on_hold_ref_count: (0, _helpers.isSet)(object.unbonding_on_hold_ref_count) ? _helpers.Long.fromValue(object.unbonding_on_hold_ref_count) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$initial_balan2, _object$shares_dst;
    var message = createBaseRedelegationEntry();
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? _helpers.Long.fromValue(object.creation_height) : _helpers.Long.ZERO;
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? _timestamp.Timestamp.fromPartial(object.completion_time) : undefined;
    message.initial_balance = (_object$initial_balan2 = object.initial_balance) !== null && _object$initial_balan2 !== void 0 ? _object$initial_balan2 : "";
    message.shares_dst = (_object$shares_dst = object.shares_dst) !== null && _object$shares_dst !== void 0 ? _object$shares_dst : "";
    message.unbonding_id = object.unbonding_id !== undefined && object.unbonding_id !== null ? _helpers.Long.fromValue(object.unbonding_id) : _helpers.Long.UZERO;
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? _helpers.Long.fromValue(object.unbonding_on_hold_ref_count) : _helpers.Long.ZERO;
    return message;
  }
};
exports.RedelegationEntry = RedelegationEntry;
function createBaseRedelegation() {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    entries: []
  };
}
var Redelegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    var _iterator7 = _createForOfIteratorHelper(message.entries),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseRedelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: (0, _helpers.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: (0, _helpers.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return RedelegationEntry.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add5, _object$validator_src2, _object$validator_dst2, _object$entries2;
    var message = createBaseRedelegation();
    message.delegator_address = (_object$delegator_add5 = object.delegator_address) !== null && _object$delegator_add5 !== void 0 ? _object$delegator_add5 : "";
    message.validator_src_address = (_object$validator_src2 = object.validator_src_address) !== null && _object$validator_src2 !== void 0 ? _object$validator_src2 : "";
    message.validator_dst_address = (_object$validator_dst2 = object.validator_dst_address) !== null && _object$validator_dst2 !== void 0 ? _object$validator_dst2 : "";
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(function (e) {
      return RedelegationEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Redelegation = Redelegation;
function createBaseParams() {
  return {
    unbonding_time: _duration.Duration.fromPartial({}),
    max_validators: 0,
    max_entries: 0,
    historical_entries: 0,
    bond_denom: "",
    min_commission_rate: ""
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.unbonding_time !== undefined) {
      _duration.Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_validators !== 0) {
      writer.uint32(16).uint32(message.max_validators);
    }
    if (message.max_entries !== 0) {
      writer.uint32(24).uint32(message.max_entries);
    }
    if (message.historical_entries !== 0) {
      writer.uint32(32).uint32(message.historical_entries);
    }
    if (message.bond_denom !== "") {
      writer.uint32(42).string(message.bond_denom);
    }
    if (message.min_commission_rate !== "") {
      writer.uint32(50).string(_math.Decimal.fromUserInput(message.min_commission_rate, 18).atomics);
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
          message.unbonding_time = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.max_validators = reader.uint32();
          break;
        case 3:
          message.max_entries = reader.uint32();
          break;
        case 4:
          message.historical_entries = reader.uint32();
          break;
        case 5:
          message.bond_denom = reader.string();
          break;
        case 6:
          message.min_commission_rate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
      unbonding_time: (0, _helpers.isSet)(object.unbonding_time) ? _duration.Duration.fromJSON(object.unbonding_time) : undefined,
      max_validators: (0, _helpers.isSet)(object.max_validators) ? Number(object.max_validators) : 0,
      max_entries: (0, _helpers.isSet)(object.max_entries) ? Number(object.max_entries) : 0,
      historical_entries: (0, _helpers.isSet)(object.historical_entries) ? Number(object.historical_entries) : 0,
      bond_denom: (0, _helpers.isSet)(object.bond_denom) ? String(object.bond_denom) : "",
      min_commission_rate: (0, _helpers.isSet)(object.min_commission_rate) ? String(object.min_commission_rate) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$max_validator, _object$max_entries, _object$historical_en, _object$bond_denom, _object$min_commissio;
    var message = createBaseParams();
    message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? _duration.Duration.fromPartial(object.unbonding_time) : undefined;
    message.max_validators = (_object$max_validator = object.max_validators) !== null && _object$max_validator !== void 0 ? _object$max_validator : 0;
    message.max_entries = (_object$max_entries = object.max_entries) !== null && _object$max_entries !== void 0 ? _object$max_entries : 0;
    message.historical_entries = (_object$historical_en = object.historical_entries) !== null && _object$historical_en !== void 0 ? _object$historical_en : 0;
    message.bond_denom = (_object$bond_denom = object.bond_denom) !== null && _object$bond_denom !== void 0 ? _object$bond_denom : "";
    message.min_commission_rate = (_object$min_commissio = object.min_commission_rate) !== null && _object$min_commissio !== void 0 ? _object$min_commissio : "";
    return message;
  }
};
exports.Params = Params;
function createBaseDelegationResponse() {
  return {
    delegation: Delegation.fromPartial({}),
    balance: _coin.Coin.fromPartial({})
  };
}
var DelegationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      _coin.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = _coin.Coin.decode(reader, reader.uint32());
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
      delegation: (0, _helpers.isSet)(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: (0, _helpers.isSet)(object.balance) ? _coin.Coin.fromJSON(object.balance) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? _coin.Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
exports.DelegationResponse = DelegationResponse;
function createBaseRedelegationEntryResponse() {
  return {
    redelegation_entry: RedelegationEntry.fromPartial({}),
    balance: ""
  };
}
var RedelegationEntryResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.redelegation_entry !== undefined) {
      RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
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
      redelegation_entry: (0, _helpers.isSet)(object.redelegation_entry) ? RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
      balance: (0, _helpers.isSet)(object.balance) ? String(object.balance) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$balance2;
    var message = createBaseRedelegationEntryResponse();
    message.redelegation_entry = object.redelegation_entry !== undefined && object.redelegation_entry !== null ? RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
    message.balance = (_object$balance2 = object.balance) !== null && _object$balance2 !== void 0 ? _object$balance2 : "";
    return message;
  }
};
exports.RedelegationEntryResponse = RedelegationEntryResponse;
function createBaseRedelegationResponse() {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: []
  };
}
var RedelegationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    var _iterator8 = _createForOfIteratorHelper(message.entries),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
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
      redelegation: (0, _helpers.isSet)(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return RedelegationEntryResponse.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$entries3;
    var message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = ((_object$entries3 = object.entries) === null || _object$entries3 === void 0 ? void 0 : _object$entries3.map(function (e) {
      return RedelegationEntryResponse.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.RedelegationResponse = RedelegationResponse;
function createBasePool() {
  return {
    not_bonded_tokens: "",
    bonded_tokens: ""
  };
}
var Pool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.not_bonded_tokens !== "") {
      writer.uint32(10).string(message.not_bonded_tokens);
    }
    if (message.bonded_tokens !== "") {
      writer.uint32(18).string(message.bonded_tokens);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.not_bonded_tokens = reader.string();
          break;
        case 2:
          message.bonded_tokens = reader.string();
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
      not_bonded_tokens: (0, _helpers.isSet)(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
      bonded_tokens: (0, _helpers.isSet)(object.bonded_tokens) ? String(object.bonded_tokens) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$not_bonded_to, _object$bonded_tokens;
    var message = createBasePool();
    message.not_bonded_tokens = (_object$not_bonded_to = object.not_bonded_tokens) !== null && _object$not_bonded_to !== void 0 ? _object$not_bonded_to : "";
    message.bonded_tokens = (_object$bonded_tokens = object.bonded_tokens) !== null && _object$bonded_tokens !== void 0 ? _object$bonded_tokens : "";
    return message;
  }
};
exports.Pool = Pool;
function createBaseValidatorUpdates() {
  return {
    updates: []
  };
}
var ValidatorUpdates = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator9 = _createForOfIteratorHelper(message.updates),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _types2.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(_types2.ValidatorUpdate.decode(reader, reader.uint32()));
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
      updates: Array.isArray(object === null || object === void 0 ? void 0 : object.updates) ? object.updates.map(function (e) {
        return _types2.ValidatorUpdate.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$updates;
    var message = createBaseValidatorUpdates();
    message.updates = ((_object$updates = object.updates) === null || _object$updates === void 0 ? void 0 : _object$updates.map(function (e) {
      return _types2.ValidatorUpdate.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorUpdates = ValidatorUpdates;