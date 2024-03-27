import { Rpc } from '../../helpers';
import * as _m0 from 'protobufjs/minimal';
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from '@cosmjs/stargate';
import { ReactQueryParams } from '../../react-query';
import { useQuery } from '@tanstack/react-query';
import { GetModuleStatusRequest, GetModuleStatusResponse, GetGaugeByIDRequest, GetGaugeByIDResponse, GetGaugesRequest, GetGaugesResponse, GetStakeByIDRequest, GetStakeByIDResponse, GetStakesRequest, GetStakesResponse, GetFutureRewardEstimateRequest, GetFutureRewardEstimateResponse, GetAccountHistoryRequest, GetAccountHistoryResponse, GetGaugeQualifyingValueRequest, GetGaugeQualifyingValueResponse } from './query';
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getModuleStatus = this.getModuleStatus.bind(this);
    this.getGaugeByID = this.getGaugeByID.bind(this);
    this.getGauges = this.getGauges.bind(this);
    this.getStakeByID = this.getStakeByID.bind(this);
    this.getStakes = this.getStakes.bind(this);
    this.getFutureRewardEstimate = this.getFutureRewardEstimate.bind(this);
    this.getAccountHistory = this.getAccountHistory.bind(this);
    this.getGaugeQualifyingValue = this.getGaugeQualifyingValue.bind(this);
  }
  getModuleStatus(request: GetModuleStatusRequest = {}): Promise<GetModuleStatusResponse> {
    const data = GetModuleStatusRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetModuleStatus', data);
    return promise.then(data => GetModuleStatusResponse.decode(new _m0.Reader(data)));
  }
  getGaugeByID(request: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse> {
    const data = GetGaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetGaugeByID', data);
    return promise.then(data => GetGaugeByIDResponse.decode(new _m0.Reader(data)));
  }
  getGauges(request: GetGaugesRequest): Promise<GetGaugesResponse> {
    const data = GetGaugesRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetGauges', data);
    return promise.then(data => GetGaugesResponse.decode(new _m0.Reader(data)));
  }
  getStakeByID(request: GetStakeByIDRequest): Promise<GetStakeByIDResponse> {
    const data = GetStakeByIDRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetStakeByID', data);
    return promise.then(data => GetStakeByIDResponse.decode(new _m0.Reader(data)));
  }
  getStakes(request: GetStakesRequest): Promise<GetStakesResponse> {
    const data = GetStakesRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetStakes', data);
    return promise.then(data => GetStakesResponse.decode(new _m0.Reader(data)));
  }
  getFutureRewardEstimate(request: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse> {
    const data = GetFutureRewardEstimateRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetFutureRewardEstimate', data);
    return promise.then(data => GetFutureRewardEstimateResponse.decode(new _m0.Reader(data)));
  }
  getAccountHistory(request: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse> {
    const data = GetAccountHistoryRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetAccountHistory', data);
    return promise.then(data => GetAccountHistoryResponse.decode(new _m0.Reader(data)));
  }
  getGaugeQualifyingValue(request: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse> {
    const data = GetGaugeQualifyingValueRequest.encode(request).finish();
    const promise = this.rpc.request('duality.incentives.Query', 'GetGaugeQualifyingValue', data);
    return promise.then(data => GetGaugeQualifyingValueResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getModuleStatus(request?: GetModuleStatusRequest): Promise<GetModuleStatusResponse> {
      return queryService.getModuleStatus(request);
    },
    getGaugeByID(request: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse> {
      return queryService.getGaugeByID(request);
    },
    getGauges(request: GetGaugesRequest): Promise<GetGaugesResponse> {
      return queryService.getGauges(request);
    },
    getStakeByID(request: GetStakeByIDRequest): Promise<GetStakeByIDResponse> {
      return queryService.getStakeByID(request);
    },
    getStakes(request: GetStakesRequest): Promise<GetStakesResponse> {
      return queryService.getStakes(request);
    },
    getFutureRewardEstimate(request: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse> {
      return queryService.getFutureRewardEstimate(request);
    },
    getAccountHistory(request: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse> {
      return queryService.getAccountHistory(request);
    },
    getGaugeQualifyingValue(request: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse> {
      return queryService.getGaugeQualifyingValue(request);
    }
  };
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
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useGetModuleStatus = <TData = GetModuleStatusResponse,>({
    request,
    options
  }: UseGetModuleStatusQuery<TData>) => {
    return useQuery<GetModuleStatusResponse, Error, TData>(['getModuleStatusQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getModuleStatus(request);
    }, options);
  };
  const useGetGaugeByID = <TData = GetGaugeByIDResponse,>({
    request,
    options
  }: UseGetGaugeByIDQuery<TData>) => {
    return useQuery<GetGaugeByIDResponse, Error, TData>(['getGaugeByIDQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getGaugeByID(request);
    }, options);
  };
  const useGetGauges = <TData = GetGaugesResponse,>({
    request,
    options
  }: UseGetGaugesQuery<TData>) => {
    return useQuery<GetGaugesResponse, Error, TData>(['getGaugesQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getGauges(request);
    }, options);
  };
  const useGetStakeByID = <TData = GetStakeByIDResponse,>({
    request,
    options
  }: UseGetStakeByIDQuery<TData>) => {
    return useQuery<GetStakeByIDResponse, Error, TData>(['getStakeByIDQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getStakeByID(request);
    }, options);
  };
  const useGetStakes = <TData = GetStakesResponse,>({
    request,
    options
  }: UseGetStakesQuery<TData>) => {
    return useQuery<GetStakesResponse, Error, TData>(['getStakesQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getStakes(request);
    }, options);
  };
  const useGetFutureRewardEstimate = <TData = GetFutureRewardEstimateResponse,>({
    request,
    options
  }: UseGetFutureRewardEstimateQuery<TData>) => {
    return useQuery<GetFutureRewardEstimateResponse, Error, TData>(['getFutureRewardEstimateQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getFutureRewardEstimate(request);
    }, options);
  };
  const useGetAccountHistory = <TData = GetAccountHistoryResponse,>({
    request,
    options
  }: UseGetAccountHistoryQuery<TData>) => {
    return useQuery<GetAccountHistoryResponse, Error, TData>(['getAccountHistoryQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getAccountHistory(request);
    }, options);
  };
  const useGetGaugeQualifyingValue = <TData = GetGaugeQualifyingValueResponse,>({
    request,
    options
  }: UseGetGaugeQualifyingValueQuery<TData>) => {
    return useQuery<GetGaugeQualifyingValueResponse, Error, TData>(['getGaugeQualifyingValueQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.getGaugeQualifyingValue(request);
    }, options);
  };
  return {
    /** GetModuleStatus returns a rundown of coins in the module and their status */useGetModuleStatus,
    /** GetGaugeByID returns a gauge by its ID */useGetGaugeByID,
    /** GetGauges returns gauges according to the filter provided */useGetGauges,
    /** GetStakeByID returns a stake by its ID */useGetStakeByID,
    /** GetStakes returns stakes by the filter provided. At least one filter must be provided. */useGetStakes,
    /**
     * GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
     * time in the future. The requestor either provides an address or a set of locks
     * for which they want to find the associated rewards.
     */
    useGetFutureRewardEstimate,
    /** GetAccountHistory returns the total accumulated rewards per denom for a given user. */useGetAccountHistory,
    /**
     * Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
     * the prospective future rewards of staking.
     */
    useGetGaugeQualifyingValue
  };
};