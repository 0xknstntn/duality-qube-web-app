import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface TradePairID {
    makerDenom: string;
    takerDenom: string;
}
export declare const TradePairID: {
    encode(message: TradePairID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradePairID;
    fromJSON(object: any): TradePairID;
    fromPartial(object: DeepPartial<TradePairID>): TradePairID;
};
