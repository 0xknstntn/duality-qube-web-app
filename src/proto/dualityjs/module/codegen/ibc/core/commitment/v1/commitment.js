import { CommitmentProof } from "../../../../cosmos/ics23/v1/proofs";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../../helpers";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */

/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */

/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */

/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */

function createBaseMerkleRoot() {
  return {
    hash: new Uint8Array()
  };
}
export const MerkleRoot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseMerkleRoot();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
function createBaseMerklePrefix() {
  return {
    key_prefix: new Uint8Array()
  };
}
export const MerklePrefix = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key_prefix.length !== 0) {
      writer.uint32(10).bytes(message.key_prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_prefix = reader.bytes();
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
      key_prefix: isSet(object.key_prefix) ? bytesFromBase64(object.key_prefix) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$key_prefix;
    const message = createBaseMerklePrefix();
    message.key_prefix = (_object$key_prefix = object.key_prefix) !== null && _object$key_prefix !== void 0 ? _object$key_prefix : new Uint8Array();
    return message;
  }
};
function createBaseMerklePath() {
  return {
    key_path: []
  };
}
export const MerklePath = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.key_path) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_path.push(reader.string());
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
      key_path: Array.isArray(object === null || object === void 0 ? void 0 : object.key_path) ? object.key_path.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$key_path;
    const message = createBaseMerklePath();
    message.key_path = ((_object$key_path = object.key_path) === null || _object$key_path === void 0 ? void 0 : _object$key_path.map(e => e)) || [];
    return message;
  }
};
function createBaseMerkleProof() {
  return {
    proofs: []
  };
}
export const MerkleProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.proofs) {
      CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
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
      proofs: Array.isArray(object === null || object === void 0 ? void 0 : object.proofs) ? object.proofs.map(e => CommitmentProof.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$proofs;
    const message = createBaseMerkleProof();
    message.proofs = ((_object$proofs = object.proofs) === null || _object$proofs === void 0 ? void 0 : _object$proofs.map(e => CommitmentProof.fromPartial(e))) || [];
    return message;
  }
};