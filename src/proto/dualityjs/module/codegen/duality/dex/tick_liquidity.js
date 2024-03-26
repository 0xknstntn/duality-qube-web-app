import { PoolReserves } from "./pool_reserves";
import { LimitOrderTranche } from "./limit_order_tranche";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseTickLiquidity() {
  return {
    poolReserves: undefined,
    limitOrderTranche: undefined
  };
}
export const TickLiquidity = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
          break;
        case 2:
          message.limitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
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
      poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined,
      limitOrderTranche: isSet(object.limitOrderTranche) ? LimitOrderTranche.fromJSON(object.limitOrderTranche) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseTickLiquidity();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? PoolReserves.fromPartial(object.poolReserves) : undefined;
    message.limitOrderTranche = object.limitOrderTranche !== undefined && object.limitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.limitOrderTranche) : undefined;
    return message;
  }
};