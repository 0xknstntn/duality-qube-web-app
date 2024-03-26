"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: function toAmino(_ref) {
      var from_address = _ref.from_address,
        to_address = _ref.to_address,
        amount = _ref.amount,
        end_time = _ref.end_time,
        delayed = _ref.delayed;
      return {
        from_address: from_address,
        to_address: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        end_time: end_time.toString(),
        delayed: delayed
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var from_address = _ref2.from_address,
        to_address = _ref2.to_address,
        amount = _ref2.amount,
        end_time = _ref2.end_time,
        delayed = _ref2.delayed;
      return {
        from_address: from_address,
        to_address: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        end_time: _helpers.Long.fromString(end_time),
        delayed: delayed
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
    toAmino: function toAmino(_ref3) {
      var from_address = _ref3.from_address,
        to_address = _ref3.to_address,
        amount = _ref3.amount;
      return {
        from_address: from_address,
        to_address: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var from_address = _ref4.from_address,
        to_address = _ref4.to_address,
        amount = _ref4.amount;
      return {
        from_address: from_address,
        to_address: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: function toAmino(_ref5) {
      var from_address = _ref5.from_address,
        to_address = _ref5.to_address,
        start_time = _ref5.start_time,
        vesting_periods = _ref5.vesting_periods;
      return {
        from_address: from_address,
        to_address: to_address,
        start_time: start_time.toString(),
        vesting_periods: vesting_periods.map(function (el0) {
          return {
            length: el0.length.toString(),
            amount: el0.amount.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var from_address = _ref6.from_address,
        to_address = _ref6.to_address,
        start_time = _ref6.start_time,
        vesting_periods = _ref6.vesting_periods;
      return {
        from_address: from_address,
        to_address: to_address,
        start_time: _helpers.Long.fromString(start_time),
        vesting_periods: vesting_periods.map(function (el0) {
          return {
            length: _helpers.Long.fromString(el0.length),
            amount: el0.amount.map(function (el1) {
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