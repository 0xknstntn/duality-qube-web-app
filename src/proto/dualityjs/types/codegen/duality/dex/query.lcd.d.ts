import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponse, QueryAllUserLimitOrdersRequest, QueryAllUserLimitOrdersResponse, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponse, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponse, QueryAllUserDepositsRequest, QueryAllUserDepositsResponse, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponse, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponse, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponse, QueryAllPoolReservesRequest, QueryAllPoolReservesResponse, QueryGetPoolReservesRequest, QueryGetPoolReservesResponse, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponse, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponse, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    limitOrderTrancheUser(params: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAll(params?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAllByAddress(params: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse>;
    limitOrderTranche(params: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    limitOrderTrancheAll(params: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    userDepositsAll(params: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    tickLiquidityAll(params: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    inactiveLimitOrderTranche(params: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    inactiveLimitOrderTrancheAll(params?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    poolReservesAll(params: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    poolReserves(params: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    estimateMultiHopSwap(params: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    estimatePlaceLimitOrder(params: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    pool(params: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByID(params: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    poolMetadata(params: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    poolMetadataAll(params?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
}
