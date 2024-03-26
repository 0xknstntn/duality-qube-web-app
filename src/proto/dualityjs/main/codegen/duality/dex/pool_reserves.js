"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PoolReservesKey = exports.PoolReserves = void 0;
var _trade_pair_id = require("./trade_pair_id");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBasePoolReservesKey() {
  return {
    tradePairID: _trade_pair_id.TradePairID.fromPartial({}),
    TickIndexTakerToMaker: _helpers.Long.ZERO,
    Fee: _helpers.Long.UZERO
  };
}
var PoolReservesKey = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tradePairID !== undefined) {
      _trade_pair_id.TradePairID.encode(message.tradePairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.TickIndexTakerToMaker.isZero()) {
      writer.uint32(16).int64(message.TickIndexTakerToMaker);
    }
    if (!message.Fee.isZero()) {
      writer.uint32(24).uint64(message.Fee);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePoolReservesKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairID = _trade_pair_id.TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.TickIndexTakerToMaker = reader.int64();
          break;
        case 3:
          message.Fee = reader.uint64();
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
      tradePairID: (0, _helpers.isSet)(object.tradePairID) ? _trade_pair_id.TradePairID.fromJSON(object.tradePairID) : undefined,
      TickIndexTakerToMaker: (0, _helpers.isSet)(object.TickIndexTakerToMaker) ? _helpers.Long.fromValue(object.TickIndexTakerToMaker) : _helpers.Long.ZERO,
      Fee: (0, _helpers.isSet)(object.Fee) ? _helpers.Long.fromValue(object.Fee) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePoolReservesKey();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? _trade_pair_id.TradePairID.fromPartial(object.tradePairID) : undefined;
    message.TickIndexTakerToMaker = object.TickIndexTakerToMaker !== undefined && object.TickIndexTakerToMaker !== null ? _helpers.Long.fromValue(object.TickIndexTakerToMaker) : _helpers.Long.ZERO;
    message.Fee = object.Fee !== undefined && object.Fee !== null ? _helpers.Long.fromValue(object.Fee) : _helpers.Long.UZERO;
    return message;
  }
};
exports.PoolReservesKey = PoolReservesKey;
function createBasePoolReserves() {
  return {
    key: PoolReservesKey.fromPartial({}),
    reservesMakerDenom: "",
    priceTakerToMaker: "",
    priceOppositeTakerToMaker: ""
  };
}
var PoolReserves = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== undefined) {
      PoolReservesKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(26).string(message.priceTakerToMaker);
    }
    if (message.priceOppositeTakerToMaker !== "") {
      writer.uint32(34).string(message.priceOppositeTakerToMaker);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePoolReserves();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = PoolReservesKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.priceTakerToMaker = reader.string();
          break;
        case 4:
          message.priceOppositeTakerToMaker = reader.string();
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
      key: (0, _helpers.isSet)(object.key) ? PoolReservesKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: (0, _helpers.isSet)(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      priceTakerToMaker: (0, _helpers.isSet)(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : "",
      priceOppositeTakerToMaker: (0, _helpers.isSet)(object.priceOppositeTakerToMaker) ? String(object.priceOppositeTakerToMaker) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$reservesMaker, _object$priceTakerToM, _object$priceOpposite;
    var message = createBasePoolReserves();
    message.key = object.key !== undefined && object.key !== null ? PoolReservesKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = (_object$reservesMaker = object.reservesMakerDenom) !== null && _object$reservesMaker !== void 0 ? _object$reservesMaker : "";
    message.priceTakerToMaker = (_object$priceTakerToM = object.priceTakerToMaker) !== null && _object$priceTakerToM !== void 0 ? _object$priceTakerToM : "";
    message.priceOppositeTakerToMaker = (_object$priceOpposite = object.priceOppositeTakerToMaker) !== null && _object$priceOpposite !== void 0 ? _object$priceOpposite : "";
    return message;
  }
};
exports.PoolReserves = PoolReserves;