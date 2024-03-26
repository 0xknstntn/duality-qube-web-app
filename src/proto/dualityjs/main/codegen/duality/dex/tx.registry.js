"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/duality.dex.MsgDeposit", _tx.MsgDeposit], ["/duality.dex.MsgWithdrawal", _tx.MsgWithdrawal], ["/duality.dex.MsgPlaceLimitOrder", _tx.MsgPlaceLimitOrder], ["/duality.dex.MsgWithdrawFilledLimitOrder", _tx.MsgWithdrawFilledLimitOrder], ["/duality.dex.MsgCancelLimitOrder", _tx.MsgCancelLimitOrder], ["/duality.dex.MsgMultiHopSwap", _tx.MsgMultiHopSwap]];
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
    deposit: function deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: _tx.MsgDeposit.encode(value).finish()
      };
    },
    withdrawal: function withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: _tx.MsgWithdrawal.encode(value).finish()
      };
    },
    placeLimitOrder: function placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: _tx.MsgPlaceLimitOrder.encode(value).finish()
      };
    },
    withdrawFilledLimitOrder: function withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: _tx.MsgWithdrawFilledLimitOrder.encode(value).finish()
      };
    },
    cancelLimitOrder: function cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: _tx.MsgCancelLimitOrder.encode(value).finish()
      };
    },
    multiHopSwap: function multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: _tx.MsgMultiHopSwap.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    deposit: function deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: value
      };
    },
    withdrawal: function withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: value
      };
    },
    placeLimitOrder: function placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: value
      };
    },
    withdrawFilledLimitOrder: function withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: value
      };
    },
    cancelLimitOrder: function cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: value
      };
    },
    multiHopSwap: function multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: value
      };
    }
  },
  fromJSON: {
    deposit: function deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: _tx.MsgDeposit.fromJSON(value)
      };
    },
    withdrawal: function withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: _tx.MsgWithdrawal.fromJSON(value)
      };
    },
    placeLimitOrder: function placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: _tx.MsgPlaceLimitOrder.fromJSON(value)
      };
    },
    withdrawFilledLimitOrder: function withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: _tx.MsgWithdrawFilledLimitOrder.fromJSON(value)
      };
    },
    cancelLimitOrder: function cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: _tx.MsgCancelLimitOrder.fromJSON(value)
      };
    },
    multiHopSwap: function multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: _tx.MsgMultiHopSwap.fromJSON(value)
      };
    }
  },
  fromPartial: {
    deposit: function deposit(value) {
      return {
        typeUrl: "/duality.dex.MsgDeposit",
        value: _tx.MsgDeposit.fromPartial(value)
      };
    },
    withdrawal: function withdrawal(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawal",
        value: _tx.MsgWithdrawal.fromPartial(value)
      };
    },
    placeLimitOrder: function placeLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgPlaceLimitOrder",
        value: _tx.MsgPlaceLimitOrder.fromPartial(value)
      };
    },
    withdrawFilledLimitOrder: function withdrawFilledLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgWithdrawFilledLimitOrder",
        value: _tx.MsgWithdrawFilledLimitOrder.fromPartial(value)
      };
    },
    cancelLimitOrder: function cancelLimitOrder(value) {
      return {
        typeUrl: "/duality.dex.MsgCancelLimitOrder",
        value: _tx.MsgCancelLimitOrder.fromPartial(value)
      };
    },
    multiHopSwap: function multiHopSwap(value) {
      return {
        typeUrl: "/duality.dex.MsgMultiHopSwap",
        value: _tx.MsgMultiHopSwap.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;