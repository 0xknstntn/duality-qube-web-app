"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgTransferResponse = exports.MsgTransfer = void 0;
var _coin = require("../../../../cosmos/base/v1beta1/coin");
var _client = require("../../../core/client/v1/client");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */

/** MsgTransferResponse defines the Msg/Transfer response type. */

/** MsgUpdateParams is the Msg/UpdateParams request type. */

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */

function createBaseMsgTransfer() {
  return {
    source_port: "",
    source_channel: "",
    token: _coin.Coin.fromPartial({}),
    sender: "",
    receiver: "",
    timeout_height: _client.Height.fromPartial({}),
    timeout_timestamp: _helpers.Long.UZERO,
    memo: ""
  };
}
var MsgTransfer = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.source_port !== "") {
      writer.uint32(10).string(message.source_port);
    }
    if (message.source_channel !== "") {
      writer.uint32(18).string(message.source_channel);
    }
    if (message.token !== undefined) {
      _coin.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeout_height !== undefined) {
      _client.Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
    }
    if (!message.timeout_timestamp.isZero()) {
      writer.uint32(56).uint64(message.timeout_timestamp);
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTransfer();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source_port = reader.string();
          break;
        case 2:
          message.source_channel = reader.string();
          break;
        case 3:
          message.token = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeout_height = _client.Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeout_timestamp = reader.uint64();
          break;
        case 8:
          message.memo = reader.string();
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
      source_port: (0, _helpers.isSet)(object.source_port) ? String(object.source_port) : "",
      source_channel: (0, _helpers.isSet)(object.source_channel) ? String(object.source_channel) : "",
      token: (0, _helpers.isSet)(object.token) ? _coin.Coin.fromJSON(object.token) : undefined,
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
      timeout_height: (0, _helpers.isSet)(object.timeout_height) ? _client.Height.fromJSON(object.timeout_height) : undefined,
      timeout_timestamp: (0, _helpers.isSet)(object.timeout_timestamp) ? _helpers.Long.fromValue(object.timeout_timestamp) : _helpers.Long.UZERO,
      memo: (0, _helpers.isSet)(object.memo) ? String(object.memo) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$source_port, _object$source_channe, _object$sender, _object$receiver, _object$memo;
    var message = createBaseMsgTransfer();
    message.source_port = (_object$source_port = object.source_port) !== null && _object$source_port !== void 0 ? _object$source_port : "";
    message.source_channel = (_object$source_channe = object.source_channel) !== null && _object$source_channe !== void 0 ? _object$source_channe : "";
    message.token = object.token !== undefined && object.token !== null ? _coin.Coin.fromPartial(object.token) : undefined;
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? _client.Height.fromPartial(object.timeout_height) : undefined;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? _helpers.Long.fromValue(object.timeout_timestamp) : _helpers.Long.UZERO;
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    return message;
  }
};
exports.MsgTransfer = MsgTransfer;
function createBaseMsgTransferResponse() {
  return {
    sequence: _helpers.Long.UZERO
  };
}
var MsgTransferResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
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
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgTransferResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgTransferResponse = MsgTransferResponse;
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: _client.Params.fromPartial({})
  };
}
var MsgUpdateParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      _client.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.params = _client.Params.decode(reader, reader.uint32());
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
      params: (0, _helpers.isSet)(object.params) ? _client.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== undefined && object.params !== null ? _client.Params.fromPartial(object.params) : undefined;
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