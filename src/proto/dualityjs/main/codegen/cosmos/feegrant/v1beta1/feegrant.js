"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeriodicAllowance = exports.Grant = exports.BasicAllowance = exports.AllowedMsgAllowance = void 0;
var _coin = require("../../base/v1beta1/coin");
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    expiration: _timestamp.Timestamp.fromPartial({})
  };
}
var BasicAllowance = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.spend_limit),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.expiration !== undefined) {
      _timestamp.Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBasicAllowance();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spend_limit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.spend_limit) ? object.spend_limit.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      expiration: (0, _helpers.isSet)(object.expiration) ? (0, _helpers.fromJsonTimestamp)(object.expiration) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$spend_limit;
    var message = createBaseBasicAllowance();
    message.spend_limit = ((_object$spend_limit = object.spend_limit) === null || _object$spend_limit === void 0 ? void 0 : _object$spend_limit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.expiration = object.expiration !== undefined && object.expiration !== null ? _timestamp.Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
exports.BasicAllowance = BasicAllowance;
function createBasePeriodicAllowance() {
  return {
    basic: BasicAllowance.fromPartial({}),
    period: _duration.Duration.fromPartial({}),
    period_spend_limit: [],
    period_can_spend: [],
    period_reset: _timestamp.Timestamp.fromPartial({})
  };
}
var PeriodicAllowance = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      _duration.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.period_spend_limit),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.period_can_spend),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _coin.Coin.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.period_reset !== undefined) {
      _timestamp.Timestamp.encode(message.period_reset, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.period_spend_limit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.period_can_spend.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.period_reset = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      basic: (0, _helpers.isSet)(object.basic) ? BasicAllowance.fromJSON(object.basic) : undefined,
      period: (0, _helpers.isSet)(object.period) ? _duration.Duration.fromJSON(object.period) : undefined,
      period_spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.period_spend_limit) ? object.period_spend_limit.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      period_can_spend: Array.isArray(object === null || object === void 0 ? void 0 : object.period_can_spend) ? object.period_can_spend.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      period_reset: (0, _helpers.isSet)(object.period_reset) ? (0, _helpers.fromJsonTimestamp)(object.period_reset) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$period_spend_, _object$period_can_sp;
    var message = createBasePeriodicAllowance();
    message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
    message.period = object.period !== undefined && object.period !== null ? _duration.Duration.fromPartial(object.period) : undefined;
    message.period_spend_limit = ((_object$period_spend_ = object.period_spend_limit) === null || _object$period_spend_ === void 0 ? void 0 : _object$period_spend_.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.period_can_spend = ((_object$period_can_sp = object.period_can_spend) === null || _object$period_can_sp === void 0 ? void 0 : _object$period_can_sp.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.period_reset = object.period_reset !== undefined && object.period_reset !== null ? _timestamp.Timestamp.fromPartial(object.period_reset) : undefined;
    return message;
  }
};
exports.PeriodicAllowance = PeriodicAllowance;
function createBaseAllowedMsgAllowance() {
  return {
    allowance: _any.Any.fromPartial({}),
    allowed_messages: []
  };
}
var AllowedMsgAllowance = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.allowance !== undefined) {
      _any.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    var _iterator4 = _createForOfIteratorHelper(message.allowed_messages),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(18).string(v);
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
    var message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = _any.Any.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      allowance: (0, _helpers.isSet)(object.allowance) ? _any.Any.fromJSON(object.allowance) : undefined,
      allowed_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_messages) ? object.allowed_messages.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$allowed_messa;
    var message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? _any.Any.fromPartial(object.allowance) : undefined;
    message.allowed_messages = ((_object$allowed_messa = object.allowed_messages) === null || _object$allowed_messa === void 0 ? void 0 : _object$allowed_messa.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.AllowedMsgAllowance = AllowedMsgAllowance;
function createBaseGrant() {
  return {
    granter: "",
    grantee: "",
    allowance: _any.Any.fromPartial({})
  };
}
var Grant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      _any.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = _any.Any.decode(reader, reader.uint32());
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
      granter: (0, _helpers.isSet)(object.granter) ? String(object.granter) : "",
      grantee: (0, _helpers.isSet)(object.grantee) ? String(object.grantee) : "",
      allowance: (0, _helpers.isSet)(object.allowance) ? _any.Any.fromJSON(object.allowance) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee;
    var message = createBaseGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? _any.Any.fromPartial(object.allowance) : undefined;
    return message;
  }
};
exports.Grant = Grant;