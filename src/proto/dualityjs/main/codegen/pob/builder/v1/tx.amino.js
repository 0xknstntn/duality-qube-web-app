"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/pob.builder.v1.MsgAuctionBid": {
    aminoType: "pob/x/builder/MsgAuctionBid",
    toAmino: function toAmino(_ref) {
      var bidder = _ref.bidder,
        bid = _ref.bid,
        transactions = _ref.transactions;
      return {
        bidder: bidder,
        bid: {
          denom: bid.denom,
          amount: _helpers.Long.fromValue(bid.amount).toString()
        },
        transactions: transactions
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var bidder = _ref2.bidder,
        bid = _ref2.bid,
        transactions = _ref2.transactions;
      return {
        bidder: bidder,
        bid: {
          denom: bid.denom,
          amount: bid.amount
        },
        transactions: transactions
      };
    }
  },
  "/pob.builder.v1.MsgUpdateParams": {
    aminoType: "pob/x/builder/MsgUpdateParams",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority,
        params = _ref3.params;
      return {
        authority: authority,
        params: {
          max_bundle_size: params.max_bundle_size,
          escrow_account_address: params.escrow_account_address,
          reserve_fee: {
            denom: params.reserve_fee.denom,
            amount: _helpers.Long.fromValue(params.reserve_fee.amount).toString()
          },
          min_bid_increment: {
            denom: params.min_bid_increment.denom,
            amount: _helpers.Long.fromValue(params.min_bid_increment.amount).toString()
          },
          front_running_protection: params.front_running_protection,
          proposer_fee: params.proposer_fee
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority,
        params = _ref4.params;
      return {
        authority: authority,
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
exports.AminoConverter = AminoConverter;