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
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "clientState",
    value: function clientState(request) {
      var data = _query.QueryClientStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
      return promise.then(function (data) {
        return _query.QueryClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientStates",
    value: function clientStates() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryClientStatesRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
      return promise.then(function (data) {
        return _query.QueryClientStatesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "consensusState",
    value: function consensusState(request) {
      var data = _query.QueryConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "consensusStates",
    value: function consensusStates(request) {
      var data = _query.QueryConsensusStatesRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
      return promise.then(function (data) {
        return _query.QueryConsensusStatesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "consensusStateHeights",
    value: function consensusStateHeights(request) {
      var data = _query.QueryConsensusStateHeightsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
      return promise.then(function (data) {
        return _query.QueryConsensusStateHeightsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientStatus",
    value: function clientStatus(request) {
      var data = _query.QueryClientStatusRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
      return promise.then(function (data) {
        return _query.QueryClientStatusResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientParams",
    value: function clientParams() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryClientParamsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
      return promise.then(function (data) {
        return _query.QueryClientParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "upgradedClientState",
    value: function upgradedClientState() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryUpgradedClientStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
      return promise.then(function (data) {
        return _query.QueryUpgradedClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "upgradedConsensusState",
    value: function upgradedConsensusState() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryUpgradedConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data));
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
    clientState: function clientState(request) {
      return queryService.clientState(request);
    },
    clientStates: function clientStates(request) {
      return queryService.clientStates(request);
    },
    consensusState: function consensusState(request) {
      return queryService.consensusState(request);
    },
    consensusStates: function consensusStates(request) {
      return queryService.consensusStates(request);
    },
    consensusStateHeights: function consensusStateHeights(request) {
      return queryService.consensusStateHeights(request);
    },
    clientStatus: function clientStatus(request) {
      return queryService.clientStatus(request);
    },
    clientParams: function clientParams(request) {
      return queryService.clientParams(request);
    },
    upgradedClientState: function upgradedClientState(request) {
      return queryService.upgradedClientState(request);
    },
    upgradedConsensusState: function upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
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
  var useClientState = function useClientState(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["clientStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientState(request);
    }, options);
  };
  var useClientStates = function useClientStates(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["clientStatesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientStates(request);
    }, options);
  };
  var useConsensusState = function useConsensusState(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["consensusStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusState(request);
    }, options);
  };
  var useConsensusStates = function useConsensusStates(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["consensusStatesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusStates(request);
    }, options);
  };
  var useConsensusStateHeights = function useConsensusStateHeights(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["consensusStateHeightsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.consensusStateHeights(request);
    }, options);
  };
  var useClientStatus = function useClientStatus(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["clientStatusQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientStatus(request);
    }, options);
  };
  var useClientParams = function useClientParams(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["clientParamsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientParams(request);
    }, options);
  };
  var useUpgradedClientState = function useUpgradedClientState(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["upgradedClientStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedClientState(request);
    }, options);
  };
  var useUpgradedConsensusState = function useUpgradedConsensusState(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["upgradedConsensusStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedConsensusState(request);
    }, options);
  };
  return {
    /** ClientState queries an IBC light client. */useClientState: useClientState,
    /** ClientStates queries all the IBC light clients of a chain. */useClientStates: useClientStates,
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: useConsensusState,
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: useConsensusStates,
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */useConsensusStateHeights: useConsensusStateHeights,
    /** Status queries the status of an IBC client. */useClientStatus: useClientStatus,
    /** ClientParams queries all parameters of the ibc client submodule. */useClientParams: useClientParams,
    /** UpgradedClientState queries an Upgraded IBC light client. */useUpgradedClientState: useUpgradedClientState,
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */useUpgradedConsensusState: useUpgradedConsensusState
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;