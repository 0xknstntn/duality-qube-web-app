import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
  /** GenesisState defines the genesis state of the x/builder module. */
  params: Params;
}
/** Params defines the parameters of the x/builder module. */
export interface Params {
  /**
   * max_bundle_size is the maximum number of transactions that can be bundled
   * in a single bundle.
   */
  max_bundle_size: number;
  /**
   * escrow_account_address is the address of the account that will receive a
   * portion of the bid proceeds.
   */
  escrow_account_address: string;
  /** reserve_fee specifies the bid floor for the auction. */
  reserve_fee: Coin;
  /**
   * min_bid_increment specifies the minimum amount that the next bid must be
   * greater than the previous bid.
   */
  min_bid_increment: Coin;
  /**
   * front_running_protection specifies whether front running and sandwich
   * attack protection is enabled.
   */
  front_running_protection: boolean;
  /**
   * proposer_fee defines the portion of the winning bid that goes to the block
   * proposer that proposed the block.
   */
  proposer_fee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseParams(): Params {
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
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
  fromJSON(object: any): Params {
    return {
      max_bundle_size: isSet(object.max_bundle_size) ? Number(object.max_bundle_size) : 0,
      escrow_account_address: isSet(object.escrow_account_address) ? String(object.escrow_account_address) : "",
      reserve_fee: isSet(object.reserve_fee) ? Coin.fromJSON(object.reserve_fee) : undefined,
      min_bid_increment: isSet(object.min_bid_increment) ? Coin.fromJSON(object.min_bid_increment) : undefined,
      front_running_protection: isSet(object.front_running_protection) ? Boolean(object.front_running_protection) : false,
      proposer_fee: isSet(object.proposer_fee) ? String(object.proposer_fee) : ""
    };
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.max_bundle_size = object.max_bundle_size ?? 0;
    message.escrow_account_address = object.escrow_account_address ?? "";
    message.reserve_fee = object.reserve_fee !== undefined && object.reserve_fee !== null ? Coin.fromPartial(object.reserve_fee) : undefined;
    message.min_bid_increment = object.min_bid_increment !== undefined && object.min_bid_increment !== null ? Coin.fromPartial(object.min_bid_increment) : undefined;
    message.front_running_protection = object.front_running_protection ?? false;
    message.proposer_fee = object.proposer_fee ?? "";
    return message;
  }
};