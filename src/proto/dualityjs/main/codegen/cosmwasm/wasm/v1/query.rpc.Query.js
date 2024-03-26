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
/** Query provides defines the gRPC querier service */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "contractInfo",
    value: function contractInfo(request) {
      var data = _query.QueryContractInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
      return promise.then(function (data) {
        return _query.QueryContractInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "contractHistory",
    value: function contractHistory(request) {
      var data = _query.QueryContractHistoryRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
      return promise.then(function (data) {
        return _query.QueryContractHistoryResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "contractsByCode",
    value: function contractsByCode(request) {
      var data = _query.QueryContractsByCodeRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
      return promise.then(function (data) {
        return _query.QueryContractsByCodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "allContractState",
    value: function allContractState(request) {
      var data = _query.QueryAllContractStateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
      return promise.then(function (data) {
        return _query.QueryAllContractStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "rawContractState",
    value: function rawContractState(request) {
      var data = _query.QueryRawContractStateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
      return promise.then(function (data) {
        return _query.QueryRawContractStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "smartContractState",
    value: function smartContractState(request) {
      var data = _query.QuerySmartContractStateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
      return promise.then(function (data) {
        return _query.QuerySmartContractStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "code",
    value: function code(request) {
      var data = _query.QueryCodeRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
      return promise.then(function (data) {
        return _query.QueryCodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "codes",
    value: function codes() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryCodesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
      return promise.then(function (data) {
        return _query.QueryCodesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "pinnedCodes",
    value: function pinnedCodes() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryPinnedCodesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
      return promise.then(function (data) {
        return _query.QueryPinnedCodesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "contractsByCreator",
    value: function contractsByCreator(request) {
      var data = _query.QueryContractsByCreatorRequest.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
      return promise.then(function (data) {
        return _query.QueryContractsByCreatorResponse.decode(new _m0.Reader(data));
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
    contractInfo: function contractInfo(request) {
      return queryService.contractInfo(request);
    },
    contractHistory: function contractHistory(request) {
      return queryService.contractHistory(request);
    },
    contractsByCode: function contractsByCode(request) {
      return queryService.contractsByCode(request);
    },
    allContractState: function allContractState(request) {
      return queryService.allContractState(request);
    },
    rawContractState: function rawContractState(request) {
      return queryService.rawContractState(request);
    },
    smartContractState: function smartContractState(request) {
      return queryService.smartContractState(request);
    },
    code: function code(request) {
      return queryService.code(request);
    },
    codes: function codes(request) {
      return queryService.codes(request);
    },
    pinnedCodes: function pinnedCodes(request) {
      return queryService.pinnedCodes(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    contractsByCreator: function contractsByCreator(request) {
      return queryService.contractsByCreator(request);
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
  var useContractInfo = function useContractInfo(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["contractInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractInfo(request);
    }, options);
  };
  var useContractHistory = function useContractHistory(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["contractHistoryQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractHistory(request);
    }, options);
  };
  var useContractsByCode = function useContractsByCode(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["contractsByCodeQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractsByCode(request);
    }, options);
  };
  var useAllContractState = function useAllContractState(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["allContractStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allContractState(request);
    }, options);
  };
  var useRawContractState = function useRawContractState(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["rawContractStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.rawContractState(request);
    }, options);
  };
  var useSmartContractState = function useSmartContractState(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["smartContractStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.smartContractState(request);
    }, options);
  };
  var useCode = function useCode(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["codeQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.code(request);
    }, options);
  };
  var useCodes = function useCodes(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["codesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.codes(request);
    }, options);
  };
  var usePinnedCodes = function usePinnedCodes(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["pinnedCodesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pinnedCodes(request);
    }, options);
  };
  var useParams = function useParams(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  var useContractsByCreator = function useContractsByCreator(_ref11) {
    var request = _ref11.request,
      options = _ref11.options;
    return (0, _reactQuery.useQuery)(["contractsByCreatorQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractsByCreator(request);
    }, options);
  };
  return {
    /** ContractInfo gets the contract meta data */useContractInfo: useContractInfo,
    /** ContractHistory gets the contract code history */useContractHistory: useContractHistory,
    /** ContractsByCode lists all smart contracts for a code id */useContractsByCode: useContractsByCode,
    /** AllContractState gets all raw store data for a single contract */useAllContractState: useAllContractState,
    /** RawContractState gets single key from the raw store data of a contract */useRawContractState: useRawContractState,
    /** SmartContractState get smart query result from the contract */useSmartContractState: useSmartContractState,
    /** Code gets the binary code and metadata for a singe wasm code */useCode: useCode,
    /** Codes gets the metadata for all stored wasm codes */useCodes: useCodes,
    /** PinnedCodes gets the pinned code ids */usePinnedCodes: usePinnedCodes,
    /** Params gets the module params */useParams: useParams,
    /** ContractsByCreator gets the contracts by creator */useContractsByCreator: useContractsByCreator
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;