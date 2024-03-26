"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanonicalVote = exports.CanonicalProposal = exports.CanonicalPartSetHeader = exports.CanonicalBlockID = void 0;
var _types = require("./types");
var _timestamp = require("../../google/protobuf/timestamp");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseCanonicalBlockID() {
  return {
    hash: new Uint8Array(),
    part_set_header: CanonicalPartSetHeader.fromPartial({})
  };
}
var CanonicalBlockID = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.part_set_header !== undefined) {
      CanonicalPartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalBlockID();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array(),
      part_set_header: (0, _helpers.isSet)(object.part_set_header) ? CanonicalPartSetHeader.fromJSON(object.part_set_header) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash;
    var message = createBaseCanonicalBlockID();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? CanonicalPartSetHeader.fromPartial(object.part_set_header) : undefined;
    return message;
  }
};
exports.CanonicalBlockID = CanonicalBlockID;
function createBaseCanonicalPartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
var CanonicalPartSetHeader = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalPartSetHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      total: (0, _helpers.isSet)(object.total) ? Number(object.total) : 0,
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$total, _object$hash2;
    var message = createBaseCanonicalPartSetHeader();
    message.total = (_object$total = object.total) !== null && _object$total !== void 0 ? _object$total : 0;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  }
};
exports.CanonicalPartSetHeader = CanonicalPartSetHeader;
function createBaseCanonicalProposal() {
  return {
    type: 0,
    height: _helpers.Long.ZERO,
    round: _helpers.Long.ZERO,
    pol_round: _helpers.Long.ZERO,
    block_id: CanonicalBlockID.fromPartial({}),
    timestamp: _timestamp.Timestamp.fromPartial({}),
    chain_id: ""
  };
}
var CanonicalProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(58).string(message.chain_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : -1,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? _helpers.Long.fromValue(object.round) : _helpers.Long.ZERO,
      pol_round: (0, _helpers.isSet)(object.pol_round) ? _helpers.Long.fromValue(object.pol_round) : _helpers.Long.ZERO,
      block_id: (0, _helpers.isSet)(object.block_id) ? CanonicalBlockID.fromJSON(object.block_id) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$chain_id;
    var message = createBaseCanonicalProposal();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? _helpers.Long.fromValue(object.round) : _helpers.Long.ZERO;
    message.pol_round = object.pol_round !== undefined && object.pol_round !== null ? _helpers.Long.fromValue(object.pol_round) : _helpers.Long.ZERO;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? CanonicalBlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    return message;
  }
};
exports.CanonicalProposal = CanonicalProposal;
function createBaseCanonicalVote() {
  return {
    type: 0,
    height: _helpers.Long.ZERO,
    round: _helpers.Long.ZERO,
    block_id: CanonicalBlockID.fromPartial({}),
    timestamp: _timestamp.Timestamp.fromPartial({}),
    chain_id: ""
  };
}
var CanonicalVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(50).string(message.chain_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : -1,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? _helpers.Long.fromValue(object.round) : _helpers.Long.ZERO,
      block_id: (0, _helpers.isSet)(object.block_id) ? CanonicalBlockID.fromJSON(object.block_id) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$chain_id2;
    var message = createBaseCanonicalVote();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? _helpers.Long.fromValue(object.round) : _helpers.Long.ZERO;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? CanonicalBlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    message.chain_id = (_object$chain_id2 = object.chain_id) !== null && _object$chain_id2 !== void 0 ? _object$chain_id2 : "";
    return message;
  }
};
exports.CanonicalVote = CanonicalVote;