import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }
  grants(request) {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
  }
  granterGrants(request) {
    const data = QueryGranterGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
    return promise.then(data => QueryGranterGrantsResponse.decode(new _m0.Reader(data)));
  }
  granteeGrants(request) {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
    return promise.then(data => QueryGranteeGrantsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    grants(request) {
      return queryService.grants(request);
    },
    granterGrants(request) {
      return queryService.granterGrants(request);
    },
    granteeGrants(request) {
      return queryService.granteeGrants(request);
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
  const useGrants = ({
    request,
    options
  }) => {
    return useQuery(["grantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.grants(request);
    }, options);
  };
  const useGranterGrants = ({
    request,
    options
  }) => {
    return useQuery(["granterGrantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.granterGrants(request);
    }, options);
  };
  const useGranteeGrants = ({
    request,
    options
  }) => {
    return useQuery(["granteeGrantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.granteeGrants(request);
    }, options);
  };
  return {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */useGrants,
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants,
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants
  };
};