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
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this["class"] = this["class"].bind(this);
    this.classes = this.classes.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "balance",
    value: function balance(request) {
      var data = _query.QueryBalanceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
      return promise.then(function (data) {
        return _query.QueryBalanceResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "owner",
    value: function owner(request) {
      var data = _query.QueryOwnerRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
      return promise.then(function (data) {
        return _query.QueryOwnerResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "supply",
    value: function supply(request) {
      var data = _query.QuerySupplyRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
      return promise.then(function (data) {
        return _query.QuerySupplyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "nFTs",
    value: function nFTs(request) {
      var data = _query.QueryNFTsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
      return promise.then(function (data) {
        return _query.QueryNFTsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "nFT",
    value: function nFT(request) {
      var data = _query.QueryNFTRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
      return promise.then(function (data) {
        return _query.QueryNFTResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "class",
    value: function _class(request) {
      var data = _query.QueryClassRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
      return promise.then(function (data) {
        return _query.QueryClassResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "classes",
    value: function classes() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryClassesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
      return promise.then(function (data) {
        return _query.QueryClassesResponse.decode(new _m0.Reader(data));
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
    balance: function balance(request) {
      return queryService.balance(request);
    },
    owner: function owner(request) {
      return queryService.owner(request);
    },
    supply: function supply(request) {
      return queryService.supply(request);
    },
    nFTs: function nFTs(request) {
      return queryService.nFTs(request);
    },
    nFT: function nFT(request) {
      return queryService.nFT(request);
    },
    "class": function _class(request) {
      return queryService["class"](request);
    },
    classes: function classes(request) {
      return queryService.classes(request);
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
  var useBalance = function useBalance(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["balanceQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };
  var useOwner = function useOwner(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["ownerQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.owner(request);
    }, options);
  };
  var useSupply = function useSupply(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["supplyQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supply(request);
    }, options);
  };
  var useNFTs = function useNFTs(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["nFTsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nFTs(request);
    }, options);
  };
  var useNFT = function useNFT(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["nFTQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nFT(request);
    }, options);
  };
  var useClass = function useClass(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["classQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService["class"](request);
    }, options);
  };
  var useClasses = function useClasses(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["classesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.classes(request);
    }, options);
  };
  return {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */useBalance: useBalance,
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */useOwner: useOwner,
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */useSupply: useSupply,
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs: useNFTs,
    /** NFT queries an NFT based on its class and id. */useNFT: useNFT,
    /** Class queries an NFT class based on its id */useClass: useClass,
    /** Classes queries all NFT classes */useClasses: useClasses
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;