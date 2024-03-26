import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../helpers";
export let HashOp = /*#__PURE__*/function (HashOp) {
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
export function hashOpFromJSON(object) {
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
export function hashOpToJSON(object) {
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
export let LengthOp = /*#__PURE__*/function (LengthOp) {
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
export function lengthOpFromJSON(object) {
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
export function lengthOpToJSON(object) {
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
export const ExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.path) {
      InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(e => InnerOp.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$key, _object$value, _object$path;
    const message = createBaseExistenceProof();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(e => InnerOp.fromPartial(e))) || [];
    return message;
  }
};
function createBaseNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: ExistenceProof.fromPartial({}),
    right: ExistenceProof.fromPartial({})
  };
}
export const NonExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : undefined
    };
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBaseNonExistenceProof();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};
function createBaseCommitmentProof() {
  return {
    exist: undefined,
    nonexist: undefined,
    batch: undefined,
    compressed: undefined
  };
}
export const CommitmentProof = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
      batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
      compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseCommitmentProof();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
    message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
    return message;
  }
};
function createBaseLeafOp() {
  return {
    hash: 0,
    prehash_key: 0,
    prehash_value: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
export const LeafOp = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prehash_key: isSet(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
      prehash_value: isSet(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
      length: isSet(object.length) ? lengthOpFromJSON(object.length) : -1,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$hash, _object$prehash_key, _object$prehash_value, _object$length, _object$prefix;
    const message = createBaseLeafOp();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : 0;
    message.prehash_key = (_object$prehash_key = object.prehash_key) !== null && _object$prehash_key !== void 0 ? _object$prehash_key : 0;
    message.prehash_value = (_object$prehash_value = object.prehash_value) !== null && _object$prehash_value !== void 0 ? _object$prehash_value : 0;
    message.length = (_object$length = object.length) !== null && _object$length !== void 0 ? _object$length : 0;
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
function createBaseInnerOp() {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
export const InnerOp = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$hash2, _object$prefix2, _object$suffix;
    const message = createBaseInnerOp();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : 0;
    message.prefix = (_object$prefix2 = object.prefix) !== null && _object$prefix2 !== void 0 ? _object$prefix2 : new Uint8Array();
    message.suffix = (_object$suffix = object.suffix) !== null && _object$suffix !== void 0 ? _object$suffix : new Uint8Array();
    return message;
  }
};
function createBaseProofSpec() {
  return {
    leaf_spec: LeafOp.fromPartial({}),
    inner_spec: InnerSpec.fromPartial({}),
    max_depth: 0,
    min_depth: 0,
    prehash_key_before_comparison: false
  };
}
export const ProofSpec = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      leaf_spec: isSet(object.leaf_spec) ? LeafOp.fromJSON(object.leaf_spec) : undefined,
      inner_spec: isSet(object.inner_spec) ? InnerSpec.fromJSON(object.inner_spec) : undefined,
      max_depth: isSet(object.max_depth) ? Number(object.max_depth) : 0,
      min_depth: isSet(object.min_depth) ? Number(object.min_depth) : 0,
      prehash_key_before_comparison: isSet(object.prehash_key_before_comparison) ? Boolean(object.prehash_key_before_comparison) : false
    };
  },
  fromPartial(object) {
    var _object$max_depth, _object$min_depth, _object$prehash_key_b;
    const message = createBaseProofSpec();
    message.leaf_spec = object.leaf_spec !== undefined && object.leaf_spec !== null ? LeafOp.fromPartial(object.leaf_spec) : undefined;
    message.inner_spec = object.inner_spec !== undefined && object.inner_spec !== null ? InnerSpec.fromPartial(object.inner_spec) : undefined;
    message.max_depth = (_object$max_depth = object.max_depth) !== null && _object$max_depth !== void 0 ? _object$max_depth : 0;
    message.min_depth = (_object$min_depth = object.min_depth) !== null && _object$min_depth !== void 0 ? _object$min_depth : 0;
    message.prehash_key_before_comparison = (_object$prehash_key_b = object.prehash_key_before_comparison) !== null && _object$prehash_key_b !== void 0 ? _object$prehash_key_b : false;
    return message;
  }
};
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
export const InnerSpec = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.child_order) {
      writer.int32(v);
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
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
  fromJSON(object) {
    return {
      child_order: Array.isArray(object === null || object === void 0 ? void 0 : object.child_order) ? object.child_order.map(e => Number(e)) : [],
      child_size: isSet(object.child_size) ? Number(object.child_size) : 0,
      min_prefix_length: isSet(object.min_prefix_length) ? Number(object.min_prefix_length) : 0,
      max_prefix_length: isSet(object.max_prefix_length) ? Number(object.max_prefix_length) : 0,
      empty_child: isSet(object.empty_child) ? bytesFromBase64(object.empty_child) : new Uint8Array(),
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1
    };
  },
  fromPartial(object) {
    var _object$child_order, _object$child_size, _object$min_prefix_le, _object$max_prefix_le, _object$empty_child, _object$hash3;
    const message = createBaseInnerSpec();
    message.child_order = ((_object$child_order = object.child_order) === null || _object$child_order === void 0 ? void 0 : _object$child_order.map(e => e)) || [];
    message.child_size = (_object$child_size = object.child_size) !== null && _object$child_size !== void 0 ? _object$child_size : 0;
    message.min_prefix_length = (_object$min_prefix_le = object.min_prefix_length) !== null && _object$min_prefix_le !== void 0 ? _object$min_prefix_le : 0;
    message.max_prefix_length = (_object$max_prefix_le = object.max_prefix_length) !== null && _object$max_prefix_le !== void 0 ? _object$max_prefix_le : 0;
    message.empty_child = (_object$empty_child = object.empty_child) !== null && _object$empty_child !== void 0 ? _object$empty_child : new Uint8Array();
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : 0;
    return message;
  }
};
function createBaseBatchProof() {
  return {
    entries: []
  };
}
export const BatchProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(e => BatchEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$entries;
    const message = createBaseBatchProof();
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(e => BatchEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBatchEntry() {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const BatchEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
function createBaseCompressedBatchProof() {
  return {
    entries: [],
    lookup_inners: []
  };
}
export const CompressedBatchProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookup_inners) {
      InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(e => CompressedBatchEntry.fromJSON(e)) : [],
      lookup_inners: Array.isArray(object === null || object === void 0 ? void 0 : object.lookup_inners) ? object.lookup_inners.map(e => InnerOp.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$entries2, _object$lookup_inners;
    const message = createBaseCompressedBatchProof();
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(e => CompressedBatchEntry.fromPartial(e))) || [];
    message.lookup_inners = ((_object$lookup_inners = object.lookup_inners) === null || _object$lookup_inners === void 0 ? void 0 : _object$lookup_inners.map(e => InnerOp.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCompressedBatchEntry() {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const CompressedBatchEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
function createBaseCompressedExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: LeafOp.fromPartial({}),
    path: []
  };
}
export const CompressedExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
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
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
            const end2 = reader.uint32() + reader.pos;
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(e => Number(e)) : []
    };
  },
  fromPartial(object) {
    var _object$key3, _object$value2, _object$path2;
    const message = createBaseCompressedExistenceProof();
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(e => e)) || [];
    return message;
  }
};
function createBaseCompressedNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: CompressedExistenceProof.fromPartial({}),
    right: CompressedExistenceProof.fromPartial({})
  };
}
export const CompressedNonExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined
    };
  },
  fromPartial(object) {
    var _object$key4;
    const message = createBaseCompressedNonExistenceProof();
    message.key = (_object$key4 = object.key) !== null && _object$key4 !== void 0 ? _object$key4 : new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};