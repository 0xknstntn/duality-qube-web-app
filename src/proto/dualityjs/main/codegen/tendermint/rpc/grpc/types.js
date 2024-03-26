"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsePing = exports.ResponseBroadcastTx = exports.RequestPing = exports.RequestBroadcastTx = void 0;
var _types = require("../../abci/types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseRequestPing() {
  return {};
}
var RequestPing = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestPing();
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
    var message = createBaseRequestPing();
    return message;
  }
};
exports.RequestPing = RequestPing;
function createBaseRequestBroadcastTx() {
  return {
    tx: new Uint8Array()
  };
}
var RequestBroadcastTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestBroadcastTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
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
      tx: (0, _helpers.isSet)(object.tx) ? (0, _helpers.bytesFromBase64)(object.tx) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tx;
    var message = createBaseRequestBroadcastTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    return message;
  }
};
exports.RequestBroadcastTx = RequestBroadcastTx;
function createBaseResponsePing() {
  return {};
}
var ResponsePing = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponsePing();
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
    var message = createBaseResponsePing();
    return message;
  }
};
exports.ResponsePing = ResponsePing;
function createBaseResponseBroadcastTx() {
  return {
    check_tx: _types.ResponseCheckTx.fromPartial({}),
    deliver_tx: _types.ResponseDeliverTx.fromPartial({})
  };
}
var ResponseBroadcastTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.check_tx !== undefined) {
      _types.ResponseCheckTx.encode(message.check_tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliver_tx !== undefined) {
      _types.ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseBroadcastTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.check_tx = _types.ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.deliver_tx = _types.ResponseDeliverTx.decode(reader, reader.uint32());
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
      check_tx: (0, _helpers.isSet)(object.check_tx) ? _types.ResponseCheckTx.fromJSON(object.check_tx) : undefined,
      deliver_tx: (0, _helpers.isSet)(object.deliver_tx) ? _types.ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseResponseBroadcastTx();
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? _types.ResponseCheckTx.fromPartial(object.check_tx) : undefined;
    message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? _types.ResponseDeliverTx.fromPartial(object.deliver_tx) : undefined;
    return message;
  }
};
exports.ResponseBroadcastTx = ResponseBroadcastTx;