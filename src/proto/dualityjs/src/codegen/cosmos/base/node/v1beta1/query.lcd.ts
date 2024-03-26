import { LCDClient } from "@cosmology/lcd";
import { ConfigRequest, ConfigResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.config = this.config.bind(this);
  }
  /* Config queries for the operator configuration. */
  async config(_params: ConfigRequest = {}): Promise<ConfigResponse> {
    const endpoint = `cosmos/base/node/v1beta1/config`;
    return ConfigResponse.fromJSON(await this.req.get<ConfigResponse>(endpoint));
  }
}