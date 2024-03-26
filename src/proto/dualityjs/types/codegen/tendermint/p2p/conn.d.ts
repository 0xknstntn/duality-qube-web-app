import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface PacketPing {
}
export interface PacketPong {
}
export interface PacketMsg {
    channel_id: number;
    eof: boolean;
    data: Uint8Array;
}
export interface Packet {
    packet_ping?: PacketPing;
    packet_pong?: PacketPong;
    packet_msg?: PacketMsg;
}
export interface AuthSigMessage {
    pub_key: PublicKey;
    sig: Uint8Array;
}
export declare const PacketPing: {
    encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing;
    fromJSON(_: any): PacketPing;
    fromPartial(_: DeepPartial<PacketPing>): PacketPing;
};
export declare const PacketPong: {
    encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong;
    fromJSON(_: any): PacketPong;
    fromPartial(_: DeepPartial<PacketPong>): PacketPong;
};
export declare const PacketMsg: {
    encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg;
    fromJSON(object: any): PacketMsg;
    fromPartial(object: DeepPartial<PacketMsg>): PacketMsg;
};
export declare const Packet: {
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Packet;
    fromJSON(object: any): Packet;
    fromPartial(object: DeepPartial<Packet>): Packet;
};
export declare const AuthSigMessage: {
    encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage;
    fromJSON(object: any): AuthSigMessage;
    fromPartial(object: DeepPartial<AuthSigMessage>): AuthSigMessage;
};
