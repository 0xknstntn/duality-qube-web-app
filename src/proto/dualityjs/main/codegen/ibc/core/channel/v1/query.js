"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryNextSequenceSendResponse = exports.QueryNextSequenceSendRequest = exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = void 0;
var _pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var _channel = require("./channel");
var _client = require("../../client/v1/client");
var _any = require("../../../../google/protobuf/any");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryChannelRequest is the request type for the Query/Channel RPC method */

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */

/** QueryChannelsRequest is the request type for the Query/Channels RPC method */

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */

/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */

/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */

/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */

/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */

/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */

/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */

/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */

function createBaseQueryChannelRequest() {
  return {
    port_id: "",
    channel_id: ""
  };
}
var QueryChannelRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id, _object$channel_id;
    var message = createBaseQueryChannelRequest();
    message.port_id = (_object$port_id = object.port_id) !== null && _object$port_id !== void 0 ? _object$port_id : "";
    message.channel_id = (_object$channel_id = object.channel_id) !== null && _object$channel_id !== void 0 ? _object$channel_id : "";
    return message;
  }
};
exports.QueryChannelRequest = QueryChannelRequest;
function createBaseQueryChannelResponse() {
  return {
    channel: _channel.Channel.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryChannelResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.channel !== undefined) {
      _channel.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = _channel.Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      channel: (0, _helpers.isSet)(object.channel) ? _channel.Channel.fromJSON(object.channel) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof;
    var message = createBaseQueryChannelResponse();
    message.channel = object.channel !== undefined && object.channel !== null ? _channel.Channel.fromPartial(object.channel) : undefined;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryChannelResponse = QueryChannelResponse;
function createBaseQueryChannelsRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryChannelsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryChannelsRequest = QueryChannelsRequest;
function createBaseQueryChannelsResponse() {
  return {
    channels: [],
    pagination: _pagination.PageResponse.fromPartial({}),
    height: _client.Height.fromPartial({})
  };
}
var QueryChannelsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.channels),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
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
      channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map(function (e) {
        return _channel.IdentifiedChannel.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$channels;
    var message = createBaseQueryChannelsResponse();
    message.channels = ((_object$channels = object.channels) === null || _object$channels === void 0 ? void 0 : _object$channels.map(function (e) {
      return _channel.IdentifiedChannel.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryChannelsResponse = QueryChannelsResponse;
function createBaseQueryConnectionChannelsRequest() {
  return {
    connection: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryConnectionChannelsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionChannelsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      connection: (0, _helpers.isSet)(object.connection) ? String(object.connection) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$connection;
    var message = createBaseQueryConnectionChannelsRequest();
    message.connection = (_object$connection = object.connection) !== null && _object$connection !== void 0 ? _object$connection : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConnectionChannelsRequest = QueryConnectionChannelsRequest;
function createBaseQueryConnectionChannelsResponse() {
  return {
    channels: [],
    pagination: _pagination.PageResponse.fromPartial({}),
    height: _client.Height.fromPartial({})
  };
}
var QueryConnectionChannelsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.channels),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionChannelsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
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
      channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map(function (e) {
        return _channel.IdentifiedChannel.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$channels2;
    var message = createBaseQueryConnectionChannelsResponse();
    message.channels = ((_object$channels2 = object.channels) === null || _object$channels2 === void 0 ? void 0 : _object$channels2.map(function (e) {
      return _channel.IdentifiedChannel.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryConnectionChannelsResponse = QueryConnectionChannelsResponse;
function createBaseQueryChannelClientStateRequest() {
  return {
    port_id: "",
    channel_id: ""
  };
}
var QueryChannelClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelClientStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id2, _object$channel_id2;
    var message = createBaseQueryChannelClientStateRequest();
    message.port_id = (_object$port_id2 = object.port_id) !== null && _object$port_id2 !== void 0 ? _object$port_id2 : "";
    message.channel_id = (_object$channel_id2 = object.channel_id) !== null && _object$channel_id2 !== void 0 ? _object$channel_id2 : "";
    return message;
  }
};
exports.QueryChannelClientStateRequest = QueryChannelClientStateRequest;
function createBaseQueryChannelClientStateResponse() {
  return {
    identified_client_state: _client.IdentifiedClientState.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryChannelClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.identified_client_state !== undefined) {
      _client.IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelClientStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identified_client_state = _client.IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      identified_client_state: (0, _helpers.isSet)(object.identified_client_state) ? _client.IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof2;
    var message = createBaseQueryChannelClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? _client.IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryChannelClientStateResponse = QueryChannelClientStateResponse;
function createBaseQueryChannelConsensusStateRequest() {
  return {
    port_id: "",
    channel_id: "",
    revision_number: _helpers.Long.UZERO,
    revision_height: _helpers.Long.UZERO
  };
}
var QueryChannelConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (!message.revision_number.isZero()) {
      writer.uint32(24).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(32).uint64(message.revision_height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelConsensusStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.revision_number = reader.uint64();
          break;
        case 4:
          message.revision_height = reader.uint64();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      revision_number: (0, _helpers.isSet)(object.revision_number) ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO,
      revision_height: (0, _helpers.isSet)(object.revision_height) ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id3, _object$channel_id3;
    var message = createBaseQueryChannelConsensusStateRequest();
    message.port_id = (_object$port_id3 = object.port_id) !== null && _object$port_id3 !== void 0 ? _object$port_id3 : "";
    message.channel_id = (_object$channel_id3 = object.channel_id) !== null && _object$channel_id3 !== void 0 ? _object$channel_id3 : "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryChannelConsensusStateRequest = QueryChannelConsensusStateRequest;
function createBaseQueryChannelConsensusStateResponse() {
  return {
    consensus_state: _any.Any.fromPartial({}),
    client_id: "",
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryChannelConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consensus_state !== undefined) {
      _any.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryChannelConsensusStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.client_id = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      consensus_state: (0, _helpers.isSet)(object.consensus_state) ? _any.Any.fromJSON(object.consensus_state) : undefined,
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : "",
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id, _object$proof3;
    var message = createBaseQueryChannelConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? _any.Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    message.proof = (_object$proof3 = object.proof) !== null && _object$proof3 !== void 0 ? _object$proof3 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryChannelConsensusStateResponse = QueryChannelConsensusStateResponse;
function createBaseQueryPacketCommitmentRequest() {
  return {
    port_id: "",
    channel_id: "",
    sequence: _helpers.Long.UZERO
  };
}
var QueryPacketCommitmentRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id4, _object$channel_id4;
    var message = createBaseQueryPacketCommitmentRequest();
    message.port_id = (_object$port_id4 = object.port_id) !== null && _object$port_id4 !== void 0 ? _object$port_id4 : "";
    message.channel_id = (_object$channel_id4 = object.channel_id) !== null && _object$channel_id4 !== void 0 ? _object$channel_id4 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPacketCommitmentRequest = QueryPacketCommitmentRequest;
function createBaseQueryPacketCommitmentResponse() {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryPacketCommitmentResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      commitment: (0, _helpers.isSet)(object.commitment) ? (0, _helpers.bytesFromBase64)(object.commitment) : new Uint8Array(),
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$commitment, _object$proof4;
    var message = createBaseQueryPacketCommitmentResponse();
    message.commitment = (_object$commitment = object.commitment) !== null && _object$commitment !== void 0 ? _object$commitment : new Uint8Array();
    message.proof = (_object$proof4 = object.proof) !== null && _object$proof4 !== void 0 ? _object$proof4 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryPacketCommitmentResponse = QueryPacketCommitmentResponse;
function createBaseQueryPacketCommitmentsRequest() {
  return {
    port_id: "",
    channel_id: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryPacketCommitmentsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id5, _object$channel_id5;
    var message = createBaseQueryPacketCommitmentsRequest();
    message.port_id = (_object$port_id5 = object.port_id) !== null && _object$port_id5 !== void 0 ? _object$port_id5 : "";
    message.channel_id = (_object$channel_id5 = object.channel_id) !== null && _object$channel_id5 !== void 0 ? _object$channel_id5 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryPacketCommitmentsRequest = QueryPacketCommitmentsRequest;
function createBaseQueryPacketCommitmentsResponse() {
  return {
    commitments: [],
    pagination: _pagination.PageResponse.fromPartial({}),
    height: _client.Height.fromPartial({})
  };
}
var QueryPacketCommitmentsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.commitments),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _channel.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
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
      commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments) ? object.commitments.map(function (e) {
        return _channel.PacketState.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$commitments;
    var message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = ((_object$commitments = object.commitments) === null || _object$commitments === void 0 ? void 0 : _object$commitments.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryPacketCommitmentsResponse = QueryPacketCommitmentsResponse;
function createBaseQueryPacketReceiptRequest() {
  return {
    port_id: "",
    channel_id: "",
    sequence: _helpers.Long.UZERO
  };
}
var QueryPacketReceiptRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketReceiptRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id6, _object$channel_id6;
    var message = createBaseQueryPacketReceiptRequest();
    message.port_id = (_object$port_id6 = object.port_id) !== null && _object$port_id6 !== void 0 ? _object$port_id6 : "";
    message.channel_id = (_object$channel_id6 = object.channel_id) !== null && _object$channel_id6 !== void 0 ? _object$channel_id6 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPacketReceiptRequest = QueryPacketReceiptRequest;
function createBaseQueryPacketReceiptResponse() {
  return {
    received: false,
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryPacketReceiptResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      received: (0, _helpers.isSet)(object.received) ? Boolean(object.received) : false,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$received, _object$proof5;
    var message = createBaseQueryPacketReceiptResponse();
    message.received = (_object$received = object.received) !== null && _object$received !== void 0 ? _object$received : false;
    message.proof = (_object$proof5 = object.proof) !== null && _object$proof5 !== void 0 ? _object$proof5 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryPacketReceiptResponse = QueryPacketReceiptResponse;
function createBaseQueryPacketAcknowledgementRequest() {
  return {
    port_id: "",
    channel_id: "",
    sequence: _helpers.Long.UZERO
  };
}
var QueryPacketAcknowledgementRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id7, _object$channel_id7;
    var message = createBaseQueryPacketAcknowledgementRequest();
    message.port_id = (_object$port_id7 = object.port_id) !== null && _object$port_id7 !== void 0 ? _object$port_id7 : "";
    message.channel_id = (_object$channel_id7 = object.channel_id) !== null && _object$channel_id7 !== void 0 ? _object$channel_id7 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPacketAcknowledgementRequest = QueryPacketAcknowledgementRequest;
function createBaseQueryPacketAcknowledgementResponse() {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryPacketAcknowledgementResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      acknowledgement: (0, _helpers.isSet)(object.acknowledgement) ? (0, _helpers.bytesFromBase64)(object.acknowledgement) : new Uint8Array(),
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$acknowledgeme, _object$proof6;
    var message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = (_object$acknowledgeme = object.acknowledgement) !== null && _object$acknowledgeme !== void 0 ? _object$acknowledgeme : new Uint8Array();
    message.proof = (_object$proof6 = object.proof) !== null && _object$proof6 !== void 0 ? _object$proof6 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryPacketAcknowledgementResponse = QueryPacketAcknowledgementResponse;
function createBaseQueryPacketAcknowledgementsRequest() {
  return {
    port_id: "",
    channel_id: "",
    pagination: _pagination.PageRequest.fromPartial({}),
    packet_commitment_sequences: []
  };
}
var QueryPacketAcknowledgementsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    var _iterator4 = _createForOfIteratorHelper(message.packet_commitment_sequences),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_commitment_sequences.push(reader.uint64());
            }
          } else {
            message.packet_commitment_sequences.push(reader.uint64());
          }
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined,
      packet_commitment_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_commitment_sequences) ? object.packet_commitment_sequences.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id8, _object$channel_id8, _object$packet_commit;
    var message = createBaseQueryPacketAcknowledgementsRequest();
    message.port_id = (_object$port_id8 = object.port_id) !== null && _object$port_id8 !== void 0 ? _object$port_id8 : "";
    message.channel_id = (_object$channel_id8 = object.channel_id) !== null && _object$channel_id8 !== void 0 ? _object$channel_id8 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    message.packet_commitment_sequences = ((_object$packet_commit = object.packet_commitment_sequences) === null || _object$packet_commit === void 0 ? void 0 : _object$packet_commit.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryPacketAcknowledgementsRequest = QueryPacketAcknowledgementsRequest;
function createBaseQueryPacketAcknowledgementsResponse() {
  return {
    acknowledgements: [],
    pagination: _pagination.PageResponse.fromPartial({}),
    height: _client.Height.fromPartial({})
  };
}
var QueryPacketAcknowledgementsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.acknowledgements),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _channel.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
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
      acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements) ? object.acknowledgements.map(function (e) {
        return _channel.PacketState.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$acknowledgeme2;
    var message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = ((_object$acknowledgeme2 = object.acknowledgements) === null || _object$acknowledgeme2 === void 0 ? void 0 : _object$acknowledgeme2.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryPacketAcknowledgementsResponse = QueryPacketAcknowledgementsResponse;
function createBaseQueryUnreceivedPacketsRequest() {
  return {
    port_id: "",
    channel_id: "",
    packet_commitment_sequences: []
  };
}
var QueryUnreceivedPacketsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    writer.uint32(26).fork();
    var _iterator6 = _createForOfIteratorHelper(message.packet_commitment_sequences),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedPacketsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_commitment_sequences.push(reader.uint64());
            }
          } else {
            message.packet_commitment_sequences.push(reader.uint64());
          }
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      packet_commitment_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_commitment_sequences) ? object.packet_commitment_sequences.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id9, _object$channel_id9, _object$packet_commit2;
    var message = createBaseQueryUnreceivedPacketsRequest();
    message.port_id = (_object$port_id9 = object.port_id) !== null && _object$port_id9 !== void 0 ? _object$port_id9 : "";
    message.channel_id = (_object$channel_id9 = object.channel_id) !== null && _object$channel_id9 !== void 0 ? _object$channel_id9 : "";
    message.packet_commitment_sequences = ((_object$packet_commit2 = object.packet_commitment_sequences) === null || _object$packet_commit2 === void 0 ? void 0 : _object$packet_commit2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryUnreceivedPacketsRequest = QueryUnreceivedPacketsRequest;
function createBaseQueryUnreceivedPacketsResponse() {
  return {
    sequences: [],
    height: _client.Height.fromPartial({})
  };
}
var QueryUnreceivedPacketsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator7 = _createForOfIteratorHelper(message.sequences),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    writer.ldelim();
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = _client.Height.decode(reader, reader.uint32());
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
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : [],
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sequences;
    var message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = ((_object$sequences = object.sequences) === null || _object$sequences === void 0 ? void 0 : _object$sequences.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryUnreceivedPacketsResponse = QueryUnreceivedPacketsResponse;
function createBaseQueryUnreceivedAcksRequest() {
  return {
    port_id: "",
    channel_id: "",
    packet_ack_sequences: []
  };
}
var QueryUnreceivedAcksRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    writer.uint32(26).fork();
    var _iterator8 = _createForOfIteratorHelper(message.packet_ack_sequences),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedAcksRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_ack_sequences.push(reader.uint64());
            }
          } else {
            message.packet_ack_sequences.push(reader.uint64());
          }
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      packet_ack_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_ack_sequences) ? object.packet_ack_sequences.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id10, _object$channel_id10, _object$packet_ack_se;
    var message = createBaseQueryUnreceivedAcksRequest();
    message.port_id = (_object$port_id10 = object.port_id) !== null && _object$port_id10 !== void 0 ? _object$port_id10 : "";
    message.channel_id = (_object$channel_id10 = object.channel_id) !== null && _object$channel_id10 !== void 0 ? _object$channel_id10 : "";
    message.packet_ack_sequences = ((_object$packet_ack_se = object.packet_ack_sequences) === null || _object$packet_ack_se === void 0 ? void 0 : _object$packet_ack_se.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryUnreceivedAcksRequest = QueryUnreceivedAcksRequest;
function createBaseQueryUnreceivedAcksResponse() {
  return {
    sequences: [],
    height: _client.Height.fromPartial({})
  };
}
var QueryUnreceivedAcksResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator9 = _createForOfIteratorHelper(message.sequences),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    writer.ldelim();
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = _client.Height.decode(reader, reader.uint32());
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
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : [],
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sequences2;
    var message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = ((_object$sequences2 = object.sequences) === null || _object$sequences2 === void 0 ? void 0 : _object$sequences2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryUnreceivedAcksResponse = QueryUnreceivedAcksResponse;
function createBaseQueryNextSequenceReceiveRequest() {
  return {
    port_id: "",
    channel_id: ""
  };
}
var QueryNextSequenceReceiveRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNextSequenceReceiveRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id11, _object$channel_id11;
    var message = createBaseQueryNextSequenceReceiveRequest();
    message.port_id = (_object$port_id11 = object.port_id) !== null && _object$port_id11 !== void 0 ? _object$port_id11 : "";
    message.channel_id = (_object$channel_id11 = object.channel_id) !== null && _object$channel_id11 !== void 0 ? _object$channel_id11 : "";
    return message;
  }
};
exports.QueryNextSequenceReceiveRequest = QueryNextSequenceReceiveRequest;
function createBaseQueryNextSequenceReceiveResponse() {
  return {
    next_sequence_receive: _helpers.Long.UZERO,
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryNextSequenceReceiveResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.next_sequence_receive.isZero()) {
      writer.uint32(8).uint64(message.next_sequence_receive);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNextSequenceReceiveResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_sequence_receive = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      next_sequence_receive: (0, _helpers.isSet)(object.next_sequence_receive) ? _helpers.Long.fromValue(object.next_sequence_receive) : _helpers.Long.UZERO,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof7;
    var message = createBaseQueryNextSequenceReceiveResponse();
    message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? _helpers.Long.fromValue(object.next_sequence_receive) : _helpers.Long.UZERO;
    message.proof = (_object$proof7 = object.proof) !== null && _object$proof7 !== void 0 ? _object$proof7 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryNextSequenceReceiveResponse = QueryNextSequenceReceiveResponse;
function createBaseQueryNextSequenceSendRequest() {
  return {
    port_id: "",
    channel_id: ""
  };
}
var QueryNextSequenceSendRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNextSequenceSendRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id12, _object$channel_id12;
    var message = createBaseQueryNextSequenceSendRequest();
    message.port_id = (_object$port_id12 = object.port_id) !== null && _object$port_id12 !== void 0 ? _object$port_id12 : "";
    message.channel_id = (_object$channel_id12 = object.channel_id) !== null && _object$channel_id12 !== void 0 ? _object$channel_id12 : "";
    return message;
  }
};
exports.QueryNextSequenceSendRequest = QueryNextSequenceSendRequest;
function createBaseQueryNextSequenceSendResponse() {
  return {
    next_sequence_send: _helpers.Long.UZERO,
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryNextSequenceSendResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.next_sequence_send.isZero()) {
      writer.uint32(8).uint64(message.next_sequence_send);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      _client.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNextSequenceSendResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_sequence_send = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = _client.Height.decode(reader, reader.uint32());
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
      next_sequence_send: (0, _helpers.isSet)(object.next_sequence_send) ? _helpers.Long.fromValue(object.next_sequence_send) : _helpers.Long.UZERO,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof8;
    var message = createBaseQueryNextSequenceSendResponse();
    message.next_sequence_send = object.next_sequence_send !== undefined && object.next_sequence_send !== null ? _helpers.Long.fromValue(object.next_sequence_send) : _helpers.Long.UZERO;
    message.proof = (_object$proof8 = object.proof) !== null && _object$proof8 !== void 0 ? _object$proof8 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryNextSequenceSendResponse = QueryNextSequenceSendResponse;