import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
    /** Params queries params of the distribution module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
    validatorDistributionInfo(request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    /** ValidatorCommission queries accumulated commission for a validator. */
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    /** ValidatorSlashes queries slash events of a validator. */
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    /** DelegatorValidators queries the validators of a delegator. */
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    /** CommunityPool queries the community pool coins. */
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validatorDistributionInfo(request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validatorDistributionInfo(request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseValidatorDistributionInfoQuery<TData> extends ReactQueryParams<QueryValidatorDistributionInfoResponse, TData> {
    request: QueryValidatorDistributionInfoRequest;
}
export interface UseValidatorOutstandingRewardsQuery<TData> extends ReactQueryParams<QueryValidatorOutstandingRewardsResponse, TData> {
    request: QueryValidatorOutstandingRewardsRequest;
}
export interface UseValidatorCommissionQuery<TData> extends ReactQueryParams<QueryValidatorCommissionResponse, TData> {
    request: QueryValidatorCommissionRequest;
}
export interface UseValidatorSlashesQuery<TData> extends ReactQueryParams<QueryValidatorSlashesResponse, TData> {
    request: QueryValidatorSlashesRequest;
}
export interface UseDelegationRewardsQuery<TData> extends ReactQueryParams<QueryDelegationRewardsResponse, TData> {
    request: QueryDelegationRewardsRequest;
}
export interface UseDelegationTotalRewardsQuery<TData> extends ReactQueryParams<QueryDelegationTotalRewardsResponse, TData> {
    request: QueryDelegationTotalRewardsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorsResponse, TData> {
    request: QueryDelegatorValidatorsRequest;
}
export interface UseDelegatorWithdrawAddressQuery<TData> extends ReactQueryParams<QueryDelegatorWithdrawAddressResponse, TData> {
    request: QueryDelegatorWithdrawAddressRequest;
}
export interface UseCommunityPoolQuery<TData> extends ReactQueryParams<QueryCommunityPoolResponse, TData> {
    request?: QueryCommunityPoolRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries params of the distribution module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */ useValidatorDistributionInfo: <TData_1 = QueryValidatorDistributionInfoResponse>({ request, options }: UseValidatorDistributionInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */ useValidatorOutstandingRewards: <TData_2 = QueryValidatorOutstandingRewardsResponse>({ request, options }: UseValidatorOutstandingRewardsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** ValidatorCommission queries accumulated commission for a validator. */ useValidatorCommission: <TData_3 = QueryValidatorCommissionResponse>({ request, options }: UseValidatorCommissionQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** ValidatorSlashes queries slash events of a validator. */ useValidatorSlashes: <TData_4 = QueryValidatorSlashesResponse>({ request, options }: UseValidatorSlashesQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */ useDelegationRewards: <TData_5 = QueryDelegationRewardsResponse>({ request, options }: UseDelegationRewardsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards: <TData_6 = QueryDelegationTotalRewardsResponse>({ request, options }: UseDelegationTotalRewardsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** DelegatorValidators queries the validators of a delegator. */ useDelegatorValidators: <TData_7 = QueryDelegatorValidatorsResponse>({ request, options }: UseDelegatorValidatorsQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */ useDelegatorWithdrawAddress: <TData_8 = QueryDelegatorWithdrawAddressResponse>({ request, options }: UseDelegatorWithdrawAddressQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** CommunityPool queries the community pool coins. */ useCommunityPool: <TData_9 = QueryCommunityPoolResponse>({ request, options }: UseCommunityPoolQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
};
