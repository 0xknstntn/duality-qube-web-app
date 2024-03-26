import { Message } from "./types";
import { Duration } from "../../google/protobuf/duration";
import { EventDataRoundState } from "../types/events";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
    msg: Message;
    peer_id: string;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
    duration: Duration;
    height: Long;
    round: number;
    step: number;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
    height: Long;
}
export interface WALMessage {
    event_data_round_state?: EventDataRoundState;
    msg_info?: MsgInfo;
    timeout_info?: TimeoutInfo;
    end_height?: EndHeight;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
    time: Timestamp;
    msg: WALMessage;
}
export declare const MsgInfo: {
    encode(message: MsgInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo;
    fromJSON(object: any): MsgInfo;
    fromPartial(object: DeepPartial<MsgInfo>): MsgInfo;
};
export declare const TimeoutInfo: {
    encode(message: TimeoutInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo;
    fromJSON(object: any): TimeoutInfo;
    fromPartial(object: DeepPartial<TimeoutInfo>): TimeoutInfo;
};
export declare const EndHeight: {
    encode(message: EndHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight;
    fromJSON(object: any): EndHeight;
    fromPartial(object: DeepPartial<EndHeight>): EndHeight;
};
export declare const WALMessage: {
    encode(message: WALMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage;
    fromJSON(object: any): WALMessage;
    fromPartial(object: DeepPartial<WALMessage>): WALMessage;
};
export declare const TimedWALMessage: {
    encode(message: TimedWALMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage;
    fromJSON(object: any): TimedWALMessage;
    fromPartial(object: DeepPartial<TimedWALMessage>): TimedWALMessage;
};
