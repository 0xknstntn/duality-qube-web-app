"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreKVPair = exports.BlockMetadata_DeliverTx = exports.BlockMetadata = void 0;
var _types = require("../../../../tendermint/abci/types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */

/** DeliverTx encapulate deliver tx request and response. */

function createBaseStoreKVPair() {
  return {
    store_key: "",
    "delete": false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
var StoreKVPair = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.store_key !== "") {
      writer.uint32(10).string(message.store_key);
    }
    if (message["delete"] === true) {
      writer.uint32(16).bool(message["delete"]);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreKVPair();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store_key = reader.string();
          break;
        case 2:
          message["delete"] = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
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
      store_key: (0, _helpers.isSet)(object.store_key) ? String(object.store_key) : "",
      "delete": (0, _helpers.isSet)(object["delete"]) ? Boolean(object["delete"]) : false,
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$store_key, _object$delete, _object$key, _object$value;
    var message = createBaseStoreKVPair();
    message.store_key = (_object$store_key = object.store_key) !== null && _object$store_key !== void 0 ? _object$store_key : "";
    message["delete"] = (_object$delete = object["delete"]) !== null && _object$delete !== void 0 ? _object$delete : false;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }
};
exports.StoreKVPair = StoreKVPair;
function createBaseBlockMetadata() {
  return {
    request_begin_block: _types.RequestBeginBlock.fromPartial({}),
    response_begin_block: _types.ResponseBeginBlock.fromPartial({}),
    deliver_txs: [],
    request_end_block: _types.RequestEndBlock.fromPartial({}),
    response_end_block: _types.ResponseEndBlock.fromPartial({}),
    response_commit: _types.ResponseCommit.fromPartial({})
  };
}
var BlockMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.request_begin_block !== undefined) {
      _types.RequestBeginBlock.encode(message.request_begin_block, writer.uint32(10).fork()).ldelim();
    }
    if (message.response_begin_block !== undefined) {
      _types.ResponseBeginBlock.encode(message.response_begin_block, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.deliver_txs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        BlockMetadata_DeliverTx.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.request_end_block !== undefined) {
      _types.RequestEndBlock.encode(message.request_end_block, writer.uint32(34).fork()).ldelim();
    }
    if (message.response_end_block !== undefined) {
      _types.ResponseEndBlock.encode(message.response_end_block, writer.uint32(42).fork()).ldelim();
    }
    if (message.response_commit !== undefined) {
      _types.ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request_begin_block = _types.RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.response_begin_block = _types.ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.deliver_txs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.request_end_block = _types.RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 5:
          message.response_end_block = _types.ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 6:
          message.response_commit = _types.ResponseCommit.decode(reader, reader.uint32());
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
      request_begin_block: (0, _helpers.isSet)(object.request_begin_block) ? _types.RequestBeginBlock.fromJSON(object.request_begin_block) : undefined,
      response_begin_block: (0, _helpers.isSet)(object.response_begin_block) ? _types.ResponseBeginBlock.fromJSON(object.response_begin_block) : undefined,
      deliver_txs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliver_txs) ? object.deliver_txs.map(function (e) {
        return BlockMetadata_DeliverTx.fromJSON(e);
      }) : [],
      request_end_block: (0, _helpers.isSet)(object.request_end_block) ? _types.RequestEndBlock.fromJSON(object.request_end_block) : undefined,
      response_end_block: (0, _helpers.isSet)(object.response_end_block) ? _types.ResponseEndBlock.fromJSON(object.response_end_block) : undefined,
      response_commit: (0, _helpers.isSet)(object.response_commit) ? _types.ResponseCommit.fromJSON(object.response_commit) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$deliver_txs;
    var message = createBaseBlockMetadata();
    message.request_begin_block = object.request_begin_block !== undefined && object.request_begin_block !== null ? _types.RequestBeginBlock.fromPartial(object.request_begin_block) : undefined;
    message.response_begin_block = object.response_begin_block !== undefined && object.response_begin_block !== null ? _types.ResponseBeginBlock.fromPartial(object.response_begin_block) : undefined;
    message.deliver_txs = ((_object$deliver_txs = object.deliver_txs) === null || _object$deliver_txs === void 0 ? void 0 : _object$deliver_txs.map(function (e) {
      return BlockMetadata_DeliverTx.fromPartial(e);
    })) || [];
    message.request_end_block = object.request_end_block !== undefined && object.request_end_block !== null ? _types.RequestEndBlock.fromPartial(object.request_end_block) : undefined;
    message.response_end_block = object.response_end_block !== undefined && object.response_end_block !== null ? _types.ResponseEndBlock.fromPartial(object.response_end_block) : undefined;
    message.response_commit = object.response_commit !== undefined && object.response_commit !== null ? _types.ResponseCommit.fromPartial(object.response_commit) : undefined;
    return message;
  }
};
exports.BlockMetadata = BlockMetadata;
function createBaseBlockMetadata_DeliverTx() {
  return {
    request: _types.RequestDeliverTx.fromPartial({}),
    response: _types.ResponseDeliverTx.fromPartial({})
  };
}
var BlockMetadata_DeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.request !== undefined) {
      _types.RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      _types.ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = _types.RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = _types.ResponseDeliverTx.decode(reader, reader.uint32());
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
      request: (0, _helpers.isSet)(object.request) ? _types.RequestDeliverTx.fromJSON(object.request) : undefined,
      response: (0, _helpers.isSet)(object.response) ? _types.ResponseDeliverTx.fromJSON(object.response) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockMetadata_DeliverTx();
    message.request = object.request !== undefined && object.request !== null ? _types.RequestDeliverTx.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? _types.ResponseDeliverTx.fromPartial(object.response) : undefined;
    return message;
  }
};
exports.BlockMetadata_DeliverTx = BlockMetadata_DeliverTx;