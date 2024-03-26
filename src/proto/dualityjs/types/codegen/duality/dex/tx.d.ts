import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum LimitOrderType {
    GOOD_TIL_CANCELLED = 0,
    FILL_OR_KILL = 1,
    IMMEDIATE_OR_CANCEL = 2,
    JUST_IN_TIME = 3,
    GOOD_TIL_TIME = 4,
    UNRECOGNIZED = -1
}
export declare function limitOrderTypeFromJSON(object: any): LimitOrderType;
export declare function limitOrderTypeToJSON(object: LimitOrderType): string;
export interface DepositOptions {
    disable_autoswap: boolean;
}
export interface MsgDeposit {
    creator: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    amountsA: string[];
    amountsB: string[];
    tickIndexesAToB: Long[];
    fees: Long[];
    Options: DepositOptions[];
}
export interface MsgDepositResponse {
    Reserve0Deposited: string[];
    Reserve1Deposited: string[];
}
export interface MsgWithdrawal {
    creator: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    sharesToRemove: string[];
    tickIndexesAToB: Long[];
    fees: Long[];
}
export interface MsgWithdrawalResponse {
}
export interface MsgPlaceLimitOrder {
    creator: string;
    receiver: string;
    tokenIn: string;
    tokenOut: string;
    tickIndexInToOut: Long;
    amountIn: string;
    orderType: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expirationTime?: Timestamp;
    maxAmountOut?: string;
}
export interface MsgPlaceLimitOrderResponse {
    trancheKey: string;
    /** Total amount of coin used for the limit order */
    coinIn: Coin;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after executing the
     * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
     */
    takerCoinOut: Coin;
}
export interface MsgWithdrawFilledLimitOrder {
    creator: string;
    trancheKey: string;
}
export interface MsgWithdrawFilledLimitOrderResponse {
}
export interface MsgCancelLimitOrder {
    creator: string;
    trancheKey: string;
}
export interface MsgCancelLimitOrderResponse {
}
export interface MultiHopRoute {
    hops: string[];
}
export interface MsgMultiHopSwap {
    creator: string;
    receiver: string;
    routes: MultiHopRoute[];
    amountIn: string;
    exitLimitPrice: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the best price is chosen
     * otherwise, the first succesful route is used.
     */
    pickBestRoute: boolean;
}
export interface MsgMultiHopSwapResponse {
    coinOut: Coin;
}
export declare const DepositOptions: {
    encode(message: DepositOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositOptions;
    fromJSON(object: any): DepositOptions;
    fromPartial(object: DeepPartial<DepositOptions>): DepositOptions;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(message: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(object: any): MsgDepositResponse;
    fromPartial(object: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdrawal: {
    encode(message: MsgWithdrawal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawal;
    fromJSON(object: any): MsgWithdrawal;
    fromPartial(object: DeepPartial<MsgWithdrawal>): MsgWithdrawal;
};
export declare const MsgWithdrawalResponse: {
    encode(_: MsgWithdrawalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawalResponse;
    fromJSON(_: any): MsgWithdrawalResponse;
    fromPartial(_: DeepPartial<MsgWithdrawalResponse>): MsgWithdrawalResponse;
};
export declare const MsgPlaceLimitOrder: {
    encode(message: MsgPlaceLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceLimitOrder;
    fromJSON(object: any): MsgPlaceLimitOrder;
    fromPartial(object: DeepPartial<MsgPlaceLimitOrder>): MsgPlaceLimitOrder;
};
export declare const MsgPlaceLimitOrderResponse: {
    encode(message: MsgPlaceLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceLimitOrderResponse;
    fromJSON(object: any): MsgPlaceLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgPlaceLimitOrderResponse>): MsgPlaceLimitOrderResponse;
};
export declare const MsgWithdrawFilledLimitOrder: {
    encode(message: MsgWithdrawFilledLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrder;
    fromJSON(object: any): MsgWithdrawFilledLimitOrder;
    fromPartial(object: DeepPartial<MsgWithdrawFilledLimitOrder>): MsgWithdrawFilledLimitOrder;
};
export declare const MsgWithdrawFilledLimitOrderResponse: {
    encode(_: MsgWithdrawFilledLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrderResponse;
    fromJSON(_: any): MsgWithdrawFilledLimitOrderResponse;
    fromPartial(_: DeepPartial<MsgWithdrawFilledLimitOrderResponse>): MsgWithdrawFilledLimitOrderResponse;
};
export declare const MsgCancelLimitOrder: {
    encode(message: MsgCancelLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitOrder;
    fromJSON(object: any): MsgCancelLimitOrder;
    fromPartial(object: DeepPartial<MsgCancelLimitOrder>): MsgCancelLimitOrder;
};
export declare const MsgCancelLimitOrderResponse: {
    encode(_: MsgCancelLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitOrderResponse;
    fromJSON(_: any): MsgCancelLimitOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelLimitOrderResponse>): MsgCancelLimitOrderResponse;
};
export declare const MultiHopRoute: {
    encode(message: MultiHopRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiHopRoute;
    fromJSON(object: any): MultiHopRoute;
    fromPartial(object: DeepPartial<MultiHopRoute>): MultiHopRoute;
};
export declare const MsgMultiHopSwap: {
    encode(message: MsgMultiHopSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwap;
    fromJSON(object: any): MsgMultiHopSwap;
    fromPartial(object: DeepPartial<MsgMultiHopSwap>): MsgMultiHopSwap;
};
export declare const MsgMultiHopSwapResponse: {
    encode(message: MsgMultiHopSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwapResponse;
    fromJSON(object: any): MsgMultiHopSwapResponse;
    fromPartial(object: DeepPartial<MsgMultiHopSwapResponse>): MsgMultiHopSwapResponse;
};
