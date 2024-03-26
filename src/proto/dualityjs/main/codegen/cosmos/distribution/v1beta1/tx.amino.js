"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: function toAmino(_ref) {
      var delegator_address = _ref.delegator_address,
        withdraw_address = _ref.withdraw_address;
      return {
        delegator_address: delegator_address,
        withdraw_address: withdraw_address
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var delegator_address = _ref2.delegator_address,
        withdraw_address = _ref2.withdraw_address;
      return {
        delegator_address: delegator_address,
        withdraw_address: withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: function toAmino(_ref3) {
      var delegator_address = _ref3.delegator_address,
        validator_address = _ref3.validator_address;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var delegator_address = _ref4.delegator_address,
        validator_address = _ref4.validator_address;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: function toAmino(_ref5) {
      var validator_address = _ref5.validator_address;
      return {
        validator_address: validator_address
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var validator_address = _ref6.validator_address;
      return {
        validator_address: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: function toAmino(_ref7) {
      var amount = _ref7.amount,
        depositor = _ref7.depositor;
      return {
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        depositor: depositor
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var amount = _ref8.amount,
        depositor = _ref8.depositor;
      return {
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        depositor: depositor
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/distribution/MsgUpdateParams",
    toAmino: function toAmino(_ref9) {
      var authority = _ref9.authority,
        params = _ref9.params;
      return {
        authority: authority,
        params: {
          community_tax: params.community_tax,
          base_proposer_reward: params.base_proposer_reward,
          bonus_proposer_reward: params.bonus_proposer_reward,
          withdraw_addr_enabled: params.withdraw_addr_enabled
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var authority = _ref10.authority,
        params = _ref10.params;
      return {
        authority: authority,
        params: {
          community_tax: params.community_tax,
          base_proposer_reward: params.base_proposer_reward,
          bonus_proposer_reward: params.bonus_proposer_reward,
          withdraw_addr_enabled: params.withdraw_addr_enabled
        }
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
    aminoType: "cosmos-sdk/distr/MsgCommunityPoolSpend",
    toAmino: function toAmino(_ref11) {
      var authority = _ref11.authority,
        recipient = _ref11.recipient,
        amount = _ref11.amount;
      return {
        authority: authority,
        recipient: recipient,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var authority = _ref12.authority,
        recipient = _ref12.recipient,
        amount = _ref12.amount;
      return {
        authority: authority,
        recipient: recipient,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;