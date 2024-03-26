import { QueryCondition } from "./gauge";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    is_perpetual: boolean;
    /** owner is the address of gauge creator, should be the module authority */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distribute_to: QueryCondition;
    /** coins are coin(s) to be distributed by the gauge */
    coins: Coin[];
    /** start_time is the distribution start time */
    start_time: Timestamp;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    num_epochs_paid_over: Long;
    /** pricing_tick is the price that liquidity within the gauge range will be priced at */
    pricing_tick: Long;
}
export interface MsgCreateGaugeResponse {
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gauge_id: Long;
    /** rewards are the coin(s) to add to gauge */
    rewards: Coin[];
}
export interface MsgAddToGaugeResponse {
}
export interface MsgStake {
    owner: string;
    coins: Coin[];
}
export interface MsgStakeResponse {
    ID: Long;
}
export interface MsgUnstake {
    owner: string;
    /** If unstake is left empty, this is interpreted as "unstake all" */
    unstakes: MsgUnstake_UnstakeDescriptor[];
}
export interface MsgUnstake_UnstakeDescriptor {
    ID: Long;
    coins: Coin[];
}
export interface MsgUnstakeResponse {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromJSON(object: any): MsgCreateGauge;
    fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromJSON(_: any): MsgCreateGaugeResponse;
    fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromJSON(object: any): MsgAddToGauge;
    fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromJSON(_: any): MsgAddToGaugeResponse;
    fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
};
export declare const MsgStake: {
    encode(message: MsgStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake;
    fromJSON(object: any): MsgStake;
    fromPartial(object: DeepPartial<MsgStake>): MsgStake;
};
export declare const MsgStakeResponse: {
    encode(message: MsgStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse;
    fromJSON(object: any): MsgStakeResponse;
    fromPartial(object: DeepPartial<MsgStakeResponse>): MsgStakeResponse;
};
export declare const MsgUnstake: {
    encode(message: MsgUnstake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake;
    fromJSON(object: any): MsgUnstake;
    fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake;
};
export declare const MsgUnstake_UnstakeDescriptor: {
    encode(message: MsgUnstake_UnstakeDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake_UnstakeDescriptor;
    fromJSON(object: any): MsgUnstake_UnstakeDescriptor;
    fromPartial(object: DeepPartial<MsgUnstake_UnstakeDescriptor>): MsgUnstake_UnstakeDescriptor;
};
export declare const MsgUnstakeResponse: {
    encode(_: MsgUnstakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse;
    fromJSON(_: any): MsgUnstakeResponse;
    fromPartial(_: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse;
};
