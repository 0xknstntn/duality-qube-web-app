"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusResponse = exports.StatusRequest = exports.NoBlockResponse = exports.Message = exports.BlockResponse = exports.BlockRequest = void 0;
var _block = require("../types/block");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** BlockRequest requests a block for a specific height */

/** NoBlockResponse informs the node that the peer does not have block at the requested height */

/** BlockResponse returns block to the requested */

/** StatusRequest requests the status of a peer. */

/** StatusResponse is a peer response to inform their status. */

function createBaseBlockRequest() {
  return {
    height: _helpers.Long.ZERO
  };
}
var BlockRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BlockRequest = BlockRequest;
function createBaseNoBlockResponse() {
  return {
    height: _helpers.Long.ZERO
  };
}
var NoBlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNoBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.NoBlockResponse = NoBlockResponse;
function createBaseBlockResponse() {
  return {
    block: _block.Block.fromPartial({})
  };
}
var BlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = _block.Block.decode(reader, reader.uint32());
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
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    return message;
  }
};
exports.BlockResponse = BlockResponse;
function createBaseStatusRequest() {
  return {};
}
var StatusRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStatusRequest();
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
    var message = createBaseStatusRequest();
    return message;
  }
};
exports.StatusRequest = StatusRequest;
function createBaseStatusResponse() {
  return {
    height: _helpers.Long.ZERO,
    base: _helpers.Long.ZERO
  };
}
var StatusResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStatusResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.base = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      base: (0, _helpers.isSet)(object.base) ? _helpers.Long.fromValue(object.base) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? _helpers.Long.fromValue(object.base) : _helpers.Long.ZERO;
    return message;
  }
};
exports.StatusResponse = StatusResponse;
function createBaseMessage() {
  return {
    block_request: undefined,
    no_block_response: undefined,
    block_response: undefined,
    status_request: undefined,
    status_response: undefined
  };
}
var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block_request !== undefined) {
      BlockRequest.encode(message.block_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.no_block_response !== undefined) {
      NoBlockResponse.encode(message.no_block_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.block_response !== undefined) {
      BlockResponse.encode(message.block_response, writer.uint32(26).fork()).ldelim();
    }
    if (message.status_request !== undefined) {
      StatusRequest.encode(message.status_request, writer.uint32(34).fork()).ldelim();
    }
    if (message.status_response !== undefined) {
      StatusResponse.encode(message.status_response, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_request = BlockRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.no_block_response = NoBlockResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.block_response = BlockResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.status_request = StatusRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.status_response = StatusResponse.decode(reader, reader.uint32());
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
      block_request: (0, _helpers.isSet)(object.block_request) ? BlockRequest.fromJSON(object.block_request) : undefined,
      no_block_response: (0, _helpers.isSet)(object.no_block_response) ? NoBlockResponse.fromJSON(object.no_block_response) : undefined,
      block_response: (0, _helpers.isSet)(object.block_response) ? BlockResponse.fromJSON(object.block_response) : undefined,
      status_request: (0, _helpers.isSet)(object.status_request) ? StatusRequest.fromJSON(object.status_request) : undefined,
      status_response: (0, _helpers.isSet)(object.status_response) ? StatusResponse.fromJSON(object.status_response) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
    message.block_request = object.block_request !== undefined && object.block_request !== null ? BlockRequest.fromPartial(object.block_request) : undefined;
    message.no_block_response = object.no_block_response !== undefined && object.no_block_response !== null ? NoBlockResponse.fromPartial(object.no_block_response) : undefined;
    message.block_response = object.block_response !== undefined && object.block_response !== null ? BlockResponse.fromPartial(object.block_response) : undefined;
    message.status_request = object.status_request !== undefined && object.status_request !== null ? StatusRequest.fromPartial(object.status_request) : undefined;
    message.status_response = object.status_response !== undefined && object.status_response !== null ? StatusResponse.fromPartial(object.status_response) : undefined;
    return message;
  }
};
exports.Message = Message;