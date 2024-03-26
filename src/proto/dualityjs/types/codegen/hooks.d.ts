import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosAutocliV1Queryrpc from "./cosmos/autocli/v1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseNodeV1beta1Queryrpc from "./cosmos/base/node/v1beta1/query.rpc.Service";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosConsensusV1Queryrpc from "./cosmos/consensus/v1/query.rpc.Query";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _CosmosOrmQueryV1alpha1Queryrpc from "./cosmos/orm/query/v1alpha1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
import * as _DualityDexQueryrpc from "./duality/dex/query.rpc.Query";
import * as _DualityEpochsQueryrpc from "./duality/epochs/query.rpc.Query";
import * as _DualityIncentivesQueryrpc from "./duality/incentives/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _PobBuilderV1Queryrpc from "./pob/builder/v1/query.rpc.Query";
import * as _RouterV1Queryrpc from "./router/v1/query.rpc.Query";
export declare const createRpcQueryHooks: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    cosmos: {
        app: {
            v1alpha1: {
                useConfig: <TData = import("./cosmos/app/v1alpha1/query").QueryConfigResponse>({ request, options }: _CosmosAppV1alpha1Queryrpc.UseConfigQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
        };
        auth: {
            v1beta1: {
                useAccounts: <TData_1 = import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useAccount: <TData_2 = import("./cosmos/auth/v1beta1/query").QueryAccountResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useAccountAddressByID: <TData_3 = import("./cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountAddressByIDQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useParams: <TData_4 = import("./cosmos/auth/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseParamsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useModuleAccounts: <TData_5 = import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseModuleAccountsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useModuleAccountByName: <TData_6 = import("./cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseModuleAccountByNameQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useBech32Prefix: <TData_7 = import("./cosmos/auth/v1beta1/query").Bech32PrefixResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseBech32PrefixQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useAddressBytesToString: <TData_8 = import("./cosmos/auth/v1beta1/query").AddressBytesToStringResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressBytesToStringQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useAddressStringToBytes: <TData_9 = import("./cosmos/auth/v1beta1/query").AddressStringToBytesResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressStringToBytesQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useAccountInfo: <TData_10 = import("./cosmos/auth/v1beta1/query").QueryAccountInfoResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountInfoQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            };
        };
        authz: {
            v1beta1: {
                useGrants: <TData_11 = import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGrantsQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                useGranterGrants: <TData_12 = import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranterGrantsQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                useGranteeGrants: <TData_13 = import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranteeGrantsQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
            };
        };
        autocli: {
            v1: {
                useAppOptions: <TData_14 = import("./cosmos/autocli/v1/query").AppOptionsResponse>({ request, options }: _CosmosAutocliV1Queryrpc.UseAppOptionsQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
            };
        };
        bank: {
            v1beta1: {
                useBalance: <TData_15 = import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBalanceQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
                useAllBalances: <TData_16 = import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseAllBalancesQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
                useSpendableBalances: <TData_17 = import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSpendableBalancesQuery<TData_17>) => import("@tanstack/react-query").UseQueryResult<TData_17, Error>;
                useSpendableBalanceByDenom: <TData_18 = import("./cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSpendableBalanceByDenomQuery<TData_18>) => import("@tanstack/react-query").UseQueryResult<TData_18, Error>;
                useTotalSupply: <TData_19 = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyQuery<TData_19>) => import("@tanstack/react-query").UseQueryResult<TData_19, Error>;
                useSupplyOf: <TData_20 = import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfQuery<TData_20>) => import("@tanstack/react-query").UseQueryResult<TData_20, Error>;
                useParams: <TData_21 = import("./cosmos/bank/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseParamsQuery<TData_21>) => import("@tanstack/react-query").UseQueryResult<TData_21, Error>;
                useDenomMetadata: <TData_22 = import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomMetadataQuery<TData_22>) => import("@tanstack/react-query").UseQueryResult<TData_22, Error>;
                useDenomsMetadata: <TData_23 = import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomsMetadataQuery<TData_23>) => import("@tanstack/react-query").UseQueryResult<TData_23, Error>;
                useDenomOwners: <TData_24 = import("./cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomOwnersQuery<TData_24>) => import("@tanstack/react-query").UseQueryResult<TData_24, Error>;
                useSendEnabled: <TData_25 = import("./cosmos/bank/v1beta1/query").QuerySendEnabledResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSendEnabledQuery<TData_25>) => import("@tanstack/react-query").UseQueryResult<TData_25, Error>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    useConfig: <TData_26 = import("./cosmos/base/node/v1beta1/query").ConfigResponse>({ request, options }: _CosmosBaseNodeV1beta1Queryrpc.UseConfigQuery<TData_26>) => import("@tanstack/react-query").UseQueryResult<TData_26, Error>;
                };
            };
            tendermint: {
                v1beta1: {
                    useGetNodeInfo: <TData_27 = import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetNodeInfoQuery<TData_27>) => import("@tanstack/react-query").UseQueryResult<TData_27, Error>;
                    useGetSyncing: <TData_28 = import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetSyncingQuery<TData_28>) => import("@tanstack/react-query").UseQueryResult<TData_28, Error>;
                    useGetLatestBlock: <TData_29 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestBlockQuery<TData_29>) => import("@tanstack/react-query").UseQueryResult<TData_29, Error>;
                    useGetBlockByHeight: <TData_30 = import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetBlockByHeightQuery<TData_30>) => import("@tanstack/react-query").UseQueryResult<TData_30, Error>;
                    useGetLatestValidatorSet: <TData_31 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestValidatorSetQuery<TData_31>) => import("@tanstack/react-query").UseQueryResult<TData_31, Error>;
                    useGetValidatorSetByHeight: <TData_32 = import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetValidatorSetByHeightQuery<TData_32>) => import("@tanstack/react-query").UseQueryResult<TData_32, Error>;
                    useABCIQuery: <TData_33 = import("./cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseABCIQueryQuery<TData_33>) => import("@tanstack/react-query").UseQueryResult<TData_33, Error>;
                };
            };
        };
        consensus: {
            v1: {
                useParams: <TData_34 = import("./cosmos/consensus/v1/query").QueryParamsResponse>({ request, options }: _CosmosConsensusV1Queryrpc.UseParamsQuery<TData_34>) => import("@tanstack/react-query").UseQueryResult<TData_34, Error>;
            };
        };
        distribution: {
            v1beta1: {
                useParams: <TData_35 = import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseParamsQuery<TData_35>) => import("@tanstack/react-query").UseQueryResult<TData_35, Error>;
                useValidatorDistributionInfo: <TData_36 = import("./cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorDistributionInfoQuery<TData_36>) => import("@tanstack/react-query").UseQueryResult<TData_36, Error>;
                useValidatorOutstandingRewards: <TData_37 = import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorOutstandingRewardsQuery<TData_37>) => import("@tanstack/react-query").UseQueryResult<TData_37, Error>;
                useValidatorCommission: <TData_38 = import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorCommissionQuery<TData_38>) => import("@tanstack/react-query").UseQueryResult<TData_38, Error>;
                useValidatorSlashes: <TData_39 = import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorSlashesQuery<TData_39>) => import("@tanstack/react-query").UseQueryResult<TData_39, Error>;
                useDelegationRewards: <TData_40 = import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationRewardsQuery<TData_40>) => import("@tanstack/react-query").UseQueryResult<TData_40, Error>;
                useDelegationTotalRewards: <TData_41 = import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationTotalRewardsQuery<TData_41>) => import("@tanstack/react-query").UseQueryResult<TData_41, Error>;
                useDelegatorValidators: <TData_42 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_42>) => import("@tanstack/react-query").UseQueryResult<TData_42, Error>;
                useDelegatorWithdrawAddress: <TData_43 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorWithdrawAddressQuery<TData_43>) => import("@tanstack/react-query").UseQueryResult<TData_43, Error>;
                useCommunityPool: <TData_44 = import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseCommunityPoolQuery<TData_44>) => import("@tanstack/react-query").UseQueryResult<TData_44, Error>;
            };
        };
        evidence: {
            v1beta1: {
                useEvidence: <TData_45 = import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseEvidenceQuery<TData_45>) => import("@tanstack/react-query").UseQueryResult<TData_45, Error>;
                useAllEvidence: <TData_46 = import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseAllEvidenceQuery<TData_46>) => import("@tanstack/react-query").UseQueryResult<TData_46, Error>;
            };
        };
        feegrant: {
            v1beta1: {
                useAllowance: <TData_47 = import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowanceQuery<TData_47>) => import("@tanstack/react-query").UseQueryResult<TData_47, Error>;
                useAllowances: <TData_48 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesQuery<TData_48>) => import("@tanstack/react-query").UseQueryResult<TData_48, Error>;
                useAllowancesByGranter: <TData_49 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesByGranterQuery<TData_49>) => import("@tanstack/react-query").UseQueryResult<TData_49, Error>;
            };
        };
        gov: {
            v1: {
                useProposal: <TData_50 = import("./cosmos/gov/v1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalQuery<TData_50>) => import("@tanstack/react-query").UseQueryResult<TData_50, Error>;
                useProposals: <TData_51 = import("./cosmos/gov/v1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalsQuery<TData_51>) => import("@tanstack/react-query").UseQueryResult<TData_51, Error>;
                useVote: <TData_52 = import("./cosmos/gov/v1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVoteQuery<TData_52>) => import("@tanstack/react-query").UseQueryResult<TData_52, Error>;
                useVotes: <TData_53 = import("./cosmos/gov/v1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVotesQuery<TData_53>) => import("@tanstack/react-query").UseQueryResult<TData_53, Error>;
                useParams: <TData_54 = import("./cosmos/gov/v1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseParamsQuery<TData_54>) => import("@tanstack/react-query").UseQueryResult<TData_54, Error>;
                useDeposit: <TData_55 = import("./cosmos/gov/v1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositQuery<TData_55>) => import("@tanstack/react-query").UseQueryResult<TData_55, Error>;
                useDeposits: <TData_56 = import("./cosmos/gov/v1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositsQuery<TData_56>) => import("@tanstack/react-query").UseQueryResult<TData_56, Error>;
                useTallyResult: <TData_57 = import("./cosmos/gov/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1Queryrpc.UseTallyResultQuery<TData_57>) => import("@tanstack/react-query").UseQueryResult<TData_57, Error>;
            };
            v1beta1: {
                useProposal: <TData_58 = import("./cosmos/gov/v1beta1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalQuery<TData_58>) => import("@tanstack/react-query").UseQueryResult<TData_58, Error>;
                useProposals: <TData_59 = import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalsQuery<TData_59>) => import("@tanstack/react-query").UseQueryResult<TData_59, Error>;
                useVote: <TData_60 = import("./cosmos/gov/v1beta1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVoteQuery<TData_60>) => import("@tanstack/react-query").UseQueryResult<TData_60, Error>;
                useVotes: <TData_61 = import("./cosmos/gov/v1beta1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVotesQuery<TData_61>) => import("@tanstack/react-query").UseQueryResult<TData_61, Error>;
                useParams: <TData_62 = import("./cosmos/gov/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseParamsQuery<TData_62>) => import("@tanstack/react-query").UseQueryResult<TData_62, Error>;
                useDeposit: <TData_63 = import("./cosmos/gov/v1beta1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositQuery<TData_63>) => import("@tanstack/react-query").UseQueryResult<TData_63, Error>;
                useDeposits: <TData_64 = import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositsQuery<TData_64>) => import("@tanstack/react-query").UseQueryResult<TData_64, Error>;
                useTallyResult: <TData_65 = import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseTallyResultQuery<TData_65>) => import("@tanstack/react-query").UseQueryResult<TData_65, Error>;
            };
        };
        group: {
            v1: {
                useGroupInfo: <TData_66 = import("./cosmos/group/v1/query").QueryGroupInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupInfoQuery<TData_66>) => import("@tanstack/react-query").UseQueryResult<TData_66, Error>;
                useGroupPolicyInfo: <TData_67 = import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPolicyInfoQuery<TData_67>) => import("@tanstack/react-query").UseQueryResult<TData_67, Error>;
                useGroupMembers: <TData_68 = import("./cosmos/group/v1/query").QueryGroupMembersResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupMembersQuery<TData_68>) => import("@tanstack/react-query").UseQueryResult<TData_68, Error>;
                useGroupsByAdmin: <TData_69 = import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByAdminQuery<TData_69>) => import("@tanstack/react-query").UseQueryResult<TData_69, Error>;
                useGroupPoliciesByGroup: <TData_70 = import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByGroupQuery<TData_70>) => import("@tanstack/react-query").UseQueryResult<TData_70, Error>;
                useGroupPoliciesByAdmin: <TData_71 = import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByAdminQuery<TData_71>) => import("@tanstack/react-query").UseQueryResult<TData_71, Error>;
                useProposal: <TData_72 = import("./cosmos/group/v1/query").QueryProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalQuery<TData_72>) => import("@tanstack/react-query").UseQueryResult<TData_72, Error>;
                useProposalsByGroupPolicy: <TData_73 = import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalsByGroupPolicyQuery<TData_73>) => import("@tanstack/react-query").UseQueryResult<TData_73, Error>;
                useVoteByProposalVoter: <TData_74 = import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVoteByProposalVoterQuery<TData_74>) => import("@tanstack/react-query").UseQueryResult<TData_74, Error>;
                useVotesByProposal: <TData_75 = import("./cosmos/group/v1/query").QueryVotesByProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByProposalQuery<TData_75>) => import("@tanstack/react-query").UseQueryResult<TData_75, Error>;
                useVotesByVoter: <TData_76 = import("./cosmos/group/v1/query").QueryVotesByVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByVoterQuery<TData_76>) => import("@tanstack/react-query").UseQueryResult<TData_76, Error>;
                useGroupsByMember: <TData_77 = import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByMemberQuery<TData_77>) => import("@tanstack/react-query").UseQueryResult<TData_77, Error>;
                useTallyResult: <TData_78 = import("./cosmos/group/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseTallyResultQuery<TData_78>) => import("@tanstack/react-query").UseQueryResult<TData_78, Error>;
                useGroups: <TData_79 = import("./cosmos/group/v1/query").QueryGroupsResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsQuery<TData_79>) => import("@tanstack/react-query").UseQueryResult<TData_79, Error>;
            };
        };
        mint: {
            v1beta1: {
                useParams: <TData_80 = import("./cosmos/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseParamsQuery<TData_80>) => import("@tanstack/react-query").UseQueryResult<TData_80, Error>;
                useInflation: <TData_81 = import("./cosmos/mint/v1beta1/query").QueryInflationResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseInflationQuery<TData_81>) => import("@tanstack/react-query").UseQueryResult<TData_81, Error>;
                useAnnualProvisions: <TData_82 = import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseAnnualProvisionsQuery<TData_82>) => import("@tanstack/react-query").UseQueryResult<TData_82, Error>;
            };
        };
        nft: {
            v1beta1: {
                useBalance: <TData_83 = import("./cosmos/nft/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseBalanceQuery<TData_83>) => import("@tanstack/react-query").UseQueryResult<TData_83, Error>;
                useOwner: <TData_84 = import("./cosmos/nft/v1beta1/query").QueryOwnerResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseOwnerQuery<TData_84>) => import("@tanstack/react-query").UseQueryResult<TData_84, Error>;
                useSupply: <TData_85 = import("./cosmos/nft/v1beta1/query").QuerySupplyResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseSupplyQuery<TData_85>) => import("@tanstack/react-query").UseQueryResult<TData_85, Error>;
                useNFTs: <TData_86 = import("./cosmos/nft/v1beta1/query").QueryNFTsResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTsQuery<TData_86>) => import("@tanstack/react-query").UseQueryResult<TData_86, Error>;
                useNFT: <TData_87 = import("./cosmos/nft/v1beta1/query").QueryNFTResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTQuery<TData_87>) => import("@tanstack/react-query").UseQueryResult<TData_87, Error>;
                useClass: <TData_88 = import("./cosmos/nft/v1beta1/query").QueryClassResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassQuery<TData_88>) => import("@tanstack/react-query").UseQueryResult<TData_88, Error>;
                useClasses: <TData_89 = import("./cosmos/nft/v1beta1/query").QueryClassesResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassesQuery<TData_89>) => import("@tanstack/react-query").UseQueryResult<TData_89, Error>;
            };
        };
        orm: {
            query: {
                v1alpha1: {
                    useGet: <TData_90 = import("./cosmos/orm/query/v1alpha1/query").GetResponse>({ request, options }: _CosmosOrmQueryV1alpha1Queryrpc.UseGetQuery<TData_90>) => import("@tanstack/react-query").UseQueryResult<TData_90, Error>;
                    useList: <TData_91 = import("./cosmos/orm/query/v1alpha1/query").ListResponse>({ request, options }: _CosmosOrmQueryV1alpha1Queryrpc.UseListQuery<TData_91>) => import("@tanstack/react-query").UseQueryResult<TData_91, Error>;
                };
            };
        };
        params: {
            v1beta1: {
                useParams: <TData_92 = import("./cosmos/params/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseParamsQuery<TData_92>) => import("@tanstack/react-query").UseQueryResult<TData_92, Error>;
                useSubspaces: <TData_93 = import("./cosmos/params/v1beta1/query").QuerySubspacesResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseSubspacesQuery<TData_93>) => import("@tanstack/react-query").UseQueryResult<TData_93, Error>;
            };
        };
        slashing: {
            v1beta1: {
                useParams: <TData_94 = import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseParamsQuery<TData_94>) => import("@tanstack/react-query").UseQueryResult<TData_94, Error>;
                useSigningInfo: <TData_95 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfoQuery<TData_95>) => import("@tanstack/react-query").UseQueryResult<TData_95, Error>;
                useSigningInfos: <TData_96 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfosQuery<TData_96>) => import("@tanstack/react-query").UseQueryResult<TData_96, Error>;
            };
        };
        staking: {
            v1beta1: {
                useValidators: <TData_97 = import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorsQuery<TData_97>) => import("@tanstack/react-query").UseQueryResult<TData_97, Error>;
                useValidator: <TData_98 = import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorQuery<TData_98>) => import("@tanstack/react-query").UseQueryResult<TData_98, Error>;
                useValidatorDelegations: <TData_99 = import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorDelegationsQuery<TData_99>) => import("@tanstack/react-query").UseQueryResult<TData_99, Error>;
                useValidatorUnbondingDelegations: <TData_100 = import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorUnbondingDelegationsQuery<TData_100>) => import("@tanstack/react-query").UseQueryResult<TData_100, Error>;
                useDelegation: <TData_101 = import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegationQuery<TData_101>) => import("@tanstack/react-query").UseQueryResult<TData_101, Error>;
                useUnbondingDelegation: <TData_102 = import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseUnbondingDelegationQuery<TData_102>) => import("@tanstack/react-query").UseQueryResult<TData_102, Error>;
                useDelegatorDelegations: <TData_103 = import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorDelegationsQuery<TData_103>) => import("@tanstack/react-query").UseQueryResult<TData_103, Error>;
                useDelegatorUnbondingDelegations: <TData_104 = import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorUnbondingDelegationsQuery<TData_104>) => import("@tanstack/react-query").UseQueryResult<TData_104, Error>;
                useRedelegations: <TData_105 = import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseRedelegationsQuery<TData_105>) => import("@tanstack/react-query").UseQueryResult<TData_105, Error>;
                useDelegatorValidators: <TData_106 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_106>) => import("@tanstack/react-query").UseQueryResult<TData_106, Error>;
                useDelegatorValidator: <TData_107 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorQuery<TData_107>) => import("@tanstack/react-query").UseQueryResult<TData_107, Error>;
                useHistoricalInfo: <TData_108 = import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseHistoricalInfoQuery<TData_108>) => import("@tanstack/react-query").UseQueryResult<TData_108, Error>;
                usePool: <TData_109 = import("./cosmos/staking/v1beta1/query").QueryPoolResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UsePoolQuery<TData_109>) => import("@tanstack/react-query").UseQueryResult<TData_109, Error>;
                useParams: <TData_110 = import("./cosmos/staking/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseParamsQuery<TData_110>) => import("@tanstack/react-query").UseQueryResult<TData_110, Error>;
            };
        };
        tx: {
            v1beta1: {
                useSimulate: <TData_111 = import("./cosmos/tx/v1beta1/service").SimulateResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseSimulateQuery<TData_111>) => import("@tanstack/react-query").UseQueryResult<TData_111, Error>;
                useGetTx: <TData_112 = import("./cosmos/tx/v1beta1/service").GetTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxQuery<TData_112>) => import("@tanstack/react-query").UseQueryResult<TData_112, Error>;
                useBroadcastTx: <TData_113 = import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseBroadcastTxQuery<TData_113>) => import("@tanstack/react-query").UseQueryResult<TData_113, Error>;
                useGetTxsEvent: <TData_114 = import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxsEventQuery<TData_114>) => import("@tanstack/react-query").UseQueryResult<TData_114, Error>;
                useGetBlockWithTxs: <TData_115 = import("./cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetBlockWithTxsQuery<TData_115>) => import("@tanstack/react-query").UseQueryResult<TData_115, Error>;
                useTxDecode: <TData_116 = import("./cosmos/tx/v1beta1/service").TxDecodeResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseTxDecodeQuery<TData_116>) => import("@tanstack/react-query").UseQueryResult<TData_116, Error>;
                useTxEncode: <TData_117 = import("./cosmos/tx/v1beta1/service").TxEncodeResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseTxEncodeQuery<TData_117>) => import("@tanstack/react-query").UseQueryResult<TData_117, Error>;
                useTxEncodeAmino: <TData_118 = import("./cosmos/tx/v1beta1/service").TxEncodeAminoResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseTxEncodeAminoQuery<TData_118>) => import("@tanstack/react-query").UseQueryResult<TData_118, Error>;
                useTxDecodeAmino: <TData_119 = import("./cosmos/tx/v1beta1/service").TxDecodeAminoResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseTxDecodeAminoQuery<TData_119>) => import("@tanstack/react-query").UseQueryResult<TData_119, Error>;
            };
        };
        upgrade: {
            v1beta1: {
                useCurrentPlan: <TData_120 = import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseCurrentPlanQuery<TData_120>) => import("@tanstack/react-query").UseQueryResult<TData_120, Error>;
                useAppliedPlan: <TData_121 = import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAppliedPlanQuery<TData_121>) => import("@tanstack/react-query").UseQueryResult<TData_121, Error>;
                useUpgradedConsensusState: <TData_122 = import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseUpgradedConsensusStateQuery<TData_122>) => import("@tanstack/react-query").UseQueryResult<TData_122, Error>;
                useModuleVersions: <TData_123 = import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseModuleVersionsQuery<TData_123>) => import("@tanstack/react-query").UseQueryResult<TData_123, Error>;
                useAuthority: <TData_124 = import("./cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAuthorityQuery<TData_124>) => import("@tanstack/react-query").UseQueryResult<TData_124, Error>;
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: {
                useContractInfo: <TData_125 = import("./cosmwasm/wasm/v1/query").QueryContractInfoResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractInfoQuery<TData_125>) => import("@tanstack/react-query").UseQueryResult<TData_125, Error>;
                useContractHistory: <TData_126 = import("./cosmwasm/wasm/v1/query").QueryContractHistoryResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractHistoryQuery<TData_126>) => import("@tanstack/react-query").UseQueryResult<TData_126, Error>;
                useContractsByCode: <TData_127 = import("./cosmwasm/wasm/v1/query").QueryContractsByCodeResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractsByCodeQuery<TData_127>) => import("@tanstack/react-query").UseQueryResult<TData_127, Error>;
                useAllContractState: <TData_128 = import("./cosmwasm/wasm/v1/query").QueryAllContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseAllContractStateQuery<TData_128>) => import("@tanstack/react-query").UseQueryResult<TData_128, Error>;
                useRawContractState: <TData_129 = import("./cosmwasm/wasm/v1/query").QueryRawContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseRawContractStateQuery<TData_129>) => import("@tanstack/react-query").UseQueryResult<TData_129, Error>;
                useSmartContractState: <TData_130 = import("./cosmwasm/wasm/v1/query").QuerySmartContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseSmartContractStateQuery<TData_130>) => import("@tanstack/react-query").UseQueryResult<TData_130, Error>;
                useCode: <TData_131 = import("./cosmwasm/wasm/v1/query").QueryCodeResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseCodeQuery<TData_131>) => import("@tanstack/react-query").UseQueryResult<TData_131, Error>;
                useCodes: <TData_132 = import("./cosmwasm/wasm/v1/query").QueryCodesResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseCodesQuery<TData_132>) => import("@tanstack/react-query").UseQueryResult<TData_132, Error>;
                usePinnedCodes: <TData_133 = import("./cosmwasm/wasm/v1/query").QueryPinnedCodesResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UsePinnedCodesQuery<TData_133>) => import("@tanstack/react-query").UseQueryResult<TData_133, Error>;
                useParams: <TData_134 = import("./cosmwasm/wasm/v1/query").QueryParamsResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseParamsQuery<TData_134>) => import("@tanstack/react-query").UseQueryResult<TData_134, Error>;
                useContractsByCreator: <TData_135 = import("./cosmwasm/wasm/v1/query").QueryContractsByCreatorResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractsByCreatorQuery<TData_135>) => import("@tanstack/react-query").UseQueryResult<TData_135, Error>;
            };
        };
    };
    duality: {
        dex: {
            useParams: <TData_136 = import("./duality/dex/query").QueryParamsResponse>({ request, options }: _DualityDexQueryrpc.UseParamsQuery<TData_136>) => import("@tanstack/react-query").UseQueryResult<TData_136, Error>;
            useLimitOrderTrancheUser: <TData_137 = import("./duality/dex/query").QueryGetLimitOrderTrancheUserResponse>({ request, options }: _DualityDexQueryrpc.UseLimitOrderTrancheUserQuery<TData_137>) => import("@tanstack/react-query").UseQueryResult<TData_137, Error>;
            useLimitOrderTrancheUserAll: <TData_138 = import("./duality/dex/query").QueryAllLimitOrderTrancheUserResponse>({ request, options }: _DualityDexQueryrpc.UseLimitOrderTrancheUserAllQuery<TData_138>) => import("@tanstack/react-query").UseQueryResult<TData_138, Error>;
            useLimitOrderTrancheUserAllByAddress: <TData_139 = import("./duality/dex/query").QueryAllUserLimitOrdersResponse>({ request, options }: _DualityDexQueryrpc.UseLimitOrderTrancheUserAllByAddressQuery<TData_139>) => import("@tanstack/react-query").UseQueryResult<TData_139, Error>;
            useLimitOrderTranche: <TData_140 = import("./duality/dex/query").QueryGetLimitOrderTrancheResponse>({ request, options }: _DualityDexQueryrpc.UseLimitOrderTrancheQuery<TData_140>) => import("@tanstack/react-query").UseQueryResult<TData_140, Error>;
            useLimitOrderTrancheAll: <TData_141 = import("./duality/dex/query").QueryAllLimitOrderTrancheResponse>({ request, options }: _DualityDexQueryrpc.UseLimitOrderTrancheAllQuery<TData_141>) => import("@tanstack/react-query").UseQueryResult<TData_141, Error>;
            useUserDepositsAll: <TData_142 = import("./duality/dex/query").QueryAllUserDepositsResponse>({ request, options }: _DualityDexQueryrpc.UseUserDepositsAllQuery<TData_142>) => import("@tanstack/react-query").UseQueryResult<TData_142, Error>;
            useTickLiquidityAll: <TData_143 = import("./duality/dex/query").QueryAllTickLiquidityResponse>({ request, options }: _DualityDexQueryrpc.UseTickLiquidityAllQuery<TData_143>) => import("@tanstack/react-query").UseQueryResult<TData_143, Error>;
            useInactiveLimitOrderTranche: <TData_144 = import("./duality/dex/query").QueryGetInactiveLimitOrderTrancheResponse>({ request, options }: _DualityDexQueryrpc.UseInactiveLimitOrderTrancheQuery<TData_144>) => import("@tanstack/react-query").UseQueryResult<TData_144, Error>;
            useInactiveLimitOrderTrancheAll: <TData_145 = import("./duality/dex/query").QueryAllInactiveLimitOrderTrancheResponse>({ request, options }: _DualityDexQueryrpc.UseInactiveLimitOrderTrancheAllQuery<TData_145>) => import("@tanstack/react-query").UseQueryResult<TData_145, Error>;
            usePoolReservesAll: <TData_146 = import("./duality/dex/query").QueryAllPoolReservesResponse>({ request, options }: _DualityDexQueryrpc.UsePoolReservesAllQuery<TData_146>) => import("@tanstack/react-query").UseQueryResult<TData_146, Error>;
            usePoolReserves: <TData_147 = import("./duality/dex/query").QueryGetPoolReservesResponse>({ request, options }: _DualityDexQueryrpc.UsePoolReservesQuery<TData_147>) => import("@tanstack/react-query").UseQueryResult<TData_147, Error>;
            useEstimateMultiHopSwap: <TData_148 = import("./duality/dex/query").QueryEstimateMultiHopSwapResponse>({ request, options }: _DualityDexQueryrpc.UseEstimateMultiHopSwapQuery<TData_148>) => import("@tanstack/react-query").UseQueryResult<TData_148, Error>;
            useEstimatePlaceLimitOrder: <TData_149 = import("./duality/dex/query").QueryEstimatePlaceLimitOrderResponse>({ request, options }: _DualityDexQueryrpc.UseEstimatePlaceLimitOrderQuery<TData_149>) => import("@tanstack/react-query").UseQueryResult<TData_149, Error>;
            usePool: <TData_150 = import("./duality/dex/query").QueryPoolResponse>({ request, options }: _DualityDexQueryrpc.UsePoolQuery<TData_150>) => import("@tanstack/react-query").UseQueryResult<TData_150, Error>;
            usePoolByID: <TData_151 = import("./duality/dex/query").QueryPoolResponse>({ request, options }: _DualityDexQueryrpc.UsePoolByIDQuery<TData_151>) => import("@tanstack/react-query").UseQueryResult<TData_151, Error>;
            usePoolMetadata: <TData_152 = import("./duality/dex/query").QueryGetPoolMetadataResponse>({ request, options }: _DualityDexQueryrpc.UsePoolMetadataQuery<TData_152>) => import("@tanstack/react-query").UseQueryResult<TData_152, Error>;
            usePoolMetadataAll: <TData_153 = import("./duality/dex/query").QueryAllPoolMetadataResponse>({ request, options }: _DualityDexQueryrpc.UsePoolMetadataAllQuery<TData_153>) => import("@tanstack/react-query").UseQueryResult<TData_153, Error>;
        };
        epochs: {
            useEpochInfos: <TData_154 = import("./duality/epochs/query").QueryEpochsInfoResponse>({ request, options }: _DualityEpochsQueryrpc.UseEpochInfosQuery<TData_154>) => import("@tanstack/react-query").UseQueryResult<TData_154, Error>;
            useCurrentEpoch: <TData_155 = import("./duality/epochs/query").QueryCurrentEpochResponse>({ request, options }: _DualityEpochsQueryrpc.UseCurrentEpochQuery<TData_155>) => import("@tanstack/react-query").UseQueryResult<TData_155, Error>;
        };
        incentives: {
            useGetModuleStatus: <TData_156 = import("./duality/incentives/query").GetModuleStatusResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetModuleStatusQuery<TData_156>) => import("@tanstack/react-query").UseQueryResult<TData_156, Error>;
            useGetGaugeByID: <TData_157 = import("./duality/incentives/query").GetGaugeByIDResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetGaugeByIDQuery<TData_157>) => import("@tanstack/react-query").UseQueryResult<TData_157, Error>;
            useGetGauges: <TData_158 = import("./duality/incentives/query").GetGaugesResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetGaugesQuery<TData_158>) => import("@tanstack/react-query").UseQueryResult<TData_158, Error>;
            useGetStakeByID: <TData_159 = import("./duality/incentives/query").GetStakeByIDResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetStakeByIDQuery<TData_159>) => import("@tanstack/react-query").UseQueryResult<TData_159, Error>;
            useGetStakes: <TData_160 = import("./duality/incentives/query").GetStakesResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetStakesQuery<TData_160>) => import("@tanstack/react-query").UseQueryResult<TData_160, Error>;
            useGetFutureRewardEstimate: <TData_161 = import("./duality/incentives/query").GetFutureRewardEstimateResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetFutureRewardEstimateQuery<TData_161>) => import("@tanstack/react-query").UseQueryResult<TData_161, Error>;
            useGetAccountHistory: <TData_162 = import("./duality/incentives/query").GetAccountHistoryResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetAccountHistoryQuery<TData_162>) => import("@tanstack/react-query").UseQueryResult<TData_162, Error>;
            useGetGaugeQualifyingValue: <TData_163 = import("./duality/incentives/query").GetGaugeQualifyingValueResponse>({ request, options }: _DualityIncentivesQueryrpc.UseGetGaugeQualifyingValueQuery<TData_163>) => import("@tanstack/react-query").UseQueryResult<TData_163, Error>;
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: {
                    useDenomTrace: <TData_164 = import("./ibc/applications/transfer/v1/query").QueryDenomTraceResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTraceQuery<TData_164>) => import("@tanstack/react-query").UseQueryResult<TData_164, Error>;
                    useDenomTraces: <TData_165 = import("./ibc/applications/transfer/v1/query").QueryDenomTracesResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTracesQuery<TData_165>) => import("@tanstack/react-query").UseQueryResult<TData_165, Error>;
                    useParams: <TData_166 = import("./ibc/applications/transfer/v1/query").QueryParamsResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseParamsQuery<TData_166>) => import("@tanstack/react-query").UseQueryResult<TData_166, Error>;
                    useDenomHash: <TData_167 = import("./ibc/applications/transfer/v1/query").QueryDenomHashResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomHashQuery<TData_167>) => import("@tanstack/react-query").UseQueryResult<TData_167, Error>;
                    useEscrowAddress: <TData_168 = import("./ibc/applications/transfer/v1/query").QueryEscrowAddressResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseEscrowAddressQuery<TData_168>) => import("@tanstack/react-query").UseQueryResult<TData_168, Error>;
                    useTotalEscrowForDenom: <TData_169 = import("./ibc/applications/transfer/v1/query").QueryTotalEscrowForDenomResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseTotalEscrowForDenomQuery<TData_169>) => import("@tanstack/react-query").UseQueryResult<TData_169, Error>;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    useChannel: <TData_170 = import("./ibc/core/channel/v1/query").QueryChannelResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelQuery<TData_170>) => import("@tanstack/react-query").UseQueryResult<TData_170, Error>;
                    useChannels: <TData_171 = import("./ibc/core/channel/v1/query").QueryChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelsQuery<TData_171>) => import("@tanstack/react-query").UseQueryResult<TData_171, Error>;
                    useConnectionChannels: <TData_172 = import("./ibc/core/channel/v1/query").QueryConnectionChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseConnectionChannelsQuery<TData_172>) => import("@tanstack/react-query").UseQueryResult<TData_172, Error>;
                    useChannelClientState: <TData_173 = import("./ibc/core/channel/v1/query").QueryChannelClientStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelClientStateQuery<TData_173>) => import("@tanstack/react-query").UseQueryResult<TData_173, Error>;
                    useChannelConsensusState: <TData_174 = import("./ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelConsensusStateQuery<TData_174>) => import("@tanstack/react-query").UseQueryResult<TData_174, Error>;
                    usePacketCommitment: <TData_175 = import("./ibc/core/channel/v1/query").QueryPacketCommitmentResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentQuery<TData_175>) => import("@tanstack/react-query").UseQueryResult<TData_175, Error>;
                    usePacketCommitments: <TData_176 = import("./ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentsQuery<TData_176>) => import("@tanstack/react-query").UseQueryResult<TData_176, Error>;
                    usePacketReceipt: <TData_177 = import("./ibc/core/channel/v1/query").QueryPacketReceiptResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketReceiptQuery<TData_177>) => import("@tanstack/react-query").UseQueryResult<TData_177, Error>;
                    usePacketAcknowledgement: <TData_178 = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementQuery<TData_178>) => import("@tanstack/react-query").UseQueryResult<TData_178, Error>;
                    usePacketAcknowledgements: <TData_179 = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementsQuery<TData_179>) => import("@tanstack/react-query").UseQueryResult<TData_179, Error>;
                    useUnreceivedPackets: <TData_180 = import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedPacketsQuery<TData_180>) => import("@tanstack/react-query").UseQueryResult<TData_180, Error>;
                    useUnreceivedAcks: <TData_181 = import("./ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedAcksQuery<TData_181>) => import("@tanstack/react-query").UseQueryResult<TData_181, Error>;
                    useNextSequenceReceive: <TData_182 = import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseNextSequenceReceiveQuery<TData_182>) => import("@tanstack/react-query").UseQueryResult<TData_182, Error>;
                    useNextSequenceSend: <TData_183 = import("./ibc/core/channel/v1/query").QueryNextSequenceSendResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseNextSequenceSendQuery<TData_183>) => import("@tanstack/react-query").UseQueryResult<TData_183, Error>;
                };
            };
            client: {
                v1: {
                    useClientState: <TData_184 = import("./ibc/core/client/v1/query").QueryClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStateQuery<TData_184>) => import("@tanstack/react-query").UseQueryResult<TData_184, Error>;
                    useClientStates: <TData_185 = import("./ibc/core/client/v1/query").QueryClientStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatesQuery<TData_185>) => import("@tanstack/react-query").UseQueryResult<TData_185, Error>;
                    useConsensusState: <TData_186 = import("./ibc/core/client/v1/query").QueryConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStateQuery<TData_186>) => import("@tanstack/react-query").UseQueryResult<TData_186, Error>;
                    useConsensusStates: <TData_187 = import("./ibc/core/client/v1/query").QueryConsensusStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStatesQuery<TData_187>) => import("@tanstack/react-query").UseQueryResult<TData_187, Error>;
                    useConsensusStateHeights: <TData_188 = import("./ibc/core/client/v1/query").QueryConsensusStateHeightsResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStateHeightsQuery<TData_188>) => import("@tanstack/react-query").UseQueryResult<TData_188, Error>;
                    useClientStatus: <TData_189 = import("./ibc/core/client/v1/query").QueryClientStatusResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatusQuery<TData_189>) => import("@tanstack/react-query").UseQueryResult<TData_189, Error>;
                    useClientParams: <TData_190 = import("./ibc/core/client/v1/query").QueryClientParamsResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientParamsQuery<TData_190>) => import("@tanstack/react-query").UseQueryResult<TData_190, Error>;
                    useUpgradedClientState: <TData_191 = import("./ibc/core/client/v1/query").QueryUpgradedClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedClientStateQuery<TData_191>) => import("@tanstack/react-query").UseQueryResult<TData_191, Error>;
                    useUpgradedConsensusState: <TData_192 = import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedConsensusStateQuery<TData_192>) => import("@tanstack/react-query").UseQueryResult<TData_192, Error>;
                };
            };
            connection: {
                v1: {
                    useConnection: <TData_193 = import("./ibc/core/connection/v1/query").QueryConnectionResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionQuery<TData_193>) => import("@tanstack/react-query").UseQueryResult<TData_193, Error>;
                    useConnections: <TData_194 = import("./ibc/core/connection/v1/query").QueryConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionsQuery<TData_194>) => import("@tanstack/react-query").UseQueryResult<TData_194, Error>;
                    useClientConnections: <TData_195 = import("./ibc/core/connection/v1/query").QueryClientConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseClientConnectionsQuery<TData_195>) => import("@tanstack/react-query").UseQueryResult<TData_195, Error>;
                    useConnectionClientState: <TData_196 = import("./ibc/core/connection/v1/query").QueryConnectionClientStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionClientStateQuery<TData_196>) => import("@tanstack/react-query").UseQueryResult<TData_196, Error>;
                    useConnectionConsensusState: <TData_197 = import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionConsensusStateQuery<TData_197>) => import("@tanstack/react-query").UseQueryResult<TData_197, Error>;
                    useConnectionParams: <TData_198 = import("./ibc/core/connection/v1/query").QueryConnectionParamsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionParamsQuery<TData_198>) => import("@tanstack/react-query").UseQueryResult<TData_198, Error>;
                };
            };
        };
    };
    pob: {
        builder: {
            v1: {
                useParams: <TData_199 = import("./pob/builder/v1/query").QueryParamsResponse>({ request, options }: _PobBuilderV1Queryrpc.UseParamsQuery<TData_199>) => import("@tanstack/react-query").UseQueryResult<TData_199, Error>;
            };
        };
    };
    router: {
        v1: {
            useParams: <TData_200 = import("./router/v1/query").QueryParamsResponse>({ request, options }: _RouterV1Queryrpc.UseParamsQuery<TData_200>) => import("@tanstack/react-query").UseQueryResult<TData_200, Error>;
        };
    };
};
