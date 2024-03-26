import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export interface MsgUnjailAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUnjail";
  value: {
    validator_addr: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/slashing/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      signed_blocks_window: string;
      min_signed_per_window: Uint8Array;
      downtime_jail_duration: {
        seconds: string;
        nanos: number;
      };
      slash_fraction_double_sign: Uint8Array;
      slash_fraction_downtime: Uint8Array;
    };
  };
}
export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validator_addr
    }: MsgUnjail): MsgUnjailAminoType["value"] => {
      return {
        validator_addr
      };
    },
    fromAmino: ({
      validator_addr
    }: MsgUnjailAminoType["value"]): MsgUnjail => {
      return {
        validator_addr
      };
    }
  },
  "/cosmos.slashing.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/slashing/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          signed_blocks_window: params.signed_blocks_window.toString(),
          min_signed_per_window: params.min_signed_per_window,
          downtime_jail_duration: (params.downtime_jail_duration * 1_000_000_000).toString(),
          slash_fraction_double_sign: params.slash_fraction_double_sign,
          slash_fraction_downtime: params.slash_fraction_downtime
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
          signed_blocks_window: Long.fromString(params.signed_blocks_window),
          min_signed_per_window: params.min_signed_per_window,
          downtime_jail_duration: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.downtime_jail_duration) / 1_000_000_000)),
            nanos: parseInt(params.downtime_jail_duration) % 1_000_000_000
          },
          slash_fraction_double_sign: params.slash_fraction_double_sign,
          slash_fraction_downtime: params.slash_fraction_downtime
        }
      };
    }
  }
};