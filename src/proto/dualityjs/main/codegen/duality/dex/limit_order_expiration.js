"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LimitOrderExpiration = void 0;
var _timestamp = require("../../google/protobuf/timestamp");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseLimitOrderExpiration() {
  return {
    expirationTime: _timestamp.Timestamp.fromPartial({}),
    trancheRef: new Uint8Array()
  };
}
var LimitOrderExpiration = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.expirationTime !== undefined) {
      _timestamp.Timestamp.encode(message.expirationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.trancheRef.length !== 0) {
      writer.uint32(18).bytes(message.trancheRef);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLimitOrderExpiration();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.trancheRef = reader.bytes();
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
      expirationTime: (0, _helpers.isSet)(object.expirationTime) ? (0, _helpers.fromJsonTimestamp)(object.expirationTime) : undefined,
      trancheRef: (0, _helpers.isSet)(object.trancheRef) ? (0, _helpers.bytesFromBase64)(object.trancheRef) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$trancheRef;
    var message = createBaseLimitOrderExpiration();
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? _timestamp.Timestamp.fromPartial(object.expirationTime) : undefined;
    message.trancheRef = (_object$trancheRef = object.trancheRef) !== null && _object$trancheRef !== void 0 ? _object$trancheRef : new Uint8Array();
    return message;
  }
};
exports.LimitOrderExpiration = LimitOrderExpiration;