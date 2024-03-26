"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreKeyConfig = exports.Module = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var Module = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.app_name !== "") {
      writer.uint32(10).string(message.app_name);
    }
    var _iterator = _createForOfIteratorHelper(message.begin_blockers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.end_blockers),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(26).string(_v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.init_genesis),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        writer.uint32(34).string(_v2);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.export_genesis),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        writer.uint32(42).string(_v3);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.override_store_keys),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        StoreKeyConfig.encode(_v4, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModule();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      app_name: (0, _helpers.isSet)(object.app_name) ? String(object.app_name) : "",
      begin_blockers: Array.isArray(object === null || object === void 0 ? void 0 : object.begin_blockers) ? object.begin_blockers.map(function (e) {
        return String(e);
      }) : [],
      end_blockers: Array.isArray(object === null || object === void 0 ? void 0 : object.end_blockers) ? object.end_blockers.map(function (e) {
        return String(e);
      }) : [],
      init_genesis: Array.isArray(object === null || object === void 0 ? void 0 : object.init_genesis) ? object.init_genesis.map(function (e) {
        return String(e);
      }) : [],
      export_genesis: Array.isArray(object === null || object === void 0 ? void 0 : object.export_genesis) ? object.export_genesis.map(function (e) {
        return String(e);
      }) : [],
      override_store_keys: Array.isArray(object === null || object === void 0 ? void 0 : object.override_store_keys) ? object.override_store_keys.map(function (e) {
        return StoreKeyConfig.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$app_name, _object$begin_blocker, _object$end_blockers, _object$init_genesis, _object$export_genesi, _object$override_stor;
    var message = createBaseModule();
    message.app_name = (_object$app_name = object.app_name) !== null && _object$app_name !== void 0 ? _object$app_name : "";
    message.begin_blockers = ((_object$begin_blocker = object.begin_blockers) === null || _object$begin_blocker === void 0 ? void 0 : _object$begin_blocker.map(function (e) {
      return e;
    })) || [];
    message.end_blockers = ((_object$end_blockers = object.end_blockers) === null || _object$end_blockers === void 0 ? void 0 : _object$end_blockers.map(function (e) {
      return e;
    })) || [];
    message.init_genesis = ((_object$init_genesis = object.init_genesis) === null || _object$init_genesis === void 0 ? void 0 : _object$init_genesis.map(function (e) {
      return e;
    })) || [];
    message.export_genesis = ((_object$export_genesi = object.export_genesis) === null || _object$export_genesi === void 0 ? void 0 : _object$export_genesi.map(function (e) {
      return e;
    })) || [];
    message.override_store_keys = ((_object$override_stor = object.override_store_keys) === null || _object$override_stor === void 0 ? void 0 : _object$override_stor.map(function (e) {
      return StoreKeyConfig.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Module = Module;
function createBaseStoreKeyConfig() {
  return {
    module_name: "",
    kv_store_key: ""
  };
}
var StoreKeyConfig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    if (message.kv_store_key !== "") {
      writer.uint32(18).string(message.kv_store_key);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      module_name: (0, _helpers.isSet)(object.module_name) ? String(object.module_name) : "",
      kv_store_key: (0, _helpers.isSet)(object.kv_store_key) ? String(object.kv_store_key) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$module_name, _object$kv_store_key;
    var message = createBaseStoreKeyConfig();
    message.module_name = (_object$module_name = object.module_name) !== null && _object$module_name !== void 0 ? _object$module_name : "";
    message.kv_store_key = (_object$kv_store_key = object.kv_store_key) !== null && _object$kv_store_key !== void 0 ? _object$kv_store_key : "";
    return message;
  }
};
exports.StoreKeyConfig = StoreKeyConfig;