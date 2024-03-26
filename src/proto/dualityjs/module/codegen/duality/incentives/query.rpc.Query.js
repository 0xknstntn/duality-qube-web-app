import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { GetModuleStatusRequest, GetModuleStatusResponse, GetGaugeByIDRequest, GetGaugeByIDResponse, GetGaugesRequest, GetGaugesResponse, GetStakeByIDRequest, GetStakeByIDResponse, GetStakesRequest, GetStakesResponse, GetFutureRewardEstimateRequest, GetFutureRewardEstimateResponse, GetAccountHistoryRequest, GetAccountHistoryResponse, GetGaugeQualifyingValueRequest, GetGaugeQualifyingValueResponse } from "./query";
/** Query defines the gRPC querier service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.getModuleStatus = this.getModuleStatus.bind(this);
    this.getGaugeByID = this.getGaugeByID.bind(this);
    this.getGauges = this.getGauges.bind(this);
    this.getStakeByID = this.getStakeByID.bind(this);
    this.getStakes = this.getStakes.bind(this);
    this.getFutureRewardEstimate = this.getFutureRewardEstimate.bind(this);
    this.getAccountHistory = this.getAccountHistory.bind(this);
    this.getGaugeQualifyingValue = this.getGaugeQualifyingValue.bind(this);
  }
  getModuleStatus(request = {}) {
    const data = GetModuleStatusRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetModuleStatus", data);
    return promise.then(data => GetModuleStatusResponse.decode(new _m0.Reader(data)));
  }
  getGaugeByID(request) {
    const data = GetGaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetGaugeByID", data);
    return promise.then(data => GetGaugeByIDResponse.decode(new _m0.Reader(data)));
  }
  getGauges(request) {
    const data = GetGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetGauges", data);
    return promise.then(data => GetGaugesResponse.decode(new _m0.Reader(data)));
  }
  getStakeByID(request) {
    const data = GetStakeByIDRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetStakeByID", data);
    return promise.then(data => GetStakeByIDResponse.decode(new _m0.Reader(data)));
  }
  getStakes(request) {
    const data = GetStakesRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetStakes", data);
    return promise.then(data => GetStakesResponse.decode(new _m0.Reader(data)));
  }
  getFutureRewardEstimate(request) {
    const data = GetFutureRewardEstimateRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetFutureRewardEstimate", data);
    return promise.then(data => GetFutureRewardEstimateResponse.decode(new _m0.Reader(data)));
  }
  getAccountHistory(request) {
    const data = GetAccountHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetAccountHistory", data);
    return promise.then(data => GetAccountHistoryResponse.decode(new _m0.Reader(data)));
  }
  getGaugeQualifyingValue(request) {
    const data = GetGaugeQualifyingValueRequest.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Query", "GetGaugeQualifyingValue", data);
    return promise.then(data => GetGaugeQualifyingValueResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getModuleStatus(request) {
      return queryService.getModuleStatus(request);
    },
    getGaugeByID(request) {
      return queryService.getGaugeByID(request);
    },
    getGauges(request) {
      return queryService.getGauges(request);
    },
    getStakeByID(request) {
      return queryService.getStakeByID(request);
    },
    getStakes(request) {
      return queryService.getStakes(request);
    },
    getFutureRewardEstimate(request) {
      return queryService.getFutureRewardEstimate(request);
    },
    getAccountHistory(request) {
      return queryService.getAccountHistory(request);
    },
    getGaugeQualifyingValue(request) {
      return queryService.getGaugeQualifyingValue(request);
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
  const useGetModuleStatus = ({
    request,
    options
  }) => {
    return useQuery(["getModuleStatusQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getModuleStatus(request);
    }, options);
  };
  const useGetGaugeByID = ({
    request,
    options
  }) => {
    return useQuery(["getGaugeByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getGaugeByID(request);
    }, options);
  };
  const useGetGauges = ({
    request,
    options
  }) => {
    return useQuery(["getGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getGauges(request);
    }, options);
  };
  const useGetStakeByID = ({
    request,
    options
  }) => {
    return useQuery(["getStakeByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getStakeByID(request);
    }, options);
  };
  const useGetStakes = ({
    request,
    options
  }) => {
    return useQuery(["getStakesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getStakes(request);
    }, options);
  };
  const useGetFutureRewardEstimate = ({
    request,
    options
  }) => {
    return useQuery(["getFutureRewardEstimateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getFutureRewardEstimate(request);
    }, options);
  };
  const useGetAccountHistory = ({
    request,
    options
  }) => {
    return useQuery(["getAccountHistoryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getAccountHistory(request);
    }, options);
  };
  const useGetGaugeQualifyingValue = ({
    request,
    options
  }) => {
    return useQuery(["getGaugeQualifyingValueQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getGaugeQualifyingValue(request);
    }, options);
  };
  return {
    /** GetModuleStatus returns a rundown of coins in the module and their status */useGetModuleStatus,
    /** GetGaugeByID returns a gauge by its ID */useGetGaugeByID,
    /** GetGauges returns gauges according to the filter provided */useGetGauges,
    /** GetStakeByID returns a stake by its ID */useGetStakeByID,
    /** GetStakes returns stakes by the filter provided. At least one filter must be provided. */useGetStakes,
    /**
     * GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
     * time in the future. The requestor either provides an address or a set of locks
     * for which they want to find the associated rewards.
     */
    useGetFutureRewardEstimate,
    /** GetAccountHistory returns the total accumulated rewards per denom for a given user. */useGetAccountHistory,
    /**
     * Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
     * the prospective future rewards of staking.
     */
    useGetGaugeQualifyingValue
  };
};