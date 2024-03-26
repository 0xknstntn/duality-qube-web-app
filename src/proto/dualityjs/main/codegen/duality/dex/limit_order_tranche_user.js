"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LimitOrderTrancheUser = void 0;
var _trade_pair_id = require("./trade_pair_id");
var _tx = require("./tx");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseLimitOrderTrancheUser() {
  return {
    tradePairID: _trade_pair_id.TradePairID.fromPartial({}),
    tickIndexTakerToMaker: _helpers.Long.ZERO,
    trancheKey: "",
    address: "",
    sharesOwned: "",
    sharesWithdrawn: "",
    sharesCancelled: "",
    orderType: 0
  };
}
var LimitOrderTrancheUser = {
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
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.sharesOwned !== "") {
      writer.uint32(42).string(message.sharesOwned);
    }
    if (message.sharesWithdrawn !== "") {
      writer.uint32(50).string(message.sharesWithdrawn);
    }
    if (message.sharesCancelled !== "") {
      writer.uint32(58).string(message.sharesCancelled);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLimitOrderTrancheUser();
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
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.sharesOwned = reader.string();
          break;
        case 6:
          message.sharesWithdrawn = reader.string();
          break;
        case 7:
          message.sharesCancelled = reader.string();
          break;
        case 8:
          message.orderType = reader.int32();
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
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : "",
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      sharesOwned: (0, _helpers.isSet)(object.sharesOwned) ? String(object.sharesOwned) : "",
      sharesWithdrawn: (0, _helpers.isSet)(object.sharesWithdrawn) ? String(object.sharesWithdrawn) : "",
      sharesCancelled: (0, _helpers.isSet)(object.sharesCancelled) ? String(object.sharesCancelled) : "",
      orderType: (0, _helpers.isSet)(object.orderType) ? (0, _tx.limitOrderTypeFromJSON)(object.orderType) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$trancheKey, _object$address, _object$sharesOwned, _object$sharesWithdra, _object$sharesCancell, _object$orderType;
    var message = createBaseLimitOrderTrancheUser();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? _trade_pair_id.TradePairID.fromPartial(object.tradePairID) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? _helpers.Long.fromValue(object.tickIndexTakerToMaker) : _helpers.Long.ZERO;
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.sharesOwned = (_object$sharesOwned = object.sharesOwned) !== null && _object$sharesOwned !== void 0 ? _object$sharesOwned : "";
    message.sharesWithdrawn = (_object$sharesWithdra = object.sharesWithdrawn) !== null && _object$sharesWithdra !== void 0 ? _object$sharesWithdra : "";
    message.sharesCancelled = (_object$sharesCancell = object.sharesCancelled) !== null && _object$sharesCancell !== void 0 ? _object$sharesCancell : "";
    message.orderType = (_object$orderType = object.orderType) !== null && _object$orderType !== void 0 ? _object$orderType : 0;
    return message;
  }
};
exports.LimitOrderTrancheUser = LimitOrderTrancheUser;