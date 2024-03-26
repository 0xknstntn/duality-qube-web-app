import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface PairID {
    token0: string;
    token1: string;
}
export declare const PairID: {
    encode(message: PairID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PairID;
    fromJSON(object: any): PairID;
    fromPartial(object: DeepPartial<PairID>): PairID;
};
