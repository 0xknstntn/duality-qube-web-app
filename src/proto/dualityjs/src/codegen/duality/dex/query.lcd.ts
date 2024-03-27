import { setPaginationParams } from '../../helpers';
import { LCDClient } from '@cosmology/lcd';
import { QueryParamsRequest, QueryParamsResponse, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponse, QueryAllUserLimitOrdersRequest, QueryAllUserLimitOrdersResponse, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponse, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponse, QueryAllUserDepositsRequest, QueryAllUserDepositsResponse, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponse, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponse, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponse, QueryAllPoolReservesRequest, QueryAllPoolReservesResponse, QueryGetPoolReservesRequest, QueryGetPoolReservesResponse, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponse, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponse, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponse } from './query';
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.limitOrderTrancheUser = this.limitOrderTrancheUser.bind(this);
    this.limitOrderTrancheUserAll = this.limitOrderTrancheUserAll.bind(this);
    this.limitOrderTrancheUserAllByAddress = this.limitOrderTrancheUserAllByAddress.bind(this);
    this.limitOrderTranche = this.limitOrderTranche.bind(this);
    this.limitOrderTrancheAll = this.limitOrderTrancheAll.bind(this);
    this.userDepositsAll = this.userDepositsAll.bind(this);
    this.tickLiquidityAll = this.tickLiquidityAll.bind(this);
    this.inactiveLimitOrderTranche = this.inactiveLimitOrderTranche.bind(this);
    this.inactiveLimitOrderTrancheAll = this.inactiveLimitOrderTrancheAll.bind(this);
    this.poolReservesAll = this.poolReservesAll.bind(this);
    this.poolReserves = this.poolReserves.bind(this);
    this.estimateMultiHopSwap = this.estimateMultiHopSwap.bind(this);
    this.estimatePlaceLimitOrder = this.estimatePlaceLimitOrder.bind(this);
    this.pool = this.pool.bind(this);
    this.poolByID = this.poolByID.bind(this);
    this.poolMetadata = this.poolMetadata.bind(this);
    this.poolMetadataAll = this.poolMetadataAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = 'duality/dex/params';
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  }
  /* Queries a LimitOrderTrancheUser by index. */
  async limitOrderTrancheUser(params: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse> {
    const endpoint = `duality/dex/limit_order_tranche_user/${params.address}/${params.trancheKey}`;
    return QueryGetLimitOrderTrancheUserResponse.fromJSON(await this.req.get<QueryGetLimitOrderTrancheUserResponse>(endpoint));
  }
  /* Queries a list of LimitOrderTrancheMap items. */
  async limitOrderTrancheUserAll(params: QueryAllLimitOrderTrancheUserRequest = {
    pagination: undefined
  }): Promise<QueryAllLimitOrderTrancheUserResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = 'duality/dex/limit_order_tranche_user';
    return QueryAllLimitOrderTrancheUserResponse.fromJSON(await this.req.get<QueryAllLimitOrderTrancheUserResponse>(endpoint, options));
  }
  /* Queries a list of LimitOrderTrancheUser items for a given address. */
  async limitOrderTrancheUserAllByAddress(params: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/user/limit_orders/${params.address}`;
    return QueryAllUserLimitOrdersResponse.fromJSON(await this.req.get<QueryAllUserLimitOrdersResponse>(endpoint, options));
  }
  /* Queries a LimitOrderTranche by index. */
  async limitOrderTranche(params: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse> {
    const endpoint = `duality/dex/limit_order_tranche/${params.pairID}/${params.tokenIn}/${params.tickIndex}/${params.trancheKey}`;
    return QueryGetLimitOrderTrancheResponse.fromJSON(await this.req.get<QueryGetLimitOrderTrancheResponse>(endpoint));
  }
  /* Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */
  async limitOrderTrancheAll(params: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/limit_order_tranche/${params.pairID}/${params.tokenIn}`;
    return QueryAllLimitOrderTrancheResponse.fromJSON(await this.req.get<QueryAllLimitOrderTrancheResponse>(endpoint, options));
  }
  /* Queries a list of UserDeposits items. */
  async userDepositsAll(params: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/user/deposits/${params.address}`;
    return QueryAllUserDepositsResponse.fromJSON(await this.req.get<QueryAllUserDepositsResponse>(endpoint, options));
  }
  /* Queries a list of TickLiquidity items. */
  async tickLiquidityAll(params: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/tick_liquidity/${params.pairID}/${params.tokenIn}`;
    return QueryAllTickLiquidityResponse.fromJSON(await this.req.get<QueryAllTickLiquidityResponse>(endpoint, options));
  }
  /* Queries a InactiveLimitOrderTranche by index. */
  async inactiveLimitOrderTranche(params: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse> {
    const endpoint = `duality/dex/filled_limit_order_tranche/${params.pairID}/${params.tokenIn}/${params.tickIndex}/${params.trancheKey}`;
    return QueryGetInactiveLimitOrderTrancheResponse.fromJSON(await this.req.get<QueryGetInactiveLimitOrderTrancheResponse>(endpoint));
  }
  /* Queries a list of InactiveLimitOrderTranche items. */
  async inactiveLimitOrderTrancheAll(params: QueryAllInactiveLimitOrderTrancheRequest = {
    pagination: undefined
  }): Promise<QueryAllInactiveLimitOrderTrancheResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = 'duality/dex/filled_limit_order_tranche';
    return QueryAllInactiveLimitOrderTrancheResponse.fromJSON(await this.req.get<QueryAllInactiveLimitOrderTrancheResponse>(endpoint, options));
  }
  /* Queries a list of PoolReserves items. */
  async poolReservesAll(params: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/pool_reserves/${params.pairID}/${params.tokenIn}`;
    return QueryAllPoolReservesResponse.fromJSON(await this.req.get<QueryAllPoolReservesResponse>(endpoint, options));
  }
  /* Queries a PoolReserve by index */
  async poolReserves(params: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse> {
    const endpoint = `duality/dex/pool_reserves/${params.pairID}/${params.tokenIn}/${params.tickIndex}/${params.fee}`;
    return QueryGetPoolReservesResponse.fromJSON(await this.req.get<QueryGetPoolReservesResponse>(endpoint));
  }
  /* Queries the simulated result of a multihop swap */
  async estimateMultiHopSwap(params: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== 'undefined') {
      options.params.creator = params.creator;
    }
    if (typeof params?.receiver !== 'undefined') {
      options.params.receiver = params.receiver;
    }
    if (typeof params?.routes !== 'undefined') {
      options.params.routes = params.routes;
    }
    if (typeof params?.amountIn !== 'undefined') {
      options.params.amountIn = params.amountIn;
    }
    if (typeof params?.exitLimitPrice !== 'undefined') {
      options.params.exitLimitPrice = params.exitLimitPrice;
    }
    if (typeof params?.pickBestRoute !== 'undefined') {
      options.params.pickBestRoute = params.pickBestRoute;
    }
    const endpoint = 'duality/dex/estimate_multi_hop_swap';
    return QueryEstimateMultiHopSwapResponse.fromJSON(await this.req.get<QueryEstimateMultiHopSwapResponse>(endpoint, options));
  }
  /* Queries the simulated result of a multihop swap */
  async estimatePlaceLimitOrder(params: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== 'undefined') {
      options.params.creator = params.creator;
    }
    if (typeof params?.receiver !== 'undefined') {
      options.params.receiver = params.receiver;
    }
    if (typeof params?.tokenIn !== 'undefined') {
      options.params.tokenIn = params.tokenIn;
    }
    if (typeof params?.tokenOut !== 'undefined') {
      options.params.tokenOut = params.tokenOut;
    }
    if (typeof params?.tickIndexInToOut !== 'undefined') {
      options.params.tickIndexInToOut = params.tickIndexInToOut;
    }
    if (typeof params?.amountIn !== 'undefined') {
      options.params.amountIn = params.amountIn;
    }
    if (typeof params?.orderType !== 'undefined') {
      options.params.orderType = params.orderType;
    }
    if (typeof params?.expirationTime !== 'undefined') {
      options.params.expirationTime = params.expirationTime;
    }
    if (typeof params?.maxAmountOut !== 'undefined') {
      options.params.maxAmountOut = params.maxAmountOut;
    }
    const endpoint = 'duality/dex/estimate_place_limit_order';
    return QueryEstimatePlaceLimitOrderResponse.fromJSON(await this.req.get<QueryEstimatePlaceLimitOrderResponse>(endpoint, options));
  }
  /* Queries a pool by pair, tick and fee */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponse> {
    const endpoint = `duality/dex/pool/${params.pairID}/${params.tickIndex}/${params.fee}`;
    return QueryPoolResponse.fromJSON(await this.req.get<QueryPoolResponse>(endpoint));
  }
  /* Queries a pool by ID */
  async poolByID(params: QueryPoolByIDRequest): Promise<QueryPoolResponse> {
    const endpoint = `duality/dex/pool/${params.poolID}`;
    return QueryPoolResponse.fromJSON(await this.req.get<QueryPoolResponse>(endpoint));
  }
  /* Queries a PoolMetadata by ID */
  async poolMetadata(params: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse> {
    const endpoint = `duality/dex/pool_metadata/${params.id}`;
    return QueryGetPoolMetadataResponse.fromJSON(await this.req.get<QueryGetPoolMetadataResponse>(endpoint));
  }
  /* Queries a list of PoolMetadata items. */
  async poolMetadataAll(params: QueryAllPoolMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolMetadataResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = 'duality/dex/pool_metadata';
    return QueryAllPoolMetadataResponse.fromJSON(await this.req.get<QueryAllPoolMetadataResponse>(endpoint, options));
  }
}