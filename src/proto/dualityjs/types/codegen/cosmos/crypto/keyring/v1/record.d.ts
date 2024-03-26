import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pub_key: Any;
    /** local stores the private key locally. */
    local?: Record_Local;
    /** ledger stores the information about a Ledger key. */
    ledger?: Record_Ledger;
    /** Multi does not store any other information. */
    multi?: Record_Multi;
    /** Offline does not store any other information. */
    offline?: Record_Offline;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    priv_key: Any;
}
/** Ledger item */
export interface Record_Ledger {
    path: BIP44Params;
}
/** Multi item */
export interface Record_Multi {
}
/** Offline item */
export interface Record_Offline {
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    fromPartial(object: DeepPartial<Record>): Record;
};
export declare const Record_Local: {
    encode(message: Record_Local, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local;
    fromJSON(object: any): Record_Local;
    fromPartial(object: DeepPartial<Record_Local>): Record_Local;
};
export declare const Record_Ledger: {
    encode(message: Record_Ledger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger;
    fromJSON(object: any): Record_Ledger;
    fromPartial(object: DeepPartial<Record_Ledger>): Record_Ledger;
};
export declare const Record_Multi: {
    encode(_: Record_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi;
    fromJSON(_: any): Record_Multi;
    fromPartial(_: DeepPartial<Record_Multi>): Record_Multi;
};
export declare const Record_Offline: {
    encode(_: Record_Offline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline;
    fromJSON(_: any): Record_Offline;
    fromPartial(_: DeepPartial<Record_Offline>): Record_Offline;
};
