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
/** Query provides defines the gRPC querier service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "denomTrace",
    value: function denomTrace(request) {
      var data = _query.QueryDenomTraceRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
      return promise.then(function (data) {
        return _query.QueryDenomTraceResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomTraces",
    value: function denomTraces() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryDenomTracesRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
      return promise.then(function (data) {
        return _query.QueryDenomTracesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomHash",
    value: function denomHash(request) {
      var data = _query.QueryDenomHashRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
      return promise.then(function (data) {
        return _query.QueryDenomHashResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "escrowAddress",
    value: function escrowAddress(request) {
      var data = _query.QueryEscrowAddressRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
      return promise.then(function (data) {
        return _query.QueryEscrowAddressResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "totalEscrowForDenom",
    value: function totalEscrowForDenom(request) {
      var data = _query.QueryTotalEscrowForDenomRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "TotalEscrowForDenom", data);
      return promise.then(function (data) {
        return _query.QueryTotalEscrowForDenomResponse.decode(new _m0.Reader(data));
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
    denomTrace: function denomTrace(request) {
      return queryService.denomTrace(request);
    },
    denomTraces: function denomTraces(request) {
      return queryService.denomTraces(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    denomHash: function denomHash(request) {
      return queryService.denomHash(request);
    },
    escrowAddress: function escrowAddress(request) {
      return queryService.escrowAddress(request);
    },
    totalEscrowForDenom: function totalEscrowForDenom(request) {
      return queryService.totalEscrowForDenom(request);
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
  var useDenomTrace = function useDenomTrace(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["denomTraceQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTrace(request);
    }, options);
  };
  var useDenomTraces = function useDenomTraces(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["denomTracesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTraces(request);
    }, options);
  };
  var useParams = function useParams(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  var useDenomHash = function useDenomHash(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["denomHashQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomHash(request);
    }, options);
  };
  var useEscrowAddress = function useEscrowAddress(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["escrowAddressQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.escrowAddress(request);
    }, options);
  };
  var useTotalEscrowForDenom = function useTotalEscrowForDenom(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["totalEscrowForDenomQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalEscrowForDenom(request);
    }, options);
  };
  return {
    /** DenomTrace queries a denomination trace information. */useDenomTrace: useDenomTrace,
    /** DenomTraces queries all denomination traces. */useDenomTraces: useDenomTraces,
    /** Params queries all parameters of the ibc-transfer module. */useParams: useParams,
    /** DenomHash queries a denomination hash information. */useDenomHash: useDenomHash,
    /** EscrowAddress returns the escrow address for a particular port and channel id. */useEscrowAddress: useEscrowAddress,
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */useTotalEscrowForDenom: useTotalEscrowForDenom
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;