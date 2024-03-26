import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** Module is the config object of the builder module. */
export interface Module {
    /**
     * Authority defines the custom module authority. If not set, defaults to the
     * governance module.
     */
    authority: string;
}
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    fromPartial(object: DeepPartial<Module>): Module;
};
