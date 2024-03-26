"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _params = require("./params");
var _tick_liquidity = require("./tick_liquidity");
var _limit_order_tranche = require("./limit_order_tranche");
var _limit_order_tranche_user = require("./limit_order_tranche_user");
var _pool_metadata = require("./pool_metadata");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the dex module's genesis state. */

function createBaseGenesisState() {
  return {
    params: _params.Params.fromPartial({}),
    tickLiquidityList: undefined,
    inactiveLimitOrderTrancheList: undefined,
    limitOrderTrancheUserList: undefined,
    poolMetadataList: [],
    poolCount: _helpers.Long.UZERO
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.tickLiquidityList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _tick_liquidity.TickLiquidity.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.inactiveLimitOrderTrancheList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _limit_order_tranche.LimitOrderTranche.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.limitOrderTrancheUserList),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _limit_order_tranche_user.LimitOrderTrancheUser.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.poolMetadataList),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _pool_metadata.PoolMetadata.encode(_v3, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (!message.poolCount.isZero()) {
      writer.uint32(48).uint64(message.poolCount);
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
          message.tickLiquidityList.push(_tick_liquidity.TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 3:
          message.inactiveLimitOrderTrancheList.push(_limit_order_tranche.LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limitOrderTrancheUserList.push(_limit_order_tranche_user.LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolMetadataList.push(_pool_metadata.PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolCount = reader.uint64();
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
      tickLiquidityList: Array.isArray(object === null || object === void 0 ? void 0 : object.tickLiquidityList) ? object.tickLiquidityList.map(function (e) {
        return _tick_liquidity.TickLiquidity.fromJSON(e);
      }) : [],
      inactiveLimitOrderTrancheList: Array.isArray(object === null || object === void 0 ? void 0 : object.inactiveLimitOrderTrancheList) ? object.inactiveLimitOrderTrancheList.map(function (e) {
        return _limit_order_tranche.LimitOrderTranche.fromJSON(e);
      }) : [],
      limitOrderTrancheUserList: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrderTrancheUserList) ? object.limitOrderTrancheUserList.map(function (e) {
        return _limit_order_tranche_user.LimitOrderTrancheUser.fromJSON(e);
      }) : [],
      poolMetadataList: Array.isArray(object === null || object === void 0 ? void 0 : object.poolMetadataList) ? object.poolMetadataList.map(function (e) {
        return _pool_metadata.PoolMetadata.fromJSON(e);
      }) : [],
      poolCount: (0, _helpers.isSet)(object.poolCount) ? _helpers.Long.fromValue(object.poolCount) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tickLiquidity, _object$inactiveLimit, _object$limitOrderTra, _object$poolMetadataL;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    message.tickLiquidityList = ((_object$tickLiquidity = object.tickLiquidityList) === null || _object$tickLiquidity === void 0 ? void 0 : _object$tickLiquidity.map(function (e) {
      return _tick_liquidity.TickLiquidity.fromPartial(e);
    })) || [];
    message.inactiveLimitOrderTrancheList = ((_object$inactiveLimit = object.inactiveLimitOrderTrancheList) === null || _object$inactiveLimit === void 0 ? void 0 : _object$inactiveLimit.map(function (e) {
      return _limit_order_tranche.LimitOrderTranche.fromPartial(e);
    })) || [];
    message.limitOrderTrancheUserList = ((_object$limitOrderTra = object.limitOrderTrancheUserList) === null || _object$limitOrderTra === void 0 ? void 0 : _object$limitOrderTra.map(function (e) {
      return _limit_order_tranche_user.LimitOrderTrancheUser.fromPartial(e);
    })) || [];
    message.poolMetadataList = ((_object$poolMetadataL = object.poolMetadataList) === null || _object$poolMetadataL === void 0 ? void 0 : _object$poolMetadataL.map(function (e) {
      return _pool_metadata.PoolMetadata.fromPartial(e);
    })) || [];
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? _helpers.Long.fromValue(object.poolCount) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GenesisState = GenesisState;