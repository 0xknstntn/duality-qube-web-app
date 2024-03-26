import { LCDClient } from "@cosmology/lcd";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    grants(params: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    granterGrants(params: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    granteeGrants(params: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
