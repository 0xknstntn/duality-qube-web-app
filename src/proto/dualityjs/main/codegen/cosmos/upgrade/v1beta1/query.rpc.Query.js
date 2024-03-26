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
/** Query defines the gRPC upgrade querier service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "currentPlan",
    value: function currentPlan() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryCurrentPlanRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
      return promise.then(function (data) {
        return _query.QueryCurrentPlanResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "appliedPlan",
    value: function appliedPlan(request) {
      var data = _query.QueryAppliedPlanRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
      return promise.then(function (data) {
        return _query.QueryAppliedPlanResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "upgradedConsensusState",
    value: function upgradedConsensusState(request) {
      var data = _query.QueryUpgradedConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "moduleVersions",
    value: function moduleVersions(request) {
      var data = _query.QueryModuleVersionsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
      return promise.then(function (data) {
        return _query.QueryModuleVersionsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "authority",
    value: function authority() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryAuthorityRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
      return promise.then(function (data) {
        return _query.QueryAuthorityResponse.decode(new _m0.Reader(data));
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
    currentPlan: function currentPlan(request) {
      return queryService.currentPlan(request);
    },
    appliedPlan: function appliedPlan(request) {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState: function upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions: function moduleVersions(request) {
      return queryService.moduleVersions(request);
    },
    authority: function authority(request) {
      return queryService.authority(request);
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
  var useCurrentPlan = function useCurrentPlan(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["currentPlanQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentPlan(request);
    }, options);
  };
  var useAppliedPlan = function useAppliedPlan(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["appliedPlanQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.appliedPlan(request);
    }, options);
  };
  var useUpgradedConsensusState = function useUpgradedConsensusState(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["upgradedConsensusStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upgradedConsensusState(request);
    }, options);
  };
  var useModuleVersions = function useModuleVersions(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["moduleVersionsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleVersions(request);
    }, options);
  };
  var useAuthority = function useAuthority(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["authorityQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.authority(request);
    }, options);
  };
  return {
    /** CurrentPlan queries the current upgrade plan. */useCurrentPlan: useCurrentPlan,
    /** AppliedPlan queries a previously applied upgrade plan by its name. */useAppliedPlan: useAppliedPlan,
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    useUpgradedConsensusState: useUpgradedConsensusState,
    /**
     * ModuleVersions queries the list of module versions from state.
     * 
     * Since: cosmos-sdk 0.43
     */
    useModuleVersions: useModuleVersions,
    /**
     * Returns the account with authority to conduct upgrades
     * 
     * Since: cosmos-sdk 0.46
     */
    useAuthority: useAuthority
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;