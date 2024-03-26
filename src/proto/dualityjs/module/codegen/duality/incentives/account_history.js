import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Describes the total distributions to an account over time */

function createBaseAccountHistory() {
  return {
    account: "",
    coins: []
  };
}
export const AccountHistory = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
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
      account: isSet(object.account) ? String(object.account) : "",
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$account, _object$coins;
    const message = createBaseAccountHistory();
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};