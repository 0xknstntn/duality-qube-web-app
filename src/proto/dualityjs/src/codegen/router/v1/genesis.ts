import { Long, isSet, DeepPartial, isObject, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
function createBaseGenesisState_InFlightPacketsEntry(): GenesisState_InFlightPacketsEntry {
  return {
    key: "",
    value: InFlightPacket.fromPartial({})
  };
}
export const GenesisState_InFlightPacketsEntry = {
  encode(message: GenesisState_InFlightPacketsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_InFlightPacketsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_InFlightPacketsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = InFlightPacket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState_InFlightPacketsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? InFlightPacket.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: DeepPartial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry {
    const message = createBaseGenesisState_InFlightPacketsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? InFlightPacket.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    in_flight_packets: {}
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.in_flight_packets).forEach(([key, value]) => {
      GenesisState_InFlightPacketsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.in_flight_packets[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      in_flight_packets: isObject(object.in_flight_packets) ? Object.entries(object.in_flight_packets).reduce<{
        [key: string]: InFlightPacket;
      }>((acc, [key, value]) => {
        acc[key] = InFlightPacket.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.in_flight_packets = Object.entries(object.in_flight_packets ?? {}).reduce<{
      [key: string]: InFlightPacket;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseParams(): Params {
  return {
    fee_percentage: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee_percentage !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.fee_percentage, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee_percentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      fee_percentage: isSet(object.fee_percentage) ? String(object.fee_percentage) : ""
    };
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.fee_percentage = object.fee_percentage ?? "";
    return message;
  }
};
function createBaseInFlightPacket(): InFlightPacket {
  return {
    original_sender_address: "",
    refund_channel_id: "",
    refund_port_id: "",
    packet_src_channel_id: "",
    packet_src_port_id: "",
    packet_timeout_timestamp: Long.UZERO,
    packet_timeout_height: "",
    packet_data: new Uint8Array(),
    refund_sequence: Long.UZERO,
    retries_remaining: 0,
    timeout: Long.UZERO,
    nonrefundable: false
  };
}
export const InFlightPacket = {
  encode(message: InFlightPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.original_sender_address !== "") {
      writer.uint32(10).string(message.original_sender_address);
    }
    if (message.refund_channel_id !== "") {
      writer.uint32(18).string(message.refund_channel_id);
    }
    if (message.refund_port_id !== "") {
      writer.uint32(26).string(message.refund_port_id);
    }
    if (message.packet_src_channel_id !== "") {
      writer.uint32(34).string(message.packet_src_channel_id);
    }
    if (message.packet_src_port_id !== "") {
      writer.uint32(42).string(message.packet_src_port_id);
    }
    if (!message.packet_timeout_timestamp.isZero()) {
      writer.uint32(48).uint64(message.packet_timeout_timestamp);
    }
    if (message.packet_timeout_height !== "") {
      writer.uint32(58).string(message.packet_timeout_height);
    }
    if (message.packet_data.length !== 0) {
      writer.uint32(66).bytes(message.packet_data);
    }
    if (!message.refund_sequence.isZero()) {
      writer.uint32(72).uint64(message.refund_sequence);
    }
    if (message.retries_remaining !== 0) {
      writer.uint32(80).int32(message.retries_remaining);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(88).uint64(message.timeout);
    }
    if (message.nonrefundable === true) {
      writer.uint32(96).bool(message.nonrefundable);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InFlightPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInFlightPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.original_sender_address = reader.string();
          break;
        case 2:
          message.refund_channel_id = reader.string();
          break;
        case 3:
          message.refund_port_id = reader.string();
          break;
        case 4:
          message.packet_src_channel_id = reader.string();
          break;
        case 5:
          message.packet_src_port_id = reader.string();
          break;
        case 6:
          message.packet_timeout_timestamp = (reader.uint64() as Long);
          break;
        case 7:
          message.packet_timeout_height = reader.string();
          break;
        case 8:
          message.packet_data = reader.bytes();
          break;
        case 9:
          message.refund_sequence = (reader.uint64() as Long);
          break;
        case 10:
          message.retries_remaining = reader.int32();
          break;
        case 11:
          message.timeout = (reader.uint64() as Long);
          break;
        case 12:
          message.nonrefundable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InFlightPacket {
    return {
      original_sender_address: isSet(object.original_sender_address) ? String(object.original_sender_address) : "",
      refund_channel_id: isSet(object.refund_channel_id) ? String(object.refund_channel_id) : "",
      refund_port_id: isSet(object.refund_port_id) ? String(object.refund_port_id) : "",
      packet_src_channel_id: isSet(object.packet_src_channel_id) ? String(object.packet_src_channel_id) : "",
      packet_src_port_id: isSet(object.packet_src_port_id) ? String(object.packet_src_port_id) : "",
      packet_timeout_timestamp: isSet(object.packet_timeout_timestamp) ? Long.fromValue(object.packet_timeout_timestamp) : Long.UZERO,
      packet_timeout_height: isSet(object.packet_timeout_height) ? String(object.packet_timeout_height) : "",
      packet_data: isSet(object.packet_data) ? bytesFromBase64(object.packet_data) : new Uint8Array(),
      refund_sequence: isSet(object.refund_sequence) ? Long.fromValue(object.refund_sequence) : Long.UZERO,
      retries_remaining: isSet(object.retries_remaining) ? Number(object.retries_remaining) : 0,
      timeout: isSet(object.timeout) ? Long.fromValue(object.timeout) : Long.UZERO,
      nonrefundable: isSet(object.nonrefundable) ? Boolean(object.nonrefundable) : false
    };
  },
  fromPartial(object: DeepPartial<InFlightPacket>): InFlightPacket {
    const message = createBaseInFlightPacket();
    message.original_sender_address = object.original_sender_address ?? "";
    message.refund_channel_id = object.refund_channel_id ?? "";
    message.refund_port_id = object.refund_port_id ?? "";
    message.packet_src_channel_id = object.packet_src_channel_id ?? "";
    message.packet_src_port_id = object.packet_src_port_id ?? "";
    message.packet_timeout_timestamp = object.packet_timeout_timestamp !== undefined && object.packet_timeout_timestamp !== null ? Long.fromValue(object.packet_timeout_timestamp) : Long.UZERO;
    message.packet_timeout_height = object.packet_timeout_height ?? "";
    message.packet_data = object.packet_data ?? new Uint8Array();
    message.refund_sequence = object.refund_sequence !== undefined && object.refund_sequence !== null ? Long.fromValue(object.refund_sequence) : Long.UZERO;
    message.retries_remaining = object.retries_remaining ?? 0;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.UZERO;
    message.nonrefundable = object.nonrefundable ?? false;
    return message;
  }
};