import { LCDClient } from "@cosmology/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    groupInfo(params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupPolicyInfo(params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    groupMembers(params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupPoliciesByGroup(params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    groupPoliciesByAdmin(params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    proposal(params: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupPolicy(params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    voteByProposalVoter(params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    groupsByMember(params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
    groups(params?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
}
