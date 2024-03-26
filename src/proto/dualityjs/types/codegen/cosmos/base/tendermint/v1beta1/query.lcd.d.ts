import { LCDClient } from "@cosmology/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    getNodeInfo(_params?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(_params?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(_params?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(params?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
    aBCIQuery(params: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
