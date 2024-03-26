import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
function createBaseLimitOrderExpiration() {
  return {
    expirationTime: Timestamp.fromPartial({}),
    trancheRef: new Uint8Array()
  };
}
export const LimitOrderExpiration = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.trancheRef.length !== 0) {
      writer.uint32(18).bytes(message.trancheRef);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.trancheRef = reader.bytes();
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
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      trancheRef: isSet(object.trancheRef) ? bytesFromBase64(object.trancheRef) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$trancheRef;
    const message = createBaseLimitOrderExpiration();
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.trancheRef = (_object$trancheRef = object.trancheRef) !== null && _object$trancheRef !== void 0 ? _object$trancheRef : new Uint8Array();
    return message;
  }
};