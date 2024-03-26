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
/** Query defines the gRPC querier service for distribution module. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validatorDistributionInfo",
    value: function validatorDistributionInfo(request) {
      var data = _query.QueryValidatorDistributionInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
      return promise.then(function (data) {
        return _query.QueryValidatorDistributionInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validatorOutstandingRewards",
    value: function validatorOutstandingRewards(request) {
      var data = _query.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
      return promise.then(function (data) {
        return _query.QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validatorCommission",
    value: function validatorCommission(request) {
      var data = _query.QueryValidatorCommissionRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
      return promise.then(function (data) {
        return _query.QueryValidatorCommissionResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validatorSlashes",
    value: function validatorSlashes(request) {
      var data = _query.QueryValidatorSlashesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
      return promise.then(function (data) {
        return _query.QueryValidatorSlashesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegationRewards",
    value: function delegationRewards(request) {
      var data = _query.QueryDelegationRewardsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
      return promise.then(function (data) {
        return _query.QueryDelegationRewardsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegationTotalRewards",
    value: function delegationTotalRewards(request) {
      var data = _query.QueryDelegationTotalRewardsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
      return promise.then(function (data) {
        return _query.QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegatorValidators",
    value: function delegatorValidators(request) {
      var data = _query.QueryDelegatorValidatorsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegatorWithdrawAddress",
    value: function delegatorWithdrawAddress(request) {
      var data = _query.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "communityPool",
    value: function communityPool() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryCommunityPoolRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
      return promise.then(function (data) {
        return _query.QueryCommunityPoolResponse.decode(new _m0.Reader(data));
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
    validatorDistributionInfo: function validatorDistributionInfo(request) {
      return queryService.validatorDistributionInfo(request);
    },
    validatorOutstandingRewards: function validatorOutstandingRewards(request) {
      return queryService.validatorOutstandingRewards(request);
    },
    validatorCommission: function validatorCommission(request) {
      return queryService.validatorCommission(request);
    },
    validatorSlashes: function validatorSlashes(request) {
      return queryService.validatorSlashes(request);
    },
    delegationRewards: function delegationRewards(request) {
      return queryService.delegationRewards(request);
    },
    delegationTotalRewards: function delegationTotalRewards(request) {
      return queryService.delegationTotalRewards(request);
    },
    delegatorValidators: function delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorWithdrawAddress: function delegatorWithdrawAddress(request) {
      return queryService.delegatorWithdrawAddress(request);
    },
    communityPool: function communityPool(request) {
      return queryService.communityPool(request);
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
  var useValidatorDistributionInfo = function useValidatorDistributionInfo(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["validatorDistributionInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorDistributionInfo(request);
    }, options);
  };
  var useValidatorOutstandingRewards = function useValidatorOutstandingRewards(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["validatorOutstandingRewardsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorOutstandingRewards(request);
    }, options);
  };
  var useValidatorCommission = function useValidatorCommission(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["validatorCommissionQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorCommission(request);
    }, options);
  };
  var useValidatorSlashes = function useValidatorSlashes(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["validatorSlashesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorSlashes(request);
    }, options);
  };
  var useDelegationRewards = function useDelegationRewards(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["delegationRewardsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegationRewards(request);
    }, options);
  };
  var useDelegationTotalRewards = function useDelegationTotalRewards(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["delegationTotalRewardsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegationTotalRewards(request);
    }, options);
  };
  var useDelegatorValidators = function useDelegatorValidators(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["delegatorValidatorsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidators(request);
    }, options);
  };
  var useDelegatorWithdrawAddress = function useDelegatorWithdrawAddress(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["delegatorWithdrawAddressQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorWithdrawAddress(request);
    }, options);
  };
  var useCommunityPool = function useCommunityPool(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["communityPoolQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.communityPool(request);
    }, options);
  };
  return {
    /** Params queries params of the distribution module. */useParams: useParams,
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */useValidatorDistributionInfo: useValidatorDistributionInfo,
    /** ValidatorOutstandingRewards queries rewards of a validator address. */useValidatorOutstandingRewards: useValidatorOutstandingRewards,
    /** ValidatorCommission queries accumulated commission for a validator. */useValidatorCommission: useValidatorCommission,
    /** ValidatorSlashes queries slash events of a validator. */useValidatorSlashes: useValidatorSlashes,
    /** DelegationRewards queries the total rewards accrued by a delegation. */useDelegationRewards: useDelegationRewards,
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards: useDelegationTotalRewards,
    /** DelegatorValidators queries the validators of a delegator. */useDelegatorValidators: useDelegatorValidators,
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */useDelegatorWithdrawAddress: useDelegatorWithdrawAddress,
    /** CommunityPool queries the community pool coins. */useCommunityPool: useCommunityPool
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;