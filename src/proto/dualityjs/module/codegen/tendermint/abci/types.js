import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams } from "../types/params";
import { Header } from "../types/types";
import { ProofOps } from "../crypto/proof";
import { PublicKey } from "../crypto/keys";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export let CheckTxType = /*#__PURE__*/function (CheckTxType) {
  CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
  CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
  CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CheckTxType;
}({});
export function checkTxTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object) {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let ResponseOfferSnapshot_Result = /*#__PURE__*/function (ResponseOfferSnapshot_Result) {
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseOfferSnapshot_Result;
}({});
export function responseOfferSnapshot_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object) {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let ResponseApplySnapshotChunk_Result = /*#__PURE__*/function (ResponseApplySnapshotChunk_Result) {
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseApplySnapshotChunk_Result;
}({});
export function responseApplySnapshotChunk_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object) {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let ResponseProcessProposal_ProposalStatus = /*#__PURE__*/function (ResponseProcessProposal_ProposalStatus) {
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseProcessProposal_ProposalStatus;
}({});
export function responseProcessProposal_ProposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}
export function responseProcessProposal_ProposalStatusToJSON(object) {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let MisbehaviorType = /*#__PURE__*/function (MisbehaviorType) {
  MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
  MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MisbehaviorType;
}({});
export function misbehaviorTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}
export function misbehaviorTypeToJSON(object) {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case MisbehaviorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** lists available snapshots */

/** offers a snapshot to the application */

/** loads a snapshot chunk */

/** Applies a snapshot chunk */

/** nondeterministic */

/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */

/** EventAttribute is a single key-value pair, associated with an event. */

/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */

/** Validator */

/** ValidatorUpdate */

/** VoteInfo */

function createBaseRequest() {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    init_chain: undefined,
    query: undefined,
    begin_block: undefined,
    check_tx: undefined,
    deliver_tx: undefined,
    end_block: undefined,
    commit: undefined,
    list_snapshots: undefined,
    offer_snapshot: undefined,
    load_snapshot_chunk: undefined,
    apply_snapshot_chunk: undefined,
    prepare_proposal: undefined,
    process_proposal: undefined
  };
}
export const Request = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.init_chain !== undefined) {
      RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.begin_block !== undefined) {
      RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
    }
    if (message.check_tx !== undefined) {
      RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliver_tx !== undefined) {
      RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
    }
    if (message.end_block !== undefined) {
      RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.list_snapshots !== undefined) {
      RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offer_snapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.load_snapshot_chunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.apply_snapshot_chunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepare_proposal !== undefined) {
      RequestPrepareProposal.encode(message.prepare_proposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.process_proposal !== undefined) {
      RequestProcessProposal.encode(message.process_proposal, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.init_chain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.begin_block = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliver_tx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.end_block = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepare_proposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.process_proposal = RequestProcessProposal.decode(reader, reader.uint32());
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
      echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush) ? RequestFlush.fromJSON(object.flush) : undefined,
      info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
      init_chain: isSet(object.init_chain) ? RequestInitChain.fromJSON(object.init_chain) : undefined,
      query: isSet(object.query) ? RequestQuery.fromJSON(object.query) : undefined,
      begin_block: isSet(object.begin_block) ? RequestBeginBlock.fromJSON(object.begin_block) : undefined,
      check_tx: isSet(object.check_tx) ? RequestCheckTx.fromJSON(object.check_tx) : undefined,
      deliver_tx: isSet(object.deliver_tx) ? RequestDeliverTx.fromJSON(object.deliver_tx) : undefined,
      end_block: isSet(object.end_block) ? RequestEndBlock.fromJSON(object.end_block) : undefined,
      commit: isSet(object.commit) ? RequestCommit.fromJSON(object.commit) : undefined,
      list_snapshots: isSet(object.list_snapshots) ? RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
      offer_snapshot: isSet(object.offer_snapshot) ? RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
      load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
      apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
      prepare_proposal: isSet(object.prepare_proposal) ? RequestPrepareProposal.fromJSON(object.prepare_proposal) : undefined,
      process_proposal: isSet(object.process_proposal) ? RequestProcessProposal.fromJSON(object.process_proposal) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? RequestInitChain.fromPartial(object.init_chain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? RequestBeginBlock.fromPartial(object.begin_block) : undefined;
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? RequestCheckTx.fromPartial(object.check_tx) : undefined;
    message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? RequestDeliverTx.fromPartial(object.deliver_tx) : undefined;
    message.end_block = object.end_block !== undefined && object.end_block !== null ? RequestEndBlock.fromPartial(object.end_block) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
    message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
    message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
    message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
    message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? RequestPrepareProposal.fromPartial(object.prepare_proposal) : undefined;
    message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? RequestProcessProposal.fromPartial(object.process_proposal) : undefined;
    return message;
  }
};
function createBaseRequestEcho() {
  return {
    message: ""
  };
}
export const RequestEcho = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
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
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  fromPartial(object) {
    var _object$message;
    const message = createBaseRequestEcho();
    message.message = (_object$message = object.message) !== null && _object$message !== void 0 ? _object$message : "";
    return message;
  }
};
function createBaseRequestFlush() {
  return {};
}
export const RequestFlush = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseRequestFlush();
    return message;
  }
};
function createBaseRequestInfo() {
  return {
    version: "",
    block_version: Long.UZERO,
    p2p_version: Long.UZERO,
    abci_version: ""
  };
}
export const RequestInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (!message.block_version.isZero()) {
      writer.uint32(16).uint64(message.block_version);
    }
    if (!message.p2p_version.isZero()) {
      writer.uint32(24).uint64(message.p2p_version);
    }
    if (message.abci_version !== "") {
      writer.uint32(34).string(message.abci_version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.block_version = reader.uint64();
          break;
        case 3:
          message.p2p_version = reader.uint64();
          break;
        case 4:
          message.abci_version = reader.string();
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
      version: isSet(object.version) ? String(object.version) : "",
      block_version: isSet(object.block_version) ? Long.fromValue(object.block_version) : Long.UZERO,
      p2p_version: isSet(object.p2p_version) ? Long.fromValue(object.p2p_version) : Long.UZERO,
      abci_version: isSet(object.abci_version) ? String(object.abci_version) : ""
    };
  },
  fromPartial(object) {
    var _object$version, _object$abci_version;
    const message = createBaseRequestInfo();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.block_version = object.block_version !== undefined && object.block_version !== null ? Long.fromValue(object.block_version) : Long.UZERO;
    message.p2p_version = object.p2p_version !== undefined && object.p2p_version !== null ? Long.fromValue(object.p2p_version) : Long.UZERO;
    message.abci_version = (_object$abci_version = object.abci_version) !== null && _object$abci_version !== void 0 ? _object$abci_version : "";
    return message;
  }
};
function createBaseRequestInitChain() {
  return {
    time: Timestamp.fromPartial({}),
    chain_id: "",
    consensus_params: ConsensusParams.fromPartial({}),
    validators: [],
    app_state_bytes: new Uint8Array(),
    initial_height: Long.ZERO
  };
}
export const RequestInitChain = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.app_state_bytes.length !== 0) {
      writer.uint32(42).bytes(message.app_state_bytes);
    }
    if (!message.initial_height.isZero()) {
      writer.uint32(48).int64(message.initial_height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 3:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.app_state_bytes = reader.bytes();
          break;
        case 6:
          message.initial_height = reader.int64();
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
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => ValidatorUpdate.fromJSON(e)) : [],
      app_state_bytes: isSet(object.app_state_bytes) ? bytesFromBase64(object.app_state_bytes) : new Uint8Array(),
      initial_height: isSet(object.initial_height) ? Long.fromValue(object.initial_height) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$chain_id, _object$validators, _object$app_state_byt;
    const message = createBaseRequestInitChain();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => ValidatorUpdate.fromPartial(e))) || [];
    message.app_state_bytes = (_object$app_state_byt = object.app_state_bytes) !== null && _object$app_state_byt !== void 0 ? _object$app_state_byt : new Uint8Array();
    message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? Long.fromValue(object.initial_height) : Long.ZERO;
    return message;
  }
};
function createBaseRequestQuery() {
  return {
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false
  };
}
export const RequestQuery = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      prove: isSet(object.prove) ? Boolean(object.prove) : false
    };
  },
  fromPartial(object) {
    var _object$data, _object$path, _object$prove;
    const message = createBaseRequestQuery();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
function createBaseRequestBeginBlock() {
  return {
    hash: new Uint8Array(),
    header: Header.fromPartial({}),
    last_commit_info: CommitInfo.fromPartial({}),
    byzantine_validators: []
  };
}
export const RequestBeginBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.last_commit_info !== undefined) {
      CommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantine_validators) {
      Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.last_commit_info = CommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.byzantine_validators.push(Misbehavior.decode(reader, reader.uint32()));
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
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      last_commit_info: isSet(object.last_commit_info) ? CommitInfo.fromJSON(object.last_commit_info) : undefined,
      byzantine_validators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators) ? object.byzantine_validators.map(e => Misbehavior.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$hash, _object$byzantine_val;
    const message = createBaseRequestBeginBlock();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.last_commit_info = object.last_commit_info !== undefined && object.last_commit_info !== null ? CommitInfo.fromPartial(object.last_commit_info) : undefined;
    message.byzantine_validators = ((_object$byzantine_val = object.byzantine_validators) === null || _object$byzantine_val === void 0 ? void 0 : _object$byzantine_val.map(e => Misbehavior.fromPartial(e))) || [];
    return message;
  }
};
function createBaseRequestCheckTx() {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32();
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
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
    };
  },
  fromPartial(object) {
    var _object$tx, _object$type;
    const message = createBaseRequestCheckTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    return message;
  }
};
function createBaseRequestDeliverTx() {
  return {
    tx: new Uint8Array()
  };
}
export const RequestDeliverTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
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
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$tx2;
    const message = createBaseRequestDeliverTx();
    message.tx = (_object$tx2 = object.tx) !== null && _object$tx2 !== void 0 ? _object$tx2 : new Uint8Array();
    return message;
  }
};
function createBaseRequestEndBlock() {
  return {
    height: Long.ZERO
  };
}
export const RequestEndBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseRequestCommit() {
  return {};
}
export const RequestCommit = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseRequestCommit();
    return message;
  }
};
function createBaseRequestListSnapshots() {
  return {};
}
export const RequestListSnapshots = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseRequestListSnapshots();
    return message;
  }
};
function createBaseRequestOfferSnapshot() {
  return {
    snapshot: Snapshot.fromPartial({}),
    app_hash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(18).bytes(message.app_hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.app_hash = reader.bytes();
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
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$app_hash;
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.app_hash = (_object$app_hash = object.app_hash) !== null && _object$app_hash !== void 0 ? _object$app_hash : new Uint8Array();
    return message;
  }
};
function createBaseRequestLoadSnapshotChunk() {
  return {
    height: Long.UZERO,
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunk: isSet(object.chunk) ? Number(object.chunk) : 0
    };
  },
  fromPartial(object) {
    var _object$format, _object$chunk;
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : 0;
    return message;
  }
};
function createBaseRequestApplySnapshotChunk() {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
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
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object) {
    var _object$index, _object$chunk2, _object$sender;
    const message = createBaseRequestApplySnapshotChunk();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.chunk = (_object$chunk2 = object.chunk) !== null && _object$chunk2 !== void 0 ? _object$chunk2 : new Uint8Array();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    return message;
  }
};
function createBaseRequestPrepareProposal() {
  return {
    max_tx_bytes: Long.ZERO,
    txs: [],
    local_last_commit: ExtendedCommitInfo.fromPartial({}),
    misbehavior: [],
    height: Long.ZERO,
    time: Timestamp.fromPartial({}),
    next_validators_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
export const RequestPrepareProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.max_tx_bytes.isZero()) {
      writer.uint32(8).int64(message.max_tx_bytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v);
    }
    if (message.local_last_commit !== undefined) {
      ExtendedCommitInfo.encode(message.local_last_commit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(50).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(58).bytes(message.next_validators_hash);
    }
    if (message.proposer_address.length !== 0) {
      writer.uint32(66).bytes(message.proposer_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_tx_bytes = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.local_last_commit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.next_validators_hash = reader.bytes();
          break;
        case 8:
          message.proposer_address = reader.bytes();
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
      max_tx_bytes: isSet(object.max_tx_bytes) ? Long.fromValue(object.max_tx_bytes) : Long.ZERO,
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => bytesFromBase64(e)) : [],
      local_last_commit: isSet(object.local_last_commit) ? ExtendedCommitInfo.fromJSON(object.local_last_commit) : undefined,
      misbehavior: Array.isArray(object === null || object === void 0 ? void 0 : object.misbehavior) ? object.misbehavior.map(e => Misbehavior.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
      proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$txs, _object$misbehavior, _object$next_validato, _object$proposer_addr;
    const message = createBaseRequestPrepareProposal();
    message.max_tx_bytes = object.max_tx_bytes !== undefined && object.max_tx_bytes !== null ? Long.fromValue(object.max_tx_bytes) : Long.ZERO;
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => e)) || [];
    message.local_last_commit = object.local_last_commit !== undefined && object.local_last_commit !== null ? ExtendedCommitInfo.fromPartial(object.local_last_commit) : undefined;
    message.misbehavior = ((_object$misbehavior = object.misbehavior) === null || _object$misbehavior === void 0 ? void 0 : _object$misbehavior.map(e => Misbehavior.fromPartial(e))) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.next_validators_hash = (_object$next_validato = object.next_validators_hash) !== null && _object$next_validato !== void 0 ? _object$next_validato : new Uint8Array();
    message.proposer_address = (_object$proposer_addr = object.proposer_address) !== null && _object$proposer_addr !== void 0 ? _object$proposer_addr : new Uint8Array();
    return message;
  }
};
function createBaseRequestProcessProposal() {
  return {
    txs: [],
    proposed_last_commit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: Long.ZERO,
    time: Timestamp.fromPartial({}),
    next_validators_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
export const RequestProcessProposal = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    if (message.proposed_last_commit !== undefined) {
      CommitInfo.encode(message.proposed_last_commit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(50).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(58).bytes(message.next_validators_hash);
    }
    if (message.proposer_address.length !== 0) {
      writer.uint32(66).bytes(message.proposer_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposed_last_commit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.next_validators_hash = reader.bytes();
          break;
        case 8:
          message.proposer_address = reader.bytes();
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => bytesFromBase64(e)) : [],
      proposed_last_commit: isSet(object.proposed_last_commit) ? CommitInfo.fromJSON(object.proposed_last_commit) : undefined,
      misbehavior: Array.isArray(object === null || object === void 0 ? void 0 : object.misbehavior) ? object.misbehavior.map(e => Misbehavior.fromJSON(e)) : [],
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
      proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$txs2, _object$misbehavior2, _object$hash2, _object$next_validato2, _object$proposer_addr2;
    const message = createBaseRequestProcessProposal();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(e => e)) || [];
    message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
    message.misbehavior = ((_object$misbehavior2 = object.misbehavior) === null || _object$misbehavior2 === void 0 ? void 0 : _object$misbehavior2.map(e => Misbehavior.fromPartial(e))) || [];
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.next_validators_hash = (_object$next_validato2 = object.next_validators_hash) !== null && _object$next_validato2 !== void 0 ? _object$next_validato2 : new Uint8Array();
    message.proposer_address = (_object$proposer_addr2 = object.proposer_address) !== null && _object$proposer_addr2 !== void 0 ? _object$proposer_addr2 : new Uint8Array();
    return message;
  }
};
function createBaseResponse() {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    init_chain: undefined,
    query: undefined,
    begin_block: undefined,
    check_tx: undefined,
    deliver_tx: undefined,
    end_block: undefined,
    commit: undefined,
    list_snapshots: undefined,
    offer_snapshot: undefined,
    load_snapshot_chunk: undefined,
    apply_snapshot_chunk: undefined,
    prepare_proposal: undefined,
    process_proposal: undefined
  };
}
export const Response = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.init_chain !== undefined) {
      ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.begin_block !== undefined) {
      ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
    }
    if (message.check_tx !== undefined) {
      ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliver_tx !== undefined) {
      ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
    }
    if (message.end_block !== undefined) {
      ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.list_snapshots !== undefined) {
      ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offer_snapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.load_snapshot_chunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.apply_snapshot_chunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepare_proposal !== undefined) {
      ResponsePrepareProposal.encode(message.prepare_proposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.process_proposal !== undefined) {
      ResponseProcessProposal.encode(message.process_proposal, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 9:
          message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliver_tx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.end_block = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepare_proposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.process_proposal = ResponseProcessProposal.decode(reader, reader.uint32());
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
      exception: isSet(object.exception) ? ResponseException.fromJSON(object.exception) : undefined,
      echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush) ? ResponseFlush.fromJSON(object.flush) : undefined,
      info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
      init_chain: isSet(object.init_chain) ? ResponseInitChain.fromJSON(object.init_chain) : undefined,
      query: isSet(object.query) ? ResponseQuery.fromJSON(object.query) : undefined,
      begin_block: isSet(object.begin_block) ? ResponseBeginBlock.fromJSON(object.begin_block) : undefined,
      check_tx: isSet(object.check_tx) ? ResponseCheckTx.fromJSON(object.check_tx) : undefined,
      deliver_tx: isSet(object.deliver_tx) ? ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined,
      end_block: isSet(object.end_block) ? ResponseEndBlock.fromJSON(object.end_block) : undefined,
      commit: isSet(object.commit) ? ResponseCommit.fromJSON(object.commit) : undefined,
      list_snapshots: isSet(object.list_snapshots) ? ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
      offer_snapshot: isSet(object.offer_snapshot) ? ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
      load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
      apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
      prepare_proposal: isSet(object.prepare_proposal) ? ResponsePrepareProposal.fromJSON(object.prepare_proposal) : undefined,
      process_proposal: isSet(object.process_proposal) ? ResponseProcessProposal.fromJSON(object.process_proposal) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? ResponseInitChain.fromPartial(object.init_chain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? ResponseBeginBlock.fromPartial(object.begin_block) : undefined;
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
    message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? ResponseDeliverTx.fromPartial(object.deliver_tx) : undefined;
    message.end_block = object.end_block !== undefined && object.end_block !== null ? ResponseEndBlock.fromPartial(object.end_block) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
    message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
    message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
    message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
    message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? ResponsePrepareProposal.fromPartial(object.prepare_proposal) : undefined;
    message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? ResponseProcessProposal.fromPartial(object.process_proposal) : undefined;
    return message;
  }
};
function createBaseResponseException() {
  return {
    error: ""
  };
}
export const ResponseException = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
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
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object) {
    var _object$error;
    const message = createBaseResponseException();
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : "";
    return message;
  }
};
function createBaseResponseEcho() {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
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
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  fromPartial(object) {
    var _object$message2;
    const message = createBaseResponseEcho();
    message.message = (_object$message2 = object.message) !== null && _object$message2 !== void 0 ? _object$message2 : "";
    return message;
  }
};
function createBaseResponseFlush() {
  return {};
}
export const ResponseFlush = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseResponseFlush();
    return message;
  }
};
function createBaseResponseInfo() {
  return {
    data: "",
    version: "",
    app_version: Long.UZERO,
    last_block_height: Long.ZERO,
    last_block_app_hash: new Uint8Array()
  };
}
export const ResponseInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (!message.app_version.isZero()) {
      writer.uint32(24).uint64(message.app_version);
    }
    if (!message.last_block_height.isZero()) {
      writer.uint32(32).int64(message.last_block_height);
    }
    if (message.last_block_app_hash.length !== 0) {
      writer.uint32(42).bytes(message.last_block_app_hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.app_version = reader.uint64();
          break;
        case 4:
          message.last_block_height = reader.int64();
          break;
        case 5:
          message.last_block_app_hash = reader.bytes();
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
      data: isSet(object.data) ? String(object.data) : "",
      version: isSet(object.version) ? String(object.version) : "",
      app_version: isSet(object.app_version) ? Long.fromValue(object.app_version) : Long.UZERO,
      last_block_height: isSet(object.last_block_height) ? Long.fromValue(object.last_block_height) : Long.ZERO,
      last_block_app_hash: isSet(object.last_block_app_hash) ? bytesFromBase64(object.last_block_app_hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$data2, _object$version2, _object$last_block_ap;
    const message = createBaseResponseInfo();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.app_version = object.app_version !== undefined && object.app_version !== null ? Long.fromValue(object.app_version) : Long.UZERO;
    message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? Long.fromValue(object.last_block_height) : Long.ZERO;
    message.last_block_app_hash = (_object$last_block_ap = object.last_block_app_hash) !== null && _object$last_block_ap !== void 0 ? _object$last_block_ap : new Uint8Array();
    return message;
  }
};
function createBaseResponseInitChain() {
  return {
    consensus_params: ConsensusParams.fromPartial({}),
    validators: [],
    app_hash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(26).bytes(message.app_hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.app_hash = reader.bytes();
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
      consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => ValidatorUpdate.fromJSON(e)) : [],
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$validators2, _object$app_hash2;
    const message = createBaseResponseInitChain();
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(e => ValidatorUpdate.fromPartial(e))) || [];
    message.app_hash = (_object$app_hash2 = object.app_hash) !== null && _object$app_hash2 !== void 0 ? _object$app_hash2 : new Uint8Array();
    return message;
  }
};
function createBaseResponseQuery() {
  return {
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proof_ops: ProofOps.fromPartial({}),
    height: Long.ZERO,
    codespace: ""
  };
}
export const ResponseQuery = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proof_ops !== undefined) {
      ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proof_ops = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
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
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  fromPartial(object) {
    var _object$code, _object$log, _object$info, _object$key, _object$value, _object$codespace;
    const message = createBaseResponseQuery();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
function createBaseResponseBeginBlock() {
  return {
    events: []
  };
}
export const ResponseBeginBlock = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.events) {
      Event.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$events;
    const message = createBaseResponseBeginBlock();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(e => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseResponseCheckTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gas_wanted: Long.ZERO,
    gas_used: Long.ZERO,
    events: [],
    codespace: "",
    sender: "",
    priority: Long.ZERO,
    mempool_error: ""
  };
}
export const ResponseCheckTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gas_wanted.isZero()) {
      writer.uint32(40).int64(message.gas_wanted);
    }
    if (!message.gas_used.isZero()) {
      writer.uint32(48).int64(message.gas_used);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (!message.priority.isZero()) {
      writer.uint32(80).int64(message.priority);
    }
    if (message.mempool_error !== "") {
      writer.uint32(90).string(message.mempool_error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gas_wanted = reader.int64();
          break;
        case 6:
          message.gas_used = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.priority = reader.int64();
          break;
        case 11:
          message.mempool_error = reader.string();
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
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gas_wanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gas_used: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      priority: isSet(object.priority) ? Long.fromValue(object.priority) : Long.ZERO,
      mempool_error: isSet(object.mempool_error) ? String(object.mempool_error) : ""
    };
  },
  fromPartial(object) {
    var _object$code2, _object$data3, _object$log2, _object$info2, _object$events2, _object$codespace2, _object$sender2, _object$mempool_error;
    const message = createBaseResponseCheckTx();
    message.code = (_object$code2 = object.code) !== null && _object$code2 !== void 0 ? _object$code2 : 0;
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.info = (_object$info2 = object.info) !== null && _object$info2 !== void 0 ? _object$info2 : "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.ZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.ZERO;
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(e => Event.fromPartial(e))) || [];
    message.codespace = (_object$codespace2 = object.codespace) !== null && _object$codespace2 !== void 0 ? _object$codespace2 : "";
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.priority = object.priority !== undefined && object.priority !== null ? Long.fromValue(object.priority) : Long.ZERO;
    message.mempool_error = (_object$mempool_error = object.mempool_error) !== null && _object$mempool_error !== void 0 ? _object$mempool_error : "";
    return message;
  }
};
function createBaseResponseDeliverTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gas_wanted: Long.ZERO,
    gas_used: Long.ZERO,
    events: [],
    codespace: ""
  };
}
export const ResponseDeliverTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gas_wanted.isZero()) {
      writer.uint32(40).int64(message.gas_wanted);
    }
    if (!message.gas_used.isZero()) {
      writer.uint32(48).int64(message.gas_used);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gas_wanted = reader.int64();
          break;
        case 6:
          message.gas_used = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
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
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gas_wanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gas_used: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  fromPartial(object) {
    var _object$code3, _object$data4, _object$log3, _object$info3, _object$events3, _object$codespace3;
    const message = createBaseResponseDeliverTx();
    message.code = (_object$code3 = object.code) !== null && _object$code3 !== void 0 ? _object$code3 : 0;
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    message.log = (_object$log3 = object.log) !== null && _object$log3 !== void 0 ? _object$log3 : "";
    message.info = (_object$info3 = object.info) !== null && _object$info3 !== void 0 ? _object$info3 : "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.ZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.ZERO;
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(e => Event.fromPartial(e))) || [];
    message.codespace = (_object$codespace3 = object.codespace) !== null && _object$codespace3 !== void 0 ? _object$codespace3 : "";
    return message;
  }
};
function createBaseResponseEndBlock() {
  return {
    validator_updates: [],
    consensus_param_updates: ConsensusParams.fromPartial({}),
    events: []
  };
}
export const ResponseEndBlock = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validator_updates) {
      ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensus_param_updates !== undefined) {
      ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      validator_updates: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_updates) ? object.validator_updates.map(e => ValidatorUpdate.fromJSON(e)) : [],
      consensus_param_updates: isSet(object.consensus_param_updates) ? ConsensusParams.fromJSON(object.consensus_param_updates) : undefined,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$validator_upd, _object$events4;
    const message = createBaseResponseEndBlock();
    message.validator_updates = ((_object$validator_upd = object.validator_updates) === null || _object$validator_upd === void 0 ? void 0 : _object$validator_upd.map(e => ValidatorUpdate.fromPartial(e))) || [];
    message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
    message.events = ((_object$events4 = object.events) === null || _object$events4 === void 0 ? void 0 : _object$events4.map(e => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseResponseCommit() {
  return {
    data: new Uint8Array(),
    retain_height: Long.ZERO
  };
}
export const ResponseCommit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (!message.retain_height.isZero()) {
      writer.uint32(24).int64(message.retain_height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retain_height = reader.int64();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      retain_height: isSet(object.retain_height) ? Long.fromValue(object.retain_height) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$data5;
    const message = createBaseResponseCommit();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    message.retain_height = object.retain_height !== undefined && object.retain_height !== null ? Long.fromValue(object.retain_height) : Long.ZERO;
    return message;
  }
};
function createBaseResponseListSnapshots() {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.snapshots) {
      Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
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
      snapshots: Array.isArray(object === null || object === void 0 ? void 0 : object.snapshots) ? object.snapshots.map(e => Snapshot.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$snapshots;
    const message = createBaseResponseListSnapshots();
    message.snapshots = ((_object$snapshots = object.snapshots) === null || _object$snapshots === void 0 ? void 0 : _object$snapshots.map(e => Snapshot.fromPartial(e))) || [];
    return message;
  }
};
function createBaseResponseOfferSnapshot() {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
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
      result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
    };
  },
  fromPartial(object) {
    var _object$result;
    const message = createBaseResponseOfferSnapshot();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
function createBaseResponseLoadSnapshotChunk() {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
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
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$chunk3;
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = (_object$chunk3 = object.chunk) !== null && _object$chunk3 !== void 0 ? _object$chunk3 : new Uint8Array();
    return message;
  }
};
function createBaseResponseApplySnapshotChunk() {
  return {
    result: 0,
    refetch_chunks: [],
    reject_senders: []
  };
}
export const ResponseApplySnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetch_chunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.reject_senders) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetch_chunks.push(reader.uint32());
            }
          } else {
            message.refetch_chunks.push(reader.uint32());
          }
          break;
        case 3:
          message.reject_senders.push(reader.string());
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
      result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
      refetch_chunks: Array.isArray(object === null || object === void 0 ? void 0 : object.refetch_chunks) ? object.refetch_chunks.map(e => Number(e)) : [],
      reject_senders: Array.isArray(object === null || object === void 0 ? void 0 : object.reject_senders) ? object.reject_senders.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$result2, _object$refetch_chunk, _object$reject_sender;
    const message = createBaseResponseApplySnapshotChunk();
    message.result = (_object$result2 = object.result) !== null && _object$result2 !== void 0 ? _object$result2 : 0;
    message.refetch_chunks = ((_object$refetch_chunk = object.refetch_chunks) === null || _object$refetch_chunk === void 0 ? void 0 : _object$refetch_chunk.map(e => e)) || [];
    message.reject_senders = ((_object$reject_sender = object.reject_senders) === null || _object$reject_sender === void 0 ? void 0 : _object$reject_sender.map(e => e)) || [];
    return message;
  }
};
function createBaseResponsePrepareProposal() {
  return {
    txs: []
  };
}
export const ResponsePrepareProposal = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$txs3;
    const message = createBaseResponsePrepareProposal();
    message.txs = ((_object$txs3 = object.txs) === null || _object$txs3 === void 0 ? void 0 : _object$txs3.map(e => e)) || [];
    return message;
  }
};
function createBaseResponseProcessProposal() {
  return {
    status: 0
  };
}
export const ResponseProcessProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
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
      status: isSet(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseResponseProcessProposal();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    return message;
  }
};
function createBaseCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
export const CommitInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
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
      round: isSet(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(e => VoteInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$round, _object$votes;
    const message = createBaseCommitInfo();
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => VoteInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseExtendedCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
export const ExtendedCommitInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
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
      round: isSet(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(e => ExtendedVoteInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$round2, _object$votes2;
    const message = createBaseExtendedCommitInfo();
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.votes = ((_object$votes2 = object.votes) === null || _object$votes2 === void 0 ? void 0 : _object$votes2.map(e => ExtendedVoteInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEvent() {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
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
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(e => EventAttribute.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$type2, _object$attributes;
    const message = createBaseEvent();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(e => EventAttribute.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEventAttribute() {
  return {
    key: "",
    value: "",
    index: false
  };
}
export const EventAttribute = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      index: isSet(object.index) ? Boolean(object.index) : false
    };
  },
  fromPartial(object) {
    var _object$key2, _object$value2, _object$index2;
    const message = createBaseEventAttribute();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : "";
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : false;
    return message;
  }
};
function createBaseTxResult() {
  return {
    height: Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: ResponseDeliverTx.fromPartial({})
  };
}
export const TxResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
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
      index: isSet(object.index) ? Number(object.index) : 0,
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      result: isSet(object.result) ? ResponseDeliverTx.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object) {
    var _object$index3, _object$tx3;
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : 0;
    message.tx = (_object$tx3 = object.tx) !== null && _object$tx3 !== void 0 ? _object$tx3 : new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    power: Long.ZERO
  };
}
export const Validator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
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
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};
function createBaseValidatorUpdate() {
  return {
    pub_key: PublicKey.fromPartial({}),
    power: Long.ZERO
  };
}
export const ValidatorUpdate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
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
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseValidatorUpdate();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};
function createBaseVoteInfo() {
  return {
    validator: Validator.fromPartial({}),
    signed_last_block: false
  };
}
export const VoteInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signed_last_block === true) {
      writer.uint32(16).bool(message.signed_last_block);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signed_last_block = reader.bool();
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
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      signed_last_block: isSet(object.signed_last_block) ? Boolean(object.signed_last_block) : false
    };
  },
  fromPartial(object) {
    var _object$signed_last_b;
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signed_last_block = (_object$signed_last_b = object.signed_last_block) !== null && _object$signed_last_b !== void 0 ? _object$signed_last_b : false;
    return message;
  }
};
function createBaseExtendedVoteInfo() {
  return {
    validator: Validator.fromPartial({}),
    signed_last_block: false,
    vote_extension: new Uint8Array()
  };
}
export const ExtendedVoteInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signed_last_block === true) {
      writer.uint32(16).bool(message.signed_last_block);
    }
    if (message.vote_extension.length !== 0) {
      writer.uint32(26).bytes(message.vote_extension);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signed_last_block = reader.bool();
          break;
        case 3:
          message.vote_extension = reader.bytes();
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
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      signed_last_block: isSet(object.signed_last_block) ? Boolean(object.signed_last_block) : false,
      vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$signed_last_b2, _object$vote_extensio;
    const message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signed_last_block = (_object$signed_last_b2 = object.signed_last_block) !== null && _object$signed_last_b2 !== void 0 ? _object$signed_last_b2 : false;
    message.vote_extension = (_object$vote_extensio = object.vote_extension) !== null && _object$vote_extensio !== void 0 ? _object$vote_extensio : new Uint8Array();
    return message;
  }
};
function createBaseMisbehavior() {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: Long.ZERO,
    time: Timestamp.fromPartial({}),
    total_voting_power: Long.ZERO
  };
}
export const Misbehavior = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(40).int64(message.total_voting_power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.total_voting_power = reader.int64();
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
      type: isSet(object.type) ? misbehaviorTypeFromJSON(object.type) : -1,
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$type3;
    const message = createBaseMisbehavior();
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    return message;
  }
};
function createBaseSnapshot() {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$format2, _object$chunks, _object$hash3, _object$metadata;
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  }
};