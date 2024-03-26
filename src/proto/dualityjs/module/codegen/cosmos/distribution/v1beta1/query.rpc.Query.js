import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
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
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  validatorDistributionInfo(request) {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then(data => QueryValidatorDistributionInfoResponse.decode(new _m0.Reader(data)));
  }
  validatorOutstandingRewards(request) {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)));
  }
  validatorCommission(request) {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }
  validatorSlashes(request) {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new _m0.Reader(data)));
  }
  delegationRewards(request) {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new _m0.Reader(data)));
  }
  delegationTotalRewards(request) {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)));
  }
  delegatorValidators(request) {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }
  delegatorWithdrawAddress(request) {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }
  communityPool(request = {}) {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    validatorDistributionInfo(request) {
      return queryService.validatorDistributionInfo(request);
    },
    validatorOutstandingRewards(request) {
      return queryService.validatorOutstandingRewards(request);
    },
    validatorCommission(request) {
      return queryService.validatorCommission(request);
    },
    validatorSlashes(request) {
      return queryService.validatorSlashes(request);
    },
    delegationRewards(request) {
      return queryService.delegationRewards(request);
    },
    delegationTotalRewards(request) {
      return queryService.delegationTotalRewards(request);
    },
    delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorWithdrawAddress(request) {
      return queryService.delegatorWithdrawAddress(request);
    },
    communityPool(request) {
      return queryService.communityPool(request);
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
  const useParams = ({
    request,
    options
  }) => {
    return useQuery(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useValidatorDistributionInfo = ({
    request,
    options
  }) => {
    return useQuery(["validatorDistributionInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorDistributionInfo(request);
    }, options);
  };
  const useValidatorOutstandingRewards = ({
    request,
    options
  }) => {
    return useQuery(["validatorOutstandingRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorOutstandingRewards(request);
    }, options);
  };
  const useValidatorCommission = ({
    request,
    options
  }) => {
    return useQuery(["validatorCommissionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorCommission(request);
    }, options);
  };
  const useValidatorSlashes = ({
    request,
    options
  }) => {
    return useQuery(["validatorSlashesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorSlashes(request);
    }, options);
  };
  const useDelegationRewards = ({
    request,
    options
  }) => {
    return useQuery(["delegationRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegationRewards(request);
    }, options);
  };
  const useDelegationTotalRewards = ({
    request,
    options
  }) => {
    return useQuery(["delegationTotalRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegationTotalRewards(request);
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
  const useDelegatorWithdrawAddress = ({
    request,
    options
  }) => {
    return useQuery(["delegatorWithdrawAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorWithdrawAddress(request);
    }, options);
  };
  const useCommunityPool = ({
    request,
    options
  }) => {
    return useQuery(["communityPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.communityPool(request);
    }, options);
  };
  return {
    /** Params queries params of the distribution module. */useParams,
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */useValidatorDistributionInfo,
    /** ValidatorOutstandingRewards queries rewards of a validator address. */useValidatorOutstandingRewards,
    /** ValidatorCommission queries accumulated commission for a validator. */useValidatorCommission,
    /** ValidatorSlashes queries slash events of a validator. */useValidatorSlashes,
    /** DelegationRewards queries the total rewards accrued by a delegation. */useDelegationRewards,
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards,
    /** DelegatorValidators queries the validators of a delegator. */useDelegatorValidators,
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */useDelegatorWithdrawAddress,
    /** CommunityPool queries the community pool coins. */useCommunityPool
  };
};