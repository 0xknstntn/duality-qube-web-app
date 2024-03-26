import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { GetTxRequest, GetTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getTx = this.getTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }
  /* GetTx fetches a tx by hash. */
  async getTx(params: GetTxRequest): Promise<GetTxResponse> {
    const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
    return GetTxResponse.fromJSON(await this.req.get<GetTxResponse>(endpoint));
  }
  /* GetTxsEvent fetches txs by event. */
  async getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.events !== "undefined") {
      options.params.events = params.events;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.order_by !== "undefined") {
      options.params.order_by = params.order_by;
    }
    if (typeof params?.page !== "undefined") {
      options.params.page = params.page;
    }
    if (typeof params?.limit !== "undefined") {
      options.params.limit = params.limit;
    }
    const endpoint = `cosmos/tx/v1beta1/txs`;
    return GetTxsEventResponse.fromJSON(await this.req.get<GetTxsEventResponse>(endpoint, options));
  }
  /* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
  async getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`;
    return GetBlockWithTxsResponse.fromJSON(await this.req.get<GetBlockWithTxsResponse>(endpoint, options));
  }
}