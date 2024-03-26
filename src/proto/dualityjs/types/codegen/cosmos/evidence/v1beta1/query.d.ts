import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
    /**
     * evidence_hash defines the hash of the requested evidence.
     * Deprecated: Use hash, a HEX encoded string, instead.
     */
    /** @deprecated */
    evidence_hash: Uint8Array;
    /**
     * hash defines the evidence hash of the requested evidence.
     *
     * Since: cosmos-sdk 0.47
     */
    hash: string;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
    /** evidence returns the requested evidence. */
    evidence: Any;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
    /** evidence returns all evidences. */
    evidence: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export declare const QueryEvidenceRequest: {
    encode(message: QueryEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceRequest;
    fromJSON(object: any): QueryEvidenceRequest;
    fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest;
};
export declare const QueryEvidenceResponse: {
    encode(message: QueryEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceResponse;
    fromJSON(object: any): QueryEvidenceResponse;
    fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse;
};
export declare const QueryAllEvidenceRequest: {
    encode(message: QueryAllEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceRequest;
    fromJSON(object: any): QueryAllEvidenceRequest;
    fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest;
};
export declare const QueryAllEvidenceResponse: {
    encode(message: QueryAllEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceResponse;
    fromJSON(object: any): QueryAllEvidenceResponse;
    fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse;
};
