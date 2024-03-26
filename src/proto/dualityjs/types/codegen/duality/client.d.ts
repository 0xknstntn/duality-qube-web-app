import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const dualityAminoConverters: {
    "/duality.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over, pricing_tick }: import("./incentives/tx").MsgCreateGauge) => {
            is_perpetual: boolean;
            owner: string;
            distribute_to: {
                pairID: {
                    token0: string;
                    token1: string;
                };
                startTick: string;
                endTick: string;
            };
            coins: {
                denom: string;
                amount: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            num_epochs_paid_over: string;
            pricing_tick: string;
        };
        fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over, pricing_tick }: {
            is_perpetual: boolean;
            owner: string;
            distribute_to: {
                pairID: {
                    token0: string;
                    token1: string;
                };
                startTick: string;
                endTick: string;
            };
            coins: {
                denom: string;
                amount: string;
            }[];
            start_time: {
                seconds: string;
                nanos: number;
            };
            num_epochs_paid_over: string;
            pricing_tick: string;
        }) => import("./incentives/tx").MsgCreateGauge;
    };
    "/duality.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: ({ owner, gauge_id, rewards }: import("./incentives/tx").MsgAddToGauge) => {
            owner: string;
            gauge_id: string;
            rewards: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ owner, gauge_id, rewards }: {
            owner: string;
            gauge_id: string;
            rewards: {
                denom: string;
                amount: string;
            }[];
        }) => import("./incentives/tx").MsgAddToGauge;
    };
    "/duality.incentives.MsgStake": {
        aminoType: string;
        toAmino: ({ owner, coins }: import("./incentives/tx").MsgStake) => {
            owner: string;
            coins: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ owner, coins }: {
            owner: string;
            coins: {
                denom: string;
                amount: string;
            }[];
        }) => import("./incentives/tx").MsgStake;
    };
    "/duality.incentives.MsgUnstake": {
        aminoType: string;
        toAmino: ({ owner, unstakes }: import("./incentives/tx").MsgUnstake) => {
            owner: string;
            unstakes: {
                ID: string;
                coins: {
                    denom: string;
                    amount: string;
                }[];
            }[];
        };
        fromAmino: ({ owner, unstakes }: {
            owner: string;
            unstakes: {
                ID: string;
                coins: {
                    denom: string;
                    amount: string;
                }[];
            }[];
        }) => import("./incentives/tx").MsgUnstake;
    };
    "/duality.dex.MsgDeposit": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, Options }: import("./dex/tx").MsgDeposit) => {
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
        fromAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, Options }: {
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
        }) => import("./dex/tx").MsgDeposit;
    };
    "/duality.dex.MsgWithdrawal": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees }: import("./dex/tx").MsgWithdrawal) => {
            creator: string;
            receiver: string;
            tokenA: string;
            tokenB: string;
            sharesToRemove: string[];
            tickIndexesAToB: string[];
            fees: string[];
        };
        fromAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees }: {
            creator: string;
            receiver: string;
            tokenA: string;
            tokenB: string;
            sharesToRemove: string[];
            tickIndexesAToB: string[];
            fees: string[];
        }) => import("./dex/tx").MsgWithdrawal;
    };
    "/duality.dex.MsgPlaceLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut }: import("./dex/tx").MsgPlaceLimitOrder) => {
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
        fromAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut }: {
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
        }) => import("./dex/tx").MsgPlaceLimitOrder;
    };
    "/duality.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey }: import("./dex/tx").MsgWithdrawFilledLimitOrder) => {
            creator: string;
            trancheKey: string;
        };
        fromAmino: ({ creator, trancheKey }: {
            creator: string;
            trancheKey: string;
        }) => import("./dex/tx").MsgWithdrawFilledLimitOrder;
    };
    "/duality.dex.MsgCancelLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey }: import("./dex/tx").MsgCancelLimitOrder) => {
            creator: string;
            trancheKey: string;
        };
        fromAmino: ({ creator, trancheKey }: {
            creator: string;
            trancheKey: string;
        }) => import("./dex/tx").MsgCancelLimitOrder;
    };
    "/duality.dex.MsgMultiHopSwap": {
        aminoType: string;
        toAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute }: import("./dex/tx").MsgMultiHopSwap) => {
            creator: string;
            receiver: string;
            routes: {
                hops: string[];
            }[];
            amountIn: string;
            exitLimitPrice: string;
            pickBestRoute: boolean;
        };
        fromAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute }: {
            creator: string;
            receiver: string;
            routes: {
                hops: string[];
            }[];
            amountIn: string;
            exitLimitPrice: string;
            pickBestRoute: boolean;
        }) => import("./dex/tx").MsgMultiHopSwap;
    };
};
export declare const dualityProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningDualityClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningDualityClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
