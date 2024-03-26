import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteOption enumerates the valid vote options for a given proposal. */
export let VoteOption = /*#__PURE__*/function (VoteOption) {
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return VoteOption;
}({});
export function voteOptionFromJSON(object) {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object) {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus defines proposal statuses. */
export let ProposalStatus = /*#__PURE__*/function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ACCEPTED"] = 2] = "PROPOSAL_STATUS_ACCEPTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 3] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 4] = "PROPOSAL_STATUS_ABORTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 5] = "PROPOSAL_STATUS_WITHDRAWN";
  ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalStatus;
}({});
export function proposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object) {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalExecutorResult defines types of proposal executor results. */
export let ProposalExecutorResult = /*#__PURE__*/function (ProposalExecutorResult) {
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
  ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalExecutorResult;
}({});
export function proposalExecutorResultFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
export function proposalExecutorResultToJSON(object) {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */

/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */

/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */

/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */

/** DecisionPolicyWindows defines the different windows for voting and execution. */

/** GroupInfo represents the high-level on-chain information for a group. */

/** GroupMember represents the relationship between a group and a member. */

/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */

/** TallyResult represents the sum of weighted votes for each vote option. */

/** Vote represents a vote for a proposal. */

function createBaseMember() {
  return {
    address: "",
    weight: "",
    metadata: "",
    added_at: Timestamp.fromPartial({})
  };
}
export const Member = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.added_at !== undefined) {
      Timestamp.encode(message.added_at, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.added_at = Timestamp.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      added_at: isSet(object.added_at) ? fromJsonTimestamp(object.added_at) : undefined
    };
  },
  fromPartial(object) {
    var _object$address, _object$weight, _object$metadata;
    const message = createBaseMember();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.added_at = object.added_at !== undefined && object.added_at !== null ? Timestamp.fromPartial(object.added_at) : undefined;
    return message;
  }
};
function createBaseMemberRequest() {
  return {
    address: "",
    weight: "",
    metadata: ""
  };
}
export const MemberRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial(object) {
    var _object$address2, _object$weight2, _object$metadata2;
    const message = createBaseMemberRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.weight = (_object$weight2 = object.weight) !== null && _object$weight2 !== void 0 ? _object$weight2 : "";
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
function createBaseThresholdDecisionPolicy() {
  return {
    threshold: "",
    windows: DecisionPolicyWindows.fromPartial({})
  };
}
export const ThresholdDecisionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
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
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  fromPartial(object) {
    var _object$threshold;
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }
};
function createBasePercentageDecisionPolicy() {
  return {
    percentage: "",
    windows: DecisionPolicyWindows.fromPartial({})
  };
}
export const PercentageDecisionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
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
      percentage: isSet(object.percentage) ? String(object.percentage) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  fromPartial(object) {
    var _object$percentage;
    const message = createBasePercentageDecisionPolicy();
    message.percentage = (_object$percentage = object.percentage) !== null && _object$percentage !== void 0 ? _object$percentage : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }
};
function createBaseDecisionPolicyWindows() {
  return {
    voting_period: Duration.fromPartial({}),
    min_execution_period: Duration.fromPartial({})
  };
}
export const DecisionPolicyWindows = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    if (message.min_execution_period !== undefined) {
      Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.min_execution_period = Duration.decode(reader, reader.uint32());
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
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined,
      min_execution_period: isSet(object.min_execution_period) ? Duration.fromJSON(object.min_execution_period) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseDecisionPolicyWindows();
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
    message.min_execution_period = object.min_execution_period !== undefined && object.min_execution_period !== null ? Duration.fromPartial(object.min_execution_period) : undefined;
    return message;
  }
};
function createBaseGroupInfo() {
  return {
    id: Long.UZERO,
    admin: "",
    metadata: "",
    version: Long.UZERO,
    total_weight: "",
    created_at: Timestamp.fromPartial({})
  };
}
export const GroupInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.total_weight !== "") {
      writer.uint32(42).string(message.total_weight);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(message.created_at, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = reader.uint64();
          break;
        case 5:
          message.total_weight = reader.string();
          break;
        case 6:
          message.created_at = Timestamp.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined
    };
  },
  fromPartial(object) {
    var _object$admin, _object$metadata3, _object$total_weight;
    const message = createBaseGroupInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.total_weight = (_object$total_weight = object.total_weight) !== null && _object$total_weight !== void 0 ? _object$total_weight : "";
    message.created_at = object.created_at !== undefined && object.created_at !== null ? Timestamp.fromPartial(object.created_at) : undefined;
    return message;
  }
};
function createBaseGroupMember() {
  return {
    group_id: Long.UZERO,
    member: Member.fromPartial({})
  };
}
export const GroupMember = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
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
      group_id: isSet(object.group_id) ? Long.fromValue(object.group_id) : Long.UZERO,
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGroupMember();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? Long.fromValue(object.group_id) : Long.UZERO;
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  }
};
function createBaseGroupPolicyInfo() {
  return {
    address: "",
    group_id: Long.UZERO,
    admin: "",
    metadata: "",
    version: Long.UZERO,
    decision_policy: Any.fromPartial({}),
    created_at: Timestamp.fromPartial({})
  };
}
export const GroupPolicyInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.group_id.isZero()) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decision_policy !== undefined) {
      Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(message.created_at, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = reader.uint64();
          break;
        case 6:
          message.decision_policy = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.created_at = Timestamp.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      group_id: isSet(object.group_id) ? Long.fromValue(object.group_id) : Long.UZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined
    };
  },
  fromPartial(object) {
    var _object$address3, _object$admin2, _object$metadata4;
    const message = createBaseGroupPolicyInfo();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? Long.fromValue(object.group_id) : Long.UZERO;
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
    message.created_at = object.created_at !== undefined && object.created_at !== null ? Timestamp.fromPartial(object.created_at) : undefined;
    return message;
  }
};
function createBaseProposal() {
  return {
    id: Long.UZERO,
    group_policy_address: "",
    metadata: "",
    proposers: [],
    submit_time: Timestamp.fromPartial({}),
    group_version: Long.UZERO,
    group_policy_version: Long.UZERO,
    status: 0,
    final_tally_result: TallyResult.fromPartial({}),
    voting_period_end: Timestamp.fromPartial({}),
    executor_result: 0,
    messages: [],
    title: "",
    summary: ""
  };
}
export const Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v);
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(message.submit_time, writer.uint32(42).fork()).ldelim();
    }
    if (!message.group_version.isZero()) {
      writer.uint32(48).uint64(message.group_version);
    }
    if (!message.group_policy_version.isZero()) {
      writer.uint32(56).uint64(message.group_policy_version);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(74).fork()).ldelim();
    }
    if (message.voting_period_end !== undefined) {
      Timestamp.encode(message.voting_period_end, writer.uint32(82).fork()).ldelim();
    }
    if (message.executor_result !== 0) {
      writer.uint32(88).int32(message.executor_result);
    }
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(98).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
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
          message.id = reader.uint64();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submit_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.group_version = reader.uint64();
          break;
        case 7:
          message.group_policy_version = reader.uint64();
          break;
        case 8:
          message.status = reader.int32();
          break;
        case 9:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;
        case 10:
          message.voting_period_end = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.executor_result = reader.int32();
          break;
        case 12:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.summary = reader.string();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(e => String(e)) : [],
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      group_version: isSet(object.group_version) ? Long.fromValue(object.group_version) : Long.UZERO,
      group_policy_version: isSet(object.group_policy_version) ? Long.fromValue(object.group_policy_version) : Long.UZERO,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      voting_period_end: isSet(object.voting_period_end) ? fromJsonTimestamp(object.voting_period_end) : undefined,
      executor_result: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(e => Any.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : ""
    };
  },
  fromPartial(object) {
    var _object$group_policy_, _object$metadata5, _object$proposers, _object$status, _object$executor_resu, _object$messages, _object$title, _object$summary;
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.group_policy_address = (_object$group_policy_ = object.group_policy_address) !== null && _object$group_policy_ !== void 0 ? _object$group_policy_ : "";
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(e => e)) || [];
    message.submit_time = object.submit_time !== undefined && object.submit_time !== null ? Timestamp.fromPartial(object.submit_time) : undefined;
    message.group_version = object.group_version !== undefined && object.group_version !== null ? Long.fromValue(object.group_version) : Long.UZERO;
    message.group_policy_version = object.group_policy_version !== undefined && object.group_policy_version !== null ? Long.fromValue(object.group_policy_version) : Long.UZERO;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
    message.voting_period_end = object.voting_period_end !== undefined && object.voting_period_end !== null ? Timestamp.fromPartial(object.voting_period_end) : undefined;
    message.executor_result = (_object$executor_resu = object.executor_result) !== null && _object$executor_resu !== void 0 ? _object$executor_resu : 0;
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => Any.fromPartial(e))) || [];
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
function createBaseTallyResult() {
  return {
    yes_count: "",
    abstain_count: "",
    no_count: "",
    no_with_veto_count: ""
  };
}
export const TallyResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.yes_count !== "") {
      writer.uint32(10).string(message.yes_count);
    }
    if (message.abstain_count !== "") {
      writer.uint32(18).string(message.abstain_count);
    }
    if (message.no_count !== "") {
      writer.uint32(26).string(message.no_count);
    }
    if (message.no_with_veto_count !== "") {
      writer.uint32(34).string(message.no_with_veto_count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes_count = reader.string();
          break;
        case 2:
          message.abstain_count = reader.string();
          break;
        case 3:
          message.no_count = reader.string();
          break;
        case 4:
          message.no_with_veto_count = reader.string();
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
      yes_count: isSet(object.yes_count) ? String(object.yes_count) : "",
      abstain_count: isSet(object.abstain_count) ? String(object.abstain_count) : "",
      no_count: isSet(object.no_count) ? String(object.no_count) : "",
      no_with_veto_count: isSet(object.no_with_veto_count) ? String(object.no_with_veto_count) : ""
    };
  },
  fromPartial(object) {
    var _object$yes_count, _object$abstain_count, _object$no_count, _object$no_with_veto_;
    const message = createBaseTallyResult();
    message.yes_count = (_object$yes_count = object.yes_count) !== null && _object$yes_count !== void 0 ? _object$yes_count : "";
    message.abstain_count = (_object$abstain_count = object.abstain_count) !== null && _object$abstain_count !== void 0 ? _object$abstain_count : "";
    message.no_count = (_object$no_count = object.no_count) !== null && _object$no_count !== void 0 ? _object$no_count : "";
    message.no_with_veto_count = (_object$no_with_veto_ = object.no_with_veto_count) !== null && _object$no_with_veto_ !== void 0 ? _object$no_with_veto_ : "";
    return message;
  }
};
function createBaseVote() {
  return {
    proposal_id: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    submit_time: Timestamp.fromPartial({})
  };
}
export const Vote = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(message.submit_time, writer.uint32(42).fork()).ldelim();
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
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submit_time = Timestamp.decode(reader, reader.uint32());
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
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined
    };
  },
  fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6;
    const message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.submit_time = object.submit_time !== undefined && object.submit_time !== null ? Timestamp.fromPartial(object.submit_time) : undefined;
    return message;
  }
};