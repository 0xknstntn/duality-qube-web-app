import * as _m0 from 'protobufjs/minimal';
import { isSet, DeepPartial } from '../../helpers';
export interface TradePairID {
  makerDenom: string;
  takerDenom: string;
}
function createBaseTradePairID(): TradePairID {
  return {
    makerDenom: '',
    takerDenom: ''
  };
}
export const TradePairID = {
  encode(message: TradePairID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerDenom !== '') {
      writer.uint32(18).string(message.makerDenom);
    }
    if (message.takerDenom !== '') {
      writer.uint32(26).string(message.takerDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TradePairID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): TradePairID {
    return {
      makerDenom: isSet(object.makerDenom) ? String(object.makerDenom) : '',
      takerDenom: isSet(object.takerDenom) ? String(object.takerDenom) : ''
    };
  },
  fromPartial(object: DeepPartial<TradePairID>): TradePairID {
    const message = createBaseTradePairID();
    message.makerDenom = object.makerDenom ?? '';
    message.takerDenom = object.takerDenom ?? '';
    return message;
  }
};