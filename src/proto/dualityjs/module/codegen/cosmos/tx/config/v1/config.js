import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** Config is the config object of the x/auth/tx package. */

function createBaseConfig() {
  return {
    skip_ante_handler: false,
    skip_post_handler: false
  };
}
export const Config = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.skip_ante_handler === true) {
      writer.uint32(8).bool(message.skip_ante_handler);
    }
    if (message.skip_post_handler === true) {
      writer.uint32(16).bool(message.skip_post_handler);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip_ante_handler = reader.bool();
          break;
        case 2:
          message.skip_post_handler = reader.bool();
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
      skip_ante_handler: isSet(object.skip_ante_handler) ? Boolean(object.skip_ante_handler) : false,
      skip_post_handler: isSet(object.skip_post_handler) ? Boolean(object.skip_post_handler) : false
    };
  },
  fromPartial(object) {
    var _object$skip_ante_han, _object$skip_post_han;
    const message = createBaseConfig();
    message.skip_ante_handler = (_object$skip_ante_han = object.skip_ante_handler) !== null && _object$skip_ante_han !== void 0 ? _object$skip_ante_han : false;
    message.skip_post_handler = (_object$skip_post_han = object.skip_post_handler) !== null && _object$skip_post_han !== void 0 ? _object$skip_post_han : false;
    return message;
  }
};