"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/duality.incentives.MsgCreateGauge", _tx.MsgCreateGauge], ["/duality.incentives.MsgAddToGauge", _tx.MsgAddToGauge], ["/duality.incentives.MsgStake", _tx.MsgStake], ["/duality.incentives.MsgUnstake", _tx.MsgUnstake]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: _tx.MsgCreateGauge.encode(value).finish()
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: _tx.MsgAddToGauge.encode(value).finish()
      };
    },
    stake: function stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: _tx.MsgStake.encode(value).finish()
      };
    },
    unstake: function unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: _tx.MsgUnstake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: value
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: value
      };
    },
    stake: function stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: value
      };
    },
    unstake: function unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: value
      };
    }
  },
  fromJSON: {
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: _tx.MsgCreateGauge.fromJSON(value)
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: _tx.MsgAddToGauge.fromJSON(value)
      };
    },
    stake: function stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: _tx.MsgStake.fromJSON(value)
      };
    },
    unstake: function unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: _tx.MsgUnstake.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgCreateGauge",
        value: _tx.MsgCreateGauge.fromPartial(value)
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/duality.incentives.MsgAddToGauge",
        value: _tx.MsgAddToGauge.fromPartial(value)
      };
    },
    stake: function stake(value) {
      return {
        typeUrl: "/duality.incentives.MsgStake",
        value: _tx.MsgStake.fromPartial(value)
      };
    },
    unstake: function unstake(value) {
      return {
        typeUrl: "/duality.incentives.MsgUnstake",
        value: _tx.MsgUnstake.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;