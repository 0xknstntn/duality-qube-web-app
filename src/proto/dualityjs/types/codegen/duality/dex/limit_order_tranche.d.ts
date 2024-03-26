import { TradePairID } from "./trade_pair_id";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface LimitOrderTrancheKey {
    tradePairID: TradePairID;
    tickIndexTakerToMaker: Long;
    trancheKey: string;
}
export interface LimitOrderTranche {
    key: LimitOrderTrancheKey;
    reservesMakerDenom: string;
    reservesTakerDenom: string;
    totalMakerDenom: string;
    totalTakerDenom: string;
    /**
     * JIT orders also use goodTilDate to handle deletion but represent a special case
     * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
     * Order deletion still functions the same and the orders will be deleted at the end of the block
     */
    expirationTime?: Timestamp;
    priceTakerToMaker: string;
}
export declare const LimitOrderTrancheKey: {
    encode(message: LimitOrderTrancheKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTrancheKey;
    fromJSON(object: any): LimitOrderTrancheKey;
    fromPartial(object: DeepPartial<LimitOrderTrancheKey>): LimitOrderTrancheKey;
};
export declare const LimitOrderTranche: {
    encode(message: LimitOrderTranche, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTranche;
    fromJSON(object: any): LimitOrderTranche;
    fromPartial(object: DeepPartial<LimitOrderTranche>): LimitOrderTranche;
};
