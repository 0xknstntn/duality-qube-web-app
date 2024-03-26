"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/pob.builder.v1.MsgAuctionBid", _tx.MsgAuctionBid], ["/pob.builder.v1.MsgUpdateParams", _tx.MsgUpdateParams]];
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
    auctionBid: function auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: _tx.MsgAuctionBid.encode(value).finish()
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    auctionBid: function auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: value
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: value
      };
    }
  },
  fromJSON: {
    auctionBid: function auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: _tx.MsgAuctionBid.fromJSON(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    auctionBid: function auctionBid(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: _tx.MsgAuctionBid.fromPartial(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;