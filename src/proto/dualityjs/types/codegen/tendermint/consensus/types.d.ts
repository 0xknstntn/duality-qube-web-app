import { PartSetHeader, Part, SignedMsgType, BlockID } from "../types/types";
import { Proposal as Proposal1 } from "../types/types";
import { Vote as Vote1 } from "../types/types";
import { BitArray } from "../libs/bits/types";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStep {
    height: Long;
    round: number;
    step: number;
    seconds_since_start_time: Long;
    last_commit_round: number;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlock {
    height: Long;
    round: number;
    block_part_set_header: PartSetHeader;
    block_parts: BitArray;
    is_commit: boolean;
}
/** Proposal is sent when a new block is proposed. */
export interface Proposal {
    proposal: Proposal1;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOL {
    height: Long;
    proposal_pol_round: number;
    proposal_pol: BitArray;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPart {
    height: Long;
    round: number;
    part: Part;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface Vote {
    vote: Vote1;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVote {
    height: Long;
    round: number;
    type: SignedMsgType;
    index: number;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23 {
    height: Long;
    round: number;
    type: SignedMsgType;
    block_id: BlockID;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBits {
    height: Long;
    round: number;
    type: SignedMsgType;
    block_id: BlockID;
    votes: BitArray;
}
export interface Message {
    new_round_step?: NewRoundStep;
    new_valid_block?: NewValidBlock;
    proposal?: Proposal;
    proposal_pol?: ProposalPOL;
    block_part?: BlockPart;
    vote?: Vote;
    has_vote?: HasVote;
    vote_set_maj23?: VoteSetMaj23;
    vote_set_bits?: VoteSetBits;
}
export declare const NewRoundStep: {
    encode(message: NewRoundStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewRoundStep;
    fromJSON(object: any): NewRoundStep;
    fromPartial(object: DeepPartial<NewRoundStep>): NewRoundStep;
};
export declare const NewValidBlock: {
    encode(message: NewValidBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewValidBlock;
    fromJSON(object: any): NewValidBlock;
    fromPartial(object: DeepPartial<NewValidBlock>): NewValidBlock;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
};
export declare const ProposalPOL: {
    encode(message: ProposalPOL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalPOL;
    fromJSON(object: any): ProposalPOL;
    fromPartial(object: DeepPartial<ProposalPOL>): ProposalPOL;
};
export declare const BlockPart: {
    encode(message: BlockPart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockPart;
    fromJSON(object: any): BlockPart;
    fromPartial(object: DeepPartial<BlockPart>): BlockPart;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    fromPartial(object: DeepPartial<Vote>): Vote;
};
export declare const HasVote: {
    encode(message: HasVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HasVote;
    fromJSON(object: any): HasVote;
    fromPartial(object: DeepPartial<HasVote>): HasVote;
};
export declare const VoteSetMaj23: {
    encode(message: VoteSetMaj23, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetMaj23;
    fromJSON(object: any): VoteSetMaj23;
    fromPartial(object: DeepPartial<VoteSetMaj23>): VoteSetMaj23;
};
export declare const VoteSetBits: {
    encode(message: VoteSetBits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetBits;
    fromJSON(object: any): VoteSetBits;
    fromPartial(object: DeepPartial<VoteSetBits>): VoteSetBits;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    fromPartial(object: DeepPartial<Message>): Message;
};
