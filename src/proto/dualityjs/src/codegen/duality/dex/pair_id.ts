import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export interface PairID {
  token0: string;
  token1: string;
}
function createBasePairID(): PairID {
  return {
    token0: "",
    token1: ""
  };
}
export const PairID = {
  encode(message: PairID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PairID {
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
  fromJSON(object: any): PairID {
    return {
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : ""
    };
  },
  fromPartial(object: DeepPartial<PairID>): PairID {
    const message = createBasePairID();
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    return message;
  }
};