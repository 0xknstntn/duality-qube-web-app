import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/** Query provides defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  denomTrace(request) {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  }
  denomTraces(request = {
    pagination: undefined
  }) {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  denomHash(request) {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
    return promise.then(data => QueryDenomHashResponse.decode(new _m0.Reader(data)));
  }
  escrowAddress(request) {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
    return promise.then(data => QueryEscrowAddressResponse.decode(new _m0.Reader(data)));
  }
  totalEscrowForDenom(request) {
    const data = QueryTotalEscrowForDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "TotalEscrowForDenom", data);
    return promise.then(data => QueryTotalEscrowForDenomResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    denomTrace(request) {
      return queryService.denomTrace(request);
    },
    denomTraces(request) {
      return queryService.denomTraces(request);
    },
    params(request) {
      return queryService.params(request);
    },
    denomHash(request) {
      return queryService.denomHash(request);
    },
    escrowAddress(request) {
      return queryService.escrowAddress(request);
    },
    totalEscrowForDenom(request) {
      return queryService.totalEscrowForDenom(request);
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
  const useDenomTrace = ({
    request,
    options
  }) => {
    return useQuery(["denomTraceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTrace(request);
    }, options);
  };
  const useDenomTraces = ({
    request,
    options
  }) => {
    return useQuery(["denomTracesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTraces(request);
    }, options);
  };
  const useParams = ({
    request,
    options
  }) => {
    return useQuery(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useDenomHash = ({
    request,
    options
  }) => {
    return useQuery(["denomHashQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomHash(request);
    }, options);
  };
  const useEscrowAddress = ({
    request,
    options
  }) => {
    return useQuery(["escrowAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.escrowAddress(request);
    }, options);
  };
  const useTotalEscrowForDenom = ({
    request,
    options
  }) => {
    return useQuery(["totalEscrowForDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalEscrowForDenom(request);
    }, options);
  };
  return {
    /** DenomTrace queries a denomination trace information. */useDenomTrace,
    /** DenomTraces queries all denomination traces. */useDenomTraces,
    /** Params queries all parameters of the ibc-transfer module. */useParams,
    /** DenomHash queries a denomination hash information. */useDenomHash,
    /** EscrowAddress returns the escrow address for a particular port and channel id. */useEscrowAddress,
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */useTotalEscrowForDenom
  };
};