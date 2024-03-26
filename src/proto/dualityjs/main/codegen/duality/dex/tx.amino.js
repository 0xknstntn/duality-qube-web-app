"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../helpers");
var _tx = require("./tx");
//@ts-nocheck

var AminoConverter = {
  "/duality.dex.MsgDeposit": {
    aminoType: "/duality.dex.MsgDeposit",
    toAmino: function toAmino(_ref) {
      var creator = _ref.creator,
        receiver = _ref.receiver,
        tokenA = _ref.tokenA,
        tokenB = _ref.tokenB,
        amountsA = _ref.amountsA,
        amountsB = _ref.amountsB,
        tickIndexesAToB = _ref.tickIndexesAToB,
        fees = _ref.fees,
        Options = _ref.Options;
      return {
        creator: creator,
        receiver: receiver,
        tokenA: tokenA,
        tokenB: tokenB,
        amountsA: amountsA,
        amountsB: amountsB,
        tickIndexesAToB: tickIndexesAToB.map(function (el0) {
          return el0.toString();
        }),
        fees: fees.map(function (el0) {
          return el0.toString();
        }),
        Options: Options.map(function (el0) {
          return {
            disable_autoswap: el0.disable_autoswap
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var creator = _ref2.creator,
        receiver = _ref2.receiver,
        tokenA = _ref2.tokenA,
        tokenB = _ref2.tokenB,
        amountsA = _ref2.amountsA,
        amountsB = _ref2.amountsB,
        tickIndexesAToB = _ref2.tickIndexesAToB,
        fees = _ref2.fees,
        Options = _ref2.Options;
      return {
        creator: creator,
        receiver: receiver,
        tokenA: tokenA,
        tokenB: tokenB,
        amountsA: amountsA,
        amountsB: amountsB,
        tickIndexesAToB: tickIndexesAToB.map(function (el0) {
          return _helpers.Long.fromString(el0);
        }),
        fees: fees.map(function (el0) {
          return _helpers.Long.fromString(el0);
        }),
        Options: Options.map(function (el0) {
          return {
            disable_autoswap: el0.disable_autoswap
          };
        })
      };
    }
  },
  "/duality.dex.MsgWithdrawal": {
    aminoType: "/duality.dex.MsgWithdrawal",
    toAmino: function toAmino(_ref3) {
      var creator = _ref3.creator,
        receiver = _ref3.receiver,
        tokenA = _ref3.tokenA,
        tokenB = _ref3.tokenB,
        sharesToRemove = _ref3.sharesToRemove,
        tickIndexesAToB = _ref3.tickIndexesAToB,
        fees = _ref3.fees;
      return {
        creator: creator,
        receiver: receiver,
        tokenA: tokenA,
        tokenB: tokenB,
        sharesToRemove: sharesToRemove,
        tickIndexesAToB: tickIndexesAToB.map(function (el0) {
          return el0.toString();
        }),
        fees: fees.map(function (el0) {
          return el0.toString();
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var creator = _ref4.creator,
        receiver = _ref4.receiver,
        tokenA = _ref4.tokenA,
        tokenB = _ref4.tokenB,
        sharesToRemove = _ref4.sharesToRemove,
        tickIndexesAToB = _ref4.tickIndexesAToB,
        fees = _ref4.fees;
      return {
        creator: creator,
        receiver: receiver,
        tokenA: tokenA,
        tokenB: tokenB,
        sharesToRemove: sharesToRemove,
        tickIndexesAToB: tickIndexesAToB.map(function (el0) {
          return _helpers.Long.fromString(el0);
        }),
        fees: fees.map(function (el0) {
          return _helpers.Long.fromString(el0);
        })
      };
    }
  },
  "/duality.dex.MsgPlaceLimitOrder": {
    aminoType: "/duality.dex.MsgPlaceLimitOrder",
    toAmino: function toAmino(_ref5) {
      var creator = _ref5.creator,
        receiver = _ref5.receiver,
        tokenIn = _ref5.tokenIn,
        tokenOut = _ref5.tokenOut,
        tickIndexInToOut = _ref5.tickIndexInToOut,
        amountIn = _ref5.amountIn,
        orderType = _ref5.orderType,
        expirationTime = _ref5.expirationTime,
        maxAmountOut = _ref5.maxAmountOut;
      return {
        creator: creator,
        receiver: receiver,
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        tickIndexInToOut: tickIndexInToOut.toString(),
        amountIn: amountIn,
        orderType: orderType,
        expirationTime: expirationTime,
        maxAmountOut: maxAmountOut
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var creator = _ref6.creator,
        receiver = _ref6.receiver,
        tokenIn = _ref6.tokenIn,
        tokenOut = _ref6.tokenOut,
        tickIndexInToOut = _ref6.tickIndexInToOut,
        amountIn = _ref6.amountIn,
        orderType = _ref6.orderType,
        expirationTime = _ref6.expirationTime,
        maxAmountOut = _ref6.maxAmountOut;
      return {
        creator: creator,
        receiver: receiver,
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        tickIndexInToOut: _helpers.Long.fromString(tickIndexInToOut),
        amountIn: amountIn,
        orderType: (0, _tx.limitOrderTypeFromJSON)(orderType),
        expirationTime: expirationTime,
        maxAmountOut: maxAmountOut
      };
    }
  },
  "/duality.dex.MsgWithdrawFilledLimitOrder": {
    aminoType: "/duality.dex.MsgWithdrawFilledLimitOrder",
    toAmino: function toAmino(_ref7) {
      var creator = _ref7.creator,
        trancheKey = _ref7.trancheKey;
      return {
        creator: creator,
        trancheKey: trancheKey
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var creator = _ref8.creator,
        trancheKey = _ref8.trancheKey;
      return {
        creator: creator,
        trancheKey: trancheKey
      };
    }
  },
  "/duality.dex.MsgCancelLimitOrder": {
    aminoType: "/duality.dex.MsgCancelLimitOrder",
    toAmino: function toAmino(_ref9) {
      var creator = _ref9.creator,
        trancheKey = _ref9.trancheKey;
      return {
        creator: creator,
        trancheKey: trancheKey
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var creator = _ref10.creator,
        trancheKey = _ref10.trancheKey;
      return {
        creator: creator,
        trancheKey: trancheKey
      };
    }
  },
  "/duality.dex.MsgMultiHopSwap": {
    aminoType: "/duality.dex.MsgMultiHopSwap",
    toAmino: function toAmino(_ref11) {
      var creator = _ref11.creator,
        receiver = _ref11.receiver,
        routes = _ref11.routes,
        amountIn = _ref11.amountIn,
        exitLimitPrice = _ref11.exitLimitPrice,
        pickBestRoute = _ref11.pickBestRoute;
      return {
        creator: creator,
        receiver: receiver,
        routes: routes.map(function (el0) {
          return {
            hops: el0.hops
          };
        }),
        amountIn: amountIn,
        exitLimitPrice: exitLimitPrice,
        pickBestRoute: pickBestRoute
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var creator = _ref12.creator,
        receiver = _ref12.receiver,
        routes = _ref12.routes,
        amountIn = _ref12.amountIn,
        exitLimitPrice = _ref12.exitLimitPrice,
        pickBestRoute = _ref12.pickBestRoute;
      return {
        creator: creator,
        receiver: receiver,
        routes: routes.map(function (el0) {
          return {
            hops: el0.hops
          };
        }),
        amountIn: amountIn,
        exitLimitPrice: exitLimitPrice,
        pickBestRoute: pickBestRoute
      };
    }
  }
};
exports.AminoConverter = AminoConverter;