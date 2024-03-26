"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = exports.QueryConnectionParamsResponse = exports.QueryConnectionParamsRequest = exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = void 0;
var _pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var _connection = require("./connection");
var _client = require("../../client/v1/client");
var _any = require("../../../../google/protobuf/any");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */

/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */

/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */

/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */

/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */

/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */

/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */

/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */

/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */

/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */

/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */

/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */

function createBaseQueryConnectionRequest() {
  return {
    connection_id: ""
  };
}
var QueryConnectionRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
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
      connection_id: (0, _helpers.isSet)(object.connection_id) ? String(object.connection_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$connection_id;
    var message = createBaseQueryConnectionRequest();
    message.connection_id = (_object$connection_id = object.connection_id) !== null && _object$connection_id !== void 0 ? _object$connection_id : "";
    return message;
  }
};
exports.QueryConnectionRequest = QueryConnectionRequest;
function createBaseQueryConnectionResponse() {
  return {
    connection: _connection.ConnectionEnd.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryConnectionResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connection !== undefined) {
      _connection.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryConnectionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = _connection.ConnectionEnd.decode(reader, reader.uint32());
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
      connection: (0, _helpers.isSet)(object.connection) ? _connection.ConnectionEnd.fromJSON(object.connection) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof;
    var message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== undefined && object.connection !== null ? _connection.ConnectionEnd.fromPartial(object.connection) : undefined;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryConnectionResponse = QueryConnectionResponse;
function createBaseQueryConnectionsRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryConnectionsRequest = {
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
    var message = createBaseQueryConnectionsRequest();
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
    var message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConnectionsRequest = QueryConnectionsRequest;
function createBaseQueryConnectionsResponse() {
  return {
    connections: [],
    pagination: _pagination.PageResponse.fromPartial({}),
    height: _client.Height.fromPartial({})
  };
}
var QueryConnectionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.connections),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _connection.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryConnectionsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(_connection.IdentifiedConnection.decode(reader, reader.uint32()));
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
      connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections) ? object.connections.map(function (e) {
        return _connection.IdentifiedConnection.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$connections;
    var message = createBaseQueryConnectionsResponse();
    message.connections = ((_object$connections = object.connections) === null || _object$connections === void 0 ? void 0 : _object$connections.map(function (e) {
      return _connection.IdentifiedConnection.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryConnectionsResponse = QueryConnectionsResponse;
function createBaseQueryClientConnectionsRequest() {
  return {
    client_id: ""
  };
}
var QueryClientConnectionsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClientConnectionsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
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
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id;
    var message = createBaseQueryClientConnectionsRequest();
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    return message;
  }
};
exports.QueryClientConnectionsRequest = QueryClientConnectionsRequest;
function createBaseQueryClientConnectionsResponse() {
  return {
    connection_paths: [],
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryClientConnectionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.connection_paths),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
    var message = createBaseQueryClientConnectionsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_paths.push(reader.string());
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
      connection_paths: Array.isArray(object === null || object === void 0 ? void 0 : object.connection_paths) ? object.connection_paths.map(function (e) {
        return String(e);
      }) : [],
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$connection_pa, _object$proof2;
    var message = createBaseQueryClientConnectionsResponse();
    message.connection_paths = ((_object$connection_pa = object.connection_paths) === null || _object$connection_pa === void 0 ? void 0 : _object$connection_pa.map(function (e) {
      return e;
    })) || [];
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryClientConnectionsResponse = QueryClientConnectionsResponse;
function createBaseQueryConnectionClientStateRequest() {
  return {
    connection_id: ""
  };
}
var QueryConnectionClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionClientStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
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
      connection_id: (0, _helpers.isSet)(object.connection_id) ? String(object.connection_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$connection_id2;
    var message = createBaseQueryConnectionClientStateRequest();
    message.connection_id = (_object$connection_id2 = object.connection_id) !== null && _object$connection_id2 !== void 0 ? _object$connection_id2 : "";
    return message;
  }
};
exports.QueryConnectionClientStateRequest = QueryConnectionClientStateRequest;
function createBaseQueryConnectionClientStateResponse() {
  return {
    identified_client_state: _client.IdentifiedClientState.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryConnectionClientStateResponse = {
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
    var message = createBaseQueryConnectionClientStateResponse();
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
    var _object$proof3;
    var message = createBaseQueryConnectionClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? _client.IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = (_object$proof3 = object.proof) !== null && _object$proof3 !== void 0 ? _object$proof3 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryConnectionClientStateResponse = QueryConnectionClientStateResponse;
function createBaseQueryConnectionConsensusStateRequest() {
  return {
    connection_id: "",
    revision_number: _helpers.Long.UZERO,
    revision_height: _helpers.Long.UZERO
  };
}
var QueryConnectionConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (!message.revision_number.isZero()) {
      writer.uint32(16).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(24).uint64(message.revision_height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionConsensusStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.revision_number = reader.uint64();
          break;
        case 3:
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
      connection_id: (0, _helpers.isSet)(object.connection_id) ? String(object.connection_id) : "",
      revision_number: (0, _helpers.isSet)(object.revision_number) ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO,
      revision_height: (0, _helpers.isSet)(object.revision_height) ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$connection_id3;
    var message = createBaseQueryConnectionConsensusStateRequest();
    message.connection_id = (_object$connection_id3 = object.connection_id) !== null && _object$connection_id3 !== void 0 ? _object$connection_id3 : "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryConnectionConsensusStateRequest = QueryConnectionConsensusStateRequest;
function createBaseQueryConnectionConsensusStateResponse() {
  return {
    consensus_state: _any.Any.fromPartial({}),
    client_id: "",
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryConnectionConsensusStateResponse = {
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
    var message = createBaseQueryConnectionConsensusStateResponse();
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
    var _object$client_id2, _object$proof4;
    var message = createBaseQueryConnectionConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? _any.Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = (_object$client_id2 = object.client_id) !== null && _object$client_id2 !== void 0 ? _object$client_id2 : "";
    message.proof = (_object$proof4 = object.proof) !== null && _object$proof4 !== void 0 ? _object$proof4 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryConnectionConsensusStateResponse = QueryConnectionConsensusStateResponse;
function createBaseQueryConnectionParamsRequest() {
  return {};
}
var QueryConnectionParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionParamsRequest();
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
    var message = createBaseQueryConnectionParamsRequest();
    return message;
  }
};
exports.QueryConnectionParamsRequest = QueryConnectionParamsRequest;
function createBaseQueryConnectionParamsResponse() {
  return {
    params: _client.Params.fromPartial({})
  };
}
var QueryConnectionParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _client.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      params: (0, _helpers.isSet)(object.params) ? _client.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryConnectionParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _client.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryConnectionParamsResponse = QueryConnectionParamsResponse;