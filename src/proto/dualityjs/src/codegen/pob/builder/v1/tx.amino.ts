import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/pob.builder.v1.MsgAuctionBid": {
    aminoType: "pob/x/builder/MsgAuctionBid",
    toAmino: ({
      bidder,
      bid,
      transactions
    }: MsgAuctionBid): MsgAuctionBidAminoType["value"] => {
      return {
        bidder,
        bid: {
          denom: bid.denom,
          amount: Long.fromValue(bid.amount).toString()
        },
        transactions
      };
    },
    fromAmino: ({
      bidder,
      bid,
      transactions
    }: MsgAuctionBidAminoType["value"]): MsgAuctionBid => {
      return {
        bidder,
        bid: {
          denom: bid.denom,
          amount: bid.amount
        },
        transactions
      };
    }
  },
  "/pob.builder.v1.MsgUpdateParams": {
    aminoType: "pob/x/builder/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          max_bundle_size: params.max_bundle_size,
          escrow_account_address: params.escrow_account_address,
          reserve_fee: {
            denom: params.reserve_fee.denom,
            amount: Long.fromValue(params.reserve_fee.amount).toString()
          },
          min_bid_increment: {
            denom: params.min_bid_increment.denom,
            amount: Long.fromValue(params.min_bid_increment.amount).toString()
          },
          front_running_protection: params.front_running_protection,
          proposer_fee: params.proposer_fee
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
          max_bundle_size: params.max_bundle_size,
          escrow_account_address: params.escrow_account_address,
          reserve_fee: {
            denom: params.reserve_fee.denom,
            amount: params.reserve_fee.amount
          },
          min_bid_increment: {
            denom: params.min_bid_increment.denom,
            amount: params.min_bid_increment.amount
          },
          front_running_protection: params.front_running_protection,
          proposer_fee: params.proposer_fee
        }
      };
    }
  }
};