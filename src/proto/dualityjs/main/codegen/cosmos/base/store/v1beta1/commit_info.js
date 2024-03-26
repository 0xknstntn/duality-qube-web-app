"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreInfo = exports.CommitInfo = exports.CommitID = void 0;
var _timestamp = require("../../../../google/protobuf/timestamp");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */

function createBaseCommitInfo() {
  return {
    version: _helpers.Long.ZERO,
    store_infos: [],
    timestamp: _timestamp.Timestamp.fromPartial({})
  };
}
var CommitInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    var _iterator = _createForOfIteratorHelper(message.store_infos),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.store_infos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      version: (0, _helpers.isSet)(object.version) ? _helpers.Long.fromValue(object.version) : _helpers.Long.ZERO,
      store_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.store_infos) ? object.store_infos.map(function (e) {
        return StoreInfo.fromJSON(e);
      }) : [],
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$store_infos;
    var message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? _helpers.Long.fromValue(object.version) : _helpers.Long.ZERO;
    message.store_infos = ((_object$store_infos = object.store_infos) === null || _object$store_infos === void 0 ? void 0 : _object$store_infos.map(function (e) {
      return StoreInfo.fromPartial(e);
    })) || [];
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
exports.CommitInfo = CommitInfo;
function createBaseStoreInfo() {
  return {
    name: "",
    commit_id: CommitID.fromPartial({})
  };
}
var StoreInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commit_id !== undefined) {
      CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commit_id = CommitID.decode(reader, reader.uint32());
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
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      commit_id: (0, _helpers.isSet)(object.commit_id) ? CommitID.fromJSON(object.commit_id) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name;
    var message = createBaseStoreInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.commit_id = object.commit_id !== undefined && object.commit_id !== null ? CommitID.fromPartial(object.commit_id) : undefined;
    return message;
  }
};
exports.StoreInfo = StoreInfo;
function createBaseCommitID() {
  return {
    version: _helpers.Long.ZERO,
    hash: new Uint8Array()
  };
}
var CommitID = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitID();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.hash = reader.bytes();
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
      version: (0, _helpers.isSet)(object.version) ? _helpers.Long.fromValue(object.version) : _helpers.Long.ZERO,
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash;
    var message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? _helpers.Long.fromValue(object.version) : _helpers.Long.ZERO;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
exports.CommitID = CommitID;