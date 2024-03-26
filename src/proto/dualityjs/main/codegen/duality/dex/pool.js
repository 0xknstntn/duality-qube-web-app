"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pool = void 0;
var _pool_reserves = require("./pool_reserves");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBasePool() {
  return {
    ID: _helpers.Long.UZERO,
    lower_tick0: _pool_reserves.PoolReserves.fromPartial({}),
    upper_tick1: _pool_reserves.PoolReserves.fromPartial({})
  };
}
var Pool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (message.lower_tick0 !== undefined) {
      _pool_reserves.PoolReserves.encode(message.lower_tick0, writer.uint32(18).fork()).ldelim();
    }
    if (message.upper_tick1 !== undefined) {
      _pool_reserves.PoolReserves.encode(message.upper_tick1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        case 2:
          message.lower_tick0 = _pool_reserves.PoolReserves.decode(reader, reader.uint32());
          break;
        case 3:
          message.upper_tick1 = _pool_reserves.PoolReserves.decode(reader, reader.uint32());
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
      lower_tick0: (0, _helpers.isSet)(object.lower_tick0) ? _pool_reserves.PoolReserves.fromJSON(object.lower_tick0) : undefined,
      upper_tick1: (0, _helpers.isSet)(object.upper_tick1) ? _pool_reserves.PoolReserves.fromJSON(object.upper_tick1) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePool();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.lower_tick0 = object.lower_tick0 !== undefined && object.lower_tick0 !== null ? _pool_reserves.PoolReserves.fromPartial(object.lower_tick0) : undefined;
    message.upper_tick1 = object.upper_tick1 !== undefined && object.upper_tick1 !== null ? _pool_reserves.PoolReserves.fromPartial(object.upper_tick1) : undefined;
    return message;
  }
};
exports.Pool = Pool;