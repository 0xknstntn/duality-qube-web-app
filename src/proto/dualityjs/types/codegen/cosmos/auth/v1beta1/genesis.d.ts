import { Params } from "./auth";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
