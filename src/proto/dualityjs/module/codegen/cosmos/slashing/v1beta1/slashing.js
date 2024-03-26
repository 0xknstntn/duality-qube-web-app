import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */

/** Params represents the parameters used for by the slashing module. */

function createBaseValidatorSigningInfo() {
  return {
    address: "",
    start_height: Long.ZERO,
    index_offset: Long.ZERO,
    jailed_until: Timestamp.fromPartial({}),
    tombstoned: false,
    missed_blocks_counter: Long.ZERO
  };
}
export const ValidatorSigningInfo = {
  encode(message, writer = _m0.Writer.create()) {
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
      Timestamp.encode(message.jailed_until, writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (!message.missed_blocks_counter.isZero()) {
      writer.uint32(48).int64(message.missed_blocks_counter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.jailed_until = Timestamp.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      start_height: isSet(object.start_height) ? Long.fromValue(object.start_height) : Long.ZERO,
      index_offset: isSet(object.index_offset) ? Long.fromValue(object.index_offset) : Long.ZERO,
      jailed_until: isSet(object.jailed_until) ? fromJsonTimestamp(object.jailed_until) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missed_blocks_counter: isSet(object.missed_blocks_counter) ? Long.fromValue(object.missed_blocks_counter) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$address, _object$tombstoned;
    const message = createBaseValidatorSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.start_height = object.start_height !== undefined && object.start_height !== null ? Long.fromValue(object.start_height) : Long.ZERO;
    message.index_offset = object.index_offset !== undefined && object.index_offset !== null ? Long.fromValue(object.index_offset) : Long.ZERO;
    message.jailed_until = object.jailed_until !== undefined && object.jailed_until !== null ? Timestamp.fromPartial(object.jailed_until) : undefined;
    message.tombstoned = (_object$tombstoned = object.tombstoned) !== null && _object$tombstoned !== void 0 ? _object$tombstoned : false;
    message.missed_blocks_counter = object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null ? Long.fromValue(object.missed_blocks_counter) : Long.ZERO;
    return message;
  }
};
function createBaseParams() {
  return {
    signed_blocks_window: Long.ZERO,
    min_signed_per_window: new Uint8Array(),
    downtime_jail_duration: Duration.fromPartial({}),
    slash_fraction_double_sign: new Uint8Array(),
    slash_fraction_downtime: new Uint8Array()
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.signed_blocks_window.isZero()) {
      writer.uint32(8).int64(message.signed_blocks_window);
    }
    if (message.min_signed_per_window.length !== 0) {
      writer.uint32(18).bytes(message.min_signed_per_window);
    }
    if (message.downtime_jail_duration !== undefined) {
      Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slash_fraction_double_sign.length !== 0) {
      writer.uint32(34).bytes(message.slash_fraction_double_sign);
    }
    if (message.slash_fraction_downtime.length !== 0) {
      writer.uint32(42).bytes(message.slash_fraction_downtime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signed_blocks_window = reader.int64();
          break;
        case 2:
          message.min_signed_per_window = reader.bytes();
          break;
        case 3:
          message.downtime_jail_duration = Duration.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      signed_blocks_window: isSet(object.signed_blocks_window) ? Long.fromValue(object.signed_blocks_window) : Long.ZERO,
      min_signed_per_window: isSet(object.min_signed_per_window) ? bytesFromBase64(object.min_signed_per_window) : new Uint8Array(),
      downtime_jail_duration: isSet(object.downtime_jail_duration) ? Duration.fromJSON(object.downtime_jail_duration) : undefined,
      slash_fraction_double_sign: isSet(object.slash_fraction_double_sign) ? bytesFromBase64(object.slash_fraction_double_sign) : new Uint8Array(),
      slash_fraction_downtime: isSet(object.slash_fraction_downtime) ? bytesFromBase64(object.slash_fraction_downtime) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$min_signed_pe, _object$slash_fractio, _object$slash_fractio2;
    const message = createBaseParams();
    message.signed_blocks_window = object.signed_blocks_window !== undefined && object.signed_blocks_window !== null ? Long.fromValue(object.signed_blocks_window) : Long.ZERO;
    message.min_signed_per_window = (_object$min_signed_pe = object.min_signed_per_window) !== null && _object$min_signed_pe !== void 0 ? _object$min_signed_pe : new Uint8Array();
    message.downtime_jail_duration = object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null ? Duration.fromPartial(object.downtime_jail_duration) : undefined;
    message.slash_fraction_double_sign = (_object$slash_fractio = object.slash_fraction_double_sign) !== null && _object$slash_fractio !== void 0 ? _object$slash_fractio : new Uint8Array();
    message.slash_fraction_downtime = (_object$slash_fractio2 = object.slash_fraction_downtime) !== null && _object$slash_fractio2 !== void 0 ? _object$slash_fractio2 : new Uint8Array();
    return message;
  }
};