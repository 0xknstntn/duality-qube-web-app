import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    accounts(params?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(params: QueryAccountRequest): Promise<QueryAccountResponse>;
    accountAddressByID(params: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(_params?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    moduleAccountByName(params: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
    bech32Prefix(_params?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
    accountInfo(params: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse>;
}
