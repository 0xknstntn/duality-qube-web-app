"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _protoSigning = require("@cosmjs/proto-signing");
var _helpers = require("../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: function toAmino(_ref) {
      var description = _ref.description,
        commission = _ref.commission,
        min_self_delegation = _ref.min_self_delegation,
        delegator_address = _ref.delegator_address,
        validator_address = _ref.validator_address,
        pubkey = _ref.pubkey,
        value = _ref.value;
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
        min_self_delegation: min_self_delegation,
        delegator_address: delegator_address,
        validator_address: validator_address,
        pubkey: (0, _protoSigning.decodePubkey)(pubkey),
        value: {
          denom: value.denom,
          amount: _helpers.Long.fromValue(value.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var description = _ref2.description,
        commission = _ref2.commission,
        min_self_delegation = _ref2.min_self_delegation,
        delegator_address = _ref2.delegator_address,
        validator_address = _ref2.validator_address,
        pubkey = _ref2.pubkey,
        value = _ref2.value;
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
        min_self_delegation: min_self_delegation,
        delegator_address: delegator_address,
        validator_address: validator_address,
        pubkey: (0, _protoSigning.encodePubkey)(pubkey),
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: function toAmino(_ref3) {
      var description = _ref3.description,
        validator_address = _ref3.validator_address,
        commission_rate = _ref3.commission_rate,
        min_self_delegation = _ref3.min_self_delegation;
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        validator_address: validator_address,
        commission_rate: commission_rate,
        min_self_delegation: min_self_delegation
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var description = _ref4.description,
        validator_address = _ref4.validator_address,
        commission_rate = _ref4.commission_rate,
        min_self_delegation = _ref4.min_self_delegation;
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        validator_address: validator_address,
        commission_rate: commission_rate,
        min_self_delegation: min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: function toAmino(_ref5) {
      var delegator_address = _ref5.delegator_address,
        validator_address = _ref5.validator_address,
        amount = _ref5.amount;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address,
        amount: {
          denom: amount.denom,
          amount: _helpers.Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var delegator_address = _ref6.delegator_address,
        validator_address = _ref6.validator_address,
        amount = _ref6.amount;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: function toAmino(_ref7) {
      var delegator_address = _ref7.delegator_address,
        validator_src_address = _ref7.validator_src_address,
        validator_dst_address = _ref7.validator_dst_address,
        amount = _ref7.amount;
      return {
        delegator_address: delegator_address,
        validator_src_address: validator_src_address,
        validator_dst_address: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: _helpers.Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var delegator_address = _ref8.delegator_address,
        validator_src_address = _ref8.validator_src_address,
        validator_dst_address = _ref8.validator_dst_address,
        amount = _ref8.amount;
      return {
        delegator_address: delegator_address,
        validator_src_address: validator_src_address,
        validator_dst_address: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: function toAmino(_ref9) {
      var delegator_address = _ref9.delegator_address,
        validator_address = _ref9.validator_address,
        amount = _ref9.amount;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address,
        amount: {
          denom: amount.denom,
          amount: _helpers.Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var delegator_address = _ref10.delegator_address,
        validator_address = _ref10.validator_address,
        amount = _ref10.amount;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: function toAmino(_ref11) {
      var delegator_address = _ref11.delegator_address,
        validator_address = _ref11.validator_address,
        amount = _ref11.amount,
        creation_height = _ref11.creation_height;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address,
        amount: {
          denom: amount.denom,
          amount: _helpers.Long.fromValue(amount.amount).toString()
        },
        creation_height: creation_height.toString()
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var delegator_address = _ref12.delegator_address,
        validator_address = _ref12.validator_address,
        amount = _ref12.amount,
        creation_height = _ref12.creation_height;
      return {
        delegator_address: delegator_address,
        validator_address: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        creation_height: _helpers.Long.fromString(creation_height)
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/staking/MsgUpdateParams",
    toAmino: function toAmino(_ref13) {
      var authority = _ref13.authority,
        params = _ref13.params;
      return {
        authority: authority,
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
    fromAmino: function fromAmino(_ref14) {
      var authority = _ref14.authority,
        params = _ref14.params;
      return {
        authority: authority,
        params: {
          unbonding_time: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(params.unbonding_time) / 1000000000)),
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
exports.AminoConverter = AminoConverter;