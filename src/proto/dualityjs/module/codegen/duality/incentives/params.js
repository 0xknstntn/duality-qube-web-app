import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the incentives module */

function createBaseParams() {
  return {
    distr_epoch_identifier: "",
    max_gauges: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.distr_epoch_identifier !== "") {
      writer.uint32(10).string(message.distr_epoch_identifier);
    }
    if (!message.max_gauges.isZero()) {
      writer.uint32(16).uint64(message.max_gauges);
    }
    return writer;
  },
  decode(input, length) {
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
          message.max_gauges = reader.uint64();
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
      distr_epoch_identifier: isSet(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : "",
      max_gauges: isSet(object.max_gauges) ? Long.fromValue(object.max_gauges) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$distr_epoch_i;
    const message = createBaseParams();
    message.distr_epoch_identifier = (_object$distr_epoch_i = object.distr_epoch_identifier) !== null && _object$distr_epoch_i !== void 0 ? _object$distr_epoch_i : "";
    message.max_gauges = object.max_gauges !== undefined && object.max_gauges !== null ? Long.fromValue(object.max_gauges) : Long.UZERO;
    return message;
  }
};