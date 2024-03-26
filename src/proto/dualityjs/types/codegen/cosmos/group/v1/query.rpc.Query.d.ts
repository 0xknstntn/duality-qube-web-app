import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
    /** GroupInfo queries group info based on group id. */
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    /** GroupMembers queries members of a group by group id. */
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    /** GroupsByAdmin queries groups by admin address. */
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    /** GroupPoliciesByGroup queries group policies by group id. */
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    /** GroupPoliciesByAdmin queries group policies by admin address. */
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    /** Proposal queries a proposal based on proposal id. */
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    /** VotesByProposal queries a vote by proposal id. */
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    /** VotesByVoter queries a vote by voter. */
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    /** GroupsByMember queries groups by member address. */
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
    /**
     * Groups queries all groups in state.
     *
     * Since: cosmos-sdk 0.47.1
     */
    groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
    groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
    groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
};
export interface UseGroupInfoQuery<TData> extends ReactQueryParams<QueryGroupInfoResponse, TData> {
    request: QueryGroupInfoRequest;
}
export interface UseGroupPolicyInfoQuery<TData> extends ReactQueryParams<QueryGroupPolicyInfoResponse, TData> {
    request: QueryGroupPolicyInfoRequest;
}
export interface UseGroupMembersQuery<TData> extends ReactQueryParams<QueryGroupMembersResponse, TData> {
    request: QueryGroupMembersRequest;
}
export interface UseGroupsByAdminQuery<TData> extends ReactQueryParams<QueryGroupsByAdminResponse, TData> {
    request: QueryGroupsByAdminRequest;
}
export interface UseGroupPoliciesByGroupQuery<TData> extends ReactQueryParams<QueryGroupPoliciesByGroupResponse, TData> {
    request: QueryGroupPoliciesByGroupRequest;
}
export interface UseGroupPoliciesByAdminQuery<TData> extends ReactQueryParams<QueryGroupPoliciesByAdminResponse, TData> {
    request: QueryGroupPoliciesByAdminRequest;
}
export interface UseProposalQuery<TData> extends ReactQueryParams<QueryProposalResponse, TData> {
    request: QueryProposalRequest;
}
export interface UseProposalsByGroupPolicyQuery<TData> extends ReactQueryParams<QueryProposalsByGroupPolicyResponse, TData> {
    request: QueryProposalsByGroupPolicyRequest;
}
export interface UseVoteByProposalVoterQuery<TData> extends ReactQueryParams<QueryVoteByProposalVoterResponse, TData> {
    request: QueryVoteByProposalVoterRequest;
}
export interface UseVotesByProposalQuery<TData> extends ReactQueryParams<QueryVotesByProposalResponse, TData> {
    request: QueryVotesByProposalRequest;
}
export interface UseVotesByVoterQuery<TData> extends ReactQueryParams<QueryVotesByVoterResponse, TData> {
    request: QueryVotesByVoterRequest;
}
export interface UseGroupsByMemberQuery<TData> extends ReactQueryParams<QueryGroupsByMemberResponse, TData> {
    request: QueryGroupsByMemberRequest;
}
export interface UseTallyResultQuery<TData> extends ReactQueryParams<QueryTallyResultResponse, TData> {
    request: QueryTallyResultRequest;
}
export interface UseGroupsQuery<TData> extends ReactQueryParams<QueryGroupsResponse, TData> {
    request?: QueryGroupsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** GroupInfo queries group info based on group id. */ useGroupInfo: <TData = QueryGroupInfoResponse>({ request, options }: UseGroupInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */ useGroupPolicyInfo: <TData_1 = QueryGroupPolicyInfoResponse>({ request, options }: UseGroupPolicyInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** GroupMembers queries members of a group by group id. */ useGroupMembers: <TData_2 = QueryGroupMembersResponse>({ request, options }: UseGroupMembersQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** GroupsByAdmin queries groups by admin address. */ useGroupsByAdmin: <TData_3 = QueryGroupsByAdminResponse>({ request, options }: UseGroupsByAdminQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** GroupPoliciesByGroup queries group policies by group id. */ useGroupPoliciesByGroup: <TData_4 = QueryGroupPoliciesByGroupResponse>({ request, options }: UseGroupPoliciesByGroupQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** GroupPoliciesByAdmin queries group policies by admin address. */ useGroupPoliciesByAdmin: <TData_5 = QueryGroupPoliciesByAdminResponse>({ request, options }: UseGroupPoliciesByAdminQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Proposal queries a proposal based on proposal id. */ useProposal: <TData_6 = QueryProposalResponse>({ request, options }: UseProposalQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */ useProposalsByGroupPolicy: <TData_7 = QueryProposalsByGroupPolicyResponse>({ request, options }: UseProposalsByGroupPolicyQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */ useVoteByProposalVoter: <TData_8 = QueryVoteByProposalVoterResponse>({ request, options }: UseVoteByProposalVoterQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** VotesByProposal queries a vote by proposal id. */ useVotesByProposal: <TData_9 = QueryVotesByProposalResponse>({ request, options }: UseVotesByProposalQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /** VotesByVoter queries a vote by voter. */ useVotesByVoter: <TData_10 = QueryVotesByVoterResponse>({ request, options }: UseVotesByVoterQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
    /** GroupsByMember queries groups by member address. */ useGroupsByMember: <TData_11 = QueryGroupsByMemberResponse>({ request, options }: UseGroupsByMemberQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    useTallyResult: <TData_12 = QueryTallyResultResponse>({ request, options }: UseTallyResultQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
    /**
     * Groups queries all groups in state.
     *
     * Since: cosmos-sdk 0.47.1
     */
    useGroups: <TData_13 = QueryGroupsResponse>({ request, options }: UseGroupsQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
};
