//@ts-nocheck

import { Long } from "../../helpers";
import { limitOrderTypeFromJSON } from "./tx";
export const AminoConverter = {
  "/duality.dex.MsgDeposit": {
    aminoType: "/duality.dex.MsgDeposit",
    toAmino: ({
      creator,
      receiver,
      tokenA,
      tokenB,
      amountsA,
      amountsB,
      tickIndexesAToB,
      fees,
      Options
    }) => {
      return {
        creator,
        receiver,
        tokenA,
        tokenB,
        amountsA,
        amountsB,
        tickIndexesAToB: tickIndexesAToB.map(el0 => el0.toString()),
        fees: fees.map(el0 => el0.toString()),
        Options: Options.map(el0 => ({
          disable_autoswap: el0.disable_autoswap
        }))
      };
    },
    fromAmino: ({
      creator,
      receiver,
      tokenA,
      tokenB,
      amountsA,
      amountsB,
      tickIndexesAToB,
      fees,
      Options
    }) => {
      return {
        creator,
        receiver,
        tokenA,
        tokenB,
        amountsA,
        amountsB,
        tickIndexesAToB: tickIndexesAToB.map(el0 => Long.fromString(el0)),
        fees: fees.map(el0 => Long.fromString(el0)),
        Options: Options.map(el0 => ({
          disable_autoswap: el0.disable_autoswap
        }))
      };
    }
  },
  "/duality.dex.MsgWithdrawal": {
    aminoType: "/duality.dex.MsgWithdrawal",
    toAmino: ({
      creator,
      receiver,
      tokenA,
      tokenB,
      sharesToRemove,
      tickIndexesAToB,
      fees
    }) => {
      return {
        creator,
        receiver,
        tokenA,
        tokenB,
        sharesToRemove,
        tickIndexesAToB: tickIndexesAToB.map(el0 => el0.toString()),
        fees: fees.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      creator,
      receiver,
      tokenA,
      tokenB,
      sharesToRemove,
      tickIndexesAToB,
      fees
    }) => {
      return {
        creator,
        receiver,
        tokenA,
        tokenB,
        sharesToRemove,
        tickIndexesAToB: tickIndexesAToB.map(el0 => Long.fromString(el0)),
        fees: fees.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/duality.dex.MsgPlaceLimitOrder": {
    aminoType: "/duality.dex.MsgPlaceLimitOrder",
    toAmino: ({
      creator,
      receiver,
      tokenIn,
      tokenOut,
      tickIndexInToOut,
      amountIn,
      orderType,
      expirationTime,
      maxAmountOut
    }) => {
      return {
        creator,
        receiver,
        tokenIn,
        tokenOut,
        tickIndexInToOut: tickIndexInToOut.toString(),
        amountIn,
        orderType,
        expirationTime,
        maxAmountOut
      };
    },
    fromAmino: ({
      creator,
      receiver,
      tokenIn,
      tokenOut,
      tickIndexInToOut,
      amountIn,
      orderType,
      expirationTime,
      maxAmountOut
    }) => {
      return {
        creator,
        receiver,
        tokenIn,
        tokenOut,
        tickIndexInToOut: Long.fromString(tickIndexInToOut),
        amountIn,
        orderType: limitOrderTypeFromJSON(orderType),
        expirationTime,
        maxAmountOut
      };
    }
  },
  "/duality.dex.MsgWithdrawFilledLimitOrder": {
    aminoType: "/duality.dex.MsgWithdrawFilledLimitOrder",
    toAmino: ({
      creator,
      trancheKey
    }) => {
      return {
        creator,
        trancheKey
      };
    },
    fromAmino: ({
      creator,
      trancheKey
    }) => {
      return {
        creator,
        trancheKey
      };
    }
  },
  "/duality.dex.MsgCancelLimitOrder": {
    aminoType: "/duality.dex.MsgCancelLimitOrder",
    toAmino: ({
      creator,
      trancheKey
    }) => {
      return {
        creator,
        trancheKey
      };
    },
    fromAmino: ({
      creator,
      trancheKey
    }) => {
      return {
        creator,
        trancheKey
      };
    }
  },
  "/duality.dex.MsgMultiHopSwap": {
    aminoType: "/duality.dex.MsgMultiHopSwap",
    toAmino: ({
      creator,
      receiver,
      routes,
      amountIn,
      exitLimitPrice,
      pickBestRoute
    }) => {
      return {
        creator,
        receiver,
        routes: routes.map(el0 => ({
          hops: el0.hops
        })),
        amountIn,
        exitLimitPrice,
        pickBestRoute
      };
    },
    fromAmino: ({
      creator,
      receiver,
      routes,
      amountIn,
      exitLimitPrice,
      pickBestRoute
    }) => {
      return {
        creator,
        receiver,
        routes: routes.map(el0 => ({
          hops: el0.hops
        })),
        amountIn,
        exitLimitPrice,
        pickBestRoute
      };
    }
  }
};