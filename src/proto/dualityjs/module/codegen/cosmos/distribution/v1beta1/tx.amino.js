export const AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: ({
      delegator_address,
      withdraw_address
    }) => {
      return {
        delegator_address,
        withdraw_address
      };
    },
    fromAmino: ({
      delegator_address,
      withdraw_address
    }) => {
      return {
        delegator_address,
        withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: ({
      delegator_address,
      validator_address
    }) => {
      return {
        delegator_address,
        validator_address
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }) => {
      return {
        delegator_address,
        validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: ({
      validator_address
    }) => {
      return {
        validator_address
      };
    },
    fromAmino: ({
      validator_address
    }) => {
      return {
        validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: ({
      amount,
      depositor
    }) => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    },
    fromAmino: ({
      amount,
      depositor
    }) => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/distribution/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          community_tax: params.community_tax,
          base_proposer_reward: params.base_proposer_reward,
          bonus_proposer_reward: params.bonus_proposer_reward,
          withdraw_addr_enabled: params.withdraw_addr_enabled
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
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
    toAmino: ({
      authority,
      recipient,
      amount
    }) => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      recipient,
      amount
    }) => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};