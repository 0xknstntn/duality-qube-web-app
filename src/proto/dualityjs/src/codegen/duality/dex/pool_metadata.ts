import { PairID } from "./pair_id";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolMetadata {
  ID: Long;
  tick: Long;
  fee: Long;
  pairID: PairID;
}
function createBasePoolMetadata(): PoolMetadata {
  return {
    ID: Long.UZERO,
    tick: Long.ZERO,
    fee: Long.UZERO,
    pairID: PairID.fromPartial({})
  };
}
export const PoolMetadata = {
  encode(message: PoolMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (!message.tick.isZero()) {
      writer.uint32(16).int64(message.tick);
    }
    if (!message.fee.isZero()) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.pairID !== undefined) {
      PairID.encode(message.pairID, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        case 2:
          message.tick = (reader.int64() as Long);
          break;
        case 3:
          message.fee = (reader.uint64() as Long);
          break;
        case 4:
          message.pairID = PairID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolMetadata {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      tick: isSet(object.tick) ? Long.fromValue(object.tick) : Long.ZERO,
      fee: isSet(object.fee) ? Long.fromValue(object.fee) : Long.UZERO,
      pairID: isSet(object.pairID) ? PairID.fromJSON(object.pairID) : undefined
    };
  },
  fromPartial(object: DeepPartial<PoolMetadata>): PoolMetadata {
    const message = createBasePoolMetadata();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.tick = object.tick !== undefined && object.tick !== null ? Long.fromValue(object.tick) : Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Long.fromValue(object.fee) : Long.UZERO;
    message.pairID = object.pairID !== undefined && object.pairID !== null ? PairID.fromPartial(object.pairID) : undefined;
    return message;
  }
};