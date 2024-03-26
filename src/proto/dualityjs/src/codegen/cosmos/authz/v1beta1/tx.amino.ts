//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export interface MsgGrantAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgGrant";
  value: {
    granter: string;
    grantee: string;
    grant: {
      authorization: {
        type_url: string;
        value: Uint8Array;
      };
      expiration: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export interface MsgExecAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: {
    grantee: string;
    msgs: {
      type_url: string;
      value: Uint8Array;
    }[];
  };
}
export interface MsgRevokeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRevoke";
  value: {
    granter: string;
    grantee: string;
    msg_type_url: string;
  };
}
export const AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: ({
      granter,
      grantee,
      grant
    }: MsgGrant): MsgGrantAminoType["value"] => {
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
    }: MsgGrantAminoType["value"]): MsgGrant => {
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
    }: MsgExec): MsgExecAminoType["value"] => {
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
    }: MsgExecAminoType["value"]): MsgExec => {
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
    }: MsgRevoke): MsgRevokeAminoType["value"] => {
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
    }: MsgRevokeAminoType["value"]): MsgRevoke => {
      return {
        granter,
        grantee,
        msg_type_url
      };
    }
  }
};