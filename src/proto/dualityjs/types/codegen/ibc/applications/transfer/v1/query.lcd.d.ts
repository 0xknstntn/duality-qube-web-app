import { LCDClient } from "@cosmology/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(params?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomHash(params: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(params: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
