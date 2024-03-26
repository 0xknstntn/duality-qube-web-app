import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ibcAminoConverters: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: import("./applications/transfer/v1/tx").MsgTransfer) => {
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
        }) => import("./applications/transfer/v1/tx").MsgTransfer;
    };
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./applications/transfer/v1/tx").MsgUpdateParams) => {
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
        }) => import("./applications/transfer/v1/tx").MsgUpdateParams;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
