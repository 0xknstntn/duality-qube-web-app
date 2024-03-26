import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GetRequest is the Query/Get request type. */

/** GetResponse is the Query/Get response type. */

/** ListRequest is the Query/List request type. */

/** Prefix specifies the arguments to a prefix query. */

/** Range specifies the arguments to a range query. */

/** ListResponse is the Query/List response type. */

/** IndexValue represents the value of a field in an ORM index expression. */

function createBaseGetRequest() {
  return {
    message_name: "",
    index: "",
    values: []
  };
}
export const GetRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.message_name !== "") {
      writer.uint32(10).string(message.message_name);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message_name = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
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
      message_name: isSet(object.message_name) ? String(object.message_name) : "",
      index: isSet(object.index) ? String(object.index) : "",
      values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map(e => IndexValue.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$message_name, _object$index, _object$values;
    const message = createBaseGetRequest();
    message.message_name = (_object$message_name = object.message_name) !== null && _object$message_name !== void 0 ? _object$message_name : "";
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.values = ((_object$values = object.values) === null || _object$values === void 0 ? void 0 : _object$values.map(e => IndexValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGetResponse() {
  return {
    result: Any.fromPartial({})
  };
}
export const GetResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Any.decode(reader, reader.uint32());
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
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetResponse();
    message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseListRequest() {
  return {
    message_name: "",
    index: "",
    prefix: undefined,
    range: undefined,
    pagination: PageRequest.fromPartial({})
  };
}
export const ListRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.message_name !== "") {
      writer.uint32(10).string(message.message_name);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== undefined) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== undefined) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message_name = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          break;
        case 4:
          message.range = ListRequest_Range.decode(reader, reader.uint32());
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      message_name: isSet(object.message_name) ? String(object.message_name) : "",
      index: isSet(object.index) ? String(object.index) : "",
      prefix: isSet(object.prefix) ? ListRequest_Prefix.fromJSON(object.prefix) : undefined,
      range: isSet(object.range) ? ListRequest_Range.fromJSON(object.range) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$message_name2, _object$index2;
    const message = createBaseListRequest();
    message.message_name = (_object$message_name2 = object.message_name) !== null && _object$message_name2 !== void 0 ? _object$message_name2 : "";
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : undefined;
    message.range = object.range !== undefined && object.range !== null ? ListRequest_Range.fromPartial(object.range) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseListRequest_Prefix() {
  return {
    values: []
  };
}
export const ListRequest_Prefix = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.values) {
      IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
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
      values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map(e => IndexValue.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$values2;
    const message = createBaseListRequest_Prefix();
    message.values = ((_object$values2 = object.values) === null || _object$values2 === void 0 ? void 0 : _object$values2.map(e => IndexValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseListRequest_Range() {
  return {
    start: [],
    end: []
  };
}
export const ListRequest_Range = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.start) {
      IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start.push(IndexValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end.push(IndexValue.decode(reader, reader.uint32()));
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
      start: Array.isArray(object === null || object === void 0 ? void 0 : object.start) ? object.start.map(e => IndexValue.fromJSON(e)) : [],
      end: Array.isArray(object === null || object === void 0 ? void 0 : object.end) ? object.end.map(e => IndexValue.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$start, _object$end;
    const message = createBaseListRequest_Range();
    message.start = ((_object$start = object.start) === null || _object$start === void 0 ? void 0 : _object$start.map(e => IndexValue.fromPartial(e))) || [];
    message.end = ((_object$end = object.end) === null || _object$end === void 0 ? void 0 : _object$end.map(e => IndexValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseListResponse() {
  return {
    results: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const ListResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.results) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      results: Array.isArray(object === null || object === void 0 ? void 0 : object.results) ? object.results.map(e => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$results;
    const message = createBaseListResponse();
    message.results = ((_object$results = object.results) === null || _object$results === void 0 ? void 0 : _object$results.map(e => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseIndexValue() {
  return {
    uint: undefined,
    int: undefined,
    str: undefined,
    bytes: undefined,
    enum: undefined,
    bool: undefined,
    timestamp: undefined,
    duration: undefined
  };
}
export const IndexValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.uint !== undefined) {
      writer.uint32(8).uint64(message.uint);
    }
    if (message.int !== undefined) {
      writer.uint32(16).int64(message.int);
    }
    if (message.str !== undefined) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== undefined) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== undefined) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== undefined) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uint = reader.uint64();
          break;
        case 2:
          message.int = reader.int64();
          break;
        case 3:
          message.str = reader.string();
          break;
        case 4:
          message.bytes = reader.bytes();
          break;
        case 5:
          message.enum = reader.string();
          break;
        case 6:
          message.bool = reader.bool();
          break;
        case 7:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
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
      uint: isSet(object.uint) ? Long.fromValue(object.uint) : undefined,
      int: isSet(object.int) ? Long.fromValue(object.int) : undefined,
      str: isSet(object.str) ? String(object.str) : undefined,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
      enum: isSet(object.enum) ? String(object.enum) : undefined,
      bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object) {
    var _object$str, _object$bytes, _object$enum, _object$bool;
    const message = createBaseIndexValue();
    message.uint = object.uint !== undefined && object.uint !== null ? Long.fromValue(object.uint) : undefined;
    message.int = object.int !== undefined && object.int !== null ? Long.fromValue(object.int) : undefined;
    message.str = (_object$str = object.str) !== null && _object$str !== void 0 ? _object$str : undefined;
    message.bytes = (_object$bytes = object.bytes) !== null && _object$bytes !== void 0 ? _object$bytes : undefined;
    message.enum = (_object$enum = object.enum) !== null && _object$enum !== void 0 ? _object$enum : undefined;
    message.bool = (_object$bool = object.bool) !== null && _object$bool !== void 0 ? _object$bool : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};