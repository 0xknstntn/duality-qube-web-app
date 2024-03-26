import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { MultiHopRoute, LimitOrderType } from "./tx";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params } from "./params";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { LimitOrderTranche } from "./limit_order_tranche";
import { DepositRecord } from "./deposit_record";
import { TickLiquidity } from "./tick_liquidity";
import { PoolReserves } from "./pool_reserves";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Pool } from "./pool";
import { PoolMetadata } from "./pool_metadata";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetLimitOrderTrancheUserRequest {
    address: string;
    trancheKey: string;
}
export interface QueryGetLimitOrderTrancheUserResponse {
    LimitOrderTrancheUser?: LimitOrderTrancheUser;
}
export interface QueryAllLimitOrderTrancheUserRequest {
    pagination: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserResponse {
    LimitOrderTrancheUser?: LimitOrderTrancheUser[];
    pagination: PageResponse;
}
export interface QueryGetLimitOrderTrancheRequest {
    pairID: string;
    tickIndex: Long;
    tokenIn: string;
    trancheKey: string;
}
export interface QueryGetLimitOrderTrancheResponse {
    LimitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllLimitOrderTrancheRequest {
    pairID: string;
    tokenIn: string;
    pagination: PageRequest;
}
export interface QueryAllLimitOrderTrancheResponse {
    LimitOrderTranche?: LimitOrderTranche[];
    pagination: PageResponse;
}
export interface QueryAllUserDepositsRequest {
    address: string;
    pagination: PageRequest;
}
export interface QueryAllUserDepositsResponse {
    Deposits?: DepositRecord[];
    pagination: PageResponse;
}
export interface QueryAllUserLimitOrdersRequest {
    address: string;
    pagination: PageRequest;
}
export interface QueryAllUserLimitOrdersResponse {
    limitOrders?: LimitOrderTrancheUser[];
    pagination: PageResponse;
}
export interface QueryAllTickLiquidityRequest {
    pairID: string;
    tokenIn: string;
    pagination: PageRequest;
}
export interface QueryAllTickLiquidityResponse {
    tickLiquidity?: TickLiquidity[];
    pagination: PageResponse;
}
export interface QueryGetInactiveLimitOrderTrancheRequest {
    pairID: string;
    tokenIn: string;
    tickIndex: Long;
    trancheKey: string;
}
export interface QueryGetInactiveLimitOrderTrancheResponse {
    inactiveLimitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllInactiveLimitOrderTrancheRequest {
    pagination: PageRequest;
}
export interface QueryAllInactiveLimitOrderTrancheResponse {
    inactiveLimitOrderTranche?: LimitOrderTranche[];
    pagination: PageResponse;
}
export interface QueryAllPoolReservesRequest {
    pairID: string;
    tokenIn: string;
    pagination: PageRequest;
}
export interface QueryAllPoolReservesResponse {
    poolReserves?: PoolReserves[];
    pagination: PageResponse;
}
export interface QueryGetPoolReservesRequest {
    pairID: string;
    tokenIn: string;
    tickIndex: Long;
    fee: Long;
}
export interface QueryGetPoolReservesResponse {
    poolReserves?: PoolReserves;
}
export interface QueryEstimateMultiHopSwapRequest {
    creator: string;
    receiver: string;
    routes: MultiHopRoute[];
    amountIn: string;
    exitLimitPrice: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the best price is chosen
     * otherwise, the first succesful route is used.
     */
    pickBestRoute: boolean;
}
export interface QueryEstimateMultiHopSwapResponse {
    coinOut: Coin;
}
export interface QueryEstimatePlaceLimitOrderRequest {
    creator: string;
    receiver: string;
    tokenIn: string;
    tokenOut: string;
    tickIndexInToOut: Long;
    amountIn: string;
    orderType: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expirationTime?: Timestamp;
    maxAmountOut?: string;
}
export interface QueryEstimatePlaceLimitOrderResponse {
    /**
     * Total amount of coin used for the limit order
     * You can derive makerLimitInCoin using the equation: totalInCoin = swapInCoin + makerLimitInCoin
     */
    totalInCoin: Coin;
    /** Total amount of the token in that was immediately swapped for swapOutCoin */
    swapInCoin: Coin;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after executing the
     * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
     */
    swapOutCoin: Coin;
}
export interface QueryPoolRequest {
    pairID: string;
    tickIndex: Long;
    fee: Long;
}
export interface QueryPoolByIDRequest {
    poolID: Long;
}
export interface QueryPoolResponse {
    pool?: Pool;
}
export interface QueryGetPoolMetadataRequest {
    id: Long;
}
export interface QueryGetPoolMetadataResponse {
    PoolMetadata: PoolMetadata;
}
export interface QueryAllPoolMetadataRequest {
    pagination: PageRequest;
}
export interface QueryAllPoolMetadataResponse {
    PoolMetadata: PoolMetadata[];
    pagination: PageResponse;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetLimitOrderTrancheUserRequest: {
    encode(message: QueryGetLimitOrderTrancheUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserRequest;
    fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest;
    fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheUserRequest>): QueryGetLimitOrderTrancheUserRequest;
};
export declare const QueryGetLimitOrderTrancheUserResponse: {
    encode(message: QueryGetLimitOrderTrancheUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserResponse;
    fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse;
    fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheUserResponse>): QueryGetLimitOrderTrancheUserResponse;
};
export declare const QueryAllLimitOrderTrancheUserRequest: {
    encode(message: QueryAllLimitOrderTrancheUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserRequest;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest;
    fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheUserRequest>): QueryAllLimitOrderTrancheUserRequest;
};
export declare const QueryAllLimitOrderTrancheUserResponse: {
    encode(message: QueryAllLimitOrderTrancheUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserResponse;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse;
    fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheUserResponse>): QueryAllLimitOrderTrancheUserResponse;
};
export declare const QueryGetLimitOrderTrancheRequest: {
    encode(message: QueryGetLimitOrderTrancheRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheRequest;
    fromJSON(object: any): QueryGetLimitOrderTrancheRequest;
    fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheRequest>): QueryGetLimitOrderTrancheRequest;
};
export declare const QueryGetLimitOrderTrancheResponse: {
    encode(message: QueryGetLimitOrderTrancheResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheResponse;
    fromJSON(object: any): QueryGetLimitOrderTrancheResponse;
    fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheResponse>): QueryGetLimitOrderTrancheResponse;
};
export declare const QueryAllLimitOrderTrancheRequest: {
    encode(message: QueryAllLimitOrderTrancheRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheRequest;
    fromJSON(object: any): QueryAllLimitOrderTrancheRequest;
    fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheRequest>): QueryAllLimitOrderTrancheRequest;
};
export declare const QueryAllLimitOrderTrancheResponse: {
    encode(message: QueryAllLimitOrderTrancheResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheResponse;
    fromJSON(object: any): QueryAllLimitOrderTrancheResponse;
    fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheResponse>): QueryAllLimitOrderTrancheResponse;
};
export declare const QueryAllUserDepositsRequest: {
    encode(message: QueryAllUserDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserDepositsRequest;
    fromJSON(object: any): QueryAllUserDepositsRequest;
    fromPartial(object: DeepPartial<QueryAllUserDepositsRequest>): QueryAllUserDepositsRequest;
};
export declare const QueryAllUserDepositsResponse: {
    encode(message: QueryAllUserDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserDepositsResponse;
    fromJSON(object: any): QueryAllUserDepositsResponse;
    fromPartial(object: DeepPartial<QueryAllUserDepositsResponse>): QueryAllUserDepositsResponse;
};
export declare const QueryAllUserLimitOrdersRequest: {
    encode(message: QueryAllUserLimitOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserLimitOrdersRequest;
    fromJSON(object: any): QueryAllUserLimitOrdersRequest;
    fromPartial(object: DeepPartial<QueryAllUserLimitOrdersRequest>): QueryAllUserLimitOrdersRequest;
};
export declare const QueryAllUserLimitOrdersResponse: {
    encode(message: QueryAllUserLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserLimitOrdersResponse;
    fromJSON(object: any): QueryAllUserLimitOrdersResponse;
    fromPartial(object: DeepPartial<QueryAllUserLimitOrdersResponse>): QueryAllUserLimitOrdersResponse;
};
export declare const QueryAllTickLiquidityRequest: {
    encode(message: QueryAllTickLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTickLiquidityRequest;
    fromJSON(object: any): QueryAllTickLiquidityRequest;
    fromPartial(object: DeepPartial<QueryAllTickLiquidityRequest>): QueryAllTickLiquidityRequest;
};
export declare const QueryAllTickLiquidityResponse: {
    encode(message: QueryAllTickLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTickLiquidityResponse;
    fromJSON(object: any): QueryAllTickLiquidityResponse;
    fromPartial(object: DeepPartial<QueryAllTickLiquidityResponse>): QueryAllTickLiquidityResponse;
};
export declare const QueryGetInactiveLimitOrderTrancheRequest: {
    encode(message: QueryGetInactiveLimitOrderTrancheRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheRequest;
    fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest;
    fromPartial(object: DeepPartial<QueryGetInactiveLimitOrderTrancheRequest>): QueryGetInactiveLimitOrderTrancheRequest;
};
export declare const QueryGetInactiveLimitOrderTrancheResponse: {
    encode(message: QueryGetInactiveLimitOrderTrancheResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheResponse;
    fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse;
    fromPartial(object: DeepPartial<QueryGetInactiveLimitOrderTrancheResponse>): QueryGetInactiveLimitOrderTrancheResponse;
};
export declare const QueryAllInactiveLimitOrderTrancheRequest: {
    encode(message: QueryAllInactiveLimitOrderTrancheRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheRequest;
    fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest;
    fromPartial(object: DeepPartial<QueryAllInactiveLimitOrderTrancheRequest>): QueryAllInactiveLimitOrderTrancheRequest;
};
export declare const QueryAllInactiveLimitOrderTrancheResponse: {
    encode(message: QueryAllInactiveLimitOrderTrancheResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheResponse;
    fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse;
    fromPartial(object: DeepPartial<QueryAllInactiveLimitOrderTrancheResponse>): QueryAllInactiveLimitOrderTrancheResponse;
};
export declare const QueryAllPoolReservesRequest: {
    encode(message: QueryAllPoolReservesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolReservesRequest;
    fromJSON(object: any): QueryAllPoolReservesRequest;
    fromPartial(object: DeepPartial<QueryAllPoolReservesRequest>): QueryAllPoolReservesRequest;
};
export declare const QueryAllPoolReservesResponse: {
    encode(message: QueryAllPoolReservesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolReservesResponse;
    fromJSON(object: any): QueryAllPoolReservesResponse;
    fromPartial(object: DeepPartial<QueryAllPoolReservesResponse>): QueryAllPoolReservesResponse;
};
export declare const QueryGetPoolReservesRequest: {
    encode(message: QueryGetPoolReservesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolReservesRequest;
    fromJSON(object: any): QueryGetPoolReservesRequest;
    fromPartial(object: DeepPartial<QueryGetPoolReservesRequest>): QueryGetPoolReservesRequest;
};
export declare const QueryGetPoolReservesResponse: {
    encode(message: QueryGetPoolReservesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolReservesResponse;
    fromJSON(object: any): QueryGetPoolReservesResponse;
    fromPartial(object: DeepPartial<QueryGetPoolReservesResponse>): QueryGetPoolReservesResponse;
};
export declare const QueryEstimateMultiHopSwapRequest: {
    encode(message: QueryEstimateMultiHopSwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateMultiHopSwapRequest;
    fromJSON(object: any): QueryEstimateMultiHopSwapRequest;
    fromPartial(object: DeepPartial<QueryEstimateMultiHopSwapRequest>): QueryEstimateMultiHopSwapRequest;
};
export declare const QueryEstimateMultiHopSwapResponse: {
    encode(message: QueryEstimateMultiHopSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateMultiHopSwapResponse;
    fromJSON(object: any): QueryEstimateMultiHopSwapResponse;
    fromPartial(object: DeepPartial<QueryEstimateMultiHopSwapResponse>): QueryEstimateMultiHopSwapResponse;
};
export declare const QueryEstimatePlaceLimitOrderRequest: {
    encode(message: QueryEstimatePlaceLimitOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderRequest;
    fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest;
    fromPartial(object: DeepPartial<QueryEstimatePlaceLimitOrderRequest>): QueryEstimatePlaceLimitOrderRequest;
};
export declare const QueryEstimatePlaceLimitOrderResponse: {
    encode(message: QueryEstimatePlaceLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderResponse;
    fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse;
    fromPartial(object: DeepPartial<QueryEstimatePlaceLimitOrderResponse>): QueryEstimatePlaceLimitOrderResponse;
};
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolByIDRequest: {
    encode(message: QueryPoolByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolByIDRequest;
    fromJSON(object: any): QueryPoolByIDRequest;
    fromPartial(object: DeepPartial<QueryPoolByIDRequest>): QueryPoolByIDRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
};
export declare const QueryGetPoolMetadataRequest: {
    encode(message: QueryGetPoolMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolMetadataRequest;
    fromJSON(object: any): QueryGetPoolMetadataRequest;
    fromPartial(object: DeepPartial<QueryGetPoolMetadataRequest>): QueryGetPoolMetadataRequest;
};
export declare const QueryGetPoolMetadataResponse: {
    encode(message: QueryGetPoolMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolMetadataResponse;
    fromJSON(object: any): QueryGetPoolMetadataResponse;
    fromPartial(object: DeepPartial<QueryGetPoolMetadataResponse>): QueryGetPoolMetadataResponse;
};
export declare const QueryAllPoolMetadataRequest: {
    encode(message: QueryAllPoolMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMetadataRequest;
    fromJSON(object: any): QueryAllPoolMetadataRequest;
    fromPartial(object: DeepPartial<QueryAllPoolMetadataRequest>): QueryAllPoolMetadataRequest;
};
export declare const QueryAllPoolMetadataResponse: {
    encode(message: QueryAllPoolMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMetadataResponse;
    fromJSON(object: any): QueryAllPoolMetadataResponse;
    fromPartial(object: DeepPartial<QueryAllPoolMetadataResponse>): QueryAllPoolMetadataResponse;
};
