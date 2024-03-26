"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.InFlightPacket = exports.GenesisState_InFlightPacketsEntry = exports.GenesisState = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _math = require("@cosmjs/math");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var GenesisState_InFlightPacketsEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState_InFlightPacketsEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      key: (0, _helpers.isSet)(object.key) ? String(object.key) : "",
      value: (0, _helpers.isSet)(object.value) ? InFlightPacket.fromJSON(object.value) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key;
    var message = createBaseGenesisState_InFlightPacketsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? InFlightPacket.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.GenesisState_InFlightPacketsEntry = GenesisState_InFlightPacketsEntry;
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    in_flight_packets: {}
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.in_flight_packets).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      GenesisState_InFlightPacketsEntry.encode({
        key: key,
        value: value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          var entry2 = GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      params: (0, _helpers.isSet)(object.params) ? Params.fromJSON(object.params) : undefined,
      in_flight_packets: (0, _helpers.isObject)(object.in_flight_packets) ? Object.entries(object.in_flight_packets).reduce(function (acc, _ref3) {
        var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];
        acc[key] = InFlightPacket.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$in_flight_pac;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.in_flight_packets = Object.entries((_object$in_flight_pac = object.in_flight_packets) !== null && _object$in_flight_pac !== void 0 ? _object$in_flight_pac : {}).reduce(function (acc, _ref5) {
      var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
exports.GenesisState = GenesisState;
function createBaseParams() {
  return {
    fee_percentage: ""
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fee_percentage !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.fee_percentage, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee_percentage = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      fee_percentage: (0, _helpers.isSet)(object.fee_percentage) ? String(object.fee_percentage) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fee_percentag;
    var message = createBaseParams();
    message.fee_percentage = (_object$fee_percentag = object.fee_percentage) !== null && _object$fee_percentag !== void 0 ? _object$fee_percentag : "";
    return message;
  }
};
exports.Params = Params;
function createBaseInFlightPacket() {
  return {
    original_sender_address: "",
    refund_channel_id: "",
    refund_port_id: "",
    packet_src_channel_id: "",
    packet_src_port_id: "",
    packet_timeout_timestamp: _helpers.Long.UZERO,
    packet_timeout_height: "",
    packet_data: new Uint8Array(),
    refund_sequence: _helpers.Long.UZERO,
    retries_remaining: 0,
    timeout: _helpers.Long.UZERO,
    nonrefundable: false
  };
}
var InFlightPacket = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInFlightPacket();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      original_sender_address: (0, _helpers.isSet)(object.original_sender_address) ? String(object.original_sender_address) : "",
      refund_channel_id: (0, _helpers.isSet)(object.refund_channel_id) ? String(object.refund_channel_id) : "",
      refund_port_id: (0, _helpers.isSet)(object.refund_port_id) ? String(object.refund_port_id) : "",
      packet_src_channel_id: (0, _helpers.isSet)(object.packet_src_channel_id) ? String(object.packet_src_channel_id) : "",
      packet_src_port_id: (0, _helpers.isSet)(object.packet_src_port_id) ? String(object.packet_src_port_id) : "",
      packet_timeout_timestamp: (0, _helpers.isSet)(object.packet_timeout_timestamp) ? _helpers.Long.fromValue(object.packet_timeout_timestamp) : _helpers.Long.UZERO,
      packet_timeout_height: (0, _helpers.isSet)(object.packet_timeout_height) ? String(object.packet_timeout_height) : "",
      packet_data: (0, _helpers.isSet)(object.packet_data) ? (0, _helpers.bytesFromBase64)(object.packet_data) : new Uint8Array(),
      refund_sequence: (0, _helpers.isSet)(object.refund_sequence) ? _helpers.Long.fromValue(object.refund_sequence) : _helpers.Long.UZERO,
      retries_remaining: (0, _helpers.isSet)(object.retries_remaining) ? Number(object.retries_remaining) : 0,
      timeout: (0, _helpers.isSet)(object.timeout) ? _helpers.Long.fromValue(object.timeout) : _helpers.Long.UZERO,
      nonrefundable: (0, _helpers.isSet)(object.nonrefundable) ? Boolean(object.nonrefundable) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$original_send, _object$refund_channe, _object$refund_port_i, _object$packet_src_ch, _object$packet_src_po, _object$packet_timeou, _object$packet_data, _object$retries_remai, _object$nonrefundable;
    var message = createBaseInFlightPacket();
    message.original_sender_address = (_object$original_send = object.original_sender_address) !== null && _object$original_send !== void 0 ? _object$original_send : "";
    message.refund_channel_id = (_object$refund_channe = object.refund_channel_id) !== null && _object$refund_channe !== void 0 ? _object$refund_channe : "";
    message.refund_port_id = (_object$refund_port_i = object.refund_port_id) !== null && _object$refund_port_i !== void 0 ? _object$refund_port_i : "";
    message.packet_src_channel_id = (_object$packet_src_ch = object.packet_src_channel_id) !== null && _object$packet_src_ch !== void 0 ? _object$packet_src_ch : "";
    message.packet_src_port_id = (_object$packet_src_po = object.packet_src_port_id) !== null && _object$packet_src_po !== void 0 ? _object$packet_src_po : "";
    message.packet_timeout_timestamp = object.packet_timeout_timestamp !== undefined && object.packet_timeout_timestamp !== null ? _helpers.Long.fromValue(object.packet_timeout_timestamp) : _helpers.Long.UZERO;
    message.packet_timeout_height = (_object$packet_timeou = object.packet_timeout_height) !== null && _object$packet_timeou !== void 0 ? _object$packet_timeou : "";
    message.packet_data = (_object$packet_data = object.packet_data) !== null && _object$packet_data !== void 0 ? _object$packet_data : new Uint8Array();
    message.refund_sequence = object.refund_sequence !== undefined && object.refund_sequence !== null ? _helpers.Long.fromValue(object.refund_sequence) : _helpers.Long.UZERO;
    message.retries_remaining = (_object$retries_remai = object.retries_remaining) !== null && _object$retries_remai !== void 0 ? _object$retries_remai : 0;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? _helpers.Long.fromValue(object.timeout) : _helpers.Long.UZERO;
    message.nonrefundable = (_object$nonrefundable = object.nonrefundable) !== null && _object$nonrefundable !== void 0 ? _object$nonrefundable : false;
    return message;
  }
};
exports.InFlightPacket = InFlightPacket;