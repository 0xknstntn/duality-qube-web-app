import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(_params?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
