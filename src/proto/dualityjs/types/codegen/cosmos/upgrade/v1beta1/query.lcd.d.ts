import { LCDClient } from "@cosmology/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    currentPlan(_params?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(params: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    authority(_params?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
