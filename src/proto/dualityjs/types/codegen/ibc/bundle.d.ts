import * as _148 from "./applications/transfer/v1/query";
import * as _149 from "./applications/transfer/v1/transfer";
import * as _150 from "./applications/transfer/v1/tx";
import * as _151 from "./core/channel/v1/channel";
import * as _152 from "./core/channel/v1/query";
import * as _153 from "./core/client/v1/client";
import * as _154 from "./core/client/v1/query";
import * as _155 from "./core/commitment/v1/commitment";
import * as _156 from "./core/connection/v1/connection";
import * as _157 from "./core/connection/v1/query";
import * as _299 from "./applications/transfer/v1/query.lcd";
import * as _300 from "./core/channel/v1/query.lcd";
import * as _301 from "./core/client/v1/query.lcd";
import * as _302 from "./core/connection/v1/query.lcd";
import * as _303 from "./applications/transfer/v1/query.rpc.Query";
import * as _304 from "./core/channel/v1/query.rpc.Query";
import * as _305 from "./core/client/v1/query.rpc.Query";
import * as _306 from "./core/connection/v1/query.rpc.Query";
import * as _307 from "./applications/transfer/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _307.MsgClientImpl;
                QueryClientImpl: typeof _303.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _148.QueryDenomTraceRequest): Promise<_148.QueryDenomTraceResponse>;
                    denomTraces(request?: _148.QueryDenomTracesRequest): Promise<_148.QueryDenomTracesResponse>;
                    params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                    denomHash(request: _148.QueryDenomHashRequest): Promise<_148.QueryDenomHashResponse>;
                    escrowAddress(request: _148.QueryEscrowAddressRequest): Promise<_148.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _148.QueryTotalEscrowForDenomRequest): Promise<_148.QueryTotalEscrowForDenomResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useDenomTrace: <TData = _148.QueryDenomTraceResponse>({ request, options }: _303.UseDenomTraceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useDenomTraces: <TData_1 = _148.QueryDenomTracesResponse>({ request, options }: _303.UseDenomTracesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useParams: <TData_2 = _148.QueryParamsResponse>({ request, options }: _303.UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useDenomHash: <TData_3 = _148.QueryDenomHashResponse>({ request, options }: _303.UseDenomHashQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useEscrowAddress: <TData_4 = _148.QueryEscrowAddressResponse>({ request, options }: _303.UseEscrowAddressQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useTotalEscrowForDenom: <TData_5 = _148.QueryTotalEscrowForDenomResponse>({ request, options }: _303.UseTotalEscrowForDenomQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                };
                LCDQueryClient: typeof _299.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _150.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _150.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _150.MsgTransfer): {
                            typeUrl: string;
                            value: _150.MsgTransfer;
                        };
                        updateParams(value: _150.MsgUpdateParams): {
                            typeUrl: string;
                            value: _150.MsgUpdateParams;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _150.MsgTransfer;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _150.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _150.MsgTransfer): {
                            typeUrl: string;
                            value: _150.MsgTransfer;
                        };
                        updateParams(value: _150.MsgUpdateParams): {
                            typeUrl: string;
                            value: _150.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: _150.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                            memo: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                            memo: string;
                        }) => _150.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: ({ authority, params }: _150.MsgUpdateParams) => {
                            authority: string;
                            params: {
                                allowed_clients: string[];
                            };
                        };
                        fromAmino: ({ authority, params }: {
                            authority: string;
                            params: {
                                allowed_clients: string[];
                            };
                        }) => _150.MsgUpdateParams;
                    };
                };
                MsgTransfer: {
                    encode(message: _150.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgTransfer;
                    fromJSON(object: any): _150.MsgTransfer;
                    fromPartial(object: {
                        source_port?: string;
                        source_channel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeout_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                        timeout_timestamp?: string | number | import("long").default;
                        memo?: string;
                    }): _150.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _150.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgTransferResponse;
                    fromJSON(object: any): _150.MsgTransferResponse;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                    }): _150.MsgTransferResponse;
                };
                MsgUpdateParams: {
                    encode(message: _150.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUpdateParams;
                    fromJSON(object: any): _150.MsgUpdateParams;
                    fromPartial(object: {
                        authority?: string;
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _150.MsgUpdateParams;
                };
                MsgUpdateParamsResponse: {
                    encode(_: _150.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUpdateParamsResponse;
                    fromJSON(_: any): _150.MsgUpdateParamsResponse;
                    fromPartial(_: {}): _150.MsgUpdateParamsResponse;
                };
                DenomTrace: {
                    encode(message: _149.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DenomTrace;
                    fromJSON(object: any): _149.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        base_denom?: string;
                    }): _149.DenomTrace;
                };
                Params: {
                    encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
                    fromJSON(object: any): _149.Params;
                    fromPartial(object: {
                        send_enabled?: boolean;
                        receive_enabled?: boolean;
                    }): _149.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _148.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryDenomTraceRequest;
                    fromJSON(object: any): _148.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _148.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _148.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryDenomTraceResponse;
                    fromJSON(object: any): _148.QueryDenomTraceResponse;
                    fromPartial(object: {
                        denom_trace?: {
                            path?: string;
                            base_denom?: string;
                        };
                    }): _148.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _148.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryDenomTracesRequest;
                    fromJSON(object: any): _148.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _148.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _148.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryDenomTracesResponse;
                    fromJSON(object: any): _148.QueryDenomTracesResponse;
                    fromPartial(object: {
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _148.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                    fromJSON(_: any): _148.QueryParamsRequest;
                    fromPartial(_: {}): _148.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                    fromJSON(object: any): _148.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _148.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _148.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryDenomHashRequest;
                    fromJSON(object: any): _148.QueryDenomHashRequest;
                    fromPartial(object: {
                        trace?: string;
                    }): _148.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _148.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryDenomHashResponse;
                    fromJSON(object: any): _148.QueryDenomHashResponse;
                    fromPartial(object: {
                        hash?: string;
                    }): _148.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _148.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEscrowAddressRequest;
                    fromJSON(object: any): _148.QueryEscrowAddressRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _148.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _148.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEscrowAddressResponse;
                    fromJSON(object: any): _148.QueryEscrowAddressResponse;
                    fromPartial(object: {
                        escrow_address?: string;
                    }): _148.QueryEscrowAddressResponse;
                };
                QueryTotalEscrowForDenomRequest: {
                    encode(message: _148.QueryTotalEscrowForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _148.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: {
                        denom?: string;
                    }): _148.QueryTotalEscrowForDenomRequest;
                };
                QueryTotalEscrowForDenomResponse: {
                    encode(message: _148.QueryTotalEscrowForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _148.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }): _148.QueryTotalEscrowForDenomResponse;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                QueryClientImpl: typeof _304.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _152.QueryChannelRequest): Promise<_152.QueryChannelResponse>;
                    channels(request?: _152.QueryChannelsRequest): Promise<_152.QueryChannelsResponse>;
                    connectionChannels(request: _152.QueryConnectionChannelsRequest): Promise<_152.QueryConnectionChannelsResponse>;
                    channelClientState(request: _152.QueryChannelClientStateRequest): Promise<_152.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _152.QueryChannelConsensusStateRequest): Promise<_152.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _152.QueryPacketCommitmentRequest): Promise<_152.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _152.QueryPacketCommitmentsRequest): Promise<_152.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _152.QueryPacketReceiptRequest): Promise<_152.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _152.QueryPacketAcknowledgementRequest): Promise<_152.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _152.QueryPacketAcknowledgementsRequest): Promise<_152.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _152.QueryUnreceivedPacketsRequest): Promise<_152.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _152.QueryUnreceivedAcksRequest): Promise<_152.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _152.QueryNextSequenceReceiveRequest): Promise<_152.QueryNextSequenceReceiveResponse>;
                    nextSequenceSend(request: _152.QueryNextSequenceSendRequest): Promise<_152.QueryNextSequenceSendResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useChannel: <TData = _152.QueryChannelResponse>({ request, options }: _304.UseChannelQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useChannels: <TData_1 = _152.QueryChannelsResponse>({ request, options }: _304.UseChannelsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useConnectionChannels: <TData_2 = _152.QueryConnectionChannelsResponse>({ request, options }: _304.UseConnectionChannelsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useChannelClientState: <TData_3 = _152.QueryChannelClientStateResponse>({ request, options }: _304.UseChannelClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useChannelConsensusState: <TData_4 = _152.QueryChannelConsensusStateResponse>({ request, options }: _304.UseChannelConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    usePacketCommitment: <TData_5 = _152.QueryPacketCommitmentResponse>({ request, options }: _304.UsePacketCommitmentQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    usePacketCommitments: <TData_6 = _152.QueryPacketCommitmentsResponse>({ request, options }: _304.UsePacketCommitmentsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    usePacketReceipt: <TData_7 = _152.QueryPacketReceiptResponse>({ request, options }: _304.UsePacketReceiptQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                    usePacketAcknowledgement: <TData_8 = _152.QueryPacketAcknowledgementResponse>({ request, options }: _304.UsePacketAcknowledgementQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                    usePacketAcknowledgements: <TData_9 = _152.QueryPacketAcknowledgementsResponse>({ request, options }: _304.UsePacketAcknowledgementsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                    useUnreceivedPackets: <TData_10 = _152.QueryUnreceivedPacketsResponse>({ request, options }: _304.UseUnreceivedPacketsQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
                    useUnreceivedAcks: <TData_11 = _152.QueryUnreceivedAcksResponse>({ request, options }: _304.UseUnreceivedAcksQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                    useNextSequenceReceive: <TData_12 = _152.QueryNextSequenceReceiveResponse>({ request, options }: _304.UseNextSequenceReceiveQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                    useNextSequenceSend: <TData_13 = _152.QueryNextSequenceSendResponse>({ request, options }: _304.UseNextSequenceSendQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
                };
                LCDQueryClient: typeof _300.LCDQueryClient;
                QueryChannelRequest: {
                    encode(message: _152.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelRequest;
                    fromJSON(object: any): _152.QueryChannelRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _152.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _152.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelResponse;
                    fromJSON(object: any): _152.QueryChannelResponse;
                    fromPartial(object: {
                        channel?: {
                            state?: _151.State;
                            ordering?: _151.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _152.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelsRequest;
                    fromJSON(object: any): _152.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _152.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _152.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelsResponse;
                    fromJSON(object: any): _152.QueryChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _151.State;
                            ordering?: _151.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _152.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _152.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _152.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _152.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _152.QueryConnectionChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _151.State;
                            ordering?: _151.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _152.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelClientStateRequest;
                    fromJSON(object: any): _152.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _152.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _152.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelClientStateResponse;
                    fromJSON(object: any): _152.QueryChannelClientStateResponse;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                chain_id?: string;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _152.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _152.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        revision_number?: string | number | import("long").default;
                        revision_height?: string | number | import("long").default;
                    }): _152.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _152.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _152.QueryChannelConsensusStateResponse;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _152.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _152.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").default;
                    }): _152.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _152.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _152.QueryPacketCommitmentResponse;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _152.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _152.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _152.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _152.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _152.QueryPacketCommitmentsResponse;
                    fromPartial(object: {
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _152.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketReceiptRequest;
                    fromJSON(object: any): _152.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").default;
                    }): _152.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _152.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketReceiptResponse;
                    fromJSON(object: any): _152.QueryPacketReceiptResponse;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _152.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _152.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").default;
                    }): _152.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _152.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _152.QueryPacketAcknowledgementResponse;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _152.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _152.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                        packet_commitment_sequences?: (string | number | import("long").default)[];
                    }): _152.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _152.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _152.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: {
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _152.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _152.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_commitment_sequences?: (string | number | import("long").default)[];
                    }): _152.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _152.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _152.QueryUnreceivedPacketsResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").default)[];
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _152.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _152.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_ack_sequences?: (string | number | import("long").default)[];
                    }): _152.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _152.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _152.QueryUnreceivedAcksResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").default)[];
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _152.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _152.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _152.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _152.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _152.QueryNextSequenceReceiveResponse;
                    fromPartial(object: {
                        next_sequence_receive?: string | number | import("long").default;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryNextSequenceReceiveResponse;
                };
                QueryNextSequenceSendRequest: {
                    encode(message: _152.QueryNextSequenceSendRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryNextSequenceSendRequest;
                    fromJSON(object: any): _152.QueryNextSequenceSendRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _152.QueryNextSequenceSendRequest;
                };
                QueryNextSequenceSendResponse: {
                    encode(message: _152.QueryNextSequenceSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryNextSequenceSendResponse;
                    fromJSON(object: any): _152.QueryNextSequenceSendResponse;
                    fromPartial(object: {
                        next_sequence_send?: string | number | import("long").default;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _152.QueryNextSequenceSendResponse;
                };
                stateFromJSON(object: any): _151.State;
                stateToJSON(object: _151.State): string;
                orderFromJSON(object: any): _151.Order;
                orderToJSON(object: _151.Order): string;
                State: typeof _151.State;
                Order: typeof _151.Order;
                Channel: {
                    encode(message: _151.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Channel;
                    fromJSON(object: any): _151.Channel;
                    fromPartial(object: {
                        state?: _151.State;
                        ordering?: _151.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                    }): _151.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _151.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.IdentifiedChannel;
                    fromJSON(object: any): _151.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _151.State;
                        ordering?: _151.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                        port_id?: string;
                        channel_id?: string;
                    }): _151.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _151.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Counterparty;
                    fromJSON(object: any): _151.Counterparty;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _151.Counterparty;
                };
                Packet: {
                    encode(message: _151.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Packet;
                    fromJSON(object: any): _151.Packet;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        source_port?: string;
                        source_channel?: string;
                        destination_port?: string;
                        destination_channel?: string;
                        data?: Uint8Array;
                        timeout_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                        timeout_timestamp?: string | number | import("long").default;
                    }): _151.Packet;
                };
                PacketState: {
                    encode(message: _151.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.PacketState;
                    fromJSON(object: any): _151.PacketState;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").default;
                        data?: Uint8Array;
                    }): _151.PacketState;
                };
                PacketId: {
                    encode(message: _151.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.PacketId;
                    fromJSON(object: any): _151.PacketId;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").default;
                    }): _151.PacketId;
                };
                Acknowledgement: {
                    encode(message: _151.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Acknowledgement;
                    fromJSON(object: any): _151.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _151.Acknowledgement;
                };
                Timeout: {
                    encode(message: _151.Timeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Timeout;
                    fromJSON(object: any): _151.Timeout;
                    fromPartial(object: {
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                        timestamp?: string | number | import("long").default;
                    }): _151.Timeout;
                };
            };
        }
        namespace client {
            const v1: {
                QueryClientImpl: typeof _305.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _154.QueryClientStateRequest): Promise<_154.QueryClientStateResponse>;
                    clientStates(request?: _154.QueryClientStatesRequest): Promise<_154.QueryClientStatesResponse>;
                    consensusState(request: _154.QueryConsensusStateRequest): Promise<_154.QueryConsensusStateResponse>;
                    consensusStates(request: _154.QueryConsensusStatesRequest): Promise<_154.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _154.QueryConsensusStateHeightsRequest): Promise<_154.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _154.QueryClientStatusRequest): Promise<_154.QueryClientStatusResponse>;
                    clientParams(request?: _154.QueryClientParamsRequest): Promise<_154.QueryClientParamsResponse>;
                    upgradedClientState(request?: _154.QueryUpgradedClientStateRequest): Promise<_154.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _154.QueryUpgradedConsensusStateRequest): Promise<_154.QueryUpgradedConsensusStateResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useClientState: <TData = _154.QueryClientStateResponse>({ request, options }: _305.UseClientStateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useClientStates: <TData_1 = _154.QueryClientStatesResponse>({ request, options }: _305.UseClientStatesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useConsensusState: <TData_2 = _154.QueryConsensusStateResponse>({ request, options }: _305.UseConsensusStateQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useConsensusStates: <TData_3 = _154.QueryConsensusStatesResponse>({ request, options }: _305.UseConsensusStatesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useConsensusStateHeights: <TData_4 = _154.QueryConsensusStateHeightsResponse>({ request, options }: _305.UseConsensusStateHeightsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useClientStatus: <TData_5 = _154.QueryClientStatusResponse>({ request, options }: _305.UseClientStatusQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    useClientParams: <TData_6 = _154.QueryClientParamsResponse>({ request, options }: _305.UseClientParamsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    useUpgradedClientState: <TData_7 = _154.QueryUpgradedClientStateResponse>({ request, options }: _305.UseUpgradedClientStateQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                    useUpgradedConsensusState: <TData_8 = _154.QueryUpgradedConsensusStateResponse>({ request, options }: _305.UseUpgradedConsensusStateQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                };
                LCDQueryClient: typeof _301.LCDQueryClient;
                QueryClientStateRequest: {
                    encode(message: _154.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientStateRequest;
                    fromJSON(object: any): _154.QueryClientStateRequest;
                    fromPartial(object: {
                        client_id?: string;
                    }): _154.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _154.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientStateResponse;
                    fromJSON(object: any): _154.QueryClientStateResponse;
                    fromPartial(object: {
                        client_state?: {
                            chain_id?: string;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _154.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _154.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientStatesRequest;
                    fromJSON(object: any): _154.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _154.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _154.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientStatesResponse;
                    fromJSON(object: any): _154.QueryClientStatesResponse;
                    fromPartial(object: {
                        client_states?: {
                            client_id?: string;
                            client_state?: {
                                chain_id?: string;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _154.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _154.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryConsensusStateRequest;
                    fromJSON(object: any): _154.QueryConsensusStateRequest;
                    fromPartial(object: {
                        client_id?: string;
                        revision_number?: string | number | import("long").default;
                        revision_height?: string | number | import("long").default;
                        latest_height?: boolean;
                    }): _154.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _154.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryConsensusStateResponse;
                    fromJSON(object: any): _154.QueryConsensusStateResponse;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _154.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _154.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryConsensusStatesRequest;
                    fromJSON(object: any): _154.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        client_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _154.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _154.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryConsensusStatesResponse;
                    fromJSON(object: any): _154.QueryConsensusStatesResponse;
                    fromPartial(object: {
                        consensus_states?: {
                            height?: {
                                revision_number?: string | number | import("long").default;
                                revision_height?: string | number | import("long").default;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _154.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _154.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _154.QueryConsensusStateHeightsRequest;
                    fromPartial(object: {
                        client_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _154.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _154.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _154.QueryConsensusStateHeightsResponse;
                    fromPartial(object: {
                        consensus_state_heights?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _154.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _154.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientStatusRequest;
                    fromJSON(object: any): _154.QueryClientStatusRequest;
                    fromPartial(object: {
                        client_id?: string;
                    }): _154.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _154.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientStatusResponse;
                    fromJSON(object: any): _154.QueryClientStatusResponse;
                    fromPartial(object: {
                        status?: string;
                    }): _154.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _154.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientParamsRequest;
                    fromJSON(_: any): _154.QueryClientParamsRequest;
                    fromPartial(_: {}): _154.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _154.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryClientParamsResponse;
                    fromJSON(object: any): _154.QueryClientParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _154.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _154.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _154.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _154.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _154.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _154.QueryUpgradedClientStateResponse;
                    fromPartial(object: {
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _154.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _154.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _154.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _154.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _154.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _154.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: {
                        upgraded_consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _154.QueryUpgradedConsensusStateResponse;
                };
                ClientState: {
                    encode(message: _153.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ClientState;
                    fromJSON(object: any): _153.ClientState;
                    fromPartial(object: {
                        chain_id?: string;
                    }): _153.ClientState;
                };
                IdentifiedClientState: {
                    encode(message: _153.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.IdentifiedClientState;
                    fromJSON(object: any): _153.IdentifiedClientState;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            chain_id?: string;
                        };
                    }): _153.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _153.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ConsensusStateWithHeight;
                    fromJSON(object: any): _153.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _153.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _153.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ClientConsensusStates;
                    fromJSON(object: any): _153.ClientConsensusStates;
                    fromPartial(object: {
                        client_id?: string;
                        consensus_states?: {
                            height?: {
                                revision_number?: string | number | import("long").default;
                                revision_height?: string | number | import("long").default;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _153.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _153.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ClientUpdateProposal;
                    fromJSON(object: any): _153.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subject_client_id?: string;
                        substitute_client_id?: string;
                    }): _153.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _153.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.UpgradeProposal;
                    fromJSON(object: any): _153.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            height?: string | number | import("long").default;
                            info?: string;
                            upgraded_client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _153.UpgradeProposal;
                };
                Height: {
                    encode(message: _153.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Height;
                    fromJSON(object: any): _153.Height;
                    fromPartial(object: {
                        revision_number?: string | number | import("long").default;
                        revision_height?: string | number | import("long").default;
                    }): _153.Height;
                };
                Params: {
                    encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                    fromJSON(object: any): _153.Params;
                    fromPartial(object: {
                        allowed_clients?: string[];
                    }): _153.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _155.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MerkleRoot;
                    fromJSON(object: any): _155.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _155.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _155.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MerklePrefix;
                    fromJSON(object: any): _155.MerklePrefix;
                    fromPartial(object: {
                        key_prefix?: Uint8Array;
                    }): _155.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _155.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MerklePath;
                    fromJSON(object: any): _155.MerklePath;
                    fromPartial(object: {
                        key_path?: string[];
                    }): _155.MerklePath;
                };
                MerkleProof: {
                    encode(message: _155.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MerkleProof;
                    fromJSON(object: any): _155.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_key?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehash_value?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookup_inners?: {
                                    hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _155.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                QueryClientImpl: typeof _306.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _157.QueryConnectionRequest): Promise<_157.QueryConnectionResponse>;
                    connections(request?: _157.QueryConnectionsRequest): Promise<_157.QueryConnectionsResponse>;
                    clientConnections(request: _157.QueryClientConnectionsRequest): Promise<_157.QueryClientConnectionsResponse>;
                    connectionClientState(request: _157.QueryConnectionClientStateRequest): Promise<_157.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _157.QueryConnectionConsensusStateRequest): Promise<_157.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _157.QueryConnectionParamsRequest): Promise<_157.QueryConnectionParamsResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useConnection: <TData = _157.QueryConnectionResponse>({ request, options }: _306.UseConnectionQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useConnections: <TData_1 = _157.QueryConnectionsResponse>({ request, options }: _306.UseConnectionsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useClientConnections: <TData_2 = _157.QueryClientConnectionsResponse>({ request, options }: _306.UseClientConnectionsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useConnectionClientState: <TData_3 = _157.QueryConnectionClientStateResponse>({ request, options }: _306.UseConnectionClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useConnectionConsensusState: <TData_4 = _157.QueryConnectionConsensusStateResponse>({ request, options }: _306.UseConnectionConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useConnectionParams: <TData_5 = _157.QueryConnectionParamsResponse>({ request, options }: _306.UseConnectionParamsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                };
                LCDQueryClient: typeof _302.LCDQueryClient;
                QueryConnectionRequest: {
                    encode(message: _157.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionRequest;
                    fromJSON(object: any): _157.QueryConnectionRequest;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _157.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _157.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionResponse;
                    fromJSON(object: any): _157.QueryConnectionResponse;
                    fromPartial(object: {
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _156.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").default;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _157.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _157.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionsRequest;
                    fromJSON(object: any): _157.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _157.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _157.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionsResponse;
                    fromJSON(object: any): _157.QueryConnectionsResponse;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _156.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _157.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _157.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryClientConnectionsRequest;
                    fromJSON(object: any): _157.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        client_id?: string;
                    }): _157.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _157.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryClientConnectionsResponse;
                    fromJSON(object: any): _157.QueryClientConnectionsResponse;
                    fromPartial(object: {
                        connection_paths?: string[];
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _157.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _157.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _157.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _157.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _157.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _157.QueryConnectionClientStateResponse;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                chain_id?: string;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _157.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _157.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _157.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connection_id?: string;
                        revision_number?: string | number | import("long").default;
                        revision_height?: string | number | import("long").default;
                    }): _157.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _157.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _157.QueryConnectionConsensusStateResponse;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").default;
                            revision_height?: string | number | import("long").default;
                        };
                    }): _157.QueryConnectionConsensusStateResponse;
                };
                QueryConnectionParamsRequest: {
                    encode(_: _157.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionParamsRequest;
                    fromJSON(_: any): _157.QueryConnectionParamsRequest;
                    fromPartial(_: {}): _157.QueryConnectionParamsRequest;
                };
                QueryConnectionParamsResponse: {
                    encode(message: _157.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryConnectionParamsResponse;
                    fromJSON(object: any): _157.QueryConnectionParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _157.QueryConnectionParamsResponse;
                };
                stateFromJSON(object: any): _156.State;
                stateToJSON(object: _156.State): string;
                State: typeof _156.State;
                ConnectionEnd: {
                    encode(message: _156.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ConnectionEnd;
                    fromJSON(object: any): _156.ConnectionEnd;
                    fromPartial(object: {
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _156.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: string | number | import("long").default;
                    }): _156.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _156.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.IdentifiedConnection;
                    fromJSON(object: any): _156.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _156.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: string | number | import("long").default;
                    }): _156.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _156.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Counterparty;
                    fromJSON(object: any): _156.Counterparty;
                    fromPartial(object: {
                        client_id?: string;
                        connection_id?: string;
                        prefix?: {
                            key_prefix?: Uint8Array;
                        };
                    }): _156.Counterparty;
                };
                ClientPaths: {
                    encode(message: _156.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ClientPaths;
                    fromJSON(object: any): _156.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _156.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _156.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ConnectionPaths;
                    fromJSON(object: any): _156.ConnectionPaths;
                    fromPartial(object: {
                        client_id?: string;
                        paths?: string[];
                    }): _156.ConnectionPaths;
                };
                Version: {
                    encode(message: _156.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Version;
                    fromJSON(object: any): _156.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _156.Version;
                };
                Params: {
                    encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                    fromJSON(object: any): _156.Params;
                    fromPartial(object: {
                        max_expected_time_per_block?: string | number | import("long").default;
                    }): _156.Params;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _307.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _148.QueryDenomTraceRequest): Promise<_148.QueryDenomTraceResponse>;
                            denomTraces(request?: _148.QueryDenomTracesRequest): Promise<_148.QueryDenomTracesResponse>;
                            params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                            denomHash(request: _148.QueryDenomHashRequest): Promise<_148.QueryDenomHashResponse>;
                            escrowAddress(request: _148.QueryEscrowAddressRequest): Promise<_148.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _148.QueryTotalEscrowForDenomRequest): Promise<_148.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _152.QueryChannelRequest): Promise<_152.QueryChannelResponse>;
                            channels(request?: _152.QueryChannelsRequest): Promise<_152.QueryChannelsResponse>;
                            connectionChannels(request: _152.QueryConnectionChannelsRequest): Promise<_152.QueryConnectionChannelsResponse>;
                            channelClientState(request: _152.QueryChannelClientStateRequest): Promise<_152.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _152.QueryChannelConsensusStateRequest): Promise<_152.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _152.QueryPacketCommitmentRequest): Promise<_152.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _152.QueryPacketCommitmentsRequest): Promise<_152.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _152.QueryPacketReceiptRequest): Promise<_152.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _152.QueryPacketAcknowledgementRequest): Promise<_152.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _152.QueryPacketAcknowledgementsRequest): Promise<_152.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _152.QueryUnreceivedPacketsRequest): Promise<_152.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _152.QueryUnreceivedAcksRequest): Promise<_152.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _152.QueryNextSequenceReceiveRequest): Promise<_152.QueryNextSequenceReceiveResponse>;
                            nextSequenceSend(request: _152.QueryNextSequenceSendRequest): Promise<_152.QueryNextSequenceSendResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _154.QueryClientStateRequest): Promise<_154.QueryClientStateResponse>;
                            clientStates(request?: _154.QueryClientStatesRequest): Promise<_154.QueryClientStatesResponse>;
                            consensusState(request: _154.QueryConsensusStateRequest): Promise<_154.QueryConsensusStateResponse>;
                            consensusStates(request: _154.QueryConsensusStatesRequest): Promise<_154.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _154.QueryConsensusStateHeightsRequest): Promise<_154.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _154.QueryClientStatusRequest): Promise<_154.QueryClientStatusResponse>;
                            clientParams(request?: _154.QueryClientParamsRequest): Promise<_154.QueryClientParamsResponse>;
                            upgradedClientState(request?: _154.QueryUpgradedClientStateRequest): Promise<_154.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _154.QueryUpgradedConsensusStateRequest): Promise<_154.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _157.QueryConnectionRequest): Promise<_157.QueryConnectionResponse>;
                            connections(request?: _157.QueryConnectionsRequest): Promise<_157.QueryConnectionsResponse>;
                            clientConnections(request: _157.QueryClientConnectionsRequest): Promise<_157.QueryClientConnectionsResponse>;
                            connectionClientState(request: _157.QueryConnectionClientStateRequest): Promise<_157.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _157.QueryConnectionConsensusStateRequest): Promise<_157.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _157.QueryConnectionParamsRequest): Promise<_157.QueryConnectionParamsResponse>;
                        };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _299.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _300.LCDQueryClient;
                    };
                    client: {
                        v1: _301.LCDQueryClient;
                    };
                    connection: {
                        v1: _302.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
