import { LCDClient } from "@cosmology/lcd";
import { GetModuleStatusRequest, GetModuleStatusResponse, GetGaugeByIDRequest, GetGaugeByIDResponse, GetGaugesRequest, GetGaugesResponse, GetStakeByIDRequest, GetStakeByIDResponse, GetStakesRequest, GetStakesResponse, GetFutureRewardEstimateRequest, GetFutureRewardEstimateResponse, GetAccountHistoryRequest, GetAccountHistoryResponse, GetGaugeQualifyingValueRequest, GetGaugeQualifyingValueResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    getModuleStatus(_params?: GetModuleStatusRequest): Promise<GetModuleStatusResponse>;
    getGaugeByID(params: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse>;
    getGauges(params: GetGaugesRequest): Promise<GetGaugesResponse>;
    getStakeByID(params: GetStakeByIDRequest): Promise<GetStakeByIDResponse>;
    getStakes(params: GetStakesRequest): Promise<GetStakesResponse>;
    getFutureRewardEstimate(params: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse>;
    getAccountHistory(params: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse>;
    getGaugeQualifyingValue(params: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse>;
}
