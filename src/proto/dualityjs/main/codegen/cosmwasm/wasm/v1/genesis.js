"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sequence = exports.GenesisState = exports.Contract = exports.Code = void 0;
var _types = require("./types");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState - genesis state of x/wasm */

/** Code struct encompasses CodeInfo and CodeBytes */

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

/** Sequence key and value of an id generation counter */

function createBaseGenesisState() {
  return {
    params: _types.Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _types.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.codes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Code.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.contracts),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        Contract.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.sequences),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        Sequence.encode(_v2, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _types.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      params: (0, _helpers.isSet)(object.params) ? _types.Params.fromJSON(object.params) : undefined,
      codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes) ? object.codes.map(function (e) {
        return Code.fromJSON(e);
      }) : [],
      contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts) ? object.contracts.map(function (e) {
        return Contract.fromJSON(e);
      }) : [],
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(function (e) {
        return Sequence.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$codes, _object$contracts, _object$sequences;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _types.Params.fromPartial(object.params) : undefined;
    message.codes = ((_object$codes = object.codes) === null || _object$codes === void 0 ? void 0 : _object$codes.map(function (e) {
      return Code.fromPartial(e);
    })) || [];
    message.contracts = ((_object$contracts = object.contracts) === null || _object$contracts === void 0 ? void 0 : _object$contracts.map(function (e) {
      return Contract.fromPartial(e);
    })) || [];
    message.sequences = ((_object$sequences = object.sequences) === null || _object$sequences === void 0 ? void 0 : _object$sequences.map(function (e) {
      return Sequence.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;
function createBaseCode() {
  return {
    code_id: _helpers.Long.UZERO,
    code_info: _types.CodeInfo.fromPartial({}),
    code_bytes: new Uint8Array(),
    pinned: false
  };
}
var Code = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.code_info !== undefined) {
      _types.CodeInfo.encode(message.code_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.code_bytes.length !== 0) {
      writer.uint32(26).bytes(message.code_bytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCode();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.code_info = _types.CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.code_bytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
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
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      code_info: (0, _helpers.isSet)(object.code_info) ? _types.CodeInfo.fromJSON(object.code_info) : undefined,
      code_bytes: (0, _helpers.isSet)(object.code_bytes) ? (0, _helpers.bytesFromBase64)(object.code_bytes) : new Uint8Array(),
      pinned: (0, _helpers.isSet)(object.pinned) ? Boolean(object.pinned) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$code_bytes, _object$pinned;
    var message = createBaseCode();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.code_info = object.code_info !== undefined && object.code_info !== null ? _types.CodeInfo.fromPartial(object.code_info) : undefined;
    message.code_bytes = (_object$code_bytes = object.code_bytes) !== null && _object$code_bytes !== void 0 ? _object$code_bytes : new Uint8Array();
    message.pinned = (_object$pinned = object.pinned) !== null && _object$pinned !== void 0 ? _object$pinned : false;
    return message;
  }
};
exports.Code = Code;
function createBaseContract() {
  return {
    contract_address: "",
    contract_info: _types.ContractInfo.fromPartial({}),
    contract_state: [],
    contract_code_history: []
  };
}
var Contract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.contract_info !== undefined) {
      _types.ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
    }
    var _iterator4 = _createForOfIteratorHelper(message.contract_state),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _types.Model.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.contract_code_history),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        _types.ContractCodeHistoryEntry.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;
        case 2:
          message.contract_info = _types.ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contract_state.push(_types.Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contract_code_history.push(_types.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
      contract_address: (0, _helpers.isSet)(object.contract_address) ? String(object.contract_address) : "",
      contract_info: (0, _helpers.isSet)(object.contract_info) ? _types.ContractInfo.fromJSON(object.contract_info) : undefined,
      contract_state: Array.isArray(object === null || object === void 0 ? void 0 : object.contract_state) ? object.contract_state.map(function (e) {
        return _types.Model.fromJSON(e);
      }) : [],
      contract_code_history: Array.isArray(object === null || object === void 0 ? void 0 : object.contract_code_history) ? object.contract_code_history.map(function (e) {
        return _types.ContractCodeHistoryEntry.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$contract_addr, _object$contract_stat, _object$contract_code;
    var message = createBaseContract();
    message.contract_address = (_object$contract_addr = object.contract_address) !== null && _object$contract_addr !== void 0 ? _object$contract_addr : "";
    message.contract_info = object.contract_info !== undefined && object.contract_info !== null ? _types.ContractInfo.fromPartial(object.contract_info) : undefined;
    message.contract_state = ((_object$contract_stat = object.contract_state) === null || _object$contract_stat === void 0 ? void 0 : _object$contract_stat.map(function (e) {
      return _types.Model.fromPartial(e);
    })) || [];
    message.contract_code_history = ((_object$contract_code = object.contract_code_history) === null || _object$contract_code === void 0 ? void 0 : _object$contract_code.map(function (e) {
      return _types.ContractCodeHistoryEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Contract = Contract;
function createBaseSequence() {
  return {
    id_key: new Uint8Array(),
    value: _helpers.Long.UZERO
  };
}
var Sequence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.id_key.length !== 0) {
      writer.uint32(10).bytes(message.id_key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSequence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id_key = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
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
      id_key: (0, _helpers.isSet)(object.id_key) ? (0, _helpers.bytesFromBase64)(object.id_key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? _helpers.Long.fromValue(object.value) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$id_key;
    var message = createBaseSequence();
    message.id_key = (_object$id_key = object.id_key) !== null && _object$id_key !== void 0 ? _object$id_key : new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? _helpers.Long.fromValue(object.value) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Sequence = Sequence;