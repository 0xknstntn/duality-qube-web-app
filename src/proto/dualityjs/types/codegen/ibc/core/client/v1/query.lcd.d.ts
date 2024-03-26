import { LCDClient } from "@cosmology/lcd";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(params?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    consensusStateHeights(params: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
    clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(_params?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(_params?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(_params?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
