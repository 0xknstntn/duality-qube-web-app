import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/mint/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      mint_denom: string;
      inflation_rate_change: string;
      inflation_max: string;
      inflation_min: string;
      goal_bonded: string;
      blocks_per_year: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/mint/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
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
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
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