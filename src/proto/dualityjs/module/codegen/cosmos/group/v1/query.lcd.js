import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
import { QueryGroupInfoResponse, QueryGroupPolicyInfoResponse, QueryGroupMembersResponse, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminResponse, QueryProposalResponse, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterResponse, QueryVotesByProposalResponse, QueryVotesByVoterResponse, QueryGroupsByMemberResponse, QueryTallyResultResponse, QueryGroupsResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
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
  /* GroupInfo queries group info based on group id. */
  async groupInfo(params) {
    const endpoint = `cosmos/group/v1/group_info/${params.group_id}`;
    return QueryGroupInfoResponse.fromJSON(await this.req.get(endpoint));
  }
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  async groupPolicyInfo(params) {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return QueryGroupPolicyInfoResponse.fromJSON(await this.req.get(endpoint));
  }
  /* GroupMembers queries members of a group by group id. */
  async groupMembers(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_members/${params.group_id}`;
    return QueryGroupMembersResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GroupsByAdmin queries groups by admin address. */
  async groupsByAdmin(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return QueryGroupsByAdminResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GroupPoliciesByGroup queries group policies by group id. */
  async groupPoliciesByGroup(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.group_id}`;
    return QueryGroupPoliciesByGroupResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GroupPoliciesByAdmin queries group policies by admin address. */
  async groupPoliciesByAdmin(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return QueryGroupPoliciesByAdminResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Proposal queries a proposal based on proposal id. */
  async proposal(params) {
    const endpoint = `cosmos/group/v1/proposal/${params.proposal_id}`;
    return QueryProposalResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  async proposalsByGroupPolicy(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return QueryProposalsByGroupPolicyResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  async voteByProposalVoter(params) {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`;
    return QueryVoteByProposalVoterResponse.fromJSON(await this.req.get(endpoint));
  }
  /* VotesByProposal queries a vote by proposal id. */
  async votesByProposal(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposal_id}`;
    return QueryVotesByProposalResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* VotesByVoter queries a vote by voter. */
  async votesByVoter(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return QueryVotesByVoterResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* GroupsByMember queries groups by member address. */
  async groupsByMember(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return QueryGroupsByMemberResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* TallyResult returns the tally result of a proposal. If the proposal is
   still in voting period, then this query computes the current tally state,
   which might not be final. On the other hand, if the proposal is final,
   then it simply returns the `final_tally_result` state stored in the
   proposal itself. */
  async tallyResult(params) {
    const endpoint = `cosmos/group/v1/proposals/${params.proposal_id}/tally`;
    return QueryTallyResultResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Groups queries all groups in state.
  
   Since: cosmos-sdk 0.47.1 */
  async groups(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups`;
    return QueryGroupsResponse.fromJSON(await this.req.get(endpoint, options));
  }
}