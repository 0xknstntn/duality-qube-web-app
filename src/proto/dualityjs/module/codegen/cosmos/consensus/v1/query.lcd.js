import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { QueryParamsResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Params queries the parameters of x/consensus_param module. */
  async params(_params = {}) {
    const endpoint = `cosmos/consensus/v1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get(endpoint));
  }
}