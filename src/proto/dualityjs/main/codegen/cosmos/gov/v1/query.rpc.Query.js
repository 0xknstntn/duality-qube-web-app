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
/** Query defines the gRPC querier service for gov module */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "proposal",
    value: function proposal(request) {
      var data = _query.QueryProposalRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
      return promise.then(function (data) {
        return _query.QueryProposalResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "proposals",
    value: function proposals(request) {
      var data = _query.QueryProposalsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
      return promise.then(function (data) {
        return _query.QueryProposalsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "vote",
    value: function vote(request) {
      var data = _query.QueryVoteRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
      return promise.then(function (data) {
        return _query.QueryVoteResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "votes",
    value: function votes(request) {
      var data = _query.QueryVotesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
      return promise.then(function (data) {
        return _query.QueryVotesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params(request) {
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "deposit",
    value: function deposit(request) {
      var data = _query.QueryDepositRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
      return promise.then(function (data) {
        return _query.QueryDepositResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "deposits",
    value: function deposits(request) {
      var data = _query.QueryDepositsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
      return promise.then(function (data) {
        return _query.QueryDepositsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "tallyResult",
    value: function tallyResult(request) {
      var data = _query.QueryTallyResultRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
      return promise.then(function (data) {
        return _query.QueryTallyResultResponse.decode(new _m0.Reader(data));
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
    proposal: function proposal(request) {
      return queryService.proposal(request);
    },
    proposals: function proposals(request) {
      return queryService.proposals(request);
    },
    vote: function vote(request) {
      return queryService.vote(request);
    },
    votes: function votes(request) {
      return queryService.votes(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    deposit: function deposit(request) {
      return queryService.deposit(request);
    },
    deposits: function deposits(request) {
      return queryService.deposits(request);
    },
    tallyResult: function tallyResult(request) {
      return queryService.tallyResult(request);
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
  var useProposal = function useProposal(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["proposalQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposal(request);
    }, options);
  };
  var useProposals = function useProposals(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["proposalsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposals(request);
    }, options);
  };
  var useVote = function useVote(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["voteQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.vote(request);
    }, options);
  };
  var useVotes = function useVotes(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["votesQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votes(request);
    }, options);
  };
  var useParams = function useParams(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["paramsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  var useDeposit = function useDeposit(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["depositQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deposit(request);
    }, options);
  };
  var useDeposits = function useDeposits(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["depositsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deposits(request);
    }, options);
  };
  var useTallyResult = function useTallyResult(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["tallyResultQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tallyResult(request);
    }, options);
  };
  return {
    /** Proposal queries proposal details based on ProposalID. */useProposal: useProposal,
    /** Proposals queries all proposals based on given status. */useProposals: useProposals,
    /** Vote queries voted information based on proposalID, voterAddr. */useVote: useVote,
    /** Votes queries votes of a given proposal. */useVotes: useVotes,
    /** Params queries all parameters of the gov module. */useParams: useParams,
    /** Deposit queries single deposit information based proposalID, depositAddr. */useDeposit: useDeposit,
    /** Deposits queries all deposits of a single proposal. */useDeposits: useDeposits,
    /** TallyResult queries the tally of a proposal vote. */useTallyResult: useTallyResult
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;