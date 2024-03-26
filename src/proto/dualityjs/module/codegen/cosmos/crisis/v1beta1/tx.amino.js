import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }) => {
      return {
        sender,
        invariant_module_name,
        invariant_route
      };
    },
    fromAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }) => {
      return {
        sender,
        invariant_module_name,
        invariant_route
      };
    }
  },
  "/cosmos.crisis.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
    toAmino: ({
      authority,
      constant_fee
    }) => {
      return {
        authority,
        constant_fee: {
          denom: constant_fee.denom,
          amount: Long.fromValue(constant_fee.amount).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      constant_fee
    }) => {
      return {
        authority,
        constant_fee: {
          denom: constant_fee.denom,
          amount: constant_fee.amount
        }
      };
    }
  }
};