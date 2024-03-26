"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeightedVoteOption = exports.VotingParams = exports.VoteOption = exports.Vote = exports.TallyResult = exports.TallyParams = exports.ProposalStatus = exports.Proposal = exports.Params = exports.DepositParams = exports.Deposit = void 0;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
var _coin = require("../../base/v1beta1/coin");
var _any = require("../../../google/protobuf/any");
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** VoteOption enumerates the valid vote options for a given governance proposal. */
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
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus = /*#__PURE__*/function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
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
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
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
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WeightedVoteOption defines a unit of vote for vote split. */

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */

/** Proposal defines the core field members of a governance proposal. */

/** TallyResult defines a standard tally for a governance proposal. */

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */

/** DepositParams defines the params for deposits on governance proposals. */

/** VotingParams defines the params for voting on governance proposals. */

/** TallyParams defines the params for tallying votes on governance proposals. */

/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}
var WeightedVoteOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;
        case 2:
          message.weight = reader.string();
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
      option: (0, _helpers.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: (0, _helpers.isSet)(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$option, _object$weight;
    var message = createBaseWeightedVoteOption();
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
exports.WeightedVoteOption = WeightedVoteOption;
function createBaseDeposit() {
  return {
    proposal_id: _helpers.Long.UZERO,
    depositor: "",
    amount: []
  };
}
var Deposit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    var _iterator = _createForOfIteratorHelper(message.amount),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
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
      depositor: (0, _helpers.isSet)(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$depositor, _object$amount;
    var message = createBaseDeposit();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Deposit = Deposit;
function createBaseProposal() {
  return {
    id: _helpers.Long.UZERO,
    messages: [],
    status: 0,
    final_tally_result: TallyResult.fromPartial({}),
    submit_time: _timestamp.Timestamp.fromPartial({}),
    deposit_end_time: _timestamp.Timestamp.fromPartial({}),
    total_deposit: [],
    voting_start_time: _timestamp.Timestamp.fromPartial({}),
    voting_end_time: _timestamp.Timestamp.fromPartial({}),
    metadata: "",
    title: "",
    summary: "",
    proposer: ""
  };
}
var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    var _iterator2 = _createForOfIteratorHelper(message.messages),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _any.Any.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
    }
    if (message.submit_time !== undefined) {
      _timestamp.Timestamp.encode(message.submit_time, writer.uint32(42).fork()).ldelim();
    }
    if (message.deposit_end_time !== undefined) {
      _timestamp.Timestamp.encode(message.deposit_end_time, writer.uint32(50).fork()).ldelim();
    }
    var _iterator3 = _createForOfIteratorHelper(message.total_deposit),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _coin.Coin.encode(_v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.voting_start_time !== undefined) {
      _timestamp.Timestamp.encode(message.voting_start_time, writer.uint32(66).fork()).ldelim();
    }
    if (message.voting_end_time !== undefined) {
      _timestamp.Timestamp.encode(message.voting_end_time, writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
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
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submit_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.deposit_end_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.total_deposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.voting_start_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.voting_end_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      status: (0, _helpers.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: (0, _helpers.isSet)(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      submit_time: (0, _helpers.isSet)(object.submit_time) ? (0, _helpers.fromJsonTimestamp)(object.submit_time) : undefined,
      deposit_end_time: (0, _helpers.isSet)(object.deposit_end_time) ? (0, _helpers.fromJsonTimestamp)(object.deposit_end_time) : undefined,
      total_deposit: Array.isArray(object === null || object === void 0 ? void 0 : object.total_deposit) ? object.total_deposit.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      voting_start_time: (0, _helpers.isSet)(object.voting_start_time) ? (0, _helpers.fromJsonTimestamp)(object.voting_start_time) : undefined,
      voting_end_time: (0, _helpers.isSet)(object.voting_end_time) ? (0, _helpers.fromJsonTimestamp)(object.voting_end_time) : undefined,
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      summary: (0, _helpers.isSet)(object.summary) ? String(object.summary) : "",
      proposer: (0, _helpers.isSet)(object.proposer) ? String(object.proposer) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$messages, _object$status, _object$total_deposit, _object$metadata, _object$title, _object$summary, _object$proposer;
    var message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
    message.submit_time = object.submit_time !== undefined && object.submit_time !== null ? _timestamp.Timestamp.fromPartial(object.submit_time) : undefined;
    message.deposit_end_time = object.deposit_end_time !== undefined && object.deposit_end_time !== null ? _timestamp.Timestamp.fromPartial(object.deposit_end_time) : undefined;
    message.total_deposit = ((_object$total_deposit = object.total_deposit) === null || _object$total_deposit === void 0 ? void 0 : _object$total_deposit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.voting_start_time = object.voting_start_time !== undefined && object.voting_start_time !== null ? _timestamp.Timestamp.fromPartial(object.voting_start_time) : undefined;
    message.voting_end_time = object.voting_end_time !== undefined && object.voting_end_time !== null ? _timestamp.Timestamp.fromPartial(object.voting_end_time) : undefined;
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    message.proposer = (_object$proposer = object.proposer) !== null && _object$proposer !== void 0 ? _object$proposer : "";
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
    options: [],
    metadata: ""
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
    var _iterator4 = _createForOfIteratorHelper(message.options),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
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
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO,
      voter: (0, _helpers.isSet)(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map(function (e) {
        return WeightedVoteOption.fromJSON(e);
      }) : [],
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$options, _object$metadata2;
    var message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map(function (e) {
      return WeightedVoteOption.fromPartial(e);
    })) || [];
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
exports.Vote = Vote;
function createBaseDepositParams() {
  return {
    min_deposit: [],
    max_deposit_period: _duration.Duration.fromPartial({})
  };
}
var DepositParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.min_deposit),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.max_deposit_period !== undefined) {
      _duration.Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDepositParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min_deposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.max_deposit_period = _duration.Duration.decode(reader, reader.uint32());
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
      min_deposit: Array.isArray(object === null || object === void 0 ? void 0 : object.min_deposit) ? object.min_deposit.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      max_deposit_period: (0, _helpers.isSet)(object.max_deposit_period) ? _duration.Duration.fromJSON(object.max_deposit_period) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$min_deposit;
    var message = createBaseDepositParams();
    message.min_deposit = ((_object$min_deposit = object.min_deposit) === null || _object$min_deposit === void 0 ? void 0 : _object$min_deposit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? _duration.Duration.fromPartial(object.max_deposit_period) : undefined;
    return message;
  }
};
exports.DepositParams = DepositParams;
function createBaseVotingParams() {
  return {
    voting_period: _duration.Duration.fromPartial({})
  };
}
var VotingParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.voting_period !== undefined) {
      _duration.Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVotingParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = _duration.Duration.decode(reader, reader.uint32());
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
      voting_period: (0, _helpers.isSet)(object.voting_period) ? _duration.Duration.fromJSON(object.voting_period) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVotingParams();
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? _duration.Duration.fromPartial(object.voting_period) : undefined;
    return message;
  }
};
exports.VotingParams = VotingParams;
function createBaseTallyParams() {
  return {
    quorum: "",
    threshold: "",
    veto_threshold: ""
  };
}
var TallyParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(26).string(message.veto_threshold);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.veto_threshold = reader.string();
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
      quorum: (0, _helpers.isSet)(object.quorum) ? String(object.quorum) : "",
      threshold: (0, _helpers.isSet)(object.threshold) ? String(object.threshold) : "",
      veto_threshold: (0, _helpers.isSet)(object.veto_threshold) ? String(object.veto_threshold) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$quorum, _object$threshold, _object$veto_threshol;
    var message = createBaseTallyParams();
    message.quorum = (_object$quorum = object.quorum) !== null && _object$quorum !== void 0 ? _object$quorum : "";
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.veto_threshold = (_object$veto_threshol = object.veto_threshold) !== null && _object$veto_threshol !== void 0 ? _object$veto_threshol : "";
    return message;
  }
};
exports.TallyParams = TallyParams;
function createBaseParams() {
  return {
    min_deposit: [],
    max_deposit_period: _duration.Duration.fromPartial({}),
    voting_period: _duration.Duration.fromPartial({}),
    quorum: "",
    threshold: "",
    veto_threshold: "",
    min_initial_deposit_ratio: "",
    burn_vote_quorum: false,
    burn_proposal_deposit_prevote: false,
    burn_vote_veto: false
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.min_deposit),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.max_deposit_period !== undefined) {
      _duration.Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }
    if (message.voting_period !== undefined) {
      _duration.Duration.encode(message.voting_period, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(50).string(message.veto_threshold);
    }
    if (message.min_initial_deposit_ratio !== "") {
      writer.uint32(58).string(message.min_initial_deposit_ratio);
    }
    if (message.burn_vote_quorum === true) {
      writer.uint32(104).bool(message.burn_vote_quorum);
    }
    if (message.burn_proposal_deposit_prevote === true) {
      writer.uint32(112).bool(message.burn_proposal_deposit_prevote);
    }
    if (message.burn_vote_veto === true) {
      writer.uint32(120).bool(message.burn_vote_veto);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min_deposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.max_deposit_period = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.voting_period = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 6:
          message.veto_threshold = reader.string();
          break;
        case 7:
          message.min_initial_deposit_ratio = reader.string();
          break;
        case 13:
          message.burn_vote_quorum = reader.bool();
          break;
        case 14:
          message.burn_proposal_deposit_prevote = reader.bool();
          break;
        case 15:
          message.burn_vote_veto = reader.bool();
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
      min_deposit: Array.isArray(object === null || object === void 0 ? void 0 : object.min_deposit) ? object.min_deposit.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      max_deposit_period: (0, _helpers.isSet)(object.max_deposit_period) ? _duration.Duration.fromJSON(object.max_deposit_period) : undefined,
      voting_period: (0, _helpers.isSet)(object.voting_period) ? _duration.Duration.fromJSON(object.voting_period) : undefined,
      quorum: (0, _helpers.isSet)(object.quorum) ? String(object.quorum) : "",
      threshold: (0, _helpers.isSet)(object.threshold) ? String(object.threshold) : "",
      veto_threshold: (0, _helpers.isSet)(object.veto_threshold) ? String(object.veto_threshold) : "",
      min_initial_deposit_ratio: (0, _helpers.isSet)(object.min_initial_deposit_ratio) ? String(object.min_initial_deposit_ratio) : "",
      burn_vote_quorum: (0, _helpers.isSet)(object.burn_vote_quorum) ? Boolean(object.burn_vote_quorum) : false,
      burn_proposal_deposit_prevote: (0, _helpers.isSet)(object.burn_proposal_deposit_prevote) ? Boolean(object.burn_proposal_deposit_prevote) : false,
      burn_vote_veto: (0, _helpers.isSet)(object.burn_vote_veto) ? Boolean(object.burn_vote_veto) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$min_deposit2, _object$quorum2, _object$threshold2, _object$veto_threshol2, _object$min_initial_d, _object$burn_vote_quo, _object$burn_proposal, _object$burn_vote_vet;
    var message = createBaseParams();
    message.min_deposit = ((_object$min_deposit2 = object.min_deposit) === null || _object$min_deposit2 === void 0 ? void 0 : _object$min_deposit2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? _duration.Duration.fromPartial(object.max_deposit_period) : undefined;
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? _duration.Duration.fromPartial(object.voting_period) : undefined;
    message.quorum = (_object$quorum2 = object.quorum) !== null && _object$quorum2 !== void 0 ? _object$quorum2 : "";
    message.threshold = (_object$threshold2 = object.threshold) !== null && _object$threshold2 !== void 0 ? _object$threshold2 : "";
    message.veto_threshold = (_object$veto_threshol2 = object.veto_threshold) !== null && _object$veto_threshol2 !== void 0 ? _object$veto_threshol2 : "";
    message.min_initial_deposit_ratio = (_object$min_initial_d = object.min_initial_deposit_ratio) !== null && _object$min_initial_d !== void 0 ? _object$min_initial_d : "";
    message.burn_vote_quorum = (_object$burn_vote_quo = object.burn_vote_quorum) !== null && _object$burn_vote_quo !== void 0 ? _object$burn_vote_quo : false;
    message.burn_proposal_deposit_prevote = (_object$burn_proposal = object.burn_proposal_deposit_prevote) !== null && _object$burn_proposal !== void 0 ? _object$burn_proposal : false;
    message.burn_vote_veto = (_object$burn_vote_vet = object.burn_vote_veto) !== null && _object$burn_vote_vet !== void 0 ? _object$burn_vote_vet : false;
    return message;
  }
};
exports.Params = Params;