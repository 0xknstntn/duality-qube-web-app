import { Long, isSet, isObject, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";

/** GenesisState defines the router genesis state */

/** Params defines the set of IBC router parameters. */

/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */

function createBaseGenesisState_InFlightPacketsEntry() {
  return {
    key: "",
    value: InFlightPacket.fromPartial({})
  };
}
export const GenesisState_InFlightPacketsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? InFlightPacket.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseGenesisState_InFlightPacketsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? InFlightPacket.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    in_flight_packets: {}
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.in_flight_packets).forEach(([key, value]) => {
      GenesisState_InFlightPacketsEntry.encode({
        key: key,
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
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
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      in_flight_packets: isObject(object.in_flight_packets) ? Object.entries(object.in_flight_packets).reduce((acc, [key, value]) => {
        acc[key] = InFlightPacket.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object) {
    var _object$in_flight_pac;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.in_flight_packets = Object.entries((_object$in_flight_pac = object.in_flight_packets) !== null && _object$in_flight_pac !== void 0 ? _object$in_flight_pac : {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseParams() {
  return {
    fee_percentage: ""
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fee_percentage !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.fee_percentage, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
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
  fromJSON(object) {
    return {
      fee_percentage: isSet(object.fee_percentage) ? String(object.fee_percentage) : ""
    };
  },
  fromPartial(object) {
    var _object$fee_percentag;
    const message = createBaseParams();
    message.fee_percentage = (_object$fee_percentag = object.fee_percentage) !== null && _object$fee_percentag !== void 0 ? _object$fee_percentag : "";
    return message;
  }
};
function createBaseInFlightPacket() {
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
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
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
          message.packet_timeout_timestamp = reader.uint64();
          break;
        case 7:
          message.packet_timeout_height = reader.string();
          break;
        case 8:
          message.packet_data = reader.bytes();
          break;
        case 9:
          message.refund_sequence = reader.uint64();
          break;
        case 10:
          message.retries_remaining = reader.int32();
          break;
        case 11:
          message.timeout = reader.uint64();
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
  fromJSON(object) {
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
  fromPartial(object) {
    var _object$original_send, _object$refund_channe, _object$refund_port_i, _object$packet_src_ch, _object$packet_src_po, _object$packet_timeou, _object$packet_data, _object$retries_remai, _object$nonrefundable;
    const message = createBaseInFlightPacket();
    message.original_sender_address = (_object$original_send = object.original_sender_address) !== null && _object$original_send !== void 0 ? _object$original_send : "";
    message.refund_channel_id = (_object$refund_channe = object.refund_channel_id) !== null && _object$refund_channe !== void 0 ? _object$refund_channe : "";
    message.refund_port_id = (_object$refund_port_i = object.refund_port_id) !== null && _object$refund_port_i !== void 0 ? _object$refund_port_i : "";
    message.packet_src_channel_id = (_object$packet_src_ch = object.packet_src_channel_id) !== null && _object$packet_src_ch !== void 0 ? _object$packet_src_ch : "";
    message.packet_src_port_id = (_object$packet_src_po = object.packet_src_port_id) !== null && _object$packet_src_po !== void 0 ? _object$packet_src_po : "";
    message.packet_timeout_timestamp = object.packet_timeout_timestamp !== undefined && object.packet_timeout_timestamp !== null ? Long.fromValue(object.packet_timeout_timestamp) : Long.UZERO;
    message.packet_timeout_height = (_object$packet_timeou = object.packet_timeout_height) !== null && _object$packet_timeou !== void 0 ? _object$packet_timeou : "";
    message.packet_data = (_object$packet_data = object.packet_data) !== null && _object$packet_data !== void 0 ? _object$packet_data : new Uint8Array();
    message.refund_sequence = object.refund_sequence !== undefined && object.refund_sequence !== null ? Long.fromValue(object.refund_sequence) : Long.UZERO;
    message.retries_remaining = (_object$retries_remai = object.retries_remaining) !== null && _object$retries_remai !== void 0 ? _object$retries_remai : 0;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.UZERO;
    message.nonrefundable = (_object$nonrefundable = object.nonrefundable) !== null && _object$nonrefundable !== void 0 ? _object$nonrefundable : false;
    return message;
  }
};