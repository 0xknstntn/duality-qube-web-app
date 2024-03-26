import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the crisis module's genesis state. */

function createBaseGenesisState() {
  return {
    constant_fee: Coin.fromPartial({})
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.constant_fee !== undefined) {
      Coin.encode(message.constant_fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.constant_fee = Coin.decode(reader, reader.uint32());
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
      constant_fee: isSet(object.constant_fee) ? Coin.fromJSON(object.constant_fee) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.constant_fee = object.constant_fee !== undefined && object.constant_fee !== null ? Coin.fromPartial(object.constant_fee) : undefined;
    return message;
  }
};