import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse } from "./query";
/** Query provides defines the gRPC querier service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  contractInfo(request) {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  }
  contractHistory(request) {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then(data => QueryContractHistoryResponse.decode(new _m0.Reader(data)));
  }
  contractsByCode(request) {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then(data => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
  }
  allContractState(request) {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then(data => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
  }
  rawContractState(request) {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then(data => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
  }
  smartContractState(request) {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then(data => QuerySmartContractStateResponse.decode(new _m0.Reader(data)));
  }
  code(request) {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
  }
  codes(request = {
    pagination: undefined
  }) {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new _m0.Reader(data)));
  }
  pinnedCodes(request = {
    pagination: undefined
  }) {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then(data => QueryPinnedCodesResponse.decode(new _m0.Reader(data)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  contractsByCreator(request) {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then(data => QueryContractsByCreatorResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request) {
      return queryService.contractInfo(request);
    },
    contractHistory(request) {
      return queryService.contractHistory(request);
    },
    contractsByCode(request) {
      return queryService.contractsByCode(request);
    },
    allContractState(request) {
      return queryService.allContractState(request);
    },
    rawContractState(request) {
      return queryService.rawContractState(request);
    },
    smartContractState(request) {
      return queryService.smartContractState(request);
    },
    code(request) {
      return queryService.code(request);
    },
    codes(request) {
      return queryService.codes(request);
    },
    pinnedCodes(request) {
      return queryService.pinnedCodes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    contractsByCreator(request) {
      return queryService.contractsByCreator(request);
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
  const useContractInfo = ({
    request,
    options
  }) => {
    return useQuery(["contractInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractInfo(request);
    }, options);
  };
  const useContractHistory = ({
    request,
    options
  }) => {
    return useQuery(["contractHistoryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractHistory(request);
    }, options);
  };
  const useContractsByCode = ({
    request,
    options
  }) => {
    return useQuery(["contractsByCodeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractsByCode(request);
    }, options);
  };
  const useAllContractState = ({
    request,
    options
  }) => {
    return useQuery(["allContractStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allContractState(request);
    }, options);
  };
  const useRawContractState = ({
    request,
    options
  }) => {
    return useQuery(["rawContractStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.rawContractState(request);
    }, options);
  };
  const useSmartContractState = ({
    request,
    options
  }) => {
    return useQuery(["smartContractStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.smartContractState(request);
    }, options);
  };
  const useCode = ({
    request,
    options
  }) => {
    return useQuery(["codeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.code(request);
    }, options);
  };
  const useCodes = ({
    request,
    options
  }) => {
    return useQuery(["codesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.codes(request);
    }, options);
  };
  const usePinnedCodes = ({
    request,
    options
  }) => {
    return useQuery(["pinnedCodesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pinnedCodes(request);
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
  const useContractsByCreator = ({
    request,
    options
  }) => {
    return useQuery(["contractsByCreatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractsByCreator(request);
    }, options);
  };
  return {
    /** ContractInfo gets the contract meta data */useContractInfo,
    /** ContractHistory gets the contract code history */useContractHistory,
    /** ContractsByCode lists all smart contracts for a code id */useContractsByCode,
    /** AllContractState gets all raw store data for a single contract */useAllContractState,
    /** RawContractState gets single key from the raw store data of a contract */useRawContractState,
    /** SmartContractState get smart query result from the contract */useSmartContractState,
    /** Code gets the binary code and metadata for a singe wasm code */useCode,
    /** Codes gets the metadata for all stored wasm codes */useCodes,
    /** PinnedCodes gets the pinned code ids */usePinnedCodes,
    /** Params gets the module params */useParams,
    /** ContractsByCreator gets the contracts by creator */useContractsByCreator
  };
};