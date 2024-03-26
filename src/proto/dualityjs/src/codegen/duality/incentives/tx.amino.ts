//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/duality.incentives.MsgCreateGauge": {
    aminoType: "/duality.incentives.MsgCreateGauge",
    toAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over,
      pricing_tick
    }: MsgCreateGauge): MsgCreateGaugeAminoType["value"] => {
      return {
        is_perpetual,
        owner,
        distribute_to: {
          pairID: {
            token0: distribute_to.pairID.token0,
            token1: distribute_to.pairID.token1
          },
          startTick: distribute_to.startTick.toString(),
          endTick: distribute_to.endTick.toString()
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time,
        num_epochs_paid_over: num_epochs_paid_over.toString(),
        pricing_tick: pricing_tick.toString()
      };
    },
    fromAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over,
      pricing_tick
    }: MsgCreateGaugeAminoType["value"]): MsgCreateGauge => {
      return {
        is_perpetual,
        owner,
        distribute_to: {
          pairID: {
            token0: distribute_to.pairID.token0,
            token1: distribute_to.pairID.token1
          },
          startTick: Long.fromString(distribute_to.startTick),
          endTick: Long.fromString(distribute_to.endTick)
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time,
        num_epochs_paid_over: Long.fromString(num_epochs_paid_over),
        pricing_tick: Long.fromString(pricing_tick)
      };
    }
  },
  "/duality.incentives.MsgAddToGauge": {
    aminoType: "/duality.incentives.MsgAddToGauge",
    toAmino: ({
      owner,
      gauge_id,
      rewards
    }: MsgAddToGauge): MsgAddToGaugeAminoType["value"] => {
      return {
        owner,
        gauge_id: gauge_id.toString(),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      gauge_id,
      rewards
    }: MsgAddToGaugeAminoType["value"]): MsgAddToGauge => {
      return {
        owner,
        gauge_id: Long.fromString(gauge_id),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/duality.incentives.MsgStake": {
    aminoType: "/duality.incentives.MsgStake",
    toAmino: ({
      owner,
      coins
    }: MsgStake): MsgStakeAminoType["value"] => {
      return {
        owner,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      coins
    }: MsgStakeAminoType["value"]): MsgStake => {
      return {
        owner,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/duality.incentives.MsgUnstake": {
    aminoType: "/duality.incentives.MsgUnstake",
    toAmino: ({
      owner,
      unstakes
    }: MsgUnstake): MsgUnstakeAminoType["value"] => {
      return {
        owner,
        unstakes: unstakes.map(el0 => ({
          ID: el0.ID.toString(),
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      owner,
      unstakes
    }: MsgUnstakeAminoType["value"]): MsgUnstake => {
      return {
        owner,
        unstakes: unstakes.map(el0 => ({
          ID: Long.fromString(el0.ID),
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  }
};