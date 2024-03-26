import * as _109 from "./wasm/v1/authz";
import * as _110 from "./wasm/v1/genesis";
import * as _111 from "./wasm/v1/ibc";
import * as _112 from "./wasm/v1/proposal_legacy";
import * as _113 from "./wasm/v1/query";
import * as _114 from "./wasm/v1/tx";
import * as _115 from "./wasm/v1/types";
import * as _282 from "./wasm/v1/query.lcd";
import * as _283 from "./wasm/v1/query.rpc.Query";
import * as _284 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _113.QueryContractInfoRequest): Promise<_113.QueryContractInfoResponse>;
                contractHistory(request: _113.QueryContractHistoryRequest): Promise<_113.QueryContractHistoryResponse>;
                contractsByCode(request: _113.QueryContractsByCodeRequest): Promise<_113.QueryContractsByCodeResponse>;
                allContractState(request: _113.QueryAllContractStateRequest): Promise<_113.QueryAllContractStateResponse>;
                rawContractState(request: _113.QueryRawContractStateRequest): Promise<_113.QueryRawContractStateResponse>;
                smartContractState(request: _113.QuerySmartContractStateRequest): Promise<_113.QuerySmartContractStateResponse>;
                code(request: _113.QueryCodeRequest): Promise<_113.QueryCodeResponse>;
                codes(request?: _113.QueryCodesRequest): Promise<_113.QueryCodesResponse>;
                pinnedCodes(request?: _113.QueryPinnedCodesRequest): Promise<_113.QueryPinnedCodesResponse>;
                params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                contractsByCreator(request: _113.QueryContractsByCreatorRequest): Promise<_113.QueryContractsByCreatorResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useContractInfo: <TData = _113.QueryContractInfoResponse>({ request, options }: _283.UseContractInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useContractHistory: <TData_1 = _113.QueryContractHistoryResponse>({ request, options }: _283.UseContractHistoryQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useContractsByCode: <TData_2 = _113.QueryContractsByCodeResponse>({ request, options }: _283.UseContractsByCodeQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useAllContractState: <TData_3 = _113.QueryAllContractStateResponse>({ request, options }: _283.UseAllContractStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useRawContractState: <TData_4 = _113.QueryRawContractStateResponse>({ request, options }: _283.UseRawContractStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useSmartContractState: <TData_5 = _113.QuerySmartContractStateResponse>({ request, options }: _283.UseSmartContractStateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useCode: <TData_6 = _113.QueryCodeResponse>({ request, options }: _283.UseCodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useCodes: <TData_7 = _113.QueryCodesResponse>({ request, options }: _283.UseCodesQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                usePinnedCodes: <TData_8 = _113.QueryPinnedCodesResponse>({ request, options }: _283.UsePinnedCodesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useParams: <TData_9 = _113.QueryParamsResponse>({ request, options }: _283.UseParamsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useContractsByCreator: <TData_10 = _113.QueryContractsByCreatorResponse>({ request, options }: _283.UseContractsByCreatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _114.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _114.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _114.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _114.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _114.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _114.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _114.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _114.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _114.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _114.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _114.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _114.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _114.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _114.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _114.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _114.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _114.MsgStoreCode): {
                        typeUrl: string;
                        value: _114.MsgStoreCode;
                    };
                    instantiateContract(value: _114.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _114.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _114.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _114.MsgInstantiateContract2;
                    };
                    executeContract(value: _114.MsgExecuteContract): {
                        typeUrl: string;
                        value: _114.MsgExecuteContract;
                    };
                    migrateContract(value: _114.MsgMigrateContract): {
                        typeUrl: string;
                        value: _114.MsgMigrateContract;
                    };
                    updateAdmin(value: _114.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _114.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _114.MsgClearAdmin): {
                        typeUrl: string;
                        value: _114.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _114.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _114.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                    sudoContract(value: _114.MsgSudoContract): {
                        typeUrl: string;
                        value: _114.MsgSudoContract;
                    };
                    pinCodes(value: _114.MsgPinCodes): {
                        typeUrl: string;
                        value: _114.MsgPinCodes;
                    };
                    unpinCodes(value: _114.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _114.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _114.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _114.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _114.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _114.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _114.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _114.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _114.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _114.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _114.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _114.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _114.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _114.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _114.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _114.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _114.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _114.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _114.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _114.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _114.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _114.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _114.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _114.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _114.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _114.MsgStoreCode): {
                        typeUrl: string;
                        value: _114.MsgStoreCode;
                    };
                    instantiateContract(value: _114.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _114.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _114.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _114.MsgInstantiateContract2;
                    };
                    executeContract(value: _114.MsgExecuteContract): {
                        typeUrl: string;
                        value: _114.MsgExecuteContract;
                    };
                    migrateContract(value: _114.MsgMigrateContract): {
                        typeUrl: string;
                        value: _114.MsgMigrateContract;
                    };
                    updateAdmin(value: _114.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _114.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _114.MsgClearAdmin): {
                        typeUrl: string;
                        value: _114.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _114.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _114.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                    sudoContract(value: _114.MsgSudoContract): {
                        typeUrl: string;
                        value: _114.MsgSudoContract;
                    };
                    pinCodes(value: _114.MsgPinCodes): {
                        typeUrl: string;
                        value: _114.MsgPinCodes;
                    };
                    unpinCodes(value: _114.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _114.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _114.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _114.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _114.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _114.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _114.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _114.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _114.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _114.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _114.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _114.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasm_byte_code, instantiate_permission }: _114.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    }) => _114.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, code_id, label, msg, funds }: _114.MsgInstantiateContract) => {
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
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _114.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: _114.MsgInstantiateContract2) => {
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
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
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
                    }) => _114.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _114.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _114.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, code_id, msg }: _114.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _114.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, new_admin, contract }: _114.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _114.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _114.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _114.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: ({ sender, code_id, new_instantiate_permission }: _114.MsgUpdateInstantiateConfig) => {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, code_id, new_instantiate_permission }: {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    }) => _114.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _114.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            code_upload_access: {
                                permission: number;
                                addresses: string[];
                            };
                            instantiate_default_permission: number;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            code_upload_access: {
                                permission: number;
                                addresses: string[];
                            };
                            instantiate_default_permission: number;
                        };
                    }) => _114.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: ({ authority, contract, msg }: _114.MsgSudoContract) => {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, contract, msg }: {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    }) => _114.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, code_ids }: _114.MsgPinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _114.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, code_ids }: _114.MsgUnpinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _114.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: _114.MsgStoreAndInstantiateContract) => {
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
                    fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: {
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
                    }) => _114.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: ({ authority, addresses }: _114.MsgRemoveCodeUploadParamsAddresses) => {
                        authority: string;
                        addresses: string[];
                    };
                    fromAmino: ({ authority, addresses }: {
                        authority: string;
                        addresses: string[];
                    }) => _114.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: ({ authority, addresses }: _114.MsgAddCodeUploadParamsAddresses) => {
                        authority: string;
                        addresses: string[];
                    };
                    fromAmino: ({ authority, addresses }: {
                        authority: string;
                        addresses: string[];
                    }) => _114.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: ({ authority, wasm_byte_code, instantiate_permission, contract, msg }: _114.MsgStoreAndMigrateContract) => {
                        authority: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                        contract: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, wasm_byte_code, instantiate_permission, contract, msg }: {
                        authority: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                        contract: string;
                        msg: Uint8Array;
                    }) => _114.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: ({ sender, new_label, contract }: _114.MsgUpdateContractLabel) => {
                        sender: string;
                        new_label: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_label, contract }: {
                        sender: string;
                        new_label: string;
                        contract: string;
                    }) => _114.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _115.AccessType;
            accessTypeToJSON(object: _115.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _115.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _115.ContractCodeHistoryOperationType): string;
            AccessType: typeof _115.AccessType;
            ContractCodeHistoryOperationType: typeof _115.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _115.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.AccessTypeParam;
                fromJSON(object: any): _115.AccessTypeParam;
                fromPartial(object: {
                    value?: _115.AccessType;
                }): _115.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _115.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.AccessConfig;
                fromJSON(object: any): _115.AccessConfig;
                fromPartial(object: {
                    permission?: _115.AccessType;
                    addresses?: string[];
                }): _115.AccessConfig;
            };
            Params: {
                encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
                fromJSON(object: any): _115.Params;
                fromPartial(object: {
                    code_upload_access?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                    instantiate_default_permission?: _115.AccessType;
                }): _115.Params;
            };
            CodeInfo: {
                encode(message: _115.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.CodeInfo;
                fromJSON(object: any): _115.CodeInfo;
                fromPartial(object: {
                    code_hash?: Uint8Array;
                    creator?: string;
                    instantiate_config?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                }): _115.CodeInfo;
            };
            ContractInfo: {
                encode(message: _115.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ContractInfo;
                fromJSON(object: any): _115.ContractInfo;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        block_height?: string | number | import("long").default;
                        tx_index?: string | number | import("long").default;
                    };
                    ibc_port_id?: string;
                    extension?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _115.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _115.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ContractCodeHistoryEntry;
                fromJSON(object: any): _115.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _115.ContractCodeHistoryOperationType;
                    code_id?: string | number | import("long").default;
                    updated?: {
                        block_height?: string | number | import("long").default;
                        tx_index?: string | number | import("long").default;
                    };
                    msg?: Uint8Array;
                }): _115.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _115.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.AbsoluteTxPosition;
                fromJSON(object: any): _115.AbsoluteTxPosition;
                fromPartial(object: {
                    block_height?: string | number | import("long").default;
                    tx_index?: string | number | import("long").default;
                }): _115.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _115.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Model;
                fromJSON(object: any): _115.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _115.Model;
            };
            MsgStoreCode: {
                encode(message: _114.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgStoreCode;
                fromJSON(object: any): _114.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                }): _114.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _114.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgStoreCodeResponse;
                fromJSON(object: any): _114.MsgStoreCodeResponse;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    checksum?: Uint8Array;
                }): _114.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _114.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgInstantiateContract;
                fromJSON(object: any): _114.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    code_id?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _114.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _114.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgInstantiateContractResponse;
                fromJSON(object: any): _114.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _114.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2: {
                encode(message: _114.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgInstantiateContract2;
                fromJSON(object: any): _114.MsgInstantiateContract2;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    code_id?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fix_msg?: boolean;
                }): _114.MsgInstantiateContract2;
            };
            MsgInstantiateContract2Response: {
                encode(message: _114.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgInstantiateContract2Response;
                fromJSON(object: any): _114.MsgInstantiateContract2Response;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _114.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _114.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgExecuteContract;
                fromJSON(object: any): _114.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _114.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _114.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgExecuteContractResponse;
                fromJSON(object: any): _114.MsgExecuteContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _114.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _114.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgMigrateContract;
                fromJSON(object: any): _114.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    code_id?: string | number | import("long").default;
                    msg?: Uint8Array;
                }): _114.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _114.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgMigrateContractResponse;
                fromJSON(object: any): _114.MsgMigrateContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _114.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _114.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateAdmin;
                fromJSON(object: any): _114.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    new_admin?: string;
                    contract?: string;
                }): _114.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _114.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateAdminResponse;
                fromJSON(_: any): _114.MsgUpdateAdminResponse;
                fromPartial(_: {}): _114.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _114.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgClearAdmin;
                fromJSON(object: any): _114.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _114.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _114.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgClearAdminResponse;
                fromJSON(_: any): _114.MsgClearAdminResponse;
                fromPartial(_: {}): _114.MsgClearAdminResponse;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _114.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _114.MsgUpdateInstantiateConfig;
                fromPartial(object: {
                    sender?: string;
                    code_id?: string | number | import("long").default;
                    new_instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                }): _114.MsgUpdateInstantiateConfig;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _114.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _114.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: {}): _114.MsgUpdateInstantiateConfigResponse;
            };
            MsgUpdateParams: {
                encode(message: _114.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateParams;
                fromJSON(object: any): _114.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        code_upload_access?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                        instantiate_default_permission?: _115.AccessType;
                    };
                }): _114.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _114.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateParamsResponse;
                fromJSON(_: any): _114.MsgUpdateParamsResponse;
                fromPartial(_: {}): _114.MsgUpdateParamsResponse;
            };
            MsgSudoContract: {
                encode(message: _114.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSudoContract;
                fromJSON(object: any): _114.MsgSudoContract;
                fromPartial(object: {
                    authority?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _114.MsgSudoContract;
            };
            MsgSudoContractResponse: {
                encode(message: _114.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSudoContractResponse;
                fromJSON(object: any): _114.MsgSudoContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _114.MsgSudoContractResponse;
            };
            MsgPinCodes: {
                encode(message: _114.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgPinCodes;
                fromJSON(object: any): _114.MsgPinCodes;
                fromPartial(object: {
                    authority?: string;
                    code_ids?: (string | number | import("long").default)[];
                }): _114.MsgPinCodes;
            };
            MsgPinCodesResponse: {
                encode(_: _114.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgPinCodesResponse;
                fromJSON(_: any): _114.MsgPinCodesResponse;
                fromPartial(_: {}): _114.MsgPinCodesResponse;
            };
            MsgUnpinCodes: {
                encode(message: _114.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUnpinCodes;
                fromJSON(object: any): _114.MsgUnpinCodes;
                fromPartial(object: {
                    authority?: string;
                    code_ids?: (string | number | import("long").default)[];
                }): _114.MsgUnpinCodes;
            };
            MsgUnpinCodesResponse: {
                encode(_: _114.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUnpinCodesResponse;
                fromJSON(_: any): _114.MsgUnpinCodesResponse;
                fromPartial(_: {}): _114.MsgUnpinCodesResponse;
            };
            MsgStoreAndInstantiateContract: {
                encode(message: _114.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _114.MsgStoreAndInstantiateContract;
                fromPartial(object: {
                    authority?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                    unpin_code?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    code_hash?: Uint8Array;
                }): _114.MsgStoreAndInstantiateContract;
            };
            MsgStoreAndInstantiateContractResponse: {
                encode(message: _114.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _114.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _114.MsgStoreAndInstantiateContractResponse;
            };
            MsgAddCodeUploadParamsAddresses: {
                encode(message: _114.MsgAddCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddCodeUploadParamsAddresses;
                fromJSON(object: any): _114.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: {
                    authority?: string;
                    addresses?: string[];
                }): _114.MsgAddCodeUploadParamsAddresses;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                encode(_: _114.MsgAddCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAddCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _114.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: {}): _114.MsgAddCodeUploadParamsAddressesResponse;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                encode(message: _114.MsgRemoveCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRemoveCodeUploadParamsAddresses;
                fromJSON(object: any): _114.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: {
                    authority?: string;
                    addresses?: string[];
                }): _114.MsgRemoveCodeUploadParamsAddresses;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                encode(_: _114.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRemoveCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _114.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: {}): _114.MsgRemoveCodeUploadParamsAddressesResponse;
            };
            MsgStoreAndMigrateContract: {
                encode(message: _114.MsgStoreAndMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgStoreAndMigrateContract;
                fromJSON(object: any): _114.MsgStoreAndMigrateContract;
                fromPartial(object: {
                    authority?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                    contract?: string;
                    msg?: Uint8Array;
                }): _114.MsgStoreAndMigrateContract;
            };
            MsgStoreAndMigrateContractResponse: {
                encode(message: _114.MsgStoreAndMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgStoreAndMigrateContractResponse;
                fromJSON(object: any): _114.MsgStoreAndMigrateContractResponse;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    checksum?: Uint8Array;
                    data?: Uint8Array;
                }): _114.MsgStoreAndMigrateContractResponse;
            };
            MsgUpdateContractLabel: {
                encode(message: _114.MsgUpdateContractLabel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateContractLabel;
                fromJSON(object: any): _114.MsgUpdateContractLabel;
                fromPartial(object: {
                    sender?: string;
                    new_label?: string;
                    contract?: string;
                }): _114.MsgUpdateContractLabel;
            };
            MsgUpdateContractLabelResponse: {
                encode(_: _114.MsgUpdateContractLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateContractLabelResponse;
                fromJSON(_: any): _114.MsgUpdateContractLabelResponse;
                fromPartial(_: {}): _114.MsgUpdateContractLabelResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _113.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractInfoRequest;
                fromJSON(object: any): _113.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _113.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _113.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractInfoResponse;
                fromJSON(object: any): _113.QueryContractInfoResponse;
                fromPartial(object: {
                    address?: string;
                    contract_info?: {
                        code_id?: string | number | import("long").default;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            block_height?: string | number | import("long").default;
                            tx_index?: string | number | import("long").default;
                        };
                        ibc_port_id?: string;
                        extension?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _113.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _113.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractHistoryRequest;
                fromJSON(object: any): _113.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _113.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _113.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractHistoryResponse;
                fromJSON(object: any): _113.QueryContractHistoryResponse;
                fromPartial(object: {
                    entries?: {
                        operation?: _115.ContractCodeHistoryOperationType;
                        code_id?: string | number | import("long").default;
                        updated?: {
                            block_height?: string | number | import("long").default;
                            tx_index?: string | number | import("long").default;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _113.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _113.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractsByCodeRequest;
                fromJSON(object: any): _113.QueryContractsByCodeRequest;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _113.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _113.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractsByCodeResponse;
                fromJSON(object: any): _113.QueryContractsByCodeResponse;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _113.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _113.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryAllContractStateRequest;
                fromJSON(object: any): _113.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _113.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _113.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryAllContractStateResponse;
                fromJSON(object: any): _113.QueryAllContractStateResponse;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _113.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _113.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryRawContractStateRequest;
                fromJSON(object: any): _113.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    query_data?: Uint8Array;
                }): _113.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _113.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryRawContractStateResponse;
                fromJSON(object: any): _113.QueryRawContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _113.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _113.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QuerySmartContractStateRequest;
                fromJSON(object: any): _113.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    query_data?: Uint8Array;
                }): _113.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _113.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QuerySmartContractStateResponse;
                fromJSON(object: any): _113.QuerySmartContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _113.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _113.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryCodeRequest;
                fromJSON(object: any): _113.QueryCodeRequest;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                }): _113.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _113.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.CodeInfoResponse;
                fromJSON(object: any): _113.CodeInfoResponse;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    creator?: string;
                    data_hash?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                }): _113.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _113.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryCodeResponse;
                fromJSON(object: any): _113.QueryCodeResponse;
                fromPartial(object: {
                    code_info?: {
                        code_id?: string | number | import("long").default;
                        creator?: string;
                        data_hash?: Uint8Array;
                        instantiate_permission?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                    };
                    data?: Uint8Array;
                }): _113.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _113.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryCodesRequest;
                fromJSON(object: any): _113.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _113.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _113.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryCodesResponse;
                fromJSON(object: any): _113.QueryCodesResponse;
                fromPartial(object: {
                    code_infos?: {
                        code_id?: string | number | import("long").default;
                        creator?: string;
                        data_hash?: Uint8Array;
                        instantiate_permission?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _113.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _113.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPinnedCodesRequest;
                fromJSON(object: any): _113.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _113.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _113.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPinnedCodesResponse;
                fromJSON(object: any): _113.QueryPinnedCodesResponse;
                fromPartial(object: {
                    code_ids?: (string | number | import("long").default)[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _113.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
                fromJSON(_: any): _113.QueryParamsRequest;
                fromPartial(_: {}): _113.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
                fromJSON(object: any): _113.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        code_upload_access?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                        instantiate_default_permission?: _115.AccessType;
                    };
                }): _113.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _113.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractsByCreatorRequest;
                fromJSON(object: any): _113.QueryContractsByCreatorRequest;
                fromPartial(object: {
                    creator_address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _113.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _113.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryContractsByCreatorResponse;
                fromJSON(object: any): _113.QueryContractsByCreatorResponse;
                fromPartial(object: {
                    contract_addresses?: string[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _113.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _112.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.StoreCodeProposal;
                fromJSON(object: any): _112.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                    unpin_code?: boolean;
                    source?: string;
                    builder?: string;
                    code_hash?: Uint8Array;
                }): _112.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _112.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.InstantiateContractProposal;
                fromJSON(object: any): _112.InstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    admin?: string;
                    code_id?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _112.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _112.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.InstantiateContract2Proposal;
                fromJSON(object: any): _112.InstantiateContract2Proposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    admin?: string;
                    code_id?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fix_msg?: boolean;
                }): _112.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _112.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MigrateContractProposal;
                fromJSON(object: any): _112.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    code_id?: string | number | import("long").default;
                    msg?: Uint8Array;
                }): _112.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _112.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SudoContractProposal;
                fromJSON(object: any): _112.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _112.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _112.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ExecuteContractProposal;
                fromJSON(object: any): _112.ExecuteContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _112.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _112.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UpdateAdminProposal;
                fromJSON(object: any): _112.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    new_admin?: string;
                    contract?: string;
                }): _112.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _112.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClearAdminProposal;
                fromJSON(object: any): _112.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _112.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _112.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PinCodesProposal;
                fromJSON(object: any): _112.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    code_ids?: (string | number | import("long").default)[];
                }): _112.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _112.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UnpinCodesProposal;
                fromJSON(object: any): _112.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    code_ids?: (string | number | import("long").default)[];
                }): _112.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _112.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.AccessConfigUpdate;
                fromJSON(object: any): _112.AccessConfigUpdate;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                }): _112.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _112.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _112.UpdateInstantiateConfigProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    access_config_updates?: {
                        code_id?: string | number | import("long").default;
                        instantiate_permission?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                    }[];
                }): _112.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _112.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _112.StoreAndInstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                    unpin_code?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    code_hash?: Uint8Array;
                }): _112.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _111.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgIBCSend;
                fromJSON(object: any): _111.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeout_height?: string | number | import("long").default;
                    timeout_timestamp?: string | number | import("long").default;
                    data?: Uint8Array;
                }): _111.MsgIBCSend;
            };
            MsgIBCSendResponse: {
                encode(message: _111.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgIBCSendResponse;
                fromJSON(object: any): _111.MsgIBCSendResponse;
                fromPartial(object: {
                    sequence?: string | number | import("long").default;
                }): _111.MsgIBCSendResponse;
            };
            MsgIBCCloseChannel: {
                encode(message: _111.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgIBCCloseChannel;
                fromJSON(object: any): _111.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _111.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                fromJSON(object: any): _110.GenesisState;
                fromPartial(object: {
                    params?: {
                        code_upload_access?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                        instantiate_default_permission?: _115.AccessType;
                    };
                    codes?: {
                        code_id?: string | number | import("long").default;
                        code_info?: {
                            code_hash?: Uint8Array;
                            creator?: string;
                            instantiate_config?: {
                                permission?: _115.AccessType;
                                addresses?: string[];
                            };
                        };
                        code_bytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contract_address?: string;
                        contract_info?: {
                            code_id?: string | number | import("long").default;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                block_height?: string | number | import("long").default;
                                tx_index?: string | number | import("long").default;
                            };
                            ibc_port_id?: string;
                            extension?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        contract_state?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                        contract_code_history?: {
                            operation?: _115.ContractCodeHistoryOperationType;
                            code_id?: string | number | import("long").default;
                            updated?: {
                                block_height?: string | number | import("long").default;
                                tx_index?: string | number | import("long").default;
                            };
                            msg?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        id_key?: Uint8Array;
                        value?: string | number | import("long").default;
                    }[];
                }): _110.GenesisState;
            };
            Code: {
                encode(message: _110.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Code;
                fromJSON(object: any): _110.Code;
                fromPartial(object: {
                    code_id?: string | number | import("long").default;
                    code_info?: {
                        code_hash?: Uint8Array;
                        creator?: string;
                        instantiate_config?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                    };
                    code_bytes?: Uint8Array;
                    pinned?: boolean;
                }): _110.Code;
            };
            Contract: {
                encode(message: _110.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Contract;
                fromJSON(object: any): _110.Contract;
                fromPartial(object: {
                    contract_address?: string;
                    contract_info?: {
                        code_id?: string | number | import("long").default;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            block_height?: string | number | import("long").default;
                            tx_index?: string | number | import("long").default;
                        };
                        ibc_port_id?: string;
                        extension?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                    contract_state?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    contract_code_history?: {
                        operation?: _115.ContractCodeHistoryOperationType;
                        code_id?: string | number | import("long").default;
                        updated?: {
                            block_height?: string | number | import("long").default;
                            tx_index?: string | number | import("long").default;
                        };
                        msg?: Uint8Array;
                    }[];
                }): _110.Contract;
            };
            Sequence: {
                encode(message: _110.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Sequence;
                fromJSON(object: any): _110.Sequence;
                fromPartial(object: {
                    id_key?: Uint8Array;
                    value?: string | number | import("long").default;
                }): _110.Sequence;
            };
            StoreCodeAuthorization: {
                encode(message: _109.StoreCodeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.StoreCodeAuthorization;
                fromJSON(object: any): _109.StoreCodeAuthorization;
                fromPartial(object: {
                    grants?: {
                        code_hash?: Uint8Array;
                        instantiate_permission?: {
                            permission?: _115.AccessType;
                            addresses?: string[];
                        };
                    }[];
                }): _109.StoreCodeAuthorization;
            };
            ContractExecutionAuthorization: {
                encode(message: _109.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ContractExecutionAuthorization;
                fromJSON(object: any): _109.ContractExecutionAuthorization;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        filter?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _109.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _109.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ContractMigrationAuthorization;
                fromJSON(object: any): _109.ContractMigrationAuthorization;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        filter?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _109.ContractMigrationAuthorization;
            };
            CodeGrant: {
                encode(message: _109.CodeGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.CodeGrant;
                fromJSON(object: any): _109.CodeGrant;
                fromPartial(object: {
                    code_hash?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _115.AccessType;
                        addresses?: string[];
                    };
                }): _109.CodeGrant;
            };
            ContractGrant: {
                encode(message: _109.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ContractGrant;
                fromJSON(object: any): _109.ContractGrant;
                fromPartial(object: {
                    contract?: string;
                    limit?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    filter?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _109.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _109.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MaxCallsLimit;
                fromJSON(object: any): _109.MaxCallsLimit;
                fromPartial(object: {
                    remaining?: string | number | import("long").default;
                }): _109.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _109.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MaxFundsLimit;
                fromJSON(object: any): _109.MaxFundsLimit;
                fromPartial(object: {
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _109.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _109.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.CombinedLimit;
                fromJSON(object: any): _109.CombinedLimit;
                fromPartial(object: {
                    calls_remaining?: string | number | import("long").default;
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _109.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _109.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.AllowAllMessagesFilter;
                fromJSON(_: any): _109.AllowAllMessagesFilter;
                fromPartial(_: {}): _109.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _109.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.AcceptedMessageKeysFilter;
                fromJSON(object: any): _109.AcceptedMessageKeysFilter;
                fromPartial(object: {
                    keys?: string[];
                }): _109.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _109.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.AcceptedMessagesFilter;
                fromJSON(object: any): _109.AcceptedMessagesFilter;
                fromPartial(object: {
                    messages?: Uint8Array[];
                }): _109.AcceptedMessagesFilter;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _284.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _113.QueryContractInfoRequest): Promise<_113.QueryContractInfoResponse>;
                        contractHistory(request: _113.QueryContractHistoryRequest): Promise<_113.QueryContractHistoryResponse>;
                        contractsByCode(request: _113.QueryContractsByCodeRequest): Promise<_113.QueryContractsByCodeResponse>;
                        allContractState(request: _113.QueryAllContractStateRequest): Promise<_113.QueryAllContractStateResponse>;
                        rawContractState(request: _113.QueryRawContractStateRequest): Promise<_113.QueryRawContractStateResponse>;
                        smartContractState(request: _113.QuerySmartContractStateRequest): Promise<_113.QuerySmartContractStateResponse>;
                        code(request: _113.QueryCodeRequest): Promise<_113.QueryCodeResponse>;
                        codes(request?: _113.QueryCodesRequest): Promise<_113.QueryCodesResponse>;
                        pinnedCodes(request?: _113.QueryPinnedCodesRequest): Promise<_113.QueryPinnedCodesResponse>;
                        params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                        contractsByCreator(request: _113.QueryContractsByCreatorRequest): Promise<_113.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _282.LCDQueryClient;
                };
            };
        }>;
    };
}
