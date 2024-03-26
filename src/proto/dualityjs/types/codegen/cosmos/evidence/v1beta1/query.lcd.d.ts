import { LCDClient } from "@cosmology/lcd";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    allEvidence(params?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
