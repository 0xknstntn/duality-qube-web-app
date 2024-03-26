import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  /* Connection queries an IBC connection end. */
  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}`;
    return QueryConnectionResponse.fromJSON(await this.req.get<QueryConnectionResponse>(endpoint));
  }
  /* Connections queries all the IBC connections of a chain. */
  async connections(params: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/connection/v1/connections`;
    return QueryConnectionsResponse.fromJSON(await this.req.get<QueryConnectionsResponse>(endpoint, options));
  }
  /* ClientConnections queries the connection paths associated with a client
   state. */
  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.client_id}`;
    return QueryClientConnectionsResponse.fromJSON(await this.req.get<QueryClientConnectionsResponse>(endpoint));
  }
  /* ConnectionClientState queries the client state associated with the
   connection. */
  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}/client_state`;
    return QueryConnectionClientStateResponse.fromJSON(await this.req.get<QueryConnectionClientStateResponse>(endpoint));
  }
  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */
  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connection_id}/consensus_state/revision/${params.revision_number}/height/${params.revision_height}`;
    return QueryConnectionConsensusStateResponse.fromJSON(await this.req.get<QueryConnectionConsensusStateResponse>(endpoint));
  }
  /* ConnectionParams queries all parameters of the ibc connection submodule. */
  async connectionParams(_params: QueryConnectionParamsRequest = {}): Promise<QueryConnectionParamsResponse> {
    const endpoint = `ibc/core/connection/v1/params`;
    return QueryConnectionParamsResponse.fromJSON(await this.req.get<QueryConnectionParamsResponse>(endpoint));
  }
}