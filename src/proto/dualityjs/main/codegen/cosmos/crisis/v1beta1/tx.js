"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = void 0;
var _coin = require("../../base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** MsgVerifyInvariant represents a message to verify a particular invariance. */

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariant_module_name: "",
    invariant_route: ""
  };
}
var MsgVerifyInvariant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariant_module_name !== "") {
      writer.uint32(18).string(message.invariant_module_name);
    }
    if (message.invariant_route !== "") {
      writer.uint32(26).string(message.invariant_route);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariant_module_name = reader.string();
          break;
        case 3:
          message.invariant_route = reader.string();
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      invariant_module_name: (0, _helpers.isSet)(object.invariant_module_name) ? String(object.invariant_module_name) : "",
      invariant_route: (0, _helpers.isSet)(object.invariant_route) ? String(object.invariant_route) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$invariant_mod, _object$invariant_rou;
    var message = createBaseMsgVerifyInvariant();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.invariant_module_name = (_object$invariant_mod = object.invariant_module_name) !== null && _object$invariant_mod !== void 0 ? _object$invariant_mod : "";
    message.invariant_route = (_object$invariant_rou = object.invariant_route) !== null && _object$invariant_rou !== void 0 ? _object$invariant_rou : "";
    return message;
  }
};
exports.MsgVerifyInvariant = MsgVerifyInvariant;
function createBaseMsgVerifyInvariantResponse() {
  return {};
}
var MsgVerifyInvariantResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVerifyInvariantResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgVerifyInvariantResponse();
    return message;
  }
};
exports.MsgVerifyInvariantResponse = MsgVerifyInvariantResponse;
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    constant_fee: _coin.Coin.fromPartial({})
  };
}
var MsgUpdateParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.constant_fee !== undefined) {
      _coin.Coin.encode(message.constant_fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.constant_fee = _coin.Coin.decode(reader, reader.uint32());
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      constant_fee: (0, _helpers.isSet)(object.constant_fee) ? _coin.Coin.fromJSON(object.constant_fee) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.constant_fee = object.constant_fee !== undefined && object.constant_fee !== null ? _coin.Coin.fromPartial(object.constant_fee) : undefined;
    return message;
  }
};
exports.MsgUpdateParams = MsgUpdateParams;
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;