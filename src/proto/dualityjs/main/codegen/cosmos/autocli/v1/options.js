"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCommandDescriptor_SubCommandsEntry = exports.ServiceCommandDescriptor = exports.RpcCommandOptions_FlagOptionsEntry = exports.RpcCommandOptions = exports.PositionalArgDescriptor = exports.ModuleOptions = exports.FlagOptions = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var ModuleOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      tx: (0, _helpers.isSet)(object.tx) ? ServiceCommandDescriptor.fromJSON(object.tx) : undefined,
      query: (0, _helpers.isSet)(object.query) ? ServiceCommandDescriptor.fromJSON(object.query) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseModuleOptions();
    message.tx = object.tx !== undefined && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : undefined;
    return message;
  }
};
exports.ModuleOptions = ModuleOptions;
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
  return {
    key: "",
    value: ServiceCommandDescriptor.fromPartial({})
  };
}
var ServiceCommandDescriptor_SubCommandsEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      key: (0, _helpers.isSet)(object.key) ? String(object.key) : "",
      value: (0, _helpers.isSet)(object.value) ? ServiceCommandDescriptor.fromJSON(object.value) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key;
    var message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.ServiceCommandDescriptor_SubCommandsEntry = ServiceCommandDescriptor_SubCommandsEntry;
function createBaseServiceCommandDescriptor() {
  return {
    service: "",
    rpc_command_options: [],
    sub_commands: {}
  };
}
var ServiceCommandDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    var _iterator = _createForOfIteratorHelper(message.rpc_command_options),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    Object.entries(message.sub_commands).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key: key,
        value: value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpc_command_options.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;
        case 3:
          var entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      service: (0, _helpers.isSet)(object.service) ? String(object.service) : "",
      rpc_command_options: Array.isArray(object === null || object === void 0 ? void 0 : object.rpc_command_options) ? object.rpc_command_options.map(function (e) {
        return RpcCommandOptions.fromJSON(e);
      }) : [],
      sub_commands: (0, _helpers.isObject)(object.sub_commands) ? Object.entries(object.sub_commands).reduce(function (acc, _ref3) {
        var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];
        acc[key] = ServiceCommandDescriptor.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$service, _object$rpc_command_o, _object$sub_commands;
    var message = createBaseServiceCommandDescriptor();
    message.service = (_object$service = object.service) !== null && _object$service !== void 0 ? _object$service : "";
    message.rpc_command_options = ((_object$rpc_command_o = object.rpc_command_options) === null || _object$rpc_command_o === void 0 ? void 0 : _object$rpc_command_o.map(function (e) {
      return RpcCommandOptions.fromPartial(e);
    })) || [];
    message.sub_commands = Object.entries((_object$sub_commands = object.sub_commands) !== null && _object$sub_commands !== void 0 ? _object$sub_commands : {}).reduce(function (acc, _ref5) {
      var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
exports.ServiceCommandDescriptor = ServiceCommandDescriptor;
function createBaseRpcCommandOptions_FlagOptionsEntry() {
  return {
    key: "",
    value: FlagOptions.fromPartial({})
  };
}
var RpcCommandOptions_FlagOptionsEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      key: (0, _helpers.isSet)(object.key) ? String(object.key) : "",
      value: (0, _helpers.isSet)(object.value) ? FlagOptions.fromJSON(object.value) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key2;
    var message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = object.value !== undefined && object.value !== null ? FlagOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.RpcCommandOptions_FlagOptionsEntry = RpcCommandOptions_FlagOptionsEntry;
function createBaseRpcCommandOptions() {
  return {
    rpc_method: "",
    use: "",
    "long": "",
    "short": "",
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
var RpcCommandOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rpc_method !== "") {
      writer.uint32(10).string(message.rpc_method);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message["long"] !== "") {
      writer.uint32(26).string(message["long"]);
    }
    if (message["short"] !== "") {
      writer.uint32(34).string(message["short"]);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    var _iterator2 = _createForOfIteratorHelper(message.alias),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(50).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.suggest_for),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        writer.uint32(58).string(_v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flag_options).forEach(function (_ref7) {
      var _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
        key = _ref8[0],
        value = _ref8[1];
      RpcCommandOptions_FlagOptionsEntry.encode({
        key: key,
        value: value
      }, writer.uint32(82).fork()).ldelim();
    });
    var _iterator4 = _createForOfIteratorHelper(message.positional_args),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        PositionalArgDescriptor.encode(_v2, writer.uint32(90).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpc_method = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message["long"] = reader.string();
          break;
        case 4:
          message["short"] = reader.string();
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
          var entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      rpc_method: (0, _helpers.isSet)(object.rpc_method) ? String(object.rpc_method) : "",
      use: (0, _helpers.isSet)(object.use) ? String(object.use) : "",
      "long": (0, _helpers.isSet)(object["long"]) ? String(object["long"]) : "",
      "short": (0, _helpers.isSet)(object["short"]) ? String(object["short"]) : "",
      example: (0, _helpers.isSet)(object.example) ? String(object.example) : "",
      alias: Array.isArray(object === null || object === void 0 ? void 0 : object.alias) ? object.alias.map(function (e) {
        return String(e);
      }) : [],
      suggest_for: Array.isArray(object === null || object === void 0 ? void 0 : object.suggest_for) ? object.suggest_for.map(function (e) {
        return String(e);
      }) : [],
      deprecated: (0, _helpers.isSet)(object.deprecated) ? String(object.deprecated) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      flag_options: (0, _helpers.isObject)(object.flag_options) ? Object.entries(object.flag_options).reduce(function (acc, _ref9) {
        var _ref10 = (0, _slicedToArray2["default"])(_ref9, 2),
          key = _ref10[0],
          value = _ref10[1];
        acc[key] = FlagOptions.fromJSON(value);
        return acc;
      }, {}) : {},
      positional_args: Array.isArray(object === null || object === void 0 ? void 0 : object.positional_args) ? object.positional_args.map(function (e) {
        return PositionalArgDescriptor.fromJSON(e);
      }) : [],
      skip: (0, _helpers.isSet)(object.skip) ? Boolean(object.skip) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$rpc_method, _object$use, _object$long, _object$short, _object$example, _object$alias, _object$suggest_for, _object$deprecated, _object$version, _object$flag_options, _object$positional_ar, _object$skip;
    var message = createBaseRpcCommandOptions();
    message.rpc_method = (_object$rpc_method = object.rpc_method) !== null && _object$rpc_method !== void 0 ? _object$rpc_method : "";
    message.use = (_object$use = object.use) !== null && _object$use !== void 0 ? _object$use : "";
    message["long"] = (_object$long = object["long"]) !== null && _object$long !== void 0 ? _object$long : "";
    message["short"] = (_object$short = object["short"]) !== null && _object$short !== void 0 ? _object$short : "";
    message.example = (_object$example = object.example) !== null && _object$example !== void 0 ? _object$example : "";
    message.alias = ((_object$alias = object.alias) === null || _object$alias === void 0 ? void 0 : _object$alias.map(function (e) {
      return e;
    })) || [];
    message.suggest_for = ((_object$suggest_for = object.suggest_for) === null || _object$suggest_for === void 0 ? void 0 : _object$suggest_for.map(function (e) {
      return e;
    })) || [];
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.flag_options = Object.entries((_object$flag_options = object.flag_options) !== null && _object$flag_options !== void 0 ? _object$flag_options : {}).reduce(function (acc, _ref11) {
      var _ref12 = (0, _slicedToArray2["default"])(_ref11, 2),
        key = _ref12[0],
        value = _ref12[1];
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positional_args = ((_object$positional_ar = object.positional_args) === null || _object$positional_ar === void 0 ? void 0 : _object$positional_ar.map(function (e) {
      return PositionalArgDescriptor.fromPartial(e);
    })) || [];
    message.skip = (_object$skip = object.skip) !== null && _object$skip !== void 0 ? _object$skip : false;
    return message;
  }
};
exports.RpcCommandOptions = RpcCommandOptions;
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
var FlagOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFlagOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      shorthand: (0, _helpers.isSet)(object.shorthand) ? String(object.shorthand) : "",
      usage: (0, _helpers.isSet)(object.usage) ? String(object.usage) : "",
      default_value: (0, _helpers.isSet)(object.default_value) ? String(object.default_value) : "",
      no_opt_default_value: (0, _helpers.isSet)(object.no_opt_default_value) ? String(object.no_opt_default_value) : "",
      deprecated: (0, _helpers.isSet)(object.deprecated) ? String(object.deprecated) : "",
      shorthand_deprecated: (0, _helpers.isSet)(object.shorthand_deprecated) ? String(object.shorthand_deprecated) : "",
      hidden: (0, _helpers.isSet)(object.hidden) ? Boolean(object.hidden) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$shorthand, _object$usage, _object$default_value, _object$no_opt_defaul, _object$deprecated2, _object$shorthand_dep, _object$hidden;
    var message = createBaseFlagOptions();
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
exports.FlagOptions = FlagOptions;
function createBasePositionalArgDescriptor() {
  return {
    proto_field: "",
    varargs: false
  };
}
var PositionalArgDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.proto_field !== "") {
      writer.uint32(10).string(message.proto_field);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      proto_field: (0, _helpers.isSet)(object.proto_field) ? String(object.proto_field) : "",
      varargs: (0, _helpers.isSet)(object.varargs) ? Boolean(object.varargs) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$proto_field, _object$varargs;
    var message = createBasePositionalArgDescriptor();
    message.proto_field = (_object$proto_field = object.proto_field) !== null && _object$proto_field !== void 0 ? _object$proto_field : "";
    message.varargs = (_object$varargs = object.varargs) !== null && _object$varargs !== void 0 ? _object$varargs : false;
    return message;
  }
};
exports.PositionalArgDescriptor = PositionalArgDescriptor;