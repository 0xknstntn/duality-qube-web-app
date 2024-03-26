import { SignedMsgType } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CanonicalBlockID {
    hash: Uint8Array;
    part_set_header: CanonicalPartSetHeader;
}
export interface CanonicalPartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalProposal {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    pol_round: Long;
    block_id: CanonicalBlockID;
    timestamp: Timestamp;
    chain_id: string;
}
export interface CanonicalVote {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    block_id: CanonicalBlockID;
    timestamp: Timestamp;
    chain_id: string;
}
export declare const CanonicalBlockID: {
    encode(message: CanonicalBlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalBlockID;
    fromJSON(object: any): CanonicalBlockID;
    fromPartial(object: DeepPartial<CanonicalBlockID>): CanonicalBlockID;
};
export declare const CanonicalPartSetHeader: {
    encode(message: CanonicalPartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalPartSetHeader;
    fromJSON(object: any): CanonicalPartSetHeader;
    fromPartial(object: DeepPartial<CanonicalPartSetHeader>): CanonicalPartSetHeader;
};
export declare const CanonicalProposal: {
    encode(message: CanonicalProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalProposal;
    fromJSON(object: any): CanonicalProposal;
    fromPartial(object: DeepPartial<CanonicalProposal>): CanonicalProposal;
};
export declare const CanonicalVote: {
    encode(message: CanonicalVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalVote;
    fromJSON(object: any): CanonicalVote;
    fromPartial(object: DeepPartial<CanonicalVote>): CanonicalVote;
};
