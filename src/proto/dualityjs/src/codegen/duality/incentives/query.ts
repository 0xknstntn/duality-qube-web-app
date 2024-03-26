import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Gauge } from "./gauge";
import { Stake } from "./stake";
import { Long, DeepPartial, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum GaugeStatus {
  ACTIVE_UPCOMING = 0,
  ACTIVE = 1,
  UPCOMING = 2,
  FINISHED = 3,
  UNRECOGNIZED = -1,
}
export function gaugeStatusFromJSON(object: any): GaugeStatus {
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
export function gaugeStatusToJSON(object: GaugeStatus): string {
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
export interface GetModuleStatusRequest {}
export interface GetModuleStatusResponse {
  /** Coins that have yet to be distributed */
  reward_coins: Coin[];
  staked_coins: Coin[];
  params: Params;
}
export interface GetGaugeByIDRequest {
  /** Gague ID being queried */
  id: Long;
}
export interface GetGaugeByIDResponse {
  /** Gauge that corresponds to provided gague ID */
  gauge: Gauge;
}
export interface GetGaugeQualifyingValueRequest {
  /** Gague ID being queried */
  id: Long;
}
export interface GetGaugeQualifyingValueResponse {
  /** The amount of value at the gauge's pricing tick currently qualifying for the gauge. */
  qualifying_value: Long;
}
export interface GetGaugesRequest {
  status: GaugeStatus;
  denom: string;
}
export interface GetGaugesResponse {
  /** Upcoming and active gauges */
  gauges: Gauge[];
}
export interface GetStakeByIDRequest {
  stake_id: Long;
}
export interface GetStakeByIDResponse {
  stake: Stake;
}
export interface GetStakesRequest {
  owner: string;
}
export interface GetStakesResponse {
  stakes: Stake[];
}
export interface GetFutureRewardEstimateRequest {
  /** Address that is being queried for future estimated rewards */
  owner: string;
  /** Stake IDs included in future reward estimation */
  stake_ids: Long[];
  /**
   * Determines upper time limit of reward estimation
   * reward estimation goes up to current_epoch + num_epochs
   */
  num_epochs: Long;
}
export interface GetFutureRewardEstimateResponse {
  /**
   * Estimated coin rewards that will be recieved at provided address
   * from specified locks between current time and end epoch
   */
  coins: Coin[];
}
export interface GetAccountHistoryRequest {
  /** Address that is being queried for account history */
  account: string;
}
export interface GetAccountHistoryResponse {
  /** Gauge rewards that have been distributed to this address to date */
  coins: Coin[];
}
function createBaseGetModuleStatusRequest(): GetModuleStatusRequest {
  return {};
}
export const GetModuleStatusRequest = {
  encode(_: GetModuleStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetModuleStatusRequest {
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
  fromJSON(_: any): GetModuleStatusRequest {
    return {};
  },
  fromPartial(_: DeepPartial<GetModuleStatusRequest>): GetModuleStatusRequest {
    const message = createBaseGetModuleStatusRequest();
    return message;
  }
};
function createBaseGetModuleStatusResponse(): GetModuleStatusResponse {
  return {
    reward_coins: [],
    staked_coins: [],
    params: Params.fromPartial({})
  };
}
export const GetModuleStatusResponse = {
  encode(message: GetModuleStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reward_coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.staked_coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetModuleStatusResponse {
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
  fromJSON(object: any): GetModuleStatusResponse {
    return {
      reward_coins: Array.isArray(object?.reward_coins) ? object.reward_coins.map((e: any) => Coin.fromJSON(e)) : [],
      staked_coins: Array.isArray(object?.staked_coins) ? object.staked_coins.map((e: any) => Coin.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: DeepPartial<GetModuleStatusResponse>): GetModuleStatusResponse {
    const message = createBaseGetModuleStatusResponse();
    message.reward_coins = object.reward_coins?.map(e => Coin.fromPartial(e)) || [];
    message.staked_coins = object.staked_coins?.map(e => Coin.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseGetGaugeByIDRequest(): GetGaugeByIDRequest {
  return {
    id: Long.UZERO
  };
}
export const GetGaugeByIDRequest = {
  encode(message: GetGaugeByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetGaugeByIDRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<GetGaugeByIDRequest>): GetGaugeByIDRequest {
    const message = createBaseGetGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseGetGaugeByIDResponse(): GetGaugeByIDResponse {
  return {
    gauge: Gauge.fromPartial({})
  };
}
export const GetGaugeByIDResponse = {
  encode(message: GetGaugeByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeByIDResponse {
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
  fromJSON(object: any): GetGaugeByIDResponse {
    return {
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },
  fromPartial(object: DeepPartial<GetGaugeByIDResponse>): GetGaugeByIDResponse {
    const message = createBaseGetGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  }
};
function createBaseGetGaugeQualifyingValueRequest(): GetGaugeQualifyingValueRequest {
  return {
    id: Long.UZERO
  };
}
export const GetGaugeQualifyingValueRequest = {
  encode(message: GetGaugeQualifyingValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeQualifyingValueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeQualifyingValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetGaugeQualifyingValueRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<GetGaugeQualifyingValueRequest>): GetGaugeQualifyingValueRequest {
    const message = createBaseGetGaugeQualifyingValueRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseGetGaugeQualifyingValueResponse(): GetGaugeQualifyingValueResponse {
  return {
    qualifying_value: Long.UZERO
  };
}
export const GetGaugeQualifyingValueResponse = {
  encode(message: GetGaugeQualifyingValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.qualifying_value.isZero()) {
      writer.uint32(8).uint64(message.qualifying_value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeQualifyingValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugeQualifyingValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qualifying_value = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetGaugeQualifyingValueResponse {
    return {
      qualifying_value: isSet(object.qualifying_value) ? Long.fromValue(object.qualifying_value) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<GetGaugeQualifyingValueResponse>): GetGaugeQualifyingValueResponse {
    const message = createBaseGetGaugeQualifyingValueResponse();
    message.qualifying_value = object.qualifying_value !== undefined && object.qualifying_value !== null ? Long.fromValue(object.qualifying_value) : Long.UZERO;
    return message;
  }
};
function createBaseGetGaugesRequest(): GetGaugesRequest {
  return {
    status: 0,
    denom: ""
  };
}
export const GetGaugesRequest = {
  encode(message: GetGaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
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
  fromJSON(object: any): GetGaugesRequest {
    return {
      status: isSet(object.status) ? gaugeStatusFromJSON(object.status) : -1,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: DeepPartial<GetGaugesRequest>): GetGaugesRequest {
    const message = createBaseGetGaugesRequest();
    message.status = object.status ?? 0;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseGetGaugesResponse(): GetGaugesResponse {
  return {
    gauges: []
  };
}
export const GetGaugesResponse = {
  encode(message: GetGaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugesResponse {
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
  fromJSON(object: any): GetGaugesResponse {
    return {
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<GetGaugesResponse>): GetGaugesResponse {
    const message = createBaseGetGaugesResponse();
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetStakeByIDRequest(): GetStakeByIDRequest {
  return {
    stake_id: Long.UZERO
  };
}
export const GetStakeByIDRequest = {
  encode(message: GetStakeByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.stake_id.isZero()) {
      writer.uint32(8).uint64(message.stake_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakeByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStakeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake_id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetStakeByIDRequest {
    return {
      stake_id: isSet(object.stake_id) ? Long.fromValue(object.stake_id) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<GetStakeByIDRequest>): GetStakeByIDRequest {
    const message = createBaseGetStakeByIDRequest();
    message.stake_id = object.stake_id !== undefined && object.stake_id !== null ? Long.fromValue(object.stake_id) : Long.UZERO;
    return message;
  }
};
function createBaseGetStakeByIDResponse(): GetStakeByIDResponse {
  return {
    stake: Stake.fromPartial({})
  };
}
export const GetStakeByIDResponse = {
  encode(message: GetStakeByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakeByIDResponse {
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
  fromJSON(object: any): GetStakeByIDResponse {
    return {
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined
    };
  },
  fromPartial(object: DeepPartial<GetStakeByIDResponse>): GetStakeByIDResponse {
    const message = createBaseGetStakeByIDResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? Stake.fromPartial(object.stake) : undefined;
    return message;
  }
};
function createBaseGetStakesRequest(): GetStakesRequest {
  return {
    owner: ""
  };
}
export const GetStakesRequest = {
  encode(message: GetStakesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakesRequest {
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
  fromJSON(object: any): GetStakesRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: DeepPartial<GetStakesRequest>): GetStakesRequest {
    const message = createBaseGetStakesRequest();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseGetStakesResponse(): GetStakesResponse {
  return {
    stakes: []
  };
}
export const GetStakesResponse = {
  encode(message: GetStakesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetStakesResponse {
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
  fromJSON(object: any): GetStakesResponse {
    return {
      stakes: Array.isArray(object?.stakes) ? object.stakes.map((e: any) => Stake.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<GetStakesResponse>): GetStakesResponse {
    const message = createBaseGetStakesResponse();
    message.stakes = object.stakes?.map(e => Stake.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetFutureRewardEstimateRequest(): GetFutureRewardEstimateRequest {
  return {
    owner: "",
    stake_ids: [],
    num_epochs: Long.ZERO
  };
}
export const GetFutureRewardEstimateRequest = {
  encode(message: GetFutureRewardEstimateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): GetFutureRewardEstimateRequest {
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
              message.stake_ids.push((reader.uint64() as Long));
            }
          } else {
            message.stake_ids.push((reader.uint64() as Long));
          }
          break;
        case 3:
          message.num_epochs = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetFutureRewardEstimateRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      stake_ids: Array.isArray(object?.stake_ids) ? object.stake_ids.map((e: any) => Long.fromValue(e)) : [],
      num_epochs: isSet(object.num_epochs) ? Long.fromValue(object.num_epochs) : Long.ZERO
    };
  },
  fromPartial(object: DeepPartial<GetFutureRewardEstimateRequest>): GetFutureRewardEstimateRequest {
    const message = createBaseGetFutureRewardEstimateRequest();
    message.owner = object.owner ?? "";
    message.stake_ids = object.stake_ids?.map(e => Long.fromValue(e)) || [];
    message.num_epochs = object.num_epochs !== undefined && object.num_epochs !== null ? Long.fromValue(object.num_epochs) : Long.ZERO;
    return message;
  }
};
function createBaseGetFutureRewardEstimateResponse(): GetFutureRewardEstimateResponse {
  return {
    coins: []
  };
}
export const GetFutureRewardEstimateResponse = {
  encode(message: GetFutureRewardEstimateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetFutureRewardEstimateResponse {
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
  fromJSON(object: any): GetFutureRewardEstimateResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<GetFutureRewardEstimateResponse>): GetFutureRewardEstimateResponse {
    const message = createBaseGetFutureRewardEstimateResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetAccountHistoryRequest(): GetAccountHistoryRequest {
  return {
    account: ""
  };
}
export const GetAccountHistoryRequest = {
  encode(message: GetAccountHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountHistoryRequest {
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
  fromJSON(object: any): GetAccountHistoryRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: DeepPartial<GetAccountHistoryRequest>): GetAccountHistoryRequest {
    const message = createBaseGetAccountHistoryRequest();
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseGetAccountHistoryResponse(): GetAccountHistoryResponse {
  return {
    coins: []
  };
}
export const GetAccountHistoryResponse = {
  encode(message: GetAccountHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountHistoryResponse {
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
  fromJSON(object: any): GetAccountHistoryResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<GetAccountHistoryResponse>): GetAccountHistoryResponse {
    const message = createBaseGetAccountHistoryResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};