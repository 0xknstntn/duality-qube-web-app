"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProofSpec = exports.NonExistenceProof = exports.LengthOp = exports.LeafOp = exports.InnerSpec = exports.InnerOp = exports.HashOp = exports.ExistenceProof = exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchProof = exports.CompressedBatchEntry = exports.CommitmentProof = exports.BatchProof = exports.BatchEntry = void 0;
exports.hashOpFromJSON = hashOpFromJSON;
exports.hashOpToJSON = hashOpToJSON;
exports.lengthOpFromJSON = lengthOpFromJSON;
exports.lengthOpToJSON = lengthOpToJSON;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var HashOp = /*#__PURE__*/function (HashOp) {
  HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
  HashOp[HashOp["SHA256"] = 1] = "SHA256";
  HashOp[HashOp["SHA512"] = 2] = "SHA512";
  HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
  HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
  HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
  HashOp[HashOp["SHA512_256"] = 6] = "SHA512_256";
  HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return HashOp;
}({});
exports.HashOp = HashOp;
function hashOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_HASH":
      return HashOp.NO_HASH;
    case 1:
    case "SHA256":
      return HashOp.SHA256;
    case 2:
    case "SHA512":
      return HashOp.SHA512;
    case 3:
    case "KECCAK":
      return HashOp.KECCAK;
    case 4:
    case "RIPEMD160":
      return HashOp.RIPEMD160;
    case 5:
    case "BITCOIN":
      return HashOp.BITCOIN;
    case 6:
    case "SHA512_256":
      return HashOp.SHA512_256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HashOp.UNRECOGNIZED;
  }
}
function hashOpToJSON(object) {
  switch (object) {
    case HashOp.NO_HASH:
      return "NO_HASH";
    case HashOp.SHA256:
      return "SHA256";
    case HashOp.SHA512:
      return "SHA512";
    case HashOp.KECCAK:
      return "KECCAK";
    case HashOp.RIPEMD160:
      return "RIPEMD160";
    case HashOp.BITCOIN:
      return "BITCOIN";
    case HashOp.SHA512_256:
      return "SHA512_256";
    case HashOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
var LengthOp = /*#__PURE__*/function (LengthOp) {
  LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LengthOp;
}({});
exports.LengthOp = LengthOp;
function lengthOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_PREFIX":
      return LengthOp.NO_PREFIX;
    case 1:
    case "VAR_PROTO":
      return LengthOp.VAR_PROTO;
    case 2:
    case "VAR_RLP":
      return LengthOp.VAR_RLP;
    case 3:
    case "FIXED32_BIG":
      return LengthOp.FIXED32_BIG;
    case 4:
    case "FIXED32_LITTLE":
      return LengthOp.FIXED32_LITTLE;
    case 5:
    case "FIXED64_BIG":
      return LengthOp.FIXED64_BIG;
    case 6:
    case "FIXED64_LITTLE":
      return LengthOp.FIXED64_LITTLE;
    case 7:
    case "REQUIRE_32_BYTES":
      return LengthOp.REQUIRE_32_BYTES;
    case 8:
    case "REQUIRE_64_BYTES":
      return LengthOp.REQUIRE_64_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LengthOp.UNRECOGNIZED;
  }
}
function lengthOpToJSON(object) {
  switch (object) {
    case LengthOp.NO_PREFIX:
      return "NO_PREFIX";
    case LengthOp.VAR_PROTO:
      return "VAR_PROTO";
    case LengthOp.VAR_RLP:
      return "VAR_RLP";
    case LengthOp.FIXED32_BIG:
      return "FIXED32_BIG";
    case LengthOp.FIXED32_LITTLE:
      return "FIXED32_LITTLE";
    case LengthOp.FIXED64_BIG:
      return "FIXED64_BIG";
    case LengthOp.FIXED64_LITTLE:
      return "FIXED64_LITTLE";
    case LengthOp.REQUIRE_32_BYTES:
      return "REQUIRE_32_BYTES";
    case LengthOp.REQUIRE_64_BYTES:
      return "REQUIRE_64_BYTES";
    case LengthOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 * 
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 * 
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 * 
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */

/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */

/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */

/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 * 
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 * 
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 * 
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */

/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 * 
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 * 
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 * 
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 * 
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */

/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 * 
 * verify(ProofSpec, Proof) -> Proof | Error
 * 
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */

/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 * 
 * This enables:
 * 
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */

/** BatchProof is a group of multiple proof types than can be compressed */

/** Use BatchEntry not CommitmentProof, to avoid recursion */

/** Use BatchEntry not CommitmentProof, to avoid recursion */

function createBaseExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: LeafOp.fromPartial({}),
    path: []
  };
}
var ExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.path),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseExistenceProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array(),
      leaf: (0, _helpers.isSet)(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function (e) {
        return InnerOp.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$value, _object$path;
    var message = createBaseExistenceProof();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(function (e) {
      return InnerOp.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ExistenceProof = ExistenceProof;
function createBaseNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: ExistenceProof.fromPartial({}),
    right: ExistenceProof.fromPartial({})
  };
}
var NonExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      left: (0, _helpers.isSet)(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
      right: (0, _helpers.isSet)(object.right) ? ExistenceProof.fromJSON(object.right) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key2;
    var message = createBaseNonExistenceProof();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};
exports.NonExistenceProof = NonExistenceProof;
function createBaseCommitmentProof() {
  return {
    exist: undefined,
    nonexist: undefined,
    batch: undefined,
    compressed: undefined
  };
}
var CommitmentProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.compressed !== undefined) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitmentProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
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
      exist: (0, _helpers.isSet)(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: (0, _helpers.isSet)(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
      batch: (0, _helpers.isSet)(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
      compressed: (0, _helpers.isSet)(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseCommitmentProof();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
    message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
    return message;
  }
};
exports.CommitmentProof = CommitmentProof;
function createBaseLeafOp() {
  return {
    hash: 0,
    prehash_key: 0,
    prehash_value: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
var LeafOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prehash_key !== 0) {
      writer.uint32(16).int32(message.prehash_key);
    }
    if (message.prehash_value !== 0) {
      writer.uint32(24).int32(message.prehash_value);
    }
    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLeafOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prehash_key = reader.int32();
          break;
        case 3:
          message.prehash_value = reader.int32();
          break;
        case 4:
          message.length = reader.int32();
          break;
        case 5:
          message.prefix = reader.bytes();
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
      hash: (0, _helpers.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prehash_key: (0, _helpers.isSet)(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
      prehash_value: (0, _helpers.isSet)(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
      length: (0, _helpers.isSet)(object.length) ? lengthOpFromJSON(object.length) : -1,
      prefix: (0, _helpers.isSet)(object.prefix) ? (0, _helpers.bytesFromBase64)(object.prefix) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash, _object$prehash_key, _object$prehash_value, _object$length, _object$prefix;
    var message = createBaseLeafOp();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : 0;
    message.prehash_key = (_object$prehash_key = object.prehash_key) !== null && _object$prehash_key !== void 0 ? _object$prehash_key : 0;
    message.prehash_value = (_object$prehash_value = object.prehash_value) !== null && _object$prehash_value !== void 0 ? _object$prehash_value : 0;
    message.length = (_object$length = object.length) !== null && _object$length !== void 0 ? _object$length : 0;
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
exports.LeafOp = LeafOp;
function createBaseInnerOp() {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
var InnerOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInnerOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        case 3:
          message.suffix = reader.bytes();
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
      hash: (0, _helpers.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prefix: (0, _helpers.isSet)(object.prefix) ? (0, _helpers.bytesFromBase64)(object.prefix) : new Uint8Array(),
      suffix: (0, _helpers.isSet)(object.suffix) ? (0, _helpers.bytesFromBase64)(object.suffix) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hash2, _object$prefix2, _object$suffix;
    var message = createBaseInnerOp();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : 0;
    message.prefix = (_object$prefix2 = object.prefix) !== null && _object$prefix2 !== void 0 ? _object$prefix2 : new Uint8Array();
    message.suffix = (_object$suffix = object.suffix) !== null && _object$suffix !== void 0 ? _object$suffix : new Uint8Array();
    return message;
  }
};
exports.InnerOp = InnerOp;
function createBaseProofSpec() {
  return {
    leaf_spec: LeafOp.fromPartial({}),
    inner_spec: InnerSpec.fromPartial({}),
    max_depth: 0,
    min_depth: 0,
    prehash_key_before_comparison: false
  };
}
var ProofSpec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.leaf_spec !== undefined) {
      LeafOp.encode(message.leaf_spec, writer.uint32(10).fork()).ldelim();
    }
    if (message.inner_spec !== undefined) {
      InnerSpec.encode(message.inner_spec, writer.uint32(18).fork()).ldelim();
    }
    if (message.max_depth !== 0) {
      writer.uint32(24).int32(message.max_depth);
    }
    if (message.min_depth !== 0) {
      writer.uint32(32).int32(message.min_depth);
    }
    if (message.prehash_key_before_comparison === true) {
      writer.uint32(40).bool(message.prehash_key_before_comparison);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProofSpec();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf_spec = LeafOp.decode(reader, reader.uint32());
          break;
        case 2:
          message.inner_spec = InnerSpec.decode(reader, reader.uint32());
          break;
        case 3:
          message.max_depth = reader.int32();
          break;
        case 4:
          message.min_depth = reader.int32();
          break;
        case 5:
          message.prehash_key_before_comparison = reader.bool();
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
      leaf_spec: (0, _helpers.isSet)(object.leaf_spec) ? LeafOp.fromJSON(object.leaf_spec) : undefined,
      inner_spec: (0, _helpers.isSet)(object.inner_spec) ? InnerSpec.fromJSON(object.inner_spec) : undefined,
      max_depth: (0, _helpers.isSet)(object.max_depth) ? Number(object.max_depth) : 0,
      min_depth: (0, _helpers.isSet)(object.min_depth) ? Number(object.min_depth) : 0,
      prehash_key_before_comparison: (0, _helpers.isSet)(object.prehash_key_before_comparison) ? Boolean(object.prehash_key_before_comparison) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$max_depth, _object$min_depth, _object$prehash_key_b;
    var message = createBaseProofSpec();
    message.leaf_spec = object.leaf_spec !== undefined && object.leaf_spec !== null ? LeafOp.fromPartial(object.leaf_spec) : undefined;
    message.inner_spec = object.inner_spec !== undefined && object.inner_spec !== null ? InnerSpec.fromPartial(object.inner_spec) : undefined;
    message.max_depth = (_object$max_depth = object.max_depth) !== null && _object$max_depth !== void 0 ? _object$max_depth : 0;
    message.min_depth = (_object$min_depth = object.min_depth) !== null && _object$min_depth !== void 0 ? _object$min_depth : 0;
    message.prehash_key_before_comparison = (_object$prehash_key_b = object.prehash_key_before_comparison) !== null && _object$prehash_key_b !== void 0 ? _object$prehash_key_b : false;
    return message;
  }
};
exports.ProofSpec = ProofSpec;
function createBaseInnerSpec() {
  return {
    child_order: [],
    child_size: 0,
    min_prefix_length: 0,
    max_prefix_length: 0,
    empty_child: new Uint8Array(),
    hash: 0
  };
}
var InnerSpec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator2 = _createForOfIteratorHelper(message.child_order),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.ldelim();
    if (message.child_size !== 0) {
      writer.uint32(16).int32(message.child_size);
    }
    if (message.min_prefix_length !== 0) {
      writer.uint32(24).int32(message.min_prefix_length);
    }
    if (message.max_prefix_length !== 0) {
      writer.uint32(32).int32(message.max_prefix_length);
    }
    if (message.empty_child.length !== 0) {
      writer.uint32(42).bytes(message.empty_child);
    }
    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInnerSpec();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.child_order.push(reader.int32());
            }
          } else {
            message.child_order.push(reader.int32());
          }
          break;
        case 2:
          message.child_size = reader.int32();
          break;
        case 3:
          message.min_prefix_length = reader.int32();
          break;
        case 4:
          message.max_prefix_length = reader.int32();
          break;
        case 5:
          message.empty_child = reader.bytes();
          break;
        case 6:
          message.hash = reader.int32();
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
      child_order: Array.isArray(object === null || object === void 0 ? void 0 : object.child_order) ? object.child_order.map(function (e) {
        return Number(e);
      }) : [],
      child_size: (0, _helpers.isSet)(object.child_size) ? Number(object.child_size) : 0,
      min_prefix_length: (0, _helpers.isSet)(object.min_prefix_length) ? Number(object.min_prefix_length) : 0,
      max_prefix_length: (0, _helpers.isSet)(object.max_prefix_length) ? Number(object.max_prefix_length) : 0,
      empty_child: (0, _helpers.isSet)(object.empty_child) ? (0, _helpers.bytesFromBase64)(object.empty_child) : new Uint8Array(),
      hash: (0, _helpers.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$child_order, _object$child_size, _object$min_prefix_le, _object$max_prefix_le, _object$empty_child, _object$hash3;
    var message = createBaseInnerSpec();
    message.child_order = ((_object$child_order = object.child_order) === null || _object$child_order === void 0 ? void 0 : _object$child_order.map(function (e) {
      return e;
    })) || [];
    message.child_size = (_object$child_size = object.child_size) !== null && _object$child_size !== void 0 ? _object$child_size : 0;
    message.min_prefix_length = (_object$min_prefix_le = object.min_prefix_length) !== null && _object$min_prefix_le !== void 0 ? _object$min_prefix_le : 0;
    message.max_prefix_length = (_object$max_prefix_le = object.max_prefix_length) !== null && _object$max_prefix_le !== void 0 ? _object$max_prefix_le : 0;
    message.empty_child = (_object$empty_child = object.empty_child) !== null && _object$empty_child !== void 0 ? _object$empty_child : new Uint8Array();
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : 0;
    return message;
  }
};
exports.InnerSpec = InnerSpec;
function createBaseBatchProof() {
  return {
    entries: []
  };
}
var BatchProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.entries),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBatchProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return BatchEntry.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$entries;
    var message = createBaseBatchProof();
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(function (e) {
      return BatchEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.BatchProof = BatchProof;
function createBaseBatchEntry() {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
var BatchEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBatchEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
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
      exist: (0, _helpers.isSet)(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: (0, _helpers.isSet)(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
exports.BatchEntry = BatchEntry;
function createBaseCompressedBatchProof() {
  return {
    entries: [],
    lookup_inners: []
  };
}
var CompressedBatchProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.entries),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.lookup_inners),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v = _step5.value;
        InnerOp.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lookup_inners.push(InnerOp.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return CompressedBatchEntry.fromJSON(e);
      }) : [],
      lookup_inners: Array.isArray(object === null || object === void 0 ? void 0 : object.lookup_inners) ? object.lookup_inners.map(function (e) {
        return InnerOp.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$entries2, _object$lookup_inners;
    var message = createBaseCompressedBatchProof();
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(function (e) {
      return CompressedBatchEntry.fromPartial(e);
    })) || [];
    message.lookup_inners = ((_object$lookup_inners = object.lookup_inners) === null || _object$lookup_inners === void 0 ? void 0 : _object$lookup_inners.map(function (e) {
      return InnerOp.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.CompressedBatchProof = CompressedBatchProof;
function createBaseCompressedBatchEntry() {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
var CompressedBatchEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
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
      exist: (0, _helpers.isSet)(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: (0, _helpers.isSet)(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
exports.CompressedBatchEntry = CompressedBatchEntry;
function createBaseCompressedExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: LeafOp.fromPartial({}),
    path: []
  };
}
var CompressedExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    var _iterator6 = _createForOfIteratorHelper(message.path),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array(),
      leaf: (0, _helpers.isSet)(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function (e) {
        return Number(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key3, _object$value2, _object$path2;
    var message = createBaseCompressedExistenceProof();
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.CompressedExistenceProof = CompressedExistenceProof;
function createBaseCompressedNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: CompressedExistenceProof.fromPartial({}),
    right: CompressedExistenceProof.fromPartial({})
  };
}
var CompressedNonExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      left: (0, _helpers.isSet)(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
      right: (0, _helpers.isSet)(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key4;
    var message = createBaseCompressedNonExistenceProof();
    message.key = (_object$key4 = object.key) !== null && _object$key4 !== void 0 ? _object$key4 : new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};
exports.CompressedNonExistenceProof = CompressedNonExistenceProof;