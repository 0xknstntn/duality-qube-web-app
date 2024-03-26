import { MsgCreateGauge, MsgAddToGauge, MsgStake, MsgUnstake } from "./tx";
export const registry = [["/duality.incentives.MsgCreateGauge", MsgCreateGauge], ["/duality.incentives.MsgAddToGauge", MsgAddToGauge], ["/duality.incentives.MsgStake", MsgStake], ["/duality.incentives.MsgUnstake", MsgUnstake]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: MsgCreateGauge.encode(value).finish()
      };
    },
    addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: MsgAddToGauge.encode(value).finish()
      };
    },
    stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value
      };
    },
    addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value
      };
    },
    stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value
      };
    },
    unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value
      };
    }
  },
  fromJSON: {
    createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: MsgCreateGauge.fromJSON(value)
      };
    },
    addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: MsgAddToGauge.fromJSON(value)
      };
    },
    stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: MsgStake.fromJSON(value)
      };
    },
    unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: MsgUnstake.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: MsgCreateGauge.fromPartial(value)
      };
    },
    addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: MsgAddToGauge.fromPartial(value)
      };
    },
    stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    }
  }
};