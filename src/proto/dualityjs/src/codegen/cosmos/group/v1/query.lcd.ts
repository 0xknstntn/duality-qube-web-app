import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
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
  async groupInfo(params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
    const endpoint = `cosmos/group/v1/group_info/${params.group_id}`;
    return QueryGroupInfoResponse.fromJSON(await this.req.get<QueryGroupInfoResponse>(endpoint));
  }
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  async groupPolicyInfo(params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return QueryGroupPolicyInfoResponse.fromJSON(await this.req.get<QueryGroupPolicyInfoResponse>(endpoint));
  }
  /* GroupMembers queries members of a group by group id. */
  async groupMembers(params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_members/${params.group_id}`;
    return QueryGroupMembersResponse.fromJSON(await this.req.get<QueryGroupMembersResponse>(endpoint, options));
  }
  /* GroupsByAdmin queries groups by admin address. */
  async groupsByAdmin(params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return QueryGroupsByAdminResponse.fromJSON(await this.req.get<QueryGroupsByAdminResponse>(endpoint, options));
  }
  /* GroupPoliciesByGroup queries group policies by group id. */
  async groupPoliciesByGroup(params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.group_id}`;
    return QueryGroupPoliciesByGroupResponse.fromJSON(await this.req.get<QueryGroupPoliciesByGroupResponse>(endpoint, options));
  }
  /* GroupPoliciesByAdmin queries group policies by admin address. */
  async groupPoliciesByAdmin(params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return QueryGroupPoliciesByAdminResponse.fromJSON(await this.req.get<QueryGroupPoliciesByAdminResponse>(endpoint, options));
  }
  /* Proposal queries a proposal based on proposal id. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const endpoint = `cosmos/group/v1/proposal/${params.proposal_id}`;
    return QueryProposalResponse.fromJSON(await this.req.get<QueryProposalResponse>(endpoint));
  }
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  async proposalsByGroupPolicy(params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return QueryProposalsByGroupPolicyResponse.fromJSON(await this.req.get<QueryProposalsByGroupPolicyResponse>(endpoint, options));
  }
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  async voteByProposalVoter(params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`;
    return QueryVoteByProposalVoterResponse.fromJSON(await this.req.get<QueryVoteByProposalVoterResponse>(endpoint));
  }
  /* VotesByProposal queries a vote by proposal id. */
  async votesByProposal(params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposal_id}`;
    return QueryVotesByProposalResponse.fromJSON(await this.req.get<QueryVotesByProposalResponse>(endpoint, options));
  }
  /* VotesByVoter queries a vote by voter. */
  async votesByVoter(params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return QueryVotesByVoterResponse.fromJSON(await this.req.get<QueryVotesByVoterResponse>(endpoint, options));
  }
  /* GroupsByMember queries groups by member address. */
  async groupsByMember(params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return QueryGroupsByMemberResponse.fromJSON(await this.req.get<QueryGroupsByMemberResponse>(endpoint, options));
  }
  /* TallyResult returns the tally result of a proposal. If the proposal is
   still in voting period, then this query computes the current tally state,
   which might not be final. On the other hand, if the proposal is final,
   then it simply returns the `final_tally_result` state stored in the
   proposal itself. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const endpoint = `cosmos/group/v1/proposals/${params.proposal_id}/tally`;
    return QueryTallyResultResponse.fromJSON(await this.req.get<QueryTallyResultResponse>(endpoint));
  }
  /* Groups queries all groups in state.
  
   Since: cosmos-sdk 0.47.1 */
  async groups(params: QueryGroupsRequest = {
    pagination: undefined
  }): Promise<QueryGroupsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups`;
    return QueryGroupsResponse.fromJSON(await this.req.get<QueryGroupsResponse>(endpoint, options));
  }
}