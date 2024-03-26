import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** StorageType */
export let StorageType = /*#__PURE__*/function (StorageType) {
  StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
  StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
  StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return StorageType;
}({});
export function storageTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;
    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;
    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
export function storageTypeToJSON(object) {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";
    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */

/** FileEntry describes an ORM file used in a module. */

function createBaseModuleSchemaDescriptor() {
  return {
    schema_file: [],
    prefix: new Uint8Array()
  };
}
export const ModuleSchemaDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.schema_file) {
      ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema_file.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
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
      schema_file: Array.isArray(object === null || object === void 0 ? void 0 : object.schema_file) ? object.schema_file.map(e => ModuleSchemaDescriptor_FileEntry.fromJSON(e)) : [],
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$schema_file, _object$prefix;
    const message = createBaseModuleSchemaDescriptor();
    message.schema_file = ((_object$schema_file = object.schema_file) === null || _object$schema_file === void 0 ? void 0 : _object$schema_file.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e))) || [];
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
function createBaseModuleSchemaDescriptor_FileEntry() {
  return {
    id: 0,
    proto_file_name: "",
    storage_type: 0
  };
}
export const ModuleSchemaDescriptor_FileEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.proto_file_name !== "") {
      writer.uint32(18).string(message.proto_file_name);
    }
    if (message.storage_type !== 0) {
      writer.uint32(24).int32(message.storage_type);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.proto_file_name = reader.string();
          break;
        case 3:
          message.storage_type = reader.int32();
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
      id: isSet(object.id) ? Number(object.id) : 0,
      proto_file_name: isSet(object.proto_file_name) ? String(object.proto_file_name) : "",
      storage_type: isSet(object.storage_type) ? storageTypeFromJSON(object.storage_type) : -1
    };
  },
  fromPartial(object) {
    var _object$id, _object$proto_file_na, _object$storage_type;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    message.proto_file_name = (_object$proto_file_na = object.proto_file_name) !== null && _object$proto_file_na !== void 0 ? _object$proto_file_na : "";
    message.storage_type = (_object$storage_type = object.storage_type) !== null && _object$storage_type !== void 0 ? _object$storage_type : 0;
    return message;
  }
};