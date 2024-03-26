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
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "validators",
    value: function validators(request) {
      var data = _query.QueryValidatorsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
      return promise.then(function (data) {
        return _query.QueryValidatorsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validator",
    value: function validator(request) {
      var data = _query.QueryValidatorRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
      return promise.then(function (data) {
        return _query.QueryValidatorResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validatorDelegations",
    value: function validatorDelegations(request) {
      var data = _query.QueryValidatorDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
      return promise.then(function (data) {
        return _query.QueryValidatorDelegationsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "validatorUnbondingDelegations",
    value: function validatorUnbondingDelegations(request) {
      var data = _query.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
      return promise.then(function (data) {
        return _query.QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegation",
    value: function delegation(request) {
      var data = _query.QueryDelegationRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
      return promise.then(function (data) {
        return _query.QueryDelegationResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unbondingDelegation",
    value: function unbondingDelegation(request) {
      var data = _query.QueryUnbondingDelegationRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
      return promise.then(function (data) {
        return _query.QueryUnbondingDelegationResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegatorDelegations",
    value: function delegatorDelegations(request) {
      var data = _query.QueryDelegatorDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegatorUnbondingDelegations",
    value: function delegatorUnbondingDelegations(request) {
      var data = _query.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "redelegations",
    value: function redelegations(request) {
      var data = _query.QueryRedelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
      return promise.then(function (data) {
        return _query.QueryRedelegationsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegatorValidators",
    value: function delegatorValidators(request) {
      var data = _query.QueryDelegatorValidatorsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegatorValidator",
    value: function delegatorValidator(request) {
      var data = _query.QueryDelegatorValidatorRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorValidatorResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "historicalInfo",
    value: function historicalInfo(request) {
      var data = _query.QueryHistoricalInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
      return promise.then(function (data) {
        return _query.QueryHistoricalInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "pool",
    value: function pool() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryPoolRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
      return promise.then(function (data) {
        return _query.QueryPoolResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
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
    validators: function validators(request) {
      return queryService.validators(request);
    },
    validator: function validator(request) {
      return queryService.validator(request);
    },
    validatorDelegations: function validatorDelegations(request) {
      return queryService.validatorDelegations(request);
    },
    validatorUnbondingDelegations: function validatorUnbondingDelegations(request) {
      return queryService.validatorUnbondingDelegations(request);
    },
    delegation: function delegation(request) {
      return queryService.delegation(request);
    },
    unbondingDelegation: function unbondingDelegation(request) {
      return queryService.unbondingDelegation(request);
    },
    delegatorDelegations: function delegatorDelegations(request) {
      return queryService.delegatorDelegations(request);
    },
    delegatorUnbondingDelegations: function delegatorUnbondingDelegations(request) {
      return queryService.delegatorUnbondingDelegations(request);
    },
    redelegations: function redelegations(request) {
      return queryService.redelegations(request);
    },
    delegatorValidators: function delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorValidator: function delegatorValidator(request) {
      return queryService.delegatorValidator(request);
    },
    historicalInfo: function historicalInfo(request) {
      return queryService.historicalInfo(request);
    },
    pool: function pool(request) {
      return queryService.pool(request);
    },
    params: function params(request) {
      return queryService.params(request);
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
  var useValidators = function useValidators(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["validatorsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validators(request);
    }, options);
  };
  var useValidator = function useValidator(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["validatorQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validator(request);
    }, options);
  };
  var useValidatorDelegations = function useValidatorDelegations(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["validatorDelegationsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorDelegations(request);
    }, options);
  };
  var useValidatorUnbondingDelegations = function useValidatorUnbondingDelegations(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["validatorUnbondingDelegationsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorUnbondingDelegations(request);
    }, options);
  };
  var useDelegation = function useDelegation(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["delegationQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegation(request);
    }, options);
  };
  var useUnbondingDelegation = function useUnbondingDelegation(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["unbondingDelegationQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unbondingDelegation(request);
    }, options);
  };
  var useDelegatorDelegations = function useDelegatorDelegations(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["delegatorDelegationsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorDelegations(request);
    }, options);
  };
  var useDelegatorUnbondingDelegations = function useDelegatorUnbondingDelegations(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["delegatorUnbondingDelegationsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorUnbondingDelegations(request);
    }, options);
  };
  var useRedelegations = function useRedelegations(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["redelegationsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.redelegations(request);
    }, options);
  };
  var useDelegatorValidators = function useDelegatorValidators(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["delegatorValidatorsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidators(request);
    }, options);
  };
  var useDelegatorValidator = function useDelegatorValidator(_ref11) {
    var request = _ref11.request,
      options = _ref11.options;
    return (0, _reactQuery.useQuery)(["delegatorValidatorQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidator(request);
    }, options);
  };
  var useHistoricalInfo = function useHistoricalInfo(_ref12) {
    var request = _ref12.request,
      options = _ref12.options;
    return (0, _reactQuery.useQuery)(["historicalInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.historicalInfo(request);
    }, options);
  };
  var usePool = function usePool(_ref13) {
    var request = _ref13.request,
      options = _ref13.options;
    return (0, _reactQuery.useQuery)(["poolQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  var useParams = function useParams(_ref14) {
    var request = _ref14.request,
      options = _ref14.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  return {
    /**
     * Validators queries all validators that match the given status.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidators: useValidators,
    /** Validator queries validator info for given validator address. */useValidator: useValidator,
    /**
     * ValidatorDelegations queries delegate info for given validator.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidatorDelegations: useValidatorDelegations,
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidatorUnbondingDelegations: useValidatorUnbondingDelegations,
    /** Delegation queries delegate info for given validator delegator pair. */useDelegation: useDelegation,
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation: useUnbondingDelegation,
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorDelegations: useDelegatorDelegations,
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorUnbondingDelegations: useDelegatorUnbondingDelegations,
    /**
     * Redelegations queries redelegations of given address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useRedelegations: useRedelegations,
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorValidators: useDelegatorValidators,
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator: useDelegatorValidator,
    /** HistoricalInfo queries the historical info for given height. */useHistoricalInfo: useHistoricalInfo,
    /** Pool queries the pool info. */usePool: usePool,
    /** Parameters queries the staking parameters. */useParams: useParams
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;