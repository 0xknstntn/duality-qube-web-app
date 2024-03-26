"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../../helpers");
var AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: function toAmino(_ref) {
      var _omitDefault, _omitDefault2;
      var source_port = _ref.source_port,
        source_channel = _ref.source_channel,
        token = _ref.token,
        sender = _ref.sender,
        receiver = _ref.receiver,
        timeout_height = _ref.timeout_height,
        timeout_timestamp = _ref.timeout_timestamp,
        memo = _ref.memo;
      return {
        source_port: source_port,
        source_channel: source_channel,
        token: {
          denom: token.denom,
          amount: _helpers.Long.fromValue(token.amount).toString()
        },
        sender: sender,
        receiver: receiver,
        timeout_height: timeout_height ? {
          revision_height: (_omitDefault = (0, _helpers.omitDefault)(timeout_height.revisionHeight)) === null || _omitDefault === void 0 ? void 0 : _omitDefault.toString(),
          revision_number: (_omitDefault2 = (0, _helpers.omitDefault)(timeout_height.revisionNumber)) === null || _omitDefault2 === void 0 ? void 0 : _omitDefault2.toString()
        } : {},
        timeout_timestamp: timeout_timestamp.toString(),
        memo: memo
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var source_port = _ref2.source_port,
        source_channel = _ref2.source_channel,
        token = _ref2.token,
        sender = _ref2.sender,
        receiver = _ref2.receiver,
        timeout_height = _ref2.timeout_height,
        timeout_timestamp = _ref2.timeout_timestamp,
        memo = _ref2.memo;
      return {
        source_port: source_port,
        source_channel: source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender: sender,
        receiver: receiver,
        timeout_height: timeout_height ? {
          revisionHeight: _helpers.Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeout_timestamp: _helpers.Long.fromString(timeout_timestamp),
        memo: memo
      };
    }
  },
  "/ibc.applications.transfer.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority,
        params = _ref3.params;
      return {
        authority: authority,
        params: {
          allowed_clients: params.allowed_clients
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority,
        params = _ref4.params;
      return {
        authority: authority,
        params: {
          allowed_clients: params.allowed_clients
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;