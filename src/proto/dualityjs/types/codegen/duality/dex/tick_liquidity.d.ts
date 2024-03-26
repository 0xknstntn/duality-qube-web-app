import { PoolReserves } from "./pool_reserves";
import { LimitOrderTranche } from "./limit_order_tranche";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface TickLiquidity {
    poolReserves?: PoolReserves;
    limitOrderTranche?: LimitOrderTranche;
}
export declare const TickLiquidity: {
    encode(message: TickLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TickLiquidity;
    fromJSON(object: any): TickLiquidity;
    fromPartial(object: DeepPartial<TickLiquidity>): TickLiquidity;
};
