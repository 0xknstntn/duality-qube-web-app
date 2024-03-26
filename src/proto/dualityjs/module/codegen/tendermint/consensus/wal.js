import { Message } from "./types";
import { Duration } from "../../google/protobuf/duration";
import { EventDataRoundState } from "../types/events";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgInfo are msgs from the reactor which may update the state */

/** TimeoutInfo internally generated messages which may update the state */

/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */

/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */

function createBaseMsgInfo() {
  return {
    msg: Message.fromPartial({}),
    peer_id: ""
  };
}
export const MsgInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg !== undefined) {
      Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.peer_id !== "") {
      writer.uint32(18).string(message.peer_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = Message.decode(reader, reader.uint32());
          break;
        case 2:
          message.peer_id = reader.string();
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
      msg: isSet(object.msg) ? Message.fromJSON(object.msg) : undefined,
      peer_id: isSet(object.peer_id) ? String(object.peer_id) : ""
    };
  },
  fromPartial(object) {
    var _object$peer_id;
    const message = createBaseMsgInfo();
    message.msg = object.msg !== undefined && object.msg !== null ? Message.fromPartial(object.msg) : undefined;
    message.peer_id = (_object$peer_id = object.peer_id) !== null && _object$peer_id !== void 0 ? _object$peer_id : "";
    return message;
  }
};
function createBaseTimeoutInfo() {
  return {
    duration: Duration.fromPartial({}),
    height: Long.ZERO,
    round: 0,
    step: 0
  };
}
export const TimeoutInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeoutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.step = reader.uint32();
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
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0
    };
  },
  fromPartial(object) {
    var _object$round, _object$step;
    const message = createBaseTimeoutInfo();
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    return message;
  }
};
function createBaseEndHeight() {
  return {
    height: Long.ZERO
  };
}
export const EndHeight = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEndHeight();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseWALMessage() {
  return {
    event_data_round_state: undefined,
    msg_info: undefined,
    timeout_info: undefined,
    end_height: undefined
  };
}
export const WALMessage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.event_data_round_state !== undefined) {
      EventDataRoundState.encode(message.event_data_round_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.msg_info !== undefined) {
      MsgInfo.encode(message.msg_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeout_info !== undefined) {
      TimeoutInfo.encode(message.timeout_info, writer.uint32(26).fork()).ldelim();
    }
    if (message.end_height !== undefined) {
      EndHeight.encode(message.end_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWALMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event_data_round_state = EventDataRoundState.decode(reader, reader.uint32());
          break;
        case 2:
          message.msg_info = MsgInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.timeout_info = TimeoutInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.end_height = EndHeight.decode(reader, reader.uint32());
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
      event_data_round_state: isSet(object.event_data_round_state) ? EventDataRoundState.fromJSON(object.event_data_round_state) : undefined,
      msg_info: isSet(object.msg_info) ? MsgInfo.fromJSON(object.msg_info) : undefined,
      timeout_info: isSet(object.timeout_info) ? TimeoutInfo.fromJSON(object.timeout_info) : undefined,
      end_height: isSet(object.end_height) ? EndHeight.fromJSON(object.end_height) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseWALMessage();
    message.event_data_round_state = object.event_data_round_state !== undefined && object.event_data_round_state !== null ? EventDataRoundState.fromPartial(object.event_data_round_state) : undefined;
    message.msg_info = object.msg_info !== undefined && object.msg_info !== null ? MsgInfo.fromPartial(object.msg_info) : undefined;
    message.timeout_info = object.timeout_info !== undefined && object.timeout_info !== null ? TimeoutInfo.fromPartial(object.timeout_info) : undefined;
    message.end_height = object.end_height !== undefined && object.end_height !== null ? EndHeight.fromPartial(object.end_height) : undefined;
    return message;
  }
};
function createBaseTimedWALMessage() {
  return {
    time: Timestamp.fromPartial({}),
    msg: WALMessage.fromPartial({})
  };
}
export const TimedWALMessage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedWALMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.msg = WALMessage.decode(reader, reader.uint32());
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
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      msg: isSet(object.msg) ? WALMessage.fromJSON(object.msg) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseTimedWALMessage();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.msg = object.msg !== undefined && object.msg !== null ? WALMessage.fromPartial(object.msg) : undefined;
    return message;
  }
};