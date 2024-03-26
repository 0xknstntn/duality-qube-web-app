import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */

/** ModuleConfig is a module configuration for an app. */

/** GolangBinding is an explicit interface type to implementing type binding for dependency injection. */

function createBaseConfig() {
  return {
    modules: [],
    golang_bindings: []
  };
}
export const Config = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.modules) {
      ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.golang_bindings) {
      GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          break;
        case 2:
          message.golang_bindings.push(GolangBinding.decode(reader, reader.uint32()));
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
      modules: Array.isArray(object === null || object === void 0 ? void 0 : object.modules) ? object.modules.map(e => ModuleConfig.fromJSON(e)) : [],
      golang_bindings: Array.isArray(object === null || object === void 0 ? void 0 : object.golang_bindings) ? object.golang_bindings.map(e => GolangBinding.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$modules, _object$golang_bindin;
    const message = createBaseConfig();
    message.modules = ((_object$modules = object.modules) === null || _object$modules === void 0 ? void 0 : _object$modules.map(e => ModuleConfig.fromPartial(e))) || [];
    message.golang_bindings = ((_object$golang_bindin = object.golang_bindings) === null || _object$golang_bindin === void 0 ? void 0 : _object$golang_bindin.map(e => GolangBinding.fromPartial(e))) || [];
    return message;
  }
};
function createBaseModuleConfig() {
  return {
    name: "",
    config: Any.fromPartial({}),
    golang_bindings: []
  };
}
export const ModuleConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== undefined) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.golang_bindings) {
      GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.golang_bindings.push(GolangBinding.decode(reader, reader.uint32()));
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
      config: isSet(object.config) ? Any.fromJSON(object.config) : undefined,
      golang_bindings: Array.isArray(object === null || object === void 0 ? void 0 : object.golang_bindings) ? object.golang_bindings.map(e => GolangBinding.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$name, _object$golang_bindin2;
    const message = createBaseModuleConfig();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.config = object.config !== undefined && object.config !== null ? Any.fromPartial(object.config) : undefined;
    message.golang_bindings = ((_object$golang_bindin2 = object.golang_bindings) === null || _object$golang_bindin2 === void 0 ? void 0 : _object$golang_bindin2.map(e => GolangBinding.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGolangBinding() {
  return {
    interface_type: "",
    implementation: ""
  };
}
export const GolangBinding = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interface_type !== "") {
      writer.uint32(10).string(message.interface_type);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGolangBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interface_type = reader.string();
          break;
        case 2:
          message.implementation = reader.string();
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
      interface_type: isSet(object.interface_type) ? String(object.interface_type) : "",
      implementation: isSet(object.implementation) ? String(object.implementation) : ""
    };
  },
  fromPartial(object) {
    var _object$interface_typ, _object$implementatio;
    const message = createBaseGolangBinding();
    message.interface_type = (_object$interface_typ = object.interface_type) !== null && _object$interface_typ !== void 0 ? _object$interface_typ : "";
    message.implementation = (_object$implementatio = object.implementation) !== null && _object$implementatio !== void 0 ? _object$implementatio : "";
    return message;
  }
};