//@ts-nocheck
import { AminoMsg, Pubkey } from "@cosmjs/amino";
import { decodePubkey, encodePubkey } from "@cosmjs/proto-signing";
import { Long } from "../../../helpers";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
export interface MsgCreateValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    commission: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: Pubkey;
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgEditValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgEditValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
  };
}
export interface MsgDelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgDelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBeginRedelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegate";
  value: {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUndelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUndelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgCancelUnbondingDelegationAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCancelUnbondingDelegation";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
    creation_height: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/staking/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      unbonding_time: {
        seconds: string;
        nanos: number;
      };
      max_validators: number;
      max_entries: number;
      historical_entries: number;
      bond_denom: string;
      min_commission_rate: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }: MsgCreateValidator): MsgCreateValidatorAminoType["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.max_rate,
          max_change_rate: commission.max_change_rate
        },
        min_self_delegation,
        delegator_address,
        validator_address,
        pubkey: decodePubkey(pubkey)!,
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString()
        }
      };
    },
    fromAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }: MsgCreateValidatorAminoType["value"]): MsgCreateValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.max_rate,
          max_change_rate: commission.max_change_rate
        },
        min_self_delegation,
        delegator_address,
        validator_address,
        pubkey: encodePubkey(pubkey),
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }: MsgEditValidator): MsgEditValidatorAminoType["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        validator_address,
        commission_rate,
        min_self_delegation
      };
    },
    fromAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }: MsgEditValidatorAminoType["value"]): MsgEditValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        validator_address,
        commission_rate,
        min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgDelegate): MsgDelegateAminoType["value"] => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgDelegateAminoType["value"]): MsgDelegate => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: MsgBeginRedelegate): MsgBeginRedelegateAminoType["value"] => {
      return {
        delegator_address,
        validator_src_address,
        validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: MsgBeginRedelegateAminoType["value"]): MsgBeginRedelegate => {
      return {
        delegator_address,
        validator_src_address,
        validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgUndelegate): MsgUndelegateAminoType["value"] => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgUndelegateAminoType["value"]): MsgUndelegate => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: ({
      delegator_address,
      validator_address,
      amount,
      creation_height
    }: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAminoType["value"] => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        creation_height: creation_height.toString()
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      creation_height
    }: MsgCancelUnbondingDelegationAminoType["value"]): MsgCancelUnbondingDelegation => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        creation_height: Long.fromString(creation_height)
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/staking/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          unbonding_time: (params.unbonding_time * 1_000_000_000).toString(),
          max_validators: params.max_validators,
          max_entries: params.max_entries,
          historical_entries: params.historical_entries,
          bond_denom: params.bond_denom,
          min_commission_rate: params.min_commission_rate
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          unbonding_time: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.unbonding_time) / 1_000_000_000)),
            nanos: parseInt(params.unbonding_time) % 1_000_000_000
          },
          max_validators: params.max_validators,
          max_entries: params.max_entries,
          historical_entries: params.historical_entries,
          bond_denom: params.bond_denom,
          min_commission_rate: params.min_commission_rate
        }
      };
    }
  }
};