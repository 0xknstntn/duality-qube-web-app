import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, DeepPartial } from "../../../helpers";
export enum HashOp {
  /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
  NO_HASH = 0,
  SHA256 = 1,
  SHA512 = 2,
  KECCAK = 3,
  RIPEMD160 = 4,
  /** BITCOIN - ripemd160(sha256(x)) */
  BITCOIN = 5,
  SHA512_256 = 6,
  UNRECOGNIZED = -1,
}
export function hashOpFromJSON(object: any): HashOp {
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
export function hashOpToJSON(object: HashOp): string {
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
export enum LengthOp {
  /** NO_PREFIX - NO_PREFIX don't include any length info */
  NO_PREFIX = 0,
  /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
  VAR_PROTO = 1,
  /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
  VAR_RLP = 2,
  /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
  FIXED32_BIG = 3,
  /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
  FIXED32_LITTLE = 4,
  /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
  FIXED64_BIG = 5,
  /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
  FIXED64_LITTLE = 6,
  /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
  REQUIRE_32_BYTES = 7,
  /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
  REQUIRE_64_BYTES = 8,
  UNRECOGNIZED = -1,
}
export function lengthOpFromJSON(object: any): LengthOp {
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
export function lengthOpToJSON(object: LengthOp): string {
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
export interface ExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp;
  path: InnerOp[];
}
/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProof {
  /** TODO: remove this as unnecessary??? we prove a range */
  key: Uint8Array;
  left: ExistenceProof;
  right: ExistenceProof;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProof {
  exist?: ExistenceProof;
  nonexist?: NonExistenceProof;
  batch?: BatchProof;
  compressed?: CompressedBatchProof;
}
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
export interface LeafOp {
  hash: HashOp;
  prehash_key: HashOp;
  prehash_value: HashOp;
  length: LengthOp;
  /**
   * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
   * a leaf node from an inner node.
   */
  prefix: Uint8Array;
}
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
export interface InnerOp {
  hash: HashOp;
  prefix: Uint8Array;
  suffix: Uint8Array;
}
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
export interface ProofSpec {
  /**
   * any field in the ExistenceProof must be the same as in this spec.
   * except Prefix, which is just the first bytes of prefix (spec can be longer)
   */
  leaf_spec: LeafOp;
  inner_spec: InnerSpec;
  /** max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries) */
  max_depth: number;
  /** min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) */
  min_depth: number;
  /**
   * prehash_key_before_comparison is a flag that indicates whether to use the
   * prehash_key specified by LeafOp to compare lexical ordering of keys for
   * non-existence proofs.
   */
  prehash_key_before_comparison: boolean;
}
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
export interface InnerSpec {
  /**
   * Child order is the ordering of the children node, must count from 0
   * iavl tree is [0, 1] (left then right)
   * merk is [0, 2, 1] (left, right, here)
   */
  child_order: number[];
  child_size: number;
  min_prefix_length: number;
  max_prefix_length: number;
  /** empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) */
  empty_child: Uint8Array;
  /** hash is the algorithm that must be used for each InnerOp */
  hash: HashOp;
}
/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProof {
  entries: BatchEntry[];
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntry {
  exist?: ExistenceProof;
  nonexist?: NonExistenceProof;
}
export interface CompressedBatchProof {
  entries: CompressedBatchEntry[];
  lookup_inners: InnerOp[];
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntry {
  exist?: CompressedExistenceProof;
  nonexist?: CompressedNonExistenceProof;
}
export interface CompressedExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp;
  /** these are indexes into the lookup_inners table in CompressedBatchProof */
  path: number[];
}
export interface CompressedNonExistenceProof {
  /** TODO: remove this as unnecessary??? we prove a range */
  key: Uint8Array;
  left: CompressedExistenceProof;
  right: CompressedExistenceProof;
}
function createBaseExistenceProof(): ExistenceProof {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: LeafOp.fromPartial({}),
    path: []
  };
}
export const ExistenceProof = {
  encode(message: ExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      InnerOp.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExistenceProof {
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
  fromJSON(object: any): ExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => InnerOp.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<ExistenceProof>): ExistenceProof {
    const message = createBaseExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = object.path?.map(e => InnerOp.fromPartial(e)) || [];
    return message;
  }
};
function createBaseNonExistenceProof(): NonExistenceProof {
  return {
    key: new Uint8Array(),
    left: ExistenceProof.fromPartial({}),
    right: ExistenceProof.fromPartial({})
  };
}
export const NonExistenceProof = {
  encode(message: NonExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): NonExistenceProof {
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
  fromJSON(object: any): NonExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : undefined
    };
  },
  fromPartial(object: DeepPartial<NonExistenceProof>): NonExistenceProof {
    const message = createBaseNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};
function createBaseCommitmentProof(): CommitmentProof {
  return {
    exist: undefined,
    nonexist: undefined,
    batch: undefined,
    compressed: undefined
  };
}
export const CommitmentProof = {
  encode(message: CommitmentProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentProof {
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
  fromJSON(object: any): CommitmentProof {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
      batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
      compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined
    };
  },
  fromPartial(object: DeepPartial<CommitmentProof>): CommitmentProof {
    const message = createBaseCommitmentProof();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
    message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
    return message;
  }
};
function createBaseLeafOp(): LeafOp {
  return {
    hash: 0,
    prehash_key: 0,
    prehash_value: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
export const LeafOp = {
  encode(message: LeafOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): LeafOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = (reader.int32() as any);
          break;
        case 2:
          message.prehash_key = (reader.int32() as any);
          break;
        case 3:
          message.prehash_value = (reader.int32() as any);
          break;
        case 4:
          message.length = (reader.int32() as any);
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
  fromJSON(object: any): LeafOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prehash_key: isSet(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
      prehash_value: isSet(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
      length: isSet(object.length) ? lengthOpFromJSON(object.length) : -1,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<LeafOp>): LeafOp {
    const message = createBaseLeafOp();
    message.hash = object.hash ?? 0;
    message.prehash_key = object.prehash_key ?? 0;
    message.prehash_value = object.prehash_value ?? 0;
    message.length = object.length ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  }
};
function createBaseInnerOp(): InnerOp {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
export const InnerOp = {
  encode(message: InnerOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): InnerOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = (reader.int32() as any);
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
  fromJSON(object: any): InnerOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<InnerOp>): InnerOp {
    const message = createBaseInnerOp();
    message.hash = object.hash ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    message.suffix = object.suffix ?? new Uint8Array();
    return message;
  }
};
function createBaseProofSpec(): ProofSpec {
  return {
    leaf_spec: LeafOp.fromPartial({}),
    inner_spec: InnerSpec.fromPartial({}),
    max_depth: 0,
    min_depth: 0,
    prehash_key_before_comparison: false
  };
}
export const ProofSpec = {
  encode(message: ProofSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ProofSpec {
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
  fromJSON(object: any): ProofSpec {
    return {
      leaf_spec: isSet(object.leaf_spec) ? LeafOp.fromJSON(object.leaf_spec) : undefined,
      inner_spec: isSet(object.inner_spec) ? InnerSpec.fromJSON(object.inner_spec) : undefined,
      max_depth: isSet(object.max_depth) ? Number(object.max_depth) : 0,
      min_depth: isSet(object.min_depth) ? Number(object.min_depth) : 0,
      prehash_key_before_comparison: isSet(object.prehash_key_before_comparison) ? Boolean(object.prehash_key_before_comparison) : false
    };
  },
  fromPartial(object: DeepPartial<ProofSpec>): ProofSpec {
    const message = createBaseProofSpec();
    message.leaf_spec = object.leaf_spec !== undefined && object.leaf_spec !== null ? LeafOp.fromPartial(object.leaf_spec) : undefined;
    message.inner_spec = object.inner_spec !== undefined && object.inner_spec !== null ? InnerSpec.fromPartial(object.inner_spec) : undefined;
    message.max_depth = object.max_depth ?? 0;
    message.min_depth = object.min_depth ?? 0;
    message.prehash_key_before_comparison = object.prehash_key_before_comparison ?? false;
    return message;
  }
};
function createBaseInnerSpec(): InnerSpec {
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
  encode(message: InnerSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): InnerSpec {
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
          message.hash = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InnerSpec {
    return {
      child_order: Array.isArray(object?.child_order) ? object.child_order.map((e: any) => Number(e)) : [],
      child_size: isSet(object.child_size) ? Number(object.child_size) : 0,
      min_prefix_length: isSet(object.min_prefix_length) ? Number(object.min_prefix_length) : 0,
      max_prefix_length: isSet(object.max_prefix_length) ? Number(object.max_prefix_length) : 0,
      empty_child: isSet(object.empty_child) ? bytesFromBase64(object.empty_child) : new Uint8Array(),
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1
    };
  },
  fromPartial(object: DeepPartial<InnerSpec>): InnerSpec {
    const message = createBaseInnerSpec();
    message.child_order = object.child_order?.map(e => e) || [];
    message.child_size = object.child_size ?? 0;
    message.min_prefix_length = object.min_prefix_length ?? 0;
    message.max_prefix_length = object.max_prefix_length ?? 0;
    message.empty_child = object.empty_child ?? new Uint8Array();
    message.hash = object.hash ?? 0;
    return message;
  }
};
function createBaseBatchProof(): BatchProof {
  return {
    entries: []
  };
}
export const BatchProof = {
  encode(message: BatchProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      BatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchProof {
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
  fromJSON(object: any): BatchProof {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => BatchEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<BatchProof>): BatchProof {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map(e => BatchEntry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBatchEntry(): BatchEntry {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const BatchEntry = {
  encode(message: BatchEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEntry {
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
  fromJSON(object: any): BatchEntry {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },
  fromPartial(object: DeepPartial<BatchEntry>): BatchEntry {
    const message = createBaseBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
function createBaseCompressedBatchProof(): CompressedBatchProof {
  return {
    entries: [],
    lookup_inners: []
  };
}
export const CompressedBatchProof = {
  encode(message: CompressedBatchProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookup_inners) {
      InnerOp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedBatchProof {
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
  fromJSON(object: any): CompressedBatchProof {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CompressedBatchEntry.fromJSON(e)) : [],
      lookup_inners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e: any) => InnerOp.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<CompressedBatchProof>): CompressedBatchProof {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map(e => CompressedBatchEntry.fromPartial(e)) || [];
    message.lookup_inners = object.lookup_inners?.map(e => InnerOp.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCompressedBatchEntry(): CompressedBatchEntry {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const CompressedBatchEntry = {
  encode(message: CompressedBatchEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedBatchEntry {
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
  fromJSON(object: any): CompressedBatchEntry {
    return {
      exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },
  fromPartial(object: DeepPartial<CompressedBatchEntry>): CompressedBatchEntry {
    const message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
function createBaseCompressedExistenceProof(): CompressedExistenceProof {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: LeafOp.fromPartial({}),
    path: []
  };
}
export const CompressedExistenceProof = {
  encode(message: CompressedExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedExistenceProof {
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
  fromJSON(object: any): CompressedExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : []
    };
  },
  fromPartial(object: DeepPartial<CompressedExistenceProof>): CompressedExistenceProof {
    const message = createBaseCompressedExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = object.path?.map(e => e) || [];
    return message;
  }
};
function createBaseCompressedNonExistenceProof(): CompressedNonExistenceProof {
  return {
    key: new Uint8Array(),
    left: CompressedExistenceProof.fromPartial({}),
    right: CompressedExistenceProof.fromPartial({})
  };
}
export const CompressedNonExistenceProof = {
  encode(message: CompressedNonExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedNonExistenceProof {
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
  fromJSON(object: any): CompressedNonExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined
    };
  },
  fromPartial(object: DeepPartial<CompressedNonExistenceProof>): CompressedNonExistenceProof {
    const message = createBaseCompressedNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};