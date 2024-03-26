"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSigningInfo = exports.Params = void 0;
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */

/** Params represents the parameters used for by the slashing module. */

function createBaseValidatorSigningInfo() {
  return {
    address: "",
    start_height: _helpers.Long.ZERO,
    index_offset: _helpers.Long.ZERO,
    jailed_until: _timestamp.Timestamp.fromPartial({}),
    tombstoned: false,
    missed_blocks_counter: _helpers.Long.ZERO
  };
}
var ValidatorSigningInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.start_height.isZero()) {
      writer.uint32(16).int64(message.start_height);
    }
    if (!message.index_offset.isZero()) {
      writer.uint32(24).int64(message.index_offset);
    }
    if (message.jailed_until !== undefined) {
      _timestamp.Timestamp.encode(message.jailed_until, writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (!message.missed_blocks_counter.isZero()) {
      writer.uint32(48).int64(message.missed_blocks_counter);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.start_height = reader.int64();
          break;
        case 3:
          message.index_offset = reader.int64();
          break;
        case 4:
          message.jailed_until = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missed_blocks_counter = reader.int64();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      start_height: (0, _helpers.isSet)(object.start_height) ? _helpers.Long.fromValue(object.start_height) : _helpers.Long.ZERO,
      index_offset: (0, _helpers.isSet)(object.index_offset) ? _helpers.Long.fromValue(object.index_offset) : _helpers.Long.ZERO,
      jailed_until: (0, _helpers.isSet)(object.jailed_until) ? (0, _helpers.fromJsonTimestamp)(object.jailed_until) : undefined,
      tombstoned: (0, _helpers.isSet)(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missed_blocks_counter: (0, _helpers.isSet)(object.missed_blocks_counter) ? _helpers.Long.fromValue(object.missed_blocks_counter) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$tombstoned;
    var message = createBaseValidatorSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.start_height = object.start_height !== undefined && object.start_height !== null ? _helpers.Long.fromValue(object.start_height) : _helpers.Long.ZERO;
    message.index_offset = object.index_offset !== undefined && object.index_offset !== null ? _helpers.Long.fromValue(object.index_offset) : _helpers.Long.ZERO;
    message.jailed_until = object.jailed_until !== undefined && object.jailed_until !== null ? _timestamp.Timestamp.fromPartial(object.jailed_until) : undefined;
    message.tombstoned = (_object$tombstoned = object.tombstoned) !== null && _object$tombstoned !== void 0 ? _object$tombstoned : false;
    message.missed_blocks_counter = object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null ? _helpers.Long.fromValue(object.missed_blocks_counter) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorSigningInfo = ValidatorSigningInfo;
function createBaseParams() {
  return {
    signed_blocks_window: _helpers.Long.ZERO,
    min_signed_per_window: new Uint8Array(),
    downtime_jail_duration: _duration.Duration.fromPartial({}),
    slash_fraction_double_sign: new Uint8Array(),
    slash_fraction_downtime: new Uint8Array()
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.signed_blocks_window.isZero()) {
      writer.uint32(8).int64(message.signed_blocks_window);
    }
    if (message.min_signed_per_window.length !== 0) {
      writer.uint32(18).bytes(message.min_signed_per_window);
    }
    if (message.downtime_jail_duration !== undefined) {
      _duration.Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slash_fraction_double_sign.length !== 0) {
      writer.uint32(34).bytes(message.slash_fraction_double_sign);
    }
    if (message.slash_fraction_downtime.length !== 0) {
      writer.uint32(42).bytes(message.slash_fraction_downtime);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signed_blocks_window = reader.int64();
          break;
        case 2:
          message.min_signed_per_window = reader.bytes();
          break;
        case 3:
          message.downtime_jail_duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slash_fraction_double_sign = reader.bytes();
          break;
        case 5:
          message.slash_fraction_downtime = reader.bytes();
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
      signed_blocks_window: (0, _helpers.isSet)(object.signed_blocks_window) ? _helpers.Long.fromValue(object.signed_blocks_window) : _helpers.Long.ZERO,
      min_signed_per_window: (0, _helpers.isSet)(object.min_signed_per_window) ? (0, _helpers.bytesFromBase64)(object.min_signed_per_window) : new Uint8Array(),
      downtime_jail_duration: (0, _helpers.isSet)(object.downtime_jail_duration) ? _duration.Duration.fromJSON(object.downtime_jail_duration) : undefined,
      slash_fraction_double_sign: (0, _helpers.isSet)(object.slash_fraction_double_sign) ? (0, _helpers.bytesFromBase64)(object.slash_fraction_double_sign) : new Uint8Array(),
      slash_fraction_downtime: (0, _helpers.isSet)(object.slash_fraction_downtime) ? (0, _helpers.bytesFromBase64)(object.slash_fraction_downtime) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$min_signed_pe, _object$slash_fractio, _object$slash_fractio2;
    var message = createBaseParams();
    message.signed_blocks_window = object.signed_blocks_window !== undefined && object.signed_blocks_window !== null ? _helpers.Long.fromValue(object.signed_blocks_window) : _helpers.Long.ZERO;
    message.min_signed_per_window = (_object$min_signed_pe = object.min_signed_per_window) !== null && _object$min_signed_pe !== void 0 ? _object$min_signed_pe : new Uint8Array();
    message.downtime_jail_duration = object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null ? _duration.Duration.fromPartial(object.downtime_jail_duration) : undefined;
    message.slash_fraction_double_sign = (_object$slash_fractio = object.slash_fraction_double_sign) !== null && _object$slash_fractio !== void 0 ? _object$slash_fractio : new Uint8Array();
    message.slash_fraction_downtime = (_object$slash_fractio2 = object.slash_fraction_downtime) !== null && _object$slash_fractio2 !== void 0 ? _object$slash_fractio2 : new Uint8Array();
    return message;
  }
};
exports.Params = Params;