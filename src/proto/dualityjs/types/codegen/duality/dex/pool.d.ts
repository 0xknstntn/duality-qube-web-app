import { PoolReserves } from "./pool_reserves";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Pool {
    ID: Long;
    lower_tick0: PoolReserves;
    upper_tick1: PoolReserves;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
