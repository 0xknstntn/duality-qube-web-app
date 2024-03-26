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
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "signingInfo",
    value: function signingInfo(request) {
      var data = _query.QuerySigningInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
      return promise.then(function (data) {
        return _query.QuerySigningInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "signingInfos",
    value: function signingInfos() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QuerySigningInfosRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
      return promise.then(function (data) {
        return _query.QuerySigningInfosResponse.decode(new _m0.Reader(data));
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
    signingInfo: function signingInfo(request) {
      return queryService.signingInfo(request);
    },
    signingInfos: function signingInfos(request) {
      return queryService.signingInfos(request);
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
  var useSigningInfo = function useSigningInfo(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["signingInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.signingInfo(request);
    }, options);
  };
  var useSigningInfos = function useSigningInfos(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["signingInfosQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.signingInfos(request);
    }, options);
  };
  return {
    /** Params queries the parameters of slashing module */useParams: useParams,
    /** SigningInfo queries the signing info of given cons address */useSigningInfo: useSigningInfo,
    /** SigningInfos queries signing info of all validators */useSigningInfos: useSigningInfos
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;