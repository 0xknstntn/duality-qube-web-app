"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryConsensusStateHeightsResponse = exports.QueryConsensusStateHeightsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = void 0;
var _pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var _client = require("./client");
var _any = require("../../../../google/protobuf/any");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */

/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */

/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */

/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */

/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */

/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */

/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */

/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */

/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */

/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */

/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */

/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */

/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */

/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */

/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */

/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */

/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */

/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */

function createBaseQueryClientStateRequest() {
  return {
    client_id: ""
  };
}
var QueryClientStateRequest = {
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
    var message = createBaseQueryClientStateRequest();
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
    var message = createBaseQueryClientStateRequest();
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    return message;
  }
};
exports.QueryClientStateRequest = QueryClientStateRequest;
function createBaseQueryClientStateResponse() {
  return {
    client_state: _client.ClientState.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_state !== undefined) {
      _client.ClientState.encode(message.client_state, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_state = _client.ClientState.decode(reader, reader.uint32());
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
      client_state: (0, _helpers.isSet)(object.client_state) ? _client.ClientState.fromJSON(object.client_state) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof;
    var message = createBaseQueryClientStateResponse();
    message.client_state = object.client_state !== undefined && object.client_state !== null ? _client.ClientState.fromPartial(object.client_state) : undefined;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryClientStateResponse = QueryClientStateResponse;
function createBaseQueryClientStatesRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryClientStatesRequest = {
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
    var message = createBaseQueryClientStatesRequest();
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
    var message = createBaseQueryClientStatesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryClientStatesRequest = QueryClientStatesRequest;
function createBaseQueryClientStatesResponse() {
  return {
    client_states: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryClientStatesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.client_states),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _client.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_states.push(_client.IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      client_states: Array.isArray(object === null || object === void 0 ? void 0 : object.client_states) ? object.client_states.map(function (e) {
        return _client.IdentifiedClientState.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_states;
    var message = createBaseQueryClientStatesResponse();
    message.client_states = ((_object$client_states = object.client_states) === null || _object$client_states === void 0 ? void 0 : _object$client_states.map(function (e) {
      return _client.IdentifiedClientState.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryClientStatesResponse = QueryClientStatesResponse;
function createBaseQueryConsensusStateRequest() {
  return {
    client_id: "",
    revision_number: _helpers.Long.UZERO,
    revision_height: _helpers.Long.UZERO,
    latest_height: false
  };
}
var QueryConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (!message.revision_number.isZero()) {
      writer.uint32(16).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(24).uint64(message.revision_height);
    }
    if (message.latest_height === true) {
      writer.uint32(32).bool(message.latest_height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.revision_number = reader.uint64();
          break;
        case 3:
          message.revision_height = reader.uint64();
          break;
        case 4:
          message.latest_height = reader.bool();
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
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : "",
      revision_number: (0, _helpers.isSet)(object.revision_number) ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO,
      revision_height: (0, _helpers.isSet)(object.revision_height) ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO,
      latest_height: (0, _helpers.isSet)(object.latest_height) ? Boolean(object.latest_height) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id2, _object$latest_height;
    var message = createBaseQueryConsensusStateRequest();
    message.client_id = (_object$client_id2 = object.client_id) !== null && _object$client_id2 !== void 0 ? _object$client_id2 : "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO;
    message.latest_height = (_object$latest_height = object.latest_height) !== null && _object$latest_height !== void 0 ? _object$latest_height : false;
    return message;
  }
};
exports.QueryConsensusStateRequest = QueryConsensusStateRequest;
function createBaseQueryConsensusStateResponse() {
  return {
    consensus_state: _any.Any.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: _client.Height.fromPartial({})
  };
}
var QueryConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consensus_state !== undefined) {
      _any.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = _any.Any.decode(reader, reader.uint32());
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
      consensus_state: (0, _helpers.isSet)(object.consensus_state) ? _any.Any.fromJSON(object.consensus_state) : undefined,
      proof: (0, _helpers.isSet)(object.proof) ? (0, _helpers.bytesFromBase64)(object.proof) : new Uint8Array(),
      proof_height: (0, _helpers.isSet)(object.proof_height) ? _client.Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proof2;
    var message = createBaseQueryConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? _any.Any.fromPartial(object.consensus_state) : undefined;
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? _client.Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
exports.QueryConsensusStateResponse = QueryConsensusStateResponse;
function createBaseQueryConsensusStatesRequest() {
  return {
    client_id: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryConsensusStatesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
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
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id3;
    var message = createBaseQueryConsensusStatesRequest();
    message.client_id = (_object$client_id3 = object.client_id) !== null && _object$client_id3 !== void 0 ? _object$client_id3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConsensusStatesRequest = QueryConsensusStatesRequest;
function createBaseQueryConsensusStatesResponse() {
  return {
    consensus_states: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryConsensusStatesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.consensus_states),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _client.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_states.push(_client.ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      consensus_states: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_states) ? object.consensus_states.map(function (e) {
        return _client.ConsensusStateWithHeight.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$consensus_sta;
    var message = createBaseQueryConsensusStatesResponse();
    message.consensus_states = ((_object$consensus_sta = object.consensus_states) === null || _object$consensus_sta === void 0 ? void 0 : _object$consensus_sta.map(function (e) {
      return _client.ConsensusStateWithHeight.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConsensusStatesResponse = QueryConsensusStatesResponse;
function createBaseQueryConsensusStateHeightsRequest() {
  return {
    client_id: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryConsensusStateHeightsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConsensusStateHeightsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
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
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id4;
    var message = createBaseQueryConsensusStateHeightsRequest();
    message.client_id = (_object$client_id4 = object.client_id) !== null && _object$client_id4 !== void 0 ? _object$client_id4 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConsensusStateHeightsRequest = QueryConsensusStateHeightsRequest;
function createBaseQueryConsensusStateHeightsResponse() {
  return {
    consensus_state_heights: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryConsensusStateHeightsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.consensus_state_heights),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _client.Height.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConsensusStateHeightsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state_heights.push(_client.Height.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      consensus_state_heights: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_state_heights) ? object.consensus_state_heights.map(function (e) {
        return _client.Height.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$consensus_sta2;
    var message = createBaseQueryConsensusStateHeightsResponse();
    message.consensus_state_heights = ((_object$consensus_sta2 = object.consensus_state_heights) === null || _object$consensus_sta2 === void 0 ? void 0 : _object$consensus_sta2.map(function (e) {
      return _client.Height.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConsensusStateHeightsResponse = QueryConsensusStateHeightsResponse;
function createBaseQueryClientStatusRequest() {
  return {
    client_id: ""
  };
}
var QueryClientStatusRequest = {
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
    var message = createBaseQueryClientStatusRequest();
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
    var _object$client_id5;
    var message = createBaseQueryClientStatusRequest();
    message.client_id = (_object$client_id5 = object.client_id) !== null && _object$client_id5 !== void 0 ? _object$client_id5 : "";
    return message;
  }
};
exports.QueryClientStatusRequest = QueryClientStatusRequest;
function createBaseQueryClientStatusResponse() {
  return {
    status: ""
  };
}
var QueryClientStatusResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
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
      status: (0, _helpers.isSet)(object.status) ? String(object.status) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$status;
    var message = createBaseQueryClientStatusResponse();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    return message;
  }
};
exports.QueryClientStatusResponse = QueryClientStatusResponse;
function createBaseQueryClientParamsRequest() {
  return {};
}
var QueryClientParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClientParamsRequest();
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
    var message = createBaseQueryClientParamsRequest();
    return message;
  }
};
exports.QueryClientParamsRequest = QueryClientParamsRequest;
function createBaseQueryClientParamsResponse() {
  return {
    params: _client.Params.fromPartial({})
  };
}
var QueryClientParamsResponse = {
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
    var message = createBaseQueryClientParamsResponse();
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
    var message = createBaseQueryClientParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _client.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryClientParamsResponse = QueryClientParamsResponse;
function createBaseQueryUpgradedClientStateRequest() {
  return {};
}
var QueryUpgradedClientStateRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUpgradedClientStateRequest();
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
    var message = createBaseQueryUpgradedClientStateRequest();
    return message;
  }
};
exports.QueryUpgradedClientStateRequest = QueryUpgradedClientStateRequest;
function createBaseQueryUpgradedClientStateResponse() {
  return {
    upgraded_client_state: _any.Any.fromPartial({})
  };
}
var QueryUpgradedClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.upgraded_client_state !== undefined) {
      _any.Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgraded_client_state = _any.Any.decode(reader, reader.uint32());
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
      upgraded_client_state: (0, _helpers.isSet)(object.upgraded_client_state) ? _any.Any.fromJSON(object.upgraded_client_state) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryUpgradedClientStateResponse();
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? _any.Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  }
};
exports.QueryUpgradedClientStateResponse = QueryUpgradedClientStateResponse;
function createBaseQueryUpgradedConsensusStateRequest() {
  return {};
}
var QueryUpgradedConsensusStateRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUpgradedConsensusStateRequest();
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
    var message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  }
};
exports.QueryUpgradedConsensusStateRequest = QueryUpgradedConsensusStateRequest;
function createBaseQueryUpgradedConsensusStateResponse() {
  return {
    upgraded_consensus_state: _any.Any.fromPartial({})
  };
}
var QueryUpgradedConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.upgraded_consensus_state !== undefined) {
      _any.Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgraded_consensus_state = _any.Any.decode(reader, reader.uint32());
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
      upgraded_consensus_state: (0, _helpers.isSet)(object.upgraded_consensus_state) ? _any.Any.fromJSON(object.upgraded_consensus_state) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgraded_consensus_state = object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null ? _any.Any.fromPartial(object.upgraded_consensus_state) : undefined;
    return message;
  }
};
exports.QueryUpgradedConsensusStateResponse = QueryUpgradedConsensusStateResponse;