"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _params = require("./params");
var _gauge = require("./gauge");
var _stake = require("./stake");
var _account_history = require("./account_history");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */

function createBaseGenesisState() {
  return {
    params: _params.Params.fromPartial({}),
    gauges: [],
    last_gauge_id: _helpers.Long.UZERO,
    last_stake_id: _helpers.Long.UZERO,
    stakes: [],
    accountHistories: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.gauges),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _gauge.Gauge.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.last_gauge_id.isZero()) {
      writer.uint32(24).uint64(message.last_gauge_id);
    }
    if (!message.last_stake_id.isZero()) {
      writer.uint32(32).uint64(message.last_stake_id);
    }
    var _iterator2 = _createForOfIteratorHelper(message.stakes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _stake.Stake.encode(_v, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.accountHistories),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _account_history.AccountHistory.encode(_v2, writer.uint32(50).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.gauges.push(_gauge.Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_gauge_id = reader.uint64();
          break;
        case 4:
          message.last_stake_id = reader.uint64();
          break;
        case 5:
          message.stakes.push(_stake.Stake.decode(reader, reader.uint32()));
          break;
        case 6:
          message.accountHistories.push(_account_history.AccountHistory.decode(reader, reader.uint32()));
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
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined,
      gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges) ? object.gauges.map(function (e) {
        return _gauge.Gauge.fromJSON(e);
      }) : [],
      last_gauge_id: (0, _helpers.isSet)(object.last_gauge_id) ? _helpers.Long.fromValue(object.last_gauge_id) : _helpers.Long.UZERO,
      last_stake_id: (0, _helpers.isSet)(object.last_stake_id) ? _helpers.Long.fromValue(object.last_stake_id) : _helpers.Long.UZERO,
      stakes: Array.isArray(object === null || object === void 0 ? void 0 : object.stakes) ? object.stakes.map(function (e) {
        return _stake.Stake.fromJSON(e);
      }) : [],
      accountHistories: Array.isArray(object === null || object === void 0 ? void 0 : object.accountHistories) ? object.accountHistories.map(function (e) {
        return _account_history.AccountHistory.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$gauges, _object$stakes, _object$accountHistor;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    message.gauges = ((_object$gauges = object.gauges) === null || _object$gauges === void 0 ? void 0 : _object$gauges.map(function (e) {
      return _gauge.Gauge.fromPartial(e);
    })) || [];
    message.last_gauge_id = object.last_gauge_id !== undefined && object.last_gauge_id !== null ? _helpers.Long.fromValue(object.last_gauge_id) : _helpers.Long.UZERO;
    message.last_stake_id = object.last_stake_id !== undefined && object.last_stake_id !== null ? _helpers.Long.fromValue(object.last_stake_id) : _helpers.Long.UZERO;
    message.stakes = ((_object$stakes = object.stakes) === null || _object$stakes === void 0 ? void 0 : _object$stakes.map(function (e) {
      return _stake.Stake.fromPartial(e);
    })) || [];
    message.accountHistories = ((_object$accountHistor = object.accountHistories) === null || _object$accountHistor === void 0 ? void 0 : _object$accountHistor.map(function (e) {
      return _account_history.AccountHistory.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;