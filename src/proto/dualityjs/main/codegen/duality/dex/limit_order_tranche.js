"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LimitOrderTrancheKey = exports.LimitOrderTranche = void 0;
var _trade_pair_id = require("./trade_pair_id");
var _timestamp = require("../../google/protobuf/timestamp");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseLimitOrderTrancheKey() {
  return {
    tradePairID: _trade_pair_id.TradePairID.fromPartial({}),
    tickIndexTakerToMaker: _helpers.Long.ZERO,
    trancheKey: ""
  };
}
var LimitOrderTrancheKey = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tradePairID !== undefined) {
      _trade_pair_id.TradePairID.encode(message.tradePairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.tickIndexTakerToMaker.isZero()) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLimitOrderTrancheKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairID = _trade_pair_id.TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickIndexTakerToMaker = reader.int64();
          break;
        case 3:
          message.trancheKey = reader.string();
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
      tickIndexTakerToMaker: (0, _helpers.isSet)(object.tickIndexTakerToMaker) ? _helpers.Long.fromValue(object.tickIndexTakerToMaker) : _helpers.Long.ZERO,
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$trancheKey;
    var message = createBaseLimitOrderTrancheKey();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? _trade_pair_id.TradePairID.fromPartial(object.tradePairID) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? _helpers.Long.fromValue(object.tickIndexTakerToMaker) : _helpers.Long.ZERO;
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    return message;
  }
};
exports.LimitOrderTrancheKey = LimitOrderTrancheKey;
function createBaseLimitOrderTranche() {
  return {
    key: LimitOrderTrancheKey.fromPartial({}),
    reservesMakerDenom: "",
    reservesTakerDenom: "",
    totalMakerDenom: "",
    totalTakerDenom: "",
    expirationTime: undefined,
    priceTakerToMaker: ""
  };
}
var LimitOrderTranche = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== undefined) {
      LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.reservesTakerDenom !== "") {
      writer.uint32(26).string(message.reservesTakerDenom);
    }
    if (message.totalMakerDenom !== "") {
      writer.uint32(34).string(message.totalMakerDenom);
    }
    if (message.totalTakerDenom !== "") {
      writer.uint32(42).string(message.totalTakerDenom);
    }
    if (message.expirationTime !== undefined) {
      _timestamp.Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(58).string(message.priceTakerToMaker);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLimitOrderTranche();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = LimitOrderTrancheKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.reservesTakerDenom = reader.string();
          break;
        case 4:
          message.totalMakerDenom = reader.string();
          break;
        case 5:
          message.totalTakerDenom = reader.string();
          break;
        case 6:
          message.expirationTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.priceTakerToMaker = reader.string();
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
      key: (0, _helpers.isSet)(object.key) ? LimitOrderTrancheKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: (0, _helpers.isSet)(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      reservesTakerDenom: (0, _helpers.isSet)(object.reservesTakerDenom) ? String(object.reservesTakerDenom) : "",
      totalMakerDenom: (0, _helpers.isSet)(object.totalMakerDenom) ? String(object.totalMakerDenom) : "",
      totalTakerDenom: (0, _helpers.isSet)(object.totalTakerDenom) ? String(object.totalTakerDenom) : "",
      expirationTime: (0, _helpers.isSet)(object.expirationTime) ? (0, _helpers.fromJsonTimestamp)(object.expirationTime) : undefined,
      priceTakerToMaker: (0, _helpers.isSet)(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$reservesMaker, _object$reservesTaker, _object$totalMakerDen, _object$totalTakerDen, _object$priceTakerToM;
    var message = createBaseLimitOrderTranche();
    message.key = object.key !== undefined && object.key !== null ? LimitOrderTrancheKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = (_object$reservesMaker = object.reservesMakerDenom) !== null && _object$reservesMaker !== void 0 ? _object$reservesMaker : "";
    message.reservesTakerDenom = (_object$reservesTaker = object.reservesTakerDenom) !== null && _object$reservesTaker !== void 0 ? _object$reservesTaker : "";
    message.totalMakerDenom = (_object$totalMakerDen = object.totalMakerDenom) !== null && _object$totalMakerDen !== void 0 ? _object$totalMakerDen : "";
    message.totalTakerDenom = (_object$totalTakerDen = object.totalTakerDenom) !== null && _object$totalTakerDen !== void 0 ? _object$totalTakerDen : "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? _timestamp.Timestamp.fromPartial(object.expirationTime) : undefined;
    message.priceTakerToMaker = (_object$priceTakerToM = object.priceTakerToMaker) !== null && _object$priceTakerToM !== void 0 ? _object$priceTakerToM : "";
    return message;
  }
};
exports.LimitOrderTranche = LimitOrderTranche;