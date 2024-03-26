import { MsgAuctionBid, MsgUpdateParams } from "./tx";
export const registry = [["/pob.builder.v1.MsgAuctionBid", MsgAuctionBid], ["/pob.builder.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: MsgAuctionBid.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: MsgAuctionBid.fromJSON(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: MsgAuctionBid.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};