import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** TableDescriptor describes an ORM table. */

/** PrimaryKeyDescriptor describes a table primary key. */

/** PrimaryKeyDescriptor describes a table secondary index. */

/** TableDescriptor describes an ORM singleton table which has at most one instance. */

function createBaseTableDescriptor() {
  return {
    primary_key: PrimaryKeyDescriptor.fromPartial({}),
    index: [],
    id: 0
  };
}
export const TableDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.primary_key !== undefined) {
      PrimaryKeyDescriptor.encode(message.primary_key, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primary_key = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.uint32();
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
      primary_key: isSet(object.primary_key) ? PrimaryKeyDescriptor.fromJSON(object.primary_key) : undefined,
      index: Array.isArray(object === null || object === void 0 ? void 0 : object.index) ? object.index.map(e => SecondaryIndexDescriptor.fromJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  fromPartial(object) {
    var _object$index, _object$id;
    const message = createBaseTableDescriptor();
    message.primary_key = object.primary_key !== undefined && object.primary_key !== null ? PrimaryKeyDescriptor.fromPartial(object.primary_key) : undefined;
    message.index = ((_object$index = object.index) === null || _object$index === void 0 ? void 0 : _object$index.map(e => SecondaryIndexDescriptor.fromPartial(e))) || [];
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    return message;
  }
};
function createBasePrimaryKeyDescriptor() {
  return {
    fields: "",
    auto_increment: false
  };
}
export const PrimaryKeyDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.auto_increment === true) {
      writer.uint32(16).bool(message.auto_increment);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.auto_increment = reader.bool();
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
      fields: isSet(object.fields) ? String(object.fields) : "",
      auto_increment: isSet(object.auto_increment) ? Boolean(object.auto_increment) : false
    };
  },
  fromPartial(object) {
    var _object$fields, _object$auto_incremen;
    const message = createBasePrimaryKeyDescriptor();
    message.fields = (_object$fields = object.fields) !== null && _object$fields !== void 0 ? _object$fields : "";
    message.auto_increment = (_object$auto_incremen = object.auto_increment) !== null && _object$auto_incremen !== void 0 ? _object$auto_incremen : false;
    return message;
  }
};
function createBaseSecondaryIndexDescriptor() {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}
export const SecondaryIndexDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.unique = reader.bool();
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
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },
  fromPartial(object) {
    var _object$fields2, _object$id2, _object$unique;
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = (_object$fields2 = object.fields) !== null && _object$fields2 !== void 0 ? _object$fields2 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : 0;
    message.unique = (_object$unique = object.unique) !== null && _object$unique !== void 0 ? _object$unique : false;
    return message;
  }
};
function createBaseSingletonDescriptor() {
  return {
    id: 0
  };
}
export const SingletonDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
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
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  fromPartial(object) {
    var _object$id3;
    const message = createBaseSingletonDescriptor();
    message.id = (_object$id3 = object.id) !== null && _object$id3 !== void 0 ? _object$id3 : 0;
    return message;
  }
};