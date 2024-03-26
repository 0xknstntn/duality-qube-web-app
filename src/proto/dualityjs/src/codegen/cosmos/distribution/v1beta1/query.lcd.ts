import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  /* Params queries params of the distribution module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  }
  /* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  async validatorDistributionInfo(params: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}`;
    return QueryValidatorDistributionInfoResponse.fromJSON(await this.req.get<QueryValidatorDistributionInfoResponse>(endpoint));
  }
  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  async validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/outstanding_rewards`;
    return QueryValidatorOutstandingRewardsResponse.fromJSON(await this.req.get<QueryValidatorOutstandingRewardsResponse>(endpoint));
  }
  /* ValidatorCommission queries accumulated commission for a validator. */
  async validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/commission`;
    return QueryValidatorCommissionResponse.fromJSON(await this.req.get<QueryValidatorCommissionResponse>(endpoint));
  }
  /* ValidatorSlashes queries slash events of a validator. */
  async validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.starting_height !== "undefined") {
      options.params.starting_height = params.starting_height;
    }
    if (typeof params?.ending_height !== "undefined") {
      options.params.ending_height = params.ending_height;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/slashes`;
    return QueryValidatorSlashesResponse.fromJSON(await this.req.get<QueryValidatorSlashesResponse>(endpoint, options));
  }
  /* DelegationRewards queries the total rewards accrued by a delegation. */
  async delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/rewards/${params.validator_address}`;
    return QueryDelegationRewardsResponse.fromJSON(await this.req.get<QueryDelegationRewardsResponse>(endpoint));
  }
  /* DelegationTotalRewards queries the total rewards accrued by a each
   validator. */
  async delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/rewards`;
    return QueryDelegationTotalRewardsResponse.fromJSON(await this.req.get<QueryDelegationTotalRewardsResponse>(endpoint));
  }
  /* DelegatorValidators queries the validators of a delegator. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/validators`;
    return QueryDelegatorValidatorsResponse.fromJSON(await this.req.get<QueryDelegatorValidatorsResponse>(endpoint));
  }
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/withdraw_address`;
    return QueryDelegatorWithdrawAddressResponse.fromJSON(await this.req.get<QueryDelegatorWithdrawAddressResponse>(endpoint));
  }
  /* CommunityPool queries the community pool coins. */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return QueryCommunityPoolResponse.fromJSON(await this.req.get<QueryCommunityPoolResponse>(endpoint));
  }
}