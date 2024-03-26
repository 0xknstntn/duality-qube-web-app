"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _reactQuery = require("@tanstack/react-query");
var _query = require("./query");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Query defines the gRPC querier service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
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
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "balance",
    value: function balance(request) {
      var data = _query.QueryBalanceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
      return promise.then(function (data) {
        return _query.QueryBalanceResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "allBalances",
    value: function allBalances(request) {
      var data = _query.QueryAllBalancesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
      return promise.then(function (data) {
        return _query.QueryAllBalancesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "spendableBalances",
    value: function spendableBalances(request) {
      var data = _query.QuerySpendableBalancesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
      return promise.then(function (data) {
        return _query.QuerySpendableBalancesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "spendableBalanceByDenom",
    value: function spendableBalanceByDenom(request) {
      var data = _query.QuerySpendableBalanceByDenomRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
      return promise.then(function (data) {
        return _query.QuerySpendableBalanceByDenomResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "totalSupply",
    value: function totalSupply() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryTotalSupplyRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
      return promise.then(function (data) {
        return _query.QueryTotalSupplyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "supplyOf",
    value: function supplyOf(request) {
      var data = _query.QuerySupplyOfRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
      return promise.then(function (data) {
        return _query.QuerySupplyOfResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomMetadata",
    value: function denomMetadata(request) {
      var data = _query.QueryDenomMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
      return promise.then(function (data) {
        return _query.QueryDenomMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomsMetadata",
    value: function denomsMetadata() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryDenomsMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
      return promise.then(function (data) {
        return _query.QueryDenomsMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomOwners",
    value: function denomOwners(request) {
      var data = _query.QueryDenomOwnersRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
      return promise.then(function (data) {
        return _query.QueryDenomOwnersResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "sendEnabled",
    value: function sendEnabled(request) {
      var data = _query.QuerySendEnabledRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
      return promise.then(function (data) {
        return _query.QuerySendEnabledResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new QueryClientImpl(rpc);
  return {
    balance: function balance(request) {
      return queryService.balance(request);
    },
    allBalances: function allBalances(request) {
      return queryService.allBalances(request);
    },
    spendableBalances: function spendableBalances(request) {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom: function spendableBalanceByDenom(request) {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply: function totalSupply(request) {
      return queryService.totalSupply(request);
    },
    supplyOf: function supplyOf(request) {
      return queryService.supplyOf(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    denomMetadata: function denomMetadata(request) {
      return queryService.denomMetadata(request);
    },
    denomsMetadata: function denomsMetadata(request) {
      return queryService.denomsMetadata(request);
    },
    denomOwners: function denomOwners(request) {
      return queryService.denomOwners(request);
    },
    sendEnabled: function sendEnabled(request) {
      return queryService.sendEnabled(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
var _queryClients = new WeakMap();
var getQueryService = function getQueryService(rpc) {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  var queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
var createRpcQueryHooks = function createRpcQueryHooks(rpc) {
  var queryService = getQueryService(rpc);
  var useBalance = function useBalance(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["balanceQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };
  var useAllBalances = function useAllBalances(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["allBalancesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allBalances(request);
    }, options);
  };
  var useSpendableBalances = function useSpendableBalances(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["spendableBalancesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalances(request);
    }, options);
  };
  var useSpendableBalanceByDenom = function useSpendableBalanceByDenom(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["spendableBalanceByDenomQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalanceByDenom(request);
    }, options);
  };
  var useTotalSupply = function useTotalSupply(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["totalSupplyQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalSupply(request);
    }, options);
  };
  var useSupplyOf = function useSupplyOf(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["supplyOfQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplyOf(request);
    }, options);
  };
  var useParams = function useParams(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  var useDenomMetadata = function useDenomMetadata(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["denomMetadataQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomMetadata(request);
    }, options);
  };
  var useDenomsMetadata = function useDenomsMetadata(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["denomsMetadataQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomsMetadata(request);
    }, options);
  };
  var useDenomOwners = function useDenomOwners(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["denomOwnersQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomOwners(request);
    }, options);
  };
  var useSendEnabled = function useSendEnabled(_ref11) {
    var request = _ref11.request,
      options = _ref11.options;
    return (0, _reactQuery.useQuery)(["sendEnabledQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sendEnabled(request);
    }, options);
  };
  return {
    /** Balance queries the balance of a single coin for a single account. */useBalance: useBalance,
    /**
     * AllBalances queries the balance of all coins for a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useAllBalances: useAllBalances,
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useSpendableBalances: useSpendableBalances,
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSpendableBalanceByDenom: useSpendableBalanceByDenom,
    /**
     * TotalSupply queries the total supply of all coins.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useTotalSupply: useTotalSupply,
    /**
     * SupplyOf queries the supply of a single coin.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useSupplyOf: useSupplyOf,
    /** Params queries the parameters of x/bank module. */useParams: useParams,
    /** DenomsMetadata queries the client metadata of a given coin denomination. */useDenomMetadata: useDenomMetadata,
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata: useDenomsMetadata,
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useDenomOwners: useDenomOwners,
    /**
     * SendEnabled queries for SendEnabled entries.
     * 
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSendEnabled: useSendEnabled
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;