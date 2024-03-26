import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  evidence(request) {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then(data => QueryEvidenceResponse.decode(new _m0.Reader(data)));
  }
  allEvidence(request = {
    pagination: undefined
  }) {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then(data => QueryAllEvidenceResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    evidence(request) {
      return queryService.evidence(request);
    },
    allEvidence(request) {
      return queryService.allEvidence(request);
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
  const useEvidence = ({
    request,
    options
  }) => {
    return useQuery(["evidenceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.evidence(request);
    }, options);
  };
  const useAllEvidence = ({
    request,
    options
  }) => {
    return useQuery(["allEvidenceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allEvidence(request);
    }, options);
  };
  return {
    /** Evidence queries evidence based on evidence hash. */useEvidence,
    /** AllEvidence queries all evidence. */useAllEvidence
  };
};