"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = void 0;
var _auth = require("../../auth/v1beta1/auth");
var _coin = require("../../base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    base_account: _auth.BaseAccount.fromPartial({}),
    original_vesting: [],
    delegated_free: [],
    delegated_vesting: [],
    end_time: _helpers.Long.ZERO
  };
}
var BaseVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.base_account !== undefined) {
      _auth.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.original_vesting),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.delegated_free),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _coin.Coin.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.delegated_vesting),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _coin.Coin.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (!message.end_time.isZero()) {
      writer.uint32(40).int64(message.end_time);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = _auth.BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.original_vesting.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegated_free.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegated_vesting.push(_coin.Coin.decode(reader, reader.uint32()));
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
  fromJSON: function fromJSON(object) {
    return {
      base_account: (0, _helpers.isSet)(object.base_account) ? _auth.BaseAccount.fromJSON(object.base_account) : undefined,
      original_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.original_vesting) ? object.original_vesting.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      delegated_free: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_free) ? object.delegated_free.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      delegated_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_vesting) ? object.delegated_vesting.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      end_time: (0, _helpers.isSet)(object.end_time) ? _helpers.Long.fromValue(object.end_time) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$original_vest, _object$delegated_fre, _object$delegated_ves;
    var message = createBaseBaseVestingAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? _auth.BaseAccount.fromPartial(object.base_account) : undefined;
    message.original_vesting = ((_object$original_vest = object.original_vesting) === null || _object$original_vest === void 0 ? void 0 : _object$original_vest.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.delegated_free = ((_object$delegated_fre = object.delegated_free) === null || _object$delegated_fre === void 0 ? void 0 : _object$delegated_fre.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.delegated_vesting = ((_object$delegated_ves = object.delegated_vesting) === null || _object$delegated_ves === void 0 ? void 0 : _object$delegated_ves.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? _helpers.Long.fromValue(object.end_time) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BaseVestingAccount = BaseVestingAccount;
function createBaseContinuousVestingAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({}),
    start_time: _helpers.Long.ZERO
  };
}
var ContinuousVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    if (!message.start_time.isZero()) {
      writer.uint32(16).int64(message.start_time);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      base_vesting_account: (0, _helpers.isSet)(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
      start_time: (0, _helpers.isSet)(object.start_time) ? _helpers.Long.fromValue(object.start_time) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseContinuousVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? _helpers.Long.fromValue(object.start_time) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ContinuousVestingAccount = ContinuousVestingAccount;
function createBaseDelayedVestingAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({})
  };
}
var DelayedVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      base_vesting_account: (0, _helpers.isSet)(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDelayedVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  }
};
exports.DelayedVestingAccount = DelayedVestingAccount;
function createBasePeriod() {
  return {
    length: _helpers.Long.ZERO,
    amount: []
  };
}
var Period = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.length.isZero()) {
      writer.uint32(8).int64(message.length);
    }
    var _iterator4 = _createForOfIteratorHelper(message.amount),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBasePeriod();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
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
      length: (0, _helpers.isSet)(object.length) ? _helpers.Long.fromValue(object.length) : _helpers.Long.ZERO,
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amount;
    var message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? _helpers.Long.fromValue(object.length) : _helpers.Long.ZERO;
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Period = Period;
function createBasePeriodicVestingAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({}),
    start_time: _helpers.Long.ZERO,
    vesting_periods: []
  };
}
var PeriodicVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    if (!message.start_time.isZero()) {
      writer.uint32(16).int64(message.start_time);
    }
    var _iterator5 = _createForOfIteratorHelper(message.vesting_periods),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        Period.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      base_vesting_account: (0, _helpers.isSet)(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
      start_time: (0, _helpers.isSet)(object.start_time) ? _helpers.Long.fromValue(object.start_time) : _helpers.Long.ZERO,
      vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods) ? object.vesting_periods.map(function (e) {
        return Period.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$vesting_perio;
    var message = createBasePeriodicVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? _helpers.Long.fromValue(object.start_time) : _helpers.Long.ZERO;
    message.vesting_periods = ((_object$vesting_perio = object.vesting_periods) === null || _object$vesting_perio === void 0 ? void 0 : _object$vesting_perio.map(function (e) {
      return Period.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.PeriodicVestingAccount = PeriodicVestingAccount;
function createBasePermanentLockedAccount() {
  return {
    base_vesting_account: BaseVestingAccount.fromPartial({})
  };
}
var PermanentLockedAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      base_vesting_account: (0, _helpers.isSet)(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePermanentLockedAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  }
};
exports.PermanentLockedAccount = PermanentLockedAccount;