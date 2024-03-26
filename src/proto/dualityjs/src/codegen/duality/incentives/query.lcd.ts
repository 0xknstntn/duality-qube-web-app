import { LCDClient } from "@cosmology/lcd";
import { GetModuleStatusRequest, GetModuleStatusResponse, GetGaugeByIDRequest, GetGaugeByIDResponse, GetGaugesRequest, GetGaugesResponse, GetStakeByIDRequest, GetStakeByIDResponse, GetStakesRequest, GetStakesResponse, GetFutureRewardEstimateRequest, GetFutureRewardEstimateResponse, GetAccountHistoryRequest, GetAccountHistoryResponse, GetGaugeQualifyingValueRequest, GetGaugeQualifyingValueResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getModuleStatus = this.getModuleStatus.bind(this);
    this.getGaugeByID = this.getGaugeByID.bind(this);
    this.getGauges = this.getGauges.bind(this);
    this.getStakeByID = this.getStakeByID.bind(this);
    this.getStakes = this.getStakes.bind(this);
    this.getFutureRewardEstimate = this.getFutureRewardEstimate.bind(this);
    this.getAccountHistory = this.getAccountHistory.bind(this);
    this.getGaugeQualifyingValue = this.getGaugeQualifyingValue.bind(this);
  }
  /* GetModuleStatus returns a rundown of coins in the module and their status */
  async getModuleStatus(_params: GetModuleStatusRequest = {}): Promise<GetModuleStatusResponse> {
    const endpoint = `duality/incentives/v1beta1/module_status`;
    return GetModuleStatusResponse.fromJSON(await this.req.get<GetModuleStatusResponse>(endpoint));
  }
  /* GetGaugeByID returns a gauge by its ID */
  async getGaugeByID(params: GetGaugeByIDRequest): Promise<GetGaugeByIDResponse> {
    const endpoint = `duality/incentives/v1beta1/gauges/${params.id}`;
    return GetGaugeByIDResponse.fromJSON(await this.req.get<GetGaugeByIDResponse>(endpoint));
  }
  /* GetGauges returns gauges according to the filter provided */
  async getGauges(params: GetGaugesRequest): Promise<GetGaugesResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `duality/incentives/v1beta1/gauges`;
    return GetGaugesResponse.fromJSON(await this.req.get<GetGaugesResponse>(endpoint, options));
  }
  /* GetStakeByID returns a stake by its ID */
  async getStakeByID(params: GetStakeByIDRequest): Promise<GetStakeByIDResponse> {
    const endpoint = `duality/incentives/stakes/${params.stake_id}`;
    return GetStakeByIDResponse.fromJSON(await this.req.get<GetStakeByIDResponse>(endpoint));
  }
  /* GetStakes returns stakes by the filter provided. At least one filter must be provided. */
  async getStakes(params: GetStakesRequest): Promise<GetStakesResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    const endpoint = `duality/incentives/stakes`;
    return GetStakesResponse.fromJSON(await this.req.get<GetStakesResponse>(endpoint, options));
  }
  /* GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
   time in the future. The requestor either provides an address or a set of locks
   for which they want to find the associated rewards. */
  async getFutureRewardEstimate(params: GetFutureRewardEstimateRequest): Promise<GetFutureRewardEstimateResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.stake_ids !== "undefined") {
      options.params.stake_ids = params.stake_ids;
    }
    if (typeof params?.num_epochs !== "undefined") {
      options.params.num_epochs = params.num_epochs;
    }
    const endpoint = `duality/incentives/v1beta1/future_rewards_estimate/${params.owner}`;
    return GetFutureRewardEstimateResponse.fromJSON(await this.req.get<GetFutureRewardEstimateResponse>(endpoint, options));
  }
  /* GetAccountHistory returns the total accumulated rewards per denom for a given user. */
  async getAccountHistory(params: GetAccountHistoryRequest): Promise<GetAccountHistoryResponse> {
    const endpoint = `duality/incentives/v1beta1/account_history/${params.account}`;
    return GetAccountHistoryResponse.fromJSON(await this.req.get<GetAccountHistoryResponse>(endpoint));
  }
  /* Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
   the prospective future rewards of staking. */
  async getGaugeQualifyingValue(params: GetGaugeQualifyingValueRequest): Promise<GetGaugeQualifyingValueResponse> {
    const endpoint = `duality/incentives/v1beta1/get_gauge_qualifying_value/${params.id}`;
    return GetGaugeQualifyingValueResponse.fromJSON(await this.req.get<GetGaugeQualifyingValueResponse>(endpoint));
  }
}