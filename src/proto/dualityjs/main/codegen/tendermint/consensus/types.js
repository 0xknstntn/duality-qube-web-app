"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteSetMaj23 = exports.VoteSetBits = exports.Vote = exports.ProposalPOL = exports.Proposal = exports.NewValidBlock = exports.NewRoundStep = exports.Message = exports.HasVote = exports.BlockPart = void 0;
var _types = require("../types/types");
var _types2 = require("../libs/bits/types");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    height: _helpers.Long.ZERO,
    round: 0,
    step: 0,
    seconds_since_start_time: _helpers.Long.ZERO,
    last_commit_round: 0
  };
}
var NewRoundStep = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNewRoundStep();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      step: (0, _helpers.isSet)(object.step) ? Number(object.step) : 0,
      seconds_since_start_time: (0, _helpers.isSet)(object.seconds_since_start_time) ? _helpers.Long.fromValue(object.seconds_since_start_time) : _helpers.Long.ZERO,
      last_commit_round: (0, _helpers.isSet)(object.last_commit_round) ? Number(object.last_commit_round) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round, _object$step, _object$last_commit_r;
    var message = createBaseNewRoundStep();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    message.seconds_since_start_time = object.seconds_since_start_time !== undefined && object.seconds_since_start_time !== null ? _helpers.Long.fromValue(object.seconds_since_start_time) : _helpers.Long.ZERO;
    message.last_commit_round = (_object$last_commit_r = object.last_commit_round) !== null && _object$last_commit_r !== void 0 ? _object$last_commit_r : 0;
    return message;
  }
};
exports.NewRoundStep = NewRoundStep;
function createBaseNewValidBlock() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    block_part_set_header: _types.PartSetHeader.fromPartial({}),
    block_parts: _types2.BitArray.fromPartial({}),
    is_commit: false
  };
}
var NewValidBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.block_part_set_header !== undefined) {
      _types.PartSetHeader.encode(message.block_part_set_header, writer.uint32(26).fork()).ldelim();
    }
    if (message.block_parts !== undefined) {
      _types2.BitArray.encode(message.block_parts, writer.uint32(34).fork()).ldelim();
    }
    if (message.is_commit === true) {
      writer.uint32(40).bool(message.is_commit);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNewValidBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.block_part_set_header = _types.PartSetHeader.decode(reader, reader.uint32());
          break;
        case 4:
          message.block_parts = _types2.BitArray.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      block_part_set_header: (0, _helpers.isSet)(object.block_part_set_header) ? _types.PartSetHeader.fromJSON(object.block_part_set_header) : undefined,
      block_parts: (0, _helpers.isSet)(object.block_parts) ? _types2.BitArray.fromJSON(object.block_parts) : undefined,
      is_commit: (0, _helpers.isSet)(object.is_commit) ? Boolean(object.is_commit) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round2, _object$is_commit;
    var message = createBaseNewValidBlock();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.block_part_set_header = object.block_part_set_header !== undefined && object.block_part_set_header !== null ? _types.PartSetHeader.fromPartial(object.block_part_set_header) : undefined;
    message.block_parts = object.block_parts !== undefined && object.block_parts !== null ? _types2.BitArray.fromPartial(object.block_parts) : undefined;
    message.is_commit = (_object$is_commit = object.is_commit) !== null && _object$is_commit !== void 0 ? _object$is_commit : false;
    return message;
  }
};
exports.NewValidBlock = NewValidBlock;
function createBaseProposal() {
  return {
    proposal: _types.Proposal.fromPartial({})
  };
}
var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
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
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
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
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? _types.Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }
};
exports.Proposal = Proposal;
function createBaseProposalPOL() {
  return {
    height: _helpers.Long.ZERO,
    proposal_pol_round: 0,
    proposal_pol: _types2.BitArray.fromPartial({})
  };
}
var ProposalPOL = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.proposal_pol_round !== 0) {
      writer.uint32(16).int32(message.proposal_pol_round);
    }
    if (message.proposal_pol !== undefined) {
      _types2.BitArray.encode(message.proposal_pol, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposalPOL();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.proposal_pol_round = reader.int32();
          break;
        case 3:
          message.proposal_pol = _types2.BitArray.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      proposal_pol_round: (0, _helpers.isSet)(object.proposal_pol_round) ? Number(object.proposal_pol_round) : 0,
      proposal_pol: (0, _helpers.isSet)(object.proposal_pol) ? _types2.BitArray.fromJSON(object.proposal_pol) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proposal_pol_;
    var message = createBaseProposalPOL();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.proposal_pol_round = (_object$proposal_pol_ = object.proposal_pol_round) !== null && _object$proposal_pol_ !== void 0 ? _object$proposal_pol_ : 0;
    message.proposal_pol = object.proposal_pol !== undefined && object.proposal_pol !== null ? _types2.BitArray.fromPartial(object.proposal_pol) : undefined;
    return message;
  }
};
exports.ProposalPOL = ProposalPOL;
function createBaseBlockPart() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    part: _types.Part.fromPartial({})
  };
}
var BlockPart = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.part !== undefined) {
      _types.Part.encode(message.part, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockPart();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.part = _types.Part.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      part: (0, _helpers.isSet)(object.part) ? _types.Part.fromJSON(object.part) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round3;
    var message = createBaseBlockPart();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.part = object.part !== undefined && object.part !== null ? _types.Part.fromPartial(object.part) : undefined;
    return message;
  }
};
exports.BlockPart = BlockPart;
function createBaseVote() {
  return {
    vote: _types.Vote.fromPartial({})
  };
}
var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
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
          message.vote = _types.Vote.decode(reader, reader.uint32());
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
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVote();
    message.vote = object.vote !== undefined && object.vote !== null ? _types.Vote.fromPartial(object.vote) : undefined;
    return message;
  }
};
exports.Vote = Vote;
function createBaseHasVote() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    type: 0,
    index: 0
  };
}
var HasVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHasVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : -1,
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round4, _object$type, _object$index;
    var message = createBaseHasVote();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round4 = object.round) !== null && _object$round4 !== void 0 ? _object$round4 : 0;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    return message;
  }
};
exports.HasVote = HasVote;
function createBaseVoteSetMaj23() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    type: 0,
    block_id: _types.BlockID.fromPartial({})
  };
}
var VoteSetMaj23 = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _types.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteSetMaj23();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.block_id = _types.BlockID.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : -1,
      block_id: (0, _helpers.isSet)(object.block_id) ? _types.BlockID.fromJSON(object.block_id) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round5, _object$type2;
    var message = createBaseVoteSetMaj23();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round5 = object.round) !== null && _object$round5 !== void 0 ? _object$round5 : 0;
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? _types.BlockID.fromPartial(object.block_id) : undefined;
    return message;
  }
};
exports.VoteSetMaj23 = VoteSetMaj23;
function createBaseVoteSetBits() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    type: 0,
    block_id: _types.BlockID.fromPartial({}),
    votes: _types2.BitArray.fromPartial({})
  };
}
var VoteSetBits = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _types.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.votes !== undefined) {
      _types2.BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteSetBits();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.block_id = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.votes = _types2.BitArray.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : -1,
      block_id: (0, _helpers.isSet)(object.block_id) ? _types.BlockID.fromJSON(object.block_id) : undefined,
      votes: (0, _helpers.isSet)(object.votes) ? _types2.BitArray.fromJSON(object.votes) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$round6, _object$type3;
    var message = createBaseVoteSetBits();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round6 = object.round) !== null && _object$round6 !== void 0 ? _object$round6 : 0;
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? _types.BlockID.fromPartial(object.block_id) : undefined;
    message.votes = object.votes !== undefined && object.votes !== null ? _types2.BitArray.fromPartial(object.votes) : undefined;
    return message;
  }
};
exports.VoteSetBits = VoteSetBits;
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
var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      new_round_step: (0, _helpers.isSet)(object.new_round_step) ? NewRoundStep.fromJSON(object.new_round_step) : undefined,
      new_valid_block: (0, _helpers.isSet)(object.new_valid_block) ? NewValidBlock.fromJSON(object.new_valid_block) : undefined,
      proposal: (0, _helpers.isSet)(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      proposal_pol: (0, _helpers.isSet)(object.proposal_pol) ? ProposalPOL.fromJSON(object.proposal_pol) : undefined,
      block_part: (0, _helpers.isSet)(object.block_part) ? BlockPart.fromJSON(object.block_part) : undefined,
      vote: (0, _helpers.isSet)(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      has_vote: (0, _helpers.isSet)(object.has_vote) ? HasVote.fromJSON(object.has_vote) : undefined,
      vote_set_maj23: (0, _helpers.isSet)(object.vote_set_maj23) ? VoteSetMaj23.fromJSON(object.vote_set_maj23) : undefined,
      vote_set_bits: (0, _helpers.isSet)(object.vote_set_bits) ? VoteSetBits.fromJSON(object.vote_set_bits) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
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
exports.Message = Message;