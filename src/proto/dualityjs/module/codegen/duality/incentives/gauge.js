import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { PairID } from "../dex/pair_id";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Gauge is an object that describes an LP incentivization plan and its state. */

/**
 * QueryCondition describes a set of staked LP positions that a gauge is
 * configured to distribute to. LP tokens qualifying for a given QueryCondition
 * must have both tick-fee and tick+fee fall within the range [startTick, endTick],
 * such that all of the tradable liquidity for the pool is within that range.
 */

function createBaseGauge() {
  return {
    id: Long.UZERO,
    is_perpetual: false,
    distribute_to: QueryCondition.fromPartial({}),
    coins: [],
    start_time: Timestamp.fromPartial({}),
    num_epochs_paid_over: Long.UZERO,
    filled_epochs: Long.UZERO,
    distributed_coins: [],
    pricing_tick: Long.ZERO
  };
}
export const Gauge = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.is_perpetual === true) {
      writer.uint32(16).bool(message.is_perpetual);
    }
    if (message.distribute_to !== undefined) {
      QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(message.start_time, writer.uint32(42).fork()).ldelim();
    }
    if (!message.num_epochs_paid_over.isZero()) {
      writer.uint32(48).uint64(message.num_epochs_paid_over);
    }
    if (!message.filled_epochs.isZero()) {
      writer.uint32(56).uint64(message.filled_epochs);
    }
    for (const v of message.distributed_coins) {
      Coin.encode(v, writer.uint32(66).fork()).ldelim();
    }
    if (!message.pricing_tick.isZero()) {
      writer.uint32(72).int64(message.pricing_tick);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.is_perpetual = reader.bool();
          break;
        case 3:
          message.distribute_to = QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.start_time = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.num_epochs_paid_over = reader.uint64();
          break;
        case 7:
          message.filled_epochs = reader.uint64();
          break;
        case 8:
          message.distributed_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pricing_tick = reader.int64();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO,
      filled_epochs: isSet(object.filled_epochs) ? Long.fromValue(object.filled_epochs) : Long.UZERO,
      distributed_coins: Array.isArray(object === null || object === void 0 ? void 0 : object.distributed_coins) ? object.distributed_coins.map(e => Coin.fromJSON(e)) : [],
      pricing_tick: isSet(object.pricing_tick) ? Long.fromValue(object.pricing_tick) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$is_perpetual, _object$coins, _object$distributed_c;
    const message = createBaseGauge();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.is_perpetual = (_object$is_perpetual = object.is_perpetual) !== null && _object$is_perpetual !== void 0 ? _object$is_perpetual : false;
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Timestamp.fromPartial(object.start_time) : undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO;
    message.filled_epochs = object.filled_epochs !== undefined && object.filled_epochs !== null ? Long.fromValue(object.filled_epochs) : Long.UZERO;
    message.distributed_coins = ((_object$distributed_c = object.distributed_coins) === null || _object$distributed_c === void 0 ? void 0 : _object$distributed_c.map(e => Coin.fromPartial(e))) || [];
    message.pricing_tick = object.pricing_tick !== undefined && object.pricing_tick !== null ? Long.fromValue(object.pricing_tick) : Long.ZERO;
    return message;
  }
};
function createBaseQueryCondition() {
  return {
    pairID: PairID.fromPartial({}),
    startTick: Long.ZERO,
    endTick: Long.ZERO
  };
}
export const QueryCondition = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== undefined) {
      PairID.encode(message.pairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.startTick.isZero()) {
      writer.uint32(16).int64(message.startTick);
    }
    if (!message.endTick.isZero()) {
      writer.uint32(24).int64(message.endTick);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = PairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTick = reader.int64();
          break;
        case 3:
          message.endTick = reader.int64();
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
      pairID: isSet(object.pairID) ? PairID.fromJSON(object.pairID) : undefined,
      startTick: isSet(object.startTick) ? Long.fromValue(object.startTick) : Long.ZERO,
      endTick: isSet(object.endTick) ? Long.fromValue(object.endTick) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseQueryCondition();
    message.pairID = object.pairID !== undefined && object.pairID !== null ? PairID.fromPartial(object.pairID) : undefined;
    message.startTick = object.startTick !== undefined && object.startTick !== null ? Long.fromValue(object.startTick) : Long.ZERO;
    message.endTick = object.endTick !== undefined && object.endTick !== null ? Long.fromValue(object.endTick) : Long.ZERO;
    return message;
  }
};