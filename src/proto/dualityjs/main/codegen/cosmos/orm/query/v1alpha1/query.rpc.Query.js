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
/** Query is a generic gRPC service for querying ORM data. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "get",
    value: function get(request) {
      var data = _query.GetRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
      return promise.then(function (data) {
        return _query.GetResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "list",
    value: function list(request) {
      var data = _query.ListRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
      return promise.then(function (data) {
        return _query.ListResponse.decode(new _m0.Reader(data));
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
    get: function get(request) {
      return queryService.get(request);
    },
    list: function list(request) {
      return queryService.list(request);
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
  var useGet = function useGet(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["getQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.get(request);
    }, options);
  };
  var useList = function useList(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["listQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.list(request);
    }, options);
  };
  return {
    /** Get queries an ORM table against an unique index. */useGet: useGet,
    /** List queries an ORM table against an index. */useList: useList
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;