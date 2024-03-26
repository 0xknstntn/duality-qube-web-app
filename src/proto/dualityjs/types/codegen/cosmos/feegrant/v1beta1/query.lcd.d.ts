import { LCDClient } from "@cosmology/lcd";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    allowance(params: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(params: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    allowancesByGranter(params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
