import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBid {
    /**
     * bidder is the address of the account that is submitting a bid to the
     * auction.
     */
    bidder: string;
    /**
     * bid is the amount of coins that the bidder is bidding to participate in the
     * auction.
     */
    bid: Coin;
    /**
     * transactions are the bytes of the transactions that the bidder wants to
     * bundle together.
     */
    transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParams {
    /**
     * authority is the address of the account that is authorized to update the
     * x/builder module parameters.
     */
    authority: string;
    /** params is the new parameters for the x/builder module. */
    params: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgAuctionBid: {
    encode(message: MsgAuctionBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBid;
    fromJSON(object: any): MsgAuctionBid;
    fromPartial(object: DeepPartial<MsgAuctionBid>): MsgAuctionBid;
};
export declare const MsgAuctionBidResponse: {
    encode(_: MsgAuctionBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBidResponse;
    fromJSON(_: any): MsgAuctionBidResponse;
    fromPartial(_: DeepPartial<MsgAuctionBidResponse>): MsgAuctionBidResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
