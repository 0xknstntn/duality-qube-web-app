import { PairID } from "./pair_id";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface DepositRecord {
    pairID: PairID;
    sharesOwned: string;
    centerTickIndex: Long;
    lowerTickIndex: Long;
    upperTickIndex: Long;
    fee: Long;
}
export declare const DepositRecord: {
    encode(message: DepositRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord;
    fromJSON(object: any): DepositRecord;
    fromPartial(object: DeepPartial<DepositRecord>): DepositRecord;
};
