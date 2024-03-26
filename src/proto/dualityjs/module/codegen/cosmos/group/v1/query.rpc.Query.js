import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
/** Query is the cosmos.group.v1 Query service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
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
  groupInfo(request) {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then(data => QueryGroupInfoResponse.decode(new _m0.Reader(data)));
  }
  groupPolicyInfo(request) {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then(data => QueryGroupPolicyInfoResponse.decode(new _m0.Reader(data)));
  }
  groupMembers(request) {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then(data => QueryGroupMembersResponse.decode(new _m0.Reader(data)));
  }
  groupsByAdmin(request) {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then(data => QueryGroupsByAdminResponse.decode(new _m0.Reader(data)));
  }
  groupPoliciesByGroup(request) {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then(data => QueryGroupPoliciesByGroupResponse.decode(new _m0.Reader(data)));
  }
  groupPoliciesByAdmin(request) {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then(data => QueryGroupPoliciesByAdminResponse.decode(new _m0.Reader(data)));
  }
  proposal(request) {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  }
  proposalsByGroupPolicy(request) {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then(data => QueryProposalsByGroupPolicyResponse.decode(new _m0.Reader(data)));
  }
  voteByProposalVoter(request) {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then(data => QueryVoteByProposalVoterResponse.decode(new _m0.Reader(data)));
  }
  votesByProposal(request) {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then(data => QueryVotesByProposalResponse.decode(new _m0.Reader(data)));
  }
  votesByVoter(request) {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new _m0.Reader(data)));
  }
  groupsByMember(request) {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then(data => QueryGroupsByMemberResponse.decode(new _m0.Reader(data)));
  }
  tallyResult(request) {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  }
  groups(request = {
    pagination: undefined
  }) {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then(data => QueryGroupsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    groupInfo(request) {
      return queryService.groupInfo(request);
    },
    groupPolicyInfo(request) {
      return queryService.groupPolicyInfo(request);
    },
    groupMembers(request) {
      return queryService.groupMembers(request);
    },
    groupsByAdmin(request) {
      return queryService.groupsByAdmin(request);
    },
    groupPoliciesByGroup(request) {
      return queryService.groupPoliciesByGroup(request);
    },
    groupPoliciesByAdmin(request) {
      return queryService.groupPoliciesByAdmin(request);
    },
    proposal(request) {
      return queryService.proposal(request);
    },
    proposalsByGroupPolicy(request) {
      return queryService.proposalsByGroupPolicy(request);
    },
    voteByProposalVoter(request) {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal(request) {
      return queryService.votesByProposal(request);
    },
    votesByVoter(request) {
      return queryService.votesByVoter(request);
    },
    groupsByMember(request) {
      return queryService.groupsByMember(request);
    },
    tallyResult(request) {
      return queryService.tallyResult(request);
    },
    groups(request) {
      return queryService.groups(request);
    }
  };
};
const _queryClients = new WeakMap();
const getQueryService = rpc => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = rpc => {
  const queryService = getQueryService(rpc);
  const useGroupInfo = ({
    request,
    options
  }) => {
    return useQuery(["groupInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupInfo(request);
    }, options);
  };
  const useGroupPolicyInfo = ({
    request,
    options
  }) => {
    return useQuery(["groupPolicyInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupPolicyInfo(request);
    }, options);
  };
  const useGroupMembers = ({
    request,
    options
  }) => {
    return useQuery(["groupMembersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupMembers(request);
    }, options);
  };
  const useGroupsByAdmin = ({
    request,
    options
  }) => {
    return useQuery(["groupsByAdminQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupsByAdmin(request);
    }, options);
  };
  const useGroupPoliciesByGroup = ({
    request,
    options
  }) => {
    return useQuery(["groupPoliciesByGroupQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupPoliciesByGroup(request);
    }, options);
  };
  const useGroupPoliciesByAdmin = ({
    request,
    options
  }) => {
    return useQuery(["groupPoliciesByAdminQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupPoliciesByAdmin(request);
    }, options);
  };
  const useProposal = ({
    request,
    options
  }) => {
    return useQuery(["proposalQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposal(request);
    }, options);
  };
  const useProposalsByGroupPolicy = ({
    request,
    options
  }) => {
    return useQuery(["proposalsByGroupPolicyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposalsByGroupPolicy(request);
    }, options);
  };
  const useVoteByProposalVoter = ({
    request,
    options
  }) => {
    return useQuery(["voteByProposalVoterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.voteByProposalVoter(request);
    }, options);
  };
  const useVotesByProposal = ({
    request,
    options
  }) => {
    return useQuery(["votesByProposalQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votesByProposal(request);
    }, options);
  };
  const useVotesByVoter = ({
    request,
    options
  }) => {
    return useQuery(["votesByVoterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votesByVoter(request);
    }, options);
  };
  const useGroupsByMember = ({
    request,
    options
  }) => {
    return useQuery(["groupsByMemberQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupsByMember(request);
    }, options);
  };
  const useTallyResult = ({
    request,
    options
  }) => {
    return useQuery(["tallyResultQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tallyResult(request);
    }, options);
  };
  const useGroups = ({
    request,
    options
  }) => {
    return useQuery(["groupsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groups(request);
    }, options);
  };
  return {
    /** GroupInfo queries group info based on group id. */useGroupInfo,
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */useGroupPolicyInfo,
    /** GroupMembers queries members of a group by group id. */useGroupMembers,
    /** GroupsByAdmin queries groups by admin address. */useGroupsByAdmin,
    /** GroupPoliciesByGroup queries group policies by group id. */useGroupPoliciesByGroup,
    /** GroupPoliciesByAdmin queries group policies by admin address. */useGroupPoliciesByAdmin,
    /** Proposal queries a proposal based on proposal id. */useProposal,
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */useProposalsByGroupPolicy,
    /** VoteByProposalVoter queries a vote by proposal id and voter. */useVoteByProposalVoter,
    /** VotesByProposal queries a vote by proposal id. */useVotesByProposal,
    /** VotesByVoter queries a vote by voter. */useVotesByVoter,
    /** GroupsByMember queries groups by member address. */useGroupsByMember,
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    useTallyResult,
    /**
     * Groups queries all groups in state.
     * 
     * Since: cosmos-sdk 0.47.1
     */
    useGroups
  };
};