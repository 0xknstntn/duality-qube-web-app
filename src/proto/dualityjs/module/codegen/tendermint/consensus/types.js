import { PartSetHeader, Part, BlockID, signedMsgTypeFromJSON } from "../types/types";
import { Proposal as Proposal1 } from "../types/types";
import { Vote as Vote1 } from "../types/types";
import { BitArray } from "../libs/bits/types";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */

/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */

/** Proposal is sent when a new block is proposed. */

/** ProposalPOL is sent when a previous proposal is re-proposed. */

/** BlockPart is sent when gossipping a piece of the proposed block. */

/** Vote is sent when voting for a proposal (or lack thereof). */

/** HasVote is sent to indicate that a particular vote has been received. */

/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */

/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */

function createBaseNewRoundStep() {
  return {
    height: Long.ZERO,
    round: 0,
    step: 0,
    seconds_since_start_time: Long.ZERO,
    last_commit_round: 0
  };
}
export const NewRoundStep = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(24).uint32(message.step);
    }
    if (!message.seconds_since_start_time.isZero()) {
      writer.uint32(32).int64(message.seconds_since_start_time);
    }
    if (message.last_commit_round !== 0) {
      writer.uint32(40).int32(message.last_commit_round);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewRoundStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.step = reader.uint32();
          break;
        case 4:
          message.seconds_since_start_time = reader.int64();
          break;
        case 5:
          message.last_commit_round = reader.int32();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0,
      seconds_since_start_time: isSet(object.seconds_since_start_time) ? Long.fromValue(object.seconds_since_start_time) : Long.ZERO,
      last_commit_round: isSet(object.last_commit_round) ? Number(object.last_commit_round) : 0
    };
  },
  fromPartial(object) {
    var _object$round, _object$step, _object$last_commit_r;
    const message = createBaseNewRoundStep();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    message.seconds_since_start_time = object.seconds_since_start_time !== undefined && object.seconds_since_start_time !== null ? Long.fromValue(object.seconds_since_start_time) : Long.ZERO;
    message.last_commit_round = (_object$last_commit_r = object.last_commit_round) !== null && _object$last_commit_r !== void 0 ? _object$last_commit_r : 0;
    return message;
  }
};
function createBaseNewValidBlock() {
  return {
    height: Long.ZERO,
    round: 0,
    block_part_set_header: PartSetHeader.fromPartial({}),
    block_parts: BitArray.fromPartial({}),
    is_commit: false
  };
}
export const NewValidBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.block_part_set_header !== undefined) {
      PartSetHeader.encode(message.block_part_set_header, writer.uint32(26).fork()).ldelim();
    }
    if (message.block_parts !== undefined) {
      BitArray.encode(message.block_parts, writer.uint32(34).fork()).ldelim();
    }
    if (message.is_commit === true) {
      writer.uint32(40).bool(message.is_commit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewValidBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.block_part_set_header = PartSetHeader.decode(reader, reader.uint32());
          break;
        case 4:
          message.block_parts = BitArray.decode(reader, reader.uint32());
          break;
        case 5:
          message.is_commit = reader.bool();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      block_part_set_header: isSet(object.block_part_set_header) ? PartSetHeader.fromJSON(object.block_part_set_header) : undefined,
      block_parts: isSet(object.block_parts) ? BitArray.fromJSON(object.block_parts) : undefined,
      is_commit: isSet(object.is_commit) ? Boolean(object.is_commit) : false
    };
  },
  fromPartial(object) {
    var _object$round2, _object$is_commit;
    const message = createBaseNewValidBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.block_part_set_header = object.block_part_set_header !== undefined && object.block_part_set_header !== null ? PartSetHeader.fromPartial(object.block_part_set_header) : undefined;
    message.block_parts = object.block_parts !== undefined && object.block_parts !== null ? BitArray.fromPartial(object.block_parts) : undefined;
    message.is_commit = (_object$is_commit = object.is_commit) !== null && _object$is_commit !== void 0 ? _object$is_commit : false;
    return message;
  }
};
function createBaseProposal() {
  return {
    proposal: Proposal1.fromPartial({})
  };
}
export const Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposal !== undefined) {
      Proposal1.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal1.decode(reader, reader.uint32());
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
      proposal: isSet(object.proposal) ? Proposal1.fromJSON(object.proposal) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal1.fromPartial(object.proposal) : undefined;
    return message;
  }
};
function createBaseProposalPOL() {
  return {
    height: Long.ZERO,
    proposal_pol_round: 0,
    proposal_pol: BitArray.fromPartial({})
  };
}
export const ProposalPOL = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.proposal_pol_round !== 0) {
      writer.uint32(16).int32(message.proposal_pol_round);
    }
    if (message.proposal_pol !== undefined) {
      BitArray.encode(message.proposal_pol, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalPOL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.proposal_pol_round = reader.int32();
          break;
        case 3:
          message.proposal_pol = BitArray.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      proposal_pol_round: isSet(object.proposal_pol_round) ? Number(object.proposal_pol_round) : 0,
      proposal_pol: isSet(object.proposal_pol) ? BitArray.fromJSON(object.proposal_pol) : undefined
    };
  },
  fromPartial(object) {
    var _object$proposal_pol_;
    const message = createBaseProposalPOL();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.proposal_pol_round = (_object$proposal_pol_ = object.proposal_pol_round) !== null && _object$proposal_pol_ !== void 0 ? _object$proposal_pol_ : 0;
    message.proposal_pol = object.proposal_pol !== undefined && object.proposal_pol !== null ? BitArray.fromPartial(object.proposal_pol) : undefined;
    return message;
  }
};
function createBaseBlockPart() {
  return {
    height: Long.ZERO,
    round: 0,
    part: Part.fromPartial({})
  };
}
export const BlockPart = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.part !== undefined) {
      Part.encode(message.part, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockPart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.part = Part.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      part: isSet(object.part) ? Part.fromJSON(object.part) : undefined
    };
  },
  fromPartial(object) {
    var _object$round3;
    const message = createBaseBlockPart();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.part = object.part !== undefined && object.part !== null ? Part.fromPartial(object.part) : undefined;
    return message;
  }
};
function createBaseVote() {
  return {
    vote: Vote1.fromPartial({})
  };
}
export const Vote = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.vote !== undefined) {
      Vote1.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote1.decode(reader, reader.uint32());
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
      vote: isSet(object.vote) ? Vote1.fromJSON(object.vote) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseVote();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote1.fromPartial(object.vote) : undefined;
    return message;
  }
};
function createBaseHasVote() {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    index: 0
  };
}
export const HasVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.index !== 0) {
      writer.uint32(32).int32(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHasVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.type = reader.int32();
          break;
        case 4:
          message.index = reader.int32();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial(object) {
    var _object$round4, _object$type, _object$index;
    const message = createBaseHasVote();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round4 = object.round) !== null && _object$round4 !== void 0 ? _object$round4 : 0;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    return message;
  }
};
function createBaseVoteSetMaj23() {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    block_id: BlockID.fromPartial({})
  };
}
export const VoteSetMaj23 = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSetMaj23();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.type = reader.int32();
          break;
        case 4:
          message.block_id = BlockID.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined
    };
  },
  fromPartial(object) {
    var _object$round5, _object$type2;
    const message = createBaseVoteSetMaj23();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round5 = object.round) !== null && _object$round5 !== void 0 ? _object$round5 : 0;
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    return message;
  }
};
function createBaseVoteSetBits() {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    block_id: BlockID.fromPartial({}),
    votes: BitArray.fromPartial({})
  };
}
export const VoteSetBits = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.votes !== undefined) {
      BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSetBits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.type = reader.int32();
          break;
        case 4:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.votes = BitArray.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      votes: isSet(object.votes) ? BitArray.fromJSON(object.votes) : undefined
    };
  },
  fromPartial(object) {
    var _object$round6, _object$type3;
    const message = createBaseVoteSetBits();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = (_object$round6 = object.round) !== null && _object$round6 !== void 0 ? _object$round6 : 0;
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.votes = object.votes !== undefined && object.votes !== null ? BitArray.fromPartial(object.votes) : undefined;
    return message;
  }
};
function createBaseMessage() {
  return {
    new_round_step: undefined,
    new_valid_block: undefined,
    proposal: undefined,
    proposal_pol: undefined,
    block_part: undefined,
    vote: undefined,
    has_vote: undefined,
    vote_set_maj23: undefined,
    vote_set_bits: undefined
  };
}
export const Message = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.new_round_step !== undefined) {
      NewRoundStep.encode(message.new_round_step, writer.uint32(10).fork()).ldelim();
    }
    if (message.new_valid_block !== undefined) {
      NewValidBlock.encode(message.new_valid_block, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
    }
    if (message.proposal_pol !== undefined) {
      ProposalPOL.encode(message.proposal_pol, writer.uint32(34).fork()).ldelim();
    }
    if (message.block_part !== undefined) {
      BlockPart.encode(message.block_part, writer.uint32(42).fork()).ldelim();
    }
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
    }
    if (message.has_vote !== undefined) {
      HasVote.encode(message.has_vote, writer.uint32(58).fork()).ldelim();
    }
    if (message.vote_set_maj23 !== undefined) {
      VoteSetMaj23.encode(message.vote_set_maj23, writer.uint32(66).fork()).ldelim();
    }
    if (message.vote_set_bits !== undefined) {
      VoteSetBits.encode(message.vote_set_bits, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.new_round_step = NewRoundStep.decode(reader, reader.uint32());
          break;
        case 2:
          message.new_valid_block = NewValidBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 4:
          message.proposal_pol = ProposalPOL.decode(reader, reader.uint32());
          break;
        case 5:
          message.block_part = BlockPart.decode(reader, reader.uint32());
          break;
        case 6:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 7:
          message.has_vote = HasVote.decode(reader, reader.uint32());
          break;
        case 8:
          message.vote_set_maj23 = VoteSetMaj23.decode(reader, reader.uint32());
          break;
        case 9:
          message.vote_set_bits = VoteSetBits.decode(reader, reader.uint32());
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
      new_round_step: isSet(object.new_round_step) ? NewRoundStep.fromJSON(object.new_round_step) : undefined,
      new_valid_block: isSet(object.new_valid_block) ? NewValidBlock.fromJSON(object.new_valid_block) : undefined,
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      proposal_pol: isSet(object.proposal_pol) ? ProposalPOL.fromJSON(object.proposal_pol) : undefined,
      block_part: isSet(object.block_part) ? BlockPart.fromJSON(object.block_part) : undefined,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      has_vote: isSet(object.has_vote) ? HasVote.fromJSON(object.has_vote) : undefined,
      vote_set_maj23: isSet(object.vote_set_maj23) ? VoteSetMaj23.fromJSON(object.vote_set_maj23) : undefined,
      vote_set_bits: isSet(object.vote_set_bits) ? VoteSetBits.fromJSON(object.vote_set_bits) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMessage();
    message.new_round_step = object.new_round_step !== undefined && object.new_round_step !== null ? NewRoundStep.fromPartial(object.new_round_step) : undefined;
    message.new_valid_block = object.new_valid_block !== undefined && object.new_valid_block !== null ? NewValidBlock.fromPartial(object.new_valid_block) : undefined;
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.proposal_pol = object.proposal_pol !== undefined && object.proposal_pol !== null ? ProposalPOL.fromPartial(object.proposal_pol) : undefined;
    message.block_part = object.block_part !== undefined && object.block_part !== null ? BlockPart.fromPartial(object.block_part) : undefined;
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.has_vote = object.has_vote !== undefined && object.has_vote !== null ? HasVote.fromPartial(object.has_vote) : undefined;
    message.vote_set_maj23 = object.vote_set_maj23 !== undefined && object.vote_set_maj23 !== null ? VoteSetMaj23.fromPartial(object.vote_set_maj23) : undefined;
    message.vote_set_bits = object.vote_set_bits !== undefined && object.vote_set_bits !== null ? VoteSetBits.fromPartial(object.vote_set_bits) : undefined;
    return message;
  }
};