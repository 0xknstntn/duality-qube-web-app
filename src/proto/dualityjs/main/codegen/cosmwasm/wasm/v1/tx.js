"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgUpdateInstantiateConfigResponse = exports.MsgUpdateInstantiateConfig = exports.MsgUpdateContractLabelResponse = exports.MsgUpdateContractLabel = exports.MsgUpdateAdminResponse = exports.MsgUpdateAdmin = exports.MsgUnpinCodesResponse = exports.MsgUnpinCodes = exports.MsgSudoContractResponse = exports.MsgSudoContract = exports.MsgStoreCodeResponse = exports.MsgStoreCode = exports.MsgStoreAndMigrateContractResponse = exports.MsgStoreAndMigrateContract = exports.MsgStoreAndInstantiateContractResponse = exports.MsgStoreAndInstantiateContract = exports.MsgRemoveCodeUploadParamsAddressesResponse = exports.MsgRemoveCodeUploadParamsAddresses = exports.MsgPinCodesResponse = exports.MsgPinCodes = exports.MsgMigrateContractResponse = exports.MsgMigrateContract = exports.MsgInstantiateContractResponse = exports.MsgInstantiateContract2Response = exports.MsgInstantiateContract2 = exports.MsgInstantiateContract = exports.MsgExecuteContractResponse = exports.MsgExecuteContract = exports.MsgClearAdminResponse = exports.MsgClearAdmin = exports.MsgAddCodeUploadParamsAddressesResponse = exports.MsgAddCodeUploadParamsAddresses = void 0;
var _types = require("./types");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** MsgStoreCode submit Wasm code to the system */

/** MsgStoreCodeResponse returns store result data. */

/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

/** MsgInstantiateContractResponse return instantiation result data */

/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */

/** MsgInstantiateContract2Response return instantiation result data */

/** MsgExecuteContract submits the given message data to a smart contract */

/** MsgExecuteContractResponse returns execution result data. */

/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */

/** MsgMigrateContractResponse returns contract migration result data. */

/** MsgUpdateAdmin sets a new admin for a smart contract */

/** MsgUpdateAdminResponse returns empty data */

/** MsgClearAdmin removes any admin stored for a smart contract */

/** MsgClearAdminResponse returns empty data */

/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */

/** MsgUpdateInstantiateConfigResponse returns empty data */

/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.40
 */

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.40
 */

/**
 * MsgSudoContract is the MsgSudoContract request type.
 * 
 * Since: 0.40
 */

/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 * 
 * Since: 0.40
 */

/**
 * MsgPinCodes is the MsgPinCodes request type.
 * 
 * Since: 0.40
 */

/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 * 
 * Since: 0.40
 */

/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 * 
 * Since: 0.40
 */

/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 * 
 * Since: 0.40
 */

/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 * 
 * Since: 0.40
 */

/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 * 
 * Since: 0.40
 */

/**
 * MsgAddCodeUploadParamsAddresses is the
 * MsgAddCodeUploadParamsAddresses request type.
 */

/**
 * MsgAddCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgAddCodeUploadParamsAddresses message.
 */

/**
 * MsgRemoveCodeUploadParamsAddresses is the
 * MsgRemoveCodeUploadParamsAddresses request type.
 */

/**
 * MsgRemoveCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgRemoveCodeUploadParamsAddresses message.
 */

/**
 * MsgStoreAndMigrateContract is the MsgStoreAndMigrateContract
 * request type.
 * 
 * Since: 0.42
 */

/**
 * MsgStoreAndMigrateContractResponse defines the response structure
 * for executing a MsgStoreAndMigrateContract message.
 * 
 * Since: 0.42
 */

/** MsgUpdateContractLabel sets a new label for a smart contract */

/** MsgUpdateContractLabelResponse returns empty data */

function createBaseMsgStoreCode() {
  return {
    sender: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: _types.AccessConfig.fromPartial({})
  };
}
var MsgStoreCode = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(18).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasm_byte_code = reader.bytes();
          break;
        case 5:
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      wasm_byte_code: (0, _helpers.isSet)(object.wasm_byte_code) ? (0, _helpers.bytesFromBase64)(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: (0, _helpers.isSet)(object.instantiate_permission) ? _types.AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$wasm_byte_cod;
    var message = createBaseMsgStoreCode();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.wasm_byte_code = (_object$wasm_byte_cod = object.wasm_byte_code) !== null && _object$wasm_byte_cod !== void 0 ? _object$wasm_byte_cod : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }
};
exports.MsgStoreCode = MsgStoreCode;
function createBaseMsgStoreCodeResponse() {
  return {
    code_id: _helpers.Long.UZERO,
    checksum: new Uint8Array()
  };
}
var MsgStoreCodeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
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
      checksum: (0, _helpers.isSet)(object.checksum) ? (0, _helpers.bytesFromBase64)(object.checksum) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$checksum;
    var message = createBaseMsgStoreCodeResponse();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.checksum = (_object$checksum = object.checksum) !== null && _object$checksum !== void 0 ? _object$checksum : new Uint8Array();
    return message;
  }
};
exports.MsgStoreCodeResponse = MsgStoreCodeResponse;
function createBaseMsgInstantiateContract() {
  return {
    sender: "",
    admin: "",
    code_id: _helpers.Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
var MsgInstantiateContract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(24).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    var _iterator = _createForOfIteratorHelper(message.funds),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(50).fork()).ldelim();
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
    var message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.code_id = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
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
    var _object$sender2, _object$admin, _object$label, _object$msg, _object$funds;
    var message = createBaseMsgInstantiateContract();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
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
exports.MsgInstantiateContract = MsgInstantiateContract;
function createBaseMsgInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
var MsgInstantiateContractResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$data;
    var message = createBaseMsgInstantiateContractResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
exports.MsgInstantiateContractResponse = MsgInstantiateContractResponse;
function createBaseMsgInstantiateContract2() {
  return {
    sender: "",
    admin: "",
    code_id: _helpers.Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fix_msg: false
  };
}
var MsgInstantiateContract2 = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(24).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    var _iterator2 = _createForOfIteratorHelper(message.funds),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.fix_msg === true) {
      writer.uint32(64).bool(message.fix_msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.code_id = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.salt = reader.bytes();
          break;
        case 8:
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
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
    var _object$sender3, _object$admin2, _object$label2, _object$msg2, _object$funds2, _object$salt, _object$fix_msg;
    var message = createBaseMsgInstantiateContract2();
    message.sender = (_object$sender3 = object.sender) !== null && _object$sender3 !== void 0 ? _object$sender3 : "";
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
exports.MsgInstantiateContract2 = MsgInstantiateContract2;
function createBaseMsgInstantiateContract2Response() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
var MsgInstantiateContract2Response = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgInstantiateContract2Response();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$data2;
    var message = createBaseMsgInstantiateContract2Response();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
exports.MsgInstantiateContract2Response = MsgInstantiateContract2Response;
function createBaseMsgExecuteContract() {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
var MsgExecuteContract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    var _iterator3 = _createForOfIteratorHelper(message.funds),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(42).fork()).ldelim();
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
    var message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender4, _object$contract, _object$msg3, _object$funds3;
    var message = createBaseMsgExecuteContract();
    message.sender = (_object$sender4 = object.sender) !== null && _object$sender4 !== void 0 ? _object$sender4 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    message.funds = ((_object$funds3 = object.funds) === null || _object$funds3 === void 0 ? void 0 : _object$funds3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgExecuteContract = MsgExecuteContract;
function createBaseMsgExecuteContractResponse() {
  return {
    data: new Uint8Array()
  };
}
var MsgExecuteContractResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$data3;
    var message = createBaseMsgExecuteContractResponse();
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
exports.MsgExecuteContractResponse = MsgExecuteContractResponse;
function createBaseMsgMigrateContract() {
  return {
    sender: "",
    contract: "",
    code_id: _helpers.Long.UZERO,
    msg: new Uint8Array()
  };
}
var MsgMigrateContract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(24).uint64(message.code_id);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.code_id = reader.uint64();
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender5, _object$contract2, _object$msg4;
    var message = createBaseMsgMigrateContract();
    message.sender = (_object$sender5 = object.sender) !== null && _object$sender5 !== void 0 ? _object$sender5 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    return message;
  }
};
exports.MsgMigrateContract = MsgMigrateContract;
function createBaseMsgMigrateContractResponse() {
  return {
    data: new Uint8Array()
  };
}
var MsgMigrateContractResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$data4;
    var message = createBaseMsgMigrateContractResponse();
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    return message;
  }
};
exports.MsgMigrateContractResponse = MsgMigrateContractResponse;
function createBaseMsgUpdateAdmin() {
  return {
    sender: "",
    new_admin: "",
    contract: ""
  };
}
var MsgUpdateAdmin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.new_admin !== "") {
      writer.uint32(18).string(message.new_admin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.new_admin = reader.string();
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      new_admin: (0, _helpers.isSet)(object.new_admin) ? String(object.new_admin) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender6, _object$new_admin, _object$contract3;
    var message = createBaseMsgUpdateAdmin();
    message.sender = (_object$sender6 = object.sender) !== null && _object$sender6 !== void 0 ? _object$sender6 : "";
    message.new_admin = (_object$new_admin = object.new_admin) !== null && _object$new_admin !== void 0 ? _object$new_admin : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    return message;
  }
};
exports.MsgUpdateAdmin = MsgUpdateAdmin;
function createBaseMsgUpdateAdminResponse() {
  return {};
}
var MsgUpdateAdminResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateAdminResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateAdminResponse();
    return message;
  }
};
exports.MsgUpdateAdminResponse = MsgUpdateAdminResponse;
function createBaseMsgClearAdmin() {
  return {
    sender: "",
    contract: ""
  };
}
var MsgClearAdmin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender7, _object$contract4;
    var message = createBaseMsgClearAdmin();
    message.sender = (_object$sender7 = object.sender) !== null && _object$sender7 !== void 0 ? _object$sender7 : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }
};
exports.MsgClearAdmin = MsgClearAdmin;
function createBaseMsgClearAdminResponse() {
  return {};
}
var MsgClearAdminResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClearAdminResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgClearAdminResponse();
    return message;
  }
};
exports.MsgClearAdminResponse = MsgClearAdminResponse;
function createBaseMsgUpdateInstantiateConfig() {
  return {
    sender: "",
    code_id: _helpers.Long.UZERO,
    new_instantiate_permission: _types.AccessConfig.fromPartial({})
  };
}
var MsgUpdateInstantiateConfig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(16).uint64(message.code_id);
    }
    if (message.new_instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.new_instantiate_permission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateInstantiateConfig();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.code_id = reader.uint64();
          break;
        case 3:
          message.new_instantiate_permission = _types.AccessConfig.decode(reader, reader.uint32());
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      new_instantiate_permission: (0, _helpers.isSet)(object.new_instantiate_permission) ? _types.AccessConfig.fromJSON(object.new_instantiate_permission) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender8;
    var message = createBaseMsgUpdateInstantiateConfig();
    message.sender = (_object$sender8 = object.sender) !== null && _object$sender8 !== void 0 ? _object$sender8 : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.new_instantiate_permission = object.new_instantiate_permission !== undefined && object.new_instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.new_instantiate_permission) : undefined;
    return message;
  }
};
exports.MsgUpdateInstantiateConfig = MsgUpdateInstantiateConfig;
function createBaseMsgUpdateInstantiateConfigResponse() {
  return {};
}
var MsgUpdateInstantiateConfigResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateInstantiateConfigResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateInstantiateConfigResponse();
    return message;
  }
};
exports.MsgUpdateInstantiateConfigResponse = MsgUpdateInstantiateConfigResponse;
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: _types.Params.fromPartial({})
  };
}
var MsgUpdateParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      _types.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = _types.Params.decode(reader, reader.uint32());
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      params: (0, _helpers.isSet)(object.params) ? _types.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== undefined && object.params !== null ? _types.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.MsgUpdateParams = MsgUpdateParams;
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;
function createBaseMsgSudoContract() {
  return {
    authority: "",
    contract: "",
    msg: new Uint8Array()
  };
}
var MsgSudoContract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSudoContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority2, _object$contract5, _object$msg5;
    var message = createBaseMsgSudoContract();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    message.msg = (_object$msg5 = object.msg) !== null && _object$msg5 !== void 0 ? _object$msg5 : new Uint8Array();
    return message;
  }
};
exports.MsgSudoContract = MsgSudoContract;
function createBaseMsgSudoContractResponse() {
  return {
    data: new Uint8Array()
  };
}
var MsgSudoContractResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSudoContractResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$data5;
    var message = createBaseMsgSudoContractResponse();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    return message;
  }
};
exports.MsgSudoContractResponse = MsgSudoContractResponse;
function createBaseMsgPinCodes() {
  return {
    authority: "",
    code_ids: []
  };
}
var MsgPinCodes = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
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
    var message = createBaseMsgPinCodes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority3, _object$code_ids;
    var message = createBaseMsgPinCodes();
    message.authority = (_object$authority3 = object.authority) !== null && _object$authority3 !== void 0 ? _object$authority3 : "";
    message.code_ids = ((_object$code_ids = object.code_ids) === null || _object$code_ids === void 0 ? void 0 : _object$code_ids.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.MsgPinCodes = MsgPinCodes;
function createBaseMsgPinCodesResponse() {
  return {};
}
var MsgPinCodesResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgPinCodesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgPinCodesResponse();
    return message;
  }
};
exports.MsgPinCodesResponse = MsgPinCodesResponse;
function createBaseMsgUnpinCodes() {
  return {
    authority: "",
    code_ids: []
  };
}
var MsgUnpinCodes = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
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
    var message = createBaseMsgUnpinCodes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority4, _object$code_ids2;
    var message = createBaseMsgUnpinCodes();
    message.authority = (_object$authority4 = object.authority) !== null && _object$authority4 !== void 0 ? _object$authority4 : "";
    message.code_ids = ((_object$code_ids2 = object.code_ids) === null || _object$code_ids2 === void 0 ? void 0 : _object$code_ids2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.MsgUnpinCodes = MsgUnpinCodes;
function createBaseMsgUnpinCodesResponse() {
  return {};
}
var MsgUnpinCodesResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnpinCodesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUnpinCodesResponse();
    return message;
  }
};
exports.MsgUnpinCodesResponse = MsgUnpinCodesResponse;
function createBaseMsgStoreAndInstantiateContract() {
  return {
    authority: "",
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
var MsgStoreAndInstantiateContract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(26).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(34).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(40).bool(message.unpin_code);
    }
    if (message.admin !== "") {
      writer.uint32(50).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(66).bytes(message.msg);
    }
    var _iterator6 = _createForOfIteratorHelper(message.funds),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.Coin.encode(v, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(90).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(98).bytes(message.code_hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreAndInstantiateContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.wasm_byte_code = reader.bytes();
          break;
        case 4:
          message.instantiate_permission = _types.AccessConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.unpin_code = reader.bool();
          break;
        case 6:
          message.admin = reader.string();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.msg = reader.bytes();
          break;
        case 9:
          message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.source = reader.string();
          break;
        case 11:
          message.builder = reader.string();
          break;
        case 12:
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
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
    var _object$authority5, _object$wasm_byte_cod2, _object$unpin_code, _object$admin3, _object$label3, _object$msg6, _object$funds4, _object$source, _object$builder, _object$code_hash;
    var message = createBaseMsgStoreAndInstantiateContract();
    message.authority = (_object$authority5 = object.authority) !== null && _object$authority5 !== void 0 ? _object$authority5 : "";
    message.wasm_byte_code = (_object$wasm_byte_cod2 = object.wasm_byte_code) !== null && _object$wasm_byte_cod2 !== void 0 ? _object$wasm_byte_cod2 : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = (_object$unpin_code = object.unpin_code) !== null && _object$unpin_code !== void 0 ? _object$unpin_code : false;
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.label = (_object$label3 = object.label) !== null && _object$label3 !== void 0 ? _object$label3 : "";
    message.msg = (_object$msg6 = object.msg) !== null && _object$msg6 !== void 0 ? _object$msg6 : new Uint8Array();
    message.funds = ((_object$funds4 = object.funds) === null || _object$funds4 === void 0 ? void 0 : _object$funds4.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.source = (_object$source = object.source) !== null && _object$source !== void 0 ? _object$source : "";
    message.builder = (_object$builder = object.builder) !== null && _object$builder !== void 0 ? _object$builder : "";
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    return message;
  }
};
exports.MsgStoreAndInstantiateContract = MsgStoreAndInstantiateContract;
function createBaseMsgStoreAndInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
var MsgStoreAndInstantiateContractResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreAndInstantiateContractResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address3, _object$data6;
    var message = createBaseMsgStoreAndInstantiateContractResponse();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.data = (_object$data6 = object.data) !== null && _object$data6 !== void 0 ? _object$data6 : new Uint8Array();
    return message;
  }
};
exports.MsgStoreAndInstantiateContractResponse = MsgStoreAndInstantiateContractResponse;
function createBaseMsgAddCodeUploadParamsAddresses() {
  return {
    authority: "",
    addresses: []
  };
}
var MsgAddCodeUploadParamsAddresses = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    var _iterator7 = _createForOfIteratorHelper(message.addresses),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddCodeUploadParamsAddresses();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority6, _object$addresses;
    var message = createBaseMsgAddCodeUploadParamsAddresses();
    message.authority = (_object$authority6 = object.authority) !== null && _object$authority6 !== void 0 ? _object$authority6 : "";
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.MsgAddCodeUploadParamsAddresses = MsgAddCodeUploadParamsAddresses;
function createBaseMsgAddCodeUploadParamsAddressesResponse() {
  return {};
}
var MsgAddCodeUploadParamsAddressesResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddCodeUploadParamsAddressesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgAddCodeUploadParamsAddressesResponse();
    return message;
  }
};
exports.MsgAddCodeUploadParamsAddressesResponse = MsgAddCodeUploadParamsAddressesResponse;
function createBaseMsgRemoveCodeUploadParamsAddresses() {
  return {
    authority: "",
    addresses: []
  };
}
var MsgRemoveCodeUploadParamsAddresses = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    var _iterator8 = _createForOfIteratorHelper(message.addresses),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRemoveCodeUploadParamsAddresses();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority7, _object$addresses2;
    var message = createBaseMsgRemoveCodeUploadParamsAddresses();
    message.authority = (_object$authority7 = object.authority) !== null && _object$authority7 !== void 0 ? _object$authority7 : "";
    message.addresses = ((_object$addresses2 = object.addresses) === null || _object$addresses2 === void 0 ? void 0 : _object$addresses2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.MsgRemoveCodeUploadParamsAddresses = MsgRemoveCodeUploadParamsAddresses;
function createBaseMsgRemoveCodeUploadParamsAddressesResponse() {
  return {};
}
var MsgRemoveCodeUploadParamsAddressesResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
    return message;
  }
};
exports.MsgRemoveCodeUploadParamsAddressesResponse = MsgRemoveCodeUploadParamsAddressesResponse;
function createBaseMsgStoreAndMigrateContract() {
  return {
    authority: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: _types.AccessConfig.fromPartial({}),
    contract: "",
    msg: new Uint8Array()
  };
}
var MsgStoreAndMigrateContract = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(18).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(26).fork()).ldelim();
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreAndMigrateContract();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.wasm_byte_code = reader.bytes();
          break;
        case 3:
          message.instantiate_permission = _types.AccessConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      wasm_byte_code: (0, _helpers.isSet)(object.wasm_byte_code) ? (0, _helpers.bytesFromBase64)(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: (0, _helpers.isSet)(object.instantiate_permission) ? _types.AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority8, _object$wasm_byte_cod3, _object$contract6, _object$msg7;
    var message = createBaseMsgStoreAndMigrateContract();
    message.authority = (_object$authority8 = object.authority) !== null && _object$authority8 !== void 0 ? _object$authority8 : "";
    message.wasm_byte_code = (_object$wasm_byte_cod3 = object.wasm_byte_code) !== null && _object$wasm_byte_cod3 !== void 0 ? _object$wasm_byte_cod3 : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.contract = (_object$contract6 = object.contract) !== null && _object$contract6 !== void 0 ? _object$contract6 : "";
    message.msg = (_object$msg7 = object.msg) !== null && _object$msg7 !== void 0 ? _object$msg7 : new Uint8Array();
    return message;
  }
};
exports.MsgStoreAndMigrateContract = MsgStoreAndMigrateContract;
function createBaseMsgStoreAndMigrateContractResponse() {
  return {
    code_id: _helpers.Long.UZERO,
    checksum: new Uint8Array(),
    data: new Uint8Array()
  };
}
var MsgStoreAndMigrateContractResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStoreAndMigrateContractResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
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
      checksum: (0, _helpers.isSet)(object.checksum) ? (0, _helpers.bytesFromBase64)(object.checksum) : new Uint8Array(),
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$checksum2, _object$data7;
    var message = createBaseMsgStoreAndMigrateContractResponse();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.checksum = (_object$checksum2 = object.checksum) !== null && _object$checksum2 !== void 0 ? _object$checksum2 : new Uint8Array();
    message.data = (_object$data7 = object.data) !== null && _object$data7 !== void 0 ? _object$data7 : new Uint8Array();
    return message;
  }
};
exports.MsgStoreAndMigrateContractResponse = MsgStoreAndMigrateContractResponse;
function createBaseMsgUpdateContractLabel() {
  return {
    sender: "",
    new_label: "",
    contract: ""
  };
}
var MsgUpdateContractLabel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.new_label !== "") {
      writer.uint32(18).string(message.new_label);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateContractLabel();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.new_label = reader.string();
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
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      new_label: (0, _helpers.isSet)(object.new_label) ? String(object.new_label) : "",
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender9, _object$new_label, _object$contract7;
    var message = createBaseMsgUpdateContractLabel();
    message.sender = (_object$sender9 = object.sender) !== null && _object$sender9 !== void 0 ? _object$sender9 : "";
    message.new_label = (_object$new_label = object.new_label) !== null && _object$new_label !== void 0 ? _object$new_label : "";
    message.contract = (_object$contract7 = object.contract) !== null && _object$contract7 !== void 0 ? _object$contract7 : "";
    return message;
  }
};
exports.MsgUpdateContractLabel = MsgUpdateContractLabel;
function createBaseMsgUpdateContractLabelResponse() {
  return {};
}
var MsgUpdateContractLabelResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateContractLabelResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateContractLabelResponse();
    return message;
  }
};
exports.MsgUpdateContractLabelResponse = MsgUpdateContractLabelResponse;