import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, bytesFromBase64 } from "../../helpers";
export interface PacketPing {}
export interface PacketPong {}
export interface PacketMsg {
  channel_id: number;
  eof: boolean;
  data: Uint8Array;
}
export interface Packet {
  packet_ping?: PacketPing;
  packet_pong?: PacketPong;
  packet_msg?: PacketMsg;
}
export interface AuthSigMessage {
  pub_key: PublicKey;
  sig: Uint8Array;
}
function createBasePacketPing(): PacketPing {
  return {};
}
export const PacketPing = {
  encode(_: PacketPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): PacketPing {
    return {};
  },
  fromPartial(_: DeepPartial<PacketPing>): PacketPing {
    const message = createBasePacketPing();
    return message;
  }
};
function createBasePacketPong(): PacketPong {
  return {};
}
export const PacketPong = {
  encode(_: PacketPong, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPong();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): PacketPong {
    return {};
  },
  fromPartial(_: DeepPartial<PacketPong>): PacketPong {
    const message = createBasePacketPong();
    return message;
  }
};
function createBasePacketMsg(): PacketMsg {
  return {
    channel_id: 0,
    eof: false,
    data: new Uint8Array()
  };
}
export const PacketMsg = {
  encode(message: PacketMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object: any): PacketMsg {
    return {
      channel_id: isSet(object.channel_id) ? Number(object.channel_id) : 0,
      eof: isSet(object.eof) ? Boolean(object.eof) : false,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<PacketMsg>): PacketMsg {
    const message = createBasePacketMsg();
    message.channel_id = object.channel_id ?? 0;
    message.eof = object.eof ?? false;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBasePacket(): Packet {
  return {
    packet_ping: undefined,
    packet_pong: undefined,
    packet_msg: undefined
  };
}
export const Packet = {
  encode(message: Packet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object: any): Packet {
    return {
      packet_ping: isSet(object.packet_ping) ? PacketPing.fromJSON(object.packet_ping) : undefined,
      packet_pong: isSet(object.packet_pong) ? PacketPong.fromJSON(object.packet_pong) : undefined,
      packet_msg: isSet(object.packet_msg) ? PacketMsg.fromJSON(object.packet_msg) : undefined
    };
  },
  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = createBasePacket();
    message.packet_ping = object.packet_ping !== undefined && object.packet_ping !== null ? PacketPing.fromPartial(object.packet_ping) : undefined;
    message.packet_pong = object.packet_pong !== undefined && object.packet_pong !== null ? PacketPong.fromPartial(object.packet_pong) : undefined;
    message.packet_msg = object.packet_msg !== undefined && object.packet_msg !== null ? PacketMsg.fromPartial(object.packet_msg) : undefined;
    return message;
  }
};
function createBaseAuthSigMessage(): AuthSigMessage {
  return {
    pub_key: PublicKey.fromPartial({}),
    sig: new Uint8Array()
  };
}
export const AuthSigMessage = {
  encode(message: AuthSigMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthSigMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
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
  fromJSON(object: any): AuthSigMessage {
    return {
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<AuthSigMessage>): AuthSigMessage {
    const message = createBaseAuthSigMessage();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  }
};