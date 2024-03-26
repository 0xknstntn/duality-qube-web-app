import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the staking module's genesis state. */

/** LastValidatorPower required for validator set update logic. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    last_total_power: new Uint8Array(),
    last_validator_powers: [],
    validators: [],
    delegations: [],
    unbonding_delegations: [],
    redelegations: [],
    exported: false
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.last_total_power.length !== 0) {
      writer.uint32(18).bytes(message.last_total_power);
    }
    for (const v of message.last_validator_powers) {
      LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbonding_delegations) {
      UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.last_total_power = reader.bytes();
          break;
        case 3:
          message.last_validator_powers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbonding_delegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      last_total_power: isSet(object.last_total_power) ? bytesFromBase64(object.last_total_power) : new Uint8Array(),
      last_validator_powers: Array.isArray(object === null || object === void 0 ? void 0 : object.last_validator_powers) ? object.last_validator_powers.map(e => LastValidatorPower.fromJSON(e)) : [],
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(e => Delegation.fromJSON(e)) : [],
      unbonding_delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_delegations) ? object.unbonding_delegations.map(e => UnbondingDelegation.fromJSON(e)) : [],
      redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations) ? object.redelegations.map(e => Redelegation.fromJSON(e)) : [],
      exported: isSet(object.exported) ? Boolean(object.exported) : false
    };
  },
  fromPartial(object) {
    var _object$last_total_po, _object$last_validato, _object$validators, _object$delegations, _object$unbonding_del, _object$redelegations, _object$exported;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.last_total_power = (_object$last_total_po = object.last_total_power) !== null && _object$last_total_po !== void 0 ? _object$last_total_po : new Uint8Array();
    message.last_validator_powers = ((_object$last_validato = object.last_validator_powers) === null || _object$last_validato === void 0 ? void 0 : _object$last_validato.map(e => LastValidatorPower.fromPartial(e))) || [];
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => Validator.fromPartial(e))) || [];
    message.delegations = ((_object$delegations = object.delegations) === null || _object$delegations === void 0 ? void 0 : _object$delegations.map(e => Delegation.fromPartial(e))) || [];
    message.unbonding_delegations = ((_object$unbonding_del = object.unbonding_delegations) === null || _object$unbonding_del === void 0 ? void 0 : _object$unbonding_del.map(e => UnbondingDelegation.fromPartial(e))) || [];
    message.redelegations = ((_object$redelegations = object.redelegations) === null || _object$redelegations === void 0 ? void 0 : _object$redelegations.map(e => Redelegation.fromPartial(e))) || [];
    message.exported = (_object$exported = object.exported) !== null && _object$exported !== void 0 ? _object$exported : false;
    return message;
  }
};
function createBaseLastValidatorPower() {
  return {
    address: "",
    power: Long.ZERO
  };
}
export const LastValidatorPower = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64();
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
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseLastValidatorPower();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};