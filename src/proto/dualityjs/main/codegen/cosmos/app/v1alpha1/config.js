"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleConfig = exports.GolangBinding = exports.Config = void 0;
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var Config = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.modules),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.golang_bindings),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        GolangBinding.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConfig();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      modules: Array.isArray(object === null || object === void 0 ? void 0 : object.modules) ? object.modules.map(function (e) {
        return ModuleConfig.fromJSON(e);
      }) : [],
      golang_bindings: Array.isArray(object === null || object === void 0 ? void 0 : object.golang_bindings) ? object.golang_bindings.map(function (e) {
        return GolangBinding.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$modules, _object$golang_bindin;
    var message = createBaseConfig();
    message.modules = ((_object$modules = object.modules) === null || _object$modules === void 0 ? void 0 : _object$modules.map(function (e) {
      return ModuleConfig.fromPartial(e);
    })) || [];
    message.golang_bindings = ((_object$golang_bindin = object.golang_bindings) === null || _object$golang_bindin === void 0 ? void 0 : _object$golang_bindin.map(function (e) {
      return GolangBinding.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Config = Config;
function createBaseModuleConfig() {
  return {
    name: "",
    config: _any.Any.fromPartial({}),
    golang_bindings: []
  };
}
var ModuleConfig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== undefined) {
      _any.Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    var _iterator3 = _createForOfIteratorHelper(message.golang_bindings),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleConfig();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = _any.Any.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      config: (0, _helpers.isSet)(object.config) ? _any.Any.fromJSON(object.config) : undefined,
      golang_bindings: Array.isArray(object === null || object === void 0 ? void 0 : object.golang_bindings) ? object.golang_bindings.map(function (e) {
        return GolangBinding.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$golang_bindin2;
    var message = createBaseModuleConfig();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.config = object.config !== undefined && object.config !== null ? _any.Any.fromPartial(object.config) : undefined;
    message.golang_bindings = ((_object$golang_bindin2 = object.golang_bindings) === null || _object$golang_bindin2 === void 0 ? void 0 : _object$golang_bindin2.map(function (e) {
      return GolangBinding.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ModuleConfig = ModuleConfig;
function createBaseGolangBinding() {
  return {
    interface_type: "",
    implementation: ""
  };
}
var GolangBinding = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.interface_type !== "") {
      writer.uint32(10).string(message.interface_type);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGolangBinding();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      interface_type: (0, _helpers.isSet)(object.interface_type) ? String(object.interface_type) : "",
      implementation: (0, _helpers.isSet)(object.implementation) ? String(object.implementation) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$interface_typ, _object$implementatio;
    var message = createBaseGolangBinding();
    message.interface_type = (_object$interface_typ = object.interface_type) !== null && _object$interface_typ !== void 0 ? _object$interface_typ : "";
    message.implementation = (_object$implementatio = object.implementation) !== null && _object$implementatio !== void 0 ? _object$implementatio : "";
    return message;
  }
};
exports.GolangBinding = GolangBinding;