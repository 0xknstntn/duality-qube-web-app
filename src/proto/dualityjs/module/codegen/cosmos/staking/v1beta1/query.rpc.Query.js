import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
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
  validators(request) {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }
  validator(request) {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }
  validatorDelegations(request) {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }
  validatorUnbondingDelegations(request) {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }
  delegation(request) {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }
  unbondingDelegation(request) {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }
  delegatorDelegations(request) {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
  }
  delegatorUnbondingDelegations(request) {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }
  redelegations(request) {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new _m0.Reader(data)));
  }
  delegatorValidators(request) {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }
  delegatorValidator(request) {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
  }
  historicalInfo(request) {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }
  pool(request = {}) {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    validators(request) {
      return queryService.validators(request);
    },
    validator(request) {
      return queryService.validator(request);
    },
    validatorDelegations(request) {
      return queryService.validatorDelegations(request);
    },
    validatorUnbondingDelegations(request) {
      return queryService.validatorUnbondingDelegations(request);
    },
    delegation(request) {
      return queryService.delegation(request);
    },
    unbondingDelegation(request) {
      return queryService.unbondingDelegation(request);
    },
    delegatorDelegations(request) {
      return queryService.delegatorDelegations(request);
    },
    delegatorUnbondingDelegations(request) {
      return queryService.delegatorUnbondingDelegations(request);
    },
    redelegations(request) {
      return queryService.redelegations(request);
    },
    delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorValidator(request) {
      return queryService.delegatorValidator(request);
    },
    historicalInfo(request) {
      return queryService.historicalInfo(request);
    },
    pool(request) {
      return queryService.pool(request);
    },
    params(request) {
      return queryService.params(request);
    }
  };
};
const _queryClients = new WeakMap();
const getQueryService = rpc => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = rpc => {
  const queryService = getQueryService(rpc);
  const useValidators = ({
    request,
    options
  }) => {
    return useQuery(["validatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validators(request);
    }, options);
  };
  const useValidator = ({
    request,
    options
  }) => {
    return useQuery(["validatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validator(request);
    }, options);
  };
  const useValidatorDelegations = ({
    request,
    options
  }) => {
    return useQuery(["validatorDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorDelegations(request);
    }, options);
  };
  const useValidatorUnbondingDelegations = ({
    request,
    options
  }) => {
    return useQuery(["validatorUnbondingDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorUnbondingDelegations(request);
    }, options);
  };
  const useDelegation = ({
    request,
    options
  }) => {
    return useQuery(["delegationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegation(request);
    }, options);
  };
  const useUnbondingDelegation = ({
    request,
    options
  }) => {
    return useQuery(["unbondingDelegationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unbondingDelegation(request);
    }, options);
  };
  const useDelegatorDelegations = ({
    request,
    options
  }) => {
    return useQuery(["delegatorDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorDelegations(request);
    }, options);
  };
  const useDelegatorUnbondingDelegations = ({
    request,
    options
  }) => {
    return useQuery(["delegatorUnbondingDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorUnbondingDelegations(request);
    }, options);
  };
  const useRedelegations = ({
    request,
    options
  }) => {
    return useQuery(["redelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.redelegations(request);
    }, options);
  };
  const useDelegatorValidators = ({
    request,
    options
  }) => {
    return useQuery(["delegatorValidatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidators(request);
    }, options);
  };
  const useDelegatorValidator = ({
    request,
    options
  }) => {
    return useQuery(["delegatorValidatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidator(request);
    }, options);
  };
  const useHistoricalInfo = ({
    request,
    options
  }) => {
    return useQuery(["historicalInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.historicalInfo(request);
    }, options);
  };
  const usePool = ({
    request,
    options
  }) => {
    return useQuery(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const useParams = ({
    request,
    options
  }) => {
    return useQuery(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  return {
    /**
     * Validators queries all validators that match the given status.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidators,
    /** Validator queries validator info for given validator address. */useValidator,
    /**
     * ValidatorDelegations queries delegate info for given validator.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidatorDelegations,
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidatorUnbondingDelegations,
    /** Delegation queries delegate info for given validator delegator pair. */useDelegation,
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation,
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorDelegations,
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorUnbondingDelegations,
    /**
     * Redelegations queries redelegations of given address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useRedelegations,
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorValidators,
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator,
    /** HistoricalInfo queries the historical info for given height. */useHistoricalInfo,
    /** Pool queries the pool info. */usePool,
    /** Parameters queries the staking parameters. */useParams
  };
};