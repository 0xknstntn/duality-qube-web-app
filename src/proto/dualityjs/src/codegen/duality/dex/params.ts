import { Long, DeepPartial } from '../../helpers';
import * as _m0 from 'protobufjs/minimal';
/** Params defines the parameters for the module. */
export interface Params {
  fee_tiers: Long[];
}
function createBaseParams(): Params {
  return {
    fee_tiers: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.fee_tiers) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fee_tiers.push((reader.uint64() as Long));
            }
          } else {
            message.fee_tiers.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      fee_tiers: Array.isArray(object?.fee_tiers) ? object.fee_tiers.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.fee_tiers = object.fee_tiers?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};