import { ResponseDeliverTx, ResponseEndBlock, ResponseBeginBlock } from "../abci/types";
import { ValidatorSet } from "../types/validator";
import { ConsensusParams } from "../types/params";
import { Consensus } from "../version/types";
import { BlockID } from "../types/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
    deliver_txs: ResponseDeliverTx[];
    end_block: ResponseEndBlock;
    begin_block: ResponseBeginBlock;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
    validator_set: ValidatorSet;
    last_height_changed: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
    consensus_params: ConsensusParams;
    last_height_changed: Long;
}
export interface ABCIResponsesInfo {
    abci_responses: ABCIResponses;
    height: Long;
}
export interface Version {
    consensus: Consensus;
    software: string;
}
export interface State {
    version: Version;
    /** immutable */
    chain_id: string;
    initial_height: Long;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    last_block_height: Long;
    last_block_id: BlockID;
    last_block_time: Timestamp;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    next_validators: ValidatorSet;
    validators: ValidatorSet;
    last_validators: ValidatorSet;
    last_height_validators_changed: Long;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensus_params: ConsensusParams;
    last_height_consensus_params_changed: Long;
    /** Merkle root of the results from executing prev block */
    last_results_hash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    app_hash: Uint8Array;
}
export declare const ABCIResponses: {
    encode(message: ABCIResponses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses;
    fromJSON(object: any): ABCIResponses;
    fromPartial(object: DeepPartial<ABCIResponses>): ABCIResponses;
};
export declare const ValidatorsInfo: {
    encode(message: ValidatorsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo;
    fromJSON(object: any): ValidatorsInfo;
    fromPartial(object: DeepPartial<ValidatorsInfo>): ValidatorsInfo;
};
export declare const ConsensusParamsInfo: {
    encode(message: ConsensusParamsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo;
    fromJSON(object: any): ConsensusParamsInfo;
    fromPartial(object: DeepPartial<ConsensusParamsInfo>): ConsensusParamsInfo;
};
export declare const ABCIResponsesInfo: {
    encode(message: ABCIResponsesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo;
    fromJSON(object: any): ABCIResponsesInfo;
    fromPartial(object: DeepPartial<ABCIResponsesInfo>): ABCIResponsesInfo;
};
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    fromPartial(object: DeepPartial<Version>): Version;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    fromPartial(object: DeepPartial<State>): State;
};
