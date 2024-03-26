import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  /* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */
  async accounts(params: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return QueryAccountsResponse.fromJSON(await this.req.get<QueryAccountsResponse>(endpoint, options));
  }
  /* Account returns account details based on address. */
  async account(params: QueryAccountRequest): Promise<QueryAccountResponse> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return QueryAccountResponse.fromJSON(await this.req.get<QueryAccountResponse>(endpoint));
  }
  /* AccountAddressByID returns account address based on account number.
  
   Since: cosmos-sdk 0.46.2 */
  async accountAddressByID(params: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.account_id !== "undefined") {
      options.params.account_id = params.account_id;
    }
    const endpoint = `cosmos/auth/v1beta1/address_by_id/${params.id}`;
    return QueryAccountAddressByIDResponse.fromJSON(await this.req.get<QueryAccountAddressByIDResponse>(endpoint, options));
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  }
  /* ModuleAccounts returns all the existing module accounts.
  
   Since: cosmos-sdk 0.46 */
  async moduleAccounts(_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponse> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return QueryModuleAccountsResponse.fromJSON(await this.req.get<QueryModuleAccountsResponse>(endpoint));
  }
  /* ModuleAccountByName returns the module account info by module name */
  async moduleAccountByName(params: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts/${params.name}`;
    return QueryModuleAccountByNameResponse.fromJSON(await this.req.get<QueryModuleAccountByNameResponse>(endpoint));
  }
  /* Bech32Prefix queries bech32Prefix
  
   Since: cosmos-sdk 0.46 */
  async bech32Prefix(_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return Bech32PrefixResponse.fromJSON(await this.req.get<Bech32PrefixResponse>(endpoint));
  }
  /* AddressBytesToString converts Account Address bytes to string
  
   Since: cosmos-sdk 0.46 */
  async addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.address_bytes}`;
    return AddressBytesToStringResponse.fromJSON(await this.req.get<AddressBytesToStringResponse>(endpoint));
  }
  /* AddressStringToBytes converts Address string to bytes
  
   Since: cosmos-sdk 0.46 */
  async addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.address_string}`;
    return AddressStringToBytesResponse.fromJSON(await this.req.get<AddressStringToBytesResponse>(endpoint));
  }
  /* AccountInfo queries account info which is common to all account types.
  
   Since: cosmos-sdk 0.47 */
  async accountInfo(params: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> {
    const endpoint = `cosmos/auth/v1beta1/account_info/${params.address}`;
    return QueryAccountInfoResponse.fromJSON(await this.req.get<QueryAccountInfoResponse>(endpoint));
  }
}