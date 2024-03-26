"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NFT = exports.Class = void 0;
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Class defines the class of the nft type. */

/** NFT defines the NFT. */

function createBaseClass() {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uri_hash: "",
    data: _any.Any.fromPartial({})
  };
}
var Class = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uri_hash !== "") {
      writer.uint32(50).string(message.uri_hash);
    }
    if (message.data !== undefined) {
      _any.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClass();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uri_hash = reader.string();
          break;
        case 7:
          message.data = _any.Any.decode(reader, reader.uint32());
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
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : "",
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      symbol: (0, _helpers.isSet)(object.symbol) ? String(object.symbol) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      uri: (0, _helpers.isSet)(object.uri) ? String(object.uri) : "",
      uri_hash: (0, _helpers.isSet)(object.uri_hash) ? String(object.uri_hash) : "",
      data: (0, _helpers.isSet)(object.data) ? _any.Any.fromJSON(object.data) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$id, _object$name, _object$symbol, _object$description, _object$uri, _object$uri_hash;
    var message = createBaseClass();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.symbol = (_object$symbol = object.symbol) !== null && _object$symbol !== void 0 ? _object$symbol : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.uri_hash = (_object$uri_hash = object.uri_hash) !== null && _object$uri_hash !== void 0 ? _object$uri_hash : "";
    message.data = object.data !== undefined && object.data !== null ? _any.Any.fromPartial(object.data) : undefined;
    return message;
  }
};
exports.Class = Class;
function createBaseNFT() {
  return {
    class_id: "",
    id: "",
    uri: "",
    uri_hash: "",
    data: _any.Any.fromPartial({})
  };
}
var NFT = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uri_hash !== "") {
      writer.uint32(34).string(message.uri_hash);
    }
    if (message.data !== undefined) {
      _any.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNFT();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class_id = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.uri_hash = reader.string();
          break;
        case 10:
          message.data = _any.Any.decode(reader, reader.uint32());
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
      class_id: (0, _helpers.isSet)(object.class_id) ? String(object.class_id) : "",
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : "",
      uri: (0, _helpers.isSet)(object.uri) ? String(object.uri) : "",
      uri_hash: (0, _helpers.isSet)(object.uri_hash) ? String(object.uri_hash) : "",
      data: (0, _helpers.isSet)(object.data) ? _any.Any.fromJSON(object.data) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$class_id, _object$id2, _object$uri2, _object$uri_hash2;
    var message = createBaseNFT();
    message.class_id = (_object$class_id = object.class_id) !== null && _object$class_id !== void 0 ? _object$class_id : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    message.uri = (_object$uri2 = object.uri) !== null && _object$uri2 !== void 0 ? _object$uri2 : "";
    message.uri_hash = (_object$uri_hash2 = object.uri_hash) !== null && _object$uri_hash2 !== void 0 ? _object$uri_hash2 : "";
    message.data = object.data !== undefined && object.data !== null ? _any.Any.fromPartial(object.data) : undefined;
    return message;
  }
};
exports.NFT = NFT;