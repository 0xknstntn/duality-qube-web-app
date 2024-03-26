"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TickLiquidity = void 0;
var _pool_reserves = require("./pool_reserves");
var _limit_order_tranche = require("./limit_order_tranche");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseTickLiquidity() {
  return {
    poolReserves: undefined,
    limitOrderTranche: undefined
  };
}
var TickLiquidity = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.poolReserves !== undefined) {
      _pool_reserves.PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    if (message.limitOrderTranche !== undefined) {
      _limit_order_tranche.LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTickLiquidity();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = _pool_reserves.PoolReserves.decode(reader, reader.uint32());
          break;
        case 2:
          message.limitOrderTranche = _limit_order_tranche.LimitOrderTranche.decode(reader, reader.uint32());
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
      poolReserves: (0, _helpers.isSet)(object.poolReserves) ? _pool_reserves.PoolReserves.fromJSON(object.poolReserves) : undefined,
      limitOrderTranche: (0, _helpers.isSet)(object.limitOrderTranche) ? _limit_order_tranche.LimitOrderTranche.fromJSON(object.limitOrderTranche) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseTickLiquidity();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? _pool_reserves.PoolReserves.fromPartial(object.poolReserves) : undefined;
    message.limitOrderTranche = object.limitOrderTranche !== undefined && object.limitOrderTranche !== null ? _limit_order_tranche.LimitOrderTranche.fromPartial(object.limitOrderTranche) : undefined;
    return message;
  }
};
exports.TickLiquidity = TickLiquidity;