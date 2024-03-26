import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../../../helpers";
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
export declare const AminoConverter: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: MsgTransfer) => MsgTransferAminoType["value"];
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: MsgTransferAminoType["value"]) => MsgTransfer;
    };
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
