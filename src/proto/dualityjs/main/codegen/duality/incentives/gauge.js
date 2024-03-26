"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryCondition = exports.Gauge = void 0;
var _coin = require("../../cosmos/base/v1beta1/coin");
var _timestamp = require("../../google/protobuf/timestamp");
var _pair_id = require("../dex/pair_id");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Gauge is an object that describes an LP incentivization plan and its state. */

/**
 * QueryCondition describes a set of staked LP positions that a gauge is
 * configured to distribute to. LP tokens qualifying for a given QueryCondition
 * must have both tick-fee and tick+fee fall within the range [startTick, endTick],
 * such that all of the tradable liquidity for the pool is within that range.
 */

function createBaseGauge() {
  return {
    id: _helpers.Long.UZERO,
    is_perpetual: false,
    distribute_to: QueryCondition.fromPartial({}),
    coins: [],
    start_time: _timestamp.Timestamp.fromPartial({}),
    num_epochs_paid_over: _helpers.Long.UZERO,
    filled_epochs: _helpers.Long.UZERO,
    distributed_coins: [],
    pricing_tick: _helpers.Long.ZERO
  };
}
var Gauge = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.is_perpetual === true) {
      writer.uint32(16).bool(message.is_perpetual);
    }
    if (message.distribute_to !== undefined) {
      QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.start_time !== undefined) {
      _timestamp.Timestamp.encode(message.start_time, writer.uint32(42).fork()).ldelim();
    }
    if (!message.num_epochs_paid_over.isZero()) {
      writer.uint32(48).uint64(message.num_epochs_paid_over);
    }
    if (!message.filled_epochs.isZero()) {
      writer.uint32(56).uint64(message.filled_epochs);
    }
    var _iterator2 = _createForOfIteratorHelper(message.distributed_coins),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _coin.Coin.encode(_v, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!message.pricing_tick.isZero()) {
      writer.uint32(72).int64(message.pricing_tick);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGauge();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.is_perpetual = reader.bool();
          break;
        case 3:
          message.distribute_to = QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.start_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.num_epochs_paid_over = reader.uint64();
          break;
        case 7:
          message.filled_epochs = reader.uint64();
          break;
        case 8:
          message.distributed_coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pricing_tick = reader.int64();
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
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO,
      is_perpetual: (0, _helpers.isSet)(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      distribute_to: (0, _helpers.isSet)(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      start_time: (0, _helpers.isSet)(object.start_time) ? (0, _helpers.fromJsonTimestamp)(object.start_time) : undefined,
      num_epochs_paid_over: (0, _helpers.isSet)(object.num_epochs_paid_over) ? _helpers.Long.fromValue(object.num_epochs_paid_over) : _helpers.Long.UZERO,
      filled_epochs: (0, _helpers.isSet)(object.filled_epochs) ? _helpers.Long.fromValue(object.filled_epochs) : _helpers.Long.UZERO,
      distributed_coins: Array.isArray(object === null || object === void 0 ? void 0 : object.distributed_coins) ? object.distributed_coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      pricing_tick: (0, _helpers.isSet)(object.pricing_tick) ? _helpers.Long.fromValue(object.pricing_tick) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$is_perpetual, _object$coins, _object$distributed_c;
    var message = createBaseGauge();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.is_perpetual = (_object$is_perpetual = object.is_perpetual) !== null && _object$is_perpetual !== void 0 ? _object$is_perpetual : false;
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.start_time = object.start_time !== undefined && object.start_time !== null ? _timestamp.Timestamp.fromPartial(object.start_time) : undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? _helpers.Long.fromValue(object.num_epochs_paid_over) : _helpers.Long.UZERO;
    message.filled_epochs = object.filled_epochs !== undefined && object.filled_epochs !== null ? _helpers.Long.fromValue(object.filled_epochs) : _helpers.Long.UZERO;
    message.distributed_coins = ((_object$distributed_c = object.distributed_coins) === null || _object$distributed_c === void 0 ? void 0 : _object$distributed_c.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.pricing_tick = object.pricing_tick !== undefined && object.pricing_tick !== null ? _helpers.Long.fromValue(object.pricing_tick) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Gauge = Gauge;
function createBaseQueryCondition() {
  return {
    pairID: _pair_id.PairID.fromPartial({}),
    startTick: _helpers.Long.ZERO,
    endTick: _helpers.Long.ZERO
  };
}
var QueryCondition = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== undefined) {
      _pair_id.PairID.encode(message.pairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.startTick.isZero()) {
      writer.uint32(16).int64(message.startTick);
    }
    if (!message.endTick.isZero()) {
      writer.uint32(24).int64(message.endTick);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCondition();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = _pair_id.PairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTick = reader.int64();
          break;
        case 3:
          message.endTick = reader.int64();
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
      pairID: (0, _helpers.isSet)(object.pairID) ? _pair_id.PairID.fromJSON(object.pairID) : undefined,
      startTick: (0, _helpers.isSet)(object.startTick) ? _helpers.Long.fromValue(object.startTick) : _helpers.Long.ZERO,
      endTick: (0, _helpers.isSet)(object.endTick) ? _helpers.Long.fromValue(object.endTick) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryCondition();
    message.pairID = object.pairID !== undefined && object.pairID !== null ? _pair_id.PairID.fromPartial(object.pairID) : undefined;
    message.startTick = object.startTick !== undefined && object.startTick !== null ? _helpers.Long.fromValue(object.startTick) : _helpers.Long.ZERO;
    message.endTick = object.endTick !== undefined && object.endTick !== null ? _helpers.Long.fromValue(object.endTick) : _helpers.Long.ZERO;
    return message;
  }
};
exports.QueryCondition = QueryCondition;