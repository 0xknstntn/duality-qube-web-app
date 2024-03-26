//@ts-nocheck
import { voteOptionFromJSON } from "./types";
import { Long } from "../../../helpers";
import { execFromJSON } from "./tx";
export const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
      return {
        proposal_id: proposal_id.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
      return {
        proposal_id: proposal_id.toString(),
        executor
      };
    },
    fromAmino: ({
      proposal_id,
      executor
    }) => {
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
    }) => {
      return {
        address,
        group_id: group_id.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }) => {
      return {
        address,
        group_id: Long.fromString(group_id)
      };
    }
  }
};