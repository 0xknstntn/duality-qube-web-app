import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.sendEnabled = this.sendEnabled.bind(this);
  }
  balance(request) {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }
  allBalances(request) {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then(data => QueryAllBalancesResponse.decode(new _m0.Reader(data)));
  }
  spendableBalances(request) {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new _m0.Reader(data)));
  }
  spendableBalanceByDenom(request) {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then(data => QuerySpendableBalanceByDenomResponse.decode(new _m0.Reader(data)));
  }
  totalSupply(request = {
    pagination: undefined
  }) {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
  }
  supplyOf(request) {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new _m0.Reader(data)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  denomMetadata(request) {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then(data => QueryDenomMetadataResponse.decode(new _m0.Reader(data)));
  }
  denomsMetadata(request = {
    pagination: undefined
  }) {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then(data => QueryDenomsMetadataResponse.decode(new _m0.Reader(data)));
  }
  denomOwners(request) {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then(data => QueryDenomOwnersResponse.decode(new _m0.Reader(data)));
  }
  sendEnabled(request) {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then(data => QuerySendEnabledResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    allBalances(request) {
      return queryService.allBalances(request);
    },
    spendableBalances(request) {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom(request) {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply(request) {
      return queryService.totalSupply(request);
    },
    supplyOf(request) {
      return queryService.supplyOf(request);
    },
    params(request) {
      return queryService.params(request);
    },
    denomMetadata(request) {
      return queryService.denomMetadata(request);
    },
    denomsMetadata(request) {
      return queryService.denomsMetadata(request);
    },
    denomOwners(request) {
      return queryService.denomOwners(request);
    },
    sendEnabled(request) {
      return queryService.sendEnabled(request);
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
  const useBalance = ({
    request,
    options
  }) => {
    return useQuery(["balanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };
  const useAllBalances = ({
    request,
    options
  }) => {
    return useQuery(["allBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allBalances(request);
    }, options);
  };
  const useSpendableBalances = ({
    request,
    options
  }) => {
    return useQuery(["spendableBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalances(request);
    }, options);
  };
  const useSpendableBalanceByDenom = ({
    request,
    options
  }) => {
    return useQuery(["spendableBalanceByDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalanceByDenom(request);
    }, options);
  };
  const useTotalSupply = ({
    request,
    options
  }) => {
    return useQuery(["totalSupplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalSupply(request);
    }, options);
  };
  const useSupplyOf = ({
    request,
    options
  }) => {
    return useQuery(["supplyOfQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplyOf(request);
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
  const useDenomMetadata = ({
    request,
    options
  }) => {
    return useQuery(["denomMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomMetadata(request);
    }, options);
  };
  const useDenomsMetadata = ({
    request,
    options
  }) => {
    return useQuery(["denomsMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomsMetadata(request);
    }, options);
  };
  const useDenomOwners = ({
    request,
    options
  }) => {
    return useQuery(["denomOwnersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomOwners(request);
    }, options);
  };
  const useSendEnabled = ({
    request,
    options
  }) => {
    return useQuery(["sendEnabledQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sendEnabled(request);
    }, options);
  };
  return {
    /** Balance queries the balance of a single coin for a single account. */useBalance,
    /**
     * AllBalances queries the balance of all coins for a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useAllBalances,
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useSpendableBalances,
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSpendableBalanceByDenom,
    /**
     * TotalSupply queries the total supply of all coins.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useTotalSupply,
    /**
     * SupplyOf queries the supply of a single coin.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useSupplyOf,
    /** Params queries the parameters of x/bank module. */useParams,
    /** DenomsMetadata queries the client metadata of a given coin denomination. */useDenomMetadata,
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata,
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useDenomOwners,
    /**
     * SendEnabled queries for SendEnabled entries.
     * 
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSendEnabled
  };
};