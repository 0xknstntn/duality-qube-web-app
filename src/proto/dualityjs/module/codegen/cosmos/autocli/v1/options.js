import * as _m0 from "protobufjs/minimal";
import { isSet, isObject } from "../../../helpers";
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */

/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */

/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */

/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */

/** PositionalArgDescriptor describes a positional argument. */

function createBaseModuleOptions() {
  return {
    tx: ServiceCommandDescriptor.fromPartial({}),
    query: ServiceCommandDescriptor.fromPartial({})
  };
}
export const ModuleOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = ServiceCommandDescriptor.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? ServiceCommandDescriptor.fromJSON(object.tx) : undefined,
      query: isSet(object.query) ? ServiceCommandDescriptor.fromJSON(object.query) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseModuleOptions();
    message.tx = object.tx !== undefined && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : undefined;
    return message;
  }
};
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
  return {
    key: "",
    value: ServiceCommandDescriptor.fromPartial({})
  };
}
export const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ServiceCommandDescriptor.decode(reader, reader.uint32());
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ServiceCommandDescriptor.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseServiceCommandDescriptor() {
  return {
    service: "",
    rpc_command_options: [],
    sub_commands: {}
  };
}
export const ServiceCommandDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpc_command_options) {
      RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.sub_commands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key: key,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpc_command_options.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;
        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.sub_commands[entry3.key] = entry3.value;
          }
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
      service: isSet(object.service) ? String(object.service) : "",
      rpc_command_options: Array.isArray(object === null || object === void 0 ? void 0 : object.rpc_command_options) ? object.rpc_command_options.map(e => RpcCommandOptions.fromJSON(e)) : [],
      sub_commands: isObject(object.sub_commands) ? Object.entries(object.sub_commands).reduce((acc, [key, value]) => {
        acc[key] = ServiceCommandDescriptor.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object) {
    var _object$service, _object$rpc_command_o, _object$sub_commands;
    const message = createBaseServiceCommandDescriptor();
    message.service = (_object$service = object.service) !== null && _object$service !== void 0 ? _object$service : "";
    message.rpc_command_options = ((_object$rpc_command_o = object.rpc_command_options) === null || _object$rpc_command_o === void 0 ? void 0 : _object$rpc_command_o.map(e => RpcCommandOptions.fromPartial(e))) || [];
    message.sub_commands = Object.entries((_object$sub_commands = object.sub_commands) !== null && _object$sub_commands !== void 0 ? _object$sub_commands : {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseRpcCommandOptions_FlagOptionsEntry() {
  return {
    key: "",
    value: FlagOptions.fromPartial({})
  };
}
export const RpcCommandOptions_FlagOptionsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? FlagOptions.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = object.value !== undefined && object.value !== null ? FlagOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseRpcCommandOptions() {
  return {
    rpc_method: "",
    use: "",
    long: "",
    short: "",
    example: "",
    alias: [],
    suggest_for: [],
    deprecated: "",
    version: "",
    flag_options: {},
    positional_args: [],
    skip: false
  };
}
export const RpcCommandOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.rpc_method !== "") {
      writer.uint32(10).string(message.rpc_method);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    for (const v of message.alias) {
      writer.uint32(50).string(v);
    }
    for (const v of message.suggest_for) {
      writer.uint32(58).string(v);
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flag_options).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode({
        key: key,
        value
      }, writer.uint32(82).fork()).ldelim();
    });
    for (const v of message.positional_args) {
      PositionalArgDescriptor.encode(v, writer.uint32(90).fork()).ldelim();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpc_method = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        case 4:
          message.short = reader.string();
          break;
        case 5:
          message.example = reader.string();
          break;
        case 6:
          message.alias.push(reader.string());
          break;
        case 7:
          message.suggest_for.push(reader.string());
          break;
        case 8:
          message.deprecated = reader.string();
          break;
        case 9:
          message.version = reader.string();
          break;
        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.flag_options[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.positional_args.push(PositionalArgDescriptor.decode(reader, reader.uint32()));
          break;
        case 12:
          message.skip = reader.bool();
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
      rpc_method: isSet(object.rpc_method) ? String(object.rpc_method) : "",
      use: isSet(object.use) ? String(object.use) : "",
      long: isSet(object.long) ? String(object.long) : "",
      short: isSet(object.short) ? String(object.short) : "",
      example: isSet(object.example) ? String(object.example) : "",
      alias: Array.isArray(object === null || object === void 0 ? void 0 : object.alias) ? object.alias.map(e => String(e)) : [],
      suggest_for: Array.isArray(object === null || object === void 0 ? void 0 : object.suggest_for) ? object.suggest_for.map(e => String(e)) : [],
      deprecated: isSet(object.deprecated) ? String(object.deprecated) : "",
      version: isSet(object.version) ? String(object.version) : "",
      flag_options: isObject(object.flag_options) ? Object.entries(object.flag_options).reduce((acc, [key, value]) => {
        acc[key] = FlagOptions.fromJSON(value);
        return acc;
      }, {}) : {},
      positional_args: Array.isArray(object === null || object === void 0 ? void 0 : object.positional_args) ? object.positional_args.map(e => PositionalArgDescriptor.fromJSON(e)) : [],
      skip: isSet(object.skip) ? Boolean(object.skip) : false
    };
  },
  fromPartial(object) {
    var _object$rpc_method, _object$use, _object$long, _object$short, _object$example, _object$alias, _object$suggest_for, _object$deprecated, _object$version, _object$flag_options, _object$positional_ar, _object$skip;
    const message = createBaseRpcCommandOptions();
    message.rpc_method = (_object$rpc_method = object.rpc_method) !== null && _object$rpc_method !== void 0 ? _object$rpc_method : "";
    message.use = (_object$use = object.use) !== null && _object$use !== void 0 ? _object$use : "";
    message.long = (_object$long = object.long) !== null && _object$long !== void 0 ? _object$long : "";
    message.short = (_object$short = object.short) !== null && _object$short !== void 0 ? _object$short : "";
    message.example = (_object$example = object.example) !== null && _object$example !== void 0 ? _object$example : "";
    message.alias = ((_object$alias = object.alias) === null || _object$alias === void 0 ? void 0 : _object$alias.map(e => e)) || [];
    message.suggest_for = ((_object$suggest_for = object.suggest_for) === null || _object$suggest_for === void 0 ? void 0 : _object$suggest_for.map(e => e)) || [];
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.flag_options = Object.entries((_object$flag_options = object.flag_options) !== null && _object$flag_options !== void 0 ? _object$flag_options : {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positional_args = ((_object$positional_ar = object.positional_args) === null || _object$positional_ar === void 0 ? void 0 : _object$positional_ar.map(e => PositionalArgDescriptor.fromPartial(e))) || [];
    message.skip = (_object$skip = object.skip) !== null && _object$skip !== void 0 ? _object$skip : false;
    return message;
  }
};
function createBaseFlagOptions() {
  return {
    name: "",
    shorthand: "",
    usage: "",
    default_value: "",
    no_opt_default_value: "",
    deprecated: "",
    shorthand_deprecated: "",
    hidden: false
  };
}
export const FlagOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }
    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }
    if (message.default_value !== "") {
      writer.uint32(34).string(message.default_value);
    }
    if (message.no_opt_default_value !== "") {
      writer.uint32(42).string(message.no_opt_default_value);
    }
    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }
    if (message.shorthand_deprecated !== "") {
      writer.uint32(58).string(message.shorthand_deprecated);
    }
    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.shorthand = reader.string();
          break;
        case 3:
          message.usage = reader.string();
          break;
        case 4:
          message.default_value = reader.string();
          break;
        case 5:
          message.no_opt_default_value = reader.string();
          break;
        case 6:
          message.deprecated = reader.string();
          break;
        case 7:
          message.shorthand_deprecated = reader.string();
          break;
        case 8:
          message.hidden = reader.bool();
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
      shorthand: isSet(object.shorthand) ? String(object.shorthand) : "",
      usage: isSet(object.usage) ? String(object.usage) : "",
      default_value: isSet(object.default_value) ? String(object.default_value) : "",
      no_opt_default_value: isSet(object.no_opt_default_value) ? String(object.no_opt_default_value) : "",
      deprecated: isSet(object.deprecated) ? String(object.deprecated) : "",
      shorthand_deprecated: isSet(object.shorthand_deprecated) ? String(object.shorthand_deprecated) : "",
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false
    };
  },
  fromPartial(object) {
    var _object$name, _object$shorthand, _object$usage, _object$default_value, _object$no_opt_defaul, _object$deprecated2, _object$shorthand_dep, _object$hidden;
    const message = createBaseFlagOptions();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.shorthand = (_object$shorthand = object.shorthand) !== null && _object$shorthand !== void 0 ? _object$shorthand : "";
    message.usage = (_object$usage = object.usage) !== null && _object$usage !== void 0 ? _object$usage : "";
    message.default_value = (_object$default_value = object.default_value) !== null && _object$default_value !== void 0 ? _object$default_value : "";
    message.no_opt_default_value = (_object$no_opt_defaul = object.no_opt_default_value) !== null && _object$no_opt_defaul !== void 0 ? _object$no_opt_defaul : "";
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : "";
    message.shorthand_deprecated = (_object$shorthand_dep = object.shorthand_deprecated) !== null && _object$shorthand_dep !== void 0 ? _object$shorthand_dep : "";
    message.hidden = (_object$hidden = object.hidden) !== null && _object$hidden !== void 0 ? _object$hidden : false;
    return message;
  }
};
function createBasePositionalArgDescriptor() {
  return {
    proto_field: "",
    varargs: false
  };
}
export const PositionalArgDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proto_field !== "") {
      writer.uint32(10).string(message.proto_field);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proto_field = reader.string();
          break;
        case 2:
          message.varargs = reader.bool();
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
      proto_field: isSet(object.proto_field) ? String(object.proto_field) : "",
      varargs: isSet(object.varargs) ? Boolean(object.varargs) : false
    };
  },
  fromPartial(object) {
    var _object$proto_field, _object$varargs;
    const message = createBasePositionalArgDescriptor();
    message.proto_field = (_object$proto_field = object.proto_field) !== null && _object$proto_field !== void 0 ? _object$proto_field : "";
    message.varargs = (_object$varargs = object.varargs) !== null && _object$varargs !== void 0 ? _object$varargs : false;
    return message;
  }
};