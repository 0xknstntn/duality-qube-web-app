import { Params } from "./params";
import { TickLiquidity } from "./tick_liquidity";
import { LimitOrderTranche } from "./limit_order_tranche";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { PoolMetadata } from "./pool_metadata";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    params: Params;
    tickLiquidityList?: TickLiquidity[];
    inactiveLimitOrderTrancheList?: LimitOrderTranche[];
    limitOrderTrancheUserList?: LimitOrderTrancheUser[];
    poolMetadataList: PoolMetadata[];
    poolCount: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
