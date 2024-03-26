"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackageReference = exports.ModuleDescriptor = exports.MigrateFromInfo = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var ModuleDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.go_import !== "") {
      writer.uint32(10).string(message.go_import);
    }
    var _iterator = _createForOfIteratorHelper(message.use_package),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.can_migrate_from),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        MigrateFromInfo.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseModuleDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      go_import: (0, _helpers.isSet)(object.go_import) ? String(object.go_import) : "",
      use_package: Array.isArray(object === null || object === void 0 ? void 0 : object.use_package) ? object.use_package.map(function (e) {
        return PackageReference.fromJSON(e);
      }) : [],
      can_migrate_from: Array.isArray(object === null || object === void 0 ? void 0 : object.can_migrate_from) ? object.can_migrate_from.map(function (e) {
        return MigrateFromInfo.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$go_import, _object$use_package, _object$can_migrate_f;
    var message = createBaseModuleDescriptor();
    message.go_import = (_object$go_import = object.go_import) !== null && _object$go_import !== void 0 ? _object$go_import : "";
    message.use_package = ((_object$use_package = object.use_package) === null || _object$use_package === void 0 ? void 0 : _object$use_package.map(function (e) {
      return PackageReference.fromPartial(e);
    })) || [];
    message.can_migrate_from = ((_object$can_migrate_f = object.can_migrate_from) === null || _object$can_migrate_f === void 0 ? void 0 : _object$can_migrate_f.map(function (e) {
      return MigrateFromInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ModuleDescriptor = ModuleDescriptor;
function createBasePackageReference() {
  return {
    name: "",
    revision: 0
  };
}
var PackageReference = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePackageReference();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      revision: (0, _helpers.isSet)(object.revision) ? Number(object.revision) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$revision;
    var message = createBasePackageReference();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.revision = (_object$revision = object.revision) !== null && _object$revision !== void 0 ? _object$revision : 0;
    return message;
  }
};
exports.PackageReference = PackageReference;
function createBaseMigrateFromInfo() {
  return {
    module: ""
  };
}
var MigrateFromInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMigrateFromInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      module: (0, _helpers.isSet)(object.module) ? String(object.module) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$module;
    var message = createBaseMigrateFromInfo();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    return message;
  }
};
exports.MigrateFromInfo = MigrateFromInfo;