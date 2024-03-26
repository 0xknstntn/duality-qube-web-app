"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vote = exports.TxProof = exports.SignedMsgType = exports.SignedHeader = exports.Proposal = exports.PartSetHeader = exports.Part = exports.LightBlock = exports.Header = exports.Data = exports.CommitSig = exports.Commit = exports.BlockMeta = exports.BlockIDFlag = exports.BlockID = void 0;
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
exports.blockIDFlagToJSON = blockIDFlagToJSON;
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
var _proof = require("../crypto/proof");
var _types = require("../version/types");
var _timestamp = require("../../google/protobuf/timestamp");
var _validator = require("./validator");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag = /*#__PURE__*/function (BlockIDFlag) {
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
  BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BlockIDFlag;
}({});
exports.BlockIDFlag = BlockIDFlag;
function blockIDFlagFromJSON(object) {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
function blockIDFlagToJSON(object) {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";
    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";
    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";
    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";
    case BlockIDFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType = /*#__PURE__*/function (SignedMsgType) {
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignedMsgType;
}({});
exports.SignedMsgType = SignedMsgType;
function signedMsgTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
function signedMsgTypeToJSON(object) {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** PartsetHeader */

/** BlockID */

/** Header defines the structure of a block header. */

/** Data contains the set of transactions included in the block */

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */

/** Commit contains the evidence that a block was committed by a set of validators. */

/** CommitSig is a part of the Vote included in a Commit. */

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */

function createBasePartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
var PartSetHeader = {
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
    var message = createBasePartSetHeader();
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
    var _object$total, _object$hash;
    var message = createBasePartSetHeader();
    message.total = (_object$total = object.total) !== null && _object$total !== void 0 ? _object$total : 0;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
exports.PartSetHeader = PartSetHeader;
function createBasePart() {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: _proof.Proof.fromPartial({})
  };
}
var Part = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== undefined) {
      _proof.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePart();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.bytes = reader.bytes();
          break;
        case 3:
          message.proof = _proof.Proof.decode(reader, reader.uint32());
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
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0,
      bytes: (0, _helpers.isSet)(object.bytes) ? (0, _helpers.bytesFromBase64)(object.bytes) : new Uint8Array(),
      proof: (0, _helpers.isSet)(object.proof) ? _proof.Proof.fromJSON(object.proof) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$bytes;
    var message = createBasePart();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.bytes = (_object$bytes = object.bytes) !== null && _object$bytes !== void 0 ? _object$bytes : new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? _proof.Proof.fromPartial(object.proof) : undefined;
    return message;
  }
};
exports.Part = Part;
function createBaseBlockID() {
  return {
    hash: new Uint8Array(),
    part_set_header: PartSetHeader.fromPartial({})
  };
}
var BlockID = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.part_set_header !== undefined) {
      PartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockID();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.part_set_header = PartSetHeader.decode(reader, reader.uint32());
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
      part_set_header: (0, _helpers.isSet)(object.part_set_header) ? PartSetHeader.fromJSON(object.part_set_header) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash2;
    var message = createBaseBlockID();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? PartSetHeader.fromPartial(object.part_set_header) : undefined;
    return message;
  }
};
exports.BlockID = BlockID;
function createBaseHeader() {
  return {
    version: _types.Consensus.fromPartial({}),
    chain_id: "",
    height: _helpers.Long.ZERO,
    time: _timestamp.Timestamp.fromPartial({}),
    last_block_id: BlockID.fromPartial({}),
    last_commit_hash: new Uint8Array(),
    data_hash: new Uint8Array(),
    validators_hash: new Uint8Array(),
    next_validators_hash: new Uint8Array(),
    consensus_hash: new Uint8Array(),
    app_hash: new Uint8Array(),
    last_results_hash: new Uint8Array(),
    evidence_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
var Header = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.version !== undefined) {
      _types.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
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
      BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
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
    if (message.proposer_address.length !== 0) {
      writer.uint32(114).bytes(message.proposer_address);
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
          message.version = _types.Consensus.decode(reader, reader.uint32());
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
          message.last_block_id = BlockID.decode(reader, reader.uint32());
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
          message.proposer_address = reader.bytes();
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
      version: (0, _helpers.isSet)(object.version) ? _types.Consensus.fromJSON(object.version) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : "",
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      time: (0, _helpers.isSet)(object.time) ? (0, _helpers.fromJsonTimestamp)(object.time) : undefined,
      last_block_id: (0, _helpers.isSet)(object.last_block_id) ? BlockID.fromJSON(object.last_block_id) : undefined,
      last_commit_hash: (0, _helpers.isSet)(object.last_commit_hash) ? (0, _helpers.bytesFromBase64)(object.last_commit_hash) : new Uint8Array(),
      data_hash: (0, _helpers.isSet)(object.data_hash) ? (0, _helpers.bytesFromBase64)(object.data_hash) : new Uint8Array(),
      validators_hash: (0, _helpers.isSet)(object.validators_hash) ? (0, _helpers.bytesFromBase64)(object.validators_hash) : new Uint8Array(),
      next_validators_hash: (0, _helpers.isSet)(object.next_validators_hash) ? (0, _helpers.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
      consensus_hash: (0, _helpers.isSet)(object.consensus_hash) ? (0, _helpers.bytesFromBase64)(object.consensus_hash) : new Uint8Array(),
      app_hash: (0, _helpers.isSet)(object.app_hash) ? (0, _helpers.bytesFromBase64)(object.app_hash) : new Uint8Array(),
      last_results_hash: (0, _helpers.isSet)(object.last_results_hash) ? (0, _helpers.bytesFromBase64)(object.last_results_hash) : new Uint8Array(),
      evidence_hash: (0, _helpers.isSet)(object.evidence_hash) ? (0, _helpers.bytesFromBase64)(object.evidence_hash) : new Uint8Array(),
      proposer_address: (0, _helpers.isSet)(object.proposer_address) ? (0, _helpers.bytesFromBase64)(object.proposer_address) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$chain_id, _object$last_commit_h, _object$data_hash, _object$validators_ha, _object$next_validato, _object$consensus_has, _object$app_hash, _object$last_results_, _object$evidence_hash, _object$proposer_addr;
    var message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? _types.Consensus.fromPartial(object.version) : undefined;
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? _timestamp.Timestamp.fromPartial(object.time) : undefined;
    message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? BlockID.fromPartial(object.last_block_id) : undefined;
    message.last_commit_hash = (_object$last_commit_h = object.last_commit_hash) !== null && _object$last_commit_h !== void 0 ? _object$last_commit_h : new Uint8Array();
    message.data_hash = (_object$data_hash = object.data_hash) !== null && _object$data_hash !== void 0 ? _object$data_hash : new Uint8Array();
    message.validators_hash = (_object$validators_ha = object.validators_hash) !== null && _object$validators_ha !== void 0 ? _object$validators_ha : new Uint8Array();
    message.next_validators_hash = (_object$next_validato = object.next_validators_hash) !== null && _object$next_validato !== void 0 ? _object$next_validato : new Uint8Array();
    message.consensus_hash = (_object$consensus_has = object.consensus_hash) !== null && _object$consensus_has !== void 0 ? _object$consensus_has : new Uint8Array();
    message.app_hash = (_object$app_hash = object.app_hash) !== null && _object$app_hash !== void 0 ? _object$app_hash : new Uint8Array();
    message.last_results_hash = (_object$last_results_ = object.last_results_hash) !== null && _object$last_results_ !== void 0 ? _object$last_results_ : new Uint8Array();
    message.evidence_hash = (_object$evidence_hash = object.evidence_hash) !== null && _object$evidence_hash !== void 0 ? _object$evidence_hash : new Uint8Array();
    message.proposer_address = (_object$proposer_addr = object.proposer_address) !== null && _object$proposer_addr !== void 0 ? _object$proposer_addr : new Uint8Array();
    return message;
  }
};
exports.Header = Header;
function createBaseData() {
  return {
    txs: []
  };
}
var Data = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.txs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).bytes(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$txs;
    var message = createBaseData();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.Data = Data;
function createBaseVote() {
  return {
    type: 0,
    height: _helpers.Long.ZERO,
    round: 0,
    block_id: BlockID.fromPartial({}),
    timestamp: _timestamp.Timestamp.fromPartial({}),
    validator_address: new Uint8Array(),
    validator_index: 0,
    signature: new Uint8Array()
  };
}
var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.validator_address.length !== 0) {
      writer.uint32(50).bytes(message.validator_address);
    }
    if (message.validator_index !== 0) {
      writer.uint32(56).int32(message.validator_index);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.validator_address = reader.bytes();
          break;
        case 7:
          message.validator_index = reader.int32();
          break;
        case 8:
          message.signature = reader.bytes();
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
      type: (0, _helpers.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      block_id: (0, _helpers.isSet)(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      validator_address: (0, _helpers.isSet)(object.validator_address) ? (0, _helpers.bytesFromBase64)(object.validator_address) : new Uint8Array(),
      validator_index: (0, _helpers.isSet)(object.validator_index) ? Number(object.validator_index) : 0,
      signature: (0, _helpers.isSet)(object.signature) ? (0, _helpers.bytesFromBase64)(object.signature) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$round, _object$validator_add, _object$validator_ind, _object$signature;
    var message = createBaseVote();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : new Uint8Array();
    message.validator_index = (_object$validator_ind = object.validator_index) !== null && _object$validator_ind !== void 0 ? _object$validator_ind : 0;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    return message;
  }
};
exports.Vote = Vote;
function createBaseCommit() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    block_id: BlockID.fromPartial({}),
    signatures: []
  };
}
var Commit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.signatures),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      block_id: (0, _helpers.isSet)(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return CommitSig.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round2, _object$signatures;
    var message = createBaseCommit();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(function (e) {
      return CommitSig.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Commit = Commit;
function createBaseCommitSig() {
  return {
    block_id_flag: 0,
    validator_address: new Uint8Array(),
    timestamp: _timestamp.Timestamp.fromPartial({}),
    signature: new Uint8Array()
  };
}
var CommitSig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block_id_flag !== 0) {
      writer.uint32(8).int32(message.block_id_flag);
    }
    if (message.validator_address.length !== 0) {
      writer.uint32(18).bytes(message.validator_address);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitSig();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id_flag = reader.int32();
          break;
        case 2:
          message.validator_address = reader.bytes();
          break;
        case 3:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.signature = reader.bytes();
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
      block_id_flag: (0, _helpers.isSet)(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
      validator_address: (0, _helpers.isSet)(object.validator_address) ? (0, _helpers.bytesFromBase64)(object.validator_address) : new Uint8Array(),
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      signature: (0, _helpers.isSet)(object.signature) ? (0, _helpers.bytesFromBase64)(object.signature) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$block_id_flag, _object$validator_add2, _object$signature2;
    var message = createBaseCommitSig();
    message.block_id_flag = (_object$block_id_flag = object.block_id_flag) !== null && _object$block_id_flag !== void 0 ? _object$block_id_flag : 0;
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    message.signature = (_object$signature2 = object.signature) !== null && _object$signature2 !== void 0 ? _object$signature2 : new Uint8Array();
    return message;
  }
};
exports.CommitSig = CommitSig;
function createBaseProposal() {
  return {
    type: 0,
    height: _helpers.Long.ZERO,
    round: 0,
    pol_round: 0,
    block_id: BlockID.fromPartial({}),
    timestamp: _timestamp.Timestamp.fromPartial({}),
    signature: new Uint8Array()
  };
}
var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.pol_round !== 0) {
      writer.uint32(32).int32(message.pol_round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.pol_round = reader.int32();
          break;
        case 5:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.signature = reader.bytes();
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
      type: (0, _helpers.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      pol_round: (0, _helpers.isSet)(object.pol_round) ? Number(object.pol_round) : 0,
      block_id: (0, _helpers.isSet)(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      signature: (0, _helpers.isSet)(object.signature) ? (0, _helpers.bytesFromBase64)(object.signature) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$round3, _object$pol_round, _object$signature3;
    var message = createBaseProposal();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.pol_round = (_object$pol_round = object.pol_round) !== null && _object$pol_round !== void 0 ? _object$pol_round : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    message.signature = (_object$signature3 = object.signature) !== null && _object$signature3 !== void 0 ? _object$signature3 : new Uint8Array();
    return message;
  }
};
exports.Proposal = Proposal;
function createBaseSignedHeader() {
  return {
    header: Header.fromPartial({}),
    commit: Commit.fromPartial({})
  };
}
var SignedHeader = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignedHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
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
      commit: (0, _helpers.isSet)(object.commit) ? Commit.fromJSON(object.commit) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignedHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  }
};
exports.SignedHeader = SignedHeader;
function createBaseLightBlock() {
  return {
    signed_header: SignedHeader.fromPartial({}),
    validator_set: _validator.ValidatorSet.fromPartial({})
  };
}
var LightBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.signed_header !== undefined) {
      SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_set !== undefined) {
      _validator.ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLightBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signed_header = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_set = _validator.ValidatorSet.decode(reader, reader.uint32());
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
      signed_header: (0, _helpers.isSet)(object.signed_header) ? SignedHeader.fromJSON(object.signed_header) : undefined,
      validator_set: (0, _helpers.isSet)(object.validator_set) ? _validator.ValidatorSet.fromJSON(object.validator_set) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseLightBlock();
    message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? SignedHeader.fromPartial(object.signed_header) : undefined;
    message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? _validator.ValidatorSet.fromPartial(object.validator_set) : undefined;
    return message;
  }
};
exports.LightBlock = LightBlock;
function createBaseBlockMeta() {
  return {
    block_id: BlockID.fromPartial({}),
    block_size: _helpers.Long.ZERO,
    header: Header.fromPartial({}),
    num_txs: _helpers.Long.ZERO
  };
}
var BlockMeta = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
    }
    if (!message.block_size.isZero()) {
      writer.uint32(16).int64(message.block_size);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (!message.num_txs.isZero()) {
      writer.uint32(32).int64(message.num_txs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockMeta();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block_size = reader.int64();
          break;
        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 4:
          message.num_txs = reader.int64();
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
      block_id: (0, _helpers.isSet)(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      block_size: (0, _helpers.isSet)(object.block_size) ? _helpers.Long.fromValue(object.block_size) : _helpers.Long.ZERO,
      header: (0, _helpers.isSet)(object.header) ? Header.fromJSON(object.header) : undefined,
      num_txs: (0, _helpers.isSet)(object.num_txs) ? _helpers.Long.fromValue(object.num_txs) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockMeta();
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.block_size = object.block_size !== undefined && object.block_size !== null ? _helpers.Long.fromValue(object.block_size) : _helpers.Long.ZERO;
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.num_txs = object.num_txs !== undefined && object.num_txs !== null ? _helpers.Long.fromValue(object.num_txs) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BlockMeta = BlockMeta;
function createBaseTxProof() {
  return {
    root_hash: new Uint8Array(),
    data: new Uint8Array(),
    proof: _proof.Proof.fromPartial({})
  };
}
var TxProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.root_hash.length !== 0) {
      writer.uint32(10).bytes(message.root_hash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== undefined) {
      _proof.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.root_hash = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof = _proof.Proof.decode(reader, reader.uint32());
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
      root_hash: (0, _helpers.isSet)(object.root_hash) ? (0, _helpers.bytesFromBase64)(object.root_hash) : new Uint8Array(),
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      proof: (0, _helpers.isSet)(object.proof) ? _proof.Proof.fromJSON(object.proof) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$root_hash, _object$data;
    var message = createBaseTxProof();
    message.root_hash = (_object$root_hash = object.root_hash) !== null && _object$root_hash !== void 0 ? _object$root_hash : new Uint8Array();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? _proof.Proof.fromPartial(object.proof) : undefined;
    return message;
  }
};
exports.TxProof = TxProof;