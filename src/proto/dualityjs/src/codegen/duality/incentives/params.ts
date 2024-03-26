import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the incentives module */
export interface Params {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
  max_gauges: Long;
}
function createBaseParams(): Params {
  return {
    distr_epoch_identifier: "",
    max_gauges: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distr_epoch_identifier !== "") {
      writer.uint32(10).string(message.distr_epoch_identifier);
    }
    if (!message.max_gauges.isZero()) {
      writer.uint32(16).uint64(message.max_gauges);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distr_epoch_identifier = reader.string();
          break;
        case 2:
          message.max_gauges = (reader.uint64() as Long);
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
      distr_epoch_identifier: isSet(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : "",
      max_gauges: isSet(object.max_gauges) ? Long.fromValue(object.max_gauges) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.distr_epoch_identifier = object.distr_epoch_identifier ?? "";
    message.max_gauges = object.max_gauges !== undefined && object.max_gauges !== null ? Long.fromValue(object.max_gauges) : Long.UZERO;
    return message;
  }
};