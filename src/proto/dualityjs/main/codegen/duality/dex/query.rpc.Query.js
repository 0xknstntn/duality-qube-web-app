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
    this.params = this.params.bind(this);
    this.limitOrderTrancheUser = this.limitOrderTrancheUser.bind(this);
    this.limitOrderTrancheUserAll = this.limitOrderTrancheUserAll.bind(this);
    this.limitOrderTrancheUserAllByAddress = this.limitOrderTrancheUserAllByAddress.bind(this);
    this.limitOrderTranche = this.limitOrderTranche.bind(this);
    this.limitOrderTrancheAll = this.limitOrderTrancheAll.bind(this);
    this.userDepositsAll = this.userDepositsAll.bind(this);
    this.tickLiquidityAll = this.tickLiquidityAll.bind(this);
    this.inactiveLimitOrderTranche = this.inactiveLimitOrderTranche.bind(this);
    this.inactiveLimitOrderTrancheAll = this.inactiveLimitOrderTrancheAll.bind(this);
    this.poolReservesAll = this.poolReservesAll.bind(this);
    this.poolReserves = this.poolReserves.bind(this);
    this.estimateMultiHopSwap = this.estimateMultiHopSwap.bind(this);
    this.estimatePlaceLimitOrder = this.estimatePlaceLimitOrder.bind(this);
    this.pool = this.pool.bind(this);
    this.poolByID = this.poolByID.bind(this);
    this.poolMetadata = this.poolMetadata.bind(this);
    this.poolMetadataAll = this.poolMetadataAll.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "limitOrderTrancheUser",
    value: function limitOrderTrancheUser(request) {
      var data = _query.QueryGetLimitOrderTrancheUserRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUser", data);
      return promise.then(function (data) {
        return _query.QueryGetLimitOrderTrancheUserResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "limitOrderTrancheUserAll",
    value: function limitOrderTrancheUserAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllLimitOrderTrancheUserRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUserAll", data);
      return promise.then(function (data) {
        return _query.QueryAllLimitOrderTrancheUserResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "limitOrderTrancheUserAllByAddress",
    value: function limitOrderTrancheUserAllByAddress(request) {
      var data = _query.QueryAllUserLimitOrdersRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheUserAllByAddress", data);
      return promise.then(function (data) {
        return _query.QueryAllUserLimitOrdersResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "limitOrderTranche",
    value: function limitOrderTranche(request) {
      var data = _query.QueryGetLimitOrderTrancheRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "LimitOrderTranche", data);
      return promise.then(function (data) {
        return _query.QueryGetLimitOrderTrancheResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "limitOrderTrancheAll",
    value: function limitOrderTrancheAll(request) {
      var data = _query.QueryAllLimitOrderTrancheRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "LimitOrderTrancheAll", data);
      return promise.then(function (data) {
        return _query.QueryAllLimitOrderTrancheResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "userDepositsAll",
    value: function userDepositsAll(request) {
      var data = _query.QueryAllUserDepositsRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "UserDepositsAll", data);
      return promise.then(function (data) {
        return _query.QueryAllUserDepositsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "tickLiquidityAll",
    value: function tickLiquidityAll(request) {
      var data = _query.QueryAllTickLiquidityRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "TickLiquidityAll", data);
      return promise.then(function (data) {
        return _query.QueryAllTickLiquidityResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "inactiveLimitOrderTranche",
    value: function inactiveLimitOrderTranche(request) {
      var data = _query.QueryGetInactiveLimitOrderTrancheRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "InactiveLimitOrderTranche", data);
      return promise.then(function (data) {
        return _query.QueryGetInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "inactiveLimitOrderTrancheAll",
    value: function inactiveLimitOrderTrancheAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllInactiveLimitOrderTrancheRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "InactiveLimitOrderTrancheAll", data);
      return promise.then(function (data) {
        return _query.QueryAllInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "poolReservesAll",
    value: function poolReservesAll(request) {
      var data = _query.QueryAllPoolReservesRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "PoolReservesAll", data);
      return promise.then(function (data) {
        return _query.QueryAllPoolReservesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "poolReserves",
    value: function poolReserves(request) {
      var data = _query.QueryGetPoolReservesRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "PoolReserves", data);
      return promise.then(function (data) {
        return _query.QueryGetPoolReservesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "estimateMultiHopSwap",
    value: function estimateMultiHopSwap(request) {
      var data = _query.QueryEstimateMultiHopSwapRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "EstimateMultiHopSwap", data);
      return promise.then(function (data) {
        return _query.QueryEstimateMultiHopSwapResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "estimatePlaceLimitOrder",
    value: function estimatePlaceLimitOrder(request) {
      var data = _query.QueryEstimatePlaceLimitOrderRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "EstimatePlaceLimitOrder", data);
      return promise.then(function (data) {
        return _query.QueryEstimatePlaceLimitOrderResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "pool",
    value: function pool(request) {
      var data = _query.QueryPoolRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "Pool", data);
      return promise.then(function (data) {
        return _query.QueryPoolResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "poolByID",
    value: function poolByID(request) {
      var data = _query.QueryPoolByIDRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "PoolByID", data);
      return promise.then(function (data) {
        return _query.QueryPoolResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "poolMetadata",
    value: function poolMetadata(request) {
      var data = _query.QueryGetPoolMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "PoolMetadata", data);
      return promise.then(function (data) {
        return _query.QueryGetPoolMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "poolMetadataAll",
    value: function poolMetadataAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllPoolMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Query", "PoolMetadataAll", data);
      return promise.then(function (data) {
        return _query.QueryAllPoolMetadataResponse.decode(new _m0.Reader(data));
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
    params: function params(request) {
      return queryService.params(request);
    },
    limitOrderTrancheUser: function limitOrderTrancheUser(request) {
      return queryService.limitOrderTrancheUser(request);
    },
    limitOrderTrancheUserAll: function limitOrderTrancheUserAll(request) {
      return queryService.limitOrderTrancheUserAll(request);
    },
    limitOrderTrancheUserAllByAddress: function limitOrderTrancheUserAllByAddress(request) {
      return queryService.limitOrderTrancheUserAllByAddress(request);
    },
    limitOrderTranche: function limitOrderTranche(request) {
      return queryService.limitOrderTranche(request);
    },
    limitOrderTrancheAll: function limitOrderTrancheAll(request) {
      return queryService.limitOrderTrancheAll(request);
    },
    userDepositsAll: function userDepositsAll(request) {
      return queryService.userDepositsAll(request);
    },
    tickLiquidityAll: function tickLiquidityAll(request) {
      return queryService.tickLiquidityAll(request);
    },
    inactiveLimitOrderTranche: function inactiveLimitOrderTranche(request) {
      return queryService.inactiveLimitOrderTranche(request);
    },
    inactiveLimitOrderTrancheAll: function inactiveLimitOrderTrancheAll(request) {
      return queryService.inactiveLimitOrderTrancheAll(request);
    },
    poolReservesAll: function poolReservesAll(request) {
      return queryService.poolReservesAll(request);
    },
    poolReserves: function poolReserves(request) {
      return queryService.poolReserves(request);
    },
    estimateMultiHopSwap: function estimateMultiHopSwap(request) {
      return queryService.estimateMultiHopSwap(request);
    },
    estimatePlaceLimitOrder: function estimatePlaceLimitOrder(request) {
      return queryService.estimatePlaceLimitOrder(request);
    },
    pool: function pool(request) {
      return queryService.pool(request);
    },
    poolByID: function poolByID(request) {
      return queryService.poolByID(request);
    },
    poolMetadata: function poolMetadata(request) {
      return queryService.poolMetadata(request);
    },
    poolMetadataAll: function poolMetadataAll(request) {
      return queryService.poolMetadataAll(request);
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
  var useParams = function useParams(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  var useLimitOrderTrancheUser = function useLimitOrderTrancheUser(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["limitOrderTrancheUserQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUser(request);
    }, options);
  };
  var useLimitOrderTrancheUserAll = function useLimitOrderTrancheUserAll(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["limitOrderTrancheUserAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUserAll(request);
    }, options);
  };
  var useLimitOrderTrancheUserAllByAddress = function useLimitOrderTrancheUserAllByAddress(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["limitOrderTrancheUserAllByAddressQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheUserAllByAddress(request);
    }, options);
  };
  var useLimitOrderTranche = function useLimitOrderTranche(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["limitOrderTrancheQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTranche(request);
    }, options);
  };
  var useLimitOrderTrancheAll = function useLimitOrderTrancheAll(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["limitOrderTrancheAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.limitOrderTrancheAll(request);
    }, options);
  };
  var useUserDepositsAll = function useUserDepositsAll(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["userDepositsAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userDepositsAll(request);
    }, options);
  };
  var useTickLiquidityAll = function useTickLiquidityAll(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["tickLiquidityAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tickLiquidityAll(request);
    }, options);
  };
  var useInactiveLimitOrderTranche = function useInactiveLimitOrderTranche(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["inactiveLimitOrderTrancheQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inactiveLimitOrderTranche(request);
    }, options);
  };
  var useInactiveLimitOrderTrancheAll = function useInactiveLimitOrderTrancheAll(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["inactiveLimitOrderTrancheAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inactiveLimitOrderTrancheAll(request);
    }, options);
  };
  var usePoolReservesAll = function usePoolReservesAll(_ref11) {
    var request = _ref11.request,
      options = _ref11.options;
    return (0, _reactQuery.useQuery)(["poolReservesAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolReservesAll(request);
    }, options);
  };
  var usePoolReserves = function usePoolReserves(_ref12) {
    var request = _ref12.request,
      options = _ref12.options;
    return (0, _reactQuery.useQuery)(["poolReservesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolReserves(request);
    }, options);
  };
  var useEstimateMultiHopSwap = function useEstimateMultiHopSwap(_ref13) {
    var request = _ref13.request,
      options = _ref13.options;
    return (0, _reactQuery.useQuery)(["estimateMultiHopSwapQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateMultiHopSwap(request);
    }, options);
  };
  var useEstimatePlaceLimitOrder = function useEstimatePlaceLimitOrder(_ref14) {
    var request = _ref14.request,
      options = _ref14.options;
    return (0, _reactQuery.useQuery)(["estimatePlaceLimitOrderQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimatePlaceLimitOrder(request);
    }, options);
  };
  var usePool = function usePool(_ref15) {
    var request = _ref15.request,
      options = _ref15.options;
    return (0, _reactQuery.useQuery)(["poolQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  var usePoolByID = function usePoolByID(_ref16) {
    var request = _ref16.request,
      options = _ref16.options;
    return (0, _reactQuery.useQuery)(["poolByIDQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolByID(request);
    }, options);
  };
  var usePoolMetadata = function usePoolMetadata(_ref17) {
    var request = _ref17.request,
      options = _ref17.options;
    return (0, _reactQuery.useQuery)(["poolMetadataQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolMetadata(request);
    }, options);
  };
  var usePoolMetadataAll = function usePoolMetadataAll(_ref18) {
    var request = _ref18.request,
      options = _ref18.options;
    return (0, _reactQuery.useQuery)(["poolMetadataAllQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolMetadataAll(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams: useParams,
    /** Queries a LimitOrderTrancheUser by index. */useLimitOrderTrancheUser: useLimitOrderTrancheUser,
    /** Queries a list of LimitOrderTrancheMap items. */useLimitOrderTrancheUserAll: useLimitOrderTrancheUserAll,
    /** Queries a list of LimitOrderTrancheUser items for a given address. */useLimitOrderTrancheUserAllByAddress: useLimitOrderTrancheUserAllByAddress,
    /** Queries a LimitOrderTranche by index. */useLimitOrderTranche: useLimitOrderTranche,
    /** Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */useLimitOrderTrancheAll: useLimitOrderTrancheAll,
    /** Queries a list of UserDeposits items. */useUserDepositsAll: useUserDepositsAll,
    /** Queries a list of TickLiquidity items. */useTickLiquidityAll: useTickLiquidityAll,
    /** Queries a InactiveLimitOrderTranche by index. */useInactiveLimitOrderTranche: useInactiveLimitOrderTranche,
    /** Queries a list of InactiveLimitOrderTranche items. */useInactiveLimitOrderTrancheAll: useInactiveLimitOrderTrancheAll,
    /** Queries a list of PoolReserves items. */usePoolReservesAll: usePoolReservesAll,
    /** Queries a PoolReserve by index */usePoolReserves: usePoolReserves,
    /** Queries the simulated result of a multihop swap */useEstimateMultiHopSwap: useEstimateMultiHopSwap,
    /** Queries the simulated result of a multihop swap */useEstimatePlaceLimitOrder: useEstimatePlaceLimitOrder,
    /** Queries a pool by pair, tick and fee */usePool: usePool,
    /** Queries a pool by ID */usePoolByID: usePoolByID,
    /** Queries a PoolMetadata by ID */usePoolMetadata: usePoolMetadata,
    /** Queries a list of PoolMetadata items. */usePoolMetadataAll: usePoolMetadataAll
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;