import { TradePairID } from "./trade_pair_id";
import { LimitOrderType } from "./tx";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface LimitOrderTrancheUser {
    tradePairID: TradePairID;
    tickIndexTakerToMaker: Long;
    trancheKey: string;
    address: string;
    sharesOwned: string;
    sharesWithdrawn: string;
    sharesCancelled: string;
    orderType: LimitOrderType;
}
export declare const LimitOrderTrancheUser: {
    encode(message: LimitOrderTrancheUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTrancheUser;
    fromJSON(object: any): LimitOrderTrancheUser;
    fromPartial(object: DeepPartial<LimitOrderTrancheUser>): LimitOrderTrancheUser;
};
