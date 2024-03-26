import { ResponseDeliverTx, ResponseEndBlock, ResponseBeginBlock } from "../abci/types";
import { ValidatorSet } from "../types/validator";
import { ConsensusParams } from "../types/params";
import { Consensus } from "../version/types";
import { BlockID } from "../types/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, DeepPartial, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
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
function createBaseABCIResponses(): ABCIResponses {
  return {
    deliver_txs: [],
    end_block: ResponseEndBlock.fromPartial({}),
    begin_block: ResponseBeginBlock.fromPartial({})
  };
}
export const ABCIResponses = {
  encode(message: ABCIResponses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deliver_txs) {
      ResponseDeliverTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.end_block !== undefined) {
      ResponseEndBlock.encode(message.end_block, writer.uint32(18).fork()).ldelim();
    }
    if (message.begin_block !== undefined) {
      ResponseBeginBlock.encode(message.begin_block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deliver_txs.push(ResponseDeliverTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end_block = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIResponses {
    return {
      deliver_txs: Array.isArray(object?.deliver_txs) ? object.deliver_txs.map((e: any) => ResponseDeliverTx.fromJSON(e)) : [],
      end_block: isSet(object.end_block) ? ResponseEndBlock.fromJSON(object.end_block) : undefined,
      begin_block: isSet(object.begin_block) ? ResponseBeginBlock.fromJSON(object.begin_block) : undefined
    };
  },
  fromPartial(object: DeepPartial<ABCIResponses>): ABCIResponses {
    const message = createBaseABCIResponses();
    message.deliver_txs = object.deliver_txs?.map(e => ResponseDeliverTx.fromPartial(e)) || [];
    message.end_block = object.end_block !== undefined && object.end_block !== null ? ResponseEndBlock.fromPartial(object.end_block) : undefined;
    message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? ResponseBeginBlock.fromPartial(object.begin_block) : undefined;
    return message;
  }
};
function createBaseValidatorsInfo(): ValidatorsInfo {
  return {
    validator_set: ValidatorSet.fromPartial({}),
    last_height_changed: Long.ZERO
  };
}
export const ValidatorsInfo = {
  encode(message: ValidatorsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_set !== undefined) {
      ValidatorSet.encode(message.validator_set, writer.uint32(10).fork()).ldelim();
    }
    if (!message.last_height_changed.isZero()) {
      writer.uint32(16).int64(message.last_height_changed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_set = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.last_height_changed = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorsInfo {
    return {
      validator_set: isSet(object.validator_set) ? ValidatorSet.fromJSON(object.validator_set) : undefined,
      last_height_changed: isSet(object.last_height_changed) ? Long.fromValue(object.last_height_changed) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<ValidatorsInfo>): ValidatorsInfo {
    const message = createBaseValidatorsInfo();
    message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? ValidatorSet.fromPartial(object.validator_set) : undefined;
    message.last_height_changed = object.last_height_changed !== undefined && object.last_height_changed !== null ? Long.fromValue(object.last_height_changed) : Long.ZERO;
    return message;
  }
};
function createBaseConsensusParamsInfo(): ConsensusParamsInfo {
  return {
    consensus_params: ConsensusParams.fromPartial({}),
    last_height_changed: Long.ZERO
  };
}
export const ConsensusParamsInfo = {
  encode(message: ConsensusParamsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.last_height_changed.isZero()) {
      writer.uint32(16).int64(message.last_height_changed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParamsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.last_height_changed = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusParamsInfo {
    return {
      consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
      last_height_changed: isSet(object.last_height_changed) ? Long.fromValue(object.last_height_changed) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<ConsensusParamsInfo>): ConsensusParamsInfo {
    const message = createBaseConsensusParamsInfo();
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.last_height_changed = object.last_height_changed !== undefined && object.last_height_changed !== null ? Long.fromValue(object.last_height_changed) : Long.ZERO;
    return message;
  }
};
function createBaseABCIResponsesInfo(): ABCIResponsesInfo {
  return {
    abci_responses: ABCIResponses.fromPartial({}),
    height: Long.ZERO
  };
}
export const ABCIResponsesInfo = {
  encode(message: ABCIResponsesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abci_responses !== undefined) {
      ABCIResponses.encode(message.abci_responses, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponsesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abci_responses = ABCIResponses.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIResponsesInfo {
    return {
      abci_responses: isSet(object.abci_responses) ? ABCIResponses.fromJSON(object.abci_responses) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<ABCIResponsesInfo>): ABCIResponsesInfo {
    const message = createBaseABCIResponsesInfo();
    message.abci_responses = object.abci_responses !== undefined && object.abci_responses !== null ? ABCIResponses.fromPartial(object.abci_responses) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseVersion(): Version {
  return {
    consensus: Consensus.fromPartial({}),
    software: ""
  };
}
export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus !== undefined) {
      Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Version {
    return {
      consensus: isSet(object.consensus) ? Consensus.fromJSON(object.consensus) : undefined,
      software: isSet(object.software) ? String(object.software) : ""
    };
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? Consensus.fromPartial(object.consensus) : undefined;
    message.software = object.software ?? "";
    return message;
  }
};
function createBaseState(): State {
  return {
    version: Version.fromPartial({}),
    chain_id: "",
    initial_height: Long.ZERO,
    last_block_height: Long.ZERO,
    last_block_id: BlockID.fromPartial({}),
    last_block_time: Timestamp.fromPartial({}),
    next_validators: ValidatorSet.fromPartial({}),
    validators: ValidatorSet.fromPartial({}),
    last_validators: ValidatorSet.fromPartial({}),
    last_height_validators_changed: Long.ZERO,
    consensus_params: ConsensusParams.fromPartial({}),
    last_height_consensus_params_changed: Long.ZERO,
    last_results_hash: new Uint8Array(),
    app_hash: new Uint8Array()
  };
}
export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (!message.initial_height.isZero()) {
      writer.uint32(112).int64(message.initial_height);
    }
    if (!message.last_block_height.isZero()) {
      writer.uint32(24).int64(message.last_block_height);
    }
    if (message.last_block_id !== undefined) {
      BlockID.encode(message.last_block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.last_block_time !== undefined) {
      Timestamp.encode(message.last_block_time, writer.uint32(42).fork()).ldelim();
    }
    if (message.next_validators !== undefined) {
      ValidatorSet.encode(message.next_validators, writer.uint32(50).fork()).ldelim();
    }
    if (message.validators !== undefined) {
      ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }
    if (message.last_validators !== undefined) {
      ValidatorSet.encode(message.last_validators, writer.uint32(66).fork()).ldelim();
    }
    if (!message.last_height_validators_changed.isZero()) {
      writer.uint32(72).int64(message.last_height_validators_changed);
    }
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(82).fork()).ldelim();
    }
    if (!message.last_height_consensus_params_changed.isZero()) {
      writer.uint32(88).int64(message.last_height_consensus_params_changed);
    }
    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash);
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(106).bytes(message.app_hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 14:
          message.initial_height = (reader.int64() as Long);
          break;
        case 3:
          message.last_block_height = (reader.int64() as Long);
          break;
        case 4:
          message.last_block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.last_block_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.next_validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 7:
          message.validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 8:
          message.last_validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 9:
          message.last_height_validators_changed = (reader.int64() as Long);
          break;
        case 10:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.last_height_consensus_params_changed = (reader.int64() as Long);
          break;
        case 12:
          message.last_results_hash = reader.bytes();
          break;
        case 13:
          message.app_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    return {
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      initial_height: isSet(object.initial_height) ? Long.fromValue(object.initial_height) : Long.ZERO,
      last_block_height: isSet(object.last_block_height) ? Long.fromValue(object.last_block_height) : Long.ZERO,
      last_block_id: isSet(object.last_block_id) ? BlockID.fromJSON(object.last_block_id) : undefined,
      last_block_time: isSet(object.last_block_time) ? fromJsonTimestamp(object.last_block_time) : undefined,
      next_validators: isSet(object.next_validators) ? ValidatorSet.fromJSON(object.next_validators) : undefined,
      validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
      last_validators: isSet(object.last_validators) ? ValidatorSet.fromJSON(object.last_validators) : undefined,
      last_height_validators_changed: isSet(object.last_height_validators_changed) ? Long.fromValue(object.last_height_validators_changed) : Long.ZERO,
      consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
      last_height_consensus_params_changed: isSet(object.last_height_consensus_params_changed) ? Long.fromValue(object.last_height_consensus_params_changed) : Long.ZERO,
      last_results_hash: isSet(object.last_results_hash) ? bytesFromBase64(object.last_results_hash) : new Uint8Array(),
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<State>): State {
    const message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chain_id = object.chain_id ?? "";
    message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? Long.fromValue(object.initial_height) : Long.ZERO;
    message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? Long.fromValue(object.last_block_height) : Long.ZERO;
    message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? BlockID.fromPartial(object.last_block_id) : undefined;
    message.last_block_time = object.last_block_time !== undefined && object.last_block_time !== null ? Timestamp.fromPartial(object.last_block_time) : undefined;
    message.next_validators = object.next_validators !== undefined && object.next_validators !== null ? ValidatorSet.fromPartial(object.next_validators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? ValidatorSet.fromPartial(object.validators) : undefined;
    message.last_validators = object.last_validators !== undefined && object.last_validators !== null ? ValidatorSet.fromPartial(object.last_validators) : undefined;
    message.last_height_validators_changed = object.last_height_validators_changed !== undefined && object.last_height_validators_changed !== null ? Long.fromValue(object.last_height_validators_changed) : Long.ZERO;
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.last_height_consensus_params_changed = object.last_height_consensus_params_changed !== undefined && object.last_height_consensus_params_changed !== null ? Long.fromValue(object.last_height_consensus_params_changed) : Long.ZERO;
    message.last_results_hash = object.last_results_hash ?? new Uint8Array();
    message.app_hash = object.app_hash ?? new Uint8Array();
    return message;
  }
};