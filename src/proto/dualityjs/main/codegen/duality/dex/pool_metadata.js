"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PoolMetadata = void 0;
var _pair_id = require("./pair_id");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBasePoolMetadata() {
  return {
    ID: _helpers.Long.UZERO,
    tick: _helpers.Long.ZERO,
    fee: _helpers.Long.UZERO,
    pairID: _pair_id.PairID.fromPartial({})
  };
}
var PoolMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (!message.tick.isZero()) {
      writer.uint32(16).int64(message.tick);
    }
    if (!message.fee.isZero()) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.pairID !== undefined) {
      _pair_id.PairID.encode(message.pairID, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePoolMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        case 2:
          message.tick = reader.int64();
          break;
        case 3:
          message.fee = reader.uint64();
          break;
        case 4:
          message.pairID = _pair_id.PairID.decode(reader, reader.uint32());
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
      ID: (0, _helpers.isSet)(object.ID) ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO,
      tick: (0, _helpers.isSet)(object.tick) ? _helpers.Long.fromValue(object.tick) : _helpers.Long.ZERO,
      fee: (0, _helpers.isSet)(object.fee) ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO,
      pairID: (0, _helpers.isSet)(object.pairID) ? _pair_id.PairID.fromJSON(object.pairID) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePoolMetadata();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.tick = object.tick !== undefined && object.tick !== null ? _helpers.Long.fromValue(object.tick) : _helpers.Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO;
    message.pairID = object.pairID !== undefined && object.pairID !== null ? _pair_id.PairID.fromPartial(object.pairID) : undefined;
    return message;
  }
};
exports.PoolMetadata = PoolMetadata;