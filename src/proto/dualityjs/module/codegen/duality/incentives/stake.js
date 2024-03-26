import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Stake records what coins are staked when by who for the purpose of
 * calculating gauge reward distributions.
 */

function createBaseStake() {
  return {
    ID: Long.UZERO,
    owner: "",
    start_time: Timestamp.fromPartial({}),
    coins: [],
    start_dist_epoch: Long.ZERO
  };
}
export const Stake = {
  encode(message, writer = _m0.Writer.create()) {
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
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (!message.start_dist_epoch.isZero()) {
      writer.uint32(40).int64(message.start_dist_epoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
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
          message.start_dist_epoch = reader.int64();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : [],
      start_dist_epoch: isSet(object.start_dist_epoch) ? Long.fromValue(object.start_dist_epoch) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$owner, _object$coins;
    const message = createBaseStake();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Timestamp.fromPartial(object.start_time) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    message.start_dist_epoch = object.start_dist_epoch !== undefined && object.start_dist_epoch !== null ? Long.fromValue(object.start_dist_epoch) : Long.ZERO;
    return message;
  }
};