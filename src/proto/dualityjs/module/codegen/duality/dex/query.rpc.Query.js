import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponse, QueryAllUserLimitOrdersRequest, QueryAllUserLimitOrdersResponse, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponse, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponse, QueryAllUserDepositsRequest, QueryAllUserDepositsResponse, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponse, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponse, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponse, QueryAllPoolReservesRequest, QueryAllPoolReservesResponse, QueryGetPoolReservesRequest, QueryGetPoolReservesResponse, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponse, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponse, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
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
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheUser(request) {
    const data = QueryGetLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUser", data);
    return promise.then(data => QueryGetLimitOrderTrancheUserResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheUserAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUserAll", data);
    return promise.then(data => QueryAllLimitOrderTrancheUserResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheUserAllByAddress(request) {
    const data = QueryAllUserLimitOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUserAllByAddress", data);
    return promise.then(data => QueryAllUserLimitOrdersResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTranche(request) {
    const data = QueryGetLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTranche", data);
    return promise.then(data => QueryGetLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  limitOrderTrancheAll(request) {
    const data = QueryAllLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheAll", data);
    return promise.then(data => QueryAllLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  userDepositsAll(request) {
    const data = QueryAllUserDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "UserDepositsAll", data);
    return promise.then(data => QueryAllUserDepositsResponse.decode(new _m0.Reader(data)));
  }
  tickLiquidityAll(request) {
    const data = QueryAllTickLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "TickLiquidityAll", data);
    return promise.then(data => QueryAllTickLiquidityResponse.decode(new _m0.Reader(data)));
  }
  inactiveLimitOrderTranche(request) {
    const data = QueryGetInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "InactiveLimitOrderTranche", data);
    return promise.then(data => QueryGetInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  inactiveLimitOrderTrancheAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "InactiveLimitOrderTrancheAll", data);
    return promise.then(data => QueryAllInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }
  poolReservesAll(request) {
    const data = QueryAllPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolReservesAll", data);
    return promise.then(data => QueryAllPoolReservesResponse.decode(new _m0.Reader(data)));
  }
  poolReserves(request) {
    const data = QueryGetPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolReserves", data);
    return promise.then(data => QueryGetPoolReservesResponse.decode(new _m0.Reader(data)));
  }
  estimateMultiHopSwap(request) {
    const data = QueryEstimateMultiHopSwapRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "EstimateMultiHopSwap", data);
    return promise.then(data => QueryEstimateMultiHopSwapResponse.decode(new _m0.Reader(data)));
  }
  estimatePlaceLimitOrder(request) {
    const data = QueryEstimatePlaceLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "EstimatePlaceLimitOrder", data);
    return promise.then(data => QueryEstimatePlaceLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  pool(request) {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  poolByID(request) {
    const data = QueryPoolByIDRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolByID", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  poolMetadata(request) {
    const data = QueryGetPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolMetadata", data);
    return promise.then(data => QueryGetPoolMetadataResponse.decode(new _m0.Reader(data)));
  }
  poolMetadataAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Query", "PoolMetadataAll", data);
    return promise.then(data => QueryAllPoolMetadataResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    limitOrderTrancheUser(request) {
      return queryService.limitOrderTrancheUser(request);
    },
    limitOrderTrancheUserAll(request) {
      return queryService.limitOrderTrancheUserAll(request);
    },
    limitOrderTrancheUserAllByAddress(request) {
      return queryService.limitOrderTrancheUserAllByAddress(request);
    },
    limitOrderTranche(request) {
      return queryService.limitOrderTranche(request);
    },
    limitOrderTrancheAll(request) {
      return queryService.limitOrderTrancheAll(request);
    },
    userDepositsAll(request) {
      return queryService.userDepositsAll(request);
    },
    tickLiquidityAll(request) {
      return queryService.tickLiquidityAll(request);
    },
    inactiveLimitOrderTranche(request) {
      return queryService.inactiveLimitOrderTranche(request);
    },
    inactiveLimitOrderTrancheAll(request) {
      return queryService.inactiveLimitOrderTrancheAll(request);
    },
    poolReservesAll(request) {
      return queryService.poolReservesAll(request);
    },
    poolReserves(request) {
      return queryService.poolReserves(request);
    },
    estimateMultiHopSwap(request) {
      return queryService.estimateMultiHopSwap(request);
    },
    estimatePlaceLimitOrder(request) {
      return queryService.estimatePlaceLimitOrder(request);
    },
    pool(request) {
      return queryService.pool(request);
    },
    poolByID(request) {
      return queryService.poolByID(request);
    },
    poolMetadata(request) {
      return queryService.poolMetadata(request);
    },
    poolMetadataAll(request) {
      return queryService.poolMetadataAll(request);
    }
  };
};
const _queryClients = new WeakMap();
const getQueryService = rpc => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = rpc => {
  const queryService = getQueryService(rpc);
  const useParams = ({
    request,
    options
  }) => {
    return useQuery(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useLimitOrderTrancheUser = ({
    request,
    options
  }) => {
    return useQuery(["limitOrderTrancheUserQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUser(request);
    }, options);
  };
  const useLimitOrderTrancheUserAll = ({
    request,
    options
  }) => {
    return useQuery(["limitOrderTrancheUserAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUserAll(request);
    }, options);
  };
  const useLimitOrderTrancheUserAllByAddress = ({
    request,
    options
  }) => {
    return useQuery(["limitOrderTrancheUserAllByAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUserAllByAddress(request);
    }, options);
  };
  const useLimitOrderTranche = ({
    request,
    options
  }) => {
    return useQuery(["limitOrderTrancheQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTranche(request);
    }, options);
  };
  const useLimitOrderTrancheAll = ({
    request,
    options
  }) => {
    return useQuery(["limitOrderTrancheAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheAll(request);
    }, options);
  };
  const useUserDepositsAll = ({
    request,
    options
  }) => {
    return useQuery(["userDepositsAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userDepositsAll(request);
    }, options);
  };
  const useTickLiquidityAll = ({
    request,
    options
  }) => {
    return useQuery(["tickLiquidityAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tickLiquidityAll(request);
    }, options);
  };
  const useInactiveLimitOrderTranche = ({
    request,
    options
  }) => {
    return useQuery(["inactiveLimitOrderTrancheQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inactiveLimitOrderTranche(request);
    }, options);
  };
  const useInactiveLimitOrderTrancheAll = ({
    request,
    options
  }) => {
    return useQuery(["inactiveLimitOrderTrancheAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inactiveLimitOrderTrancheAll(request);
    }, options);
  };
  const usePoolReservesAll = ({
    request,
    options
  }) => {
    return useQuery(["poolReservesAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolReservesAll(request);
    }, options);
  };
  const usePoolReserves = ({
    request,
    options
  }) => {
    return useQuery(["poolReservesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolReserves(request);
    }, options);
  };
  const useEstimateMultiHopSwap = ({
    request,
    options
  }) => {
    return useQuery(["estimateMultiHopSwapQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateMultiHopSwap(request);
    }, options);
  };
  const useEstimatePlaceLimitOrder = ({
    request,
    options
  }) => {
    return useQuery(["estimatePlaceLimitOrderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimatePlaceLimitOrder(request);
    }, options);
  };
  const usePool = ({
    request,
    options
  }) => {
    return useQuery(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const usePoolByID = ({
    request,
    options
  }) => {
    return useQuery(["poolByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolByID(request);
    }, options);
  };
  const usePoolMetadata = ({
    request,
    options
  }) => {
    return useQuery(["poolMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolMetadata(request);
    }, options);
  };
  const usePoolMetadataAll = ({
    request,
    options
  }) => {
    return useQuery(["poolMetadataAllQuery", request], () => {
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