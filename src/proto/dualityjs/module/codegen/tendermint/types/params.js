import { Duration } from "../../google/protobuf/duration";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */

/** BlockParams contains limits on the block size. */

/** EvidenceParams determine how we handle evidence of malfeasance. */

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */

/** VersionParams contains the ABCI application version. */

/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */

function createBaseConsensusParams() {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({})
  };
}
export const ConsensusParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
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
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  }
};
function createBaseBlockParams() {
  return {
    max_bytes: Long.ZERO,
    max_gas: Long.ZERO
  };
}
export const BlockParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.max_bytes.isZero()) {
      writer.uint32(8).int64(message.max_bytes);
    }
    if (!message.max_gas.isZero()) {
      writer.uint32(16).int64(message.max_gas);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_bytes = reader.int64();
          break;
        case 2:
          message.max_gas = reader.int64();
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
      max_bytes: isSet(object.max_bytes) ? Long.fromValue(object.max_bytes) : Long.ZERO,
      max_gas: isSet(object.max_gas) ? Long.fromValue(object.max_gas) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseBlockParams();
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? Long.fromValue(object.max_bytes) : Long.ZERO;
    message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? Long.fromValue(object.max_gas) : Long.ZERO;
    return message;
  }
};
function createBaseEvidenceParams() {
  return {
    max_age_num_blocks: Long.ZERO,
    max_age_duration: Duration.fromPartial({}),
    max_bytes: Long.ZERO
  };
}
export const EvidenceParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.max_age_num_blocks.isZero()) {
      writer.uint32(8).int64(message.max_age_num_blocks);
    }
    if (message.max_age_duration !== undefined) {
      Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.max_bytes.isZero()) {
      writer.uint32(24).int64(message.max_bytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_age_num_blocks = reader.int64();
          break;
        case 2:
          message.max_age_duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.max_bytes = reader.int64();
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
      max_age_num_blocks: isSet(object.max_age_num_blocks) ? Long.fromValue(object.max_age_num_blocks) : Long.ZERO,
      max_age_duration: isSet(object.max_age_duration) ? Duration.fromJSON(object.max_age_duration) : undefined,
      max_bytes: isSet(object.max_bytes) ? Long.fromValue(object.max_bytes) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEvidenceParams();
    message.max_age_num_blocks = object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null ? Long.fromValue(object.max_age_num_blocks) : Long.ZERO;
    message.max_age_duration = object.max_age_duration !== undefined && object.max_age_duration !== null ? Duration.fromPartial(object.max_age_duration) : undefined;
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? Long.fromValue(object.max_bytes) : Long.ZERO;
    return message;
  }
};
function createBaseValidatorParams() {
  return {
    pub_key_types: []
  };
}
export const ValidatorParams = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pub_key_types) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key_types.push(reader.string());
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
      pub_key_types: Array.isArray(object === null || object === void 0 ? void 0 : object.pub_key_types) ? object.pub_key_types.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$pub_key_types;
    const message = createBaseValidatorParams();
    message.pub_key_types = ((_object$pub_key_types = object.pub_key_types) === null || _object$pub_key_types === void 0 ? void 0 : _object$pub_key_types.map(e => e)) || [];
    return message;
  }
};
function createBaseVersionParams() {
  return {
    app: Long.UZERO
  };
}
export const VersionParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.app.isZero()) {
      writer.uint32(8).uint64(message.app);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app = reader.uint64();
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
      app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseVersionParams();
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  }
};
function createBaseHashedParams() {
  return {
    block_max_bytes: Long.ZERO,
    block_max_gas: Long.ZERO
  };
}
export const HashedParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block_max_bytes.isZero()) {
      writer.uint32(8).int64(message.block_max_bytes);
    }
    if (!message.block_max_gas.isZero()) {
      writer.uint32(16).int64(message.block_max_gas);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_max_bytes = reader.int64();
          break;
        case 2:
          message.block_max_gas = reader.int64();
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
      block_max_bytes: isSet(object.block_max_bytes) ? Long.fromValue(object.block_max_bytes) : Long.ZERO,
      block_max_gas: isSet(object.block_max_gas) ? Long.fromValue(object.block_max_gas) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseHashedParams();
    message.block_max_bytes = object.block_max_bytes !== undefined && object.block_max_bytes !== null ? Long.fromValue(object.block_max_bytes) : Long.ZERO;
    message.block_max_gas = object.block_max_gas !== undefined && object.block_max_gas !== null ? Long.fromValue(object.block_max_gas) : Long.ZERO;
    return message;
  }
};