import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    spendableBalanceByDenom(params: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
    totalSupply(params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(params?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    denomOwners(params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
    sendEnabled(params: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
