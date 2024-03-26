import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */

function createBaseEvidence() {
  return {
    duplicate_vote_evidence: undefined,
    light_client_attack_evidence: undefined
  };
}
export const Evidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.duplicate_vote_evidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.light_client_attack_evidence !== undefined) {
      LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
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
      duplicate_vote_evidence: isSet(object.duplicate_vote_evidence) ? DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: isSet(object.light_client_attack_evidence) ? LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseEvidence();
    message.duplicate_vote_evidence = object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence) : undefined;
    message.light_client_attack_evidence = object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null ? LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence) : undefined;
    return message;
  }
};
function createBaseDuplicateVoteEvidence() {
  return {
    vote_a: Vote.fromPartial({}),
    vote_b: Vote.fromPartial({}),
    total_voting_power: Long.ZERO,
    validator_power: Long.ZERO,
    timestamp: Timestamp.fromPartial({})
  };
}
export const DuplicateVoteEvidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.vote_a !== undefined) {
      Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote_b !== undefined) {
      Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(24).int64(message.total_voting_power);
    }
    if (!message.validator_power.isZero()) {
      writer.uint32(32).int64(message.validator_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_a = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.vote_b = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.total_voting_power = reader.int64();
          break;
        case 4:
          message.validator_power = reader.int64();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
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
      vote_a: isSet(object.vote_a) ? Vote.fromJSON(object.vote_a) : undefined,
      vote_b: isSet(object.vote_b) ? Vote.fromJSON(object.vote_b) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO,
      validator_power: isSet(object.validator_power) ? Long.fromValue(object.validator_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseDuplicateVoteEvidence();
    message.vote_a = object.vote_a !== undefined && object.vote_a !== null ? Vote.fromPartial(object.vote_a) : undefined;
    message.vote_b = object.vote_b !== undefined && object.vote_b !== null ? Vote.fromPartial(object.vote_b) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    message.validator_power = object.validator_power !== undefined && object.validator_power !== null ? Long.fromValue(object.validator_power) : Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseLightClientAttackEvidence() {
  return {
    conflicting_block: LightBlock.fromPartial({}),
    common_height: Long.ZERO,
    byzantine_validators: [],
    total_voting_power: Long.ZERO,
    timestamp: Timestamp.fromPartial({})
  };
}
export const LightClientAttackEvidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.conflicting_block !== undefined) {
      LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
    }
    if (!message.common_height.isZero()) {
      writer.uint32(16).int64(message.common_height);
    }
    for (const v of message.byzantine_validators) {
      Validator.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(32).int64(message.total_voting_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflicting_block = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.common_height = reader.int64();
          break;
        case 3:
          message.byzantine_validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.total_voting_power = reader.int64();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
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
      conflicting_block: isSet(object.conflicting_block) ? LightBlock.fromJSON(object.conflicting_block) : undefined,
      common_height: isSet(object.common_height) ? Long.fromValue(object.common_height) : Long.ZERO,
      byzantine_validators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators) ? object.byzantine_validators.map(e => Validator.fromJSON(e)) : [],
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object) {
    var _object$byzantine_val;
    const message = createBaseLightClientAttackEvidence();
    message.conflicting_block = object.conflicting_block !== undefined && object.conflicting_block !== null ? LightBlock.fromPartial(object.conflicting_block) : undefined;
    message.common_height = object.common_height !== undefined && object.common_height !== null ? Long.fromValue(object.common_height) : Long.ZERO;
    message.byzantine_validators = ((_object$byzantine_val = object.byzantine_validators) === null || _object$byzantine_val === void 0 ? void 0 : _object$byzantine_val.map(e => Validator.fromPartial(e))) || [];
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseEvidenceList() {
  return {
    evidence: []
  };
}
export const EvidenceList = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.evidence) {
      Evidence.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
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
      evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map(e => Evidence.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$evidence;
    const message = createBaseEvidenceList();
    message.evidence = ((_object$evidence = object.evidence) === null || _object$evidence === void 0 ? void 0 : _object$evidence.map(e => Evidence.fromPartial(e))) || [];
    return message;
  }
};