import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
/** Query provides defines the gRPC querier service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  connection(request) {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then(data => QueryConnectionResponse.decode(new _m0.Reader(data)));
  }
  connections(request = {
    pagination: undefined
  }) {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then(data => QueryConnectionsResponse.decode(new _m0.Reader(data)));
  }
  clientConnections(request) {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then(data => QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
  }
  connectionClientState(request) {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then(data => QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
  }
  connectionConsensusState(request) {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then(data => QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
  }
  connectionParams(request = {}) {
    const data = QueryConnectionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
    return promise.then(data => QueryConnectionParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request) {
      return queryService.connection(request);
    },
    connections(request) {
      return queryService.connections(request);
    },
    clientConnections(request) {
      return queryService.clientConnections(request);
    },
    connectionClientState(request) {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState(request) {
      return queryService.connectionConsensusState(request);
    },
    connectionParams(request) {
      return queryService.connectionParams(request);
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
  const useConnection = ({
    request,
    options
  }) => {
    return useQuery(["connectionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connection(request);
    }, options);
  };
  const useConnections = ({
    request,
    options
  }) => {
    return useQuery(["connectionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connections(request);
    }, options);
  };
  const useClientConnections = ({
    request,
    options
  }) => {
    return useQuery(["clientConnectionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientConnections(request);
    }, options);
  };
  const useConnectionClientState = ({
    request,
    options
  }) => {
    return useQuery(["connectionClientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionClientState(request);
    }, options);
  };
  const useConnectionConsensusState = ({
    request,
    options
  }) => {
    return useQuery(["connectionConsensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionConsensusState(request);
    }, options);
  };
  const useConnectionParams = ({
    request,
    options
  }) => {
    return useQuery(["connectionParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionParams(request);
    }, options);
  };
  return {
    /** Connection queries an IBC connection end. */useConnection,
    /** Connections queries all the IBC connections of a chain. */useConnections,
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections,
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState,
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState,
    /** ConnectionParams queries all parameters of the ibc connection submodule. */useConnectionParams
  };
};