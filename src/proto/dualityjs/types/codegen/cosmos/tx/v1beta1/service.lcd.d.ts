import { LCDClient } from "@cosmology/lcd";
import { GetTxRequest, GetTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    getTx(params: GetTxRequest): Promise<GetTxResponse>;
    getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
