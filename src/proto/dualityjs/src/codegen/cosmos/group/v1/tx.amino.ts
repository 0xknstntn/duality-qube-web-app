//@ts-nocheck
import { voteOptionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { execFromJSON, MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export interface MsgCreateGroupAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroup";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
    }[];
    metadata: string;
  };
}
export interface MsgUpdateGroupMembersAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembers";
  value: {
    admin: string;
    group_id: string;
    member_updates: {
      address: string;
      weight: string;
      metadata: string;
    }[];
  };
}
export interface MsgUpdateGroupAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: {
    admin: string;
    group_id: string;
    new_admin: string;
  };
}
export interface MsgUpdateGroupMetadataAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
  };
}
export interface MsgCreateGroupPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicy";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgCreateGroupWithPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicy";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
    }[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateGroupPolicyAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: {
    admin: string;
    group_policy_address: string;
    new_admin: string;
  };
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy";
  value: {
    admin: string;
    group_policy_address: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateGroupPolicyMetadataAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: {
    admin: string;
    group_policy_address: string;
    metadata: string;
  };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgSubmitProposal";
  value: {
    group_policy_address: string;
    proposers: string[];
    metadata: string;
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    exec: number;
    title: string;
    summary: string;
  };
}
export interface MsgWithdrawProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgWithdrawProposal";
  value: {
    proposal_id: string;
    address: string;
  };
}
export interface MsgVoteAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
    exec: number;
  };
}
export interface MsgExecAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgExec";
  value: {
    proposal_id: string;
    executor: string;
  };
}
export interface MsgLeaveGroupAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgLeaveGroup";
  value: {
    address: string;
    group_id: string;
  };
}
export const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroup): MsgCreateGroupAminoType["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        metadata
      };
    },
    fromAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroupAminoType["value"]): MsgCreateGroup => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMembers": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    toAmino: ({
      admin,
      group_id,
      member_updates
    }: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoType["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        member_updates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        }))
      };
    },
    fromAmino: ({
      admin,
      group_id,
      member_updates
    }: MsgUpdateGroupMembersAminoType["value"]): MsgUpdateGroupMembers => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        member_updates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        }))
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    toAmino: ({
      admin,
      group_id,
      new_admin
    }: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoType["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        new_admin
      };
    },
    fromAmino: ({
      admin,
      group_id,
      new_admin
    }: MsgUpdateGroupAdminAminoType["value"]): MsgUpdateGroupAdmin => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    toAmino: ({
      admin,
      group_id,
      metadata
    }: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoType["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata
    }: MsgUpdateGroupMetadataAminoType["value"]): MsgUpdateGroupMetadata => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    toAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoType["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        metadata,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }: MsgCreateGroupPolicyAminoType["value"]): MsgCreateGroupPolicy => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        metadata,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    toAmino: ({
      admin,
      members,
      group_metadata,
      group_policy_metadata,
      group_policy_as_admin,
      decision_policy
    }: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoType["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        group_metadata,
        group_policy_metadata,
        group_policy_as_admin,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    },
    fromAmino: ({
      admin,
      members,
      group_metadata,
      group_policy_metadata,
      group_policy_as_admin,
      decision_policy
    }: MsgCreateGroupWithPolicyAminoType["value"]): MsgCreateGroupWithPolicy => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        group_metadata,
        group_policy_metadata,
        group_policy_as_admin,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    toAmino: ({
      admin,
      group_policy_address,
      new_admin
    }: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoType["value"] => {
      return {
        admin,
        group_policy_address,
        new_admin
      };
    },
    fromAmino: ({
      admin,
      group_policy_address,
      new_admin
    }: MsgUpdateGroupPolicyAdminAminoType["value"]): MsgUpdateGroupPolicyAdmin => {
      return {
        admin,
        group_policy_address,
        new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
    toAmino: ({
      admin,
      group_policy_address,
      decision_policy
    }: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoType["value"] => {
      return {
        admin,
        group_policy_address,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_policy_address,
      decision_policy
    }: MsgUpdateGroupPolicyDecisionPolicyAminoType["value"]): MsgUpdateGroupPolicyDecisionPolicy => {
      return {
        admin,
        group_policy_address,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    toAmino: ({
      admin,
      group_policy_address,
      metadata
    }: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoType["value"] => {
      return {
        admin,
        group_policy_address,
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_policy_address,
      metadata
    }: MsgUpdateGroupPolicyMetadataAminoType["value"]): MsgUpdateGroupPolicyMetadata => {
      return {
        admin,
        group_policy_address,
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    toAmino: ({
      group_policy_address,
      proposers,
      metadata,
      messages,
      exec,
      title,
      summary
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        group_policy_address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          type_url: el0.type_url,
          value: el0.value
        })),
        exec,
        title,
        summary
      };
    },
    fromAmino: ({
      group_policy_address,
      proposers,
      metadata,
      messages,
      exec,
      title,
      summary
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        group_policy_address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          type_url: el0.type_url,
          value: el0.value
        })),
        exec: execFromJSON(exec),
        title,
        summary
      };
    }
  },
  "/cosmos.group.v1.MsgWithdrawProposal": {
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    toAmino: ({
      proposal_id,
      address
    }: MsgWithdrawProposal): MsgWithdrawProposalAminoType["value"] => {
      return {
        proposal_id: proposal_id.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }: MsgWithdrawProposalAminoType["value"]): MsgWithdrawProposal => {
      return {
        proposal_id: Long.fromString(proposal_id),
        address
      };
    }
  },
  "/cosmos.group.v1.MsgVote": {
    aminoType: "cosmos-sdk/group/MsgVote",
    toAmino: ({
      proposal_id,
      voter,
      option,
      metadata,
      exec
    }: MsgVote): MsgVoteAminoType["value"] => {
      return {
        proposal_id: proposal_id.toString(),
        voter,
        option,
        metadata,
        exec
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option,
      metadata,
      exec
    }: MsgVoteAminoType["value"]): MsgVote => {
      return {
        proposal_id: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option),
        metadata,
        exec: execFromJSON(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgExec": {
    aminoType: "cosmos-sdk/group/MsgExec",
    toAmino: ({
      proposal_id,
      executor
    }: MsgExec): MsgExecAminoType["value"] => {
      return {
        proposal_id: proposal_id.toString(),
        executor
      };
    },
    fromAmino: ({
      proposal_id,
      executor
    }: MsgExecAminoType["value"]): MsgExec => {
      return {
        proposal_id: Long.fromString(proposal_id),
        executor
      };
    }
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    toAmino: ({
      address,
      group_id
    }: MsgLeaveGroup): MsgLeaveGroupAminoType["value"] => {
      return {
        address,
        group_id: group_id.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }: MsgLeaveGroupAminoType["value"]): MsgLeaveGroup => {
      return {
        address,
        group_id: Long.fromString(group_id)
      };
    }
  }
};