import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  epochInfos(request = {}) {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("duality.epochs.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochsInfoResponse.decode(new _m0.Reader(data)));
  }
  currentEpoch(request) {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("duality.epochs.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epochInfos(request) {
      return queryService.epochInfos(request);
    },
    currentEpoch(request) {
      return queryService.currentEpoch(request);
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
  const useEpochInfos = ({
    request,
    options
  }) => {
    return useQuery(["epochInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochInfos(request);
    }, options);
  };
  const useCurrentEpoch = ({
    request,
    options
  }) => {
    return useQuery(["currentEpochQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentEpoch(request);
    }, options);
  };
  return {
    /** EpochInfos provide running epochInfos */useEpochInfos,
    /** CurrentEpoch provide current epoch of specified identifier */useCurrentEpoch
  };
};