"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = exports.EpochInfo = void 0;
var _timestamp = require("../../google/protobuf/timestamp");
var _duration = require("../../google/protobuf/duration");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */

/** GenesisState defines the epochs module's genesis state. */

function createBaseEpochInfo() {
  return {
    identifier: "",
    start_time: _timestamp.Timestamp.fromPartial({}),
    duration: _duration.Duration.fromPartial({}),
    current_epoch: _helpers.Long.ZERO,
    current_epoch_start_time: _timestamp.Timestamp.fromPartial({}),
    epoch_counting_started: false,
    current_epoch_start_height: _helpers.Long.ZERO
  };
}
var EpochInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.start_time !== undefined) {
      _timestamp.Timestamp.encode(message.start_time, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (!message.current_epoch.isZero()) {
      writer.uint32(32).int64(message.current_epoch);
    }
    if (message.current_epoch_start_time !== undefined) {
      _timestamp.Timestamp.encode(message.current_epoch_start_time, writer.uint32(42).fork()).ldelim();
    }
    if (message.epoch_counting_started === true) {
      writer.uint32(48).bool(message.epoch_counting_started);
    }
    if (!message.current_epoch_start_height.isZero()) {
      writer.uint32(64).int64(message.current_epoch_start_height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEpochInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.start_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.current_epoch = reader.int64();
          break;
        case 5:
          message.current_epoch_start_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.epoch_counting_started = reader.bool();
          break;
        case 8:
          message.current_epoch_start_height = reader.int64();
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
      identifier: (0, _helpers.isSet)(object.identifier) ? String(object.identifier) : "",
      start_time: (0, _helpers.isSet)(object.start_time) ? (0, _helpers.fromJsonTimestamp)(object.start_time) : undefined,
      duration: (0, _helpers.isSet)(object.duration) ? _duration.Duration.fromJSON(object.duration) : undefined,
      current_epoch: (0, _helpers.isSet)(object.current_epoch) ? _helpers.Long.fromValue(object.current_epoch) : _helpers.Long.ZERO,
      current_epoch_start_time: (0, _helpers.isSet)(object.current_epoch_start_time) ? (0, _helpers.fromJsonTimestamp)(object.current_epoch_start_time) : undefined,
      epoch_counting_started: (0, _helpers.isSet)(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : false,
      current_epoch_start_height: (0, _helpers.isSet)(object.current_epoch_start_height) ? _helpers.Long.fromValue(object.current_epoch_start_height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$identifier, _object$epoch_countin;
    var message = createBaseEpochInfo();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? _timestamp.Timestamp.fromPartial(object.start_time) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? _helpers.Long.fromValue(object.current_epoch) : _helpers.Long.ZERO;
    message.current_epoch_start_time = object.current_epoch_start_time !== undefined && object.current_epoch_start_time !== null ? _timestamp.Timestamp.fromPartial(object.current_epoch_start_time) : undefined;
    message.epoch_counting_started = (_object$epoch_countin = object.epoch_counting_started) !== null && _object$epoch_countin !== void 0 ? _object$epoch_countin : false;
    message.current_epoch_start_height = object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null ? _helpers.Long.fromValue(object.current_epoch_start_height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.EpochInfo = EpochInfo;
function createBaseGenesisState() {
  return {
    epochs: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.epochs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
      epochs: Array.isArray(object === null || object === void 0 ? void 0 : object.epochs) ? object.epochs.map(function (e) {
        return EpochInfo.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$epochs;
    var message = createBaseGenesisState();
    message.epochs = ((_object$epochs = object.epochs) === null || _object$epochs === void 0 ? void 0 : _object$epochs.map(function (e) {
      return EpochInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;