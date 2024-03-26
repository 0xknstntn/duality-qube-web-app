import { TradePairID } from "./trade_pair_id";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolReservesKey {
    tradePairID: TradePairID;
    TickIndexTakerToMaker: Long;
    Fee: Long;
}
export interface PoolReserves {
    key: PoolReservesKey;
    reservesMakerDenom: string;
    priceTakerToMaker: string;
    priceOppositeTakerToMaker: string;
}
export declare const PoolReservesKey: {
    encode(message: PoolReservesKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolReservesKey;
    fromJSON(object: any): PoolReservesKey;
    fromPartial(object: DeepPartial<PoolReservesKey>): PoolReservesKey;
};
export declare const PoolReserves: {
    encode(message: PoolReserves, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolReserves;
    fromJSON(object: any): PoolReserves;
    fromPartial(object: DeepPartial<PoolReserves>): PoolReserves;
};
