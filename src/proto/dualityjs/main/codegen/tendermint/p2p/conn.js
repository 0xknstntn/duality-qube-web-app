"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PacketPong = exports.PacketPing = exports.PacketMsg = exports.Packet = exports.AuthSigMessage = void 0;
var _keys = require("../crypto/keys");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBasePacketPing() {
  return {};
}
var PacketPing = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketPing();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBasePacketPing();
    return message;
  }
};
exports.PacketPing = PacketPing;
function createBasePacketPong() {
  return {};
}
var PacketPong = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketPong();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBasePacketPong();
    return message;
  }
};
exports.PacketPong = PacketPong;
function createBasePacketMsg() {
  return {
    channel_id: 0,
    eof: false,
    data: new Uint8Array()
  };
}
var PacketMsg = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.channel_id !== 0) {
      writer.uint32(8).int32(message.channel_id);
    }
    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketMsg();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel_id = reader.int32();
          break;
        case 2:
          message.eof = reader.bool();
          break;
        case 3:
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
      channel_id: (0, _helpers.isSet)(object.channel_id) ? Number(object.channel_id) : 0,
      eof: (0, _helpers.isSet)(object.eof) ? Boolean(object.eof) : false,
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$channel_id, _object$eof, _object$data;
    var message = createBasePacketMsg();
    message.channel_id = (_object$channel_id = object.channel_id) !== null && _object$channel_id !== void 0 ? _object$channel_id : 0;
    message.eof = (_object$eof = object.eof) !== null && _object$eof !== void 0 ? _object$eof : false;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
exports.PacketMsg = PacketMsg;
function createBasePacket() {
  return {
    packet_ping: undefined,
    packet_pong: undefined,
    packet_msg: undefined
  };
}
var Packet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.packet_ping !== undefined) {
      PacketPing.encode(message.packet_ping, writer.uint32(10).fork()).ldelim();
    }
    if (message.packet_pong !== undefined) {
      PacketPong.encode(message.packet_pong, writer.uint32(18).fork()).ldelim();
    }
    if (message.packet_msg !== undefined) {
      PacketMsg.encode(message.packet_msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacket();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet_ping = PacketPing.decode(reader, reader.uint32());
          break;
        case 2:
          message.packet_pong = PacketPong.decode(reader, reader.uint32());
          break;
        case 3:
          message.packet_msg = PacketMsg.decode(reader, reader.uint32());
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
      packet_ping: (0, _helpers.isSet)(object.packet_ping) ? PacketPing.fromJSON(object.packet_ping) : undefined,
      packet_pong: (0, _helpers.isSet)(object.packet_pong) ? PacketPong.fromJSON(object.packet_pong) : undefined,
      packet_msg: (0, _helpers.isSet)(object.packet_msg) ? PacketMsg.fromJSON(object.packet_msg) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePacket();
    message.packet_ping = object.packet_ping !== undefined && object.packet_ping !== null ? PacketPing.fromPartial(object.packet_ping) : undefined;
    message.packet_pong = object.packet_pong !== undefined && object.packet_pong !== null ? PacketPong.fromPartial(object.packet_pong) : undefined;
    message.packet_msg = object.packet_msg !== undefined && object.packet_msg !== null ? PacketMsg.fromPartial(object.packet_msg) : undefined;
    return message;
  }
};
exports.Packet = Packet;
function createBaseAuthSigMessage() {
  return {
    pub_key: _keys.PublicKey.fromPartial({}),
    sig: new Uint8Array()
  };
}
var AuthSigMessage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pub_key !== undefined) {
      _keys.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthSigMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = _keys.PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.sig = reader.bytes();
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
      pub_key: (0, _helpers.isSet)(object.pub_key) ? _keys.PublicKey.fromJSON(object.pub_key) : undefined,
      sig: (0, _helpers.isSet)(object.sig) ? (0, _helpers.bytesFromBase64)(object.sig) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sig;
    var message = createBaseAuthSigMessage();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? _keys.PublicKey.fromPartial(object.pub_key) : undefined;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  }
};
exports.AuthSigMessage = AuthSigMessage;