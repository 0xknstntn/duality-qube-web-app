import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseSendAuthorization() {
  return {
    spend_limit: [],
    allow_list: []
  };
}
export const SendAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.spend_limit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allow_list) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spend_limit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.allow_list.push(reader.string());
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
      spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.spend_limit) ? object.spend_limit.map(e => Coin.fromJSON(e)) : [],
      allow_list: Array.isArray(object === null || object === void 0 ? void 0 : object.allow_list) ? object.allow_list.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$spend_limit, _object$allow_list;
    const message = createBaseSendAuthorization();
    message.spend_limit = ((_object$spend_limit = object.spend_limit) === null || _object$spend_limit === void 0 ? void 0 : _object$spend_limit.map(e => Coin.fromPartial(e))) || [];
    message.allow_list = ((_object$allow_list = object.allow_list) === null || _object$allow_list === void 0 ? void 0 : _object$allow_list.map(e => e)) || [];
    return message;
  }
};