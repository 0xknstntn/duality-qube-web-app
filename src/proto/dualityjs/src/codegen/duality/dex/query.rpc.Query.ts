import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse> {
    const data = QueryGetLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUser", data);
    return promise.then(data => QueryGetLimitOrderTrancheUserResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheUserAll(request: QueryAllLimitOrderTrancheUserRequest = {
    pagination: undefined
  }): Promise<QueryAllLimitOrderTrancheUserResponse> {
    const data = QueryAllLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUserAll", data);
    return promise.then(data => QueryAllLimitOrderTrancheUserResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse> {
    const data = QueryAllUserLimitOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUserAllByAddress", data);
    return promise.then(data => QueryAllUserLimitOrdersResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse> {
    const data = QueryGetLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTranche", data);
    return promise.then(data => QueryGetLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse> {
    const data = QueryAllLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheAll", data);
    return promise.then(data => QueryAllLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse> {
    const data = QueryAllUserDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "UserDepositsAll", data);
    return promise.then(data => QueryAllUserDepositsResponse.decode(new _m0.Reader(data)));
  }
  tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse> {
    const data = QueryAllTickLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "TickLiquidityAll", data);
    return promise.then(data => QueryAllTickLiquidityResponse.decode(new _m0.Reader(data)));
  }
  inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse> {
    const data = QueryGetInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "InactiveLimitOrderTranche", data);
    return promise.then(data => QueryGetInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  inactiveLimitOrderTrancheAll(request: QueryAllInactiveLimitOrderTrancheRequest = {
    pagination: undefined
  }): Promise<QueryAllInactiveLimitOrderTrancheResponse> {
    const data = QueryAllInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "InactiveLimitOrderTrancheAll", data);
    return promise.then(data => QueryAllInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse> {
    const data = QueryAllPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolReservesAll", data);
    return promise.then(data => QueryAllPoolReservesResponse.decode(new _m0.Reader(data)));
  }
  poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse> {
    const data = QueryGetPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolReserves", data);
    return promise.then(data => QueryGetPoolReservesResponse.decode(new _m0.Reader(data)));
  }
  estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse> {
    const data = QueryEstimateMultiHopSwapRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "EstimateMultiHopSwap", data);
    return promise.then(data => QueryEstimateMultiHopSwapResponse.decode(new _m0.Reader(data)));
  }
  estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse> {
    const data = QueryEstimatePlaceLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "EstimatePlaceLimitOrder", data);
    return promise.then(data => QueryEstimatePlaceLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByIDRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolByID", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse> {
    const data = QueryGetPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolMetadata", data);
    return promise.then(data => QueryGetPoolMetadataResponse.decode(new _m0.Reader(data)));
  }
  poolMetadataAll(request: QueryAllPoolMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolMetadataResponse> {
    const data = QueryAllPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolMetadataAll", data);
    return promise.then(data => QueryAllPoolMetadataResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse> {
      return queryService.limitOrderTrancheUser(request);
    },
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse> {
      return queryService.limitOrderTrancheUserAll(request);
    },
    limitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse> {
      return queryService.limitOrderTrancheUserAllByAddress(request);
    },
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse> {
      return queryService.limitOrderTranche(request);
    },
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse> {
      return queryService.limitOrderTrancheAll(request);
    },
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse> {
      return queryService.userDepositsAll(request);
    },
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse> {
      return queryService.tickLiquidityAll(request);
    },
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse> {
      return queryService.inactiveLimitOrderTranche(request);
    },
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse> {
      return queryService.inactiveLimitOrderTrancheAll(request);
    },
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse> {
      return queryService.poolReservesAll(request);
    },
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse> {
      return queryService.poolReserves(request);
    },
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse> {
      return queryService.estimateMultiHopSwap(request);
    },
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse> {
      return queryService.estimatePlaceLimitOrder(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse> {
      return queryService.poolByID(request);
    },
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse> {
      return queryService.poolMetadata(request);
    },
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse> {
      return queryService.poolMetadataAll(request);
    }
  };
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
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useLimitOrderTrancheUser = <TData = QueryGetLimitOrderTrancheUserResponse,>({
    request,
    options
  }: UseLimitOrderTrancheUserQuery<TData>) => {
    return useQuery<QueryGetLimitOrderTrancheUserResponse, Error, TData>(["limitOrderTrancheUserQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUser(request);
    }, options);
  };
  const useLimitOrderTrancheUserAll = <TData = QueryAllLimitOrderTrancheUserResponse,>({
    request,
    options
  }: UseLimitOrderTrancheUserAllQuery<TData>) => {
    return useQuery<QueryAllLimitOrderTrancheUserResponse, Error, TData>(["limitOrderTrancheUserAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUserAll(request);
    }, options);
  };
  const useLimitOrderTrancheUserAllByAddress = <TData = QueryAllUserLimitOrdersResponse,>({
    request,
    options
  }: UseLimitOrderTrancheUserAllByAddressQuery<TData>) => {
    return useQuery<QueryAllUserLimitOrdersResponse, Error, TData>(["limitOrderTrancheUserAllByAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUserAllByAddress(request);
    }, options);
  };
  const useLimitOrderTranche = <TData = QueryGetLimitOrderTrancheResponse,>({
    request,
    options
  }: UseLimitOrderTrancheQuery<TData>) => {
    return useQuery<QueryGetLimitOrderTrancheResponse, Error, TData>(["limitOrderTrancheQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTranche(request);
    }, options);
  };
  const useLimitOrderTrancheAll = <TData = QueryAllLimitOrderTrancheResponse,>({
    request,
    options
  }: UseLimitOrderTrancheAllQuery<TData>) => {
    return useQuery<QueryAllLimitOrderTrancheResponse, Error, TData>(["limitOrderTrancheAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheAll(request);
    }, options);
  };
  const useUserDepositsAll = <TData = QueryAllUserDepositsResponse,>({
    request,
    options
  }: UseUserDepositsAllQuery<TData>) => {
    return useQuery<QueryAllUserDepositsResponse, Error, TData>(["userDepositsAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userDepositsAll(request);
    }, options);
  };
  const useTickLiquidityAll = <TData = QueryAllTickLiquidityResponse,>({
    request,
    options
  }: UseTickLiquidityAllQuery<TData>) => {
    return useQuery<QueryAllTickLiquidityResponse, Error, TData>(["tickLiquidityAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tickLiquidityAll(request);
    }, options);
  };
  const useInactiveLimitOrderTranche = <TData = QueryGetInactiveLimitOrderTrancheResponse,>({
    request,
    options
  }: UseInactiveLimitOrderTrancheQuery<TData>) => {
    return useQuery<QueryGetInactiveLimitOrderTrancheResponse, Error, TData>(["inactiveLimitOrderTrancheQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inactiveLimitOrderTranche(request);
    }, options);
  };
  const useInactiveLimitOrderTrancheAll = <TData = QueryAllInactiveLimitOrderTrancheResponse,>({
    request,
    options
  }: UseInactiveLimitOrderTrancheAllQuery<TData>) => {
    return useQuery<QueryAllInactiveLimitOrderTrancheResponse, Error, TData>(["inactiveLimitOrderTrancheAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inactiveLimitOrderTrancheAll(request);
    }, options);
  };
  const usePoolReservesAll = <TData = QueryAllPoolReservesResponse,>({
    request,
    options
  }: UsePoolReservesAllQuery<TData>) => {
    return useQuery<QueryAllPoolReservesResponse, Error, TData>(["poolReservesAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolReservesAll(request);
    }, options);
  };
  const usePoolReserves = <TData = QueryGetPoolReservesResponse,>({
    request,
    options
  }: UsePoolReservesQuery<TData>) => {
    return useQuery<QueryGetPoolReservesResponse, Error, TData>(["poolReservesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolReserves(request);
    }, options);
  };
  const useEstimateMultiHopSwap = <TData = QueryEstimateMultiHopSwapResponse,>({
    request,
    options
  }: UseEstimateMultiHopSwapQuery<TData>) => {
    return useQuery<QueryEstimateMultiHopSwapResponse, Error, TData>(["estimateMultiHopSwapQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateMultiHopSwap(request);
    }, options);
  };
  const useEstimatePlaceLimitOrder = <TData = QueryEstimatePlaceLimitOrderResponse,>({
    request,
    options
  }: UseEstimatePlaceLimitOrderQuery<TData>) => {
    return useQuery<QueryEstimatePlaceLimitOrderResponse, Error, TData>(["estimatePlaceLimitOrderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimatePlaceLimitOrder(request);
    }, options);
  };
  const usePool = <TData = QueryPoolResponse,>({
    request,
    options
  }: UsePoolQuery<TData>) => {
    return useQuery<QueryPoolResponse, Error, TData>(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const usePoolByID = <TData = QueryPoolResponse,>({
    request,
    options
  }: UsePoolByIDQuery<TData>) => {
    return useQuery<QueryPoolResponse, Error, TData>(["poolByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolByID(request);
    }, options);
  };
  const usePoolMetadata = <TData = QueryGetPoolMetadataResponse,>({
    request,
    options
  }: UsePoolMetadataQuery<TData>) => {
    return useQuery<QueryGetPoolMetadataResponse, Error, TData>(["poolMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolMetadata(request);
    }, options);
  };
  const usePoolMetadataAll = <TData = QueryAllPoolMetadataResponse,>({
    request,
    options
  }: UsePoolMetadataAllQuery<TData>) => {
    return useQuery<QueryAllPoolMetadataResponse, Error, TData>(["poolMetadataAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolMetadataAll(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** Queries a LimitOrderTrancheUser by index. */useLimitOrderTrancheUser,
    /** Queries a list of LimitOrderTrancheMap items. */useLimitOrderTrancheUserAll,
    /** Queries a list of LimitOrderTrancheUser items for a given address. */useLimitOrderTrancheUserAllByAddress,
    /** Queries a LimitOrderTranche by index. */useLimitOrderTranche,
    /** Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */useLimitOrderTrancheAll,
    /** Queries a list of UserDeposits items. */useUserDepositsAll,
    /** Queries a list of TickLiquidity items. */useTickLiquidityAll,
    /** Queries a InactiveLimitOrderTranche by index. */useInactiveLimitOrderTranche,
    /** Queries a list of InactiveLimitOrderTranche items. */useInactiveLimitOrderTrancheAll,
    /** Queries a list of PoolReserves items. */usePoolReservesAll,
    /** Queries a PoolReserve by index */usePoolReserves,
    /** Queries the simulated result of a multihop swap */useEstimateMultiHopSwap,
    /** Queries the simulated result of a multihop swap */useEstimatePlaceLimitOrder,
    /** Queries a pool by pair, tick and fee */usePool,
    /** Queries a pool by ID */usePoolByID,
    /** Queries a PoolMetadata by ID */usePoolMetadata,
    /** Queries a list of PoolMetadata items. */usePoolMetadataAll
  };
};