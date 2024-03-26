import { Long, isSet, DeepPartial, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Message {
  snapshots_request?: SnapshotsRequest;
  snapshots_response?: SnapshotsResponse;
  chunk_request?: ChunkRequest;
  chunk_response?: ChunkResponse;
}
export interface SnapshotsRequest {}
export interface SnapshotsResponse {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
export interface ChunkRequest {
  height: Long;
  format: number;
  index: number;
}
export interface ChunkResponse {
  height: Long;
  format: number;
  index: number;
  chunk: Uint8Array;
  missing: boolean;
}
function createBaseMessage(): Message {
  return {
    snapshots_request: undefined,
    snapshots_response: undefined,
    chunk_request: undefined,
    chunk_response: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshots_request !== undefined) {
      SnapshotsRequest.encode(message.snapshots_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.snapshots_response !== undefined) {
      SnapshotsResponse.encode(message.snapshots_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.chunk_request !== undefined) {
      ChunkRequest.encode(message.chunk_request, writer.uint32(26).fork()).ldelim();
    }
    if (message.chunk_response !== undefined) {
      ChunkResponse.encode(message.chunk_response, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots_request = SnapshotsRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.snapshots_response = SnapshotsResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.chunk_request = ChunkRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.chunk_response = ChunkResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Message {
    return {
      snapshots_request: isSet(object.snapshots_request) ? SnapshotsRequest.fromJSON(object.snapshots_request) : undefined,
      snapshots_response: isSet(object.snapshots_response) ? SnapshotsResponse.fromJSON(object.snapshots_response) : undefined,
      chunk_request: isSet(object.chunk_request) ? ChunkRequest.fromJSON(object.chunk_request) : undefined,
      chunk_response: isSet(object.chunk_response) ? ChunkResponse.fromJSON(object.chunk_response) : undefined
    };
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.snapshots_request = object.snapshots_request !== undefined && object.snapshots_request !== null ? SnapshotsRequest.fromPartial(object.snapshots_request) : undefined;
    message.snapshots_response = object.snapshots_response !== undefined && object.snapshots_response !== null ? SnapshotsResponse.fromPartial(object.snapshots_response) : undefined;
    message.chunk_request = object.chunk_request !== undefined && object.chunk_request !== null ? ChunkRequest.fromPartial(object.chunk_request) : undefined;
    message.chunk_response = object.chunk_response !== undefined && object.chunk_response !== null ? ChunkResponse.fromPartial(object.chunk_response) : undefined;
    return message;
  }
};
function createBaseSnapshotsRequest(): SnapshotsRequest {
  return {};
}
export const SnapshotsRequest = {
  encode(_: SnapshotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): SnapshotsRequest {
    return {};
  },
  fromPartial(_: DeepPartial<SnapshotsRequest>): SnapshotsRequest {
    const message = createBaseSnapshotsRequest();
    return message;
  }
};
function createBaseSnapshotsResponse(): SnapshotsResponse {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const SnapshotsResponse = {
  encode(message: SnapshotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotsResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<SnapshotsResponse>): SnapshotsResponse {
    const message = createBaseSnapshotsResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  }
};
function createBaseChunkRequest(): ChunkRequest {
  return {
    height: Long.UZERO,
    format: 0,
    index: 0
  };
}
export const ChunkRequest = {
  encode(message: ChunkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChunkRequest {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial(object: DeepPartial<ChunkRequest>): ChunkRequest {
    const message = createBaseChunkRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    return message;
  }
};
function createBaseChunkResponse(): ChunkResponse {
  return {
    height: Long.UZERO,
    format: 0,
    index: 0,
    chunk: new Uint8Array(),
    missing: false
  };
}
export const ChunkResponse = {
  encode(message: ChunkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(34).bytes(message.chunk);
    }
    if (message.missing === true) {
      writer.uint32(40).bool(message.missing);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        case 4:
          message.chunk = reader.bytes();
          break;
        case 5:
          message.missing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChunkResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      missing: isSet(object.missing) ? Boolean(object.missing) : false
    };
  },
  fromPartial(object: DeepPartial<ChunkResponse>): ChunkResponse {
    const message = createBaseChunkResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.missing = object.missing ?? false;
    return message;
  }
};