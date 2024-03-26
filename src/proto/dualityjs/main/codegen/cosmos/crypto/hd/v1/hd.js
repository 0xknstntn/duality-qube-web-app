"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BIP44Params = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** BIP44Params is used as path field in ledger item in Record. */

function createBaseBIP44Params() {
  return {
    purpose: 0,
    coin_type: 0,
    account: 0,
    change: false,
    address_index: 0
  };
}
var BIP44Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.purpose !== 0) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coin_type !== 0) {
      writer.uint32(16).uint32(message.coin_type);
    }
    if (message.account !== 0) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change === true) {
      writer.uint32(32).bool(message.change);
    }
    if (message.address_index !== 0) {
      writer.uint32(40).uint32(message.address_index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBIP44Params();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purpose = reader.uint32();
          break;
        case 2:
          message.coin_type = reader.uint32();
          break;
        case 3:
          message.account = reader.uint32();
          break;
        case 4:
          message.change = reader.bool();
          break;
        case 5:
          message.address_index = reader.uint32();
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
      purpose: (0, _helpers.isSet)(object.purpose) ? Number(object.purpose) : 0,
      coin_type: (0, _helpers.isSet)(object.coin_type) ? Number(object.coin_type) : 0,
      account: (0, _helpers.isSet)(object.account) ? Number(object.account) : 0,
      change: (0, _helpers.isSet)(object.change) ? Boolean(object.change) : false,
      address_index: (0, _helpers.isSet)(object.address_index) ? Number(object.address_index) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$purpose, _object$coin_type, _object$account, _object$change, _object$address_index;
    var message = createBaseBIP44Params();
    message.purpose = (_object$purpose = object.purpose) !== null && _object$purpose !== void 0 ? _object$purpose : 0;
    message.coin_type = (_object$coin_type = object.coin_type) !== null && _object$coin_type !== void 0 ? _object$coin_type : 0;
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : 0;
    message.change = (_object$change = object.change) !== null && _object$change !== void 0 ? _object$change : false;
    message.address_index = (_object$address_index = object.address_index) !== null && _object$address_index !== void 0 ? _object$address_index : 0;
    return message;
  }
};
exports.BIP44Params = BIP44Params;