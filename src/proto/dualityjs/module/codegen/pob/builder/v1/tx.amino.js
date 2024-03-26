import { Long } from "../../../helpers";
export const AminoConverter = {
  "/pob.builder.v1.MsgAuctionBid": {
    aminoType: "pob/x/builder/MsgAuctionBid",
    toAmino: ({
      bidder,
      bid,
      transactions
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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