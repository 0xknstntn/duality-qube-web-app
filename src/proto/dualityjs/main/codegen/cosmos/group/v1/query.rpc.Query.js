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
/** Query is the cosmos.group.v1 Query service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
    this.groups = this.groups.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "groupInfo",
    value: function groupInfo(request) {
      var data = _query.QueryGroupInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
      return promise.then(function (data) {
        return _query.QueryGroupInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groupPolicyInfo",
    value: function groupPolicyInfo(request) {
      var data = _query.QueryGroupPolicyInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
      return promise.then(function (data) {
        return _query.QueryGroupPolicyInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groupMembers",
    value: function groupMembers(request) {
      var data = _query.QueryGroupMembersRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
      return promise.then(function (data) {
        return _query.QueryGroupMembersResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groupsByAdmin",
    value: function groupsByAdmin(request) {
      var data = _query.QueryGroupsByAdminRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
      return promise.then(function (data) {
        return _query.QueryGroupsByAdminResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groupPoliciesByGroup",
    value: function groupPoliciesByGroup(request) {
      var data = _query.QueryGroupPoliciesByGroupRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
      return promise.then(function (data) {
        return _query.QueryGroupPoliciesByGroupResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groupPoliciesByAdmin",
    value: function groupPoliciesByAdmin(request) {
      var data = _query.QueryGroupPoliciesByAdminRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
      return promise.then(function (data) {
        return _query.QueryGroupPoliciesByAdminResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "proposal",
    value: function proposal(request) {
      var data = _query.QueryProposalRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
      return promise.then(function (data) {
        return _query.QueryProposalResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "proposalsByGroupPolicy",
    value: function proposalsByGroupPolicy(request) {
      var data = _query.QueryProposalsByGroupPolicyRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
      return promise.then(function (data) {
        return _query.QueryProposalsByGroupPolicyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "voteByProposalVoter",
    value: function voteByProposalVoter(request) {
      var data = _query.QueryVoteByProposalVoterRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
      return promise.then(function (data) {
        return _query.QueryVoteByProposalVoterResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "votesByProposal",
    value: function votesByProposal(request) {
      var data = _query.QueryVotesByProposalRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
      return promise.then(function (data) {
        return _query.QueryVotesByProposalResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "votesByVoter",
    value: function votesByVoter(request) {
      var data = _query.QueryVotesByVoterRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
      return promise.then(function (data) {
        return _query.QueryVotesByVoterResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groupsByMember",
    value: function groupsByMember(request) {
      var data = _query.QueryGroupsByMemberRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
      return promise.then(function (data) {
        return _query.QueryGroupsByMemberResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "tallyResult",
    value: function tallyResult(request) {
      var data = _query.QueryTallyResultRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
      return promise.then(function (data) {
        return _query.QueryTallyResultResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "groups",
    value: function groups() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryGroupsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
      return promise.then(function (data) {
        return _query.QueryGroupsResponse.decode(new _m0.Reader(data));
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
    groupInfo: function groupInfo(request) {
      return queryService.groupInfo(request);
    },
    groupPolicyInfo: function groupPolicyInfo(request) {
      return queryService.groupPolicyInfo(request);
    },
    groupMembers: function groupMembers(request) {
      return queryService.groupMembers(request);
    },
    groupsByAdmin: function groupsByAdmin(request) {
      return queryService.groupsByAdmin(request);
    },
    groupPoliciesByGroup: function groupPoliciesByGroup(request) {
      return queryService.groupPoliciesByGroup(request);
    },
    groupPoliciesByAdmin: function groupPoliciesByAdmin(request) {
      return queryService.groupPoliciesByAdmin(request);
    },
    proposal: function proposal(request) {
      return queryService.proposal(request);
    },
    proposalsByGroupPolicy: function proposalsByGroupPolicy(request) {
      return queryService.proposalsByGroupPolicy(request);
    },
    voteByProposalVoter: function voteByProposalVoter(request) {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal: function votesByProposal(request) {
      return queryService.votesByProposal(request);
    },
    votesByVoter: function votesByVoter(request) {
      return queryService.votesByVoter(request);
    },
    groupsByMember: function groupsByMember(request) {
      return queryService.groupsByMember(request);
    },
    tallyResult: function tallyResult(request) {
      return queryService.tallyResult(request);
    },
    groups: function groups(request) {
      return queryService.groups(request);
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
  var useGroupInfo = function useGroupInfo(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["groupInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupInfo(request);
    }, options);
  };
  var useGroupPolicyInfo = function useGroupPolicyInfo(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["groupPolicyInfoQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupPolicyInfo(request);
    }, options);
  };
  var useGroupMembers = function useGroupMembers(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["groupMembersQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupMembers(request);
    }, options);
  };
  var useGroupsByAdmin = function useGroupsByAdmin(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["groupsByAdminQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupsByAdmin(request);
    }, options);
  };
  var useGroupPoliciesByGroup = function useGroupPoliciesByGroup(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["groupPoliciesByGroupQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupPoliciesByGroup(request);
    }, options);
  };
  var useGroupPoliciesByAdmin = function useGroupPoliciesByAdmin(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["groupPoliciesByAdminQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupPoliciesByAdmin(request);
    }, options);
  };
  var useProposal = function useProposal(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["proposalQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposal(request);
    }, options);
  };
  var useProposalsByGroupPolicy = function useProposalsByGroupPolicy(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["proposalsByGroupPolicyQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposalsByGroupPolicy(request);
    }, options);
  };
  var useVoteByProposalVoter = function useVoteByProposalVoter(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["voteByProposalVoterQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.voteByProposalVoter(request);
    }, options);
  };
  var useVotesByProposal = function useVotesByProposal(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["votesByProposalQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votesByProposal(request);
    }, options);
  };
  var useVotesByVoter = function useVotesByVoter(_ref11) {
    var request = _ref11.request,
      options = _ref11.options;
    return (0, _reactQuery.useQuery)(["votesByVoterQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votesByVoter(request);
    }, options);
  };
  var useGroupsByMember = function useGroupsByMember(_ref12) {
    var request = _ref12.request,
      options = _ref12.options;
    return (0, _reactQuery.useQuery)(["groupsByMemberQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupsByMember(request);
    }, options);
  };
  var useTallyResult = function useTallyResult(_ref13) {
    var request = _ref13.request,
      options = _ref13.options;
    return (0, _reactQuery.useQuery)(["tallyResultQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tallyResult(request);
    }, options);
  };
  var useGroups = function useGroups(_ref14) {
    var request = _ref14.request,
      options = _ref14.options;
    return (0, _reactQuery.useQuery)(["groupsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groups(request);
    }, options);
  };
  return {
    /** GroupInfo queries group info based on group id. */useGroupInfo: useGroupInfo,
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */useGroupPolicyInfo: useGroupPolicyInfo,
    /** GroupMembers queries members of a group by group id. */useGroupMembers: useGroupMembers,
    /** GroupsByAdmin queries groups by admin address. */useGroupsByAdmin: useGroupsByAdmin,
    /** GroupPoliciesByGroup queries group policies by group id. */useGroupPoliciesByGroup: useGroupPoliciesByGroup,
    /** GroupPoliciesByAdmin queries group policies by admin address. */useGroupPoliciesByAdmin: useGroupPoliciesByAdmin,
    /** Proposal queries a proposal based on proposal id. */useProposal: useProposal,
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */useProposalsByGroupPolicy: useProposalsByGroupPolicy,
    /** VoteByProposalVoter queries a vote by proposal id and voter. */useVoteByProposalVoter: useVoteByProposalVoter,
    /** VotesByProposal queries a vote by proposal id. */useVotesByProposal: useVotesByProposal,
    /** VotesByVoter queries a vote by voter. */useVotesByVoter: useVotesByVoter,
    /** GroupsByMember queries groups by member address. */useGroupsByMember: useGroupsByMember,
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    useTallyResult: useTallyResult,
    /**
     * Groups queries all groups in state.
     * 
     * Since: cosmos-sdk 0.47.1
     */
    useGroups: useGroups
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;