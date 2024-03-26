"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.Block = void 0;
var _types = require("../../../../tendermint/types/types");
var _evidence = require("../../../../tendermint/types/evidence");
var _types2 = require("../../../../tendermint/version/types");
var _timestamp = require("../../../../google/protobuf/timestamp");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */

/** Header defines the structure of a Tendermint block header. */

function createBaseBlock() {
  return {
    header: Header.fromPartial({}),
    data: _types.Data.fromPartial({}),
    evidence: _evidence.EvidenceList.fromPartial({}),
    last_commit: _types.Commit.fromPartial({})
  };
}
var Block = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      _types.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      _evidence.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.last_commit !== undefined) {
      _types.Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = _types.Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = _evidence.EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.last_commit = _types.Commit.decode(reader, reader.uint32());
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
      header: (0, _helpers.isSet)(object.header) ? Header.fromJSON(object.header) : undefined,
      data: (0, _helpers.isSet)(object.data) ? _types.Data.fromJSON(object.data) : undefined,
      evidence: (0, _helpers.isSet)(object.evidence) ? _evidence.EvidenceList.fromJSON(object.evidence) : undefined,
      last_commit: (0, _helpers.isSet)(object.last_commit) ? _types.Commit.fromJSON(object.last_commit) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? _types.Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _evidence.EvidenceList.fromPartial(object.evidence) : undefined;
    message.last_commit = object.last_commit !== undefined && object.last_commit !== null ? _types.Commit.fromPartial(object.last_commit) : undefined;
    return message;
  }
};
exports.Block = Block;
function createBaseHeader() {
  return {
    version: _types2.Consensus.fromPartial({}),
    chain_id: "",
    height: _helpers.Long.ZERO,
    time: _timestamp.Timestamp.fromPartial({}),
    last_block_id: _types.BlockID.fromPartial({}),
    last_commit_hash: new Uint8Array(),
    data_hash: new Uint8Array(),
    validators_hash: new Uint8Array(),
    next_validators_hash: new Uint8Array(),
    consensus_hash: new Uint8Array(),
    app_hash: new Uint8Array(),
    last_results_hash: new Uint8Array(),
    evidence_hash: new Uint8Array(),
    proposer_address: ""
  };
}
var Header = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.version !== undefined) {
      _types2.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.last_block_id !== undefined) {
      _types.BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
    }
    if (message.last_commit_hash.length !== 0) {
      writer.uint32(50).bytes(message.last_commit_hash);
    }
    if (message.data_hash.length !== 0) {
      writer.uint32(58).bytes(message.data_hash);
    }
    if (message.validators_hash.length !== 0) {
      writer.uint32(66).bytes(message.validators_hash);
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(74).bytes(message.next_validators_hash);
    }
    if (message.consensus_hash.length !== 0) {
      writer.uint32(82).bytes(message.consensus_hash);
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(90).bytes(message.app_hash);
    }
    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash);
    }
    if (message.evidence_hash.length !== 0) {
      writer.uint32(106).bytes(message.evidence_hash);
    }
    if (message.proposer_address !== "") {
      writer.uint32(114).string(message.proposer_address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = _types2.Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.last_block_id = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.last_commit_hash = reader.bytes();
          break;
        case 7:
          message.data_hash = reader.bytes();
          break;
        case 8:
          message.validators_hash = reader.bytes();
          break;
        case 9:
          message.next_validators_hash = reader.bytes();
          break;
        case 10:
          message.consensus_hash = reader.bytes();
          break;
        case 11:
          message.app_hash = reader.bytes();
          break;
        case 12:
          message.last_results_hash = reader.bytes();
          break;
        case 13:
          message.evidence_hash = reader.bytes();
          break;
        case 14:
          message.proposer_address = reader.string();
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
      version: (0, _helpers.isSet)(object.version) ? _types2.Consensus.fromJSON(object.version) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : "",
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      time: (0, _helpers.isSet)(object.time) ? (0, _helpers.fromJsonTimestamp)(object.time) : undefined,
      last_block_id: (0, _helpers.isSet)(object.last_block_id) ? _types.BlockID.fromJSON(object.last_block_id) : undefined,
      last_commit_hash: (0, _helpers.isSet)(object.last_commit_hash) ? (0, _helpers.bytesFromBase64)(object.last_commit_hash) : new Uint8Array(),
      data_hash: (0, _helpers.isSet)(object.data_hash) ? (0, _helpers.bytesFromBase64)(object.data_hash) : new Uint8Array(),
      validators_hash: (0, _helpers.isSet)(object.validators_hash) ? (0, _helpers.bytesFromBase64)(object.validators_hash) : new Uint8Array(),
      next_validators_hash: (0, _helpers.isSet)(object.next_validators_hash) ? (0, _helpers.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
      consensus_hash: (0, _helpers.isSet)(object.consensus_hash) ? (0, _helpers.bytesFromBase64)(object.consensus_hash) : new Uint8Array(),
      app_hash: (0, _helpers.isSet)(object.app_hash) ? (0, _helpers.bytesFromBase64)(object.app_hash) : new Uint8Array(),
      last_results_hash: (0, _helpers.isSet)(object.last_results_hash) ? (0, _helpers.bytesFromBase64)(object.last_results_hash) : new Uint8Array(),
      evidence_hash: (0, _helpers.isSet)(object.evidence_hash) ? (0, _helpers.bytesFromBase64)(object.evidence_hash) : new Uint8Array(),
      proposer_address: (0, _helpers.isSet)(object.proposer_address) ? String(object.proposer_address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$chain_id, _object$last_commit_h, _object$data_hash, _object$validators_ha, _object$next_validato, _object$consensus_has, _object$app_hash, _object$last_results_, _object$evidence_hash, _object$proposer_addr;
    var message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? _types2.Consensus.fromPartial(object.version) : undefined;
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? _timestamp.Timestamp.fromPartial(object.time) : undefined;
    message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? _types.BlockID.fromPartial(object.last_block_id) : undefined;
    message.last_commit_hash = (_object$last_commit_h = object.last_commit_hash) !== null && _object$last_commit_h !== void 0 ? _object$last_commit_h : new Uint8Array();
    message.data_hash = (_object$data_hash = object.data_hash) !== null && _object$data_hash !== void 0 ? _object$data_hash : new Uint8Array();
    message.validators_hash = (_object$validators_ha = object.validators_hash) !== null && _object$validators_ha !== void 0 ? _object$validators_ha : new Uint8Array();
    message.next_validators_hash = (_object$next_validato = object.next_validators_hash) !== null && _object$next_validato !== void 0 ? _object$next_validato : new Uint8Array();
    message.consensus_hash = (_object$consensus_has = object.consensus_hash) !== null && _object$consensus_has !== void 0 ? _object$consensus_has : new Uint8Array();
    message.app_hash = (_object$app_hash = object.app_hash) !== null && _object$app_hash !== void 0 ? _object$app_hash : new Uint8Array();
    message.last_results_hash = (_object$last_results_ = object.last_results_hash) !== null && _object$last_results_ !== void 0 ? _object$last_results_ : new Uint8Array();
    message.evidence_hash = (_object$evidence_hash = object.evidence_hash) !== null && _object$evidence_hash !== void 0 ? _object$evidence_hash : new Uint8Array();
    message.proposer_address = (_object$proposer_addr = object.proposer_address) !== null && _object$proposer_addr !== void 0 ? _object$proposer_addr : "";
    return message;
  }
};
exports.Header = Header;