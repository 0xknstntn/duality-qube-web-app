import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState, Params } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection: ConnectionEnd;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height: Height;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination: PageResponse;
    /** query block height */
    height: Height;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connection_paths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proof_height: Height;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identified_client_state: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height: Height;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connection_id: string;
    revision_number: Long;
    revision_height: Long;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensus_state: Any;
    /** client ID associated with the consensus state */
    client_id: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height: Height;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequest {
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export declare const QueryConnectionRequest: {
    encode(message: QueryConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionRequest;
    fromJSON(object: any): QueryConnectionRequest;
    fromPartial(object: DeepPartial<QueryConnectionRequest>): QueryConnectionRequest;
};
export declare const QueryConnectionResponse: {
    encode(message: QueryConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionResponse;
    fromJSON(object: any): QueryConnectionResponse;
    fromPartial(object: DeepPartial<QueryConnectionResponse>): QueryConnectionResponse;
};
export declare const QueryConnectionsRequest: {
    encode(message: QueryConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsRequest;
    fromJSON(object: any): QueryConnectionsRequest;
    fromPartial(object: DeepPartial<QueryConnectionsRequest>): QueryConnectionsRequest;
};
export declare const QueryConnectionsResponse: {
    encode(message: QueryConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsResponse;
    fromJSON(object: any): QueryConnectionsResponse;
    fromPartial(object: DeepPartial<QueryConnectionsResponse>): QueryConnectionsResponse;
};
export declare const QueryClientConnectionsRequest: {
    encode(message: QueryClientConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsRequest;
    fromJSON(object: any): QueryClientConnectionsRequest;
    fromPartial(object: DeepPartial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest;
};
export declare const QueryClientConnectionsResponse: {
    encode(message: QueryClientConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsResponse;
    fromJSON(object: any): QueryClientConnectionsResponse;
    fromPartial(object: DeepPartial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse;
};
export declare const QueryConnectionClientStateRequest: {
    encode(message: QueryConnectionClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateRequest;
    fromJSON(object: any): QueryConnectionClientStateRequest;
    fromPartial(object: DeepPartial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest;
};
export declare const QueryConnectionClientStateResponse: {
    encode(message: QueryConnectionClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateResponse;
    fromJSON(object: any): QueryConnectionClientStateResponse;
    fromPartial(object: DeepPartial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse;
};
export declare const QueryConnectionConsensusStateRequest: {
    encode(message: QueryConnectionConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest;
    fromJSON(object: any): QueryConnectionConsensusStateRequest;
    fromPartial(object: DeepPartial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest;
};
export declare const QueryConnectionConsensusStateResponse: {
    encode(message: QueryConnectionConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse;
    fromJSON(object: any): QueryConnectionConsensusStateResponse;
    fromPartial(object: DeepPartial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse;
};
export declare const QueryConnectionParamsRequest: {
    encode(_: QueryConnectionParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionParamsRequest;
    fromJSON(_: any): QueryConnectionParamsRequest;
    fromPartial(_: DeepPartial<QueryConnectionParamsRequest>): QueryConnectionParamsRequest;
};
export declare const QueryConnectionParamsResponse: {
    encode(message: QueryConnectionParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionParamsResponse;
    fromJSON(object: any): QueryConnectionParamsResponse;
    fromPartial(object: DeepPartial<QueryConnectionParamsResponse>): QueryConnectionParamsResponse;
};
