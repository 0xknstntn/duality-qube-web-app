"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DepositRecord = void 0;
var _pair_id = require("./pair_id");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseDepositRecord() {
  return {
    pairID: _pair_id.PairID.fromPartial({}),
    sharesOwned: "",
    centerTickIndex: _helpers.Long.ZERO,
    lowerTickIndex: _helpers.Long.ZERO,
    upperTickIndex: _helpers.Long.ZERO,
    fee: _helpers.Long.UZERO
  };
}
var DepositRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== undefined) {
      _pair_id.PairID.encode(message.pairID, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOwned !== "") {
      writer.uint32(18).string(message.sharesOwned);
    }
    if (!message.centerTickIndex.isZero()) {
      writer.uint32(24).int64(message.centerTickIndex);
    }
    if (!message.lowerTickIndex.isZero()) {
      writer.uint32(32).int64(message.lowerTickIndex);
    }
    if (!message.upperTickIndex.isZero()) {
      writer.uint32(40).int64(message.upperTickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(48).uint64(message.fee);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDepositRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = _pair_id.PairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.sharesOwned = reader.string();
          break;
        case 3:
          message.centerTickIndex = reader.int64();
          break;
        case 4:
          message.lowerTickIndex = reader.int64();
          break;
        case 5:
          message.upperTickIndex = reader.int64();
          break;
        case 6:
          message.fee = reader.uint64();
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
      sharesOwned: (0, _helpers.isSet)(object.sharesOwned) ? String(object.sharesOwned) : "",
      centerTickIndex: (0, _helpers.isSet)(object.centerTickIndex) ? _helpers.Long.fromValue(object.centerTickIndex) : _helpers.Long.ZERO,
      lowerTickIndex: (0, _helpers.isSet)(object.lowerTickIndex) ? _helpers.Long.fromValue(object.lowerTickIndex) : _helpers.Long.ZERO,
      upperTickIndex: (0, _helpers.isSet)(object.upperTickIndex) ? _helpers.Long.fromValue(object.upperTickIndex) : _helpers.Long.ZERO,
      fee: (0, _helpers.isSet)(object.fee) ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sharesOwned;
    var message = createBaseDepositRecord();
    message.pairID = object.pairID !== undefined && object.pairID !== null ? _pair_id.PairID.fromPartial(object.pairID) : undefined;
    message.sharesOwned = (_object$sharesOwned = object.sharesOwned) !== null && _object$sharesOwned !== void 0 ? _object$sharesOwned : "";
    message.centerTickIndex = object.centerTickIndex !== undefined && object.centerTickIndex !== null ? _helpers.Long.fromValue(object.centerTickIndex) : _helpers.Long.ZERO;
    message.lowerTickIndex = object.lowerTickIndex !== undefined && object.lowerTickIndex !== null ? _helpers.Long.fromValue(object.lowerTickIndex) : _helpers.Long.ZERO;
    message.upperTickIndex = object.upperTickIndex !== undefined && object.upperTickIndex !== null ? _helpers.Long.fromValue(object.upperTickIndex) : _helpers.Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO;
    return message;
  }
};
exports.DepositRecord = DepositRecord;