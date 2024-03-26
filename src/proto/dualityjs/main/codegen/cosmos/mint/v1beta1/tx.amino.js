"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/mint/MsgUpdateParams",
    toAmino: function toAmino(_ref) {
      var authority = _ref.authority,
        params = _ref.params;
      return {
        authority: authority,
        params: {
          mint_denom: params.mint_denom,
          inflation_rate_change: params.inflation_rate_change,
          inflation_max: params.inflation_max,
          inflation_min: params.inflation_min,
          goal_bonded: params.goal_bonded,
          blocks_per_year: params.blocks_per_year.toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var authority = _ref2.authority,
        params = _ref2.params;
      return {
        authority: authority,
        params: {
          mint_denom: params.mint_denom,
          inflation_rate_change: params.inflation_rate_change,
          inflation_max: params.inflation_max,
          inflation_min: params.inflation_min,
          goal_bonded: params.goal_bonded,
          blocks_per_year: _helpers.Long.fromString(params.blocks_per_year)
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;