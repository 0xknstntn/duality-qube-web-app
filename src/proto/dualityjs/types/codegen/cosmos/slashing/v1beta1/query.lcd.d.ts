import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    signingInfos(params?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
