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
  /* Params queries the parameters of the x/builder module. */
  async params(_params = {}) {
    const endpoint = `pob/builder/v1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get(endpoint));
  }
}