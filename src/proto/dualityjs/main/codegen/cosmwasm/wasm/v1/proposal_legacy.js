"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateInstantiateConfigProposal = exports.UpdateAdminProposal = exports.UnpinCodesProposal = exports.SudoContractProposal = exports.StoreCodeProposal = exports.StoreAndInstantiateContractProposal = exports.PinCodesProposal = exports.MigrateContractProposal = exports.InstantiateContractProposal = exports.InstantiateContract2Proposal = exports.ExecuteContractProposal = exports.ClearAdminProposal = exports.AccessConfigUpdate = void 0;
var _types = require("./types");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
function createBaseStoreCodeProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: _types.AccessConfig.fromPartial({}),
    unpin_code: false,
    source: "",
    builder: "",
    code_hash: new Uint8Array()
  };
}
var StoreCodeProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(64).bool(message.unpin_code);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(90).bytes(message.code_hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.wasm_byte_code = reader.bytes();
          break;
        case 7:
          message.instantiate_permission = _types.AccessConfig.decode(reader, reader.uint32());
          break;
        case 8:
          message.unpin_code = reader.bool();
          break;
        case 9:
          message.source = reader.string();
          break;
        case 10:
          message.builder = reader.string();
          break;
        case 11:
          message.code_hash = reader.bytes();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      run_as: (0, _helpers.isSet)(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: (0, _helpers.isSet)(object.wasm_byte_code) ? (0, _helpers.bytesFromBase64)(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: (0, _helpers.isSet)(object.instantiate_permission) ? _types.AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      unpin_code: (0, _helpers.isSet)(object.unpin_code) ? Boolean(object.unpin_code) : false,
      source: (0, _helpers.isSet)(object.source) ? String(object.source) : "",
      builder: (0, _helpers.isSet)(object.builder) ? String(object.builder) : "",
      code_hash: (0, _helpers.isSet)(object.code_hash) ? (0, _helpers.bytesFromBase64)(object.code_hash) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$description, _object$run_as, _object$wasm_byte_cod, _object$unpin_code, _object$source, _object$builder, _object$code_hash;
    var message = createBaseStoreCodeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.run_as = (_object$run_as = object.run_as) !== null && _object$run_as !== void 0 ? _object$run_as : "";
    message.wasm_byte_code = (_object$wasm_byte_cod = object.wasm_byte_code) !== null && _object$wasm_byte_cod !== void 0 ? _object$wasm_byte_cod : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = (_object$unpin_code = object.unpin_code) !== null && _object$unpin_code !== void 0 ? _object$unpin_code : false;
    message.source = (_object$source = object.source) !== null && _object$source !== void 0 ? _object$source : "";
    message.builder = (_object$builder = object.builder) !== null && _object$builder !== void 0 ? _object$builder : "";
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    return message;
  }
};
exports.StoreCodeProposal = StoreCodeProposal;
function createBaseInstantiateContractProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: _helpers.Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
var InstantiateContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    var _iterator = _createForOfIteratorHelper(message.funds),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(66).fork()).ldelim();
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
    var message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      run_as: (0, _helpers.isSet)(object.run_as) ? String(object.run_as) : "",
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      label: (0, _helpers.isSet)(object.label) ? String(object.label) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title2, _object$description2, _object$run_as2, _object$admin, _object$label, _object$msg, _object$funds;
    var message = createBaseInstantiateContractProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.run_as = (_object$run_as2 = object.run_as) !== null && _object$run_as2 !== void 0 ? _object$run_as2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    message.funds = ((_object$funds = object.funds) === null || _object$funds === void 0 ? void 0 : _object$funds.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.InstantiateContractProposal = InstantiateContractProposal;
function createBaseInstantiateContract2Proposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: _helpers.Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fix_msg: false
  };
}
var InstantiateContract2Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    var _iterator2 = _createForOfIteratorHelper(message.funds),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fix_msg === true) {
      writer.uint32(80).bool(message.fix_msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInstantiateContract2Proposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.salt = reader.bytes();
          break;
        case 10:
          message.fix_msg = reader.bool();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      run_as: (0, _helpers.isSet)(object.run_as) ? String(object.run_as) : "",
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      label: (0, _helpers.isSet)(object.label) ? String(object.label) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      salt: (0, _helpers.isSet)(object.salt) ? (0, _helpers.bytesFromBase64)(object.salt) : new Uint8Array(),
      fix_msg: (0, _helpers.isSet)(object.fix_msg) ? Boolean(object.fix_msg) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title3, _object$description3, _object$run_as3, _object$admin2, _object$label2, _object$msg2, _object$funds2, _object$salt, _object$fix_msg;
    var message = createBaseInstantiateContract2Proposal();
    message.title = (_object$title3 = object.title) !== null && _object$title3 !== void 0 ? _object$title3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.run_as = (_object$run_as3 = object.run_as) !== null && _object$run_as3 !== void 0 ? _object$run_as3 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.label = (_object$label2 = object.label) !== null && _object$label2 !== void 0 ? _object$label2 : "";
    message.msg = (_object$msg2 = object.msg) !== null && _object$msg2 !== void 0 ? _object$msg2 : new Uint8Array();
    message.funds = ((_object$funds2 = object.funds) === null || _object$funds2 === void 0 ? void 0 : _object$funds2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.salt = (_object$salt = object.salt) !== null && _object$salt !== void 0 ? _object$salt : new Uint8Array();
    message.fix_msg = (_object$fix_msg = object.fix_msg) !== null && _object$fix_msg !== void 0 ? _object$fix_msg : false;
    return message;
  }
};
exports.InstantiateContract2Proposal = InstantiateContract2Proposal;
function createBaseMigrateContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    code_id: _helpers.Long.UZERO,
    msg: new Uint8Array()
  };
}
var MigrateContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.msg = reader.bytes();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title4, _object$description4, _object$contract, _object$msg3;
    var message = createBaseMigrateContractProposal();
    message.title = (_object$title4 = object.title) !== null && _object$title4 !== void 0 ? _object$title4 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    return message;
  }
};
exports.MigrateContractProposal = MigrateContractProposal;
function createBaseSudoContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
var SudoContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.msg = reader.bytes();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title5, _object$description5, _object$contract2, _object$msg4;
    var message = createBaseSudoContractProposal();
    message.title = (_object$title5 = object.title) !== null && _object$title5 !== void 0 ? _object$title5 : "";
    message.description = (_object$description5 = object.description) !== null && _object$description5 !== void 0 ? _object$description5 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    return message;
  }
};
exports.SudoContractProposal = SudoContractProposal;
function createBaseExecuteContractProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
var ExecuteContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    var _iterator3 = _createForOfIteratorHelper(message.funds),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(50).fork()).ldelim();
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
    var message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      run_as: (0, _helpers.isSet)(object.run_as) ? String(object.run_as) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title6, _object$description6, _object$run_as4, _object$contract3, _object$msg5, _object$funds3;
    var message = createBaseExecuteContractProposal();
    message.title = (_object$title6 = object.title) !== null && _object$title6 !== void 0 ? _object$title6 : "";
    message.description = (_object$description6 = object.description) !== null && _object$description6 !== void 0 ? _object$description6 : "";
    message.run_as = (_object$run_as4 = object.run_as) !== null && _object$run_as4 !== void 0 ? _object$run_as4 : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    message.msg = (_object$msg5 = object.msg) !== null && _object$msg5 !== void 0 ? _object$msg5 : new Uint8Array();
    message.funds = ((_object$funds3 = object.funds) === null || _object$funds3 === void 0 ? void 0 : _object$funds3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ExecuteContractProposal = ExecuteContractProposal;
function createBaseUpdateAdminProposal() {
  return {
    title: "",
    description: "",
    new_admin: "",
    contract: ""
  };
}
var UpdateAdminProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.new_admin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      new_admin: (0, _helpers.isSet)(object.new_admin) ? String(object.new_admin) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title7, _object$description7, _object$new_admin, _object$contract4;
    var message = createBaseUpdateAdminProposal();
    message.title = (_object$title7 = object.title) !== null && _object$title7 !== void 0 ? _object$title7 : "";
    message.description = (_object$description7 = object.description) !== null && _object$description7 !== void 0 ? _object$description7 : "";
    message.new_admin = (_object$new_admin = object.new_admin) !== null && _object$new_admin !== void 0 ? _object$new_admin : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }
};
exports.UpdateAdminProposal = UpdateAdminProposal;
function createBaseClearAdminProposal() {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
var ClearAdminProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title8, _object$description8, _object$contract5;
    var message = createBaseClearAdminProposal();
    message.title = (_object$title8 = object.title) !== null && _object$title8 !== void 0 ? _object$title8 : "";
    message.description = (_object$description8 = object.description) !== null && _object$description8 !== void 0 ? _object$description8 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    return message;
  }
};
exports.ClearAdminProposal = ClearAdminProposal;
function createBasePinCodesProposal() {
  return {
    title: "",
    description: "",
    code_ids: []
  };
}
var PinCodesProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    var _iterator4 = _createForOfIteratorHelper(message.code_ids),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePinCodesProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(reader.uint64());
            }
          } else {
            message.code_ids.push(reader.uint64());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title9, _object$description9, _object$code_ids;
    var message = createBasePinCodesProposal();
    message.title = (_object$title9 = object.title) !== null && _object$title9 !== void 0 ? _object$title9 : "";
    message.description = (_object$description9 = object.description) !== null && _object$description9 !== void 0 ? _object$description9 : "";
    message.code_ids = ((_object$code_ids = object.code_ids) === null || _object$code_ids === void 0 ? void 0 : _object$code_ids.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.PinCodesProposal = PinCodesProposal;
function createBaseUnpinCodesProposal() {
  return {
    title: "",
    description: "",
    code_ids: []
  };
}
var UnpinCodesProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    var _iterator5 = _createForOfIteratorHelper(message.code_ids),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(reader.uint64());
            }
          } else {
            message.code_ids.push(reader.uint64());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title10, _object$description10, _object$code_ids2;
    var message = createBaseUnpinCodesProposal();
    message.title = (_object$title10 = object.title) !== null && _object$title10 !== void 0 ? _object$title10 : "";
    message.description = (_object$description10 = object.description) !== null && _object$description10 !== void 0 ? _object$description10 : "";
    message.code_ids = ((_object$code_ids2 = object.code_ids) === null || _object$code_ids2 === void 0 ? void 0 : _object$code_ids2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.UnpinCodesProposal = UnpinCodesProposal;
function createBaseAccessConfigUpdate() {
  return {
    code_id: _helpers.Long.UZERO,
    instantiate_permission: _types.AccessConfig.fromPartial({})
  };
}
var AccessConfigUpdate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.instantiate_permission = _types.AccessConfig.decode(reader, reader.uint32());
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
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      instantiate_permission: (0, _helpers.isSet)(object.instantiate_permission) ? _types.AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAccessConfigUpdate();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }
};
exports.AccessConfigUpdate = AccessConfigUpdate;
function createBaseUpdateInstantiateConfigProposal() {
  return {
    title: "",
    description: "",
    access_config_updates: []
  };
}
var UpdateInstantiateConfigProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    var _iterator6 = _createForOfIteratorHelper(message.access_config_updates),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUpdateInstantiateConfigProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.access_config_updates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      access_config_updates: Array.isArray(object === null || object === void 0 ? void 0 : object.access_config_updates) ? object.access_config_updates.map(function (e) {
        return AccessConfigUpdate.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title11, _object$description11, _object$access_config;
    var message = createBaseUpdateInstantiateConfigProposal();
    message.title = (_object$title11 = object.title) !== null && _object$title11 !== void 0 ? _object$title11 : "";
    message.description = (_object$description11 = object.description) !== null && _object$description11 !== void 0 ? _object$description11 : "";
    message.access_config_updates = ((_object$access_config = object.access_config_updates) === null || _object$access_config === void 0 ? void 0 : _object$access_config.map(function (e) {
      return AccessConfigUpdate.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.UpdateInstantiateConfigProposal = UpdateInstantiateConfigProposal;
function createBaseStoreAndInstantiateContractProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: _types.AccessConfig.fromPartial({}),
    unpin_code: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    code_hash: new Uint8Array()
  };
}
var StoreAndInstantiateContractProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(48).bool(message.unpin_code);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    var _iterator7 = _createForOfIteratorHelper(message.funds),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _coin.Coin.encode(v, writer.uint32(82).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(106).bytes(message.code_hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreAndInstantiateContractProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.wasm_byte_code = reader.bytes();
          break;
        case 5:
          message.instantiate_permission = _types.AccessConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.unpin_code = reader.bool();
          break;
        case 7:
          message.admin = reader.string();
          break;
        case 8:
          message.label = reader.string();
          break;
        case 9:
          message.msg = reader.bytes();
          break;
        case 10:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.source = reader.string();
          break;
        case 12:
          message.builder = reader.string();
          break;
        case 13:
          message.code_hash = reader.bytes();
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      run_as: (0, _helpers.isSet)(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: (0, _helpers.isSet)(object.wasm_byte_code) ? (0, _helpers.bytesFromBase64)(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: (0, _helpers.isSet)(object.instantiate_permission) ? _types.AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      unpin_code: (0, _helpers.isSet)(object.unpin_code) ? Boolean(object.unpin_code) : false,
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      label: (0, _helpers.isSet)(object.label) ? String(object.label) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      source: (0, _helpers.isSet)(object.source) ? String(object.source) : "",
      builder: (0, _helpers.isSet)(object.builder) ? String(object.builder) : "",
      code_hash: (0, _helpers.isSet)(object.code_hash) ? (0, _helpers.bytesFromBase64)(object.code_hash) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title12, _object$description12, _object$run_as5, _object$wasm_byte_cod2, _object$unpin_code2, _object$admin3, _object$label3, _object$msg6, _object$funds4, _object$source2, _object$builder2, _object$code_hash2;
    var message = createBaseStoreAndInstantiateContractProposal();
    message.title = (_object$title12 = object.title) !== null && _object$title12 !== void 0 ? _object$title12 : "";
    message.description = (_object$description12 = object.description) !== null && _object$description12 !== void 0 ? _object$description12 : "";
    message.run_as = (_object$run_as5 = object.run_as) !== null && _object$run_as5 !== void 0 ? _object$run_as5 : "";
    message.wasm_byte_code = (_object$wasm_byte_cod2 = object.wasm_byte_code) !== null && _object$wasm_byte_cod2 !== void 0 ? _object$wasm_byte_cod2 : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = (_object$unpin_code2 = object.unpin_code) !== null && _object$unpin_code2 !== void 0 ? _object$unpin_code2 : false;
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.label = (_object$label3 = object.label) !== null && _object$label3 !== void 0 ? _object$label3 : "";
    message.msg = (_object$msg6 = object.msg) !== null && _object$msg6 !== void 0 ? _object$msg6 : new Uint8Array();
    message.funds = ((_object$funds4 = object.funds) === null || _object$funds4 === void 0 ? void 0 : _object$funds4.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.source = (_object$source2 = object.source) !== null && _object$source2 !== void 0 ? _object$source2 : "";
    message.builder = (_object$builder2 = object.builder) !== null && _object$builder2 !== void 0 ? _object$builder2 : "";
    message.code_hash = (_object$code_hash2 = object.code_hash) !== null && _object$code_hash2 !== void 0 ? _object$code_hash2 : new Uint8Array();
    return message;
  }
};
exports.StoreAndInstantiateContractProposal = StoreAndInstantiateContractProposal;