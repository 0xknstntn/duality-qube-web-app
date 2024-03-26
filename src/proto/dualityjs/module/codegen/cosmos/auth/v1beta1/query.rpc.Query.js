import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
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
  accounts(request = {
    pagination: undefined
  }) {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }
  account(request) {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new _m0.Reader(data)));
  }
  accountAddressByID(request) {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then(data => QueryAccountAddressByIDResponse.decode(new _m0.Reader(data)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  moduleAccounts(request = {}) {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then(data => QueryModuleAccountsResponse.decode(new _m0.Reader(data)));
  }
  moduleAccountByName(request) {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then(data => QueryModuleAccountByNameResponse.decode(new _m0.Reader(data)));
  }
  bech32Prefix(request = {}) {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then(data => Bech32PrefixResponse.decode(new _m0.Reader(data)));
  }
  addressBytesToString(request) {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then(data => AddressBytesToStringResponse.decode(new _m0.Reader(data)));
  }
  addressStringToBytes(request) {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then(data => AddressStringToBytesResponse.decode(new _m0.Reader(data)));
  }
  accountInfo(request) {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then(data => QueryAccountInfoResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request) {
      return queryService.accounts(request);
    },
    account(request) {
      return queryService.account(request);
    },
    accountAddressByID(request) {
      return queryService.accountAddressByID(request);
    },
    params(request) {
      return queryService.params(request);
    },
    moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName(request) {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    },
    accountInfo(request) {
      return queryService.accountInfo(request);
    }
  };
};
const _queryClients = new WeakMap();
const getQueryService = rpc => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = rpc => {
  const queryService = getQueryService(rpc);
  const useAccounts = ({
    request,
    options
  }) => {
    return useQuery(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };
  const useAccount = ({
    request,
    options
  }) => {
    return useQuery(["accountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.account(request);
    }, options);
  };
  const useAccountAddressByID = ({
    request,
    options
  }) => {
    return useQuery(["accountAddressByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountAddressByID(request);
    }, options);
  };
  const useParams = ({
    request,
    options
  }) => {
    return useQuery(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useModuleAccounts = ({
    request,
    options
  }) => {
    return useQuery(["moduleAccountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccounts(request);
    }, options);
  };
  const useModuleAccountByName = ({
    request,
    options
  }) => {
    return useQuery(["moduleAccountByNameQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccountByName(request);
    }, options);
  };
  const useBech32Prefix = ({
    request,
    options
  }) => {
    return useQuery(["bech32PrefixQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bech32Prefix(request);
    }, options);
  };
  const useAddressBytesToString = ({
    request,
    options
  }) => {
    return useQuery(["addressBytesToStringQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressBytesToString(request);
    }, options);
  };
  const useAddressStringToBytes = ({
    request,
    options
  }) => {
    return useQuery(["addressStringToBytesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressStringToBytes(request);
    }, options);
  };
  const useAccountInfo = ({
    request,
    options
  }) => {
    return useQuery(["accountInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountInfo(request);
    }, options);
  };
  return {
    /**
     * Accounts returns all the existing accounts.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.43
     */
    useAccounts,
    /** Account returns account details based on address. */useAccount,
    /**
     * AccountAddressByID returns account address based on account number.
     * 
     * Since: cosmos-sdk 0.46.2
     */
    useAccountAddressByID,
    /** Params queries all parameters. */useParams,
    /**
     * ModuleAccounts returns all the existing module accounts.
     * 
     * Since: cosmos-sdk 0.46
     */
    useModuleAccounts,
    /** ModuleAccountByName returns the module account info by module name */useModuleAccountByName,
    /**
     * Bech32Prefix queries bech32Prefix
     * 
     * Since: cosmos-sdk 0.46
     */
    useBech32Prefix,
    /**
     * AddressBytesToString converts Account Address bytes to string
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressBytesToString,
    /**
     * AddressStringToBytes converts Address string to bytes
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressStringToBytes,
    /**
     * AccountInfo queries account info which is common to all account types.
     * 
     * Since: cosmos-sdk 0.47
     */
    useAccountInfo
  };
};