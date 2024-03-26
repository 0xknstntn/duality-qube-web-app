import { MerklePrefix } from "../../commitment/v1/commitment";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export let State = /*#__PURE__*/function (State) {
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return State;
}({});
export function stateFromJSON(object) {
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
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */

/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */

/** Counterparty defines the counterparty chain associated with a connection end. */

/** ClientPaths define all the connection paths for a client state. */

/** ConnectionPaths define all the connection paths for a given client state. */

/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */

/** Params defines the set of Connection parameters. */

function createBaseConnectionEnd() {
  return {
    client_id: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delay_period: Long.UZERO
  };
}
export const ConnectionEnd = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.versions) {
      Version.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (!message.delay_period.isZero()) {
      writer.uint32(40).uint64(message.delay_period);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = reader.int32();
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delay_period = reader.uint64();
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions) ? object.versions.map(e => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delay_period: isSet(object.delay_period) ? Long.fromValue(object.delay_period) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$client_id, _object$versions, _object$state;
    const message = createBaseConnectionEnd();
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    message.versions = ((_object$versions = object.versions) === null || _object$versions === void 0 ? void 0 : _object$versions.map(e => Version.fromPartial(e))) || [];
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
    return message;
  }
};
function createBaseIdentifiedConnection() {
  return {
    id: "",
    client_id: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delay_period: Long.UZERO
  };
}
export const IdentifiedConnection = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    for (const v of message.versions) {
      Version.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (!message.delay_period.isZero()) {
      writer.uint32(48).uint64(message.delay_period);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.client_id = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32();
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delay_period = reader.uint64();
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
      id: isSet(object.id) ? String(object.id) : "",
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions) ? object.versions.map(e => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delay_period: isSet(object.delay_period) ? Long.fromValue(object.delay_period) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$id, _object$client_id2, _object$versions2, _object$state2;
    const message = createBaseIdentifiedConnection();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.client_id = (_object$client_id2 = object.client_id) !== null && _object$client_id2 !== void 0 ? _object$client_id2 : "";
    message.versions = ((_object$versions2 = object.versions) === null || _object$versions2 === void 0 ? void 0 : _object$versions2.map(e => Version.fromPartial(e))) || [];
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
    return message;
  }
};
function createBaseCounterparty() {
  return {
    client_id: "",
    connection_id: "",
    prefix: MerklePrefix.fromPartial({})
  };
}
export const Counterparty = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }
    if (message.prefix !== undefined) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.connection_id = reader.string();
          break;
        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      prefix: isSet(object.prefix) ? MerklePrefix.fromJSON(object.prefix) : undefined
    };
  },
  fromPartial(object) {
    var _object$client_id3, _object$connection_id;
    const message = createBaseCounterparty();
    message.client_id = (_object$client_id3 = object.client_id) !== null && _object$client_id3 !== void 0 ? _object$client_id3 : "";
    message.connection_id = (_object$connection_id = object.connection_id) !== null && _object$connection_id !== void 0 ? _object$connection_id : "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : undefined;
    return message;
  }
};
function createBaseClientPaths() {
  return {
    paths: []
  };
}
export const ClientPaths = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.paths) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
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
      paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$paths;
    const message = createBaseClientPaths();
    message.paths = ((_object$paths = object.paths) === null || _object$paths === void 0 ? void 0 : _object$paths.map(e => e)) || [];
    return message;
  }
};
function createBaseConnectionPaths() {
  return {
    client_id: "",
    paths: []
  };
}
export const ConnectionPaths = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$client_id4, _object$paths2;
    const message = createBaseConnectionPaths();
    message.client_id = (_object$client_id4 = object.client_id) !== null && _object$client_id4 !== void 0 ? _object$client_id4 : "";
    message.paths = ((_object$paths2 = object.paths) === null || _object$paths2 === void 0 ? void 0 : _object$paths2.map(e => e)) || [];
    return message;
  }
};
function createBaseVersion() {
  return {
    identifier: "",
    features: []
  };
}
export const Version = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
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
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      features: Array.isArray(object === null || object === void 0 ? void 0 : object.features) ? object.features.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$identifier, _object$features;
    const message = createBaseVersion();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    message.features = ((_object$features = object.features) === null || _object$features === void 0 ? void 0 : _object$features.map(e => e)) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    max_expected_time_per_block: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.max_expected_time_per_block.isZero()) {
      writer.uint32(8).uint64(message.max_expected_time_per_block);
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
          message.max_expected_time_per_block = reader.uint64();
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
      max_expected_time_per_block: isSet(object.max_expected_time_per_block) ? Long.fromValue(object.max_expected_time_per_block) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.max_expected_time_per_block = object.max_expected_time_per_block !== undefined && object.max_expected_time_per_block !== null ? Long.fromValue(object.max_expected_time_per_block) : Long.UZERO;
    return message;
  }
};