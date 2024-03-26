import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
/** Query defines the gRPC upgrade querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  currentPlan(request = {}) {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
  }
  appliedPlan(request) {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
  }
  upgradedConsensusState(request) {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }
  moduleVersions(request) {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
  }
  authority(request = {}) {
    const data = QueryAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
    return promise.then(data => QueryAuthorityResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentPlan(request) {
      return queryService.currentPlan(request);
    },
    appliedPlan(request) {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions(request) {
      return queryService.moduleVersions(request);
    },
    authority(request) {
      return queryService.authority(request);
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
  const useCurrentPlan = ({
    request,
    options
  }) => {
    return useQuery(["currentPlanQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentPlan(request);
    }, options);
  };
  const useAppliedPlan = ({
    request,
    options
  }) => {
    return useQuery(["appliedPlanQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.appliedPlan(request);
    }, options);
  };
  const useUpgradedConsensusState = ({
    request,
    options
  }) => {
    return useQuery(["upgradedConsensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedConsensusState(request);
    }, options);
  };
  const useModuleVersions = ({
    request,
    options
  }) => {
    return useQuery(["moduleVersionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleVersions(request);
    }, options);
  };
  const useAuthority = ({
    request,
    options
  }) => {
    return useQuery(["authorityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.authority(request);
    }, options);
  };
  return {
    /** CurrentPlan queries the current upgrade plan. */useCurrentPlan,
    /** AppliedPlan queries a previously applied upgrade plan by its name. */useAppliedPlan,
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    useUpgradedConsensusState,
    /**
     * ModuleVersions queries the list of module versions from state.
     * 
     * Since: cosmos-sdk 0.43
     */
    useModuleVersions,
    /**
     * Returns the account with authority to conduct upgrades
     * 
     * Since: cosmos-sdk 0.46
     */
    useAuthority
  };
};