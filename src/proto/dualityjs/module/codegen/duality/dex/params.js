import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    fee_tiers: []
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.fee_tiers) {
      writer.uint64(v);
    }
    writer.ldelim();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fee_tiers.push(reader.uint64());
            }
          } else {
            message.fee_tiers.push(reader.uint64());
          }
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
      fee_tiers: Array.isArray(object === null || object === void 0 ? void 0 : object.fee_tiers) ? object.fee_tiers.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$fee_tiers;
    const message = createBaseParams();
    message.fee_tiers = ((_object$fee_tiers = object.fee_tiers) === null || _object$fee_tiers === void 0 ? void 0 : _object$fee_tiers.map(e => Long.fromValue(e))) || [];
    return message;
  }
};