import { Params } from "./params";
import { Gauge } from "./gauge";
import { Stake } from "./stake";
import { AccountHistory } from "./account_history";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
    /** gauges are all gauges that should exist at genesis */
    gauges: Gauge[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     */
    last_gauge_id: Long;
    last_stake_id: Long;
    stakes: Stake[];
    accountHistories: AccountHistory[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
