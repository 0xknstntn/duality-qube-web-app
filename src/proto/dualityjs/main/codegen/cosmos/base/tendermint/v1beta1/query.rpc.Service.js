"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _reactQuery = require("@tanstack/react-query");
var _query = require("./query");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Service defines the gRPC querier service for tendermint queries. */
var ServiceClientImpl = /*#__PURE__*/function () {
  function ServiceClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, ServiceClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  (0, _createClass2["default"])(ServiceClientImpl, [{
    key: "getNodeInfo",
    value: function getNodeInfo() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetNodeInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
      return promise.then(function (data) {
        return _query.GetNodeInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getSyncing",
    value: function getSyncing() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetSyncingRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
      return promise.then(function (data) {
        return _query.GetSyncingResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getLatestBlock",
    value: function getLatestBlock() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetLatestBlockRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
      return promise.then(function (data) {
        return _query.GetLatestBlockResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getBlockByHeight",
    value: function getBlockByHeight(request) {
      var data = _query.GetBlockByHeightRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
      return promise.then(function (data) {
        return _query.GetBlockByHeightResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getLatestValidatorSet",
    value: function getLatestValidatorSet() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.GetLatestValidatorSetRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
      return promise.then(function (data) {
        return _query.GetLatestValidatorSetResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getValidatorSetByHeight",
    value: function getValidatorSetByHeight(request) {
      var data = _query.GetValidatorSetByHeightRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
      return promise.then(function (data) {
        return _query.GetValidatorSetByHeightResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "aBCIQuery",
    value: function aBCIQuery(request) {
      var data = _query.ABCIQueryRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
      return promise.then(function (data) {
        return _query.ABCIQueryResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return ServiceClientImpl;
}();
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new ServiceClientImpl(rpc);
  return {
    getNodeInfo: function getNodeInfo(request) {
      return queryService.getNodeInfo(request);
    },
    getSyncing: function getSyncing(request) {
      return queryService.getSyncing(request);
    },
    getLatestBlock: function getLatestBlock(request) {
      return queryService.getLatestBlock(request);
    },
    getBlockByHeight: function getBlockByHeight(request) {
      return queryService.getBlockByHeight(request);
    },
    getLatestValidatorSet: function getLatestValidatorSet(request) {
      return queryService.getLatestValidatorSet(request);
    },
    getValidatorSetByHeight: function getValidatorSetByHeight(request) {
      return queryService.getValidatorSetByHeight(request);
    },
    aBCIQuery: function aBCIQuery(request) {
      return queryService.aBCIQuery(request);
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
  var queryService = new ServiceClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
var createRpcQueryHooks = function createRpcQueryHooks(rpc) {
  var queryService = getQueryService(rpc);
  var useGetNodeInfo = function useGetNodeInfo(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["getNodeInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getNodeInfo(request);
    }, options);
  };
  var useGetSyncing = function useGetSyncing(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["getSyncingQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getSyncing(request);
    }, options);
  };
  var useGetLatestBlock = function useGetLatestBlock(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["getLatestBlockQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getLatestBlock(request);
    }, options);
  };
  var useGetBlockByHeight = function useGetBlockByHeight(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["getBlockByHeightQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getBlockByHeight(request);
    }, options);
  };
  var useGetLatestValidatorSet = function useGetLatestValidatorSet(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["getLatestValidatorSetQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getLatestValidatorSet(request);
    }, options);
  };
  var useGetValidatorSetByHeight = function useGetValidatorSetByHeight(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["getValidatorSetByHeightQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getValidatorSetByHeight(request);
    }, options);
  };
  var useABCIQuery = function useABCIQuery(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["aBCIQueryQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.aBCIQuery(request);
    }, options);
  };
  return {
    /** GetNodeInfo queries the current node info. */useGetNodeInfo: useGetNodeInfo,
    /** GetSyncing queries node syncing. */useGetSyncing: useGetSyncing,
    /** GetLatestBlock returns the latest block. */useGetLatestBlock: useGetLatestBlock,
    /** GetBlockByHeight queries block for given height. */useGetBlockByHeight: useGetBlockByHeight,
    /** GetLatestValidatorSet queries latest validator-set. */useGetLatestValidatorSet: useGetLatestValidatorSet,
    /** GetValidatorSetByHeight queries validator-set at a given height. */useGetValidatorSetByHeight: useGetValidatorSetByHeight,
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     * 
     * Since: cosmos-sdk 0.46
     */
    useABCIQuery: useABCIQuery
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;