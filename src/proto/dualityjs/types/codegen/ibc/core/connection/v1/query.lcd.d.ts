import { LCDClient } from "@cosmology/lcd";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(params?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
    connectionParams(_params?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse>;
}
