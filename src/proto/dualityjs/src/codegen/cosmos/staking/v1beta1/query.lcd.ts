import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }
  /* Validators queries all validators that match the given status.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async validators(params: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators`;
    return QueryValidatorsResponse.fromJSON(await this.req.get<QueryValidatorsResponse>(endpoint, options));
  }
  /* Validator queries validator info for given validator address. */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}`;
    return QueryValidatorResponse.fromJSON(await this.req.get<QueryValidatorResponse>(endpoint));
  }
  /* ValidatorDelegations queries delegate info for given validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async validatorDelegations(params: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations`;
    return QueryValidatorDelegationsResponse.fromJSON(await this.req.get<QueryValidatorDelegationsResponse>(endpoint, options));
  }
  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async validatorUnbondingDelegations(params: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/unbonding_delegations`;
    return QueryValidatorUnbondingDelegationsResponse.fromJSON(await this.req.get<QueryValidatorUnbondingDelegationsResponse>(endpoint, options));
  }
  /* Delegation queries delegate info for given validator delegator pair. */
  async delegation(params: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations/${params.delegator_addr}`;
    return QueryDelegationResponse.fromJSON(await this.req.get<QueryDelegationResponse>(endpoint));
  }
  /* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
  async unbondingDelegation(params: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations/${params.delegator_addr}/unbonding_delegation`;
    return QueryUnbondingDelegationResponse.fromJSON(await this.req.get<QueryUnbondingDelegationResponse>(endpoint));
  }
  /* DelegatorDelegations queries all delegations of a given delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async delegatorDelegations(params: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegator_addr}`;
    return QueryDelegatorDelegationsResponse.fromJSON(await this.req.get<QueryDelegatorDelegationsResponse>(endpoint, options));
  }
  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async delegatorUnbondingDelegations(params: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/unbonding_delegations`;
    return QueryDelegatorUnbondingDelegationsResponse.fromJSON(await this.req.get<QueryDelegatorUnbondingDelegationsResponse>(endpoint, options));
  }
  /* Redelegations queries redelegations of given address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async redelegations(params: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.src_validator_addr !== "undefined") {
      options.params.src_validator_addr = params.src_validator_addr;
    }
    if (typeof params?.dst_validator_addr !== "undefined") {
      options.params.dst_validator_addr = params.dst_validator_addr;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/redelegations`;
    return QueryRedelegationsResponse.fromJSON(await this.req.get<QueryRedelegationsResponse>(endpoint, options));
  }
  /* DelegatorValidators queries all validators info for given delegator
   address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/validators`;
    return QueryDelegatorValidatorsResponse.fromJSON(await this.req.get<QueryDelegatorValidatorsResponse>(endpoint, options));
  }
  /* DelegatorValidator queries validator info for given delegator validator
   pair. */
  async delegatorValidator(params: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/validators/${params.validator_addr}`;
    return QueryDelegatorValidatorResponse.fromJSON(await this.req.get<QueryDelegatorValidatorResponse>(endpoint));
  }
  /* HistoricalInfo queries the historical info for given height. */
  async historicalInfo(params: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`;
    return QueryHistoricalInfoResponse.fromJSON(await this.req.get<QueryHistoricalInfoResponse>(endpoint));
  }
  /* Pool queries the pool info. */
  async pool(_params: QueryPoolRequest = {}): Promise<QueryPoolResponse> {
    const endpoint = `cosmos/staking/v1beta1/pool`;
    return QueryPoolResponse.fromJSON(await this.req.get<QueryPoolResponse>(endpoint));
  }
  /* Parameters queries the staking parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/staking/v1beta1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  }
}