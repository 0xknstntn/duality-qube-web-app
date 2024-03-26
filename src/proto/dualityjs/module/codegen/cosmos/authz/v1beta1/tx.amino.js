//@ts-nocheck

export const AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: ({
      granter,
      grantee,
      grant
    }) => {
      return {
        granter,
        grantee,
        grant: {
          authorization: {
            type_url: grant.authorization.type_url,
            value: grant.authorization.value
          },
          expiration: grant.expiration
        }
      };
    },
    fromAmino: ({
      granter,
      grantee,
      grant
    }) => {
      return {
        granter,
        grantee,
        grant: {
          authorization: {
            type_url: grant.authorization.type_url,
            value: grant.authorization.value
          },
          expiration: grant.expiration
        }
      };
    }
  },
  "/cosmos.authz.v1beta1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: ({
      grantee,
      msgs
    }) => {
      return {
        grantee,
        msgs: msgs.map(el0 => ({
          type_url: el0.type_url,
          value: el0.value
        }))
      };
    },
    fromAmino: ({
      grantee,
      msgs
    }) => {
      return {
        grantee,
        msgs: msgs.map(el0 => ({
          type_url: el0.type_url,
          value: el0.value
        }))
      };
    }
  },
  "/cosmos.authz.v1beta1.MsgRevoke": {
    aminoType: "cosmos-sdk/MsgRevoke",
    toAmino: ({
      granter,
      grantee,
      msg_type_url
    }) => {
      return {
        granter,
        grantee,
        msg_type_url
      };
    },
    fromAmino: ({
      granter,
      grantee,
      msg_type_url
    }) => {
      return {
        granter,
        grantee,
        msg_type_url
      };
    }
  }
};