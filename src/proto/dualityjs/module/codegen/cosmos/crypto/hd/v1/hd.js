import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** BIP44Params is used as path field in ledger item in Record. */

function createBaseBIP44Params() {
  return {
    purpose: 0,
    coin_type: 0,
    account: 0,
    change: false,
    address_index: 0
  };
}
export const BIP44Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.purpose !== 0) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coin_type !== 0) {
      writer.uint32(16).uint32(message.coin_type);
    }
    if (message.account !== 0) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change === true) {
      writer.uint32(32).bool(message.change);
    }
    if (message.address_index !== 0) {
      writer.uint32(40).uint32(message.address_index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBIP44Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purpose = reader.uint32();
          break;
        case 2:
          message.coin_type = reader.uint32();
          break;
        case 3:
          message.account = reader.uint32();
          break;
        case 4:
          message.change = reader.bool();
          break;
        case 5:
          message.address_index = reader.uint32();
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
      purpose: isSet(object.purpose) ? Number(object.purpose) : 0,
      coin_type: isSet(object.coin_type) ? Number(object.coin_type) : 0,
      account: isSet(object.account) ? Number(object.account) : 0,
      change: isSet(object.change) ? Boolean(object.change) : false,
      address_index: isSet(object.address_index) ? Number(object.address_index) : 0
    };
  },
  fromPartial(object) {
    var _object$purpose, _object$coin_type, _object$account, _object$change, _object$address_index;
    const message = createBaseBIP44Params();
    message.purpose = (_object$purpose = object.purpose) !== null && _object$purpose !== void 0 ? _object$purpose : 0;
    message.coin_type = (_object$coin_type = object.coin_type) !== null && _object$coin_type !== void 0 ? _object$coin_type : 0;
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : 0;
    message.change = (_object$change = object.change) !== null && _object$change !== void 0 ? _object$change : false;
    message.address_index = (_object$address_index = object.address_index) !== null && _object$address_index !== void 0 ? _object$address_index : 0;
    return message;
  }
};