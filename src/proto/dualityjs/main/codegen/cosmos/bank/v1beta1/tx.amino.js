"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: function toAmino(_ref) {
      var from_address = _ref.from_address,
        to_address = _ref.to_address,
        amount = _ref.amount;
      return {
        from_address: from_address,
        to_address: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var from_address = _ref2.from_address,
        to_address = _ref2.to_address,
        amount = _ref2.amount;
      return {
        from_address: from_address,
        to_address: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgMultiSend": {
    aminoType: "cosmos-sdk/MsgMultiSend",
    toAmino: function toAmino(_ref3) {
      var inputs = _ref3.inputs,
        outputs = _ref3.outputs;
      return {
        inputs: inputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        }),
        outputs: outputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var inputs = _ref4.inputs,
        outputs = _ref4.outputs;
      return {
        inputs: inputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        }),
        outputs: outputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/bank/MsgUpdateParams",
    toAmino: function toAmino(_ref5) {
      var authority = _ref5.authority,
        params = _ref5.params;
      return {
        authority: authority,
        params: {
          send_enabled: params.send_enabled.map(function (el0) {
            return {
              denom: el0.denom,
              enabled: el0.enabled
            };
          }),
          default_send_enabled: params.default_send_enabled
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var authority = _ref6.authority,
        params = _ref6.params;
      return {
        authority: authority,
        params: {
          send_enabled: params.send_enabled.map(function (el1) {
            return {
              denom: el1.denom,
              enabled: el1.enabled
            };
          }),
          default_send_enabled: params.default_send_enabled
        }
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
    aminoType: "cosmos-sdk/MsgSetSendEnabled",
    toAmino: function toAmino(_ref7) {
      var authority = _ref7.authority,
        send_enabled = _ref7.send_enabled,
        use_default_for = _ref7.use_default_for;
      return {
        authority: authority,
        send_enabled: send_enabled.map(function (el0) {
          return {
            denom: el0.denom,
            enabled: el0.enabled
          };
        }),
        use_default_for: use_default_for
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var authority = _ref8.authority,
        send_enabled = _ref8.send_enabled,
        use_default_for = _ref8.use_default_for;
      return {
        authority: authority,
        send_enabled: send_enabled.map(function (el0) {
          return {
            denom: el0.denom,
            enabled: el0.enabled
          };
        }),
        use_default_for: use_default_for
      };
    }
  }
};
exports.AminoConverter = AminoConverter;