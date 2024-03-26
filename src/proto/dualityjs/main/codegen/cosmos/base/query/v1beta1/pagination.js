"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageResponse = exports.PageRequest = void 0;
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */

function createBasePageRequest() {
  return {
    key: new Uint8Array(),
    offset: _helpers.Long.UZERO,
    limit: _helpers.Long.UZERO,
    count_total: false,
    reverse: false
  };
}
var PageRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (!message.offset.isZero()) {
      writer.uint32(16).uint64(message.offset);
    }
    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.count_total === true) {
      writer.uint32(32).bool(message.count_total);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = reader.uint64();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        case 4:
          message.count_total = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      offset: (0, _helpers.isSet)(object.offset) ? _helpers.Long.fromValue(object.offset) : _helpers.Long.UZERO,
      limit: (0, _helpers.isSet)(object.limit) ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO,
      count_total: (0, _helpers.isSet)(object.count_total) ? Boolean(object.count_total) : false,
      reverse: (0, _helpers.isSet)(object.reverse) ? Boolean(object.reverse) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$count_total, _object$reverse;
    var message = createBasePageRequest();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? _helpers.Long.fromValue(object.offset) : _helpers.Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO;
    message.count_total = (_object$count_total = object.count_total) !== null && _object$count_total !== void 0 ? _object$count_total : false;
    message.reverse = (_object$reverse = object.reverse) !== null && _object$reverse !== void 0 ? _object$reverse : false;
    return message;
  }
};
exports.PageRequest = PageRequest;
function createBasePageResponse() {
  return {
    next_key: new Uint8Array(),
    total: _helpers.Long.UZERO
  };
}
var PageResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.next_key.length !== 0) {
      writer.uint32(10).bytes(message.next_key);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_key = reader.bytes();
          break;
        case 2:
          message.total = reader.uint64();
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
      next_key: (0, _helpers.isSet)(object.next_key) ? (0, _helpers.bytesFromBase64)(object.next_key) : new Uint8Array(),
      total: (0, _helpers.isSet)(object.total) ? _helpers.Long.fromValue(object.total) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$next_key;
    var message = createBasePageResponse();
    message.next_key = (_object$next_key = object.next_key) !== null && _object$next_key !== void 0 ? _object$next_key : new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? _helpers.Long.fromValue(object.total) : _helpers.Long.UZERO;
    return message;
  }
};
exports.PageResponse = PageResponse;