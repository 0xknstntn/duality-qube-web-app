import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GetRequest is the Query/Get request type. */
export interface GetRequest {
    /** message_name is the fully-qualified message name of the ORM table being queried. */
    message_name: string;
    /**
     * index is the index fields expression used in orm definitions. If it
     * is empty, the table's primary key is assumed. If it is non-empty, it must
     * refer to an unique index.
     */
    index: string;
    /**
     * values are the values of the fields corresponding to the requested index.
     * There must be as many values provided as there are fields in the index and
     * these values must correspond to the index field types.
     */
    values: IndexValue[];
}
/** GetResponse is the Query/Get response type. */
export interface GetResponse {
    /**
     * result is the result of the get query. If no value is found, the gRPC
     * status code NOT_FOUND will be returned.
     */
    result: Any;
}
/** ListRequest is the Query/List request type. */
export interface ListRequest {
    /** message_name is the fully-qualified message name of the ORM table being queried. */
    message_name: string;
    /**
     * index is the index fields expression used in orm definitions. If it
     * is empty, the table's primary key is assumed.
     */
    index: string;
    /** prefix defines a prefix query. */
    prefix?: ListRequest_Prefix;
    /** range defines a range query. */
    range?: ListRequest_Range;
    /** pagination is the pagination request. */
    pagination: PageRequest;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
    /**
     * values specifies the index values for the prefix query.
     * It is valid to special a partial prefix with fewer values than
     * the number of fields in the index.
     */
    values: IndexValue[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
    /**
     * start specifies the starting index values for the range query.
     * It is valid to provide fewer values than the number of fields in the
     * index.
     */
    start: IndexValue[];
    /**
     * end specifies the inclusive ending index values for the range query.
     * It is valid to provide fewer values than the number of fields in the
     * index.
     */
    end: IndexValue[];
}
/** ListResponse is the Query/List response type. */
export interface ListResponse {
    /** results are the results of the query. */
    results: Any[];
    /** pagination is the pagination response. */
    pagination: PageResponse;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
    /**
     * uint specifies a value for an uint32, fixed32, uint64, or fixed64
     * index field.
     */
    uint?: Long;
    /**
     * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
     * index field.
     */
    int?: Long;
    /** str specifies a value for a string index field. */
    str?: string;
    /** bytes specifies a value for a bytes index field. */
    bytes?: Uint8Array;
    /** enum specifies a value for an enum index field. */
    enum?: string;
    /** bool specifies a value for a bool index field. */
    bool?: boolean;
    /** timestamp specifies a value for a timestamp index field. */
    timestamp?: Timestamp;
    /** duration specifies a value for a duration index field. */
    duration?: Duration;
}
export declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    fromPartial(object: DeepPartial<GetRequest>): GetRequest;
};
export declare const GetResponse: {
    encode(message: GetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse;
    fromJSON(object: any): GetResponse;
    fromPartial(object: DeepPartial<GetResponse>): GetResponse;
};
export declare const ListRequest: {
    encode(message: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(object: any): ListRequest;
    fromPartial(object: DeepPartial<ListRequest>): ListRequest;
};
export declare const ListRequest_Prefix: {
    encode(message: ListRequest_Prefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Prefix;
    fromJSON(object: any): ListRequest_Prefix;
    fromPartial(object: DeepPartial<ListRequest_Prefix>): ListRequest_Prefix;
};
export declare const ListRequest_Range: {
    encode(message: ListRequest_Range, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Range;
    fromJSON(object: any): ListRequest_Range;
    fromPartial(object: DeepPartial<ListRequest_Range>): ListRequest_Range;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    fromPartial(object: DeepPartial<ListResponse>): ListResponse;
};
export declare const IndexValue: {
    encode(message: IndexValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IndexValue;
    fromJSON(object: any): IndexValue;
    fromPartial(object: DeepPartial<IndexValue>): IndexValue;
};
