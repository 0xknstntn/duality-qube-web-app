import * as _116 from "./dex/deposit_record";
import * as _117 from "./dex/genesis";
import * as _118 from "./dex/limit_order_expiration";
import * as _119 from "./dex/limit_order_tranche_user";
import * as _120 from "./dex/limit_order_tranche";
import * as _121 from "./dex/pair_id";
import * as _122 from "./dex/params";
import * as _123 from "./dex/pool_metadata";
import * as _124 from "./dex/pool_reserves";
import * as _125 from "./dex/pool";
import * as _126 from "./dex/query";
import * as _127 from "./dex/tick_liquidity";
import * as _128 from "./dex/trade_pair_id";
import * as _129 from "./dex/tx";
import * as _130 from "./epochs/genesis";
import * as _131 from "./epochs/query";
import * as _132 from "./incentives/account_history";
import * as _133 from "./incentives/gauge";
import * as _134 from "./incentives/genesis";
import * as _135 from "./incentives/params";
import * as _136 from "./incentives/query";
import * as _137 from "./incentives/stake";
import * as _138 from "./incentives/tx";
import * as _289 from "./dex/query.lcd";
import * as _290 from "./epochs/query.lcd";
import * as _291 from "./incentives/query.lcd";
import * as _292 from "./dex/query.rpc.Query";
import * as _293 from "./epochs/query.rpc.Query";
import * as _294 from "./incentives/query.rpc.Query";
import * as _295 from "./dex/tx.rpc.msg";
import * as _296 from "./incentives/tx.rpc.msg";
export declare namespace duality {
    const dex: {
        MsgClientImpl: typeof _295.MsgClientImpl;
        QueryClientImpl: typeof _292.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
            limitOrderTrancheUser(request: _126.QueryGetLimitOrderTrancheUserRequest): Promise<_126.QueryGetLimitOrderTrancheUserResponse>;
            limitOrderTrancheUserAll(request?: _126.QueryAllLimitOrderTrancheUserRequest): Promise<_126.QueryAllLimitOrderTrancheUserResponse>;
            limitOrderTrancheUserAllByAddress(request: _126.QueryAllUserLimitOrdersRequest): Promise<_126.QueryAllUserLimitOrdersResponse>;
            limitOrderTranche(request: _126.QueryGetLimitOrderTrancheRequest): Promise<_126.QueryGetLimitOrderTrancheResponse>;
            limitOrderTrancheAll(request: _126.QueryAllLimitOrderTrancheRequest): Promise<_126.QueryAllLimitOrderTrancheResponse>;
            userDepositsAll(request: _126.QueryAllUserDepositsRequest): Promise<_126.QueryAllUserDepositsResponse>;
            tickLiquidityAll(request: _126.QueryAllTickLiquidityRequest): Promise<_126.QueryAllTickLiquidityResponse>;
            inactiveLimitOrderTranche(request: _126.QueryGetInactiveLimitOrderTrancheRequest): Promise<_126.QueryGetInactiveLimitOrderTrancheResponse>;
            inactiveLimitOrderTrancheAll(request?: _126.QueryAllInactiveLimitOrderTrancheRequest): Promise<_126.QueryAllInactiveLimitOrderTrancheResponse>;
            poolReservesAll(request: _126.QueryAllPoolReservesRequest): Promise<_126.QueryAllPoolReservesResponse>;
            poolReserves(request: _126.QueryGetPoolReservesRequest): Promise<_126.QueryGetPoolReservesResponse>;
            estimateMultiHopSwap(request: _126.QueryEstimateMultiHopSwapRequest): Promise<_126.QueryEstimateMultiHopSwapResponse>;
            estimatePlaceLimitOrder(request: _126.QueryEstimatePlaceLimitOrderRequest): Promise<_126.QueryEstimatePlaceLimitOrderResponse>;
            pool(request: _126.QueryPoolRequest): Promise<_126.QueryPoolResponse>;
            poolByID(request: _126.QueryPoolByIDRequest): Promise<_126.QueryPoolResponse>;
            poolMetadata(request: _126.QueryGetPoolMetadataRequest): Promise<_126.QueryGetPoolMetadataResponse>;
            poolMetadataAll(request?: _126.QueryAllPoolMetadataRequest): Promise<_126.QueryAllPoolMetadataResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useParams: <TData = _126.QueryParamsResponse>({ request, options }: _292.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            useLimitOrderTrancheUser: <TData_1 = _126.QueryGetLimitOrderTrancheUserResponse>({ request, options }: _292.UseLimitOrderTrancheUserQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            useLimitOrderTrancheUserAll: <TData_2 = _126.QueryAllLimitOrderTrancheUserResponse>({ request, options }: _292.UseLimitOrderTrancheUserAllQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            useLimitOrderTrancheUserAllByAddress: <TData_3 = _126.QueryAllUserLimitOrdersResponse>({ request, options }: _292.UseLimitOrderTrancheUserAllByAddressQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            useLimitOrderTranche: <TData_4 = _126.QueryGetLimitOrderTrancheResponse>({ request, options }: _292.UseLimitOrderTrancheQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            useLimitOrderTrancheAll: <TData_5 = _126.QueryAllLimitOrderTrancheResponse>({ request, options }: _292.UseLimitOrderTrancheAllQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
            useUserDepositsAll: <TData_6 = _126.QueryAllUserDepositsResponse>({ request, options }: _292.UseUserDepositsAllQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            useTickLiquidityAll: <TData_7 = _126.QueryAllTickLiquidityResponse>({ request, options }: _292.UseTickLiquidityAllQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            useInactiveLimitOrderTranche: <TData_8 = _126.QueryGetInactiveLimitOrderTrancheResponse>({ request, options }: _292.UseInactiveLimitOrderTrancheQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
            useInactiveLimitOrderTrancheAll: <TData_9 = _126.QueryAllInactiveLimitOrderTrancheResponse>({ request, options }: _292.UseInactiveLimitOrderTrancheAllQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
            usePoolReservesAll: <TData_10 = _126.QueryAllPoolReservesResponse>({ request, options }: _292.UsePoolReservesAllQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            usePoolReserves: <TData_11 = _126.QueryGetPoolReservesResponse>({ request, options }: _292.UsePoolReservesQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
            useEstimateMultiHopSwap: <TData_12 = _126.QueryEstimateMultiHopSwapResponse>({ request, options }: _292.UseEstimateMultiHopSwapQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
            useEstimatePlaceLimitOrder: <TData_13 = _126.QueryEstimatePlaceLimitOrderResponse>({ request, options }: _292.UseEstimatePlaceLimitOrderQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
            usePool: <TData_14 = _126.QueryPoolResponse>({ request, options }: _292.UsePoolQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
            usePoolByID: <TData_15 = _126.QueryPoolResponse>({ request, options }: _292.UsePoolByIDQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
            usePoolMetadata: <TData_16 = _126.QueryGetPoolMetadataResponse>({ request, options }: _292.UsePoolMetadataQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
            usePoolMetadataAll: <TData_17 = _126.QueryAllPoolMetadataResponse>({ request, options }: _292.UsePoolMetadataAllQuery<TData_17>) => import("@tanstack/react-query").UseQueryResult<TData_17, Error>;
        };
        LCDQueryClient: typeof _289.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                deposit(value: _129.MsgDeposit): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                withdrawal(value: _129.MsgWithdrawal): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                placeLimitOrder(value: _129.MsgPlaceLimitOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                withdrawFilledLimitOrder(value: _129.MsgWithdrawFilledLimitOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelLimitOrder(value: _129.MsgCancelLimitOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                multiHopSwap(value: _129.MsgMultiHopSwap): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                deposit(value: _129.MsgDeposit): {
                    typeUrl: string;
                    value: _129.MsgDeposit;
                };
                withdrawal(value: _129.MsgWithdrawal): {
                    typeUrl: string;
                    value: _129.MsgWithdrawal;
                };
                placeLimitOrder(value: _129.MsgPlaceLimitOrder): {
                    typeUrl: string;
                    value: _129.MsgPlaceLimitOrder;
                };
                withdrawFilledLimitOrder(value: _129.MsgWithdrawFilledLimitOrder): {
                    typeUrl: string;
                    value: _129.MsgWithdrawFilledLimitOrder;
                };
                cancelLimitOrder(value: _129.MsgCancelLimitOrder): {
                    typeUrl: string;
                    value: _129.MsgCancelLimitOrder;
                };
                multiHopSwap(value: _129.MsgMultiHopSwap): {
                    typeUrl: string;
                    value: _129.MsgMultiHopSwap;
                };
            };
            fromJSON: {
                deposit(value: any): {
                    typeUrl: string;
                    value: _129.MsgDeposit;
                };
                withdrawal(value: any): {
                    typeUrl: string;
                    value: _129.MsgWithdrawal;
                };
                placeLimitOrder(value: any): {
                    typeUrl: string;
                    value: _129.MsgPlaceLimitOrder;
                };
                withdrawFilledLimitOrder(value: any): {
                    typeUrl: string;
                    value: _129.MsgWithdrawFilledLimitOrder;
                };
                cancelLimitOrder(value: any): {
                    typeUrl: string;
                    value: _129.MsgCancelLimitOrder;
                };
                multiHopSwap(value: any): {
                    typeUrl: string;
                    value: _129.MsgMultiHopSwap;
                };
            };
            fromPartial: {
                deposit(value: _129.MsgDeposit): {
                    typeUrl: string;
                    value: _129.MsgDeposit;
                };
                withdrawal(value: _129.MsgWithdrawal): {
                    typeUrl: string;
                    value: _129.MsgWithdrawal;
                };
                placeLimitOrder(value: _129.MsgPlaceLimitOrder): {
                    typeUrl: string;
                    value: _129.MsgPlaceLimitOrder;
                };
                withdrawFilledLimitOrder(value: _129.MsgWithdrawFilledLimitOrder): {
                    typeUrl: string;
                    value: _129.MsgWithdrawFilledLimitOrder;
                };
                cancelLimitOrder(value: _129.MsgCancelLimitOrder): {
                    typeUrl: string;
                    value: _129.MsgCancelLimitOrder;
                };
                multiHopSwap(value: _129.MsgMultiHopSwap): {
                    typeUrl: string;
                    value: _129.MsgMultiHopSwap;
                };
            };
        };
        AminoConverter: {
            "/duality.dex.MsgDeposit": {
                aminoType: string;
                toAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, Options }: _129.MsgDeposit) => {
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
                }) => _129.MsgDeposit;
            };
            "/duality.dex.MsgWithdrawal": {
                aminoType: string;
                toAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees }: _129.MsgWithdrawal) => {
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
                }) => _129.MsgWithdrawal;
            };
            "/duality.dex.MsgPlaceLimitOrder": {
                aminoType: string;
                toAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut }: _129.MsgPlaceLimitOrder) => {
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
                }) => _129.MsgPlaceLimitOrder;
            };
            "/duality.dex.MsgWithdrawFilledLimitOrder": {
                aminoType: string;
                toAmino: ({ creator, trancheKey }: _129.MsgWithdrawFilledLimitOrder) => {
                    creator: string;
                    trancheKey: string;
                };
                fromAmino: ({ creator, trancheKey }: {
                    creator: string;
                    trancheKey: string;
                }) => _129.MsgWithdrawFilledLimitOrder;
            };
            "/duality.dex.MsgCancelLimitOrder": {
                aminoType: string;
                toAmino: ({ creator, trancheKey }: _129.MsgCancelLimitOrder) => {
                    creator: string;
                    trancheKey: string;
                };
                fromAmino: ({ creator, trancheKey }: {
                    creator: string;
                    trancheKey: string;
                }) => _129.MsgCancelLimitOrder;
            };
            "/duality.dex.MsgMultiHopSwap": {
                aminoType: string;
                toAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute }: _129.MsgMultiHopSwap) => {
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
                }) => _129.MsgMultiHopSwap;
            };
        };
        limitOrderTypeFromJSON(object: any): _129.LimitOrderType;
        limitOrderTypeToJSON(object: _129.LimitOrderType): string;
        LimitOrderType: typeof _129.LimitOrderType;
        DepositOptions: {
            encode(message: _129.DepositOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.DepositOptions;
            fromJSON(object: any): _129.DepositOptions;
            fromPartial(object: {
                disable_autoswap?: boolean;
            }): _129.DepositOptions;
        };
        MsgDeposit: {
            encode(message: _129.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgDeposit;
            fromJSON(object: any): _129.MsgDeposit;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                tokenA?: string;
                tokenB?: string;
                amountsA?: string[];
                amountsB?: string[];
                tickIndexesAToB?: (string | number | import("long").default)[];
                fees?: (string | number | import("long").default)[];
                Options?: {
                    disable_autoswap?: boolean;
                }[];
            }): _129.MsgDeposit;
        };
        MsgDepositResponse: {
            encode(message: _129.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgDepositResponse;
            fromJSON(object: any): _129.MsgDepositResponse;
            fromPartial(object: {
                Reserve0Deposited?: string[];
                Reserve1Deposited?: string[];
            }): _129.MsgDepositResponse;
        };
        MsgWithdrawal: {
            encode(message: _129.MsgWithdrawal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawal;
            fromJSON(object: any): _129.MsgWithdrawal;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                tokenA?: string;
                tokenB?: string;
                sharesToRemove?: string[];
                tickIndexesAToB?: (string | number | import("long").default)[];
                fees?: (string | number | import("long").default)[];
            }): _129.MsgWithdrawal;
        };
        MsgWithdrawalResponse: {
            encode(_: _129.MsgWithdrawalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawalResponse;
            fromJSON(_: any): _129.MsgWithdrawalResponse;
            fromPartial(_: {}): _129.MsgWithdrawalResponse;
        };
        MsgPlaceLimitOrder: {
            encode(message: _129.MsgPlaceLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgPlaceLimitOrder;
            fromJSON(object: any): _129.MsgPlaceLimitOrder;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                tokenIn?: string;
                tokenOut?: string;
                tickIndexInToOut?: string | number | import("long").default;
                amountIn?: string;
                orderType?: _129.LimitOrderType;
                expirationTime?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                maxAmountOut?: string;
            }): _129.MsgPlaceLimitOrder;
        };
        MsgPlaceLimitOrderResponse: {
            encode(message: _129.MsgPlaceLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgPlaceLimitOrderResponse;
            fromJSON(object: any): _129.MsgPlaceLimitOrderResponse;
            fromPartial(object: {
                trancheKey?: string;
                coinIn?: {
                    denom?: string;
                    amount?: string;
                };
                takerCoinOut?: {
                    denom?: string;
                    amount?: string;
                };
            }): _129.MsgPlaceLimitOrderResponse;
        };
        MsgWithdrawFilledLimitOrder: {
            encode(message: _129.MsgWithdrawFilledLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawFilledLimitOrder;
            fromJSON(object: any): _129.MsgWithdrawFilledLimitOrder;
            fromPartial(object: {
                creator?: string;
                trancheKey?: string;
            }): _129.MsgWithdrawFilledLimitOrder;
        };
        MsgWithdrawFilledLimitOrderResponse: {
            encode(_: _129.MsgWithdrawFilledLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawFilledLimitOrderResponse;
            fromJSON(_: any): _129.MsgWithdrawFilledLimitOrderResponse;
            fromPartial(_: {}): _129.MsgWithdrawFilledLimitOrderResponse;
        };
        MsgCancelLimitOrder: {
            encode(message: _129.MsgCancelLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCancelLimitOrder;
            fromJSON(object: any): _129.MsgCancelLimitOrder;
            fromPartial(object: {
                creator?: string;
                trancheKey?: string;
            }): _129.MsgCancelLimitOrder;
        };
        MsgCancelLimitOrderResponse: {
            encode(_: _129.MsgCancelLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCancelLimitOrderResponse;
            fromJSON(_: any): _129.MsgCancelLimitOrderResponse;
            fromPartial(_: {}): _129.MsgCancelLimitOrderResponse;
        };
        MultiHopRoute: {
            encode(message: _129.MultiHopRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MultiHopRoute;
            fromJSON(object: any): _129.MultiHopRoute;
            fromPartial(object: {
                hops?: string[];
            }): _129.MultiHopRoute;
        };
        MsgMultiHopSwap: {
            encode(message: _129.MsgMultiHopSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMultiHopSwap;
            fromJSON(object: any): _129.MsgMultiHopSwap;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                routes?: {
                    hops?: string[];
                }[];
                amountIn?: string;
                exitLimitPrice?: string;
                pickBestRoute?: boolean;
            }): _129.MsgMultiHopSwap;
        };
        MsgMultiHopSwapResponse: {
            encode(message: _129.MsgMultiHopSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMultiHopSwapResponse;
            fromJSON(object: any): _129.MsgMultiHopSwapResponse;
            fromPartial(object: {
                coinOut?: {
                    denom?: string;
                    amount?: string;
                };
            }): _129.MsgMultiHopSwapResponse;
        };
        TradePairID: {
            encode(message: _128.TradePairID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.TradePairID;
            fromJSON(object: any): _128.TradePairID;
            fromPartial(object: {
                makerDenom?: string;
                takerDenom?: string;
            }): _128.TradePairID;
        };
        TickLiquidity: {
            encode(message: _127.TickLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.TickLiquidity;
            fromJSON(object: any): _127.TickLiquidity;
            fromPartial(object: {
                poolReserves?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        TickIndexTakerToMaker?: string | number | import("long").default;
                        Fee?: string | number | import("long").default;
                    };
                    reservesMakerDenom?: string;
                    priceTakerToMaker?: string;
                    priceOppositeTakerToMaker?: string;
                };
                limitOrderTranche?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        tickIndexTakerToMaker?: string | number | import("long").default;
                        trancheKey?: string;
                    };
                    reservesMakerDenom?: string;
                    reservesTakerDenom?: string;
                    totalMakerDenom?: string;
                    totalTakerDenom?: string;
                    expirationTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    priceTakerToMaker?: string;
                };
            }): _127.TickLiquidity;
        };
        QueryParamsRequest: {
            encode(_: _126.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryParamsRequest;
            fromJSON(_: any): _126.QueryParamsRequest;
            fromPartial(_: {}): _126.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _126.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryParamsResponse;
            fromJSON(object: any): _126.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    fee_tiers?: (string | number | import("long").default)[];
                };
            }): _126.QueryParamsResponse;
        };
        QueryGetLimitOrderTrancheUserRequest: {
            encode(message: _126.QueryGetLimitOrderTrancheUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetLimitOrderTrancheUserRequest;
            fromJSON(object: any): _126.QueryGetLimitOrderTrancheUserRequest;
            fromPartial(object: {
                address?: string;
                trancheKey?: string;
            }): _126.QueryGetLimitOrderTrancheUserRequest;
        };
        QueryGetLimitOrderTrancheUserResponse: {
            encode(message: _126.QueryGetLimitOrderTrancheUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetLimitOrderTrancheUserResponse;
            fromJSON(object: any): _126.QueryGetLimitOrderTrancheUserResponse;
            fromPartial(object: {
                LimitOrderTrancheUser?: {
                    tradePairID?: {
                        makerDenom?: string;
                        takerDenom?: string;
                    };
                    tickIndexTakerToMaker?: string | number | import("long").default;
                    trancheKey?: string;
                    address?: string;
                    sharesOwned?: string;
                    sharesWithdrawn?: string;
                    sharesCancelled?: string;
                    orderType?: _129.LimitOrderType;
                };
            }): _126.QueryGetLimitOrderTrancheUserResponse;
        };
        QueryAllLimitOrderTrancheUserRequest: {
            encode(message: _126.QueryAllLimitOrderTrancheUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllLimitOrderTrancheUserRequest;
            fromJSON(object: any): _126.QueryAllLimitOrderTrancheUserRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllLimitOrderTrancheUserRequest;
        };
        QueryAllLimitOrderTrancheUserResponse: {
            encode(message: _126.QueryAllLimitOrderTrancheUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllLimitOrderTrancheUserResponse;
            fromJSON(object: any): _126.QueryAllLimitOrderTrancheUserResponse;
            fromPartial(object: {
                LimitOrderTrancheUser?: {
                    tradePairID?: {
                        makerDenom?: string;
                        takerDenom?: string;
                    };
                    tickIndexTakerToMaker?: string | number | import("long").default;
                    trancheKey?: string;
                    address?: string;
                    sharesOwned?: string;
                    sharesWithdrawn?: string;
                    sharesCancelled?: string;
                    orderType?: _129.LimitOrderType;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllLimitOrderTrancheUserResponse;
        };
        QueryGetLimitOrderTrancheRequest: {
            encode(message: _126.QueryGetLimitOrderTrancheRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetLimitOrderTrancheRequest;
            fromJSON(object: any): _126.QueryGetLimitOrderTrancheRequest;
            fromPartial(object: {
                pairID?: string;
                tickIndex?: string | number | import("long").default;
                tokenIn?: string;
                trancheKey?: string;
            }): _126.QueryGetLimitOrderTrancheRequest;
        };
        QueryGetLimitOrderTrancheResponse: {
            encode(message: _126.QueryGetLimitOrderTrancheResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetLimitOrderTrancheResponse;
            fromJSON(object: any): _126.QueryGetLimitOrderTrancheResponse;
            fromPartial(object: {
                LimitOrderTranche?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        tickIndexTakerToMaker?: string | number | import("long").default;
                        trancheKey?: string;
                    };
                    reservesMakerDenom?: string;
                    reservesTakerDenom?: string;
                    totalMakerDenom?: string;
                    totalTakerDenom?: string;
                    expirationTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    priceTakerToMaker?: string;
                };
            }): _126.QueryGetLimitOrderTrancheResponse;
        };
        QueryAllLimitOrderTrancheRequest: {
            encode(message: _126.QueryAllLimitOrderTrancheRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllLimitOrderTrancheRequest;
            fromJSON(object: any): _126.QueryAllLimitOrderTrancheRequest;
            fromPartial(object: {
                pairID?: string;
                tokenIn?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllLimitOrderTrancheRequest;
        };
        QueryAllLimitOrderTrancheResponse: {
            encode(message: _126.QueryAllLimitOrderTrancheResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllLimitOrderTrancheResponse;
            fromJSON(object: any): _126.QueryAllLimitOrderTrancheResponse;
            fromPartial(object: {
                LimitOrderTranche?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        tickIndexTakerToMaker?: string | number | import("long").default;
                        trancheKey?: string;
                    };
                    reservesMakerDenom?: string;
                    reservesTakerDenom?: string;
                    totalMakerDenom?: string;
                    totalTakerDenom?: string;
                    expirationTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    priceTakerToMaker?: string;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllLimitOrderTrancheResponse;
        };
        QueryAllUserDepositsRequest: {
            encode(message: _126.QueryAllUserDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllUserDepositsRequest;
            fromJSON(object: any): _126.QueryAllUserDepositsRequest;
            fromPartial(object: {
                address?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllUserDepositsRequest;
        };
        QueryAllUserDepositsResponse: {
            encode(message: _126.QueryAllUserDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllUserDepositsResponse;
            fromJSON(object: any): _126.QueryAllUserDepositsResponse;
            fromPartial(object: {
                Deposits?: {
                    pairID?: {
                        token0?: string;
                        token1?: string;
                    };
                    sharesOwned?: string;
                    centerTickIndex?: string | number | import("long").default;
                    lowerTickIndex?: string | number | import("long").default;
                    upperTickIndex?: string | number | import("long").default;
                    fee?: string | number | import("long").default;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllUserDepositsResponse;
        };
        QueryAllUserLimitOrdersRequest: {
            encode(message: _126.QueryAllUserLimitOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllUserLimitOrdersRequest;
            fromJSON(object: any): _126.QueryAllUserLimitOrdersRequest;
            fromPartial(object: {
                address?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllUserLimitOrdersRequest;
        };
        QueryAllUserLimitOrdersResponse: {
            encode(message: _126.QueryAllUserLimitOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllUserLimitOrdersResponse;
            fromJSON(object: any): _126.QueryAllUserLimitOrdersResponse;
            fromPartial(object: {
                limitOrders?: {
                    tradePairID?: {
                        makerDenom?: string;
                        takerDenom?: string;
                    };
                    tickIndexTakerToMaker?: string | number | import("long").default;
                    trancheKey?: string;
                    address?: string;
                    sharesOwned?: string;
                    sharesWithdrawn?: string;
                    sharesCancelled?: string;
                    orderType?: _129.LimitOrderType;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllUserLimitOrdersResponse;
        };
        QueryAllTickLiquidityRequest: {
            encode(message: _126.QueryAllTickLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllTickLiquidityRequest;
            fromJSON(object: any): _126.QueryAllTickLiquidityRequest;
            fromPartial(object: {
                pairID?: string;
                tokenIn?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllTickLiquidityRequest;
        };
        QueryAllTickLiquidityResponse: {
            encode(message: _126.QueryAllTickLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllTickLiquidityResponse;
            fromJSON(object: any): _126.QueryAllTickLiquidityResponse;
            fromPartial(object: {
                tickLiquidity?: {
                    poolReserves?: {
                        key?: {
                            tradePairID?: {
                                makerDenom?: string;
                                takerDenom?: string;
                            };
                            TickIndexTakerToMaker?: string | number | import("long").default;
                            Fee?: string | number | import("long").default;
                        };
                        reservesMakerDenom?: string;
                        priceTakerToMaker?: string;
                        priceOppositeTakerToMaker?: string;
                    };
                    limitOrderTranche?: {
                        key?: {
                            tradePairID?: {
                                makerDenom?: string;
                                takerDenom?: string;
                            };
                            tickIndexTakerToMaker?: string | number | import("long").default;
                            trancheKey?: string;
                        };
                        reservesMakerDenom?: string;
                        reservesTakerDenom?: string;
                        totalMakerDenom?: string;
                        totalTakerDenom?: string;
                        expirationTime?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        priceTakerToMaker?: string;
                    };
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllTickLiquidityResponse;
        };
        QueryGetInactiveLimitOrderTrancheRequest: {
            encode(message: _126.QueryGetInactiveLimitOrderTrancheRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetInactiveLimitOrderTrancheRequest;
            fromJSON(object: any): _126.QueryGetInactiveLimitOrderTrancheRequest;
            fromPartial(object: {
                pairID?: string;
                tokenIn?: string;
                tickIndex?: string | number | import("long").default;
                trancheKey?: string;
            }): _126.QueryGetInactiveLimitOrderTrancheRequest;
        };
        QueryGetInactiveLimitOrderTrancheResponse: {
            encode(message: _126.QueryGetInactiveLimitOrderTrancheResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetInactiveLimitOrderTrancheResponse;
            fromJSON(object: any): _126.QueryGetInactiveLimitOrderTrancheResponse;
            fromPartial(object: {
                inactiveLimitOrderTranche?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        tickIndexTakerToMaker?: string | number | import("long").default;
                        trancheKey?: string;
                    };
                    reservesMakerDenom?: string;
                    reservesTakerDenom?: string;
                    totalMakerDenom?: string;
                    totalTakerDenom?: string;
                    expirationTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    priceTakerToMaker?: string;
                };
            }): _126.QueryGetInactiveLimitOrderTrancheResponse;
        };
        QueryAllInactiveLimitOrderTrancheRequest: {
            encode(message: _126.QueryAllInactiveLimitOrderTrancheRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllInactiveLimitOrderTrancheRequest;
            fromJSON(object: any): _126.QueryAllInactiveLimitOrderTrancheRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllInactiveLimitOrderTrancheRequest;
        };
        QueryAllInactiveLimitOrderTrancheResponse: {
            encode(message: _126.QueryAllInactiveLimitOrderTrancheResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllInactiveLimitOrderTrancheResponse;
            fromJSON(object: any): _126.QueryAllInactiveLimitOrderTrancheResponse;
            fromPartial(object: {
                inactiveLimitOrderTranche?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        tickIndexTakerToMaker?: string | number | import("long").default;
                        trancheKey?: string;
                    };
                    reservesMakerDenom?: string;
                    reservesTakerDenom?: string;
                    totalMakerDenom?: string;
                    totalTakerDenom?: string;
                    expirationTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    priceTakerToMaker?: string;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllInactiveLimitOrderTrancheResponse;
        };
        QueryAllPoolReservesRequest: {
            encode(message: _126.QueryAllPoolReservesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllPoolReservesRequest;
            fromJSON(object: any): _126.QueryAllPoolReservesRequest;
            fromPartial(object: {
                pairID?: string;
                tokenIn?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllPoolReservesRequest;
        };
        QueryAllPoolReservesResponse: {
            encode(message: _126.QueryAllPoolReservesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllPoolReservesResponse;
            fromJSON(object: any): _126.QueryAllPoolReservesResponse;
            fromPartial(object: {
                poolReserves?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        TickIndexTakerToMaker?: string | number | import("long").default;
                        Fee?: string | number | import("long").default;
                    };
                    reservesMakerDenom?: string;
                    priceTakerToMaker?: string;
                    priceOppositeTakerToMaker?: string;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllPoolReservesResponse;
        };
        QueryGetPoolReservesRequest: {
            encode(message: _126.QueryGetPoolReservesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetPoolReservesRequest;
            fromJSON(object: any): _126.QueryGetPoolReservesRequest;
            fromPartial(object: {
                pairID?: string;
                tokenIn?: string;
                tickIndex?: string | number | import("long").default;
                fee?: string | number | import("long").default;
            }): _126.QueryGetPoolReservesRequest;
        };
        QueryGetPoolReservesResponse: {
            encode(message: _126.QueryGetPoolReservesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetPoolReservesResponse;
            fromJSON(object: any): _126.QueryGetPoolReservesResponse;
            fromPartial(object: {
                poolReserves?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        TickIndexTakerToMaker?: string | number | import("long").default;
                        Fee?: string | number | import("long").default;
                    };
                    reservesMakerDenom?: string;
                    priceTakerToMaker?: string;
                    priceOppositeTakerToMaker?: string;
                };
            }): _126.QueryGetPoolReservesResponse;
        };
        QueryEstimateMultiHopSwapRequest: {
            encode(message: _126.QueryEstimateMultiHopSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryEstimateMultiHopSwapRequest;
            fromJSON(object: any): _126.QueryEstimateMultiHopSwapRequest;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                routes?: {
                    hops?: string[];
                }[];
                amountIn?: string;
                exitLimitPrice?: string;
                pickBestRoute?: boolean;
            }): _126.QueryEstimateMultiHopSwapRequest;
        };
        QueryEstimateMultiHopSwapResponse: {
            encode(message: _126.QueryEstimateMultiHopSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryEstimateMultiHopSwapResponse;
            fromJSON(object: any): _126.QueryEstimateMultiHopSwapResponse;
            fromPartial(object: {
                coinOut?: {
                    denom?: string;
                    amount?: string;
                };
            }): _126.QueryEstimateMultiHopSwapResponse;
        };
        QueryEstimatePlaceLimitOrderRequest: {
            encode(message: _126.QueryEstimatePlaceLimitOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryEstimatePlaceLimitOrderRequest;
            fromJSON(object: any): _126.QueryEstimatePlaceLimitOrderRequest;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                tokenIn?: string;
                tokenOut?: string;
                tickIndexInToOut?: string | number | import("long").default;
                amountIn?: string;
                orderType?: _129.LimitOrderType;
                expirationTime?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                maxAmountOut?: string;
            }): _126.QueryEstimatePlaceLimitOrderRequest;
        };
        QueryEstimatePlaceLimitOrderResponse: {
            encode(message: _126.QueryEstimatePlaceLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryEstimatePlaceLimitOrderResponse;
            fromJSON(object: any): _126.QueryEstimatePlaceLimitOrderResponse;
            fromPartial(object: {
                totalInCoin?: {
                    denom?: string;
                    amount?: string;
                };
                swapInCoin?: {
                    denom?: string;
                    amount?: string;
                };
                swapOutCoin?: {
                    denom?: string;
                    amount?: string;
                };
            }): _126.QueryEstimatePlaceLimitOrderResponse;
        };
        QueryPoolRequest: {
            encode(message: _126.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryPoolRequest;
            fromJSON(object: any): _126.QueryPoolRequest;
            fromPartial(object: {
                pairID?: string;
                tickIndex?: string | number | import("long").default;
                fee?: string | number | import("long").default;
            }): _126.QueryPoolRequest;
        };
        QueryPoolByIDRequest: {
            encode(message: _126.QueryPoolByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryPoolByIDRequest;
            fromJSON(object: any): _126.QueryPoolByIDRequest;
            fromPartial(object: {
                poolID?: string | number | import("long").default;
            }): _126.QueryPoolByIDRequest;
        };
        QueryPoolResponse: {
            encode(message: _126.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryPoolResponse;
            fromJSON(object: any): _126.QueryPoolResponse;
            fromPartial(object: {
                pool?: {
                    ID?: string | number | import("long").default;
                    lower_tick0?: {
                        key?: {
                            tradePairID?: {
                                makerDenom?: string;
                                takerDenom?: string;
                            };
                            TickIndexTakerToMaker?: string | number | import("long").default;
                            Fee?: string | number | import("long").default;
                        };
                        reservesMakerDenom?: string;
                        priceTakerToMaker?: string;
                        priceOppositeTakerToMaker?: string;
                    };
                    upper_tick1?: {
                        key?: {
                            tradePairID?: {
                                makerDenom?: string;
                                takerDenom?: string;
                            };
                            TickIndexTakerToMaker?: string | number | import("long").default;
                            Fee?: string | number | import("long").default;
                        };
                        reservesMakerDenom?: string;
                        priceTakerToMaker?: string;
                        priceOppositeTakerToMaker?: string;
                    };
                };
            }): _126.QueryPoolResponse;
        };
        QueryGetPoolMetadataRequest: {
            encode(message: _126.QueryGetPoolMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetPoolMetadataRequest;
            fromJSON(object: any): _126.QueryGetPoolMetadataRequest;
            fromPartial(object: {
                id?: string | number | import("long").default;
            }): _126.QueryGetPoolMetadataRequest;
        };
        QueryGetPoolMetadataResponse: {
            encode(message: _126.QueryGetPoolMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryGetPoolMetadataResponse;
            fromJSON(object: any): _126.QueryGetPoolMetadataResponse;
            fromPartial(object: {
                PoolMetadata?: {
                    ID?: string | number | import("long").default;
                    tick?: string | number | import("long").default;
                    fee?: string | number | import("long").default;
                    pairID?: {
                        token0?: string;
                        token1?: string;
                    };
                };
            }): _126.QueryGetPoolMetadataResponse;
        };
        QueryAllPoolMetadataRequest: {
            encode(message: _126.QueryAllPoolMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllPoolMetadataRequest;
            fromJSON(object: any): _126.QueryAllPoolMetadataRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _126.QueryAllPoolMetadataRequest;
        };
        QueryAllPoolMetadataResponse: {
            encode(message: _126.QueryAllPoolMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllPoolMetadataResponse;
            fromJSON(object: any): _126.QueryAllPoolMetadataResponse;
            fromPartial(object: {
                PoolMetadata?: {
                    ID?: string | number | import("long").default;
                    tick?: string | number | import("long").default;
                    fee?: string | number | import("long").default;
                    pairID?: {
                        token0?: string;
                        token1?: string;
                    };
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: string | number | import("long").default;
                };
            }): _126.QueryAllPoolMetadataResponse;
        };
        Pool: {
            encode(message: _125.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Pool;
            fromJSON(object: any): _125.Pool;
            fromPartial(object: {
                ID?: string | number | import("long").default;
                lower_tick0?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        TickIndexTakerToMaker?: string | number | import("long").default;
                        Fee?: string | number | import("long").default;
                    };
                    reservesMakerDenom?: string;
                    priceTakerToMaker?: string;
                    priceOppositeTakerToMaker?: string;
                };
                upper_tick1?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        TickIndexTakerToMaker?: string | number | import("long").default;
                        Fee?: string | number | import("long").default;
                    };
                    reservesMakerDenom?: string;
                    priceTakerToMaker?: string;
                    priceOppositeTakerToMaker?: string;
                };
            }): _125.Pool;
        };
        PoolReservesKey: {
            encode(message: _124.PoolReservesKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PoolReservesKey;
            fromJSON(object: any): _124.PoolReservesKey;
            fromPartial(object: {
                tradePairID?: {
                    makerDenom?: string;
                    takerDenom?: string;
                };
                TickIndexTakerToMaker?: string | number | import("long").default;
                Fee?: string | number | import("long").default;
            }): _124.PoolReservesKey;
        };
        PoolReserves: {
            encode(message: _124.PoolReserves, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PoolReserves;
            fromJSON(object: any): _124.PoolReserves;
            fromPartial(object: {
                key?: {
                    tradePairID?: {
                        makerDenom?: string;
                        takerDenom?: string;
                    };
                    TickIndexTakerToMaker?: string | number | import("long").default;
                    Fee?: string | number | import("long").default;
                };
                reservesMakerDenom?: string;
                priceTakerToMaker?: string;
                priceOppositeTakerToMaker?: string;
            }): _124.PoolReserves;
        };
        PoolMetadata: {
            encode(message: _123.PoolMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PoolMetadata;
            fromJSON(object: any): _123.PoolMetadata;
            fromPartial(object: {
                ID?: string | number | import("long").default;
                tick?: string | number | import("long").default;
                fee?: string | number | import("long").default;
                pairID?: {
                    token0?: string;
                    token1?: string;
                };
            }): _123.PoolMetadata;
        };
        Params: {
            encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
            fromJSON(object: any): _122.Params;
            fromPartial(object: {
                fee_tiers?: (string | number | import("long").default)[];
            }): _122.Params;
        };
        PairID: {
            encode(message: _121.PairID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PairID;
            fromJSON(object: any): _121.PairID;
            fromPartial(object: {
                token0?: string;
                token1?: string;
            }): _121.PairID;
        };
        LimitOrderTrancheKey: {
            encode(message: _120.LimitOrderTrancheKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.LimitOrderTrancheKey;
            fromJSON(object: any): _120.LimitOrderTrancheKey;
            fromPartial(object: {
                tradePairID?: {
                    makerDenom?: string;
                    takerDenom?: string;
                };
                tickIndexTakerToMaker?: string | number | import("long").default;
                trancheKey?: string;
            }): _120.LimitOrderTrancheKey;
        };
        LimitOrderTranche: {
            encode(message: _120.LimitOrderTranche, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.LimitOrderTranche;
            fromJSON(object: any): _120.LimitOrderTranche;
            fromPartial(object: {
                key?: {
                    tradePairID?: {
                        makerDenom?: string;
                        takerDenom?: string;
                    };
                    tickIndexTakerToMaker?: string | number | import("long").default;
                    trancheKey?: string;
                };
                reservesMakerDenom?: string;
                reservesTakerDenom?: string;
                totalMakerDenom?: string;
                totalTakerDenom?: string;
                expirationTime?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                priceTakerToMaker?: string;
            }): _120.LimitOrderTranche;
        };
        LimitOrderTrancheUser: {
            encode(message: _119.LimitOrderTrancheUser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.LimitOrderTrancheUser;
            fromJSON(object: any): _119.LimitOrderTrancheUser;
            fromPartial(object: {
                tradePairID?: {
                    makerDenom?: string;
                    takerDenom?: string;
                };
                tickIndexTakerToMaker?: string | number | import("long").default;
                trancheKey?: string;
                address?: string;
                sharesOwned?: string;
                sharesWithdrawn?: string;
                sharesCancelled?: string;
                orderType?: _129.LimitOrderType;
            }): _119.LimitOrderTrancheUser;
        };
        LimitOrderExpiration: {
            encode(message: _118.LimitOrderExpiration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.LimitOrderExpiration;
            fromJSON(object: any): _118.LimitOrderExpiration;
            fromPartial(object: {
                expirationTime?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                trancheRef?: Uint8Array;
            }): _118.LimitOrderExpiration;
        };
        GenesisState: {
            encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
            fromJSON(object: any): _117.GenesisState;
            fromPartial(object: {
                params?: {
                    fee_tiers?: (string | number | import("long").default)[];
                };
                tickLiquidityList?: {
                    poolReserves?: {
                        key?: {
                            tradePairID?: {
                                makerDenom?: string;
                                takerDenom?: string;
                            };
                            TickIndexTakerToMaker?: string | number | import("long").default;
                            Fee?: string | number | import("long").default;
                        };
                        reservesMakerDenom?: string;
                        priceTakerToMaker?: string;
                        priceOppositeTakerToMaker?: string;
                    };
                    limitOrderTranche?: {
                        key?: {
                            tradePairID?: {
                                makerDenom?: string;
                                takerDenom?: string;
                            };
                            tickIndexTakerToMaker?: string | number | import("long").default;
                            trancheKey?: string;
                        };
                        reservesMakerDenom?: string;
                        reservesTakerDenom?: string;
                        totalMakerDenom?: string;
                        totalTakerDenom?: string;
                        expirationTime?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        priceTakerToMaker?: string;
                    };
                }[];
                inactiveLimitOrderTrancheList?: {
                    key?: {
                        tradePairID?: {
                            makerDenom?: string;
                            takerDenom?: string;
                        };
                        tickIndexTakerToMaker?: string | number | import("long").default;
                        trancheKey?: string;
                    };
                    reservesMakerDenom?: string;
                    reservesTakerDenom?: string;
                    totalMakerDenom?: string;
                    totalTakerDenom?: string;
                    expirationTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    priceTakerToMaker?: string;
                }[];
                limitOrderTrancheUserList?: {
                    tradePairID?: {
                        makerDenom?: string;
                        takerDenom?: string;
                    };
                    tickIndexTakerToMaker?: string | number | import("long").default;
                    trancheKey?: string;
                    address?: string;
                    sharesOwned?: string;
                    sharesWithdrawn?: string;
                    sharesCancelled?: string;
                    orderType?: _129.LimitOrderType;
                }[];
                poolMetadataList?: {
                    ID?: string | number | import("long").default;
                    tick?: string | number | import("long").default;
                    fee?: string | number | import("long").default;
                    pairID?: {
                        token0?: string;
                        token1?: string;
                    };
                }[];
                poolCount?: string | number | import("long").default;
            }): _117.GenesisState;
        };
        DepositRecord: {
            encode(message: _116.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.DepositRecord;
            fromJSON(object: any): _116.DepositRecord;
            fromPartial(object: {
                pairID?: {
                    token0?: string;
                    token1?: string;
                };
                sharesOwned?: string;
                centerTickIndex?: string | number | import("long").default;
                lowerTickIndex?: string | number | import("long").default;
                upperTickIndex?: string | number | import("long").default;
                fee?: string | number | import("long").default;
            }): _116.DepositRecord;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _293.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _131.QueryEpochsInfoRequest): Promise<_131.QueryEpochsInfoResponse>;
            currentEpoch(request: _131.QueryCurrentEpochRequest): Promise<_131.QueryCurrentEpochResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useEpochInfos: <TData = _131.QueryEpochsInfoResponse>({ request, options }: _293.UseEpochInfosQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            useCurrentEpoch: <TData_1 = _131.QueryCurrentEpochResponse>({ request, options }: _293.UseCurrentEpochQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        };
        LCDQueryClient: typeof _290.LCDQueryClient;
        QueryEpochsInfoRequest: {
            encode(_: _131.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoRequest;
            fromJSON(_: any): _131.QueryEpochsInfoRequest;
            fromPartial(_: {}): _131.QueryEpochsInfoRequest;
        };
        QueryEpochsInfoResponse: {
            encode(message: _131.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoResponse;
            fromJSON(object: any): _131.QueryEpochsInfoResponse;
            fromPartial(object: {
                epochs?: {
                    identifier?: string;
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    current_epoch?: string | number | import("long").default;
                    current_epoch_start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    epoch_counting_started?: boolean;
                    current_epoch_start_height?: string | number | import("long").default;
                }[];
            }): _131.QueryEpochsInfoResponse;
        };
        QueryCurrentEpochRequest: {
            encode(message: _131.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochRequest;
            fromJSON(object: any): _131.QueryCurrentEpochRequest;
            fromPartial(object: {
                identifier?: string;
            }): _131.QueryCurrentEpochRequest;
        };
        QueryCurrentEpochResponse: {
            encode(message: _131.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochResponse;
            fromJSON(object: any): _131.QueryCurrentEpochResponse;
            fromPartial(object: {
                current_epoch?: string | number | import("long").default;
            }): _131.QueryCurrentEpochResponse;
        };
        EpochInfo: {
            encode(message: _130.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EpochInfo;
            fromJSON(object: any): _130.EpochInfo;
            fromPartial(object: {
                identifier?: string;
                start_time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                duration?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                current_epoch?: string | number | import("long").default;
                current_epoch_start_time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                epoch_counting_started?: boolean;
                current_epoch_start_height?: string | number | import("long").default;
            }): _130.EpochInfo;
        };
        GenesisState: {
            encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
            fromJSON(object: any): _130.GenesisState;
            fromPartial(object: {
                epochs?: {
                    identifier?: string;
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    current_epoch?: string | number | import("long").default;
                    current_epoch_start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    epoch_counting_started?: boolean;
                    current_epoch_start_height?: string | number | import("long").default;
                }[];
            }): _130.GenesisState;
        };
    };
    const incentives: {
        MsgClientImpl: typeof _296.MsgClientImpl;
        QueryClientImpl: typeof _294.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            getModuleStatus(request?: _136.GetModuleStatusRequest): Promise<_136.GetModuleStatusResponse>;
            getGaugeByID(request: _136.GetGaugeByIDRequest): Promise<_136.GetGaugeByIDResponse>;
            getGauges(request: _136.GetGaugesRequest): Promise<_136.GetGaugesResponse>;
            getStakeByID(request: _136.GetStakeByIDRequest): Promise<_136.GetStakeByIDResponse>;
            getStakes(request: _136.GetStakesRequest): Promise<_136.GetStakesResponse>;
            getFutureRewardEstimate(request: _136.GetFutureRewardEstimateRequest): Promise<_136.GetFutureRewardEstimateResponse>;
            getAccountHistory(request: _136.GetAccountHistoryRequest): Promise<_136.GetAccountHistoryResponse>;
            getGaugeQualifyingValue(request: _136.GetGaugeQualifyingValueRequest): Promise<_136.GetGaugeQualifyingValueResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useGetModuleStatus: <TData = _136.GetModuleStatusResponse>({ request, options }: _294.UseGetModuleStatusQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            useGetGaugeByID: <TData_1 = _136.GetGaugeByIDResponse>({ request, options }: _294.UseGetGaugeByIDQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            useGetGauges: <TData_2 = _136.GetGaugesResponse>({ request, options }: _294.UseGetGaugesQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            useGetStakeByID: <TData_3 = _136.GetStakeByIDResponse>({ request, options }: _294.UseGetStakeByIDQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            useGetStakes: <TData_4 = _136.GetStakesResponse>({ request, options }: _294.UseGetStakesQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            useGetFutureRewardEstimate: <TData_5 = _136.GetFutureRewardEstimateResponse>({ request, options }: _294.UseGetFutureRewardEstimateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
            useGetAccountHistory: <TData_6 = _136.GetAccountHistoryResponse>({ request, options }: _294.UseGetAccountHistoryQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            useGetGaugeQualifyingValue: <TData_7 = _136.GetGaugeQualifyingValueResponse>({ request, options }: _294.UseGetGaugeQualifyingValueQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        };
        LCDQueryClient: typeof _291.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _138.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _138.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                stake(value: _138.MsgStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unstake(value: _138.MsgUnstake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _138.MsgCreateGauge): {
                    typeUrl: string;
                    value: _138.MsgCreateGauge;
                };
                addToGauge(value: _138.MsgAddToGauge): {
                    typeUrl: string;
                    value: _138.MsgAddToGauge;
                };
                stake(value: _138.MsgStake): {
                    typeUrl: string;
                    value: _138.MsgStake;
                };
                unstake(value: _138.MsgUnstake): {
                    typeUrl: string;
                    value: _138.MsgUnstake;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _138.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _138.MsgAddToGauge;
                };
                stake(value: any): {
                    typeUrl: string;
                    value: _138.MsgStake;
                };
                unstake(value: any): {
                    typeUrl: string;
                    value: _138.MsgUnstake;
                };
            };
            fromPartial: {
                createGauge(value: _138.MsgCreateGauge): {
                    typeUrl: string;
                    value: _138.MsgCreateGauge;
                };
                addToGauge(value: _138.MsgAddToGauge): {
                    typeUrl: string;
                    value: _138.MsgAddToGauge;
                };
                stake(value: _138.MsgStake): {
                    typeUrl: string;
                    value: _138.MsgStake;
                };
                unstake(value: _138.MsgUnstake): {
                    typeUrl: string;
                    value: _138.MsgUnstake;
                };
            };
        };
        AminoConverter: {
            "/duality.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over, pricing_tick }: _138.MsgCreateGauge) => {
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
                }) => _138.MsgCreateGauge;
            };
            "/duality.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gauge_id, rewards }: _138.MsgAddToGauge) => {
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
                }) => _138.MsgAddToGauge;
            };
            "/duality.incentives.MsgStake": {
                aminoType: string;
                toAmino: ({ owner, coins }: _138.MsgStake) => {
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
                }) => _138.MsgStake;
            };
            "/duality.incentives.MsgUnstake": {
                aminoType: string;
                toAmino: ({ owner, unstakes }: _138.MsgUnstake) => {
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
                }) => _138.MsgUnstake;
            };
        };
        MsgCreateGauge: {
            encode(message: _138.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateGauge;
            fromJSON(object: any): _138.MsgCreateGauge;
            fromPartial(object: {
                is_perpetual?: boolean;
                owner?: string;
                distribute_to?: {
                    pairID?: {
                        token0?: string;
                        token1?: string;
                    };
                    startTick?: string | number | import("long").default;
                    endTick?: string | number | import("long").default;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                start_time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                num_epochs_paid_over?: string | number | import("long").default;
                pricing_tick?: string | number | import("long").default;
            }): _138.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _138.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateGaugeResponse;
            fromJSON(_: any): _138.MsgCreateGaugeResponse;
            fromPartial(_: {}): _138.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _138.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgAddToGauge;
            fromJSON(object: any): _138.MsgAddToGauge;
            fromPartial(object: {
                owner?: string;
                gauge_id?: string | number | import("long").default;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _138.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _138.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgAddToGaugeResponse;
            fromJSON(_: any): _138.MsgAddToGaugeResponse;
            fromPartial(_: {}): _138.MsgAddToGaugeResponse;
        };
        MsgStake: {
            encode(message: _138.MsgStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStake;
            fromJSON(object: any): _138.MsgStake;
            fromPartial(object: {
                owner?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _138.MsgStake;
        };
        MsgStakeResponse: {
            encode(message: _138.MsgStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStakeResponse;
            fromJSON(object: any): _138.MsgStakeResponse;
            fromPartial(object: {
                ID?: string | number | import("long").default;
            }): _138.MsgStakeResponse;
        };
        MsgUnstake: {
            encode(message: _138.MsgUnstake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUnstake;
            fromJSON(object: any): _138.MsgUnstake;
            fromPartial(object: {
                owner?: string;
                unstakes?: {
                    ID?: string | number | import("long").default;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _138.MsgUnstake;
        };
        MsgUnstake_UnstakeDescriptor: {
            encode(message: _138.MsgUnstake_UnstakeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUnstake_UnstakeDescriptor;
            fromJSON(object: any): _138.MsgUnstake_UnstakeDescriptor;
            fromPartial(object: {
                ID?: string | number | import("long").default;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _138.MsgUnstake_UnstakeDescriptor;
        };
        MsgUnstakeResponse: {
            encode(_: _138.MsgUnstakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUnstakeResponse;
            fromJSON(_: any): _138.MsgUnstakeResponse;
            fromPartial(_: {}): _138.MsgUnstakeResponse;
        };
        Stake: {
            encode(message: _137.Stake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Stake;
            fromJSON(object: any): _137.Stake;
            fromPartial(object: {
                ID?: string | number | import("long").default;
                owner?: string;
                start_time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                start_dist_epoch?: string | number | import("long").default;
            }): _137.Stake;
        };
        gaugeStatusFromJSON(object: any): _136.GaugeStatus;
        gaugeStatusToJSON(object: _136.GaugeStatus): string;
        GaugeStatus: typeof _136.GaugeStatus;
        GetModuleStatusRequest: {
            encode(_: _136.GetModuleStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetModuleStatusRequest;
            fromJSON(_: any): _136.GetModuleStatusRequest;
            fromPartial(_: {}): _136.GetModuleStatusRequest;
        };
        GetModuleStatusResponse: {
            encode(message: _136.GetModuleStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetModuleStatusResponse;
            fromJSON(object: any): _136.GetModuleStatusResponse;
            fromPartial(object: {
                reward_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                staked_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                params?: {
                    distr_epoch_identifier?: string;
                    max_gauges?: string | number | import("long").default;
                };
            }): _136.GetModuleStatusResponse;
        };
        GetGaugeByIDRequest: {
            encode(message: _136.GetGaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetGaugeByIDRequest;
            fromJSON(object: any): _136.GetGaugeByIDRequest;
            fromPartial(object: {
                id?: string | number | import("long").default;
            }): _136.GetGaugeByIDRequest;
        };
        GetGaugeByIDResponse: {
            encode(message: _136.GetGaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetGaugeByIDResponse;
            fromJSON(object: any): _136.GetGaugeByIDResponse;
            fromPartial(object: {
                gauge?: {
                    id?: string | number | import("long").default;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        pairID?: {
                            token0?: string;
                            token1?: string;
                        };
                        startTick?: string | number | import("long").default;
                        endTick?: string | number | import("long").default;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    num_epochs_paid_over?: string | number | import("long").default;
                    filled_epochs?: string | number | import("long").default;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pricing_tick?: string | number | import("long").default;
                };
            }): _136.GetGaugeByIDResponse;
        };
        GetGaugeQualifyingValueRequest: {
            encode(message: _136.GetGaugeQualifyingValueRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetGaugeQualifyingValueRequest;
            fromJSON(object: any): _136.GetGaugeQualifyingValueRequest;
            fromPartial(object: {
                id?: string | number | import("long").default;
            }): _136.GetGaugeQualifyingValueRequest;
        };
        GetGaugeQualifyingValueResponse: {
            encode(message: _136.GetGaugeQualifyingValueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetGaugeQualifyingValueResponse;
            fromJSON(object: any): _136.GetGaugeQualifyingValueResponse;
            fromPartial(object: {
                qualifying_value?: string | number | import("long").default;
            }): _136.GetGaugeQualifyingValueResponse;
        };
        GetGaugesRequest: {
            encode(message: _136.GetGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetGaugesRequest;
            fromJSON(object: any): _136.GetGaugesRequest;
            fromPartial(object: {
                status?: _136.GaugeStatus;
                denom?: string;
            }): _136.GetGaugesRequest;
        };
        GetGaugesResponse: {
            encode(message: _136.GetGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetGaugesResponse;
            fromJSON(object: any): _136.GetGaugesResponse;
            fromPartial(object: {
                gauges?: {
                    id?: string | number | import("long").default;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        pairID?: {
                            token0?: string;
                            token1?: string;
                        };
                        startTick?: string | number | import("long").default;
                        endTick?: string | number | import("long").default;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    num_epochs_paid_over?: string | number | import("long").default;
                    filled_epochs?: string | number | import("long").default;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pricing_tick?: string | number | import("long").default;
                }[];
            }): _136.GetGaugesResponse;
        };
        GetStakeByIDRequest: {
            encode(message: _136.GetStakeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetStakeByIDRequest;
            fromJSON(object: any): _136.GetStakeByIDRequest;
            fromPartial(object: {
                stake_id?: string | number | import("long").default;
            }): _136.GetStakeByIDRequest;
        };
        GetStakeByIDResponse: {
            encode(message: _136.GetStakeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetStakeByIDResponse;
            fromJSON(object: any): _136.GetStakeByIDResponse;
            fromPartial(object: {
                stake?: {
                    ID?: string | number | import("long").default;
                    owner?: string;
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    start_dist_epoch?: string | number | import("long").default;
                };
            }): _136.GetStakeByIDResponse;
        };
        GetStakesRequest: {
            encode(message: _136.GetStakesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetStakesRequest;
            fromJSON(object: any): _136.GetStakesRequest;
            fromPartial(object: {
                owner?: string;
            }): _136.GetStakesRequest;
        };
        GetStakesResponse: {
            encode(message: _136.GetStakesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetStakesResponse;
            fromJSON(object: any): _136.GetStakesResponse;
            fromPartial(object: {
                stakes?: {
                    ID?: string | number | import("long").default;
                    owner?: string;
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    start_dist_epoch?: string | number | import("long").default;
                }[];
            }): _136.GetStakesResponse;
        };
        GetFutureRewardEstimateRequest: {
            encode(message: _136.GetFutureRewardEstimateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetFutureRewardEstimateRequest;
            fromJSON(object: any): _136.GetFutureRewardEstimateRequest;
            fromPartial(object: {
                owner?: string;
                stake_ids?: (string | number | import("long").default)[];
                num_epochs?: string | number | import("long").default;
            }): _136.GetFutureRewardEstimateRequest;
        };
        GetFutureRewardEstimateResponse: {
            encode(message: _136.GetFutureRewardEstimateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetFutureRewardEstimateResponse;
            fromJSON(object: any): _136.GetFutureRewardEstimateResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _136.GetFutureRewardEstimateResponse;
        };
        GetAccountHistoryRequest: {
            encode(message: _136.GetAccountHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetAccountHistoryRequest;
            fromJSON(object: any): _136.GetAccountHistoryRequest;
            fromPartial(object: {
                account?: string;
            }): _136.GetAccountHistoryRequest;
        };
        GetAccountHistoryResponse: {
            encode(message: _136.GetAccountHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GetAccountHistoryResponse;
            fromJSON(object: any): _136.GetAccountHistoryResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _136.GetAccountHistoryResponse;
        };
        Params: {
            encode(message: _135.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Params;
            fromJSON(object: any): _135.Params;
            fromPartial(object: {
                distr_epoch_identifier?: string;
                max_gauges?: string | number | import("long").default;
            }): _135.Params;
        };
        GenesisState: {
            encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GenesisState;
            fromJSON(object: any): _134.GenesisState;
            fromPartial(object: {
                params?: {
                    distr_epoch_identifier?: string;
                    max_gauges?: string | number | import("long").default;
                };
                gauges?: {
                    id?: string | number | import("long").default;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        pairID?: {
                            token0?: string;
                            token1?: string;
                        };
                        startTick?: string | number | import("long").default;
                        endTick?: string | number | import("long").default;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    num_epochs_paid_over?: string | number | import("long").default;
                    filled_epochs?: string | number | import("long").default;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pricing_tick?: string | number | import("long").default;
                }[];
                last_gauge_id?: string | number | import("long").default;
                last_stake_id?: string | number | import("long").default;
                stakes?: {
                    ID?: string | number | import("long").default;
                    owner?: string;
                    start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    start_dist_epoch?: string | number | import("long").default;
                }[];
                accountHistories?: {
                    account?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _134.GenesisState;
        };
        Gauge: {
            encode(message: _133.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Gauge;
            fromJSON(object: any): _133.Gauge;
            fromPartial(object: {
                id?: string | number | import("long").default;
                is_perpetual?: boolean;
                distribute_to?: {
                    pairID?: {
                        token0?: string;
                        token1?: string;
                    };
                    startTick?: string | number | import("long").default;
                    endTick?: string | number | import("long").default;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                start_time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                num_epochs_paid_over?: string | number | import("long").default;
                filled_epochs?: string | number | import("long").default;
                distributed_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                pricing_tick?: string | number | import("long").default;
            }): _133.Gauge;
        };
        QueryCondition: {
            encode(message: _133.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryCondition;
            fromJSON(object: any): _133.QueryCondition;
            fromPartial(object: {
                pairID?: {
                    token0?: string;
                    token1?: string;
                };
                startTick?: string | number | import("long").default;
                endTick?: string | number | import("long").default;
            }): _133.QueryCondition;
        };
        AccountHistory: {
            encode(message: _132.AccountHistory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AccountHistory;
            fromJSON(object: any): _132.AccountHistory;
            fromPartial(object: {
                account?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _132.AccountHistory;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            duality: {
                dex: _295.MsgClientImpl;
                incentives: _296.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            duality: {
                dex: {
                    params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                    limitOrderTrancheUser(request: _126.QueryGetLimitOrderTrancheUserRequest): Promise<_126.QueryGetLimitOrderTrancheUserResponse>;
                    limitOrderTrancheUserAll(request?: _126.QueryAllLimitOrderTrancheUserRequest): Promise<_126.QueryAllLimitOrderTrancheUserResponse>;
                    limitOrderTrancheUserAllByAddress(request: _126.QueryAllUserLimitOrdersRequest): Promise<_126.QueryAllUserLimitOrdersResponse>;
                    limitOrderTranche(request: _126.QueryGetLimitOrderTrancheRequest): Promise<_126.QueryGetLimitOrderTrancheResponse>;
                    limitOrderTrancheAll(request: _126.QueryAllLimitOrderTrancheRequest): Promise<_126.QueryAllLimitOrderTrancheResponse>;
                    userDepositsAll(request: _126.QueryAllUserDepositsRequest): Promise<_126.QueryAllUserDepositsResponse>;
                    tickLiquidityAll(request: _126.QueryAllTickLiquidityRequest): Promise<_126.QueryAllTickLiquidityResponse>;
                    inactiveLimitOrderTranche(request: _126.QueryGetInactiveLimitOrderTrancheRequest): Promise<_126.QueryGetInactiveLimitOrderTrancheResponse>;
                    inactiveLimitOrderTrancheAll(request?: _126.QueryAllInactiveLimitOrderTrancheRequest): Promise<_126.QueryAllInactiveLimitOrderTrancheResponse>;
                    poolReservesAll(request: _126.QueryAllPoolReservesRequest): Promise<_126.QueryAllPoolReservesResponse>;
                    poolReserves(request: _126.QueryGetPoolReservesRequest): Promise<_126.QueryGetPoolReservesResponse>;
                    estimateMultiHopSwap(request: _126.QueryEstimateMultiHopSwapRequest): Promise<_126.QueryEstimateMultiHopSwapResponse>;
                    estimatePlaceLimitOrder(request: _126.QueryEstimatePlaceLimitOrderRequest): Promise<_126.QueryEstimatePlaceLimitOrderResponse>;
                    pool(request: _126.QueryPoolRequest): Promise<_126.QueryPoolResponse>;
                    poolByID(request: _126.QueryPoolByIDRequest): Promise<_126.QueryPoolResponse>;
                    poolMetadata(request: _126.QueryGetPoolMetadataRequest): Promise<_126.QueryGetPoolMetadataResponse>;
                    poolMetadataAll(request?: _126.QueryAllPoolMetadataRequest): Promise<_126.QueryAllPoolMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _131.QueryEpochsInfoRequest): Promise<_131.QueryEpochsInfoResponse>;
                    currentEpoch(request: _131.QueryCurrentEpochRequest): Promise<_131.QueryCurrentEpochResponse>;
                };
                incentives: {
                    getModuleStatus(request?: _136.GetModuleStatusRequest): Promise<_136.GetModuleStatusResponse>;
                    getGaugeByID(request: _136.GetGaugeByIDRequest): Promise<_136.GetGaugeByIDResponse>;
                    getGauges(request: _136.GetGaugesRequest): Promise<_136.GetGaugesResponse>;
                    getStakeByID(request: _136.GetStakeByIDRequest): Promise<_136.GetStakeByIDResponse>;
                    getStakes(request: _136.GetStakesRequest): Promise<_136.GetStakesResponse>;
                    getFutureRewardEstimate(request: _136.GetFutureRewardEstimateRequest): Promise<_136.GetFutureRewardEstimateResponse>;
                    getAccountHistory(request: _136.GetAccountHistoryRequest): Promise<_136.GetAccountHistoryResponse>;
                    getGaugeQualifyingValue(request: _136.GetGaugeQualifyingValueRequest): Promise<_136.GetGaugeQualifyingValueResponse>;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            duality: {
                dex: _289.LCDQueryClient;
                epochs: _290.LCDQueryClient;
                incentives: _291.LCDQueryClient;
            };
        }>;
    };
}
