import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
/** Minter represents the minting state. */

/** Params defines the parameters for the x/mint module. */

function createBaseMinter() {
  return {
    inflation: "",
    annual_provisions: ""
  };
}
export const Minter = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.inflation !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annual_provisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annual_provisions, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annual_provisions = Decimal.fromAtomics(reader.string(), 18).toString();
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
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      annual_provisions: isSet(object.annual_provisions) ? String(object.annual_provisions) : ""
    };
  },
  fromPartial(object) {
    var _object$inflation, _object$annual_provis;
    const message = createBaseMinter();
    message.inflation = (_object$inflation = object.inflation) !== null && _object$inflation !== void 0 ? _object$inflation : "";
    message.annual_provisions = (_object$annual_provis = object.annual_provisions) !== null && _object$annual_provis !== void 0 ? _object$annual_provis : "";
    return message;
  }
};
function createBaseParams() {
  return {
    mint_denom: "",
    inflation_rate_change: "",
    inflation_max: "",
    inflation_min: "",
    goal_bonded: "",
    blocks_per_year: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.mint_denom !== "") {
      writer.uint32(10).string(message.mint_denom);
    }
    if (message.inflation_rate_change !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflation_rate_change, 18).atomics);
    }
    if (message.inflation_max !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflation_max, 18).atomics);
    }
    if (message.inflation_min !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflation_min, 18).atomics);
    }
    if (message.goal_bonded !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.goal_bonded, 18).atomics);
    }
    if (!message.blocks_per_year.isZero()) {
      writer.uint32(48).uint64(message.blocks_per_year);
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
          message.mint_denom = reader.string();
          break;
        case 2:
          message.inflation_rate_change = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflation_max = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflation_min = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goal_bonded = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocks_per_year = reader.uint64();
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
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      inflation_rate_change: isSet(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
      inflation_max: isSet(object.inflation_max) ? String(object.inflation_max) : "",
      inflation_min: isSet(object.inflation_min) ? String(object.inflation_min) : "",
      goal_bonded: isSet(object.goal_bonded) ? String(object.goal_bonded) : "",
      blocks_per_year: isSet(object.blocks_per_year) ? Long.fromValue(object.blocks_per_year) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$mint_denom, _object$inflation_rat, _object$inflation_max, _object$inflation_min, _object$goal_bonded;
    const message = createBaseParams();
    message.mint_denom = (_object$mint_denom = object.mint_denom) !== null && _object$mint_denom !== void 0 ? _object$mint_denom : "";
    message.inflation_rate_change = (_object$inflation_rat = object.inflation_rate_change) !== null && _object$inflation_rat !== void 0 ? _object$inflation_rat : "";
    message.inflation_max = (_object$inflation_max = object.inflation_max) !== null && _object$inflation_max !== void 0 ? _object$inflation_max : "";
    message.inflation_min = (_object$inflation_min = object.inflation_min) !== null && _object$inflation_min !== void 0 ? _object$inflation_min : "";
    message.goal_bonded = (_object$goal_bonded = object.goal_bonded) !== null && _object$goal_bonded !== void 0 ? _object$goal_bonded : "";
    message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? Long.fromValue(object.blocks_per_year) : Long.UZERO;
    return message;
  }
};