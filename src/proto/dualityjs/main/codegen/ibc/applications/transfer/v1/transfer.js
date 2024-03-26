"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.DenomTrace = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */

function createBaseDenomTrace() {
  return {
    path: "",
    base_denom: ""
  };
}
var DenomTrace = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.base_denom !== "") {
      writer.uint32(18).string(message.base_denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDenomTrace();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.base_denom = reader.string();
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
      path: (0, _helpers.isSet)(object.path) ? String(object.path) : "",
      base_denom: (0, _helpers.isSet)(object.base_denom) ? String(object.base_denom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$base_denom;
    var message = createBaseDenomTrace();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.base_denom = (_object$base_denom = object.base_denom) !== null && _object$base_denom !== void 0 ? _object$base_denom : "";
    return message;
  }
};
exports.DenomTrace = DenomTrace;
function createBaseParams() {
  return {
    send_enabled: false,
    receive_enabled: false
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.send_enabled === true) {
      writer.uint32(8).bool(message.send_enabled);
    }
    if (message.receive_enabled === true) {
      writer.uint32(16).bool(message.receive_enabled);
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
          message.send_enabled = reader.bool();
          break;
        case 2:
          message.receive_enabled = reader.bool();
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
      send_enabled: (0, _helpers.isSet)(object.send_enabled) ? Boolean(object.send_enabled) : false,
      receive_enabled: (0, _helpers.isSet)(object.receive_enabled) ? Boolean(object.receive_enabled) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$send_enabled, _object$receive_enabl;
    var message = createBaseParams();
    message.send_enabled = (_object$send_enabled = object.send_enabled) !== null && _object$send_enabled !== void 0 ? _object$send_enabled : false;
    message.receive_enabled = (_object$receive_enabl = object.receive_enabled) !== null && _object$receive_enabl !== void 0 ? _object$receive_enabl : false;
    return message;
  }
};
exports.Params = Params;