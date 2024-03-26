import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface LimitOrderExpiration {
    /** see limitOrderTranche.proto for details on goodTilDate */
    expirationTime: Timestamp;
    trancheRef: Uint8Array;
}
export declare const LimitOrderExpiration: {
    encode(message: LimitOrderExpiration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderExpiration;
    fromJSON(object: any): LimitOrderExpiration;
    fromPartial(object: DeepPartial<LimitOrderExpiration>): LimitOrderExpiration;
};
