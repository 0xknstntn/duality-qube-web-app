import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/mint/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          mint_denom: params.mint_denom,
          inflation_rate_change: params.inflation_rate_change,
          inflation_max: params.inflation_max,
          inflation_min: params.inflation_min,
          goal_bonded: params.goal_bonded,
          blocks_per_year: params.blocks_per_year.toString()
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
          mint_denom: params.mint_denom,
          inflation_rate_change: params.inflation_rate_change,
          inflation_max: params.inflation_max,
          inflation_min: params.inflation_min,
          goal_bonded: params.goal_bonded,
          blocks_per_year: Long.fromString(params.blocks_per_year)
        }
      };
    }
  }
};