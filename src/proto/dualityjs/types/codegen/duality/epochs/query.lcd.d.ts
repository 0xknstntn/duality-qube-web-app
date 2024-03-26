import { LCDClient } from "@cosmology/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    epochInfos(_params?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
