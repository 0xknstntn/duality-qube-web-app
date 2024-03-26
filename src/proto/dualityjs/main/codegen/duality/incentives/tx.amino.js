"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/duality.incentives.MsgCreateGauge": {
    aminoType: "/duality.incentives.MsgCreateGauge",
    toAmino: function toAmino(_ref) {
      var is_perpetual = _ref.is_perpetual,
        owner = _ref.owner,
        distribute_to = _ref.distribute_to,
        coins = _ref.coins,
        start_time = _ref.start_time,
        num_epochs_paid_over = _ref.num_epochs_paid_over,
        pricing_tick = _ref.pricing_tick;
      return {
        is_perpetual: is_perpetual,
        owner: owner,
        distribute_to: {
          pairID: {
            token0: distribute_to.pairID.token0,
            token1: distribute_to.pairID.token1
          },
          startTick: distribute_to.startTick.toString(),
          endTick: distribute_to.endTick.toString()
        },
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        start_time: start_time,
        num_epochs_paid_over: num_epochs_paid_over.toString(),
        pricing_tick: pricing_tick.toString()
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var is_perpetual = _ref2.is_perpetual,
        owner = _ref2.owner,
        distribute_to = _ref2.distribute_to,
        coins = _ref2.coins,
        start_time = _ref2.start_time,
        num_epochs_paid_over = _ref2.num_epochs_paid_over,
        pricing_tick = _ref2.pricing_tick;
      return {
        is_perpetual: is_perpetual,
        owner: owner,
        distribute_to: {
          pairID: {
            token0: distribute_to.pairID.token0,
            token1: distribute_to.pairID.token1
          },
          startTick: _helpers.Long.fromString(distribute_to.startTick),
          endTick: _helpers.Long.fromString(distribute_to.endTick)
        },
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        start_time: start_time,
        num_epochs_paid_over: _helpers.Long.fromString(num_epochs_paid_over),
        pricing_tick: _helpers.Long.fromString(pricing_tick)
      };
    }
  },
  "/duality.incentives.MsgAddToGauge": {
    aminoType: "/duality.incentives.MsgAddToGauge",
    toAmino: function toAmino(_ref3) {
      var owner = _ref3.owner,
        gauge_id = _ref3.gauge_id,
        rewards = _ref3.rewards;
      return {
        owner: owner,
        gauge_id: gauge_id.toString(),
        rewards: rewards.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var owner = _ref4.owner,
        gauge_id = _ref4.gauge_id,
        rewards = _ref4.rewards;
      return {
        owner: owner,
        gauge_id: _helpers.Long.fromString(gauge_id),
        rewards: rewards.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/duality.incentives.MsgStake": {
    aminoType: "/duality.incentives.MsgStake",
    toAmino: function toAmino(_ref5) {
      var owner = _ref5.owner,
        coins = _ref5.coins;
      return {
        owner: owner,
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var owner = _ref6.owner,
        coins = _ref6.coins;
      return {
        owner: owner,
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/duality.incentives.MsgUnstake": {
    aminoType: "/duality.incentives.MsgUnstake",
    toAmino: function toAmino(_ref7) {
      var owner = _ref7.owner,
        unstakes = _ref7.unstakes;
      return {
        owner: owner,
        unstakes: unstakes.map(function (el0) {
          return {
            ID: el0.ID.toString(),
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var owner = _ref8.owner,
        unstakes = _ref8.unstakes;
      return {
        owner: owner,
        unstakes: unstakes.map(function (el0) {
          return {
            ID: _helpers.Long.fromString(el0.ID),
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;