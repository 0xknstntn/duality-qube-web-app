import { LCDClient } from "@cosmology/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(params: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(params?: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(params?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(params: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
