"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: function toAmino(_ref) {
      var validator_addr = _ref.validator_addr;
      return {
        validator_addr: validator_addr
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var validator_addr = _ref2.validator_addr;
      return {
        validator_addr: validator_addr
      };
    }
  },
  "/cosmos.slashing.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/slashing/MsgUpdateParams",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority,
        params = _ref3.params;
      return {
        authority: authority,
        params: {
          signed_blocks_window: params.signed_blocks_window.toString(),
          min_signed_per_window: params.min_signed_per_window,
          downtime_jail_duration: (params.downtime_jail_duration * 1000000000).toString(),
          slash_fraction_double_sign: params.slash_fraction_double_sign,
          slash_fraction_downtime: params.slash_fraction_downtime
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority,
        params = _ref4.params;
      return {
        authority: authority,
        params: {
          signed_blocks_window: _helpers.Long.fromString(params.signed_blocks_window),
          min_signed_per_window: params.min_signed_per_window,
          downtime_jail_duration: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(params.downtime_jail_duration) / 1000000000)),
            nanos: parseInt(params.downtime_jail_duration) % 1000000000
          },
          slash_fraction_double_sign: params.slash_fraction_double_sign,
          slash_fraction_downtime: params.slash_fraction_downtime
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;