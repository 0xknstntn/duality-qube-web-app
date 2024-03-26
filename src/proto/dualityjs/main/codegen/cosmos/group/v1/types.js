"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteOption = exports.Vote = exports.ThresholdDecisionPolicy = exports.TallyResult = exports.ProposalStatus = exports.ProposalExecutorResult = exports.Proposal = exports.PercentageDecisionPolicy = exports.MemberRequest = exports.Member = exports.GroupPolicyInfo = exports.GroupMember = exports.GroupInfo = exports.DecisionPolicyWindows = void 0;
exports.proposalExecutorResultFromJSON = proposalExecutorResultFromJSON;
exports.proposalExecutorResultToJSON = proposalExecutorResultToJSON;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _any = require("../../../google/protobuf/any");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** VoteOption enumerates the valid vote options for a given proposal. */
var VoteOption = /*#__PURE__*/function (VoteOption) {
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return VoteOption;
}({});
exports.VoteOption = VoteOption;
function voteOptionFromJSON(object) {
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
function voteOptionToJSON(object) {
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
var ProposalStatus = /*#__PURE__*/function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ACCEPTED"] = 2] = "PROPOSAL_STATUS_ACCEPTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 3] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 4] = "PROPOSAL_STATUS_ABORTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 5] = "PROPOSAL_STATUS_WITHDRAWN";
  ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalStatus;
}({});
exports.ProposalStatus = ProposalStatus;
function proposalStatusFromJSON(object) {
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
function proposalStatusToJSON(object) {
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
var ProposalExecutorResult = /*#__PURE__*/function (ProposalExecutorResult) {
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
  ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalExecutorResult;
}({});
exports.ProposalExecutorResult = ProposalExecutorResult;
function proposalExecutorResultFromJSON(object) {
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
function proposalExecutorResultToJSON(object) {
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
    added_at: _timestamp.Timestamp.fromPartial({})
  };
}
var Member = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _timestamp.Timestamp.encode(message.added_at, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMember();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.added_at = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      weight: (0, _helpers.isSet)(object.weight) ? String(object.weight) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      added_at: (0, _helpers.isSet)(object.added_at) ? (0, _helpers.fromJsonTimestamp)(object.added_at) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$weight, _object$metadata;
    var message = createBaseMember();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.added_at = object.added_at !== undefined && object.added_at !== null ? _timestamp.Timestamp.fromPartial(object.added_at) : undefined;
    return message;
  }
};
exports.Member = Member;
function createBaseMemberRequest() {
  return {
    address: "",
    weight: "",
    metadata: ""
  };
}
var MemberRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMemberRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      weight: (0, _helpers.isSet)(object.weight) ? String(object.weight) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$weight2, _object$metadata2;
    var message = createBaseMemberRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.weight = (_object$weight2 = object.weight) !== null && _object$weight2 !== void 0 ? _object$weight2 : "";
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
exports.MemberRequest = MemberRequest;
function createBaseThresholdDecisionPolicy() {
  return {
    threshold: "",
    windows: DecisionPolicyWindows.fromPartial({})
  };
}
var ThresholdDecisionPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      threshold: (0, _helpers.isSet)(object.threshold) ? String(object.threshold) : "",
      windows: (0, _helpers.isSet)(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$threshold;
    var message = createBaseThresholdDecisionPolicy();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }
};
exports.ThresholdDecisionPolicy = ThresholdDecisionPolicy;
function createBasePercentageDecisionPolicy() {
  return {
    percentage: "",
    windows: DecisionPolicyWindows.fromPartial({})
  };
}
var PercentageDecisionPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      percentage: (0, _helpers.isSet)(object.percentage) ? String(object.percentage) : "",
      windows: (0, _helpers.isSet)(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$percentage;
    var message = createBasePercentageDecisionPolicy();
    message.percentage = (_object$percentage = object.percentage) !== null && _object$percentage !== void 0 ? _object$percentage : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }
};
exports.PercentageDecisionPolicy = PercentageDecisionPolicy;
function createBaseDecisionPolicyWindows() {
  return {
    voting_period: _duration.Duration.fromPartial({}),
    min_execution_period: _duration.Duration.fromPartial({})
  };
}
var DecisionPolicyWindows = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.voting_period !== undefined) {
      _duration.Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    if (message.min_execution_period !== undefined) {
      _duration.Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.min_execution_period = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      voting_period: (0, _helpers.isSet)(object.voting_period) ? _duration.Duration.fromJSON(object.voting_period) : undefined,
      min_execution_period: (0, _helpers.isSet)(object.min_execution_period) ? _duration.Duration.fromJSON(object.min_execution_period) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDecisionPolicyWindows();
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? _duration.Duration.fromPartial(object.voting_period) : undefined;
    message.min_execution_period = object.min_execution_period !== undefined && object.min_execution_period !== null ? _duration.Duration.fromPartial(object.min_execution_period) : undefined;
    return message;
  }
};
exports.DecisionPolicyWindows = DecisionPolicyWindows;
function createBaseGroupInfo() {
  return {
    id: _helpers.Long.UZERO,
    admin: "",
    metadata: "",
    version: _helpers.Long.UZERO,
    total_weight: "",
    created_at: _timestamp.Timestamp.fromPartial({})
  };
}
var GroupInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _timestamp.Timestamp.encode(message.created_at, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGroupInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.created_at = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO,
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      version: (0, _helpers.isSet)(object.version) ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO,
      total_weight: (0, _helpers.isSet)(object.total_weight) ? String(object.total_weight) : "",
      created_at: (0, _helpers.isSet)(object.created_at) ? (0, _helpers.fromJsonTimestamp)(object.created_at) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin, _object$metadata3, _object$total_weight;
    var message = createBaseGroupInfo();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.version = object.version !== undefined && object.version !== null ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO;
    message.total_weight = (_object$total_weight = object.total_weight) !== null && _object$total_weight !== void 0 ? _object$total_weight : "";
    message.created_at = object.created_at !== undefined && object.created_at !== null ? _timestamp.Timestamp.fromPartial(object.created_at) : undefined;
    return message;
  }
};
exports.GroupInfo = GroupInfo;
function createBaseGroupMember() {
  return {
    group_id: _helpers.Long.UZERO,
    member: Member.fromPartial({})
  };
}
var GroupMember = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGroupMember();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      member: (0, _helpers.isSet)(object.member) ? Member.fromJSON(object.member) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGroupMember();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  }
};
exports.GroupMember = GroupMember;
function createBaseGroupPolicyInfo() {
  return {
    address: "",
    group_id: _helpers.Long.UZERO,
    admin: "",
    metadata: "",
    version: _helpers.Long.UZERO,
    decision_policy: _any.Any.fromPartial({}),
    created_at: _timestamp.Timestamp.fromPartial({})
  };
}
var GroupPolicyInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _any.Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
    }
    if (message.created_at !== undefined) {
      _timestamp.Timestamp.encode(message.created_at, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.decision_policy = _any.Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.created_at = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      version: (0, _helpers.isSet)(object.version) ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO,
      decision_policy: (0, _helpers.isSet)(object.decision_policy) ? _any.Any.fromJSON(object.decision_policy) : undefined,
      created_at: (0, _helpers.isSet)(object.created_at) ? (0, _helpers.fromJsonTimestamp)(object.created_at) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address3, _object$admin2, _object$metadata4;
    var message = createBaseGroupPolicyInfo();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    message.version = object.version !== undefined && object.version !== null ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO;
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? _any.Any.fromPartial(object.decision_policy) : undefined;
    message.created_at = object.created_at !== undefined && object.created_at !== null ? _timestamp.Timestamp.fromPartial(object.created_at) : undefined;
    return message;
  }
};
exports.GroupPolicyInfo = GroupPolicyInfo;
function createBaseProposal() {
  return {
    id: _helpers.Long.UZERO,
    group_policy_address: "",
    metadata: "",
    proposers: [],
    submit_time: _timestamp.Timestamp.fromPartial({}),
    group_version: _helpers.Long.UZERO,
    group_policy_version: _helpers.Long.UZERO,
    status: 0,
    final_tally_result: TallyResult.fromPartial({}),
    voting_period_end: _timestamp.Timestamp.fromPartial({}),
    executor_result: 0,
    messages: [],
    title: "",
    summary: ""
  };
}
var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    var _iterator = _createForOfIteratorHelper(message.proposers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.submit_time !== undefined) {
      _timestamp.Timestamp.encode(message.submit_time, writer.uint32(42).fork()).ldelim();
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
      _timestamp.Timestamp.encode(message.voting_period_end, writer.uint32(82).fork()).ldelim();
    }
    if (message.executor_result !== 0) {
      writer.uint32(88).int32(message.executor_result);
    }
    var _iterator2 = _createForOfIteratorHelper(message.messages),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _any.Any.encode(_v, writer.uint32(98).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.submit_time = _timestamp.Timestamp.decode(reader, reader.uint32());
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
          message.voting_period_end = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.executor_result = reader.int32();
          break;
        case 12:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
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
  fromJSON: function fromJSON(object) {
    return {
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO,
      group_policy_address: (0, _helpers.isSet)(object.group_policy_address) ? String(object.group_policy_address) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function (e) {
        return String(e);
      }) : [],
      submit_time: (0, _helpers.isSet)(object.submit_time) ? (0, _helpers.fromJsonTimestamp)(object.submit_time) : undefined,
      group_version: (0, _helpers.isSet)(object.group_version) ? _helpers.Long.fromValue(object.group_version) : _helpers.Long.UZERO,
      group_policy_version: (0, _helpers.isSet)(object.group_policy_version) ? _helpers.Long.fromValue(object.group_policy_version) : _helpers.Long.UZERO,
      status: (0, _helpers.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: (0, _helpers.isSet)(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      voting_period_end: (0, _helpers.isSet)(object.voting_period_end) ? (0, _helpers.fromJsonTimestamp)(object.voting_period_end) : undefined,
      executor_result: (0, _helpers.isSet)(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      summary: (0, _helpers.isSet)(object.summary) ? String(object.summary) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$group_policy_, _object$metadata5, _object$proposers, _object$status, _object$executor_resu, _object$messages, _object$title, _object$summary;
    var message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.group_policy_address = (_object$group_policy_ = object.group_policy_address) !== null && _object$group_policy_ !== void 0 ? _object$group_policy_ : "";
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(function (e) {
      return e;
    })) || [];
    message.submit_time = object.submit_time !== undefined && object.submit_time !== null ? _timestamp.Timestamp.fromPartial(object.submit_time) : undefined;
    message.group_version = object.group_version !== undefined && object.group_version !== null ? _helpers.Long.fromValue(object.group_version) : _helpers.Long.UZERO;
    message.group_policy_version = object.group_policy_version !== undefined && object.group_policy_version !== null ? _helpers.Long.fromValue(object.group_policy_version) : _helpers.Long.UZERO;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
    message.voting_period_end = object.voting_period_end !== undefined && object.voting_period_end !== null ? _timestamp.Timestamp.fromPartial(object.voting_period_end) : undefined;
    message.executor_result = (_object$executor_resu = object.executor_result) !== null && _object$executor_resu !== void 0 ? _object$executor_resu : 0;
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
exports.Proposal = Proposal;
function createBaseTallyResult() {
  return {
    yes_count: "",
    abstain_count: "",
    no_count: "",
    no_with_veto_count: ""
  };
}
var TallyResult = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      yes_count: (0, _helpers.isSet)(object.yes_count) ? String(object.yes_count) : "",
      abstain_count: (0, _helpers.isSet)(object.abstain_count) ? String(object.abstain_count) : "",
      no_count: (0, _helpers.isSet)(object.no_count) ? String(object.no_count) : "",
      no_with_veto_count: (0, _helpers.isSet)(object.no_with_veto_count) ? String(object.no_with_veto_count) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$yes_count, _object$abstain_count, _object$no_count, _object$no_with_veto_;
    var message = createBaseTallyResult();
    message.yes_count = (_object$yes_count = object.yes_count) !== null && _object$yes_count !== void 0 ? _object$yes_count : "";
    message.abstain_count = (_object$abstain_count = object.abstain_count) !== null && _object$abstain_count !== void 0 ? _object$abstain_count : "";
    message.no_count = (_object$no_count = object.no_count) !== null && _object$no_count !== void 0 ? _object$no_count : "";
    message.no_with_veto_count = (_object$no_with_veto_ = object.no_with_veto_count) !== null && _object$no_with_veto_ !== void 0 ? _object$no_with_veto_ : "";
    return message;
  }
};
exports.TallyResult = TallyResult;
function createBaseVote() {
  return {
    proposal_id: _helpers.Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    submit_time: _timestamp.Timestamp.fromPartial({})
  };
}
var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _timestamp.Timestamp.encode(message.submit_time, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.submit_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO,
      voter: (0, _helpers.isSet)(object.voter) ? String(object.voter) : "",
      option: (0, _helpers.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      submit_time: (0, _helpers.isSet)(object.submit_time) ? (0, _helpers.fromJsonTimestamp)(object.submit_time) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6;
    var message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.submit_time = object.submit_time !== undefined && object.submit_time !== null ? _timestamp.Timestamp.fromPartial(object.submit_time) : undefined;
    return message;
  }
};
exports.Vote = Vote;