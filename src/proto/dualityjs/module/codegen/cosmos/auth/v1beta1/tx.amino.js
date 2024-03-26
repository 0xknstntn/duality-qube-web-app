import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.auth.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/auth/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          max_memo_characters: params.max_memo_characters.toString(),
          tx_sig_limit: params.tx_sig_limit.toString(),
          tx_size_cost_per_byte: params.tx_size_cost_per_byte.toString(),
          sig_verify_cost_ed25519: params.sig_verify_cost_ed25519.toString(),
          sig_verify_cost_secp256k1: params.sig_verify_cost_secp256k1.toString()
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
          max_memo_characters: Long.fromString(params.max_memo_characters),
          tx_sig_limit: Long.fromString(params.tx_sig_limit),
          tx_size_cost_per_byte: Long.fromString(params.tx_size_cost_per_byte),
          sig_verify_cost_ed25519: Long.fromString(params.sig_verify_cost_ed25519),
          sig_verify_cost_secp256k1: Long.fromString(params.sig_verify_cost_secp256k1)
        }
      };
    }
  }
};