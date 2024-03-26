import { AccessConfig } from "./types";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorization {
    /** Grants for code upload */
    grants: CodeGrant[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    /** Grants for contract executions */
    grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrant {
    /**
     * CodeHash is the unique identifier created by wasmvm
     * Wildcard "*" is used to specify any kind of grant.
     */
    code_hash: Uint8Array;
    /**
     * InstantiatePermission is the superset access control to apply
     * on contract creation.
     * Optional
     */
    instantiate_permission: AccessConfig;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit: Any;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter: Any;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    /** Remaining number that is decremented on each execution */
    remaining: Long;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    /** Remaining number that is decremented on each execution */
    calls_remaining: Long;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    /** Messages is the list of unique keys */
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export declare const StoreCodeAuthorization: {
    encode(message: StoreCodeAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeAuthorization;
    fromJSON(object: any): StoreCodeAuthorization;
    fromPartial(object: DeepPartial<StoreCodeAuthorization>): StoreCodeAuthorization;
};
export declare const ContractExecutionAuthorization: {
    encode(message: ContractExecutionAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromJSON(object: any): ContractExecutionAuthorization;
    fromPartial(object: DeepPartial<ContractExecutionAuthorization>): ContractExecutionAuthorization;
};
export declare const ContractMigrationAuthorization: {
    encode(message: ContractMigrationAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromJSON(object: any): ContractMigrationAuthorization;
    fromPartial(object: DeepPartial<ContractMigrationAuthorization>): ContractMigrationAuthorization;
};
export declare const CodeGrant: {
    encode(message: CodeGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeGrant;
    fromJSON(object: any): CodeGrant;
    fromPartial(object: DeepPartial<CodeGrant>): CodeGrant;
};
export declare const ContractGrant: {
    encode(message: ContractGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractGrant;
    fromJSON(object: any): ContractGrant;
    fromPartial(object: DeepPartial<ContractGrant>): ContractGrant;
};
export declare const MaxCallsLimit: {
    encode(message: MaxCallsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaxCallsLimit;
    fromJSON(object: any): MaxCallsLimit;
    fromPartial(object: DeepPartial<MaxCallsLimit>): MaxCallsLimit;
};
export declare const MaxFundsLimit: {
    encode(message: MaxFundsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaxFundsLimit;
    fromJSON(object: any): MaxFundsLimit;
    fromPartial(object: DeepPartial<MaxFundsLimit>): MaxFundsLimit;
};
export declare const CombinedLimit: {
    encode(message: CombinedLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CombinedLimit;
    fromJSON(object: any): CombinedLimit;
    fromPartial(object: DeepPartial<CombinedLimit>): CombinedLimit;
};
export declare const AllowAllMessagesFilter: {
    encode(_: AllowAllMessagesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromJSON(_: any): AllowAllMessagesFilter;
    fromPartial(_: DeepPartial<AllowAllMessagesFilter>): AllowAllMessagesFilter;
};
export declare const AcceptedMessageKeysFilter: {
    encode(message: AcceptedMessageKeysFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromJSON(object: any): AcceptedMessageKeysFilter;
    fromPartial(object: DeepPartial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter;
};
export declare const AcceptedMessagesFilter: {
    encode(message: AcceptedMessagesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromJSON(object: any): AcceptedMessagesFilter;
    fromPartial(object: DeepPartial<AcceptedMessagesFilter>): AcceptedMessagesFilter;
};
