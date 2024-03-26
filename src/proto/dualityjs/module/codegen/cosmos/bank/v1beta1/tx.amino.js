export const AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: ({
      from_address,
      to_address,
      amount
    }) => {
      return {
        from_address,
        to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount
    }) => {
      return {
        from_address,
        to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgMultiSend": {
    aminoType: "cosmos-sdk/MsgMultiSend",
    toAmino: ({
      inputs,
      outputs
    }) => {
      return {
        inputs: inputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        outputs: outputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      inputs,
      outputs
    }) => {
      return {
        inputs: inputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        outputs: outputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/bank/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          send_enabled: params.send_enabled.map(el0 => ({
            denom: el0.denom,
            enabled: el0.enabled
          })),
          default_send_enabled: params.default_send_enabled
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
          send_enabled: params.send_enabled.map(el1 => ({
            denom: el1.denom,
            enabled: el1.enabled
          })),
          default_send_enabled: params.default_send_enabled
        }
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
    aminoType: "cosmos-sdk/MsgSetSendEnabled",
    toAmino: ({
      authority,
      send_enabled,
      use_default_for
    }) => {
      return {
        authority,
        send_enabled: send_enabled.map(el0 => ({
          denom: el0.denom,
          enabled: el0.enabled
        })),
        use_default_for
      };
    },
    fromAmino: ({
      authority,
      send_enabled,
      use_default_for
    }) => {
      return {
        authority,
        send_enabled: send_enabled.map(el0 => ({
          denom: el0.denom,
          enabled: el0.enabled
        })),
        use_default_for
      };
    }
  }
};