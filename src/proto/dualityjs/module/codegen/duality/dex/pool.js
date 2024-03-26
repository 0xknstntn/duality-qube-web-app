import { PoolReserves } from "./pool_reserves";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBasePool() {
  return {
    ID: Long.UZERO,
    lower_tick0: PoolReserves.fromPartial({}),
    upper_tick1: PoolReserves.fromPartial({})
  };
}
export const Pool = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (message.lower_tick0 !== undefined) {
      PoolReserves.encode(message.lower_tick0, writer.uint32(18).fork()).ldelim();
    }
    if (message.upper_tick1 !== undefined) {
      PoolReserves.encode(message.upper_tick1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        case 2:
          message.lower_tick0 = PoolReserves.decode(reader, reader.uint32());
          break;
        case 3:
          message.upper_tick1 = PoolReserves.decode(reader, reader.uint32());
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
      lower_tick0: isSet(object.lower_tick0) ? PoolReserves.fromJSON(object.lower_tick0) : undefined,
      upper_tick1: isSet(object.upper_tick1) ? PoolReserves.fromJSON(object.upper_tick1) : undefined
    };
  },
  fromPartial(object) {
    const message = createBasePool();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.lower_tick0 = object.lower_tick0 !== undefined && object.lower_tick0 !== null ? PoolReserves.fromPartial(object.lower_tick0) : undefined;
    message.upper_tick1 = object.upper_tick1 !== undefined && object.upper_tick1 !== null ? PoolReserves.fromPartial(object.upper_tick1) : undefined;
    return message;
  }
};