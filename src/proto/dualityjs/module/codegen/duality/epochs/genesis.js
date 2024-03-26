import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */

/** GenesisState defines the epochs module's genesis state. */

function createBaseEpochInfo() {
  return {
    identifier: "",
    start_time: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
    current_epoch: Long.ZERO,
    current_epoch_start_time: Timestamp.fromPartial({}),
    epoch_counting_started: false,
    current_epoch_start_height: Long.ZERO
  };
}
export const EpochInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(message.start_time, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (!message.current_epoch.isZero()) {
      writer.uint32(32).int64(message.current_epoch);
    }
    if (message.current_epoch_start_time !== undefined) {
      Timestamp.encode(message.current_epoch_start_time, writer.uint32(42).fork()).ldelim();
    }
    if (message.epoch_counting_started === true) {
      writer.uint32(48).bool(message.epoch_counting_started);
    }
    if (!message.current_epoch_start_height.isZero()) {
      writer.uint32(64).int64(message.current_epoch_start_height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.start_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.current_epoch = reader.int64();
          break;
        case 5:
          message.current_epoch_start_time = Timestamp.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      current_epoch: isSet(object.current_epoch) ? Long.fromValue(object.current_epoch) : Long.ZERO,
      current_epoch_start_time: isSet(object.current_epoch_start_time) ? fromJsonTimestamp(object.current_epoch_start_time) : undefined,
      epoch_counting_started: isSet(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : false,
      current_epoch_start_height: isSet(object.current_epoch_start_height) ? Long.fromValue(object.current_epoch_start_height) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$identifier, _object$epoch_countin;
    const message = createBaseEpochInfo();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Timestamp.fromPartial(object.start_time) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? Long.fromValue(object.current_epoch) : Long.ZERO;
    message.current_epoch_start_time = object.current_epoch_start_time !== undefined && object.current_epoch_start_time !== null ? Timestamp.fromPartial(object.current_epoch_start_time) : undefined;
    message.epoch_counting_started = (_object$epoch_countin = object.epoch_counting_started) !== null && _object$epoch_countin !== void 0 ? _object$epoch_countin : false;
    message.current_epoch_start_height = object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null ? Long.fromValue(object.current_epoch_start_height) : Long.ZERO;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    epochs: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.epochs) {
      EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      epochs: Array.isArray(object === null || object === void 0 ? void 0 : object.epochs) ? object.epochs.map(e => EpochInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$epochs;
    const message = createBaseGenesisState();
    message.epochs = ((_object$epochs = object.epochs) === null || _object$epochs === void 0 ? void 0 : _object$epochs.map(e => EpochInfo.fromPartial(e))) || [];
    return message;
  }
};