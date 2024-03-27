import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgCreateGauge, MsgAddToGauge, MsgStake, MsgUnstake } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/duality.incentives.MsgCreateGauge', MsgCreateGauge], ['/duality.incentives.MsgAddToGauge', MsgAddToGauge], ['/duality.incentives.MsgStake', MsgStake], ['/duality.incentives.MsgUnstake', MsgUnstake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: '/duality.incentives.MsgCreateGauge',
        value: MsgCreateGauge.encode(value).finish()
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: '/duality.incentives.MsgAddToGauge',
        value: MsgAddToGauge.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: '/duality.incentives.MsgStake',
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: '/duality.incentives.MsgUnstake',
        value: MsgUnstake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: '/duality.incentives.MsgCreateGauge',
        value
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: '/duality.incentives.MsgAddToGauge',
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: '/duality.incentives.MsgStake',
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: '/duality.incentives.MsgUnstake',
        value
      };
    }
  },
  fromJSON: {
    createGauge(value: any) {
      return {
        typeUrl: '/duality.incentives.MsgCreateGauge',
        value: MsgCreateGauge.fromJSON(value)
      };
    },
    addToGauge(value: any) {
      return {
        typeUrl: '/duality.incentives.MsgAddToGauge',
        value: MsgAddToGauge.fromJSON(value)
      };
    },
    stake(value: any) {
      return {
        typeUrl: '/duality.incentives.MsgStake',
        value: MsgStake.fromJSON(value)
      };
    },
    unstake(value: any) {
      return {
        typeUrl: '/duality.incentives.MsgUnstake',
        value: MsgUnstake.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createGauge(value: MsgCreateGauge) {
      return {
        typeUrl: '/duality.incentives.MsgCreateGauge',
        value: MsgCreateGauge.fromPartial(value)
      };
    },
    addToGauge(value: MsgAddToGauge) {
      return {
        typeUrl: '/duality.incentives.MsgAddToGauge',
        value: MsgAddToGauge.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: '/duality.incentives.MsgStake',
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: '/duality.incentives.MsgUnstake',
        value: MsgUnstake.fromPartial(value)
      };
    }
  }
};