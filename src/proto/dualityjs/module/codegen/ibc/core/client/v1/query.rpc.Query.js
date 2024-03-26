import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  clientState(request) {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new _m0.Reader(data)));
  }
  clientStates(request = {
    pagination: undefined
  }) {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new _m0.Reader(data)));
  }
  consensusState(request) {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new _m0.Reader(data)));
  }
  consensusStates(request) {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new _m0.Reader(data)));
  }
  consensusStateHeights(request) {
    const data = QueryConsensusStateHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
    return promise.then(data => QueryConsensusStateHeightsResponse.decode(new _m0.Reader(data)));
  }
  clientStatus(request) {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new _m0.Reader(data)));
  }
  clientParams(request = {}) {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new _m0.Reader(data)));
  }
  upgradedClientState(request = {}) {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)));
  }
  upgradedConsensusState(request = {}) {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    clientState(request) {
      return queryService.clientState(request);
    },
    clientStates(request) {
      return queryService.clientStates(request);
    },
    consensusState(request) {
      return queryService.consensusState(request);
    },
    consensusStates(request) {
      return queryService.consensusStates(request);
    },
    consensusStateHeights(request) {
      return queryService.consensusStateHeights(request);
    },
    clientStatus(request) {
      return queryService.clientStatus(request);
    },
    clientParams(request) {
      return queryService.clientParams(request);
    },
    upgradedClientState(request) {
      return queryService.upgradedClientState(request);
    },
    upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
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
  const useClientState = ({
    request,
    options
  }) => {
    return useQuery(["clientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientState(request);
    }, options);
  };
  const useClientStates = ({
    request,
    options
  }) => {
    return useQuery(["clientStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientStates(request);
    }, options);
  };
  const useConsensusState = ({
    request,
    options
  }) => {
    return useQuery(["consensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusState(request);
    }, options);
  };
  const useConsensusStates = ({
    request,
    options
  }) => {
    return useQuery(["consensusStatesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusStates(request);
    }, options);
  };
  const useConsensusStateHeights = ({
    request,
    options
  }) => {
    return useQuery(["consensusStateHeightsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusStateHeights(request);
    }, options);
  };
  const useClientStatus = ({
    request,
    options
  }) => {
    return useQuery(["clientStatusQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientStatus(request);
    }, options);
  };
  const useClientParams = ({
    request,
    options
  }) => {
    return useQuery(["clientParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientParams(request);
    }, options);
  };
  const useUpgradedClientState = ({
    request,
    options
  }) => {
    return useQuery(["upgradedClientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedClientState(request);
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
  return {
    /** ClientState queries an IBC light client. */useClientState,
    /** ClientStates queries all the IBC light clients of a chain. */useClientStates,
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState,
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates,
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */useConsensusStateHeights,
    /** Status queries the status of an IBC client. */useClientStatus,
    /** ClientParams queries all parameters of the ibc client submodule. */useClientParams,
    /** UpgradedClientState queries an Upgraded IBC light client. */useUpgradedClientState,
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */useUpgradedConsensusState
  };
};