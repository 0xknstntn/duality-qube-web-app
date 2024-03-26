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
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "accounts",
    value: function accounts() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAccountsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
      return promise.then(function (data) {
        return _query.QueryAccountsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "account",
    value: function account(request) {
      var data = _query.QueryAccountRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
      return promise.then(function (data) {
        return _query.QueryAccountResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "accountAddressByID",
    value: function accountAddressByID(request) {
      var data = _query.QueryAccountAddressByIDRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
      return promise.then(function (data) {
        return _query.QueryAccountAddressByIDResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "moduleAccounts",
    value: function moduleAccounts() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryModuleAccountsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
      return promise.then(function (data) {
        return _query.QueryModuleAccountsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "moduleAccountByName",
    value: function moduleAccountByName(request) {
      var data = _query.QueryModuleAccountByNameRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
      return promise.then(function (data) {
        return _query.QueryModuleAccountByNameResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "bech32Prefix",
    value: function bech32Prefix() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.Bech32PrefixRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
      return promise.then(function (data) {
        return _query.Bech32PrefixResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "addressBytesToString",
    value: function addressBytesToString(request) {
      var data = _query.AddressBytesToStringRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
      return promise.then(function (data) {
        return _query.AddressBytesToStringResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "addressStringToBytes",
    value: function addressStringToBytes(request) {
      var data = _query.AddressStringToBytesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
      return promise.then(function (data) {
        return _query.AddressStringToBytesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "accountInfo",
    value: function accountInfo(request) {
      var data = _query.QueryAccountInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
      return promise.then(function (data) {
        return _query.QueryAccountInfoResponse.decode(new _m0.Reader(data));
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
    accounts: function accounts(request) {
      return queryService.accounts(request);
    },
    account: function account(request) {
      return queryService.account(request);
    },
    accountAddressByID: function accountAddressByID(request) {
      return queryService.accountAddressByID(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    moduleAccounts: function moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName: function moduleAccountByName(request) {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix: function bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString: function addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes: function addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    },
    accountInfo: function accountInfo(request) {
      return queryService.accountInfo(request);
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
  var useAccounts = function useAccounts(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["accountsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };
  var useAccount = function useAccount(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["accountQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.account(request);
    }, options);
  };
  var useAccountAddressByID = function useAccountAddressByID(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["accountAddressByIDQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountAddressByID(request);
    }, options);
  };
  var useParams = function useParams(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  var useModuleAccounts = function useModuleAccounts(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["moduleAccountsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccounts(request);
    }, options);
  };
  var useModuleAccountByName = function useModuleAccountByName(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["moduleAccountByNameQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccountByName(request);
    }, options);
  };
  var useBech32Prefix = function useBech32Prefix(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["bech32PrefixQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bech32Prefix(request);
    }, options);
  };
  var useAddressBytesToString = function useAddressBytesToString(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["addressBytesToStringQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressBytesToString(request);
    }, options);
  };
  var useAddressStringToBytes = function useAddressStringToBytes(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["addressStringToBytesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressStringToBytes(request);
    }, options);
  };
  var useAccountInfo = function useAccountInfo(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["accountInfoQuery", request], function () {
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
    useAccounts: useAccounts,
    /** Account returns account details based on address. */useAccount: useAccount,
    /**
     * AccountAddressByID returns account address based on account number.
     * 
     * Since: cosmos-sdk 0.46.2
     */
    useAccountAddressByID: useAccountAddressByID,
    /** Params queries all parameters. */useParams: useParams,
    /**
     * ModuleAccounts returns all the existing module accounts.
     * 
     * Since: cosmos-sdk 0.46
     */
    useModuleAccounts: useModuleAccounts,
    /** ModuleAccountByName returns the module account info by module name */useModuleAccountByName: useModuleAccountByName,
    /**
     * Bech32Prefix queries bech32Prefix
     * 
     * Since: cosmos-sdk 0.46
     */
    useBech32Prefix: useBech32Prefix,
    /**
     * AddressBytesToString converts Account Address bytes to string
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressBytesToString: useAddressBytesToString,
    /**
     * AddressStringToBytes converts Address string to bytes
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressStringToBytes: useAddressStringToBytes,
    /**
     * AccountInfo queries account info which is common to all account types.
     * 
     * Since: cosmos-sdk 0.47
     */
    useAccountInfo: useAccountInfo
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;