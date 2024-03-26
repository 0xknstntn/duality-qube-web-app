import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponse, QueryAllUserLimitOrdersRequest, QueryAllUserLimitOrdersResponse, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponse, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponse, QueryAllUserDepositsRequest, QueryAllUserDepositsResponse, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponse, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponse, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponse, QueryAllPoolReservesRequest, QueryAllPoolReservesResponse, QueryGetPoolReservesRequest, QueryGetPoolReservesResponse, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponse, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponse, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a LimitOrderTrancheUser by index. */
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    /** Queries a list of LimitOrderTrancheMap items. */
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    /** Queries a list of LimitOrderTrancheUser items for a given address. */
    limitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse>;
    /** Queries a LimitOrderTranche by index. */
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    /** Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    /** Queries a list of UserDeposits items. */
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    /** Queries a list of TickLiquidity items. */
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    /** Queries a InactiveLimitOrderTranche by index. */
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    /** Queries a list of InactiveLimitOrderTranche items. */
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    /** Queries a list of PoolReserves items. */
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    /** Queries a PoolReserve by index */
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    /** Queries the simulated result of a multihop swap */
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    /** Queries the simulated result of a multihop swap */
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    /** Queries a pool by pair, tick and fee */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Queries a pool by ID */
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    /** Queries a PoolMetadata by ID */
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    /** Queries a list of PoolMetadata items. */
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse>;
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse>;
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseLimitOrderTrancheUserQuery<TData> extends ReactQueryParams<QueryGetLimitOrderTrancheUserResponse, TData> {
    request: QueryGetLimitOrderTrancheUserRequest;
}
export interface UseLimitOrderTrancheUserAllQuery<TData> extends ReactQueryParams<QueryAllLimitOrderTrancheUserResponse, TData> {
    request?: QueryAllLimitOrderTrancheUserRequest;
}
export interface UseLimitOrderTrancheUserAllByAddressQuery<TData> extends ReactQueryParams<QueryAllUserLimitOrdersResponse, TData> {
    request: QueryAllUserLimitOrdersRequest;
}
export interface UseLimitOrderTrancheQuery<TData> extends ReactQueryParams<QueryGetLimitOrderTrancheResponse, TData> {
    request: QueryGetLimitOrderTrancheRequest;
}
export interface UseLimitOrderTrancheAllQuery<TData> extends ReactQueryParams<QueryAllLimitOrderTrancheResponse, TData> {
    request: QueryAllLimitOrderTrancheRequest;
}
export interface UseUserDepositsAllQuery<TData> extends ReactQueryParams<QueryAllUserDepositsResponse, TData> {
    request: QueryAllUserDepositsRequest;
}
export interface UseTickLiquidityAllQuery<TData> extends ReactQueryParams<QueryAllTickLiquidityResponse, TData> {
    request: QueryAllTickLiquidityRequest;
}
export interface UseInactiveLimitOrderTrancheQuery<TData> extends ReactQueryParams<QueryGetInactiveLimitOrderTrancheResponse, TData> {
    request: QueryGetInactiveLimitOrderTrancheRequest;
}
export interface UseInactiveLimitOrderTrancheAllQuery<TData> extends ReactQueryParams<QueryAllInactiveLimitOrderTrancheResponse, TData> {
    request?: QueryAllInactiveLimitOrderTrancheRequest;
}
export interface UsePoolReservesAllQuery<TData> extends ReactQueryParams<QueryAllPoolReservesResponse, TData> {
    request: QueryAllPoolReservesRequest;
}
export interface UsePoolReservesQuery<TData> extends ReactQueryParams<QueryGetPoolReservesResponse, TData> {
    request: QueryGetPoolReservesRequest;
}
export interface UseEstimateMultiHopSwapQuery<TData> extends ReactQueryParams<QueryEstimateMultiHopSwapResponse, TData> {
    request: QueryEstimateMultiHopSwapRequest;
}
export interface UseEstimatePlaceLimitOrderQuery<TData> extends ReactQueryParams<QueryEstimatePlaceLimitOrderResponse, TData> {
    request: QueryEstimatePlaceLimitOrderRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
    request: QueryPoolRequest;
}
export interface UsePoolByIDQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
    request: QueryPoolByIDRequest;
}
export interface UsePoolMetadataQuery<TData> extends ReactQueryParams<QueryGetPoolMetadataResponse, TData> {
    request: QueryGetPoolMetadataRequest;
}
export interface UsePoolMetadataAllQuery<TData> extends ReactQueryParams<QueryAllPoolMetadataResponse, TData> {
    request?: QueryAllPoolMetadataRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Parameters queries the parameters of the module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Queries a LimitOrderTrancheUser by index. */ useLimitOrderTrancheUser: <TData_1 = QueryGetLimitOrderTrancheUserResponse>({ request, options }: UseLimitOrderTrancheUserQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Queries a list of LimitOrderTrancheMap items. */ useLimitOrderTrancheUserAll: <TData_2 = QueryAllLimitOrderTrancheUserResponse>({ request, options }: UseLimitOrderTrancheUserAllQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** Queries a list of LimitOrderTrancheUser items for a given address. */ useLimitOrderTrancheUserAllByAddress: <TData_3 = QueryAllUserLimitOrdersResponse>({ request, options }: UseLimitOrderTrancheUserAllByAddressQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Queries a LimitOrderTranche by index. */ useLimitOrderTranche: <TData_4 = QueryGetLimitOrderTrancheResponse>({ request, options }: UseLimitOrderTrancheQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */ useLimitOrderTrancheAll: <TData_5 = QueryAllLimitOrderTrancheResponse>({ request, options }: UseLimitOrderTrancheAllQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Queries a list of UserDeposits items. */ useUserDepositsAll: <TData_6 = QueryAllUserDepositsResponse>({ request, options }: UseUserDepositsAllQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** Queries a list of TickLiquidity items. */ useTickLiquidityAll: <TData_7 = QueryAllTickLiquidityResponse>({ request, options }: UseTickLiquidityAllQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** Queries a InactiveLimitOrderTranche by index. */ useInactiveLimitOrderTranche: <TData_8 = QueryGetInactiveLimitOrderTrancheResponse>({ request, options }: UseInactiveLimitOrderTrancheQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** Queries a list of InactiveLimitOrderTranche items. */ useInactiveLimitOrderTrancheAll: <TData_9 = QueryAllInactiveLimitOrderTrancheResponse>({ request, options }: UseInactiveLimitOrderTrancheAllQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /** Queries a list of PoolReserves items. */ usePoolReservesAll: <TData_10 = QueryAllPoolReservesResponse>({ request, options }: UsePoolReservesAllQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
    /** Queries a PoolReserve by index */ usePoolReserves: <TData_11 = QueryGetPoolReservesResponse>({ request, options }: UsePoolReservesQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
    /** Queries the simulated result of a multihop swap */ useEstimateMultiHopSwap: <TData_12 = QueryEstimateMultiHopSwapResponse>({ request, options }: UseEstimateMultiHopSwapQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
    /** Queries the simulated result of a multihop swap */ useEstimatePlaceLimitOrder: <TData_13 = QueryEstimatePlaceLimitOrderResponse>({ request, options }: UseEstimatePlaceLimitOrderQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
    /** Queries a pool by pair, tick and fee */ usePool: <TData_14 = QueryPoolResponse>({ request, options }: UsePoolQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
    /** Queries a pool by ID */ usePoolByID: <TData_15 = QueryPoolResponse>({ request, options }: UsePoolByIDQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
    /** Queries a PoolMetadata by ID */ usePoolMetadata: <TData_16 = QueryGetPoolMetadataResponse>({ request, options }: UsePoolMetadataQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
    /** Queries a list of PoolMetadata items. */ usePoolMetadataAll: <TData_17 = QueryAllPoolMetadataResponse>({ request, options }: UsePoolMetadataAllQuery<TData_17>) => import("@tanstack/react-query").UseQueryResult<TData_17, Error>;
};
