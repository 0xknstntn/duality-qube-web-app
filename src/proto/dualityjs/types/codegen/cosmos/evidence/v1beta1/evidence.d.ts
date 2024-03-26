import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    /** height is the equivocation height. */
    height: Long;
    /** time is the equivocation time. */
    time: Timestamp;
    /** power is the equivocation validator power. */
    power: Long;
    /** consensus_address is the equivocation validator consensus address. */
    consensus_address: string;
}
export declare const Equivocation: {
    encode(message: Equivocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation;
    fromJSON(object: any): Equivocation;
    fromPartial(object: DeepPartial<Equivocation>): Equivocation;
};
