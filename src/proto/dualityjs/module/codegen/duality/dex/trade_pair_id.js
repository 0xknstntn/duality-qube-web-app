import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseTradePairID() {
  return {
    makerDenom: "",
    takerDenom: ""
  };
}
export const TradePairID = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.makerDenom !== "") {
      writer.uint32(18).string(message.makerDenom);
    }
    if (message.takerDenom !== "") {
      writer.uint32(26).string(message.takerDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradePairID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.makerDenom = reader.string();
          break;
        case 3:
          message.takerDenom = reader.string();
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
      makerDenom: isSet(object.makerDenom) ? String(object.makerDenom) : "",
      takerDenom: isSet(object.takerDenom) ? String(object.takerDenom) : ""
    };
  },
  fromPartial(object) {
    var _object$makerDenom, _object$takerDenom;
    const message = createBaseTradePairID();
    message.makerDenom = (_object$makerDenom = object.makerDenom) !== null && _object$makerDenom !== void 0 ? _object$makerDenom : "";
    message.takerDenom = (_object$takerDenom = object.takerDenom) !== null && _object$takerDenom !== void 0 ? _object$takerDenom : "";
    return message;
  }
};