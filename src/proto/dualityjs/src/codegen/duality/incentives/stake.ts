import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Stake records what coins are staked when by who for the purpose of
 * calculating gauge reward distributions.
 */
export interface Stake {
  /** ID is the "autoincrementing" id of the stake, assigned at creation. */
  ID: Long;
  /**
   * owner is the account originating the stake. Only the owner can withdraw
   * coins from the stake.
   */
  owner: string;
  /** start_time is the time at which the coins in the lock were staked. */
  start_time: Timestamp;
  /** coins are the tokens staked, and managed by the module account. */
  coins: Coin[];
  /**
   * start_dist_epoch is the dist epoch (defaulting to the day) at which the
   * coins in the lock were staked. This is used by distribution logic to filter
   * on stakes that have existed for longer than the distribution period (you
   * can only qualify for today's rewards if you staked your LP tokens
   * yesterday). We use int64 instead of uint64 to make testing easier.
   */
  start_dist_epoch: Long;
}
function createBaseStake(): Stake {
  return {
    ID: Long.UZERO,
    owner: "",
    start_time: Timestamp.fromPartial({}),
    coins: [],
    start_dist_epoch: Long.ZERO
  };
}
export const Stake = {
  encode(message: Stake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(message.start_time, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.start_dist_epoch.isZero()) {
      writer.uint32(40).int64(message.start_dist_epoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Stake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.start_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.start_dist_epoch = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Stake {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      start_dist_epoch: isSet(object.start_dist_epoch) ? Long.fromValue(object.start_dist_epoch) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<Stake>): Stake {
    const message = createBaseStake();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Timestamp.fromPartial(object.start_time) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.start_dist_epoch = object.start_dist_epoch !== undefined && object.start_dist_epoch !== null ? Long.fromValue(object.start_dist_epoch) : Long.ZERO;
    return message;
  }
};