import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGauge, MsgAddToGauge, MsgStake, MsgUnstake } from "./tx";
export interface MsgCreateGaugeAminoType extends AminoMsg {
    type: "/duality.incentives.MsgCreateGauge";
    value: {
        is_perpetual: boolean;
        owner: string;
        distribute_to: {
            pairID: {
                token0: string;
                token1: string;
            };
            startTick: string;
            endTick: string;
        };
        coins: {
            denom: string;
            amount: string;
        }[];
        start_time: {
            seconds: string;
            nanos: number;
        };
        num_epochs_paid_over: string;
        pricing_tick: string;
    };
}
export interface MsgAddToGaugeAminoType extends AminoMsg {
    type: "/duality.incentives.MsgAddToGauge";
    value: {
        owner: string;
        gauge_id: string;
        rewards: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgStakeAminoType extends AminoMsg {
    type: "/duality.incentives.MsgStake";
    value: {
        owner: string;
        coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgUnstakeAminoType extends AminoMsg {
    type: "/duality.incentives.MsgUnstake";
    value: {
        owner: string;
        unstakes: {
            ID: string;
            coins: {
                denom: string;
                amount: string;
            }[];
        }[];
    };
}
export declare const AminoConverter: {
    "/duality.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over, pricing_tick }: MsgCreateGauge) => MsgCreateGaugeAminoType["value"];
        fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over, pricing_tick }: MsgCreateGaugeAminoType["value"]) => MsgCreateGauge;
    };
    "/duality.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: ({ owner, gauge_id, rewards }: MsgAddToGauge) => MsgAddToGaugeAminoType["value"];
        fromAmino: ({ owner, gauge_id, rewards }: MsgAddToGaugeAminoType["value"]) => MsgAddToGauge;
    };
    "/duality.incentives.MsgStake": {
        aminoType: string;
        toAmino: ({ owner, coins }: MsgStake) => MsgStakeAminoType["value"];
        fromAmino: ({ owner, coins }: MsgStakeAminoType["value"]) => MsgStake;
    };
    "/duality.incentives.MsgUnstake": {
        aminoType: string;
        toAmino: ({ owner, unstakes }: MsgUnstake) => MsgUnstakeAminoType["value"];
        fromAmino: ({ owner, unstakes }: MsgUnstakeAminoType["value"]) => MsgUnstake;
    };
};
