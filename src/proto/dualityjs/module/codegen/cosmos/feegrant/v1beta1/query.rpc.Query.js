import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }
  allowance(request) {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then(data => QueryAllowanceResponse.decode(new _m0.Reader(data)));
  }
  allowances(request) {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then(data => QueryAllowancesResponse.decode(new _m0.Reader(data)));
  }
  allowancesByGranter(request) {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
    return promise.then(data => QueryAllowancesByGranterResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowance(request) {
      return queryService.allowance(request);
    },
    allowances(request) {
      return queryService.allowances(request);
    },
    allowancesByGranter(request) {
      return queryService.allowancesByGranter(request);
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
  const useAllowance = ({
    request,
    options
  }) => {
    return useQuery(["allowanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowance(request);
    }, options);
  };
  const useAllowances = ({
    request,
    options
  }) => {
    return useQuery(["allowancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowances(request);
    }, options);
  };
  const useAllowancesByGranter = ({
    request,
    options
  }) => {
    return useQuery(["allowancesByGranterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowancesByGranter(request);
    }, options);
  };
  return {
    /** Allowance returns fee granted to the grantee by the granter. */useAllowance,
    /** Allowances returns all the grants for address. */useAllowances,
    /**
     * AllowancesByGranter returns all the grants given by an address
     * 
     * Since: cosmos-sdk 0.46
     */
    useAllowancesByGranter
  };
};