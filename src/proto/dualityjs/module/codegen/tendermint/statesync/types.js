import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMessage() {
  return {
    snapshots_request: undefined,
    snapshots_response: undefined,
    chunk_request: undefined,
    chunk_response: undefined
  };
}
export const Message = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
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
  fromJSON(object) {
    return {
      snapshots_request: isSet(object.snapshots_request) ? SnapshotsRequest.fromJSON(object.snapshots_request) : undefined,
      snapshots_response: isSet(object.snapshots_response) ? SnapshotsResponse.fromJSON(object.snapshots_response) : undefined,
      chunk_request: isSet(object.chunk_request) ? ChunkRequest.fromJSON(object.chunk_request) : undefined,
      chunk_response: isSet(object.chunk_response) ? ChunkResponse.fromJSON(object.chunk_response) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMessage();
    message.snapshots_request = object.snapshots_request !== undefined && object.snapshots_request !== null ? SnapshotsRequest.fromPartial(object.snapshots_request) : undefined;
    message.snapshots_response = object.snapshots_response !== undefined && object.snapshots_response !== null ? SnapshotsResponse.fromPartial(object.snapshots_response) : undefined;
    message.chunk_request = object.chunk_request !== undefined && object.chunk_request !== null ? ChunkRequest.fromPartial(object.chunk_request) : undefined;
    message.chunk_response = object.chunk_response !== undefined && object.chunk_response !== null ? ChunkResponse.fromPartial(object.chunk_response) : undefined;
    return message;
  }
};
function createBaseSnapshotsRequest() {
  return {};
}
export const SnapshotsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseSnapshotsRequest();
    return message;
  }
};
function createBaseSnapshotsResponse() {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const SnapshotsResponse = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$format, _object$chunks, _object$hash, _object$metadata;
    const message = createBaseSnapshotsResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  }
};
function createBaseChunkRequest() {
  return {
    height: Long.UZERO,
    format: 0,
    index: 0
  };
}
export const ChunkRequest = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial(object) {
    var _object$format2, _object$index;
    const message = createBaseChunkRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    return message;
  }
};
function createBaseChunkResponse() {
  return {
    height: Long.UZERO,
    format: 0,
    index: 0,
    chunk: new Uint8Array(),
    missing: false
  };
}
export const ChunkResponse = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      missing: isSet(object.missing) ? Boolean(object.missing) : false
    };
  },
  fromPartial(object) {
    var _object$format3, _object$index2, _object$chunk, _object$missing;
    const message = createBaseChunkResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = (_object$format3 = object.format) !== null && _object$format3 !== void 0 ? _object$format3 : 0;
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : new Uint8Array();
    message.missing = (_object$missing = object.missing) !== null && _object$missing !== void 0 ? _object$missing : false;
    return message;
  }
};