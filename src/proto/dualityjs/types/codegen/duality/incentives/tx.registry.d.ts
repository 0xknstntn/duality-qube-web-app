import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGauge, MsgAddToGauge, MsgStake, MsgUnstake } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: Uint8Array;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: Uint8Array;
        };
        stake(value: MsgStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        unstake(value: MsgUnstake): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
        stake(value: MsgStake): {
            typeUrl: string;
            value: MsgStake;
        };
        unstake(value: MsgUnstake): {
            typeUrl: string;
            value: MsgUnstake;
        };
    };
    fromJSON: {
        createGauge(value: any): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: any): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
        stake(value: any): {
            typeUrl: string;
            value: MsgStake;
        };
        unstake(value: any): {
            typeUrl: string;
            value: MsgUnstake;
        };
    };
    fromPartial: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
        stake(value: MsgStake): {
            typeUrl: string;
            value: MsgStake;
        };
        unstake(value: MsgUnstake): {
            typeUrl: string;
            value: MsgUnstake;
        };
    };
};
