import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the genesis state of the x/builder module. */

/** Params defines the parameters of the x/builder module. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseParams() {
  return {
    max_bundle_size: 0,
    escrow_account_address: "",
    reserve_fee: Coin.fromPartial({}),
    min_bid_increment: Coin.fromPartial({}),
    front_running_protection: false,
    proposer_fee: ""
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.max_bundle_size !== 0) {
      writer.uint32(8).uint32(message.max_bundle_size);
    }
    if (message.escrow_account_address !== "") {
      writer.uint32(18).string(message.escrow_account_address);
    }
    if (message.reserve_fee !== undefined) {
      Coin.encode(message.reserve_fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.min_bid_increment !== undefined) {
      Coin.encode(message.min_bid_increment, writer.uint32(34).fork()).ldelim();
    }
    if (message.front_running_protection === true) {
      writer.uint32(40).bool(message.front_running_protection);
    }
    if (message.proposer_fee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.proposer_fee, 18).atomics);
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
          message.max_bundle_size = reader.uint32();
          break;
        case 2:
          message.escrow_account_address = reader.string();
          break;
        case 3:
          message.reserve_fee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.min_bid_increment = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.front_running_protection = reader.bool();
          break;
        case 6:
          message.proposer_fee = Decimal.fromAtomics(reader.string(), 18).toString();
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
      max_bundle_size: isSet(object.max_bundle_size) ? Number(object.max_bundle_size) : 0,
      escrow_account_address: isSet(object.escrow_account_address) ? String(object.escrow_account_address) : "",
      reserve_fee: isSet(object.reserve_fee) ? Coin.fromJSON(object.reserve_fee) : undefined,
      min_bid_increment: isSet(object.min_bid_increment) ? Coin.fromJSON(object.min_bid_increment) : undefined,
      front_running_protection: isSet(object.front_running_protection) ? Boolean(object.front_running_protection) : false,
      proposer_fee: isSet(object.proposer_fee) ? String(object.proposer_fee) : ""
    };
  },
  fromPartial(object) {
    var _object$max_bundle_si, _object$escrow_accoun, _object$front_running, _object$proposer_fee;
    const message = createBaseParams();
    message.max_bundle_size = (_object$max_bundle_si = object.max_bundle_size) !== null && _object$max_bundle_si !== void 0 ? _object$max_bundle_si : 0;
    message.escrow_account_address = (_object$escrow_accoun = object.escrow_account_address) !== null && _object$escrow_accoun !== void 0 ? _object$escrow_accoun : "";
    message.reserve_fee = object.reserve_fee !== undefined && object.reserve_fee !== null ? Coin.fromPartial(object.reserve_fee) : undefined;
    message.min_bid_increment = object.min_bid_increment !== undefined && object.min_bid_increment !== null ? Coin.fromPartial(object.min_bid_increment) : undefined;
    message.front_running_protection = (_object$front_running = object.front_running_protection) !== null && _object$front_running !== void 0 ? _object$front_running : false;
    message.proposer_fee = (_object$proposer_fee = object.proposer_fee) !== null && _object$proposer_fee !== void 0 ? _object$proposer_fee : "";
    return message;
  }
};