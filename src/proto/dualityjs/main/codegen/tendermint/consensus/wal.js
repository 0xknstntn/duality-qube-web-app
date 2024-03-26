"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WALMessage = exports.TimeoutInfo = exports.TimedWALMessage = exports.MsgInfo = exports.EndHeight = void 0;
var _types = require("./types");
var _duration = require("../../google/protobuf/duration");
var _events = require("../types/events");
var _timestamp = require("../../google/protobuf/timestamp");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** MsgInfo are msgs from the reactor which may update the state */

/** TimeoutInfo internally generated messages which may update the state */

/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */

/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */

function createBaseMsgInfo() {
  return {
    msg: _types.Message.fromPartial({}),
    peer_id: ""
  };
}
var MsgInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.msg !== undefined) {
      _types.Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.peer_id !== "") {
      writer.uint32(18).string(message.peer_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = _types.Message.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      msg: (0, _helpers.isSet)(object.msg) ? _types.Message.fromJSON(object.msg) : undefined,
      peer_id: (0, _helpers.isSet)(object.peer_id) ? String(object.peer_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$peer_id;
    var message = createBaseMsgInfo();
    message.msg = object.msg !== undefined && object.msg !== null ? _types.Message.fromPartial(object.msg) : undefined;
    message.peer_id = (_object$peer_id = object.peer_id) !== null && _object$peer_id !== void 0 ? _object$peer_id : "";
    return message;
  }
};
exports.MsgInfo = MsgInfo;
function createBaseTimeoutInfo() {
  return {
    duration: _duration.Duration.fromPartial({}),
    height: _helpers.Long.ZERO,
    round: 0,
    step: 0
  };
}
var TimeoutInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimeoutInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      duration: (0, _helpers.isSet)(object.duration) ? _duration.Duration.fromJSON(object.duration) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      step: (0, _helpers.isSet)(object.step) ? Number(object.step) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round, _object$step;
    var message = createBaseTimeoutInfo();
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    return message;
  }
};
exports.TimeoutInfo = TimeoutInfo;
function createBaseEndHeight() {
  return {
    height: _helpers.Long.ZERO
  };
}
var EndHeight = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEndHeight();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEndHeight();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.EndHeight = EndHeight;
function createBaseWALMessage() {
  return {
    event_data_round_state: undefined,
    msg_info: undefined,
    timeout_info: undefined,
    end_height: undefined
  };
}
var WALMessage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.event_data_round_state !== undefined) {
      _events.EventDataRoundState.encode(message.event_data_round_state, writer.uint32(10).fork()).ldelim();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWALMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event_data_round_state = _events.EventDataRoundState.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      event_data_round_state: (0, _helpers.isSet)(object.event_data_round_state) ? _events.EventDataRoundState.fromJSON(object.event_data_round_state) : undefined,
      msg_info: (0, _helpers.isSet)(object.msg_info) ? MsgInfo.fromJSON(object.msg_info) : undefined,
      timeout_info: (0, _helpers.isSet)(object.timeout_info) ? TimeoutInfo.fromJSON(object.timeout_info) : undefined,
      end_height: (0, _helpers.isSet)(object.end_height) ? EndHeight.fromJSON(object.end_height) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseWALMessage();
    message.event_data_round_state = object.event_data_round_state !== undefined && object.event_data_round_state !== null ? _events.EventDataRoundState.fromPartial(object.event_data_round_state) : undefined;
    message.msg_info = object.msg_info !== undefined && object.msg_info !== null ? MsgInfo.fromPartial(object.msg_info) : undefined;
    message.timeout_info = object.timeout_info !== undefined && object.timeout_info !== null ? TimeoutInfo.fromPartial(object.timeout_info) : undefined;
    message.end_height = object.end_height !== undefined && object.end_height !== null ? EndHeight.fromPartial(object.end_height) : undefined;
    return message;
  }
};
exports.WALMessage = WALMessage;
function createBaseTimedWALMessage() {
  return {
    time: _timestamp.Timestamp.fromPartial({}),
    msg: WALMessage.fromPartial({})
  };
}
var TimedWALMessage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimedWALMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = _timestamp.Timestamp.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      time: (0, _helpers.isSet)(object.time) ? (0, _helpers.fromJsonTimestamp)(object.time) : undefined,
      msg: (0, _helpers.isSet)(object.msg) ? WALMessage.fromJSON(object.msg) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseTimedWALMessage();
    message.time = object.time !== undefined && object.time !== null ? _timestamp.Timestamp.fromPartial(object.time) : undefined;
    message.msg = object.msg !== undefined && object.msg !== null ? WALMessage.fromPartial(object.msg) : undefined;
    return message;
  }
};
exports.TimedWALMessage = TimedWALMessage;