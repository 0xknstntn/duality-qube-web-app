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
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "connection",
    value: function connection(request) {
      var data = _query.QueryConnectionRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
      return promise.then(function (data) {
        return _query.QueryConnectionResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connections",
    value: function connections() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryConnectionsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
      return promise.then(function (data) {
        return _query.QueryConnectionsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientConnections",
    value: function clientConnections(request) {
      var data = _query.QueryClientConnectionsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
      return promise.then(function (data) {
        return _query.QueryClientConnectionsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionClientState",
    value: function connectionClientState(request) {
      var data = _query.QueryConnectionClientStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
      return promise.then(function (data) {
        return _query.QueryConnectionClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionConsensusState",
    value: function connectionConsensusState(request) {
      var data = _query.QueryConnectionConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionParams",
    value: function connectionParams() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryConnectionParamsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
      return promise.then(function (data) {
        return _query.QueryConnectionParamsResponse.decode(new _m0.Reader(data));
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
    connection: function connection(request) {
      return queryService.connection(request);
    },
    connections: function connections(request) {
      return queryService.connections(request);
    },
    clientConnections: function clientConnections(request) {
      return queryService.clientConnections(request);
    },
    connectionClientState: function connectionClientState(request) {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState: function connectionConsensusState(request) {
      return queryService.connectionConsensusState(request);
    },
    connectionParams: function connectionParams(request) {
      return queryService.connectionParams(request);
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
  var useConnection = function useConnection(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["connectionQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connection(request);
    }, options);
  };
  var useConnections = function useConnections(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["connectionsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connections(request);
    }, options);
  };
  var useClientConnections = function useClientConnections(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["clientConnectionsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientConnections(request);
    }, options);
  };
  var useConnectionClientState = function useConnectionClientState(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["connectionClientStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionClientState(request);
    }, options);
  };
  var useConnectionConsensusState = function useConnectionConsensusState(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["connectionConsensusStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionConsensusState(request);
    }, options);
  };
  var useConnectionParams = function useConnectionParams(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["connectionParamsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionParams(request);
    }, options);
  };
  return {
    /** Connection queries an IBC connection end. */useConnection: useConnection,
    /** Connections queries all the IBC connections of a chain. */useConnections: useConnections,
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections: useClientConnections,
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState: useConnectionClientState,
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState: useConnectionConsensusState,
    /** ConnectionParams queries all parameters of the ibc connection submodule. */useConnectionParams: useConnectionParams
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;