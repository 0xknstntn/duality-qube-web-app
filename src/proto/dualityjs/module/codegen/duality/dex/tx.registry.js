import { MsgDeposit, MsgWithdrawal, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap } from "./tx";
export const registry = [["/duality.dex.MsgDeposit", MsgDeposit], ["/duality.dex.MsgWithdrawal", MsgWithdrawal], ["/duality.dex.MsgPlaceLimitOrder", MsgPlaceLimitOrder], ["/duality.dex.MsgWithdrawFilledLimitOrder", MsgWithdrawFilledLimitOrder], ["/duality.dex.MsgCancelLimitOrder", MsgCancelLimitOrder], ["/duality.dex.MsgMultiHopSwap", MsgMultiHopSwap]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: MsgWithdrawal.encode(value).finish()
      };
    },
    placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: MsgPlaceLimitOrder.encode(value).finish()
      };
    },
    withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: MsgWithdrawFilledLimitOrder.encode(value).finish()
      };
    },
    cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: MsgCancelLimitOrder.encode(value).finish()
      };
    },
    multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: MsgMultiHopSwap.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value
      };
    },
    withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value
      };
    },
    placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value
      };
    },
    withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value
      };
    },
    cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value
      };
    },
    multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value
      };
    }
  },
  fromJSON: {
    deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: MsgWithdrawal.fromJSON(value)
      };
    },
    placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: MsgPlaceLimitOrder.fromJSON(value)
      };
    },
    withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: MsgWithdrawFilledLimitOrder.fromJSON(value)
      };
    },
    cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: MsgCancelLimitOrder.fromJSON(value)
      };
    },
    multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: MsgMultiHopSwap.fromJSON(value)
      };
    }
  },
  fromPartial: {
    deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: MsgWithdrawal.fromPartial(value)
      };
    },
    placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: MsgPlaceLimitOrder.fromPartial(value)
      };
    },
    withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: MsgWithdrawFilledLimitOrder.fromPartial(value)
      };
    },
    cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: MsgCancelLimitOrder.fromPartial(value)
      };
    },
    multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: MsgMultiHopSwap.fromPartial(value)
      };
    }
  }
};