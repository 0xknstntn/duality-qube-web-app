import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  /* DenomTrace queries a denomination trace information. */
  async denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hash !== "undefined") {
      options.params.hash = params.hash;
    }
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return QueryDenomTraceResponse.fromJSON(await this.req.get<QueryDenomTraceResponse>(endpoint, options));
  }
  /* DenomTraces queries all denomination traces. */
  async denomTraces(params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return QueryDenomTracesResponse.fromJSON(await this.req.get<QueryDenomTracesResponse>(endpoint, options));
  }
  /* Params queries all parameters of the ibc-transfer module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  }
  /* DenomHash queries a denomination hash information. */
  async denomHash(params: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.trace !== "undefined") {
      options.params.trace = params.trace;
    }
    const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
    return QueryDenomHashResponse.fromJSON(await this.req.get<QueryDenomHashResponse>(endpoint, options));
  }
  /* EscrowAddress returns the escrow address for a particular port and channel id. */
  async escrowAddress(params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> {
    const endpoint = `ibc/apps/transfer/v1/channels/${params.channel_id}/ports/${params.port_id}/escrow_address`;
    return QueryEscrowAddressResponse.fromJSON(await this.req.get<QueryEscrowAddressResponse>(endpoint));
  }
  /* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  async totalEscrowForDenom(params: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `ibc/apps/transfer/v1/denoms/${params.denom}/total_escrow`;
    return QueryTotalEscrowForDenomResponse.fromJSON(await this.req.get<QueryTotalEscrowForDenomResponse>(endpoint, options));
  }
}