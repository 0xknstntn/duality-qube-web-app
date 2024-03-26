import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const pobAminoConverters: {
    "/pob.builder.v1.MsgAuctionBid": {
        aminoType: string;
        toAmino: ({ bidder, bid, transactions }: import("./builder/v1/tx").MsgAuctionBid) => {
            bidder: string;
            bid: {
                denom: string;
                amount: string;
            };
            transactions: Uint8Array[];
        };
        fromAmino: ({ bidder, bid, transactions }: {
            bidder: string;
            bid: {
                denom: string;
                amount: string;
            };
            transactions: Uint8Array[];
        }) => import("./builder/v1/tx").MsgAuctionBid;
    };
    "/pob.builder.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./builder/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                max_bundle_size: number;
                escrow_account_address: string;
                reserve_fee: {
                    denom: string;
                    amount: string;
                };
                min_bid_increment: {
                    denom: string;
                    amount: string;
                };
                front_running_protection: boolean;
                proposer_fee: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                max_bundle_size: number;
                escrow_account_address: string;
                reserve_fee: {
                    denom: string;
                    amount: string;
                };
                min_bid_increment: {
                    denom: string;
                    amount: string;
                };
                front_running_protection: boolean;
                proposer_fee: string;
            };
        }) => import("./builder/v1/tx").MsgUpdateParams;
    };
};
export declare const pobProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPobClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPobClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
