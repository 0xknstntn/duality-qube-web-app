import { AminoMsg } from "@cosmjs/amino";
import { MsgAuctionBid, MsgUpdateParams } from "./tx";
export interface MsgAuctionBidAminoType extends AminoMsg {
    type: "pob/x/builder/MsgAuctionBid";
    value: {
        bidder: string;
        bid: {
            denom: string;
            amount: string;
        };
        transactions: Uint8Array[];
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "pob/x/builder/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            max_bundle_size: number;
            escrow_account_address: string;
            reserve_fee: {
                denom: string;
                amount: string;
            };
            min_bid_increment: {
                denom: string;
                amount: string;
            };
            front_running_protection: boolean;
            proposer_fee: string;
        };
    };
}
export declare const AminoConverter: {
    "/pob.builder.v1.MsgAuctionBid": {
        aminoType: string;
        toAmino: ({ bidder, bid, transactions }: MsgAuctionBid) => MsgAuctionBidAminoType["value"];
        fromAmino: ({ bidder, bid, transactions }: MsgAuctionBidAminoType["value"]) => MsgAuctionBid;
    };
    "/pob.builder.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
