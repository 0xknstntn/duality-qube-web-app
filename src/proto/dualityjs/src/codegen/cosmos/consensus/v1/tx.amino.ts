import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    authority: string;
    block: {
      max_bytes: string;
      max_gas: string;
    };
    evidence: {
      max_age_num_blocks: string;
      max_age_duration: {
        seconds: string;
        nanos: number;
      };
      max_bytes: string;
    };
    validator: {
      pub_key_types: string[];
    };
  };
}
export const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      block,
      evidence,
      validator
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        block: {
          max_bytes: block.max_bytes.toString(),
          max_gas: block.max_gas.toString()
        },
        evidence: {
          max_age_num_blocks: evidence.max_age_num_blocks.toString(),
          max_age_duration: (evidence.max_age_duration * 1_000_000_000).toString(),
          max_bytes: evidence.max_bytes.toString()
        },
        validator: {
          pub_key_types: validator.pub_key_types
        }
      };
    },
    fromAmino: ({
      authority,
      block,
      evidence,
      validator
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        block: {
          max_bytes: Long.fromString(block.max_bytes),
          max_gas: Long.fromString(block.max_gas)
        },
        evidence: {
          max_age_num_blocks: Long.fromString(evidence.max_age_num_blocks),
          max_age_duration: {
            seconds: Long.fromNumber(Math.floor(parseInt(evidence.max_age_duration) / 1_000_000_000)),
            nanos: parseInt(evidence.max_age_duration) % 1_000_000_000
          },
          max_bytes: Long.fromString(evidence.max_bytes)
        },
        validator: {
          pub_key_types: validator.pub_key_types
        }
      };
    }
  }
};