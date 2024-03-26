import { Params } from "./params";
import { Gauge } from "./gauge";
import { Stake } from "./stake";
import { AccountHistory } from "./account_history";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** gauges are all gauges that should exist at genesis */
  gauges: Gauge[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  last_gauge_id: Long;
  last_stake_id: Long;
  stakes: Stake[];
  accountHistories: AccountHistory[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    gauges: [],
    last_gauge_id: Long.UZERO,
    last_stake_id: Long.UZERO,
    stakes: [],
    accountHistories: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.last_gauge_id.isZero()) {
      writer.uint32(24).uint64(message.last_gauge_id);
    }
    if (!message.last_stake_id.isZero()) {
      writer.uint32(32).uint64(message.last_stake_id);
    }
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.accountHistories) {
      AccountHistory.encode(v!, writer.uint32(50).fork()).ldelim();
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
        case 2:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_gauge_id = (reader.uint64() as Long);
          break;
        case 4:
          message.last_stake_id = (reader.uint64() as Long);
          break;
        case 5:
          message.stakes.push(Stake.decode(reader, reader.uint32()));
          break;
        case 6:
          message.accountHistories.push(AccountHistory.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [],
      last_gauge_id: isSet(object.last_gauge_id) ? Long.fromValue(object.last_gauge_id) : Long.UZERO,
      last_stake_id: isSet(object.last_stake_id) ? Long.fromValue(object.last_stake_id) : Long.UZERO,
      stakes: Array.isArray(object?.stakes) ? object.stakes.map((e: any) => Stake.fromJSON(e)) : [],
      accountHistories: Array.isArray(object?.accountHistories) ? object.accountHistories.map((e: any) => AccountHistory.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.last_gauge_id = object.last_gauge_id !== undefined && object.last_gauge_id !== null ? Long.fromValue(object.last_gauge_id) : Long.UZERO;
    message.last_stake_id = object.last_stake_id !== undefined && object.last_stake_id !== null ? Long.fromValue(object.last_stake_id) : Long.UZERO;
    message.stakes = object.stakes?.map(e => Stake.fromPartial(e)) || [];
    message.accountHistories = object.accountHistories?.map(e => AccountHistory.fromPartial(e)) || [];
    return message;
  }
};