import { accessTypeFromJSON } from "./types";
import { toBase64, fromBase64, fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }) => {
      return {
        sender,
        wasm_byte_code: toBase64(wasm_byte_code),
        instantiate_permission: {
          permission: instantiate_permission.permission,
          addresses: instantiate_permission.addresses
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }) => {
      return {
        sender,
        wasm_byte_code: fromBase64(wasm_byte_code),
        instantiate_permission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          addresses: instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }) => {
      return {
        sender,
        admin,
        code_id: code_id.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }) => {
      return {
        sender,
        admin,
        code_id: Long.fromString(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
    aminoType: "wasm/MsgInstantiateContract2",
    toAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds,
      salt,
      fix_msg
    }) => {
      return {
        sender,
        admin,
        code_id: code_id.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fix_msg
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds,
      salt,
      fix_msg
    }) => {
      return {
        sender,
        admin,
        code_id: Long.fromString(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fix_msg
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }) => {
      return {
        sender,
        contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }) => {
      return {
        sender,
        contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: ({
      sender,
      contract,
      code_id,
      msg
    }) => {
      return {
        sender,
        contract,
        code_id: code_id.toString(),
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      sender,
      contract,
      code_id,
      msg
    }) => {
      return {
        sender,
        contract,
        code_id: Long.fromString(code_id),
        msg: toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: ({
      sender,
      new_admin,
      contract
    }) => {
      return {
        sender,
        new_admin,
        contract
      };
    },
    fromAmino: ({
      sender,
      new_admin,
      contract
    }) => {
      return {
        sender,
        new_admin,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: ({
      sender,
      contract
    }) => {
      return {
        sender,
        contract
      };
    },
    fromAmino: ({
      sender,
      contract
    }) => {
      return {
        sender,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
    aminoType: "wasm/MsgUpdateInstantiateConfig",
    toAmino: ({
      sender,
      code_id,
      new_instantiate_permission
    }) => {
      return {
        sender,
        code_id: code_id.toString(),
        new_instantiate_permission: {
          permission: new_instantiate_permission.permission,
          addresses: new_instantiate_permission.addresses
        }
      };
    },
    fromAmino: ({
      sender,
      code_id,
      new_instantiate_permission
    }) => {
      return {
        sender,
        code_id: Long.fromString(code_id),
        new_instantiate_permission: {
          permission: accessTypeFromJSON(new_instantiate_permission.permission),
          addresses: new_instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateParams": {
    aminoType: "wasm/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          code_upload_access: {
            permission: params.code_upload_access.permission,
            addresses: params.code_upload_access.addresses
          },
          instantiate_default_permission: params.instantiate_default_permission
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
          code_upload_access: {
            permission: accessTypeFromJSON(params.code_upload_access.permission),
            addresses: params.code_upload_access.addresses
          },
          instantiate_default_permission: accessTypeFromJSON(params.instantiate_default_permission)
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgSudoContract": {
    aminoType: "wasm/MsgSudoContract",
    toAmino: ({
      authority,
      contract,
      msg
    }) => {
      return {
        authority,
        contract,
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      authority,
      contract,
      msg
    }) => {
      return {
        authority,
        contract,
        msg: toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgPinCodes": {
    aminoType: "wasm/MsgPinCodes",
    toAmino: ({
      authority,
      code_ids
    }) => {
      return {
        authority,
        code_ids: code_ids.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      authority,
      code_ids
    }) => {
      return {
        authority,
        code_ids: code_ids.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUnpinCodes": {
    aminoType: "wasm/MsgUnpinCodes",
    toAmino: ({
      authority,
      code_ids
    }) => {
      return {
        authority,
        code_ids: code_ids.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      authority,
      code_ids
    }) => {
      return {
        authority,
        code_ids: code_ids.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
    aminoType: "wasm/MsgStoreAndInstantiateContract",
    toAmino: ({
      authority,
      wasm_byte_code,
      instantiate_permission,
      unpin_code,
      admin,
      label,
      msg,
      funds,
      source,
      builder,
      code_hash
    }) => {
      return {
        authority,
        wasm_byte_code: toBase64(wasm_byte_code),
        instantiate_permission: {
          permission: instantiate_permission.permission,
          addresses: instantiate_permission.addresses
        },
        unpin_code,
        admin,
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        source,
        builder,
        code_hash
      };
    },
    fromAmino: ({
      authority,
      wasm_byte_code,
      instantiate_permission,
      unpin_code,
      admin,
      label,
      msg,
      funds,
      source,
      builder,
      code_hash
    }) => {
      return {
        authority,
        wasm_byte_code: fromBase64(wasm_byte_code),
        instantiate_permission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          addresses: instantiate_permission.addresses
        },
        unpin_code,
        admin,
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        source,
        builder,
        code_hash
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
    aminoType: "wasm/MsgRemoveCodeUploadParamsAddresses",
    toAmino: ({
      authority,
      addresses
    }) => {
      return {
        authority,
        addresses
      };
    },
    fromAmino: ({
      authority,
      addresses
    }) => {
      return {
        authority,
        addresses
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
    aminoType: "wasm/MsgAddCodeUploadParamsAddresses",
    toAmino: ({
      authority,
      addresses
    }) => {
      return {
        authority,
        addresses
      };
    },
    fromAmino: ({
      authority,
      addresses
    }) => {
      return {
        authority,
        addresses
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
    aminoType: "wasm/MsgStoreAndMigrateContract",
    toAmino: ({
      authority,
      wasm_byte_code,
      instantiate_permission,
      contract,
      msg
    }) => {
      return {
        authority,
        wasm_byte_code: toBase64(wasm_byte_code),
        instantiate_permission: {
          permission: instantiate_permission.permission,
          addresses: instantiate_permission.addresses
        },
        contract,
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      authority,
      wasm_byte_code,
      instantiate_permission,
      contract,
      msg
    }) => {
      return {
        authority,
        wasm_byte_code: fromBase64(wasm_byte_code),
        instantiate_permission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          addresses: instantiate_permission.addresses
        },
        contract,
        msg: toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
    aminoType: "wasm/MsgUpdateContractLabel",
    toAmino: ({
      sender,
      new_label,
      contract
    }) => {
      return {
        sender,
        new_label,
        contract
      };
    },
    fromAmino: ({
      sender,
      new_label,
      contract
    }) => {
      return {
        sender,
        new_label,
        contract
      };
    }
  }
};