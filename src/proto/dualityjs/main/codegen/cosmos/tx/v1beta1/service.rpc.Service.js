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
var _service = require("./service");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Service defines a gRPC service for interacting with transactions. */
var ServiceClientImpl = /*#__PURE__*/function () {
  function ServiceClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, ServiceClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    this.txDecode = this.txDecode.bind(this);
    this.txEncode = this.txEncode.bind(this);
    this.txEncodeAmino = this.txEncodeAmino.bind(this);
    this.txDecodeAmino = this.txDecodeAmino.bind(this);
  }
  (0, _createClass2["default"])(ServiceClientImpl, [{
    key: "simulate",
    value: function simulate(request) {
      var data = _service.SimulateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
      return promise.then(function (data) {
        return _service.SimulateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getTx",
    value: function getTx(request) {
      var data = _service.GetTxRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
      return promise.then(function (data) {
        return _service.GetTxResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "broadcastTx",
    value: function broadcastTx(request) {
      var data = _service.BroadcastTxRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
      return promise.then(function (data) {
        return _service.BroadcastTxResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getTxsEvent",
    value: function getTxsEvent(request) {
      var data = _service.GetTxsEventRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
      return promise.then(function (data) {
        return _service.GetTxsEventResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getBlockWithTxs",
    value: function getBlockWithTxs(request) {
      var data = _service.GetBlockWithTxsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
      return promise.then(function (data) {
        return _service.GetBlockWithTxsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "txDecode",
    value: function txDecode(request) {
      var data = _service.TxDecodeRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
      return promise.then(function (data) {
        return _service.TxDecodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "txEncode",
    value: function txEncode(request) {
      var data = _service.TxEncodeRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
      return promise.then(function (data) {
        return _service.TxEncodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "txEncodeAmino",
    value: function txEncodeAmino(request) {
      var data = _service.TxEncodeAminoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
      return promise.then(function (data) {
        return _service.TxEncodeAminoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "txDecodeAmino",
    value: function txDecodeAmino(request) {
      var data = _service.TxDecodeAminoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
      return promise.then(function (data) {
        return _service.TxDecodeAminoResponse.decode(new _m0.Reader(data));
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
    simulate: function simulate(request) {
      return queryService.simulate(request);
    },
    getTx: function getTx(request) {
      return queryService.getTx(request);
    },
    broadcastTx: function broadcastTx(request) {
      return queryService.broadcastTx(request);
    },
    getTxsEvent: function getTxsEvent(request) {
      return queryService.getTxsEvent(request);
    },
    getBlockWithTxs: function getBlockWithTxs(request) {
      return queryService.getBlockWithTxs(request);
    },
    txDecode: function txDecode(request) {
      return queryService.txDecode(request);
    },
    txEncode: function txEncode(request) {
      return queryService.txEncode(request);
    },
    txEncodeAmino: function txEncodeAmino(request) {
      return queryService.txEncodeAmino(request);
    },
    txDecodeAmino: function txDecodeAmino(request) {
      return queryService.txDecodeAmino(request);
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
  var useSimulate = function useSimulate(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["simulateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.simulate(request);
    }, options);
  };
  var useGetTx = function useGetTx(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["getTxQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTx(request);
    }, options);
  };
  var useBroadcastTx = function useBroadcastTx(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["broadcastTxQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.broadcastTx(request);
    }, options);
  };
  var useGetTxsEvent = function useGetTxsEvent(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["getTxsEventQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTxsEvent(request);
    }, options);
  };
  var useGetBlockWithTxs = function useGetBlockWithTxs(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["getBlockWithTxsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getBlockWithTxs(request);
    }, options);
  };
  var useTxDecode = function useTxDecode(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["txDecodeQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txDecode(request);
    }, options);
  };
  var useTxEncode = function useTxEncode(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["txEncodeQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txEncode(request);
    }, options);
  };
  var useTxEncodeAmino = function useTxEncodeAmino(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["txEncodeAminoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txEncodeAmino(request);
    }, options);
  };
  var useTxDecodeAmino = function useTxDecodeAmino(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["txDecodeAminoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txDecodeAmino(request);
    }, options);
  };
  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */useSimulate: useSimulate,
    /** GetTx fetches a tx by hash. */useGetTx: useGetTx,
    /** BroadcastTx broadcast transaction. */useBroadcastTx: useBroadcastTx,
    /** GetTxsEvent fetches txs by event. */useGetTxsEvent: useGetTxsEvent,
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs: useGetBlockWithTxs,
    /**
     * TxDecode decodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecode: useTxDecode,
    /**
     * TxEncode encodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncode: useTxEncode,
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncodeAmino: useTxEncodeAmino,
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecodeAmino: useTxDecodeAmino
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;