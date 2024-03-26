import { ResponseCheckTx, ResponseDeliverTx } from "../../abci/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface RequestPing {
}
export interface RequestBroadcastTx {
    tx: Uint8Array;
}
export interface ResponsePing {
}
export interface ResponseBroadcastTx {
    check_tx: ResponseCheckTx;
    deliver_tx: ResponseDeliverTx;
}
export declare const RequestPing: {
    encode(_: RequestPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing;
    fromJSON(_: any): RequestPing;
    fromPartial(_: DeepPartial<RequestPing>): RequestPing;
};
export declare const RequestBroadcastTx: {
    encode(message: RequestBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx;
    fromJSON(object: any): RequestBroadcastTx;
    fromPartial(object: DeepPartial<RequestBroadcastTx>): RequestBroadcastTx;
};
export declare const ResponsePing: {
    encode(_: ResponsePing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing;
    fromJSON(_: any): ResponsePing;
    fromPartial(_: DeepPartial<ResponsePing>): ResponsePing;
};
export declare const ResponseBroadcastTx: {
    encode(message: ResponseBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx;
    fromJSON(object: any): ResponseBroadcastTx;
    fromPartial(object: DeepPartial<ResponseBroadcastTx>): ResponseBroadcastTx;
};
