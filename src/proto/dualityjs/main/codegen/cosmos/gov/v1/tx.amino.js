"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _gov = require("./gov");
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.gov.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    toAmino: function toAmino(_ref) {
      var messages = _ref.messages,
        initial_deposit = _ref.initial_deposit,
        proposer = _ref.proposer,
        metadata = _ref.metadata,
        title = _ref.title,
        summary = _ref.summary;
      return {
        messages: messages.map(function (el0) {
          return {
            type_url: el0.type_url,
            value: el0.value
          };
        }),
        initial_deposit: initial_deposit.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        proposer: proposer,
        metadata: metadata,
        title: title,
        summary: summary
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var messages = _ref2.messages,
        initial_deposit = _ref2.initial_deposit,
        proposer = _ref2.proposer,
        metadata = _ref2.metadata,
        title = _ref2.title,
        summary = _ref2.summary;
      return {
        messages: messages.map(function (el0) {
          return {
            type_url: el0.type_url,
            value: el0.value
          };
        }),
        initial_deposit: initial_deposit.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        proposer: proposer,
        metadata: metadata,
        title: title,
        summary: summary
      };
    }
  },
  "/cosmos.gov.v1.MsgExecLegacyContent": {
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    toAmino: function toAmino(_ref3) {
      var content = _ref3.content,
        authority = _ref3.authority;
      return {
        content: {
          type_url: content.type_url,
          value: content.value
        },
        authority: authority
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var content = _ref4.content,
        authority = _ref4.authority;
      return {
        content: {
          type_url: content.type_url,
          value: content.value
        },
        authority: authority
      };
    }
  },
  "/cosmos.gov.v1.MsgVote": {
    aminoType: "cosmos-sdk/v1/MsgVote",
    toAmino: function toAmino(_ref5) {
      var proposal_id = _ref5.proposal_id,
        voter = _ref5.voter,
        option = _ref5.option,
        metadata = _ref5.metadata;
      return {
        proposal_id: proposal_id.toString(),
        voter: voter,
        option: option,
        metadata: metadata
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var proposal_id = _ref6.proposal_id,
        voter = _ref6.voter,
        option = _ref6.option,
        metadata = _ref6.metadata;
      return {
        proposal_id: _helpers.Long.fromString(proposal_id),
        voter: voter,
        option: (0, _gov.voteOptionFromJSON)(option),
        metadata: metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    toAmino: function toAmino(_ref7) {
      var proposal_id = _ref7.proposal_id,
        voter = _ref7.voter,
        options = _ref7.options,
        metadata = _ref7.metadata;
      return {
        proposal_id: proposal_id.toString(),
        voter: voter,
        options: options.map(function (el0) {
          return {
            option: el0.option,
            weight: el0.weight
          };
        }),
        metadata: metadata
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var proposal_id = _ref8.proposal_id,
        voter = _ref8.voter,
        options = _ref8.options,
        metadata = _ref8.metadata;
      return {
        proposal_id: _helpers.Long.fromString(proposal_id),
        voter: voter,
        options: options.map(function (el0) {
          return {
            option: (0, _gov.voteOptionFromJSON)(el0.option),
            weight: el0.weight
          };
        }),
        metadata: metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgDeposit": {
    aminoType: "cosmos-sdk/v1/MsgDeposit",
    toAmino: function toAmino(_ref9) {
      var proposal_id = _ref9.proposal_id,
        depositor = _ref9.depositor,
        amount = _ref9.amount;
      return {
        proposal_id: proposal_id.toString(),
        depositor: depositor,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var proposal_id = _ref10.proposal_id,
        depositor = _ref10.depositor,
        amount = _ref10.amount;
      return {
        proposal_id: _helpers.Long.fromString(proposal_id),
        depositor: depositor,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmos.gov.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
    toAmino: function toAmino(_ref11) {
      var authority = _ref11.authority,
        params = _ref11.params;
      return {
        authority: authority,
        params: {
          min_deposit: params.min_deposit.map(function (el0) {
            return {
              denom: el0.denom,
              amount: el0.amount
            };
          }),
          max_deposit_period: (params.max_deposit_period * 1000000000).toString(),
          voting_period: (params.voting_period * 1000000000).toString(),
          quorum: params.quorum,
          threshold: params.threshold,
          veto_threshold: params.veto_threshold,
          min_initial_deposit_ratio: params.min_initial_deposit_ratio,
          burn_vote_quorum: params.burn_vote_quorum,
          burn_proposal_deposit_prevote: params.burn_proposal_deposit_prevote,
          burn_vote_veto: params.burn_vote_veto
        }
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var authority = _ref12.authority,
        params = _ref12.params;
      return {
        authority: authority,
        params: {
          min_deposit: params.min_deposit.map(function (el1) {
            return {
              denom: el1.denom,
              amount: el1.amount
            };
          }),
          max_deposit_period: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(params.max_deposit_period) / 1000000000)),
            nanos: parseInt(params.max_deposit_period) % 1000000000
          },
          voting_period: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(params.voting_period) / 1000000000)),
            nanos: parseInt(params.voting_period) % 1000000000
          },
          quorum: params.quorum,
          threshold: params.threshold,
          veto_threshold: params.veto_threshold,
          min_initial_deposit_ratio: params.min_initial_deposit_ratio,
          burn_vote_quorum: params.burn_vote_quorum,
          burn_proposal_deposit_prevote: params.burn_proposal_deposit_prevote,
          burn_vote_veto: params.burn_vote_veto
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;