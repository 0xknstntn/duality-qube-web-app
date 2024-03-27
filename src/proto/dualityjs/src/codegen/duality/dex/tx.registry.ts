import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgDeposit, MsgWithdrawal, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/duality.dex.MsgDeposit', MsgDeposit], ['/duality.dex.MsgWithdrawal', MsgWithdrawal], ['/duality.dex.MsgPlaceLimitOrder', MsgPlaceLimitOrder], ['/duality.dex.MsgWithdrawFilledLimitOrder', MsgWithdrawFilledLimitOrder], ['/duality.dex.MsgCancelLimitOrder', MsgCancelLimitOrder], ['/duality.dex.MsgMultiHopSwap', MsgMultiHopSwap]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: '/duality.dex.MsgDeposit',
        value: MsgDeposit.encode(value).finish()
      };
    },
    withdrawal(value: MsgWithdrawal) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawal',
        value: MsgWithdrawal.encode(value).finish()
      };
    },
    placeLimitOrder(value: MsgPlaceLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgPlaceLimitOrder',
        value: MsgPlaceLimitOrder.encode(value).finish()
      };
    },
    withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawFilledLimitOrder',
        value: MsgWithdrawFilledLimitOrder.encode(value).finish()
      };
    },
    cancelLimitOrder(value: MsgCancelLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgCancelLimitOrder',
        value: MsgCancelLimitOrder.encode(value).finish()
      };
    },
    multiHopSwap(value: MsgMultiHopSwap) {
      return {
        typeUrl: '/duality.dex.MsgMultiHopSwap',
        value: MsgMultiHopSwap.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: '/duality.dex.MsgDeposit',
        value
      };
    },
    withdrawal(value: MsgWithdrawal) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawal',
        value
      };
    },
    placeLimitOrder(value: MsgPlaceLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgPlaceLimitOrder',
        value
      };
    },
    withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawFilledLimitOrder',
        value
      };
    },
    cancelLimitOrder(value: MsgCancelLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgCancelLimitOrder',
        value
      };
    },
    multiHopSwap(value: MsgMultiHopSwap) {
      return {
        typeUrl: '/duality.dex.MsgMultiHopSwap',
        value
      };
    }
  },
  fromJSON: {
    deposit(value: any) {
      return {
        typeUrl: '/duality.dex.MsgDeposit',
        value: MsgDeposit.fromJSON(value)
      };
    },
    withdrawal(value: any) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawal',
        value: MsgWithdrawal.fromJSON(value)
      };
    },
    placeLimitOrder(value: any) {
      return {
        typeUrl: '/duality.dex.MsgPlaceLimitOrder',
        value: MsgPlaceLimitOrder.fromJSON(value)
      };
    },
    withdrawFilledLimitOrder(value: any) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawFilledLimitOrder',
        value: MsgWithdrawFilledLimitOrder.fromJSON(value)
      };
    },
    cancelLimitOrder(value: any) {
      return {
        typeUrl: '/duality.dex.MsgCancelLimitOrder',
        value: MsgCancelLimitOrder.fromJSON(value)
      };
    },
    multiHopSwap(value: any) {
      return {
        typeUrl: '/duality.dex.MsgMultiHopSwap',
        value: MsgMultiHopSwap.fromJSON(value)
      };
    }
  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: '/duality.dex.MsgDeposit',
        value: MsgDeposit.fromPartial(value)
      };
    },
    withdrawal(value: MsgWithdrawal) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawal',
        value: MsgWithdrawal.fromPartial(value)
      };
    },
    placeLimitOrder(value: MsgPlaceLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgPlaceLimitOrder',
        value: MsgPlaceLimitOrder.fromPartial(value)
      };
    },
    withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgWithdrawFilledLimitOrder',
        value: MsgWithdrawFilledLimitOrder.fromPartial(value)
      };
    },
    cancelLimitOrder(value: MsgCancelLimitOrder) {
      return {
        typeUrl: '/duality.dex.MsgCancelLimitOrder',
        value: MsgCancelLimitOrder.fromPartial(value)
      };
    },
    multiHopSwap(value: MsgMultiHopSwap) {
      return {
        typeUrl: '/duality.dex.MsgMultiHopSwap',
        value: MsgMultiHopSwap.fromPartial(value)
      };
    }
  }
};