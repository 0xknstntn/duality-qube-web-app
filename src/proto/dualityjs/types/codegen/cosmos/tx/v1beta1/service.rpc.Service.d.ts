import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
    /**
     * TxDecode decodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>;
    /**
     * TxEncode encodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>;
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     *
     * Since: cosmos-sdk 0.47
     */
    txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>;
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     *
     * Since: cosmos-sdk 0.47
     */
    txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
    txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>;
    txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>;
    txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>;
    txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
    txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>;
    txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>;
    txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>;
    txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>;
};
export interface UseSimulateQuery<TData> extends ReactQueryParams<SimulateResponse, TData> {
    request: SimulateRequest;
}
export interface UseGetTxQuery<TData> extends ReactQueryParams<GetTxResponse, TData> {
    request: GetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends ReactQueryParams<BroadcastTxResponse, TData> {
    request: BroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends ReactQueryParams<GetTxsEventResponse, TData> {
    request: GetTxsEventRequest;
}
export interface UseGetBlockWithTxsQuery<TData> extends ReactQueryParams<GetBlockWithTxsResponse, TData> {
    request: GetBlockWithTxsRequest;
}
export interface UseTxDecodeQuery<TData> extends ReactQueryParams<TxDecodeResponse, TData> {
    request: TxDecodeRequest;
}
export interface UseTxEncodeQuery<TData> extends ReactQueryParams<TxEncodeResponse, TData> {
    request: TxEncodeRequest;
}
export interface UseTxEncodeAminoQuery<TData> extends ReactQueryParams<TxEncodeAminoResponse, TData> {
    request: TxEncodeAminoRequest;
}
export interface UseTxDecodeAminoQuery<TData> extends ReactQueryParams<TxDecodeAminoResponse, TData> {
    request: TxDecodeAminoRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Simulate simulates executing a transaction for estimating gas usage. */ useSimulate: <TData = SimulateResponse>({ request, options }: UseSimulateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GetTx fetches a tx by hash. */ useGetTx: <TData_1 = GetTxResponse>({ request, options }: UseGetTxQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** BroadcastTx broadcast transaction. */ useBroadcastTx: <TData_2 = BroadcastTxResponse>({ request, options }: UseBroadcastTxQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** GetTxsEvent fetches txs by event. */ useGetTxsEvent: <TData_3 = GetTxsEventResponse>({ request, options }: UseGetTxsEventQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs: <TData_4 = GetBlockWithTxsResponse>({ request, options }: UseGetBlockWithTxsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /**
     * TxDecode decodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    useTxDecode: <TData_5 = TxDecodeResponse>({ request, options }: UseTxDecodeQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /**
     * TxEncode encodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    useTxEncode: <TData_6 = TxEncodeResponse>({ request, options }: UseTxEncodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     *
     * Since: cosmos-sdk 0.47
     */
    useTxEncodeAmino: <TData_7 = TxEncodeAminoResponse>({ request, options }: UseTxEncodeAminoQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     *
     * Since: cosmos-sdk 0.47
     */
    useTxDecodeAmino: <TData_8 = TxDecodeAminoResponse>({ request, options }: UseTxDecodeAminoQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
};
