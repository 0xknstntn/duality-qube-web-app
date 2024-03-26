"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxResponse = exports.TxMsgData = exports.StringEvent = exports.SimulationResponse = exports.SearchTxsResult = exports.Result = exports.MsgData = exports.GasInfo = exports.Attribute = exports.ABCIMessageLog = void 0;
var _any = require("../../../../google/protobuf/any");
var _types = require("../../../../tendermint/abci/types");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */

/** GasInfo defines tx execution gas context. */

/** Result is the union of ResponseFormat and ResponseCheckTx. */

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
/** SearchTxsResult defines a structure for querying txs pageable */
function createBaseTxResponse() {
  return {
    height: _helpers.Long.ZERO,
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    raw_log: "",
    logs: [],
    info: "",
    gas_wanted: _helpers.Long.ZERO,
    gas_used: _helpers.Long.ZERO,
    tx: _any.Any.fromPartial({}),
    timestamp: "",
    events: []
  };
}
var TxResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.raw_log !== "") {
      writer.uint32(50).string(message.raw_log);
    }
    var _iterator = _createForOfIteratorHelper(message.logs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (!message.gas_wanted.isZero()) {
      writer.uint32(72).int64(message.gas_wanted);
    }
    if (!message.gas_used.isZero()) {
      writer.uint32(80).int64(message.gas_used);
    }
    if (message.tx !== undefined) {
      _any.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    var _iterator2 = _createForOfIteratorHelper(message.events),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _types.Event.encode(_v, writer.uint32(106).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.raw_log = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gas_wanted = reader.int64();
          break;
        case 10:
          message.gas_used = reader.int64();
          break;
        case 11:
          message.tx = _any.Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(_types.Event.decode(reader, reader.uint32()));
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
      txhash: (0, _helpers.isSet)(object.txhash) ? String(object.txhash) : "",
      codespace: (0, _helpers.isSet)(object.codespace) ? String(object.codespace) : "",
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      data: (0, _helpers.isSet)(object.data) ? String(object.data) : "",
      raw_log: (0, _helpers.isSet)(object.raw_log) ? String(object.raw_log) : "",
      logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map(function (e) {
        return ABCIMessageLog.fromJSON(e);
      }) : [],
      info: (0, _helpers.isSet)(object.info) ? String(object.info) : "",
      gas_wanted: (0, _helpers.isSet)(object.gas_wanted) ? _helpers.Long.fromValue(object.gas_wanted) : _helpers.Long.ZERO,
      gas_used: (0, _helpers.isSet)(object.gas_used) ? _helpers.Long.fromValue(object.gas_used) : _helpers.Long.ZERO,
      tx: (0, _helpers.isSet)(object.tx) ? _any.Any.fromJSON(object.tx) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? String(object.timestamp) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return _types.Event.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$txhash, _object$codespace, _object$code, _object$data, _object$raw_log, _object$logs, _object$info, _object$timestamp, _object$events;
    var message = createBaseTxResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.txhash = (_object$txhash = object.txhash) !== null && _object$txhash !== void 0 ? _object$txhash : "";
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : "";
    message.raw_log = (_object$raw_log = object.raw_log) !== null && _object$raw_log !== void 0 ? _object$raw_log : "";
    message.logs = ((_object$logs = object.logs) === null || _object$logs === void 0 ? void 0 : _object$logs.map(function (e) {
      return ABCIMessageLog.fromPartial(e);
    })) || [];
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? _helpers.Long.fromValue(object.gas_wanted) : _helpers.Long.ZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? _helpers.Long.fromValue(object.gas_used) : _helpers.Long.ZERO;
    message.tx = object.tx !== undefined && object.tx !== null ? _any.Any.fromPartial(object.tx) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : "";
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return _types.Event.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxResponse = TxResponse;
function createBaseABCIMessageLog() {
  return {
    msg_index: 0,
    log: "",
    events: []
  };
}
var ABCIMessageLog = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.msg_index !== 0) {
      writer.uint32(8).uint32(message.msg_index);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    var _iterator3 = _createForOfIteratorHelper(message.events),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_index = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
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
      msg_index: (0, _helpers.isSet)(object.msg_index) ? Number(object.msg_index) : 0,
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return StringEvent.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$msg_index, _object$log, _object$events2;
    var message = createBaseABCIMessageLog();
    message.msg_index = (_object$msg_index = object.msg_index) !== null && _object$msg_index !== void 0 ? _object$msg_index : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(function (e) {
      return StringEvent.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ABCIMessageLog = ABCIMessageLog;
function createBaseStringEvent() {
  return {
    type: "",
    attributes: []
  };
}
var StringEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    var _iterator4 = _createForOfIteratorHelper(message.attributes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        Attribute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStringEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
      type: (0, _helpers.isSet)(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(function (e) {
        return Attribute.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$attributes;
    var message = createBaseStringEvent();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(function (e) {
      return Attribute.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.StringEvent = StringEvent;
function createBaseAttribute() {
  return {
    key: "",
    value: ""
  };
}
var Attribute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAttribute();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
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
      key: (0, _helpers.isSet)(object.key) ? String(object.key) : "",
      value: (0, _helpers.isSet)(object.value) ? String(object.value) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$value;
    var message = createBaseAttribute();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
exports.Attribute = Attribute;
function createBaseGasInfo() {
  return {
    gas_wanted: _helpers.Long.UZERO,
    gas_used: _helpers.Long.UZERO
  };
}
var GasInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.gas_wanted.isZero()) {
      writer.uint32(8).uint64(message.gas_wanted);
    }
    if (!message.gas_used.isZero()) {
      writer.uint32(16).uint64(message.gas_used);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGasInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_wanted = reader.uint64();
          break;
        case 2:
          message.gas_used = reader.uint64();
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
      gas_wanted: (0, _helpers.isSet)(object.gas_wanted) ? _helpers.Long.fromValue(object.gas_wanted) : _helpers.Long.UZERO,
      gas_used: (0, _helpers.isSet)(object.gas_used) ? _helpers.Long.fromValue(object.gas_used) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGasInfo();
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? _helpers.Long.fromValue(object.gas_wanted) : _helpers.Long.UZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? _helpers.Long.fromValue(object.gas_used) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GasInfo = GasInfo;
function createBaseResult() {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msg_responses: []
  };
}
var Result = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    var _iterator5 = _createForOfIteratorHelper(message.events),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _types.Event.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.msg_responses),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v2 = _step6.value;
        _any.Any.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(_types.Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msg_responses.push(_any.Any.decode(reader, reader.uint32()));
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return _types.Event.fromJSON(e);
      }) : [],
      msg_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$log2, _object$events3, _object$msg_responses;
    var message = createBaseResult();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(function (e) {
      return _types.Event.fromPartial(e);
    })) || [];
    message.msg_responses = ((_object$msg_responses = object.msg_responses) === null || _object$msg_responses === void 0 ? void 0 : _object$msg_responses.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Result = Result;
function createBaseSimulationResponse() {
  return {
    gas_info: GasInfo.fromPartial({}),
    result: Result.fromPartial({})
  };
}
var SimulationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.gas_info !== undefined) {
      GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimulationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_info = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
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
      gas_info: (0, _helpers.isSet)(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
      result: (0, _helpers.isSet)(object.result) ? Result.fromJSON(object.result) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSimulationResponse();
    message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
exports.SimulationResponse = SimulationResponse;
function createBaseMsgData() {
  return {
    msg_type: "",
    data: new Uint8Array()
  };
}
var MsgData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.msg_type !== "") {
      writer.uint32(10).string(message.msg_type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_type = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      msg_type: (0, _helpers.isSet)(object.msg_type) ? String(object.msg_type) : "",
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$msg_type, _object$data3;
    var message = createBaseMsgData();
    message.msg_type = (_object$msg_type = object.msg_type) !== null && _object$msg_type !== void 0 ? _object$msg_type : "";
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
exports.MsgData = MsgData;
function createBaseTxMsgData() {
  return {
    data: [],
    msg_responses: []
  };
}
var TxMsgData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.data),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        MsgData.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.msg_responses),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v3 = _step8.value;
        _any.Any.encode(_v3, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxMsgData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msg_responses.push(_any.Any.decode(reader, reader.uint32()));
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
      data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(function (e) {
        return MsgData.fromJSON(e);
      }) : [],
      msg_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$data4, _object$msg_responses2;
    var message = createBaseTxMsgData();
    message.data = ((_object$data4 = object.data) === null || _object$data4 === void 0 ? void 0 : _object$data4.map(function (e) {
      return MsgData.fromPartial(e);
    })) || [];
    message.msg_responses = ((_object$msg_responses2 = object.msg_responses) === null || _object$msg_responses2 === void 0 ? void 0 : _object$msg_responses2.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxMsgData = TxMsgData;
function createBaseSearchTxsResult() {
  return {
    total_count: _helpers.Long.UZERO,
    count: _helpers.Long.UZERO,
    page_number: _helpers.Long.UZERO,
    page_total: _helpers.Long.UZERO,
    limit: _helpers.Long.UZERO,
    txs: []
  };
}
var SearchTxsResult = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.total_count.isZero()) {
      writer.uint32(8).uint64(message.total_count);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    if (!message.page_number.isZero()) {
      writer.uint32(24).uint64(message.page_number);
    }
    if (!message.page_total.isZero()) {
      writer.uint32(32).uint64(message.page_total);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    var _iterator9 = _createForOfIteratorHelper(message.txs),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_count = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.page_number = reader.uint64();
          break;
        case 4:
          message.page_total = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
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
      total_count: (0, _helpers.isSet)(object.total_count) ? _helpers.Long.fromValue(object.total_count) : _helpers.Long.UZERO,
      count: (0, _helpers.isSet)(object.count) ? _helpers.Long.fromValue(object.count) : _helpers.Long.UZERO,
      page_number: (0, _helpers.isSet)(object.page_number) ? _helpers.Long.fromValue(object.page_number) : _helpers.Long.UZERO,
      page_total: (0, _helpers.isSet)(object.page_total) ? _helpers.Long.fromValue(object.page_total) : _helpers.Long.UZERO,
      limit: (0, _helpers.isSet)(object.limit) ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO,
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return TxResponse.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$txs;
    var message = createBaseSearchTxsResult();
    message.total_count = object.total_count !== undefined && object.total_count !== null ? _helpers.Long.fromValue(object.total_count) : _helpers.Long.UZERO;
    message.count = object.count !== undefined && object.count !== null ? _helpers.Long.fromValue(object.count) : _helpers.Long.UZERO;
    message.page_number = object.page_number !== undefined && object.page_number !== null ? _helpers.Long.fromValue(object.page_number) : _helpers.Long.UZERO;
    message.page_total = object.page_total !== undefined && object.page_total !== null ? _helpers.Long.fromValue(object.page_total) : _helpers.Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO;
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return TxResponse.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SearchTxsResult = SearchTxsResult;