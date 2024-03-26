import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../../helpers";
import { QueryDenomTraceResponse, QueryDenomTracesResponse, QueryParamsResponse, QueryDenomHashResponse, QueryEscrowAddressResponse, QueryTotalEscrowForDenomResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  /* DenomTrace queries a denomination trace information. */
  async denomTrace(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.hash) !== "undefined") {
      options.params.hash = params.hash;
    }
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return QueryDenomTraceResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* DenomTraces queries all denomination traces. */
  async denomTraces(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return QueryDenomTracesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Params queries all parameters of the ibc-transfer module. */
  async params(_params = {}) {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get(endpoint));
  }
  /* DenomHash queries a denomination hash information. */
  async denomHash(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.trace) !== "undefined") {
      options.params.trace = params.trace;
    }
    const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
    return QueryDenomHashResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* EscrowAddress returns the escrow address for a particular port and channel id. */
  async escrowAddress(params) {
    const endpoint = `ibc/apps/transfer/v1/channels/${params.channel_id}/ports/${params.port_id}/escrow_address`;
    return QueryEscrowAddressResponse.fromJSON(await this.req.get(endpoint));
  }
  /* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  async totalEscrowForDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `ibc/apps/transfer/v1/denoms/${params.denom}/total_escrow`;
    return QueryTotalEscrowForDenomResponse.fromJSON(await this.req.get(endpoint, options));
  }
}