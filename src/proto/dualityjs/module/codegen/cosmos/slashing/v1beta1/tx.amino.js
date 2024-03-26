import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validator_addr
    }) => {
      return {
        validator_addr
      };
    },
    fromAmino: ({
      validator_addr
    }) => {
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
    }) => {
      return {
        authority,
        params: {
          signed_blocks_window: params.signed_blocks_window.toString(),
          min_signed_per_window: params.min_signed_per_window,
          downtime_jail_duration: (params.downtime_jail_duration * 1000000000).toString(),
          slash_fraction_double_sign: params.slash_fraction_double_sign,
          slash_fraction_downtime: params.slash_fraction_downtime
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
          signed_blocks_window: Long.fromString(params.signed_blocks_window),
          min_signed_per_window: params.min_signed_per_window,
          downtime_jail_duration: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.downtime_jail_duration) / 1000000000)),
            nanos: parseInt(params.downtime_jail_duration) % 1000000000
          },
          slash_fraction_double_sign: params.slash_fraction_double_sign,
          slash_fraction_downtime: params.slash_fraction_downtime
        }
      };
    }
  }
};