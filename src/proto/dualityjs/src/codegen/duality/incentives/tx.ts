import { QueryCondition } from "./gauge";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  is_perpetual: boolean;
  /** owner is the address of gauge creator, should be the module authority */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distribute_to: QueryCondition;
  /** coins are coin(s) to be distributed by the gauge */
  coins: Coin[];
  /** start_time is the distribution start time */
  start_time: Timestamp;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over: Long;
  /** pricing_tick is the price that liquidity within the gauge range will be priced at */
  pricing_tick: Long;
}
export interface MsgCreateGaugeResponse {}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gauge_id: Long;
  /** rewards are the coin(s) to add to gauge */
  rewards: Coin[];
}
export interface MsgAddToGaugeResponse {}
export interface MsgStake {
  owner: string;
  coins: Coin[];
}
export interface MsgStakeResponse {
  ID: Long;
}
export interface MsgUnstake {
  owner: string;
  /** If unstake is left empty, this is interpreted as "unstake all" */
  unstakes: MsgUnstake_UnstakeDescriptor[];
}
export interface MsgUnstake_UnstakeDescriptor {
  ID: Long;
  coins: Coin[];
}
export interface MsgUnstakeResponse {}
function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    is_perpetual: false,
    owner: "",
    distribute_to: QueryCondition.fromPartial({}),
    coins: [],
    start_time: Timestamp.fromPartial({}),
    num_epochs_paid_over: Long.UZERO,
    pricing_tick: Long.ZERO
  };
}
export const MsgCreateGauge = {
  encode(message: MsgCreateGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.is_perpetual === true) {
      writer.uint32(8).bool(message.is_perpetual);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.distribute_to !== undefined) {
      QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(message.start_time, writer.uint32(42).fork()).ldelim();
    }
    if (!message.num_epochs_paid_over.isZero()) {
      writer.uint32(48).uint64(message.num_epochs_paid_over);
    }
    if (!message.pricing_tick.isZero()) {
      writer.uint32(56).int64(message.pricing_tick);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.is_perpetual = reader.bool();
          break;
        case 2:
          message.owner = reader.string();
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
          message.num_epochs_paid_over = (reader.uint64() as Long);
          break;
        case 7:
          message.pricing_tick = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGauge {
    return {
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO,
      pricing_tick: isSet(object.pricing_tick) ? Long.fromValue(object.pricing_tick) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.is_perpetual = object.is_perpetual ?? false;
    message.owner = object.owner ?? "";
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Timestamp.fromPartial(object.start_time) : undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO;
    message.pricing_tick = object.pricing_tick !== undefined && object.pricing_tick !== null ? Long.fromValue(object.pricing_tick) : Long.ZERO;
    return message;
  }
};
function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}
export const MsgCreateGaugeResponse = {
  encode(_: MsgCreateGaugeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateGaugeResponse {
    return {};
  },
  fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  }
};
function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gauge_id: Long.UZERO,
    rewards: []
  };
}
export const MsgAddToGauge = {
  encode(message: MsgAddToGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.gauge_id.isZero()) {
      writer.uint32(16).uint64(message.gauge_id);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.gauge_id = (reader.uint64() as Long);
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToGauge {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      gauge_id: isSet(object.gauge_id) ? Long.fromValue(object.gauge_id) : Long.UZERO,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? Long.fromValue(object.gauge_id) : Long.UZERO;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgAddToGaugeResponse(): MsgAddToGaugeResponse {
  return {};
}
export const MsgAddToGaugeResponse = {
  encode(_: MsgAddToGaugeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddToGaugeResponse {
    return {};
  },
  fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  }
};
function createBaseMsgStake(): MsgStake {
  return {
    owner: "",
    coins: []
  };
}
export const MsgStake = {
  encode(message: MsgStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStake {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.owner = object.owner ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    ID: Long.UZERO
  };
}
export const MsgStakeResponse = {
  encode(message: MsgStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeResponse {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUnstake(): MsgUnstake {
  return {
    owner: "",
    unstakes: []
  };
}
export const MsgUnstake = {
  encode(message: MsgUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.unstakes) {
      MsgUnstake_UnstakeDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.unstakes.push(MsgUnstake_UnstakeDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstake {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      unstakes: Array.isArray(object?.unstakes) ? object.unstakes.map((e: any) => MsgUnstake_UnstakeDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.owner = object.owner ?? "";
    message.unstakes = object.unstakes?.map(e => MsgUnstake_UnstakeDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUnstake_UnstakeDescriptor(): MsgUnstake_UnstakeDescriptor {
  return {
    ID: Long.UZERO,
    coins: []
  };
}
export const MsgUnstake_UnstakeDescriptor = {
  encode(message: MsgUnstake_UnstakeDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake_UnstakeDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake_UnstakeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstake_UnstakeDescriptor {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgUnstake_UnstakeDescriptor>): MsgUnstake_UnstakeDescriptor {
    const message = createBaseMsgUnstake_UnstakeDescriptor();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {};
}
export const MsgUnstakeResponse = {
  encode(_: MsgUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUnstakeResponse {
    return {};
  },
  fromPartial(_: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    return message;
  }
};