"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryTotalEscrowForDenomResponse = exports.QueryTotalEscrowForDenomRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryEscrowAddressResponse = exports.QueryEscrowAddressRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = exports.QueryDenomHashResponse = exports.QueryDenomHashRequest = void 0;
var _pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var _transfer = require("./transfer");
var _coin = require("../../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */

/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */

/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */

/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */

/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */

/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */

/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */

function createBaseQueryDenomTraceRequest() {
  return {
    hash: ""
  };
}
var QueryDenomTraceRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: (0, _helpers.isSet)(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash;
    var message = createBaseQueryDenomTraceRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
exports.QueryDenomTraceRequest = QueryDenomTraceRequest;
function createBaseQueryDenomTraceResponse() {
  return {
    denom_trace: _transfer.DenomTrace.fromPartial({})
  };
}
var QueryDenomTraceResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom_trace !== undefined) {
      _transfer.DenomTrace.encode(message.denom_trace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_trace = _transfer.DenomTrace.decode(reader, reader.uint32());
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
      denom_trace: (0, _helpers.isSet)(object.denom_trace) ? _transfer.DenomTrace.fromJSON(object.denom_trace) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDenomTraceResponse();
    message.denom_trace = object.denom_trace !== undefined && object.denom_trace !== null ? _transfer.DenomTrace.fromPartial(object.denom_trace) : undefined;
    return message;
  }
};
exports.QueryDenomTraceResponse = QueryDenomTraceResponse;
function createBaseQueryDenomTracesRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDenomTracesRequest = {
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
    var message = createBaseQueryDenomTracesRequest();
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
    var message = createBaseQueryDenomTracesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDenomTracesRequest = QueryDenomTracesRequest;
function createBaseQueryDenomTracesResponse() {
  return {
    denom_traces: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDenomTracesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.denom_traces),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _transfer.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_traces.push(_transfer.DenomTrace.decode(reader, reader.uint32()));
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
      denom_traces: Array.isArray(object === null || object === void 0 ? void 0 : object.denom_traces) ? object.denom_traces.map(function (e) {
        return _transfer.DenomTrace.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom_traces;
    var message = createBaseQueryDenomTracesResponse();
    message.denom_traces = ((_object$denom_traces = object.denom_traces) === null || _object$denom_traces === void 0 ? void 0 : _object$denom_traces.map(function (e) {
      return _transfer.DenomTrace.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDenomTracesResponse = QueryDenomTracesResponse;
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _transfer.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _transfer.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _transfer.Params.decode(reader, reader.uint32());
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
      params: (0, _helpers.isSet)(object.params) ? _transfer.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _transfer.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryDenomHashRequest() {
  return {
    trace: ""
  };
}
var QueryDenomHashRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
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
      trace: (0, _helpers.isSet)(object.trace) ? String(object.trace) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$trace;
    var message = createBaseQueryDenomHashRequest();
    message.trace = (_object$trace = object.trace) !== null && _object$trace !== void 0 ? _object$trace : "";
    return message;
  }
};
exports.QueryDenomHashRequest = QueryDenomHashRequest;
function createBaseQueryDenomHashResponse() {
  return {
    hash: ""
  };
}
var QueryDenomHashResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: (0, _helpers.isSet)(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash2;
    var message = createBaseQueryDenomHashResponse();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : "";
    return message;
  }
};
exports.QueryDenomHashResponse = QueryDenomHashResponse;
function createBaseQueryEscrowAddressRequest() {
  return {
    port_id: "",
    channel_id: ""
  };
}
var QueryEscrowAddressRequest = {
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
    var message = createBaseQueryEscrowAddressRequest();
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
    var message = createBaseQueryEscrowAddressRequest();
    message.port_id = (_object$port_id = object.port_id) !== null && _object$port_id !== void 0 ? _object$port_id : "";
    message.channel_id = (_object$channel_id = object.channel_id) !== null && _object$channel_id !== void 0 ? _object$channel_id : "";
    return message;
  }
};
exports.QueryEscrowAddressRequest = QueryEscrowAddressRequest;
function createBaseQueryEscrowAddressResponse() {
  return {
    escrow_address: ""
  };
}
var QueryEscrowAddressResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.escrow_address !== "") {
      writer.uint32(10).string(message.escrow_address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrow_address = reader.string();
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
      escrow_address: (0, _helpers.isSet)(object.escrow_address) ? String(object.escrow_address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$escrow_addres;
    var message = createBaseQueryEscrowAddressResponse();
    message.escrow_address = (_object$escrow_addres = object.escrow_address) !== null && _object$escrow_addres !== void 0 ? _object$escrow_addres : "";
    return message;
  }
};
exports.QueryEscrowAddressResponse = QueryEscrowAddressResponse;
function createBaseQueryTotalEscrowForDenomRequest() {
  return {
    denom: ""
  };
}
var QueryTotalEscrowForDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalEscrowForDenomRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom;
    var message = createBaseQueryTotalEscrowForDenomRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
exports.QueryTotalEscrowForDenomRequest = QueryTotalEscrowForDenomRequest;
function createBaseQueryTotalEscrowForDenomResponse() {
  return {
    amount: _coin.Coin.fromPartial({})
  };
}
var QueryTotalEscrowForDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalEscrowForDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
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
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryTotalEscrowForDenomResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.QueryTotalEscrowForDenomResponse = QueryTotalEscrowForDenomResponse;