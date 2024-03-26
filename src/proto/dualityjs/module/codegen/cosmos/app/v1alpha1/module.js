import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** ModuleDescriptor describes an app module. */

/** PackageReference is a reference to a protobuf package used by a module. */

/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 */

function createBaseModuleDescriptor() {
  return {
    go_import: "",
    use_package: [],
    can_migrate_from: []
  };
}
export const ModuleDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.go_import !== "") {
      writer.uint32(10).string(message.go_import);
    }
    for (const v of message.use_package) {
      PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.can_migrate_from) {
      MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.go_import = reader.string();
          break;
        case 2:
          message.use_package.push(PackageReference.decode(reader, reader.uint32()));
          break;
        case 3:
          message.can_migrate_from.push(MigrateFromInfo.decode(reader, reader.uint32()));
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
      go_import: isSet(object.go_import) ? String(object.go_import) : "",
      use_package: Array.isArray(object === null || object === void 0 ? void 0 : object.use_package) ? object.use_package.map(e => PackageReference.fromJSON(e)) : [],
      can_migrate_from: Array.isArray(object === null || object === void 0 ? void 0 : object.can_migrate_from) ? object.can_migrate_from.map(e => MigrateFromInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$go_import, _object$use_package, _object$can_migrate_f;
    const message = createBaseModuleDescriptor();
    message.go_import = (_object$go_import = object.go_import) !== null && _object$go_import !== void 0 ? _object$go_import : "";
    message.use_package = ((_object$use_package = object.use_package) === null || _object$use_package === void 0 ? void 0 : _object$use_package.map(e => PackageReference.fromPartial(e))) || [];
    message.can_migrate_from = ((_object$can_migrate_f = object.can_migrate_from) === null || _object$can_migrate_f === void 0 ? void 0 : _object$can_migrate_f.map(e => MigrateFromInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBasePackageReference() {
  return {
    name: "",
    revision: 0
  };
}
export const PackageReference = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.revision = reader.uint32();
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
      name: isSet(object.name) ? String(object.name) : "",
      revision: isSet(object.revision) ? Number(object.revision) : 0
    };
  },
  fromPartial(object) {
    var _object$name, _object$revision;
    const message = createBasePackageReference();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.revision = (_object$revision = object.revision) !== null && _object$revision !== void 0 ? _object$revision : 0;
    return message;
  }
};
function createBaseMigrateFromInfo() {
  return {
    module: ""
  };
}
export const MigrateFromInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateFromInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
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
      module: isSet(object.module) ? String(object.module) : ""
    };
  },
  fromPartial(object) {
    var _object$module;
    const message = createBaseMigrateFromInfo();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    return message;
  }
};