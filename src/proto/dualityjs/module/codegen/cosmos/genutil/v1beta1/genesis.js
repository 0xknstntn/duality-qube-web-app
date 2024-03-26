import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64 } from "../../../helpers";
/** GenesisState defines the raw genesis transaction in JSON. */

function createBaseGenesisState() {
  return {
    gen_txs: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.gen_txs) {
      writer.uint32(10).bytes(v);
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
        case 1:
          message.gen_txs.push(reader.bytes());
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
      gen_txs: Array.isArray(object === null || object === void 0 ? void 0 : object.gen_txs) ? object.gen_txs.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$gen_txs;
    const message = createBaseGenesisState();
    message.gen_txs = ((_object$gen_txs = object.gen_txs) === null || _object$gen_txs === void 0 ? void 0 : _object$gen_txs.map(e => e)) || [];
    return message;
  }
};