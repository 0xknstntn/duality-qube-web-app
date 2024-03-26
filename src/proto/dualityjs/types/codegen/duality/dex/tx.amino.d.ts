import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdrawal, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
    type: "/duality.dex.MsgDeposit";
    value: {
        creator: string;
        receiver: string;
        tokenA: string;
        tokenB: string;
        amountsA: string[];
        amountsB: string[];
        tickIndexesAToB: string[];
        fees: string[];
        Options: {
            disable_autoswap: boolean;
        }[];
    };
}
export interface MsgWithdrawalAminoType extends AminoMsg {
    type: "/duality.dex.MsgWithdrawal";
    value: {
        creator: string;
        receiver: string;
        tokenA: string;
        tokenB: string;
        sharesToRemove: string[];
        tickIndexesAToB: string[];
        fees: string[];
    };
}
export interface MsgPlaceLimitOrderAminoType extends AminoMsg {
    type: "/duality.dex.MsgPlaceLimitOrder";
    value: {
        creator: string;
        receiver: string;
        tokenIn: string;
        tokenOut: string;
        tickIndexInToOut: string;
        amountIn: string;
        orderType: number;
        expirationTime: {
            seconds: string;
            nanos: number;
        };
        maxAmountOut: string;
    };
}
export interface MsgWithdrawFilledLimitOrderAminoType extends AminoMsg {
    type: "/duality.dex.MsgWithdrawFilledLimitOrder";
    value: {
        creator: string;
        trancheKey: string;
    };
}
export interface MsgCancelLimitOrderAminoType extends AminoMsg {
    type: "/duality.dex.MsgCancelLimitOrder";
    value: {
        creator: string;
        trancheKey: string;
    };
}
export interface MsgMultiHopSwapAminoType extends AminoMsg {
    type: "/duality.dex.MsgMultiHopSwap";
    value: {
        creator: string;
        receiver: string;
        routes: {
            hops: string[];
        }[];
        amountIn: string;
        exitLimitPrice: string;
        pickBestRoute: boolean;
    };
}
export declare const AminoConverter: {
    "/duality.dex.MsgDeposit": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, Options }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, Options }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/duality.dex.MsgWithdrawal": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees }: MsgWithdrawal) => MsgWithdrawalAminoType["value"];
        fromAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees }: MsgWithdrawalAminoType["value"]) => MsgWithdrawal;
    };
    "/duality.dex.MsgPlaceLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut }: MsgPlaceLimitOrder) => MsgPlaceLimitOrderAminoType["value"];
        fromAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut }: MsgPlaceLimitOrderAminoType["value"]) => MsgPlaceLimitOrder;
    };
    "/duality.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey }: MsgWithdrawFilledLimitOrder) => MsgWithdrawFilledLimitOrderAminoType["value"];
        fromAmino: ({ creator, trancheKey }: MsgWithdrawFilledLimitOrderAminoType["value"]) => MsgWithdrawFilledLimitOrder;
    };
    "/duality.dex.MsgCancelLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey }: MsgCancelLimitOrder) => MsgCancelLimitOrderAminoType["value"];
        fromAmino: ({ creator, trancheKey }: MsgCancelLimitOrderAminoType["value"]) => MsgCancelLimitOrder;
    };
    "/duality.dex.MsgMultiHopSwap": {
        aminoType: string;
        toAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute }: MsgMultiHopSwap) => MsgMultiHopSwapAminoType["value"];
        fromAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute }: MsgMultiHopSwapAminoType["value"]) => MsgMultiHopSwap;
    };
};
