"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxEncodeResponse = exports.TxEncodeRequest = exports.TxEncodeAminoResponse = exports.TxEncodeAminoRequest = exports.TxDecodeResponse = exports.TxDecodeRequest = exports.TxDecodeAminoResponse = exports.TxDecodeAminoRequest = exports.SimulateResponse = exports.SimulateRequest = exports.OrderBy = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.GetTxResponse = exports.GetTxRequest = exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.BroadcastMode = void 0;
exports.broadcastModeFromJSON = broadcastModeFromJSON;
exports.broadcastModeToJSON = broadcastModeToJSON;
exports.orderByFromJSON = orderByFromJSON;
exports.orderByToJSON = orderByToJSON;
var _tx = require("./tx");
var _pagination = require("../../base/query/v1beta1/pagination");
var _abci = require("../../base/abci/v1beta1/abci");
var _types = require("../../../tendermint/types/types");
var _block = require("../../../tendermint/types/block");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** OrderBy defines the sorting order */
var OrderBy = /*#__PURE__*/function (OrderBy) {
  OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OrderBy;
}({});
exports.OrderBy = OrderBy;
function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
function orderByToJSON(object) {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
var BroadcastMode = /*#__PURE__*/function (BroadcastMode) {
  BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BroadcastMode;
}({});
exports.BroadcastMode = BroadcastMode;
function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
function broadcastModeToJSON(object) {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

/** GetTxResponse is the response type for the Service.GetTx method. */

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: _pagination.PageRequest.fromPartial({}),
    order_by: 0,
    page: _helpers.Long.UZERO,
    limit: _helpers.Long.UZERO
  };
}
var GetTxsEventRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.events),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.order_by !== 0) {
      writer.uint32(24).int32(message.order_by);
    }
    if (!message.page.isZero()) {
      writer.uint32(32).uint64(message.page);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.order_by = reader.int32();
          break;
        case 4:
          message.page = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return String(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined,
      order_by: (0, _helpers.isSet)(object.order_by) ? orderByFromJSON(object.order_by) : -1,
      page: (0, _helpers.isSet)(object.page) ? _helpers.Long.fromValue(object.page) : _helpers.Long.UZERO,
      limit: (0, _helpers.isSet)(object.limit) ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$events, _object$order_by;
    var message = createBaseGetTxsEventRequest();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return e;
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    message.order_by = (_object$order_by = object.order_by) !== null && _object$order_by !== void 0 ? _object$order_by : 0;
    message.page = object.page !== undefined && object.page !== null ? _helpers.Long.fromValue(object.page) : _helpers.Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GetTxsEventRequest = GetTxsEventRequest;
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    tx_responses: [],
    pagination: _pagination.PageResponse.fromPartial({}),
    total: _helpers.Long.UZERO
  };
}
var GetTxsEventResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.txs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _tx.Tx.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.tx_responses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _abci.TxResponse.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total.isZero()) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(_tx.Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tx_responses.push(_abci.TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return _tx.Tx.fromJSON(e);
      }) : [],
      tx_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.tx_responses) ? object.tx_responses.map(function (e) {
        return _abci.TxResponse.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined,
      total: (0, _helpers.isSet)(object.total) ? _helpers.Long.fromValue(object.total) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$txs, _object$tx_responses;
    var message = createBaseGetTxsEventResponse();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return _tx.Tx.fromPartial(e);
    })) || [];
    message.tx_responses = ((_object$tx_responses = object.tx_responses) === null || _object$tx_responses === void 0 ? void 0 : _object$tx_responses.map(function (e) {
      return _abci.TxResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.total = object.total !== undefined && object.total !== null ? _helpers.Long.fromValue(object.total) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GetTxsEventResponse = GetTxsEventResponse;
function createBaseBroadcastTxRequest() {
  return {
    tx_bytes: new Uint8Array(),
    mode: 0
  };
}
var BroadcastTxRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
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
      tx_bytes: (0, _helpers.isSet)(object.tx_bytes) ? (0, _helpers.bytesFromBase64)(object.tx_bytes) : new Uint8Array(),
      mode: (0, _helpers.isSet)(object.mode) ? broadcastModeFromJSON(object.mode) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tx_bytes, _object$mode;
    var message = createBaseBroadcastTxRequest();
    message.tx_bytes = (_object$tx_bytes = object.tx_bytes) !== null && _object$tx_bytes !== void 0 ? _object$tx_bytes : new Uint8Array();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
exports.BroadcastTxRequest = BroadcastTxRequest;
function createBaseBroadcastTxResponse() {
  return {
    tx_response: _abci.TxResponse.fromPartial({})
  };
}
var BroadcastTxResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx_response !== undefined) {
      _abci.TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_response = _abci.TxResponse.decode(reader, reader.uint32());
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
      tx_response: (0, _helpers.isSet)(object.tx_response) ? _abci.TxResponse.fromJSON(object.tx_response) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBroadcastTxResponse();
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? _abci.TxResponse.fromPartial(object.tx_response) : undefined;
    return message;
  }
};
exports.BroadcastTxResponse = BroadcastTxResponse;
function createBaseSimulateRequest() {
  return {
    tx: _tx.Tx.fromPartial({}),
    tx_bytes: new Uint8Array()
  };
}
var SimulateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      _tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.tx_bytes.length !== 0) {
      writer.uint32(18).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimulateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = _tx.Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.tx_bytes = reader.bytes();
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
      tx: (0, _helpers.isSet)(object.tx) ? _tx.Tx.fromJSON(object.tx) : undefined,
      tx_bytes: (0, _helpers.isSet)(object.tx_bytes) ? (0, _helpers.bytesFromBase64)(object.tx_bytes) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tx_bytes2;
    var message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? _tx.Tx.fromPartial(object.tx) : undefined;
    message.tx_bytes = (_object$tx_bytes2 = object.tx_bytes) !== null && _object$tx_bytes2 !== void 0 ? _object$tx_bytes2 : new Uint8Array();
    return message;
  }
};
exports.SimulateRequest = SimulateRequest;
function createBaseSimulateResponse() {
  return {
    gas_info: _abci.GasInfo.fromPartial({}),
    result: _abci.Result.fromPartial({})
  };
}
var SimulateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.gas_info !== undefined) {
      _abci.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      _abci.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimulateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_info = _abci.GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = _abci.Result.decode(reader, reader.uint32());
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
      gas_info: (0, _helpers.isSet)(object.gas_info) ? _abci.GasInfo.fromJSON(object.gas_info) : undefined,
      result: (0, _helpers.isSet)(object.result) ? _abci.Result.fromJSON(object.result) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSimulateResponse();
    message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? _abci.GasInfo.fromPartial(object.gas_info) : undefined;
    message.result = object.result !== undefined && object.result !== null ? _abci.Result.fromPartial(object.result) : undefined;
    return message;
  }
};
exports.SimulateResponse = SimulateResponse;
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
var GetTxRequest = {
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
    var message = createBaseGetTxRequest();
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
    var message = createBaseGetTxRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
exports.GetTxRequest = GetTxRequest;
function createBaseGetTxResponse() {
  return {
    tx: _tx.Tx.fromPartial({}),
    tx_response: _abci.TxResponse.fromPartial({})
  };
}
var GetTxResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      _tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.tx_response !== undefined) {
      _abci.TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = _tx.Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.tx_response = _abci.TxResponse.decode(reader, reader.uint32());
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
      tx: (0, _helpers.isSet)(object.tx) ? _tx.Tx.fromJSON(object.tx) : undefined,
      tx_response: (0, _helpers.isSet)(object.tx_response) ? _abci.TxResponse.fromJSON(object.tx_response) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? _tx.Tx.fromPartial(object.tx) : undefined;
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? _abci.TxResponse.fromPartial(object.tx_response) : undefined;
    return message;
  }
};
exports.GetTxResponse = GetTxResponse;
function createBaseGetBlockWithTxsRequest() {
  return {
    height: _helpers.Long.ZERO,
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var GetBlockWithTxsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetBlockWithTxsRequest = GetBlockWithTxsRequest;
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    block_id: _types.BlockID.fromPartial({}),
    block: _block.Block.fromPartial({}),
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var GetBlockWithTxsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.txs),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _tx.Tx.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.block_id !== undefined) {
      _types.BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(_tx.Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.block_id = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        case 4:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return _tx.Tx.fromJSON(e);
      }) : [],
      block_id: (0, _helpers.isSet)(object.block_id) ? _types.BlockID.fromJSON(object.block_id) : undefined,
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined,
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$txs2;
    var message = createBaseGetBlockWithTxsResponse();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(function (e) {
      return _tx.Tx.fromPartial(e);
    })) || [];
    message.block_id = object.block_id !== undefined && object.block_id !== null ? _types.BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetBlockWithTxsResponse = GetBlockWithTxsResponse;
function createBaseTxDecodeRequest() {
  return {
    tx_bytes: new Uint8Array()
  };
}
var TxDecodeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
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
      tx_bytes: (0, _helpers.isSet)(object.tx_bytes) ? (0, _helpers.bytesFromBase64)(object.tx_bytes) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tx_bytes3;
    var message = createBaseTxDecodeRequest();
    message.tx_bytes = (_object$tx_bytes3 = object.tx_bytes) !== null && _object$tx_bytes3 !== void 0 ? _object$tx_bytes3 : new Uint8Array();
    return message;
  }
};
exports.TxDecodeRequest = TxDecodeRequest;
function createBaseTxDecodeResponse() {
  return {
    tx: _tx.Tx.fromPartial({})
  };
}
var TxDecodeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      _tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = _tx.Tx.decode(reader, reader.uint32());
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
      tx: (0, _helpers.isSet)(object.tx) ? _tx.Tx.fromJSON(object.tx) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseTxDecodeResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? _tx.Tx.fromPartial(object.tx) : undefined;
    return message;
  }
};
exports.TxDecodeResponse = TxDecodeResponse;
function createBaseTxEncodeRequest() {
  return {
    tx: _tx.Tx.fromPartial({})
  };
}
var TxEncodeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      _tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = _tx.Tx.decode(reader, reader.uint32());
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
      tx: (0, _helpers.isSet)(object.tx) ? _tx.Tx.fromJSON(object.tx) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseTxEncodeRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? _tx.Tx.fromPartial(object.tx) : undefined;
    return message;
  }
};
exports.TxEncodeRequest = TxEncodeRequest;
function createBaseTxEncodeResponse() {
  return {
    tx_bytes: new Uint8Array()
  };
}
var TxEncodeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
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
      tx_bytes: (0, _helpers.isSet)(object.tx_bytes) ? (0, _helpers.bytesFromBase64)(object.tx_bytes) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tx_bytes4;
    var message = createBaseTxEncodeResponse();
    message.tx_bytes = (_object$tx_bytes4 = object.tx_bytes) !== null && _object$tx_bytes4 !== void 0 ? _object$tx_bytes4 : new Uint8Array();
    return message;
  }
};
exports.TxEncodeResponse = TxEncodeResponse;
function createBaseTxEncodeAminoRequest() {
  return {
    amino_json: ""
  };
}
var TxEncodeAminoRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amino_json !== "") {
      writer.uint32(10).string(message.amino_json);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_json = reader.string();
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
      amino_json: (0, _helpers.isSet)(object.amino_json) ? String(object.amino_json) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amino_json;
    var message = createBaseTxEncodeAminoRequest();
    message.amino_json = (_object$amino_json = object.amino_json) !== null && _object$amino_json !== void 0 ? _object$amino_json : "";
    return message;
  }
};
exports.TxEncodeAminoRequest = TxEncodeAminoRequest;
function createBaseTxEncodeAminoResponse() {
  return {
    amino_binary: new Uint8Array()
  };
}
var TxEncodeAminoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amino_binary.length !== 0) {
      writer.uint32(10).bytes(message.amino_binary);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_binary = reader.bytes();
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
      amino_binary: (0, _helpers.isSet)(object.amino_binary) ? (0, _helpers.bytesFromBase64)(object.amino_binary) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amino_binary;
    var message = createBaseTxEncodeAminoResponse();
    message.amino_binary = (_object$amino_binary = object.amino_binary) !== null && _object$amino_binary !== void 0 ? _object$amino_binary : new Uint8Array();
    return message;
  }
};
exports.TxEncodeAminoResponse = TxEncodeAminoResponse;
function createBaseTxDecodeAminoRequest() {
  return {
    amino_binary: new Uint8Array()
  };
}
var TxDecodeAminoRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amino_binary.length !== 0) {
      writer.uint32(10).bytes(message.amino_binary);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_binary = reader.bytes();
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
      amino_binary: (0, _helpers.isSet)(object.amino_binary) ? (0, _helpers.bytesFromBase64)(object.amino_binary) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amino_binary2;
    var message = createBaseTxDecodeAminoRequest();
    message.amino_binary = (_object$amino_binary2 = object.amino_binary) !== null && _object$amino_binary2 !== void 0 ? _object$amino_binary2 : new Uint8Array();
    return message;
  }
};
exports.TxDecodeAminoRequest = TxDecodeAminoRequest;
function createBaseTxDecodeAminoResponse() {
  return {
    amino_json: ""
  };
}
var TxDecodeAminoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amino_json !== "") {
      writer.uint32(10).string(message.amino_json);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_json = reader.string();
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
      amino_json: (0, _helpers.isSet)(object.amino_json) ? String(object.amino_json) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amino_json2;
    var message = createBaseTxDecodeAminoResponse();
    message.amino_json = (_object$amino_json2 = object.amino_json) !== null && _object$amino_json2 !== void 0 ? _object$amino_json2 : "";
    return message;
  }
};
exports.TxDecodeAminoResponse = TxDecodeAminoResponse;