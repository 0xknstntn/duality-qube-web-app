import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
/** BondStatus is the status of a validator. */
export let BondStatus = /*#__PURE__*/function (BondStatus) {
  BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BondStatus;
}({});
export function bondStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object) {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Infraction indicates the infraction a validator commited. */
export let Infraction = /*#__PURE__*/function (Infraction) {
  Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
  Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
  Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
  Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Infraction;
}({});
export function infractionFromJSON(object) {
  switch (object) {
    case 0:
    case "INFRACTION_UNSPECIFIED":
      return Infraction.INFRACTION_UNSPECIFIED;
    case 1:
    case "INFRACTION_DOUBLE_SIGN":
      return Infraction.INFRACTION_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_DOWNTIME":
      return Infraction.INFRACTION_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Infraction.UNRECOGNIZED;
  }
}
export function infractionToJSON(object) {
  switch (object) {
    case Infraction.INFRACTION_UNSPECIFIED:
      return "INFRACTION_UNSPECIFIED";
    case Infraction.INFRACTION_DOUBLE_SIGN:
      return "INFRACTION_DOUBLE_SIGN";
    case Infraction.INFRACTION_DOWNTIME:
      return "INFRACTION_DOWNTIME";
    case Infraction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */

/** Commission defines commission parameters for a given validator. */

/** Description defines a validator description. */

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */

/** ValAddresses defines a repeated set of validator addresses. */

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */

/** DVPairs defines an array of DVPair objects. */

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */

/** DVVTriplets defines an array of DVVTriplet objects. */

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */

/** RedelegationEntry defines a redelegation object with relevant metadata. */

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */

/** Params defines the parameters for the x/staking module. */

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */

/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 */

function createBaseHistoricalInfo() {
  return {
    header: Header.fromPartial({}),
    valset: []
  };
}
export const HistoricalInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object === null || object === void 0 ? void 0 : object.valset) ? object.valset.map(e => Validator.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$valset;
    const message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.valset = ((_object$valset = object.valset) === null || _object$valset === void 0 ? void 0 : _object$valset.map(e => Validator.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommissionRates() {
  return {
    rate: "",
    max_rate: "",
    max_change_rate: ""
  };
}
export const CommissionRates = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.max_rate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.max_rate, 18).atomics);
    }
    if (message.max_change_rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.max_change_rate, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.max_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.max_change_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      max_rate: isSet(object.max_rate) ? String(object.max_rate) : "",
      max_change_rate: isSet(object.max_change_rate) ? String(object.max_change_rate) : ""
    };
  },
  fromPartial(object) {
    var _object$rate, _object$max_rate, _object$max_change_ra;
    const message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) !== null && _object$rate !== void 0 ? _object$rate : "";
    message.max_rate = (_object$max_rate = object.max_rate) !== null && _object$max_rate !== void 0 ? _object$max_rate : "";
    message.max_change_rate = (_object$max_change_ra = object.max_change_rate) !== null && _object$max_change_ra !== void 0 ? _object$max_change_ra : "";
    return message;
  }
};
function createBaseCommission() {
  return {
    commission_rates: CommissionRates.fromPartial({}),
    update_time: Timestamp.fromPartial({})
  };
}
export const Commission = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.commission_rates !== undefined) {
      CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(message.update_time, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission_rates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.update_time = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      commission_rates: isSet(object.commission_rates) ? CommissionRates.fromJSON(object.commission_rates) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseCommission();
    message.commission_rates = object.commission_rates !== undefined && object.commission_rates !== null ? CommissionRates.fromPartial(object.commission_rates) : undefined;
    message.update_time = object.update_time !== undefined && object.update_time !== null ? Timestamp.fromPartial(object.update_time) : undefined;
    return message;
  }
};
function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    security_contact: "",
    details: ""
  };
}
export const Description = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.security_contact !== "") {
      writer.uint32(34).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.security_contact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$security_cont, _object$details;
    const message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) !== null && _object$identity !== void 0 ? _object$identity : "";
    message.website = (_object$website = object.website) !== null && _object$website !== void 0 ? _object$website : "";
    message.security_contact = (_object$security_cont = object.security_contact) !== null && _object$security_cont !== void 0 ? _object$security_cont : "";
    message.details = (_object$details = object.details) !== null && _object$details !== void 0 ? _object$details : "";
    return message;
  }
};
function createBaseValidator() {
  return {
    operator_address: "",
    consensus_pubkey: Any.fromPartial({}),
    jailed: false,
    status: 0,
    tokens: "",
    delegator_shares: "",
    description: Description.fromPartial({}),
    unbonding_height: Long.ZERO,
    unbonding_time: Timestamp.fromPartial({}),
    commission: Commission.fromPartial({}),
    min_self_delegation: "",
    unbonding_on_hold_ref_count: Long.ZERO,
    unbonding_ids: []
  };
}
export const Validator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    if (message.consensus_pubkey !== undefined) {
      Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegator_shares !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.delegator_shares, 18).atomics);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (!message.unbonding_height.isZero()) {
      writer.uint32(64).int64(message.unbonding_height);
    }
    if (message.unbonding_time !== undefined) {
      Timestamp.encode(message.unbonding_time, writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(90).string(message.min_self_delegation);
    }
    if (!message.unbonding_on_hold_ref_count.isZero()) {
      writer.uint32(96).int64(message.unbonding_on_hold_ref_count);
    }
    writer.uint32(106).fork();
    for (const v of message.unbonding_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;
        case 2:
          message.consensus_pubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegator_shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbonding_height = reader.int64();
          break;
        case 9:
          message.unbonding_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.min_self_delegation = reader.string();
          break;
        case 12:
          message.unbonding_on_hold_ref_count = reader.int64();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbonding_ids.push(reader.uint64());
            }
          } else {
            message.unbonding_ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
      consensus_pubkey: isSet(object.consensus_pubkey) ? Any.fromJSON(object.consensus_pubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      unbonding_height: isSet(object.unbonding_height) ? Long.fromValue(object.unbonding_height) : Long.ZERO,
      unbonding_time: isSet(object.unbonding_time) ? fromJsonTimestamp(object.unbonding_time) : undefined,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO,
      unbonding_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_ids) ? object.unbonding_ids.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$operator_addr, _object$jailed, _object$status, _object$tokens, _object$delegator_sha, _object$min_self_dele, _object$unbonding_ids;
    const message = createBaseValidator();
    message.operator_address = (_object$operator_addr = object.operator_address) !== null && _object$operator_addr !== void 0 ? _object$operator_addr : "";
    message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? Any.fromPartial(object.consensus_pubkey) : undefined;
    message.jailed = (_object$jailed = object.jailed) !== null && _object$jailed !== void 0 ? _object$jailed : false;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tokens = (_object$tokens = object.tokens) !== null && _object$tokens !== void 0 ? _object$tokens : "";
    message.delegator_shares = (_object$delegator_sha = object.delegator_shares) !== null && _object$delegator_sha !== void 0 ? _object$delegator_sha : "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? Long.fromValue(object.unbonding_height) : Long.ZERO;
    message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? Timestamp.fromPartial(object.unbonding_time) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.min_self_delegation = (_object$min_self_dele = object.min_self_delegation) !== null && _object$min_self_dele !== void 0 ? _object$min_self_dele : "";
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO;
    message.unbonding_ids = ((_object$unbonding_ids = object.unbonding_ids) === null || _object$unbonding_ids === void 0 ? void 0 : _object$unbonding_ids.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseValAddresses() {
  return {
    addresses: []
  };
}
export const ValAddresses = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$addresses;
    const message = createBaseValAddresses();
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(e => e)) || [];
    return message;
  }
};
function createBaseDVPair() {
  return {
    delegator_address: "",
    validator_address: ""
  };
}
export const DVPair = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add, _object$validator_add;
    const message = createBaseDVPair();
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    return message;
  }
};
function createBaseDVPairs() {
  return {
    pairs: []
  };
}
export const DVPairs = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pairs) {
      DVPair.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(e => DVPair.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$pairs;
    const message = createBaseDVPairs();
    message.pairs = ((_object$pairs = object.pairs) === null || _object$pairs === void 0 ? void 0 : _object$pairs.map(e => DVPair.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDVVTriplet() {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: ""
  };
}
export const DVVTriplet = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add2, _object$validator_src, _object$validator_dst;
    const message = createBaseDVVTriplet();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_src_address = (_object$validator_src = object.validator_src_address) !== null && _object$validator_src !== void 0 ? _object$validator_src : "";
    message.validator_dst_address = (_object$validator_dst = object.validator_dst_address) !== null && _object$validator_dst !== void 0 ? _object$validator_dst : "";
    return message;
  }
};
function createBaseDVVTriplets() {
  return {
    triplets: []
  };
}
export const DVVTriplets = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.triplets) {
      DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      triplets: Array.isArray(object === null || object === void 0 ? void 0 : object.triplets) ? object.triplets.map(e => DVVTriplet.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$triplets;
    const message = createBaseDVVTriplets();
    message.triplets = ((_object$triplets = object.triplets) === null || _object$triplets === void 0 ? void 0 : _object$triplets.map(e => DVVTriplet.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDelegation() {
  return {
    delegator_address: "",
    validator_address: "",
    shares: ""
  };
}
export const Delegation = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      shares: isSet(object.shares) ? String(object.shares) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add3, _object$validator_add2, _object$shares;
    const message = createBaseDelegation();
    message.delegator_address = (_object$delegator_add3 = object.delegator_address) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.shares = (_object$shares = object.shares) !== null && _object$shares !== void 0 ? _object$shares : "";
    return message;
  }
};
function createBaseUnbondingDelegation() {
  return {
    delegator_address: "",
    validator_address: "",
    entries: []
  };
}
export const UnbondingDelegation = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(e => UnbondingDelegationEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$delegator_add4, _object$validator_add3, _object$entries;
    const message = createBaseUnbondingDelegation();
    message.delegator_address = (_object$delegator_add4 = object.delegator_address) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(e => UnbondingDelegationEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseUnbondingDelegationEntry() {
  return {
    creation_height: Long.ZERO,
    completion_time: Timestamp.fromPartial({}),
    initial_balance: "",
    balance: "",
    unbonding_id: Long.UZERO,
    unbonding_on_hold_ref_count: Long.ZERO
  };
}
export const UnbondingDelegationEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.creation_height.isZero()) {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(message.completion_time, writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (!message.unbonding_id.isZero()) {
      writer.uint32(40).uint64(message.unbonding_id);
    }
    if (!message.unbonding_on_hold_ref_count.isZero()) {
      writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;
        case 2:
          message.completion_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initial_balance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbonding_id = reader.uint64();
          break;
        case 6:
          message.unbonding_on_hold_ref_count = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      creation_height: isSet(object.creation_height) ? Long.fromValue(object.creation_height) : Long.ZERO,
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      unbonding_id: isSet(object.unbonding_id) ? Long.fromValue(object.unbonding_id) : Long.UZERO,
      unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$initial_balan, _object$balance;
    const message = createBaseUnbondingDelegationEntry();
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? Long.fromValue(object.creation_height) : Long.ZERO;
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? Timestamp.fromPartial(object.completion_time) : undefined;
    message.initial_balance = (_object$initial_balan = object.initial_balance) !== null && _object$initial_balan !== void 0 ? _object$initial_balan : "";
    message.balance = (_object$balance = object.balance) !== null && _object$balance !== void 0 ? _object$balance : "";
    message.unbonding_id = object.unbonding_id !== undefined && object.unbonding_id !== null ? Long.fromValue(object.unbonding_id) : Long.UZERO;
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO;
    return message;
  }
};
function createBaseRedelegationEntry() {
  return {
    creation_height: Long.ZERO,
    completion_time: Timestamp.fromPartial({}),
    initial_balance: "",
    shares_dst: "",
    unbonding_id: Long.UZERO,
    unbonding_on_hold_ref_count: Long.ZERO
  };
}
export const RedelegationEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.creation_height.isZero()) {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(message.completion_time, writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.shares_dst !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.shares_dst, 18).atomics);
    }
    if (!message.unbonding_id.isZero()) {
      writer.uint32(40).uint64(message.unbonding_id);
    }
    if (!message.unbonding_on_hold_ref_count.isZero()) {
      writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;
        case 2:
          message.completion_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initial_balance = reader.string();
          break;
        case 4:
          message.shares_dst = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.unbonding_id = reader.uint64();
          break;
        case 6:
          message.unbonding_on_hold_ref_count = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      creation_height: isSet(object.creation_height) ? Long.fromValue(object.creation_height) : Long.ZERO,
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      shares_dst: isSet(object.shares_dst) ? String(object.shares_dst) : "",
      unbonding_id: isSet(object.unbonding_id) ? Long.fromValue(object.unbonding_id) : Long.UZERO,
      unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$initial_balan2, _object$shares_dst;
    const message = createBaseRedelegationEntry();
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? Long.fromValue(object.creation_height) : Long.ZERO;
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? Timestamp.fromPartial(object.completion_time) : undefined;
    message.initial_balance = (_object$initial_balan2 = object.initial_balance) !== null && _object$initial_balan2 !== void 0 ? _object$initial_balan2 : "";
    message.shares_dst = (_object$shares_dst = object.shares_dst) !== null && _object$shares_dst !== void 0 ? _object$shares_dst : "";
    message.unbonding_id = object.unbonding_id !== undefined && object.unbonding_id !== null ? Long.fromValue(object.unbonding_id) : Long.UZERO;
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO;
    return message;
  }
};
function createBaseRedelegation() {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    entries: []
  };
}
export const Redelegation = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(e => RedelegationEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$delegator_add5, _object$validator_src2, _object$validator_dst2, _object$entries2;
    const message = createBaseRedelegation();
    message.delegator_address = (_object$delegator_add5 = object.delegator_address) !== null && _object$delegator_add5 !== void 0 ? _object$delegator_add5 : "";
    message.validator_src_address = (_object$validator_src2 = object.validator_src_address) !== null && _object$validator_src2 !== void 0 ? _object$validator_src2 : "";
    message.validator_dst_address = (_object$validator_dst2 = object.validator_dst_address) !== null && _object$validator_dst2 !== void 0 ? _object$validator_dst2 : "";
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(e => RedelegationEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    unbonding_time: Duration.fromPartial({}),
    max_validators: 0,
    max_entries: 0,
    historical_entries: 0,
    bond_denom: "",
    min_commission_rate: ""
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.unbonding_time !== undefined) {
      Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_validators !== 0) {
      writer.uint32(16).uint32(message.max_validators);
    }
    if (message.max_entries !== 0) {
      writer.uint32(24).uint32(message.max_entries);
    }
    if (message.historical_entries !== 0) {
      writer.uint32(32).uint32(message.historical_entries);
    }
    if (message.bond_denom !== "") {
      writer.uint32(42).string(message.bond_denom);
    }
    if (message.min_commission_rate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.min_commission_rate, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_time = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.max_validators = reader.uint32();
          break;
        case 3:
          message.max_entries = reader.uint32();
          break;
        case 4:
          message.historical_entries = reader.uint32();
          break;
        case 5:
          message.bond_denom = reader.string();
          break;
        case 6:
          message.min_commission_rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      unbonding_time: isSet(object.unbonding_time) ? Duration.fromJSON(object.unbonding_time) : undefined,
      max_validators: isSet(object.max_validators) ? Number(object.max_validators) : 0,
      max_entries: isSet(object.max_entries) ? Number(object.max_entries) : 0,
      historical_entries: isSet(object.historical_entries) ? Number(object.historical_entries) : 0,
      bond_denom: isSet(object.bond_denom) ? String(object.bond_denom) : "",
      min_commission_rate: isSet(object.min_commission_rate) ? String(object.min_commission_rate) : ""
    };
  },
  fromPartial(object) {
    var _object$max_validator, _object$max_entries, _object$historical_en, _object$bond_denom, _object$min_commissio;
    const message = createBaseParams();
    message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? Duration.fromPartial(object.unbonding_time) : undefined;
    message.max_validators = (_object$max_validator = object.max_validators) !== null && _object$max_validator !== void 0 ? _object$max_validator : 0;
    message.max_entries = (_object$max_entries = object.max_entries) !== null && _object$max_entries !== void 0 ? _object$max_entries : 0;
    message.historical_entries = (_object$historical_en = object.historical_entries) !== null && _object$historical_en !== void 0 ? _object$historical_en : 0;
    message.bond_denom = (_object$bond_denom = object.bond_denom) !== null && _object$bond_denom !== void 0 ? _object$bond_denom : "";
    message.min_commission_rate = (_object$min_commissio = object.min_commission_rate) !== null && _object$min_commissio !== void 0 ? _object$min_commissio : "";
    return message;
  }
};
function createBaseDelegationResponse() {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({})
  };
}
export const DelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseRedelegationEntryResponse() {
  return {
    redelegation_entry: RedelegationEntry.fromPartial({}),
    balance: ""
  };
}
export const RedelegationEntryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.redelegation_entry !== undefined) {
      RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      redelegation_entry: isSet(object.redelegation_entry) ? RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  fromPartial(object) {
    var _object$balance2;
    const message = createBaseRedelegationEntryResponse();
    message.redelegation_entry = object.redelegation_entry !== undefined && object.redelegation_entry !== null ? RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
    message.balance = (_object$balance2 = object.balance) !== null && _object$balance2 !== void 0 ? _object$balance2 : "";
    return message;
  }
};
function createBaseRedelegationResponse() {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: []
  };
}
export const RedelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(e => RedelegationEntryResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$entries3;
    const message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = ((_object$entries3 = object.entries) === null || _object$entries3 === void 0 ? void 0 : _object$entries3.map(e => RedelegationEntryResponse.fromPartial(e))) || [];
    return message;
  }
};
function createBasePool() {
  return {
    not_bonded_tokens: "",
    bonded_tokens: ""
  };
}
export const Pool = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.not_bonded_tokens !== "") {
      writer.uint32(10).string(message.not_bonded_tokens);
    }
    if (message.bonded_tokens !== "") {
      writer.uint32(18).string(message.bonded_tokens);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.not_bonded_tokens = reader.string();
          break;
        case 2:
          message.bonded_tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      not_bonded_tokens: isSet(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
      bonded_tokens: isSet(object.bonded_tokens) ? String(object.bonded_tokens) : ""
    };
  },
  fromPartial(object) {
    var _object$not_bonded_to, _object$bonded_tokens;
    const message = createBasePool();
    message.not_bonded_tokens = (_object$not_bonded_to = object.not_bonded_tokens) !== null && _object$not_bonded_to !== void 0 ? _object$not_bonded_to : "";
    message.bonded_tokens = (_object$bonded_tokens = object.bonded_tokens) !== null && _object$bonded_tokens !== void 0 ? _object$bonded_tokens : "";
    return message;
  }
};
function createBaseValidatorUpdates() {
  return {
    updates: []
  };
}
export const ValidatorUpdates = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      updates: Array.isArray(object === null || object === void 0 ? void 0 : object.updates) ? object.updates.map(e => ValidatorUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$updates;
    const message = createBaseValidatorUpdates();
    message.updates = ((_object$updates = object.updates) === null || _object$updates === void 0 ? void 0 : _object$updates.map(e => ValidatorUpdate.fromPartial(e))) || [];
    return message;
  }
};