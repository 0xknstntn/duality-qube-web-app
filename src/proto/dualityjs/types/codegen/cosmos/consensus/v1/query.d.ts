import { ConsensusParams } from "../../../tendermint/types/params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/consensus parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/consensus parameters. */
export interface QueryParamsResponse {
    /**
     * params are the tendermint consensus params stored in the consensus module.
     * Please note that `params.version` is not populated in this response, it is
     * tracked separately in the x/upgrade module.
     */
    params: ConsensusParams;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};