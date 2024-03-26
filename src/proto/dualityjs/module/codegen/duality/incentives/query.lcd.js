import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { GetModuleStatusResponse, GetGaugeByIDResponse, GetGaugesResponse, GetStakeByIDResponse, GetStakesResponse, GetFutureRewardEstimateResponse, GetAccountHistoryResponse, GetGaugeQualifyingValueResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
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
  async getModuleStatus(_params = {}) {
    const endpoint = `duality/incentives/v1beta1/module_status`;
    return GetModuleStatusResponse.fromJSON(await this.req.get(endpoint));
  }
  /* GetGaugeByID returns a gauge by its ID */
  async getGaugeByID(params) {
    const endpoint = `duality/incentives/v1beta1/gauges/${params.id}`;
    return GetGaugeByIDResponse.fromJSON(await this.req.get(endpoint));
  }
  /* GetGauges returns gauges according to the filter provided */
  async getGauges(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.status) !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `duality/incentives/v1beta1/gauges`;
    return GetGaugesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GetStakeByID returns a stake by its ID */
  async getStakeByID(params) {
    const endpoint = `duality/incentives/stakes/${params.stake_id}`;
    return GetStakeByIDResponse.fromJSON(await this.req.get(endpoint));
  }
  /* GetStakes returns stakes by the filter provided. At least one filter must be provided. */
  async getStakes(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.owner) !== "undefined") {
      options.params.owner = params.owner;
    }
    const endpoint = `duality/incentives/stakes`;
    return GetStakesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
   time in the future. The requestor either provides an address or a set of locks
   for which they want to find the associated rewards. */
  async getFutureRewardEstimate(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.stake_ids) !== "undefined") {
      options.params.stake_ids = params.stake_ids;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.num_epochs) !== "undefined") {
      options.params.num_epochs = params.num_epochs;
    }
    const endpoint = `duality/incentives/v1beta1/future_rewards_estimate/${params.owner}`;
    return GetFutureRewardEstimateResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GetAccountHistory returns the total accumulated rewards per denom for a given user. */
  async getAccountHistory(params) {
    const endpoint = `duality/incentives/v1beta1/account_history/${params.account}`;
    return GetAccountHistoryResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
   the prospective future rewards of staking. */
  async getGaugeQualifyingValue(params) {
    const endpoint = `duality/incentives/v1beta1/get_gauge_qualifying_value/${params.id}`;
    return GetGaugeQualifyingValueResponse.fromJSON(await this.req.get(endpoint));
  }
}