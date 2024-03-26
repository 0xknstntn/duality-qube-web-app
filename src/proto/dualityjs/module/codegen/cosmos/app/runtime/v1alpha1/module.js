import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** Module is the config object for the runtime module. */

/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */

function createBaseModule() {
  return {
    app_name: "",
    begin_blockers: [],
    end_blockers: [],
    init_genesis: [],
    export_genesis: [],
    override_store_keys: []
  };
}
export const Module = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.app_name !== "") {
      writer.uint32(10).string(message.app_name);
    }
    for (const v of message.begin_blockers) {
      writer.uint32(18).string(v);
    }
    for (const v of message.end_blockers) {
      writer.uint32(26).string(v);
    }
    for (const v of message.init_genesis) {
      writer.uint32(34).string(v);
    }
    for (const v of message.export_genesis) {
      writer.uint32(42).string(v);
    }
    for (const v of message.override_store_keys) {
      StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app_name = reader.string();
          break;
        case 2:
          message.begin_blockers.push(reader.string());
          break;
        case 3:
          message.end_blockers.push(reader.string());
          break;
        case 4:
          message.init_genesis.push(reader.string());
          break;
        case 5:
          message.export_genesis.push(reader.string());
          break;
        case 6:
          message.override_store_keys.push(StoreKeyConfig.decode(reader, reader.uint32()));
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
      app_name: isSet(object.app_name) ? String(object.app_name) : "",
      begin_blockers: Array.isArray(object === null || object === void 0 ? void 0 : object.begin_blockers) ? object.begin_blockers.map(e => String(e)) : [],
      end_blockers: Array.isArray(object === null || object === void 0 ? void 0 : object.end_blockers) ? object.end_blockers.map(e => String(e)) : [],
      init_genesis: Array.isArray(object === null || object === void 0 ? void 0 : object.init_genesis) ? object.init_genesis.map(e => String(e)) : [],
      export_genesis: Array.isArray(object === null || object === void 0 ? void 0 : object.export_genesis) ? object.export_genesis.map(e => String(e)) : [],
      override_store_keys: Array.isArray(object === null || object === void 0 ? void 0 : object.override_store_keys) ? object.override_store_keys.map(e => StoreKeyConfig.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$app_name, _object$begin_blocker, _object$end_blockers, _object$init_genesis, _object$export_genesi, _object$override_stor;
    const message = createBaseModule();
    message.app_name = (_object$app_name = object.app_name) !== null && _object$app_name !== void 0 ? _object$app_name : "";
    message.begin_blockers = ((_object$begin_blocker = object.begin_blockers) === null || _object$begin_blocker === void 0 ? void 0 : _object$begin_blocker.map(e => e)) || [];
    message.end_blockers = ((_object$end_blockers = object.end_blockers) === null || _object$end_blockers === void 0 ? void 0 : _object$end_blockers.map(e => e)) || [];
    message.init_genesis = ((_object$init_genesis = object.init_genesis) === null || _object$init_genesis === void 0 ? void 0 : _object$init_genesis.map(e => e)) || [];
    message.export_genesis = ((_object$export_genesi = object.export_genesis) === null || _object$export_genesi === void 0 ? void 0 : _object$export_genesi.map(e => e)) || [];
    message.override_store_keys = ((_object$override_stor = object.override_store_keys) === null || _object$override_stor === void 0 ? void 0 : _object$override_stor.map(e => StoreKeyConfig.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStoreKeyConfig() {
  return {
    module_name: "",
    kv_store_key: ""
  };
}
export const StoreKeyConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    if (message.kv_store_key !== "") {
      writer.uint32(18).string(message.kv_store_key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module_name = reader.string();
          break;
        case 2:
          message.kv_store_key = reader.string();
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
      module_name: isSet(object.module_name) ? String(object.module_name) : "",
      kv_store_key: isSet(object.kv_store_key) ? String(object.kv_store_key) : ""
    };
  },
  fromPartial(object) {
    var _object$module_name, _object$kv_store_key;
    const message = createBaseStoreKeyConfig();
    message.module_name = (_object$module_name = object.module_name) !== null && _object$module_name !== void 0 ? _object$module_name : "";
    message.kv_store_key = (_object$kv_store_key = object.kv_store_key) !== null && _object$kv_store_key !== void 0 ? _object$kv_store_key : "";
    return message;
  }
};