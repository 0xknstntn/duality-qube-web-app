import { signedMsgTypeFromJSON } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseCanonicalBlockID() {
  return {
    hash: new Uint8Array(),
    part_set_header: CanonicalPartSetHeader.fromPartial({})
  };
}
export const CanonicalBlockID = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.part_set_header !== undefined) {
      CanonicalPartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.part_set_header = CanonicalPartSetHeader.decode(reader, reader.uint32());
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
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      part_set_header: isSet(object.part_set_header) ? CanonicalPartSetHeader.fromJSON(object.part_set_header) : undefined
    };
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseCanonicalBlockID();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? CanonicalPartSetHeader.fromPartial(object.part_set_header) : undefined;
    return message;
  }
};
function createBaseCanonicalPartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
export const CanonicalPartSetHeader = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalPartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
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
  fromJSON(object) {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$total, _object$hash2;
    const message = createBaseCanonicalPartSetHeader();
    message.total = (_object$total = object.total) !== null && _object$total !== void 0 ? _object$total : 0;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  }
};
function createBaseCanonicalProposal() {
  return {
    type: 0,
    height: Long.ZERO,
    round: Long.ZERO,
    pol_round: Long.ZERO,
    block_id: CanonicalBlockID.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
    chain_id: ""
  };
}
export const CanonicalProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (!message.pol_round.isZero()) {
      writer.uint32(32).int64(message.pol_round);
    }
    if (message.block_id !== undefined) {
      CanonicalBlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(58).string(message.chain_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.sfixed64();
          break;
        case 3:
          message.round = reader.sfixed64();
          break;
        case 4:
          message.pol_round = reader.int64();
          break;
        case 5:
          message.block_id = CanonicalBlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.chain_id = reader.string();
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
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.ZERO,
      pol_round: isSet(object.pol_round) ? Long.fromValue(object.pol_round) : Long.ZERO,
      block_id: isSet(object.block_id) ? CanonicalBlockID.fromJSON(object.block_id) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial(object) {
    var _object$type, _object$chain_id;
    const message = createBaseCanonicalProposal();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.pol_round = object.pol_round !== undefined && object.pol_round !== null ? Long.fromValue(object.pol_round) : Long.ZERO;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? CanonicalBlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    return message;
  }
};
function createBaseCanonicalVote() {
  return {
    type: 0,
    height: Long.ZERO,
    round: Long.ZERO,
    block_id: CanonicalBlockID.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
    chain_id: ""
  };
}
export const CanonicalVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.block_id !== undefined) {
      CanonicalBlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(50).string(message.chain_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.sfixed64();
          break;
        case 3:
          message.round = reader.sfixed64();
          break;
        case 4:
          message.block_id = CanonicalBlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.chain_id = reader.string();
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
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.ZERO,
      block_id: isSet(object.block_id) ? CanonicalBlockID.fromJSON(object.block_id) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial(object) {
    var _object$type2, _object$chain_id2;
    const message = createBaseCanonicalVote();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? CanonicalBlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.chain_id = (_object$chain_id2 = object.chain_id) !== null && _object$chain_id2 !== void 0 ? _object$chain_id2 : "";
    return message;
  }
};