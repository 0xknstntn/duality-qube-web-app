import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { GetModuleStatusRequest, GetModuleStatusResponse, GetGaugeByIDRequest, GetGaugeByIDResponse, GetGaugesRequest, GetGaugesResponse, GetStakeByIDRequest, GetStakeByIDResponse, GetStakesRequest, GetStakesResponse, GetFutureRewardEstimateRequest, GetFutureRewardEstimateResponse, GetAccountHistoryRequest, GetAccountHistoryResponse, GetGaugeQualifyingValueRequest, GetGaugeQualifyingValueResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** GetModuleStatus returns a rundown of coins in the module and their status */
    getModuleStatus(request?: GetModuleStatusRequest): Promise<GetModuleStatusResponse>;
    /** GetGaugeByID returns a gauge by its ID */
    getGaugeByID(request: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse>;
    /** GetGauges returns gauges according to the filter provided */
    getGauges(request: GetGaugesRequest): Promise<GetGaugesResponse>;
    /** GetStakeByID returns a stake by its ID */
    getStakeByID(request: GetStakeByIDRequest): Promise<GetStakeByIDResponse>;
    /** GetStakes returns stakes by the filter provided. At least one filter must be provided. */
    getStakes(request: GetStakesRequest): Promise<GetStakesResponse>;
    /**
     * GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
     * time in the future. The requestor either provides an address or a set of locks
     * for which they want to find the associated rewards.
     */
    getFutureRewardEstimate(request: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse>;
    /** GetAccountHistory returns the total accumulated rewards per denom for a given user. */
    getAccountHistory(request: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse>;
    /**
     * Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
     * the prospective future rewards of staking.
     */
    getGaugeQualifyingValue(request: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    getModuleStatus(request?: GetModuleStatusRequest): Promise<GetModuleStatusResponse>;
    getGaugeByID(request: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse>;
    getGauges(request: GetGaugesRequest): Promise<GetGaugesResponse>;
    getStakeByID(request: GetStakeByIDRequest): Promise<GetStakeByIDResponse>;
    getStakes(request: GetStakesRequest): Promise<GetStakesResponse>;
    getFutureRewardEstimate(request: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse>;
    getAccountHistory(request: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse>;
    getGaugeQualifyingValue(request: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getModuleStatus(request?: GetModuleStatusRequest): Promise<GetModuleStatusResponse>;
    getGaugeByID(request: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse>;
    getGauges(request: GetGaugesRequest): Promise<GetGaugesResponse>;
    getStakeByID(request: GetStakeByIDRequest): Promise<GetStakeByIDResponse>;
    getStakes(request: GetStakesRequest): Promise<GetStakesResponse>;
    getFutureRewardEstimate(request: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse>;
    getAccountHistory(request: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse>;
    getGaugeQualifyingValue(request: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse>;
};
export interface UseGetModuleStatusQuery<TData> extends ReactQueryParams<GetModuleStatusResponse, TData> {
    request?: GetModuleStatusRequest;
}
export interface UseGetGaugeByIDQuery<TData> extends ReactQueryParams<GetGaugeByIDResponse, TData> {
    request: GetGaugeByIDRequest;
}
export interface UseGetGaugesQuery<TData> extends ReactQueryParams<GetGaugesResponse, TData> {
    request: GetGaugesRequest;
}
export interface UseGetStakeByIDQuery<TData> extends ReactQueryParams<GetStakeByIDResponse, TData> {
    request: GetStakeByIDRequest;
}
export interface UseGetStakesQuery<TData> extends ReactQueryParams<GetStakesResponse, TData> {
    request: GetStakesRequest;
}
export interface UseGetFutureRewardEstimateQuery<TData> extends ReactQueryParams<GetFutureRewardEstimateResponse, TData> {
    request: GetFutureRewardEstimateRequest;
}
export interface UseGetAccountHistoryQuery<TData> extends ReactQueryParams<GetAccountHistoryResponse, TData> {
    request: GetAccountHistoryRequest;
}
export interface UseGetGaugeQualifyingValueQuery<TData> extends ReactQueryParams<GetGaugeQualifyingValueResponse, TData> {
    request: GetGaugeQualifyingValueRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** GetModuleStatus returns a rundown of coins in the module and their status */ useGetModuleStatus: <TData = GetModuleStatusResponse>({ request, options }: UseGetModuleStatusQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GetGaugeByID returns a gauge by its ID */ useGetGaugeByID: <TData_1 = GetGaugeByIDResponse>({ request, options }: UseGetGaugeByIDQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** GetGauges returns gauges according to the filter provided */ useGetGauges: <TData_2 = GetGaugesResponse>({ request, options }: UseGetGaugesQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** GetStakeByID returns a stake by its ID */ useGetStakeByID: <TData_3 = GetStakeByIDResponse>({ request, options }: UseGetStakeByIDQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** GetStakes returns stakes by the filter provided. At least one filter must be provided. */ useGetStakes: <TData_4 = GetStakesResponse>({ request, options }: UseGetStakesQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /**
     * GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
     * time in the future. The requestor either provides an address or a set of locks
     * for which they want to find the associated rewards.
     */
    useGetFutureRewardEstimate: <TData_5 = GetFutureRewardEstimateResponse>({ request, options }: UseGetFutureRewardEstimateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** GetAccountHistory returns the total accumulated rewards per denom for a given user. */ useGetAccountHistory: <TData_6 = GetAccountHistoryResponse>({ request, options }: UseGetAccountHistoryQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
     * the prospective future rewards of staking.
     */
    useGetGaugeQualifyingValue: <TData_7 = GetGaugeQualifyingValueResponse>({ request, options }: UseGetGaugeQualifyingValueQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
};
