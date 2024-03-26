import { Params } from "./params";
import { Gauge } from "./gauge";
import { Stake } from "./stake";
import { AccountHistory } from "./account_history";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */

function createBaseGenesisState() {
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
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (!message.last_gauge_id.isZero()) {
      writer.uint32(24).uint64(message.last_gauge_id);
    }
    if (!message.last_stake_id.isZero()) {
      writer.uint32(32).uint64(message.last_stake_id);
    }
    for (const v of message.stakes) {
      Stake.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.accountHistories) {
      AccountHistory.encode(v, writer.uint32(50).fork()).ldelim();
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
        case 2:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_gauge_id = reader.uint64();
          break;
        case 4:
          message.last_stake_id = reader.uint64();
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
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges) ? object.gauges.map(e => Gauge.fromJSON(e)) : [],
      last_gauge_id: isSet(object.last_gauge_id) ? Long.fromValue(object.last_gauge_id) : Long.UZERO,
      last_stake_id: isSet(object.last_stake_id) ? Long.fromValue(object.last_stake_id) : Long.UZERO,
      stakes: Array.isArray(object === null || object === void 0 ? void 0 : object.stakes) ? object.stakes.map(e => Stake.fromJSON(e)) : [],
      accountHistories: Array.isArray(object === null || object === void 0 ? void 0 : object.accountHistories) ? object.accountHistories.map(e => AccountHistory.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$gauges, _object$stakes, _object$accountHistor;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = ((_object$gauges = object.gauges) === null || _object$gauges === void 0 ? void 0 : _object$gauges.map(e => Gauge.fromPartial(e))) || [];
    message.last_gauge_id = object.last_gauge_id !== undefined && object.last_gauge_id !== null ? Long.fromValue(object.last_gauge_id) : Long.UZERO;
    message.last_stake_id = object.last_stake_id !== undefined && object.last_stake_id !== null ? Long.fromValue(object.last_stake_id) : Long.UZERO;
    message.stakes = ((_object$stakes = object.stakes) === null || _object$stakes === void 0 ? void 0 : _object$stakes.map(e => Stake.fromPartial(e))) || [];
    message.accountHistories = ((_object$accountHistor = object.accountHistories) === null || _object$accountHistor === void 0 ? void 0 : _object$accountHistor.map(e => AccountHistory.fromPartial(e))) || [];
    return message;
  }
};