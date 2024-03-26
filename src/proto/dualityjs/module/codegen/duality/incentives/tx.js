import { QueryCondition } from "./gauge";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateGauge creates a gague to distribute rewards to users */

/** MsgAddToGauge adds coins to a previously created gauge */

function createBaseMsgCreateGauge() {
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
  encode(message, writer = _m0.Writer.create()) {
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
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
  decode(input, length) {
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
          message.num_epochs_paid_over = reader.uint64();
          break;
        case 7:
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
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO,
      pricing_tick: isSet(object.pricing_tick) ? Long.fromValue(object.pricing_tick) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$is_perpetual, _object$owner, _object$coins;
    const message = createBaseMsgCreateGauge();
    message.is_perpetual = (_object$is_perpetual = object.is_perpetual) !== null && _object$is_perpetual !== void 0 ? _object$is_perpetual : false;
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Timestamp.fromPartial(object.start_time) : undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO;
    message.pricing_tick = object.pricing_tick !== undefined && object.pricing_tick !== null ? Long.fromValue(object.pricing_tick) : Long.ZERO;
    return message;
  }
};
function createBaseMsgCreateGaugeResponse() {
  return {};
}
export const MsgCreateGaugeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  }
};
function createBaseMsgAddToGauge() {
  return {
    owner: "",
    gauge_id: Long.UZERO,
    rewards: []
  };
}
export const MsgAddToGauge = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.gauge_id.isZero()) {
      writer.uint32(16).uint64(message.gauge_id);
    }
    for (const v of message.rewards) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
          message.gauge_id = reader.uint64();
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      gauge_id: isSet(object.gauge_id) ? Long.fromValue(object.gauge_id) : Long.UZERO,
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$owner2, _object$rewards;
    const message = createBaseMsgAddToGauge();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? Long.fromValue(object.gauge_id) : Long.UZERO;
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgAddToGaugeResponse() {
  return {};
}
export const MsgAddToGaugeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  }
};
function createBaseMsgStake() {
  return {
    owner: "",
    coins: []
  };
}
export const MsgStake = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$owner3, _object$coins2;
    const message = createBaseMsgStake();
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgStakeResponse() {
  return {
    ID: Long.UZERO
  };
}
export const MsgStakeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
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
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseMsgStakeResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUnstake() {
  return {
    owner: "",
    unstakes: []
  };
}
export const MsgUnstake = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.unstakes) {
      MsgUnstake_UnstakeDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      unstakes: Array.isArray(object === null || object === void 0 ? void 0 : object.unstakes) ? object.unstakes.map(e => MsgUnstake_UnstakeDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$owner4, _object$unstakes;
    const message = createBaseMsgUnstake();
    message.owner = (_object$owner4 = object.owner) !== null && _object$owner4 !== void 0 ? _object$owner4 : "";
    message.unstakes = ((_object$unstakes = object.unstakes) === null || _object$unstakes === void 0 ? void 0 : _object$unstakes.map(e => MsgUnstake_UnstakeDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgUnstake_UnstakeDescriptor() {
  return {
    ID: Long.UZERO,
    coins: []
  };
}
export const MsgUnstake_UnstakeDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake_UnstakeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
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
  fromJSON(object) {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins3;
    const message = createBaseMsgUnstake_UnstakeDescriptor();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = ((_object$coins3 = object.coins) === null || _object$coins3 === void 0 ? void 0 : _object$coins3.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgUnstakeResponse() {
  return {};
}
export const MsgUnstakeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgUnstakeResponse();
    return message;
  }
};