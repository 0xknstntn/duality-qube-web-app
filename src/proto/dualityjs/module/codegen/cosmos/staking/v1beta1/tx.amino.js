//@ts-nocheck

import { decodePubkey, encodePubkey } from "@cosmjs/proto-signing";
import { Long } from "../../../helpers";
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
    }) => {
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
        pubkey: decodePubkey(pubkey),
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
      return {
        authority,
        params: {
          unbonding_time: (params.unbonding_time * 1000000000).toString(),
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
    }) => {
      return {
        authority,
        params: {
          unbonding_time: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.unbonding_time) / 1000000000)),
            nanos: parseInt(params.unbonding_time) % 1000000000
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