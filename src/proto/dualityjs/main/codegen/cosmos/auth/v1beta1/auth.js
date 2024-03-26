"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.ModuleCredential = exports.ModuleAccount = exports.BaseAccount = void 0;
var _any = require("../../../google/protobuf/any");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

/** ModuleAccount defines an account for modules that holds coins on a pool. */

/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 * 
 * Since: cosmos-sdk 0.47
 */

/** Params defines the parameters for the auth module. */

function createBaseBaseAccount() {
  return {
    address: "",
    pub_key: _any.Any.fromPartial({}),
    account_number: _helpers.Long.UZERO,
    sequence: _helpers.Long.UZERO
  };
}
var BaseAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pub_key !== undefined) {
      _any.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (!message.account_number.isZero()) {
      writer.uint32(24).uint64(message.account_number);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBaseAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pub_key = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.account_number = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      pub_key: (0, _helpers.isSet)(object.pub_key) ? _any.Any.fromJSON(object.pub_key) : undefined,
      account_number: (0, _helpers.isSet)(object.account_number) ? _helpers.Long.fromValue(object.account_number) : _helpers.Long.UZERO,
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseBaseAccount();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? _any.Any.fromPartial(object.pub_key) : undefined;
    message.account_number = object.account_number !== undefined && object.account_number !== null ? _helpers.Long.fromValue(object.account_number) : _helpers.Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.BaseAccount = BaseAccount;
function createBaseModuleAccount() {
  return {
    base_account: BaseAccount.fromPartial({}),
    name: "",
    permissions: []
  };
}
var ModuleAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    var _iterator = _createForOfIteratorHelper(message.permissions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
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
      base_account: (0, _helpers.isSet)(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$permissions;
    var message = createBaseModuleAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.permissions = ((_object$permissions = object.permissions) === null || _object$permissions === void 0 ? void 0 : _object$permissions.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ModuleAccount = ModuleAccount;
function createBaseModuleCredential() {
  return {
    module_name: "",
    derivation_keys: []
  };
}
var ModuleCredential = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    var _iterator2 = _createForOfIteratorHelper(message.derivation_keys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(18).bytes(v);
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
    var message = createBaseModuleCredential();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module_name = reader.string();
          break;
        case 2:
          message.derivation_keys.push(reader.bytes());
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
      derivation_keys: Array.isArray(object === null || object === void 0 ? void 0 : object.derivation_keys) ? object.derivation_keys.map(function (e) {
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$module_name, _object$derivation_ke;
    var message = createBaseModuleCredential();
    message.module_name = (_object$module_name = object.module_name) !== null && _object$module_name !== void 0 ? _object$module_name : "";
    message.derivation_keys = ((_object$derivation_ke = object.derivation_keys) === null || _object$derivation_ke === void 0 ? void 0 : _object$derivation_ke.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ModuleCredential = ModuleCredential;
function createBaseParams() {
  return {
    max_memo_characters: _helpers.Long.UZERO,
    tx_sig_limit: _helpers.Long.UZERO,
    tx_size_cost_per_byte: _helpers.Long.UZERO,
    sig_verify_cost_ed25519: _helpers.Long.UZERO,
    sig_verify_cost_secp256k1: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.max_memo_characters.isZero()) {
      writer.uint32(8).uint64(message.max_memo_characters);
    }
    if (!message.tx_sig_limit.isZero()) {
      writer.uint32(16).uint64(message.tx_sig_limit);
    }
    if (!message.tx_size_cost_per_byte.isZero()) {
      writer.uint32(24).uint64(message.tx_size_cost_per_byte);
    }
    if (!message.sig_verify_cost_ed25519.isZero()) {
      writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
    }
    if (!message.sig_verify_cost_secp256k1.isZero()) {
      writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_memo_characters = reader.uint64();
          break;
        case 2:
          message.tx_sig_limit = reader.uint64();
          break;
        case 3:
          message.tx_size_cost_per_byte = reader.uint64();
          break;
        case 4:
          message.sig_verify_cost_ed25519 = reader.uint64();
          break;
        case 5:
          message.sig_verify_cost_secp256k1 = reader.uint64();
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
      max_memo_characters: (0, _helpers.isSet)(object.max_memo_characters) ? _helpers.Long.fromValue(object.max_memo_characters) : _helpers.Long.UZERO,
      tx_sig_limit: (0, _helpers.isSet)(object.tx_sig_limit) ? _helpers.Long.fromValue(object.tx_sig_limit) : _helpers.Long.UZERO,
      tx_size_cost_per_byte: (0, _helpers.isSet)(object.tx_size_cost_per_byte) ? _helpers.Long.fromValue(object.tx_size_cost_per_byte) : _helpers.Long.UZERO,
      sig_verify_cost_ed25519: (0, _helpers.isSet)(object.sig_verify_cost_ed25519) ? _helpers.Long.fromValue(object.sig_verify_cost_ed25519) : _helpers.Long.UZERO,
      sig_verify_cost_secp256k1: (0, _helpers.isSet)(object.sig_verify_cost_secp256k1) ? _helpers.Long.fromValue(object.sig_verify_cost_secp256k1) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.max_memo_characters = object.max_memo_characters !== undefined && object.max_memo_characters !== null ? _helpers.Long.fromValue(object.max_memo_characters) : _helpers.Long.UZERO;
    message.tx_sig_limit = object.tx_sig_limit !== undefined && object.tx_sig_limit !== null ? _helpers.Long.fromValue(object.tx_sig_limit) : _helpers.Long.UZERO;
    message.tx_size_cost_per_byte = object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null ? _helpers.Long.fromValue(object.tx_size_cost_per_byte) : _helpers.Long.UZERO;
    message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null ? _helpers.Long.fromValue(object.sig_verify_cost_ed25519) : _helpers.Long.UZERO;
    message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null ? _helpers.Long.fromValue(object.sig_verify_cost_secp256k1) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;