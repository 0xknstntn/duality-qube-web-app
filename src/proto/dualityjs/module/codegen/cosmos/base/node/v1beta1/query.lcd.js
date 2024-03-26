import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { ConfigResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.config = this.config.bind(this);
  }
  /* Config queries for the operator configuration. */
  async config(_params = {}) {
    const endpoint = `cosmos/base/node/v1beta1/config`;
    return ConfigResponse.fromJSON(await this.req.get(endpoint));
  }
}