import { AminoMsg } from "@cosmjs/amino";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
export interface MsgStoreCodeAminoType extends AminoMsg {
    type: "wasm/MsgStoreCode";
    value: {
        sender: string;
        wasm_byte_code: string;
        instantiate_permission: {
            permission: number;
            addresses: string[];
        };
    };
}
export interface MsgInstantiateContractAminoType extends AminoMsg {
    type: "wasm/MsgInstantiateContract";
    value: {
        sender: string;
        admin: string;
        code_id: string;
        label: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgInstantiateContract2AminoType extends AminoMsg {
    type: "wasm/MsgInstantiateContract2";
    value: {
        sender: string;
        admin: string;
        code_id: string;
        label: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        salt: Uint8Array;
        fix_msg: boolean;
    };
}
export interface MsgExecuteContractAminoType extends AminoMsg {
    type: "wasm/MsgExecuteContract";
    value: {
        sender: string;
        contract: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgMigrateContractAminoType extends AminoMsg {
    type: "wasm/MsgMigrateContract";
    value: {
        sender: string;
        contract: string;
        code_id: string;
        msg: Uint8Array;
    };
}
export interface MsgUpdateAdminAminoType extends AminoMsg {
    type: "wasm/MsgUpdateAdmin";
    value: {
        sender: string;
        new_admin: string;
        contract: string;
    };
}
export interface MsgClearAdminAminoType extends AminoMsg {
    type: "wasm/MsgClearAdmin";
    value: {
        sender: string;
        contract: string;
    };
}
export interface MsgUpdateInstantiateConfigAminoType extends AminoMsg {
    type: "wasm/MsgUpdateInstantiateConfig";
    value: {
        sender: string;
        code_id: string;
        new_instantiate_permission: {
            permission: number;
            addresses: string[];
        };
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "wasm/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            code_upload_access: {
                permission: number;
                addresses: string[];
            };
            instantiate_default_permission: number;
        };
    };
}
export interface MsgSudoContractAminoType extends AminoMsg {
    type: "wasm/MsgSudoContract";
    value: {
        authority: string;
        contract: string;
        msg: Uint8Array;
    };
}
export interface MsgPinCodesAminoType extends AminoMsg {
    type: "wasm/MsgPinCodes";
    value: {
        authority: string;
        code_ids: string[];
    };
}
export interface MsgUnpinCodesAminoType extends AminoMsg {
    type: "wasm/MsgUnpinCodes";
    value: {
        authority: string;
        code_ids: string[];
    };
}
export interface MsgStoreAndInstantiateContractAminoType extends AminoMsg {
    type: "wasm/MsgStoreAndInstantiateContract";
    value: {
        authority: string;
        wasm_byte_code: string;
        instantiate_permission: {
            permission: number;
            addresses: string[];
        };
        unpin_code: boolean;
        admin: string;
        label: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        source: string;
        builder: string;
        code_hash: Uint8Array;
    };
}
export interface MsgRemoveCodeUploadParamsAddressesAminoType extends AminoMsg {
    type: "wasm/MsgRemoveCodeUploadParamsAddresses";
    value: {
        authority: string;
        addresses: string[];
    };
}
export interface MsgAddCodeUploadParamsAddressesAminoType extends AminoMsg {
    type: "wasm/MsgAddCodeUploadParamsAddresses";
    value: {
        authority: string;
        addresses: string[];
    };
}
export interface MsgStoreAndMigrateContractAminoType extends AminoMsg {
    type: "wasm/MsgStoreAndMigrateContract";
    value: {
        authority: string;
        wasm_byte_code: string;
        instantiate_permission: {
            permission: number;
            addresses: string[];
        };
        contract: string;
        msg: Uint8Array;
    };
}
export interface MsgUpdateContractLabelAminoType extends AminoMsg {
    type: "wasm/MsgUpdateContractLabel";
    value: {
        sender: string;
        new_label: string;
        contract: string;
    };
}
export declare const AminoConverter: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasm_byte_code, instantiate_permission }: MsgStoreCode) => MsgStoreCodeAminoType["value"];
        fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: MsgStoreCodeAminoType["value"]) => MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, admin, code_id, label, msg, funds }: MsgInstantiateContract) => MsgInstantiateContractAminoType["value"];
        fromAmino: ({ sender, admin, code_id, label, msg, funds }: MsgInstantiateContractAminoType["value"]) => MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: MsgInstantiateContract2) => MsgInstantiateContract2AminoType["value"];
        fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: MsgInstantiateContract2AminoType["value"]) => MsgInstantiateContract2;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds }: MsgExecuteContract) => MsgExecuteContractAminoType["value"];
        fromAmino: ({ sender, contract, msg, funds }: MsgExecuteContractAminoType["value"]) => MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: ({ sender, contract, code_id, msg }: MsgMigrateContract) => MsgMigrateContractAminoType["value"];
        fromAmino: ({ sender, contract, code_id, msg }: MsgMigrateContractAminoType["value"]) => MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: ({ sender, new_admin, contract }: MsgUpdateAdmin) => MsgUpdateAdminAminoType["value"];
        fromAmino: ({ sender, new_admin, contract }: MsgUpdateAdminAminoType["value"]) => MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: ({ sender, contract }: MsgClearAdmin) => MsgClearAdminAminoType["value"];
        fromAmino: ({ sender, contract }: MsgClearAdminAminoType["value"]) => MsgClearAdmin;
    };
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
        aminoType: string;
        toAmino: ({ sender, code_id, new_instantiate_permission }: MsgUpdateInstantiateConfig) => MsgUpdateInstantiateConfigAminoType["value"];
        fromAmino: ({ sender, code_id, new_instantiate_permission }: MsgUpdateInstantiateConfigAminoType["value"]) => MsgUpdateInstantiateConfig;
    };
    "/cosmwasm.wasm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/cosmwasm.wasm.v1.MsgSudoContract": {
        aminoType: string;
        toAmino: ({ authority, contract, msg }: MsgSudoContract) => MsgSudoContractAminoType["value"];
        fromAmino: ({ authority, contract, msg }: MsgSudoContractAminoType["value"]) => MsgSudoContract;
    };
    "/cosmwasm.wasm.v1.MsgPinCodes": {
        aminoType: string;
        toAmino: ({ authority, code_ids }: MsgPinCodes) => MsgPinCodesAminoType["value"];
        fromAmino: ({ authority, code_ids }: MsgPinCodesAminoType["value"]) => MsgPinCodes;
    };
    "/cosmwasm.wasm.v1.MsgUnpinCodes": {
        aminoType: string;
        toAmino: ({ authority, code_ids }: MsgUnpinCodes) => MsgUnpinCodesAminoType["value"];
        fromAmino: ({ authority, code_ids }: MsgUnpinCodesAminoType["value"]) => MsgUnpinCodes;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
        aminoType: string;
        toAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: MsgStoreAndInstantiateContract) => MsgStoreAndInstantiateContractAminoType["value"];
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: MsgStoreAndInstantiateContractAminoType["value"]) => MsgStoreAndInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
        aminoType: string;
        toAmino: ({ authority, addresses }: MsgRemoveCodeUploadParamsAddresses) => MsgRemoveCodeUploadParamsAddressesAminoType["value"];
        fromAmino: ({ authority, addresses }: MsgRemoveCodeUploadParamsAddressesAminoType["value"]) => MsgRemoveCodeUploadParamsAddresses;
    };
    "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
        aminoType: string;
        toAmino: ({ authority, addresses }: MsgAddCodeUploadParamsAddresses) => MsgAddCodeUploadParamsAddressesAminoType["value"];
        fromAmino: ({ authority, addresses }: MsgAddCodeUploadParamsAddressesAminoType["value"]) => MsgAddCodeUploadParamsAddresses;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
        aminoType: string;
        toAmino: ({ authority, wasm_byte_code, instantiate_permission, contract, msg }: MsgStoreAndMigrateContract) => MsgStoreAndMigrateContractAminoType["value"];
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, contract, msg }: MsgStoreAndMigrateContractAminoType["value"]) => MsgStoreAndMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
        aminoType: string;
        toAmino: ({ sender, new_label, contract }: MsgUpdateContractLabel) => MsgUpdateContractLabelAminoType["value"];
        fromAmino: ({ sender, new_label, contract }: MsgUpdateContractLabelAminoType["value"]) => MsgUpdateContractLabel;
    };
};
