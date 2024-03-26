"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = void 0;
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Params holds parameters for the incentives module */

function createBaseParams() {
  return {
    distr_epoch_identifier: "",
    max_gauges: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.distr_epoch_identifier !== "") {
      writer.uint32(10).string(message.distr_epoch_identifier);
    }
    if (!message.max_gauges.isZero()) {
      writer.uint32(16).uint64(message.max_gauges);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distr_epoch_identifier = reader.string();
          break;
        case 2:
          message.max_gauges = reader.uint64();
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
      distr_epoch_identifier: (0, _helpers.isSet)(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : "",
      max_gauges: (0, _helpers.isSet)(object.max_gauges) ? _helpers.Long.fromValue(object.max_gauges) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$distr_epoch_i;
    var message = createBaseParams();
    message.distr_epoch_identifier = (_object$distr_epoch_i = object.distr_epoch_identifier) !== null && _object$distr_epoch_i !== void 0 ? _object$distr_epoch_i : "";
    message.max_gauges = object.max_gauges !== undefined && object.max_gauges !== null ? _helpers.Long.fromValue(object.max_gauges) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;