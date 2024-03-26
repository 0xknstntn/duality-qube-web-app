import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Gauge } from "./gauge";
import { Stake } from "./stake";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum GaugeStatus {
    ACTIVE_UPCOMING = 0,
    ACTIVE = 1,
    UPCOMING = 2,
    FINISHED = 3,
    UNRECOGNIZED = -1
}
export declare function gaugeStatusFromJSON(object: any): GaugeStatus;
export declare function gaugeStatusToJSON(object: GaugeStatus): string;
export interface GetModuleStatusRequest {
}
export interface GetModuleStatusResponse {
    /** Coins that have yet to be distributed */
    reward_coins: Coin[];
    staked_coins: Coin[];
    params: Params;
}
export interface GetGaugeByIDRequest {
    /** Gague ID being queried */
    id: Long;
}
export interface GetGaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge: Gauge;
}
export interface GetGaugeQualifyingValueRequest {
    /** Gague ID being queried */
    id: Long;
}
export interface GetGaugeQualifyingValueResponse {
    /** The amount of value at the gauge's pricing tick currently qualifying for the gauge. */
    qualifying_value: Long;
}
export interface GetGaugesRequest {
    status: GaugeStatus;
    denom: string;
}
export interface GetGaugesResponse {
    /** Upcoming and active gauges */
    gauges: Gauge[];
}
export interface GetStakeByIDRequest {
    stake_id: Long;
}
export interface GetStakeByIDResponse {
    stake: Stake;
}
export interface GetStakesRequest {
    owner: string;
}
export interface GetStakesResponse {
    stakes: Stake[];
}
export interface GetFutureRewardEstimateRequest {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Stake IDs included in future reward estimation */
    stake_ids: Long[];
    /**
     * Determines upper time limit of reward estimation
     * reward estimation goes up to current_epoch + num_epochs
     */
    num_epochs: Long;
}
export interface GetFutureRewardEstimateResponse {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface GetAccountHistoryRequest {
    /** Address that is being queried for account history */
    account: string;
}
export interface GetAccountHistoryResponse {
    /** Gauge rewards that have been distributed to this address to date */
    coins: Coin[];
}
export declare const GetModuleStatusRequest: {
    encode(_: GetModuleStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetModuleStatusRequest;
    fromJSON(_: any): GetModuleStatusRequest;
    fromPartial(_: DeepPartial<GetModuleStatusRequest>): GetModuleStatusRequest;
};
export declare const GetModuleStatusResponse: {
    encode(message: GetModuleStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetModuleStatusResponse;
    fromJSON(object: any): GetModuleStatusResponse;
    fromPartial(object: DeepPartial<GetModuleStatusResponse>): GetModuleStatusResponse;
};
export declare const GetGaugeByIDRequest: {
    encode(message: GetGaugeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeByIDRequest;
    fromJSON(object: any): GetGaugeByIDRequest;
    fromPartial(object: DeepPartial<GetGaugeByIDRequest>): GetGaugeByIDRequest;
};
export declare const GetGaugeByIDResponse: {
    encode(message: GetGaugeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeByIDResponse;
    fromJSON(object: any): GetGaugeByIDResponse;
    fromPartial(object: DeepPartial<GetGaugeByIDResponse>): GetGaugeByIDResponse;
};
export declare const GetGaugeQualifyingValueRequest: {
    encode(message: GetGaugeQualifyingValueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeQualifyingValueRequest;
    fromJSON(object: any): GetGaugeQualifyingValueRequest;
    fromPartial(object: DeepPartial<GetGaugeQualifyingValueRequest>): GetGaugeQualifyingValueRequest;
};
export declare const GetGaugeQualifyingValueResponse: {
    encode(message: GetGaugeQualifyingValueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugeQualifyingValueResponse;
    fromJSON(object: any): GetGaugeQualifyingValueResponse;
    fromPartial(object: DeepPartial<GetGaugeQualifyingValueResponse>): GetGaugeQualifyingValueResponse;
};
export declare const GetGaugesRequest: {
    encode(message: GetGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugesRequest;
    fromJSON(object: any): GetGaugesRequest;
    fromPartial(object: DeepPartial<GetGaugesRequest>): GetGaugesRequest;
};
export declare const GetGaugesResponse: {
    encode(message: GetGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGaugesResponse;
    fromJSON(object: any): GetGaugesResponse;
    fromPartial(object: DeepPartial<GetGaugesResponse>): GetGaugesResponse;
};
export declare const GetStakeByIDRequest: {
    encode(message: GetStakeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStakeByIDRequest;
    fromJSON(object: any): GetStakeByIDRequest;
    fromPartial(object: DeepPartial<GetStakeByIDRequest>): GetStakeByIDRequest;
};
export declare const GetStakeByIDResponse: {
    encode(message: GetStakeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStakeByIDResponse;
    fromJSON(object: any): GetStakeByIDResponse;
    fromPartial(object: DeepPartial<GetStakeByIDResponse>): GetStakeByIDResponse;
};
export declare const GetStakesRequest: {
    encode(message: GetStakesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStakesRequest;
    fromJSON(object: any): GetStakesRequest;
    fromPartial(object: DeepPartial<GetStakesRequest>): GetStakesRequest;
};
export declare const GetStakesResponse: {
    encode(message: GetStakesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStakesResponse;
    fromJSON(object: any): GetStakesResponse;
    fromPartial(object: DeepPartial<GetStakesResponse>): GetStakesResponse;
};
export declare const GetFutureRewardEstimateRequest: {
    encode(message: GetFutureRewardEstimateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFutureRewardEstimateRequest;
    fromJSON(object: any): GetFutureRewardEstimateRequest;
    fromPartial(object: DeepPartial<GetFutureRewardEstimateRequest>): GetFutureRewardEstimateRequest;
};
export declare const GetFutureRewardEstimateResponse: {
    encode(message: GetFutureRewardEstimateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFutureRewardEstimateResponse;
    fromJSON(object: any): GetFutureRewardEstimateResponse;
    fromPartial(object: DeepPartial<GetFutureRewardEstimateResponse>): GetFutureRewardEstimateResponse;
};
export declare const GetAccountHistoryRequest: {
    encode(message: GetAccountHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountHistoryRequest;
    fromJSON(object: any): GetAccountHistoryRequest;
    fromPartial(object: DeepPartial<GetAccountHistoryRequest>): GetAccountHistoryRequest;
};
export declare const GetAccountHistoryResponse: {
    encode(message: GetAccountHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountHistoryResponse;
    fromJSON(object: any): GetAccountHistoryResponse;
    fromPartial(object: DeepPartial<GetAccountHistoryResponse>): GetAccountHistoryResponse;
};
