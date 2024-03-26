import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../../helpers";
import { QueryConnectionResponse, QueryConnectionsResponse, QueryClientConnectionsResponse, QueryConnectionClientStateResponse, QueryConnectionConsensusStateResponse, QueryConnectionParamsResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  /* Connection queries an IBC connection end. */
  async connection(params) {
    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}`;
    return QueryConnectionResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Connections queries all the IBC connections of a chain. */
  async connections(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/connection/v1/connections`;
    return QueryConnectionsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ClientConnections queries the connection paths associated with a client
   state. */
  async clientConnections(params) {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.client_id}`;
    return QueryClientConnectionsResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ConnectionClientState queries the client state associated with the
   connection. */
  async connectionClientState(params) {
    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}/client_state`;
    return QueryConnectionClientStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */
  async connectionConsensusState(params) {
    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}/consensus_state/revision/${params.revision_number}/height/${params.revision_height}`;
    return QueryConnectionConsensusStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ConnectionParams queries all parameters of the ibc connection submodule. */
  async connectionParams(_params = {}) {
    const endpoint = `ibc/core/connection/v1/params`;
    return QueryConnectionParamsResponse.fromJSON(await this.req.get(endpoint));
  }
}