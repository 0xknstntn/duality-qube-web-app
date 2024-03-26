import { MerklePrefix } from "../../commitment/v1/commitment";
import { Long, isSet, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A connection end has just started the opening handshake. */
  STATE_INIT = 1,
  /**
   * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
   * chain.
   */
  STATE_TRYOPEN = 2,
  /** STATE_OPEN - A connection end has completed the handshake. */
  STATE_OPEN = 3,
  UNRECOGNIZED = -1,
}
export function stateFromJSON(object: any): State {
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
export function stateToJSON(object: State): string {
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
export interface ConnectionEnd {
  /** client associated with this connection. */
  client_id: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions: Version[];
  /** current state of the connection end. */
  state: State;
  /** counterparty chain associated with this connection. */
  counterparty: Counterparty;
  /**
   * delay period that must pass before a consensus state can be used for
   * packet-verification NOTE: delay period logic is only implemented by some
   * clients.
   */
  delay_period: Long;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnection {
  /** connection identifier. */
  id: string;
  /** client associated with this connection. */
  client_id: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions: Version[];
  /** current state of the connection end. */
  state: State;
  /** counterparty chain associated with this connection. */
  counterparty: Counterparty;
  /** delay period associated with this connection. */
  delay_period: Long;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface Counterparty {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  client_id: string;
  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connection_id: string;
  /** commitment merkle prefix of the counterparty chain. */
  prefix: MerklePrefix;
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPaths {
  /** list of connection paths */
  paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPaths {
  /** client state unique identifier */
  client_id: string;
  /** list of connection paths */
  paths: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface Version {
  /** unique version identifier */
  identifier: string;
  /** list of features compatible with the specified identifier */
  features: string[];
}
/** Params defines the set of Connection parameters. */
export interface Params {
  /**
   * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
   * largest amount of time that the chain might reasonably take to produce the next block under normal operating
   * conditions. A safe choice is 3-5x the expected time per block.
   */
  max_expected_time_per_block: Long;
}
function createBaseConnectionEnd(): ConnectionEnd {
  return {
    client_id: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delay_period: Long.UZERO
  };
}
export const ConnectionEnd = {
  encode(message: ConnectionEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(18).fork()).ldelim();
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionEnd {
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
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delay_period = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectionEnd {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delay_period: isSet(object.delay_period) ? Long.fromValue(object.delay_period) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<ConnectionEnd>): ConnectionEnd {
    const message = createBaseConnectionEnd();
    message.client_id = object.client_id ?? "";
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
    return message;
  }
};
function createBaseIdentifiedConnection(): IdentifiedConnection {
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
  encode(message: IdentifiedConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(26).fork()).ldelim();
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
  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedConnection {
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
          message.state = (reader.int32() as any);
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delay_period = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedConnection {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delay_period: isSet(object.delay_period) ? Long.fromValue(object.delay_period) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<IdentifiedConnection>): IdentifiedConnection {
    const message = createBaseIdentifiedConnection();
    message.id = object.id ?? "";
    message.client_id = object.client_id ?? "";
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
    return message;
  }
};
function createBaseCounterparty(): Counterparty {
  return {
    client_id: "",
    connection_id: "",
    prefix: MerklePrefix.fromPartial({})
  };
}
export const Counterparty = {
  encode(message: Counterparty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty {
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
  fromJSON(object: any): Counterparty {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      prefix: isSet(object.prefix) ? MerklePrefix.fromJSON(object.prefix) : undefined
    };
  },
  fromPartial(object: DeepPartial<Counterparty>): Counterparty {
    const message = createBaseCounterparty();
    message.client_id = object.client_id ?? "";
    message.connection_id = object.connection_id ?? "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : undefined;
    return message;
  }
};
function createBaseClientPaths(): ClientPaths {
  return {
    paths: []
  };
}
export const ClientPaths = {
  encode(message: ClientPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClientPaths {
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
  fromJSON(object: any): ClientPaths {
    return {
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: DeepPartial<ClientPaths>): ClientPaths {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map(e => e) || [];
    return message;
  }
};
function createBaseConnectionPaths(): ConnectionPaths {
  return {
    client_id: "",
    paths: []
  };
}
export const ConnectionPaths = {
  encode(message: ConnectionPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPaths {
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
  fromJSON(object: any): ConnectionPaths {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: DeepPartial<ConnectionPaths>): ConnectionPaths {
    const message = createBaseConnectionPaths();
    message.client_id = object.client_id ?? "";
    message.paths = object.paths?.map(e => e) || [];
    return message;
  }
};
function createBaseVersion(): Version {
  return {
    identifier: "",
    features: []
  };
}
export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
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
  fromJSON(object: any): Version {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      features: Array.isArray(object?.features) ? object.features.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.identifier = object.identifier ?? "";
    message.features = object.features?.map(e => e) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    max_expected_time_per_block: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_expected_time_per_block.isZero()) {
      writer.uint32(8).uint64(message.max_expected_time_per_block);
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
          message.max_expected_time_per_block = (reader.uint64() as Long);
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
      max_expected_time_per_block: isSet(object.max_expected_time_per_block) ? Long.fromValue(object.max_expected_time_per_block) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.max_expected_time_per_block = object.max_expected_time_per_block !== undefined && object.max_expected_time_per_block !== null ? Long.fromValue(object.max_expected_time_per_block) : Long.UZERO;
    return message;
  }
};