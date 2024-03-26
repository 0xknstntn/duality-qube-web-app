import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      block,
      evidence,
      validator
    }) => {
      return {
        authority,
        block: {
          max_bytes: block.max_bytes.toString(),
          max_gas: block.max_gas.toString()
        },
        evidence: {
          max_age_num_blocks: evidence.max_age_num_blocks.toString(),
          max_age_duration: (evidence.max_age_duration * 1000000000).toString(),
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
    }) => {
      return {
        authority,
        block: {
          max_bytes: Long.fromString(block.max_bytes),
          max_gas: Long.fromString(block.max_gas)
        },
        evidence: {
          max_age_num_blocks: Long.fromString(evidence.max_age_num_blocks),
          max_age_duration: {
            seconds: Long.fromNumber(Math.floor(parseInt(evidence.max_age_duration) / 1000000000)),
            nanos: parseInt(evidence.max_age_duration) % 1000000000
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