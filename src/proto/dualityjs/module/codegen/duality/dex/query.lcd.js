import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../helpers";
import { QueryParamsResponse, QueryGetLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserResponse, QueryAllUserLimitOrdersResponse, QueryGetLimitOrderTrancheResponse, QueryAllLimitOrderTrancheResponse, QueryAllUserDepositsResponse, QueryAllTickLiquidityResponse, QueryGetInactiveLimitOrderTrancheResponse, QueryAllInactiveLimitOrderTrancheResponse, QueryAllPoolReservesResponse, QueryGetPoolReservesResponse, QueryEstimateMultiHopSwapResponse, QueryEstimatePlaceLimitOrderResponse, QueryPoolResponse, QueryGetPoolMetadataResponse, QueryAllPoolMetadataResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
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
  async params(_params = {}) {
    const endpoint = `duality/dex/params`;
    return QueryParamsResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a LimitOrderTrancheUser by index. */
  async limitOrderTrancheUser(params) {
    const endpoint = `duality/dex/limit_order_tranche_user/${params.address}/${params.trancheKey}`;
    return QueryGetLimitOrderTrancheUserResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a list of LimitOrderTrancheMap items. */
  async limitOrderTrancheUserAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/limit_order_tranche_user`;
    return QueryAllLimitOrderTrancheUserResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a list of LimitOrderTrancheUser items for a given address. */
  async limitOrderTrancheUserAllByAddress(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/user/limit_orders/${params.address}`;
    return QueryAllUserLimitOrdersResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a LimitOrderTranche by index. */
  async limitOrderTranche(params) {
    const endpoint = `duality/dex/limit_order_tranche/${params.pairID}/${params.tokenIn}/${params.tickIndex}/${params.trancheKey}`;
    return QueryGetLimitOrderTrancheResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */
  async limitOrderTrancheAll(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/limit_order_tranche/${params.pairID}/${params.tokenIn}`;
    return QueryAllLimitOrderTrancheResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a list of UserDeposits items. */
  async userDepositsAll(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/user/deposits/${params.address}`;
    return QueryAllUserDepositsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a list of TickLiquidity items. */
  async tickLiquidityAll(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/tick_liquidity/${params.pairID}/${params.tokenIn}`;
    return QueryAllTickLiquidityResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a InactiveLimitOrderTranche by index. */
  async inactiveLimitOrderTranche(params) {
    const endpoint = `duality/dex/filled_limit_order_tranche/${params.pairID}/${params.tokenIn}/${params.tickIndex}/${params.trancheKey}`;
    return QueryGetInactiveLimitOrderTrancheResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a list of InactiveLimitOrderTranche items. */
  async inactiveLimitOrderTrancheAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/filled_limit_order_tranche`;
    return QueryAllInactiveLimitOrderTrancheResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a list of PoolReserves items. */
  async poolReservesAll(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/pool_reserves/${params.pairID}/${params.tokenIn}`;
    return QueryAllPoolReservesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a PoolReserve by index */
  async poolReserves(params) {
    const endpoint = `duality/dex/pool_reserves/${params.pairID}/${params.tokenIn}/${params.tickIndex}/${params.fee}`;
    return QueryGetPoolReservesResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries the simulated result of a multihop swap */
  async estimateMultiHopSwap(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.creator) !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.receiver) !== "undefined") {
      options.params.receiver = params.receiver;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.routes) !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.amountIn) !== "undefined") {
      options.params.amountIn = params.amountIn;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.exitLimitPrice) !== "undefined") {
      options.params.exitLimitPrice = params.exitLimitPrice;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pickBestRoute) !== "undefined") {
      options.params.pickBestRoute = params.pickBestRoute;
    }
    const endpoint = `duality/dex/estimate_multi_hop_swap`;
    return QueryEstimateMultiHopSwapResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries the simulated result of a multihop swap */
  async estimatePlaceLimitOrder(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.creator) !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.receiver) !== "undefined") {
      options.params.receiver = params.receiver;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.tokenIn) !== "undefined") {
      options.params.tokenIn = params.tokenIn;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.tokenOut) !== "undefined") {
      options.params.tokenOut = params.tokenOut;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.tickIndexInToOut) !== "undefined") {
      options.params.tickIndexInToOut = params.tickIndexInToOut;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.amountIn) !== "undefined") {
      options.params.amountIn = params.amountIn;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.orderType) !== "undefined") {
      options.params.orderType = params.orderType;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.expirationTime) !== "undefined") {
      options.params.expirationTime = params.expirationTime;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.maxAmountOut) !== "undefined") {
      options.params.maxAmountOut = params.maxAmountOut;
    }
    const endpoint = `duality/dex/estimate_place_limit_order`;
    return QueryEstimatePlaceLimitOrderResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Queries a pool by pair, tick and fee */
  async pool(params) {
    const endpoint = `duality/dex/pool/${params.pairID}/${params.tickIndex}/${params.fee}`;
    return QueryPoolResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a pool by ID */
  async poolByID(params) {
    const endpoint = `duality/dex/pool/${params.poolID}`;
    return QueryPoolResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a PoolMetadata by ID */
  async poolMetadata(params) {
    const endpoint = `duality/dex/pool_metadata/${params.id}`;
    return QueryGetPoolMetadataResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Queries a list of PoolMetadata items. */
  async poolMetadataAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `duality/dex/pool_metadata`;
    return QueryAllPoolMetadataResponse.fromJSON(await this.req.get(endpoint, options));
  }
}