import { PairID } from "./pair_id";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolMetadata {
    ID: Long;
    tick: Long;
    fee: Long;
    pairID: PairID;
}
export declare const PoolMetadata: {
    encode(message: PoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolMetadata;
    fromJSON(object: any): PoolMetadata;
    fromPartial(object: DeepPartial<PoolMetadata>): PoolMetadata;
};
