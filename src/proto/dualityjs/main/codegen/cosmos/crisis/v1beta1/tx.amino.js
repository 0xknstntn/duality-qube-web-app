"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        invariant_module_name = _ref.invariant_module_name,
        invariant_route = _ref.invariant_route;
      return {
        sender: sender,
        invariant_module_name: invariant_module_name,
        invariant_route: invariant_route
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        invariant_module_name = _ref2.invariant_module_name,
        invariant_route = _ref2.invariant_route;
      return {
        sender: sender,
        invariant_module_name: invariant_module_name,
        invariant_route: invariant_route
      };
    }
  },
  "/cosmos.crisis.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority,
        constant_fee = _ref3.constant_fee;
      return {
        authority: authority,
        constant_fee: {
          denom: constant_fee.denom,
          amount: _helpers.Long.fromValue(constant_fee.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority,
        constant_fee = _ref4.constant_fee;
      return {
        authority: authority,
        constant_fee: {
          denom: constant_fee.denom,
          amount: constant_fee.amount
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;