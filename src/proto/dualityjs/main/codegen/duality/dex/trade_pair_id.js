"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TradePairID = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseTradePairID() {
  return {
    makerDenom: "",
    takerDenom: ""
  };
}
var TradePairID = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.makerDenom !== "") {
      writer.uint32(18).string(message.makerDenom);
    }
    if (message.takerDenom !== "") {
      writer.uint32(26).string(message.takerDenom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTradePairID();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.makerDenom = reader.string();
          break;
        case 3:
          message.takerDenom = reader.string();
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
      makerDenom: (0, _helpers.isSet)(object.makerDenom) ? String(object.makerDenom) : "",
      takerDenom: (0, _helpers.isSet)(object.takerDenom) ? String(object.takerDenom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$makerDenom, _object$takerDenom;
    var message = createBaseTradePairID();
    message.makerDenom = (_object$makerDenom = object.makerDenom) !== null && _object$makerDenom !== void 0 ? _object$makerDenom : "";
    message.takerDenom = (_object$takerDenom = object.takerDenom) !== null && _object$takerDenom !== void 0 ? _object$takerDenom : "";
    return message;
  }
};
exports.TradePairID = TradePairID;