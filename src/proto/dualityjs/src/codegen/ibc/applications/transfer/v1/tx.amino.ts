import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, Long, omitDefault } from "../../../../helpers";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export interface MsgTransferAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTransfer";
  value: {
    source_port: string;
    source_channel: string;
    token: {
      denom: string;
      amount: string;
    };
    sender: string;
    receiver: string;
    timeout_height: AminoHeight;
    timeout_timestamp: string;
    memo: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      allowed_clients: string[];
    };
  };
}
export const AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp,
      memo
    }: MsgTransfer): MsgTransferAminoType["value"] => {
      return {
        source_port,
        source_channel,
        token: {
          denom: token.denom,
          amount: Long.fromValue(token.amount).toString()
        },
        sender,
        receiver,
        timeout_height: timeout_height ? {
          revision_height: omitDefault(timeout_height.revisionHeight)?.toString(),
          revision_number: omitDefault(timeout_height.revisionNumber)?.toString()
        } : {},
        timeout_timestamp: timeout_timestamp.toString(),
        memo
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp,
      memo
    }: MsgTransferAminoType["value"]): MsgTransfer => {
      return {
        source_port,
        source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeout_height: timeout_height ? {
          revisionHeight: Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeout_timestamp: Long.fromString(timeout_timestamp),
        memo
      };
    }
  },
  "/ibc.applications.transfer.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          allowed_clients: params.allowed_clients
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
          allowed_clients: params.allowed_clients
        }
      };
    }
  }
};