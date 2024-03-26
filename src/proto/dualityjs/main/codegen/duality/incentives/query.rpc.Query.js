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
/** Query defines the gRPC querier service */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.getModuleStatus = this.getModuleStatus.bind(this);
    this.getGaugeByID = this.getGaugeByID.bind(this);
    this.getGauges = this.getGauges.bind(this);
    this.getStakeByID = this.getStakeByID.bind(this);
    this.getStakes = this.getStakes.bind(this);
    this.getFutureRewardEstimate = this.getFutureRewardEstimate.bind(this);
    this.getAccountHistory = this.getAccountHistory.bind(this);
    this.getGaugeQualifyingValue = this.getGaugeQualifyingValue.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "getModuleStatus",
    value: function getModuleStatus() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetModuleStatusRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetModuleStatus", data);
      return promise.then(function (data) {
        return _query.GetModuleStatusResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getGaugeByID",
    value: function getGaugeByID(request) {
      var data = _query.GetGaugeByIDRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetGaugeByID", data);
      return promise.then(function (data) {
        return _query.GetGaugeByIDResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getGauges",
    value: function getGauges(request) {
      var data = _query.GetGaugesRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetGauges", data);
      return promise.then(function (data) {
        return _query.GetGaugesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getStakeByID",
    value: function getStakeByID(request) {
      var data = _query.GetStakeByIDRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetStakeByID", data);
      return promise.then(function (data) {
        return _query.GetStakeByIDResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getStakes",
    value: function getStakes(request) {
      var data = _query.GetStakesRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetStakes", data);
      return promise.then(function (data) {
        return _query.GetStakesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getFutureRewardEstimate",
    value: function getFutureRewardEstimate(request) {
      var data = _query.GetFutureRewardEstimateRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetFutureRewardEstimate", data);
      return promise.then(function (data) {
        return _query.GetFutureRewardEstimateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getAccountHistory",
    value: function getAccountHistory(request) {
      var data = _query.GetAccountHistoryRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetAccountHistory", data);
      return promise.then(function (data) {
        return _query.GetAccountHistoryResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getGaugeQualifyingValue",
    value: function getGaugeQualifyingValue(request) {
      var data = _query.GetGaugeQualifyingValueRequest.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Query", "GetGaugeQualifyingValue", data);
      return promise.then(function (data) {
        return _query.GetGaugeQualifyingValueResponse.decode(new _m0.Reader(data));
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
    getModuleStatus: function getModuleStatus(request) {
      return queryService.getModuleStatus(request);
    },
    getGaugeByID: function getGaugeByID(request) {
      return queryService.getGaugeByID(request);
    },
    getGauges: function getGauges(request) {
      return queryService.getGauges(request);
    },
    getStakeByID: function getStakeByID(request) {
      return queryService.getStakeByID(request);
    },
    getStakes: function getStakes(request) {
      return queryService.getStakes(request);
    },
    getFutureRewardEstimate: function getFutureRewardEstimate(request) {
      return queryService.getFutureRewardEstimate(request);
    },
    getAccountHistory: function getAccountHistory(request) {
      return queryService.getAccountHistory(request);
    },
    getGaugeQualifyingValue: function getGaugeQualifyingValue(request) {
      return queryService.getGaugeQualifyingValue(request);
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
  var useGetModuleStatus = function useGetModuleStatus(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["getModuleStatusQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getModuleStatus(request);
    }, options);
  };
  var useGetGaugeByID = function useGetGaugeByID(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["getGaugeByIDQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getGaugeByID(request);
    }, options);
  };
  var useGetGauges = function useGetGauges(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["getGaugesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getGauges(request);
    }, options);
  };
  var useGetStakeByID = function useGetStakeByID(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["getStakeByIDQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getStakeByID(request);
    }, options);
  };
  var useGetStakes = function useGetStakes(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["getStakesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getStakes(request);
    }, options);
  };
  var useGetFutureRewardEstimate = function useGetFutureRewardEstimate(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["getFutureRewardEstimateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getFutureRewardEstimate(request);
    }, options);
  };
  var useGetAccountHistory = function useGetAccountHistory(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["getAccountHistoryQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getAccountHistory(request);
    }, options);
  };
  var useGetGaugeQualifyingValue = function useGetGaugeQualifyingValue(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["getGaugeQualifyingValueQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getGaugeQualifyingValue(request);
    }, options);
  };
  return {
    /** GetModuleStatus returns a rundown of coins in the module and their status */useGetModuleStatus: useGetModuleStatus,
    /** GetGaugeByID returns a gauge by its ID */useGetGaugeByID: useGetGaugeByID,
    /** GetGauges returns gauges according to the filter provided */useGetGauges: useGetGauges,
    /** GetStakeByID returns a stake by its ID */useGetStakeByID: useGetStakeByID,
    /** GetStakes returns stakes by the filter provided. At least one filter must be provided. */useGetStakes: useGetStakes,
    /**
     * GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
     * time in the future. The requestor either provides an address or a set of locks
     * for which they want to find the associated rewards.
     */
    useGetFutureRewardEstimate: useGetFutureRewardEstimate,
    /** GetAccountHistory returns the total accumulated rewards per denom for a given user. */useGetAccountHistory: useGetAccountHistory,
    /**
     * Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
     * the prospective future rewards of staking.
     */
    useGetGaugeQualifyingValue: useGetGaugeQualifyingValue
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;