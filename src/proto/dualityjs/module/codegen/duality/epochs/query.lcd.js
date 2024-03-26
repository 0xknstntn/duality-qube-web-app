import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { QueryEpochsInfoResponse, QueryCurrentEpochResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  /* EpochInfos provide running epochInfos */
  async epochInfos(_params = {}) {
    const endpoint = `duality/epochs/epochs`;
    return QueryEpochsInfoResponse.fromJSON(await this.req.get(endpoint));
  }
  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.identifier) !== "undefined") {
      options.params.identifier = params.identifier;
    }
    const endpoint = `duality/epochs/current_epoch`;
    return QueryCurrentEpochResponse.fromJSON(await this.req.get(endpoint, options));
  }
}