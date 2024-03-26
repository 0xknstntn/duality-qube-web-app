import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
import { QueryValidatorsResponse, QueryValidatorResponse, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsResponse, QueryDelegationResponse, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsResponse, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorResponse, QueryHistoricalInfoResponse, QueryPoolResponse, QueryParamsResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
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
  async validators(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.status) !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators`;
    return QueryValidatorsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Validator queries validator info for given validator address. */
  async validator(params) {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}`;
    return QueryValidatorResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ValidatorDelegations queries delegate info for given validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async validatorDelegations(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations`;
    return QueryValidatorDelegationsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async validatorUnbondingDelegations(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/unbonding_delegations`;
    return QueryValidatorUnbondingDelegationsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Delegation queries delegate info for given validator delegator pair. */
  async delegation(params) {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations/${params.delegator_addr}`;
    return QueryDelegationResponse.fromJSON(await this.req.get(endpoint));
  }
  /* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
  async unbondingDelegation(params) {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations/${params.delegator_addr}/unbonding_delegation`;
    return QueryUnbondingDelegationResponse.fromJSON(await this.req.get(endpoint));
  }
  /* DelegatorDelegations queries all delegations of a given delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async delegatorDelegations(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegator_addr}`;
    return QueryDelegatorDelegationsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async delegatorUnbondingDelegations(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/unbonding_delegations`;
    return QueryDelegatorUnbondingDelegationsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Redelegations queries redelegations of given address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async redelegations(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.src_validator_addr) !== "undefined") {
      options.params.src_validator_addr = params.src_validator_addr;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.dst_validator_addr) !== "undefined") {
      options.params.dst_validator_addr = params.dst_validator_addr;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/redelegations`;
    return QueryRedelegationsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* DelegatorValidators queries all validators info for given delegator
   address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  async delegatorValidators(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/validators`;
    return QueryDelegatorValidatorsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* DelegatorValidator queries validator info for given delegator validator
   pair. */
  async delegatorValidator(params) {
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegator_addr}/validators/${params.validator_addr}`;
    return QueryDelegatorValidatorResponse.fromJSON(await this.req.get(endpoint));
  }
  /* HistoricalInfo queries the historical info for given height. */
  async historicalInfo(params) {
    const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`;
    return QueryHistoricalInfoResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Pool queries the pool info. */
  async pool(_params = {}) {
    const endpoint = `cosmos/staking/v1beta1/pool`;
    return QueryPoolResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Parameters queries the staking parameters. */
  async params(_params = {}) {
    const endpoint = `cosmos/staking/v1beta1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get(endpoint));
  }
}