import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBasePairID() {
  return {
    token0: "",
    token1: ""
  };
}
export const PairID = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token0 = reader.string();
          break;
        case 2:
          message.token1 = reader.string();
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
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : ""
    };
  },
  fromPartial(object) {
    var _object$token, _object$token2;
    const message = createBasePairID();
    message.token0 = (_object$token = object.token0) !== null && _object$token !== void 0 ? _object$token : "";
    message.token1 = (_object$token2 = object.token1) !== null && _object$token2 !== void 0 ? _object$token2 : "";
    return message;
  }
};