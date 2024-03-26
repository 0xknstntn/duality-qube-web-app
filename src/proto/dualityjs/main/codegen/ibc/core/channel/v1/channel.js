"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeout = exports.State = exports.PacketState = exports.PacketId = exports.Packet = exports.Order = exports.IdentifiedChannel = exports.Counterparty = exports.Channel = exports.Acknowledgement = void 0;
exports.orderFromJSON = orderFromJSON;
exports.orderToJSON = orderToJSON;
exports.stateFromJSON = stateFromJSON;
exports.stateToJSON = stateToJSON;
var _client = require("../../client/v1/client");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State = /*#__PURE__*/function (State) {
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
  State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return State;
}({});
exports.State = State;
function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case 4:
    case "STATE_CLOSED":
      return State.STATE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.STATE_CLOSED:
      return "STATE_CLOSED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Order defines if a channel is ORDERED or UNORDERED */
var Order = /*#__PURE__*/function (Order) {
  Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
  Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
  Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
  Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Order;
}({});
exports.Order = Order;
function orderFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return Order.ORDER_NONE_UNSPECIFIED;
    case 1:
    case "ORDER_UNORDERED":
      return Order.ORDER_UNORDERED;
    case 2:
    case "ORDER_ORDERED":
      return Order.ORDER_ORDERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order.UNRECOGNIZED;
  }
}
function orderToJSON(object) {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return "ORDER_NONE_UNSPECIFIED";
    case Order.ORDER_UNORDERED:
      return "ORDER_UNORDERED";
    case Order.ORDER_ORDERED:
      return "ORDER_ORDERED";
    case Order.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */

/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */

/** Counterparty defines a channel end counterparty */

/** Packet defines a type that carries data across different chains through IBC */

/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */

/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */

/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */

/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers as well as the upgrade handshake handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 */

function createBaseChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connection_hops: [],
    version: ""
  };
}
var Channel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.connection_hops),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChannel();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;
        case 2:
          message.ordering = reader.int32();
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connection_hops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
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
      state: (0, _helpers.isSet)(object.state) ? stateFromJSON(object.state) : -1,
      ordering: (0, _helpers.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
      counterparty: (0, _helpers.isSet)(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      connection_hops: Array.isArray(object === null || object === void 0 ? void 0 : object.connection_hops) ? object.connection_hops.map(function (e) {
        return String(e);
      }) : [],
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$state, _object$ordering, _object$connection_ho, _object$version;
    var message = createBaseChannel();
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.ordering = (_object$ordering = object.ordering) !== null && _object$ordering !== void 0 ? _object$ordering : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connection_hops = ((_object$connection_ho = object.connection_hops) === null || _object$connection_ho === void 0 ? void 0 : _object$connection_ho.map(function (e) {
      return e;
    })) || [];
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    return message;
  }
};
exports.Channel = Channel;
function createBaseIdentifiedChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connection_hops: [],
    version: "",
    port_id: "",
    channel_id: ""
  };
}
var IdentifiedChannel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.connection_hops),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.port_id !== "") {
      writer.uint32(50).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(58).string(message.channel_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIdentifiedChannel();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;
        case 2:
          message.ordering = reader.int32();
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connection_hops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.port_id = reader.string();
          break;
        case 7:
          message.channel_id = reader.string();
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
      state: (0, _helpers.isSet)(object.state) ? stateFromJSON(object.state) : -1,
      ordering: (0, _helpers.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
      counterparty: (0, _helpers.isSet)(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      connection_hops: Array.isArray(object === null || object === void 0 ? void 0 : object.connection_hops) ? object.connection_hops.map(function (e) {
        return String(e);
      }) : [],
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$state2, _object$ordering2, _object$connection_ho2, _object$version2, _object$port_id, _object$channel_id;
    var message = createBaseIdentifiedChannel();
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.ordering = (_object$ordering2 = object.ordering) !== null && _object$ordering2 !== void 0 ? _object$ordering2 : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connection_hops = ((_object$connection_ho2 = object.connection_hops) === null || _object$connection_ho2 === void 0 ? void 0 : _object$connection_ho2.map(function (e) {
      return e;
    })) || [];
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.port_id = (_object$port_id = object.port_id) !== null && _object$port_id !== void 0 ? _object$port_id : "";
    message.channel_id = (_object$channel_id = object.channel_id) !== null && _object$channel_id !== void 0 ? _object$channel_id : "";
    return message;
  }
};
exports.IdentifiedChannel = IdentifiedChannel;
function createBaseCounterparty() {
  return {
    port_id: "",
    channel_id: ""
  };
}
var Counterparty = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCounterparty();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id2, _object$channel_id2;
    var message = createBaseCounterparty();
    message.port_id = (_object$port_id2 = object.port_id) !== null && _object$port_id2 !== void 0 ? _object$port_id2 : "";
    message.channel_id = (_object$channel_id2 = object.channel_id) !== null && _object$channel_id2 !== void 0 ? _object$channel_id2 : "";
    return message;
  }
};
exports.Counterparty = Counterparty;
function createBasePacket() {
  return {
    sequence: _helpers.Long.UZERO,
    source_port: "",
    source_channel: "",
    destination_port: "",
    destination_channel: "",
    data: new Uint8Array(),
    timeout_height: _client.Height.fromPartial({}),
    timeout_timestamp: _helpers.Long.UZERO
  };
}
var Packet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.source_port !== "") {
      writer.uint32(18).string(message.source_port);
    }
    if (message.source_channel !== "") {
      writer.uint32(26).string(message.source_channel);
    }
    if (message.destination_port !== "") {
      writer.uint32(34).string(message.destination_port);
    }
    if (message.destination_channel !== "") {
      writer.uint32(42).string(message.destination_channel);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.timeout_height !== undefined) {
      _client.Height.encode(message.timeout_height, writer.uint32(58).fork()).ldelim();
    }
    if (!message.timeout_timestamp.isZero()) {
      writer.uint32(64).uint64(message.timeout_timestamp);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacket();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.source_port = reader.string();
          break;
        case 3:
          message.source_channel = reader.string();
          break;
        case 4:
          message.destination_port = reader.string();
          break;
        case 5:
          message.destination_channel = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.timeout_height = _client.Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeout_timestamp = reader.uint64();
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
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO,
      source_port: (0, _helpers.isSet)(object.source_port) ? String(object.source_port) : "",
      source_channel: (0, _helpers.isSet)(object.source_channel) ? String(object.source_channel) : "",
      destination_port: (0, _helpers.isSet)(object.destination_port) ? String(object.destination_port) : "",
      destination_channel: (0, _helpers.isSet)(object.destination_channel) ? String(object.destination_channel) : "",
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      timeout_height: (0, _helpers.isSet)(object.timeout_height) ? _client.Height.fromJSON(object.timeout_height) : undefined,
      timeout_timestamp: (0, _helpers.isSet)(object.timeout_timestamp) ? _helpers.Long.fromValue(object.timeout_timestamp) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$source_port, _object$source_channe, _object$destination_p, _object$destination_c, _object$data;
    var message = createBasePacket();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    message.source_port = (_object$source_port = object.source_port) !== null && _object$source_port !== void 0 ? _object$source_port : "";
    message.source_channel = (_object$source_channe = object.source_channel) !== null && _object$source_channe !== void 0 ? _object$source_channe : "";
    message.destination_port = (_object$destination_p = object.destination_port) !== null && _object$destination_p !== void 0 ? _object$destination_p : "";
    message.destination_channel = (_object$destination_c = object.destination_channel) !== null && _object$destination_c !== void 0 ? _object$destination_c : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? _client.Height.fromPartial(object.timeout_height) : undefined;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? _helpers.Long.fromValue(object.timeout_timestamp) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Packet = Packet;
function createBasePacketState() {
  return {
    port_id: "",
    channel_id: "",
    sequence: _helpers.Long.UZERO,
    data: new Uint8Array()
  };
}
var PacketState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        case 4:
          message.data = reader.bytes();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO,
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id3, _object$channel_id3, _object$data2;
    var message = createBasePacketState();
    message.port_id = (_object$port_id3 = object.port_id) !== null && _object$port_id3 !== void 0 ? _object$port_id3 : "";
    message.channel_id = (_object$channel_id3 = object.channel_id) !== null && _object$channel_id3 !== void 0 ? _object$channel_id3 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
exports.PacketState = PacketState;
function createBasePacketId() {
  return {
    port_id: "",
    channel_id: "",
    sequence: _helpers.Long.UZERO
  };
}
var PacketId = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketId();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
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
      port_id: (0, _helpers.isSet)(object.port_id) ? String(object.port_id) : "",
      channel_id: (0, _helpers.isSet)(object.channel_id) ? String(object.channel_id) : "",
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$port_id4, _object$channel_id4;
    var message = createBasePacketId();
    message.port_id = (_object$port_id4 = object.port_id) !== null && _object$port_id4 !== void 0 ? _object$port_id4 : "";
    message.channel_id = (_object$channel_id4 = object.channel_id) !== null && _object$channel_id4 !== void 0 ? _object$channel_id4 : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.PacketId = PacketId;
function createBaseAcknowledgement() {
  return {
    result: undefined,
    error: undefined
  };
}
var Acknowledgement = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAcknowledgement();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
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
      result: (0, _helpers.isSet)(object.result) ? (0, _helpers.bytesFromBase64)(object.result) : undefined,
      error: (0, _helpers.isSet)(object.error) ? String(object.error) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$result, _object$error;
    var message = createBaseAcknowledgement();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : undefined;
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : undefined;
    return message;
  }
};
exports.Acknowledgement = Acknowledgement;
function createBaseTimeout() {
  return {
    height: _client.Height.fromPartial({}),
    timestamp: _helpers.Long.UZERO
  };
}
var Timeout = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimeout();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = reader.uint64();
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
      height: (0, _helpers.isSet)(object.height) ? _client.Height.fromJSON(object.height) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? _helpers.Long.fromValue(object.timestamp) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseTimeout();
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _helpers.Long.fromValue(object.timestamp) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Timeout = Timeout;