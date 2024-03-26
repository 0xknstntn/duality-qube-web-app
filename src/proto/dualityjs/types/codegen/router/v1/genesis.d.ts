import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState_InFlightPacketsEntry {
    key: string;
    value: InFlightPacket;
}
/** GenesisState defines the router genesis state */
export interface GenesisState {
    params: Params;
    /**
     * key - information about forwarded packet: src_channel
     * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
     * information about original packet for refunding if necessary: retries,
     * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
     */
    in_flight_packets: {
        [key: string]: InFlightPacket;
    };
}
/** Params defines the set of IBC router parameters. */
export interface Params {
    fee_percentage: string;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacket {
    original_sender_address: string;
    refund_channel_id: string;
    refund_port_id: string;
    packet_src_channel_id: string;
    packet_src_port_id: string;
    packet_timeout_timestamp: Long;
    packet_timeout_height: string;
    packet_data: Uint8Array;
    refund_sequence: Long;
    retries_remaining: number;
    timeout: Long;
    nonrefundable: boolean;
}
export declare const GenesisState_InFlightPacketsEntry: {
    encode(message: GenesisState_InFlightPacketsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_InFlightPacketsEntry;
    fromJSON(object: any): GenesisState_InFlightPacketsEntry;
    fromPartial(object: DeepPartial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const InFlightPacket: {
    encode(message: InFlightPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InFlightPacket;
    fromJSON(object: any): InFlightPacket;
    fromPartial(object: DeepPartial<InFlightPacket>): InFlightPacket;
};
