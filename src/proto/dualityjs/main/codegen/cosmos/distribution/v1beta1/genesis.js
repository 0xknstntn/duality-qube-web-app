"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSlashEventRecord = exports.ValidatorOutstandingRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.GenesisState = exports.DelegatorWithdrawInfo = exports.DelegatorStartingInfoRecord = void 0;
var _coin = require("../../base/v1beta1/coin");
var _distribution = require("./distribution");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var DelegatorWithdrawInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.withdraw_address !== "") {
      writer.uint32(18).string(message.withdraw_address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      withdraw_address: (0, _helpers.isSet)(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add, _object$withdraw_addr;
    var message = createBaseDelegatorWithdrawInfo();
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.withdraw_address = (_object$withdraw_addr = object.withdraw_address) !== null && _object$withdraw_addr !== void 0 ? _object$withdraw_addr : "";
    return message;
  }
};
exports.DelegatorWithdrawInfo = DelegatorWithdrawInfo;
function createBaseValidatorOutstandingRewardsRecord() {
  return {
    validator_address: "",
    outstanding_rewards: []
  };
}
var ValidatorOutstandingRewardsRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    var _iterator = _createForOfIteratorHelper(message.outstanding_rewards),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.outstanding_rewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
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
      outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards) ? object.outstanding_rewards.map(function (e) {
        return _coin.DecCoin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add, _object$outstanding_r;
    var message = createBaseValidatorOutstandingRewardsRecord();
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    message.outstanding_rewards = ((_object$outstanding_r = object.outstanding_rewards) === null || _object$outstanding_r === void 0 ? void 0 : _object$outstanding_r.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorOutstandingRewardsRecord = ValidatorOutstandingRewardsRecord;
function createBaseValidatorAccumulatedCommissionRecord() {
  return {
    validator_address: "",
    accumulated: _distribution.ValidatorAccumulatedCommission.fromPartial({})
  };
}
var ValidatorAccumulatedCommissionRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.accumulated !== undefined) {
      _distribution.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.accumulated = _distribution.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
      accumulated: (0, _helpers.isSet)(object.accumulated) ? _distribution.ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add2;
    var message = createBaseValidatorAccumulatedCommissionRecord();
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? _distribution.ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  }
};
exports.ValidatorAccumulatedCommissionRecord = ValidatorAccumulatedCommissionRecord;
function createBaseValidatorHistoricalRewardsRecord() {
  return {
    validator_address: "",
    period: _helpers.Long.UZERO,
    rewards: _distribution.ValidatorHistoricalRewards.fromPartial({})
  };
}
var ValidatorHistoricalRewardsRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      _distribution.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = _distribution.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
      period: (0, _helpers.isSet)(object.period) ? _helpers.Long.fromValue(object.period) : _helpers.Long.UZERO,
      rewards: (0, _helpers.isSet)(object.rewards) ? _distribution.ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add3;
    var message = createBaseValidatorHistoricalRewardsRecord();
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.period = object.period !== undefined && object.period !== null ? _helpers.Long.fromValue(object.period) : _helpers.Long.UZERO;
    message.rewards = object.rewards !== undefined && object.rewards !== null ? _distribution.ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  }
};
exports.ValidatorHistoricalRewardsRecord = ValidatorHistoricalRewardsRecord;
function createBaseValidatorCurrentRewardsRecord() {
  return {
    validator_address: "",
    rewards: _distribution.ValidatorCurrentRewards.fromPartial({})
  };
}
var ValidatorCurrentRewardsRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.rewards !== undefined) {
      _distribution.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.rewards = _distribution.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
      rewards: (0, _helpers.isSet)(object.rewards) ? _distribution.ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add4;
    var message = createBaseValidatorCurrentRewardsRecord();
    message.validator_address = (_object$validator_add4 = object.validator_address) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? _distribution.ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  }
};
exports.ValidatorCurrentRewardsRecord = ValidatorCurrentRewardsRecord;
function createBaseDelegatorStartingInfoRecord() {
  return {
    delegator_address: "",
    validator_address: "",
    starting_info: _distribution.DelegatorStartingInfo.fromPartial({})
  };
}
var DelegatorStartingInfoRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.starting_info !== undefined) {
      _distribution.DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegatorStartingInfoRecord();
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
          message.starting_info = _distribution.DelegatorStartingInfo.decode(reader, reader.uint32());
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
      starting_info: (0, _helpers.isSet)(object.starting_info) ? _distribution.DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add2, _object$validator_add5;
    var message = createBaseDelegatorStartingInfoRecord();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_address = (_object$validator_add5 = object.validator_address) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    message.starting_info = object.starting_info !== undefined && object.starting_info !== null ? _distribution.DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
    return message;
  }
};
exports.DelegatorStartingInfoRecord = DelegatorStartingInfoRecord;
function createBaseValidatorSlashEventRecord() {
  return {
    validator_address: "",
    height: _helpers.Long.UZERO,
    period: _helpers.Long.UZERO,
    validator_slash_event: _distribution.ValidatorSlashEvent.fromPartial({})
  };
}
var ValidatorSlashEventRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _distribution.ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.validator_slash_event = _distribution.ValidatorSlashEvent.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO,
      period: (0, _helpers.isSet)(object.period) ? _helpers.Long.fromValue(object.period) : _helpers.Long.UZERO,
      validator_slash_event: (0, _helpers.isSet)(object.validator_slash_event) ? _distribution.ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add6;
    var message = createBaseValidatorSlashEventRecord();
    message.validator_address = (_object$validator_add6 = object.validator_address) !== null && _object$validator_add6 !== void 0 ? _object$validator_add6 : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.period = object.period !== undefined && object.period !== null ? _helpers.Long.fromValue(object.period) : _helpers.Long.UZERO;
    message.validator_slash_event = object.validator_slash_event !== undefined && object.validator_slash_event !== null ? _distribution.ValidatorSlashEvent.fromPartial(object.validator_slash_event) : undefined;
    return message;
  }
};
exports.ValidatorSlashEventRecord = ValidatorSlashEventRecord;
function createBaseGenesisState() {
  return {
    params: _distribution.Params.fromPartial({}),
    fee_pool: _distribution.FeePool.fromPartial({}),
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
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _distribution.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee_pool !== undefined) {
      _distribution.FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.delegator_withdraw_infos),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.previous_proposer !== "") {
      writer.uint32(34).string(message.previous_proposer);
    }
    var _iterator3 = _createForOfIteratorHelper(message.outstanding_rewards),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        ValidatorOutstandingRewardsRecord.encode(_v, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.validator_accumulated_commissions),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        ValidatorAccumulatedCommissionRecord.encode(_v2, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.validator_historical_rewards),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        ValidatorHistoricalRewardsRecord.encode(_v3, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.validator_current_rewards),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v4 = _step6.value;
        ValidatorCurrentRewardsRecord.encode(_v4, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.delegator_starting_infos),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v5 = _step7.value;
        DelegatorStartingInfoRecord.encode(_v5, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.validator_slash_events),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v6 = _step8.value;
        ValidatorSlashEventRecord.encode(_v6, writer.uint32(82).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _distribution.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee_pool = _distribution.FeePool.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      params: (0, _helpers.isSet)(object.params) ? _distribution.Params.fromJSON(object.params) : undefined,
      fee_pool: (0, _helpers.isSet)(object.fee_pool) ? _distribution.FeePool.fromJSON(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map(function (e) {
        return DelegatorWithdrawInfo.fromJSON(e);
      }) : [],
      previous_proposer: (0, _helpers.isSet)(object.previous_proposer) ? String(object.previous_proposer) : "",
      outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards) ? object.outstanding_rewards.map(function (e) {
        return ValidatorOutstandingRewardsRecord.fromJSON(e);
      }) : [],
      validator_accumulated_commissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map(function (e) {
        return ValidatorAccumulatedCommissionRecord.fromJSON(e);
      }) : [],
      validator_historical_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_historical_rewards) ? object.validator_historical_rewards.map(function (e) {
        return ValidatorHistoricalRewardsRecord.fromJSON(e);
      }) : [],
      validator_current_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_current_rewards) ? object.validator_current_rewards.map(function (e) {
        return ValidatorCurrentRewardsRecord.fromJSON(e);
      }) : [],
      delegator_starting_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_starting_infos) ? object.delegator_starting_infos.map(function (e) {
        return DelegatorStartingInfoRecord.fromJSON(e);
      }) : [],
      validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events) ? object.validator_slash_events.map(function (e) {
        return ValidatorSlashEventRecord.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_wit, _object$previous_prop, _object$outstanding_r2, _object$validator_acc, _object$validator_his, _object$validator_cur, _object$delegator_sta, _object$validator_sla;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _distribution.Params.fromPartial(object.params) : undefined;
    message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? _distribution.FeePool.fromPartial(object.fee_pool) : undefined;
    message.delegator_withdraw_infos = ((_object$delegator_wit = object.delegator_withdraw_infos) === null || _object$delegator_wit === void 0 ? void 0 : _object$delegator_wit.map(function (e) {
      return DelegatorWithdrawInfo.fromPartial(e);
    })) || [];
    message.previous_proposer = (_object$previous_prop = object.previous_proposer) !== null && _object$previous_prop !== void 0 ? _object$previous_prop : "";
    message.outstanding_rewards = ((_object$outstanding_r2 = object.outstanding_rewards) === null || _object$outstanding_r2 === void 0 ? void 0 : _object$outstanding_r2.map(function (e) {
      return ValidatorOutstandingRewardsRecord.fromPartial(e);
    })) || [];
    message.validator_accumulated_commissions = ((_object$validator_acc = object.validator_accumulated_commissions) === null || _object$validator_acc === void 0 ? void 0 : _object$validator_acc.map(function (e) {
      return ValidatorAccumulatedCommissionRecord.fromPartial(e);
    })) || [];
    message.validator_historical_rewards = ((_object$validator_his = object.validator_historical_rewards) === null || _object$validator_his === void 0 ? void 0 : _object$validator_his.map(function (e) {
      return ValidatorHistoricalRewardsRecord.fromPartial(e);
    })) || [];
    message.validator_current_rewards = ((_object$validator_cur = object.validator_current_rewards) === null || _object$validator_cur === void 0 ? void 0 : _object$validator_cur.map(function (e) {
      return ValidatorCurrentRewardsRecord.fromPartial(e);
    })) || [];
    message.delegator_starting_infos = ((_object$delegator_sta = object.delegator_starting_infos) === null || _object$delegator_sta === void 0 ? void 0 : _object$delegator_sta.map(function (e) {
      return DelegatorStartingInfoRecord.fromPartial(e);
    })) || [];
    message.validator_slash_events = ((_object$validator_sla = object.validator_slash_events) === null || _object$validator_sla === void 0 ? void 0 : _object$validator_sla.map(function (e) {
      return ValidatorSlashEventRecord.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;