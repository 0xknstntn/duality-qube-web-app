import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Gauge } from "./gauge";
import { Stake } from "./stake";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export let GaugeStatus = /*#__PURE__*/function (GaugeStatus) {
  GaugeStatus[GaugeStatus["ACTIVE_UPCOMING"] = 0] = "ACTIVE_UPCOMING";
  GaugeStatus[GaugeStatus["ACTIVE"] = 1] = "ACTIVE";
  GaugeStatus[GaugeStatus["UPCOMING"] = 2] = "UPCOMING";
  GaugeStatus[GaugeStatus["FINISHED"] = 3] = "FINISHED";
  GaugeStatus[GaugeStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return GaugeStatus;
}({});
export function gaugeStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "ACTIVE_UPCOMING":
      return GaugeStatus.ACTIVE_UPCOMING;
    case 1:
    case "ACTIVE":
      return GaugeStatus.ACTIVE;
    case 2:
    case "UPCOMING":
      return GaugeStatus.UPCOMING;
    case 3:
    case "FINISHED":
      return GaugeStatus.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GaugeStatus.UNRECOGNIZED;
  }
}
export function gaugeStatusToJSON(object) {
  switch (object) {
    case GaugeStatus.ACTIVE_UPCOMING:
      return "ACTIVE_UPCOMING";
    case GaugeStatus.ACTIVE:
      return "ACTIVE";
    case GaugeStatus.UPCOMING:
      return "UPCOMING";
    case GaugeStatus.FINISHED:
      return "FINISHED";
    case GaugeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseGetModuleStatusRequest() {
  return {};
}
export const GetModuleStatusRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModuleStatusRequest();
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
    const message = createBaseGetModuleStatusRequest();
    return message;
  }
};
function createBaseGetModuleStatusResponse() {
  return {
    reward_coins: [],
    staked_coins: [],
    params: Params.fromPartial({})
  };
}
export const GetModuleStatusResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.reward_coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.staked_coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModuleStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.staked_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
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
      reward_coins: Array.isArray(object === null || object === void 0 ? void 0 : object.reward_coins) ? object.reward_coins.map(e => Coin.fromJSON(e)) : [],
      staked_coins: Array.isArray(object === null || object === void 0 ? void 0 : object.staked_coins) ? object.staked_coins.map(e => Coin.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    var _object$reward_coins, _object$staked_coins;
    const message = createBaseGetModuleStatusResponse();
    message.reward_coins = ((_object$reward_coins = object.reward_coins) === null || _object$reward_coins === void 0 ? void 0 : _object$reward_coins.map(e => Coin.fromPartial(e))) || [];
    message.staked_coins = ((_object$staked_coins = object.staked_coins) === null || _object$staked_coins === void 0 ? void 0 : _object$staked_coins.map(e => Coin.fromPartial(e))) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseGetGaugeByIDRequest() {
  return {
    id: Long.UZERO
  };
}
export const GetGaugeByIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseGetGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseGetGaugeByIDResponse() {
  return {
    gauge: Gauge.fromPartial({})
  };
}
export const GetGaugeByIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
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
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  }
};
function createBaseGetGaugeQualifyingValueRequest() {
  return {
    id: Long.UZERO
  };
}
export const GetGaugeQualifyingValueRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeQualifyingValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseGetGaugeQualifyingValueRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseGetGaugeQualifyingValueResponse() {
  return {
    qualifying_value: Long.UZERO
  };
}
export const GetGaugeQualifyingValueResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.qualifying_value.isZero()) {
      writer.uint32(8).uint64(message.qualifying_value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeQualifyingValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qualifying_value = reader.uint64();
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
      qualifying_value: isSet(object.qualifying_value) ? Long.fromValue(object.qualifying_value) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseGetGaugeQualifyingValueResponse();
    message.qualifying_value = object.qualifying_value !== undefined && object.qualifying_value !== null ? Long.fromValue(object.qualifying_value) : Long.UZERO;
    return message;
  }
};
function createBaseGetGaugesRequest() {
  return {
    status: 0,
    denom: ""
  };
}
export const GetGaugesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.denom = reader.string();
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
      status: isSet(object.status) ? gaugeStatusFromJSON(object.status) : -1,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object) {
    var _object$status, _object$denom;
    const message = createBaseGetGaugesRequest();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseGetGaugesResponse() {
  return {
    gauges: []
  };
}
export const GetGaugesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.gauges) {
      Gauge.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
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
      gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges) ? object.gauges.map(e => Gauge.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$gauges;
    const message = createBaseGetGaugesResponse();
    message.gauges = ((_object$gauges = object.gauges) === null || _object$gauges === void 0 ? void 0 : _object$gauges.map(e => Gauge.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGetStakeByIDRequest() {
  return {
    stake_id: Long.UZERO
  };
}
export const GetStakeByIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.stake_id.isZero()) {
      writer.uint32(8).uint64(message.stake_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake_id = reader.uint64();
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
      stake_id: isSet(object.stake_id) ? Long.fromValue(object.stake_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseGetStakeByIDRequest();
    message.stake_id = object.stake_id !== undefined && object.stake_id !== null ? Long.fromValue(object.stake_id) : Long.UZERO;
    return message;
  }
};
function createBaseGetStakeByIDResponse() {
  return {
    stake: Stake.fromPartial({})
  };
}
export const GetStakeByIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Stake.decode(reader, reader.uint32());
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
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetStakeByIDResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? Stake.fromPartial(object.stake) : undefined;
    return message;
  }
};
function createBaseGetStakesRequest() {
  return {
    owner: ""
  };
}
export const GetStakesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object) {
    var _object$owner;
    const message = createBaseGetStakesRequest();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
function createBaseGetStakesResponse() {
  return {
    stakes: []
  };
}
export const GetStakesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.stakes) {
      Stake.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(Stake.decode(reader, reader.uint32()));
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
      stakes: Array.isArray(object === null || object === void 0 ? void 0 : object.stakes) ? object.stakes.map(e => Stake.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$stakes;
    const message = createBaseGetStakesResponse();
    message.stakes = ((_object$stakes = object.stakes) === null || _object$stakes === void 0 ? void 0 : _object$stakes.map(e => Stake.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGetFutureRewardEstimateRequest() {
  return {
    owner: "",
    stake_ids: [],
    num_epochs: Long.ZERO
  };
}
export const GetFutureRewardEstimateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.stake_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.num_epochs.isZero()) {
      writer.uint32(24).int64(message.num_epochs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFutureRewardEstimateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stake_ids.push(reader.uint64());
            }
          } else {
            message.stake_ids.push(reader.uint64());
          }
          break;
        case 3:
          message.num_epochs = reader.int64();
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
      stake_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.stake_ids) ? object.stake_ids.map(e => Long.fromValue(e)) : [],
      num_epochs: isSet(object.num_epochs) ? Long.fromValue(object.num_epochs) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$owner2, _object$stake_ids;
    const message = createBaseGetFutureRewardEstimateRequest();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    message.stake_ids = ((_object$stake_ids = object.stake_ids) === null || _object$stake_ids === void 0 ? void 0 : _object$stake_ids.map(e => Long.fromValue(e))) || [];
    message.num_epochs = object.num_epochs !== undefined && object.num_epochs !== null ? Long.fromValue(object.num_epochs) : Long.ZERO;
    return message;
  }
};
function createBaseGetFutureRewardEstimateResponse() {
  return {
    coins: []
  };
}
export const GetFutureRewardEstimateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFutureRewardEstimateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins;
    const message = createBaseGetFutureRewardEstimateResponse();
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGetAccountHistoryRequest() {
  return {
    account: ""
  };
}
export const GetAccountHistoryRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object) {
    var _object$account;
    const message = createBaseGetAccountHistoryRequest();
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    return message;
  }
};
function createBaseGetAccountHistoryResponse() {
  return {
    coins: []
  };
}
export const GetAccountHistoryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins2;
    const message = createBaseGetAccountHistoryResponse();
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};