import { Long, omitDefault } from "../../../../helpers";
export const AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp,
      memo
    }) => {
      var _omitDefault, _omitDefault2;
      return {
        source_port,
        source_channel,
        token: {
          denom: token.denom,
          amount: Long.fromValue(token.amount).toString()
        },
        sender,
        receiver,
        timeout_height: timeout_height ? {
          revision_height: (_omitDefault = omitDefault(timeout_height.revisionHeight)) === null || _omitDefault === void 0 ? void 0 : _omitDefault.toString(),
          revision_number: (_omitDefault2 = omitDefault(timeout_height.revisionNumber)) === null || _omitDefault2 === void 0 ? void 0 : _omitDefault2.toString()
        } : {},
        timeout_timestamp: timeout_timestamp.toString(),
        memo
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp,
      memo
    }) => {
      return {
        source_port,
        source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeout_height: timeout_height ? {
          revisionHeight: Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeout_timestamp: Long.fromString(timeout_timestamp),
        memo
      };
    }
  },
  "/ibc.applications.transfer.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          allowed_clients: params.allowed_clients
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          allowed_clients: params.allowed_clients
        }
      };
    }
  }
};