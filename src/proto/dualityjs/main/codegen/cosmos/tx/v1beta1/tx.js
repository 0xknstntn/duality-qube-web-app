"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxRaw = exports.TxBody = exports.Tx = exports.Tip = exports.SignerInfo = exports.SignDocDirectAux = exports.SignDoc = exports.ModeInfo_Single = exports.ModeInfo_Multi = exports.ModeInfo = exports.Fee = exports.AuxSignerData = exports.AuthInfo = void 0;
var _any = require("../../../google/protobuf/any");
var _signing = require("../signing/v1beta1/signing");
var _multisig = require("../../crypto/multisig/v1beta1/multisig");
var _coin = require("../../base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Tx is the standard type used for broadcasting transactions. */

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */

/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */

/** TxBody is the body of a transaction that all signers sign over. */

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */

/** ModeInfo describes the signing mode of a single or nested multisig signer. */

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */

/** Multi is the mode info for a multisig public key */

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */

/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseTx() {
  return {
    body: TxBody.fromPartial({}),
    auth_info: AuthInfo.fromPartial({}),
    signatures: []
  };
}
var Tx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth_info !== undefined) {
      AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.signatures),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(26).bytes(v);
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
    var message = createBaseTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.auth_info = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(reader.bytes());
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
      body: (0, _helpers.isSet)(object.body) ? TxBody.fromJSON(object.body) : undefined,
      auth_info: (0, _helpers.isSet)(object.auth_info) ? AuthInfo.fromJSON(object.auth_info) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$signatures;
    var message = createBaseTx();
    message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
    message.auth_info = object.auth_info !== undefined && object.auth_info !== null ? AuthInfo.fromPartial(object.auth_info) : undefined;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.Tx = Tx;
function createBaseTxRaw() {
  return {
    body_bytes: new Uint8Array(),
    auth_info_bytes: new Uint8Array(),
    signatures: []
  };
}
var TxRaw = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    var _iterator2 = _createForOfIteratorHelper(message.signatures),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(26).bytes(v);
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
    var message = createBaseTxRaw();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.auth_info_bytes = reader.bytes();
          break;
        case 3:
          message.signatures.push(reader.bytes());
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
      body_bytes: (0, _helpers.isSet)(object.body_bytes) ? (0, _helpers.bytesFromBase64)(object.body_bytes) : new Uint8Array(),
      auth_info_bytes: (0, _helpers.isSet)(object.auth_info_bytes) ? (0, _helpers.bytesFromBase64)(object.auth_info_bytes) : new Uint8Array(),
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$body_bytes, _object$auth_info_byt, _object$signatures2;
    var message = createBaseTxRaw();
    message.body_bytes = (_object$body_bytes = object.body_bytes) !== null && _object$body_bytes !== void 0 ? _object$body_bytes : new Uint8Array();
    message.auth_info_bytes = (_object$auth_info_byt = object.auth_info_bytes) !== null && _object$auth_info_byt !== void 0 ? _object$auth_info_byt : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.TxRaw = TxRaw;
function createBaseSignDoc() {
  return {
    body_bytes: new Uint8Array(),
    auth_info_bytes: new Uint8Array(),
    chain_id: "",
    account_number: _helpers.Long.UZERO
  };
}
var SignDoc = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (!message.account_number.isZero()) {
      writer.uint32(32).uint64(message.account_number);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignDoc();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.auth_info_bytes = reader.bytes();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.account_number = reader.uint64();
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
      body_bytes: (0, _helpers.isSet)(object.body_bytes) ? (0, _helpers.bytesFromBase64)(object.body_bytes) : new Uint8Array(),
      auth_info_bytes: (0, _helpers.isSet)(object.auth_info_bytes) ? (0, _helpers.bytesFromBase64)(object.auth_info_bytes) : new Uint8Array(),
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : "",
      account_number: (0, _helpers.isSet)(object.account_number) ? _helpers.Long.fromValue(object.account_number) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$body_bytes2, _object$auth_info_byt2, _object$chain_id;
    var message = createBaseSignDoc();
    message.body_bytes = (_object$body_bytes2 = object.body_bytes) !== null && _object$body_bytes2 !== void 0 ? _object$body_bytes2 : new Uint8Array();
    message.auth_info_bytes = (_object$auth_info_byt2 = object.auth_info_bytes) !== null && _object$auth_info_byt2 !== void 0 ? _object$auth_info_byt2 : new Uint8Array();
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    message.account_number = object.account_number !== undefined && object.account_number !== null ? _helpers.Long.fromValue(object.account_number) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SignDoc = SignDoc;
function createBaseSignDocDirectAux() {
  return {
    body_bytes: new Uint8Array(),
    public_key: _any.Any.fromPartial({}),
    chain_id: "",
    account_number: _helpers.Long.UZERO,
    sequence: _helpers.Long.UZERO,
    tip: Tip.fromPartial({})
  };
}
var SignDocDirectAux = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.public_key !== undefined) {
      _any.Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (!message.account_number.isZero()) {
      writer.uint32(32).uint64(message.account_number);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.public_key = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.account_number = reader.uint64();
          break;
        case 5:
          message.sequence = reader.uint64();
          break;
        case 6:
          message.tip = Tip.decode(reader, reader.uint32());
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
      body_bytes: (0, _helpers.isSet)(object.body_bytes) ? (0, _helpers.bytesFromBase64)(object.body_bytes) : new Uint8Array(),
      public_key: (0, _helpers.isSet)(object.public_key) ? _any.Any.fromJSON(object.public_key) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : "",
      account_number: (0, _helpers.isSet)(object.account_number) ? _helpers.Long.fromValue(object.account_number) : _helpers.Long.UZERO,
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO,
      tip: (0, _helpers.isSet)(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$body_bytes3, _object$chain_id2;
    var message = createBaseSignDocDirectAux();
    message.body_bytes = (_object$body_bytes3 = object.body_bytes) !== null && _object$body_bytes3 !== void 0 ? _object$body_bytes3 : new Uint8Array();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? _any.Any.fromPartial(object.public_key) : undefined;
    message.chain_id = (_object$chain_id2 = object.chain_id) !== null && _object$chain_id2 !== void 0 ? _object$chain_id2 : "";
    message.account_number = object.account_number !== undefined && object.account_number !== null ? _helpers.Long.fromValue(object.account_number) : _helpers.Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
exports.SignDocDirectAux = SignDocDirectAux;
function createBaseTxBody() {
  return {
    messages: [],
    memo: "",
    timeout_height: _helpers.Long.UZERO,
    extension_options: [],
    non_critical_extension_options: []
  };
}
var TxBody = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.messages),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (!message.timeout_height.isZero()) {
      writer.uint32(24).uint64(message.timeout_height);
    }
    var _iterator4 = _createForOfIteratorHelper(message.extension_options),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v = _step4.value;
        _any.Any.encode(_v, writer.uint32(8186).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.non_critical_extension_options),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v2 = _step5.value;
        _any.Any.encode(_v2, writer.uint32(16378).fork()).ldelim();
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
    var message = createBaseTxBody();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeout_height = reader.uint64();
          break;
        case 1023:
          message.extension_options.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.non_critical_extension_options.push(_any.Any.decode(reader, reader.uint32()));
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      memo: (0, _helpers.isSet)(object.memo) ? String(object.memo) : "",
      timeout_height: (0, _helpers.isSet)(object.timeout_height) ? _helpers.Long.fromValue(object.timeout_height) : _helpers.Long.UZERO,
      extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_options) ? object.extension_options.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      non_critical_extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.non_critical_extension_options) ? object.non_critical_extension_options.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$messages, _object$memo, _object$extension_opt, _object$non_critical_;
    var message = createBaseTxBody();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? _helpers.Long.fromValue(object.timeout_height) : _helpers.Long.UZERO;
    message.extension_options = ((_object$extension_opt = object.extension_options) === null || _object$extension_opt === void 0 ? void 0 : _object$extension_opt.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.non_critical_extension_options = ((_object$non_critical_ = object.non_critical_extension_options) === null || _object$non_critical_ === void 0 ? void 0 : _object$non_critical_.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxBody = TxBody;
function createBaseAuthInfo() {
  return {
    signer_infos: [],
    fee: Fee.fromPartial({}),
    tip: Tip.fromPartial({})
  };
}
var AuthInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.signer_infos),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer_infos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 3:
          message.tip = Tip.decode(reader, reader.uint32());
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
      signer_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signer_infos) ? object.signer_infos.map(function (e) {
        return SignerInfo.fromJSON(e);
      }) : [],
      fee: (0, _helpers.isSet)(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      tip: (0, _helpers.isSet)(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$signer_infos;
    var message = createBaseAuthInfo();
    message.signer_infos = ((_object$signer_infos = object.signer_infos) === null || _object$signer_infos === void 0 ? void 0 : _object$signer_infos.map(function (e) {
      return SignerInfo.fromPartial(e);
    })) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
exports.AuthInfo = AuthInfo;
function createBaseSignerInfo() {
  return {
    public_key: _any.Any.fromPartial({}),
    mode_info: ModeInfo.fromPartial({}),
    sequence: _helpers.Long.UZERO
  };
}
var SignerInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.public_key !== undefined) {
      _any.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.mode_info !== undefined) {
      ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignerInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.public_key = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.mode_info = ModeInfo.decode(reader, reader.uint32());
          break;
        case 3:
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
      public_key: (0, _helpers.isSet)(object.public_key) ? _any.Any.fromJSON(object.public_key) : undefined,
      mode_info: (0, _helpers.isSet)(object.mode_info) ? ModeInfo.fromJSON(object.mode_info) : undefined,
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignerInfo();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? _any.Any.fromPartial(object.public_key) : undefined;
    message.mode_info = object.mode_info !== undefined && object.mode_info !== null ? ModeInfo.fromPartial(object.mode_info) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SignerInfo = SignerInfo;
function createBaseModeInfo() {
  return {
    single: undefined,
    multi: undefined
  };
}
var ModeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
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
      single: (0, _helpers.isSet)(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: (0, _helpers.isSet)(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};
exports.ModeInfo = ModeInfo;
function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}
var ModeInfo_Single = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
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
      mode: (0, _helpers.isSet)(object.mode) ? (0, _signing.signModeFromJSON)(object.mode) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$mode;
    var message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
exports.ModeInfo_Single = ModeInfo_Single;
function createBaseModeInfo_Multi() {
  return {
    bitarray: _multisig.CompactBitArray.fromPartial({}),
    mode_infos: []
  };
}
var ModeInfo_Multi = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bitarray !== undefined) {
      _multisig.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    var _iterator7 = _createForOfIteratorHelper(message.mode_infos),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = _multisig.CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.mode_infos.push(ModeInfo.decode(reader, reader.uint32()));
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
      bitarray: (0, _helpers.isSet)(object.bitarray) ? _multisig.CompactBitArray.fromJSON(object.bitarray) : undefined,
      mode_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.mode_infos) ? object.mode_infos.map(function (e) {
        return ModeInfo.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$mode_infos;
    var message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? _multisig.CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.mode_infos = ((_object$mode_infos = object.mode_infos) === null || _object$mode_infos === void 0 ? void 0 : _object$mode_infos.map(function (e) {
      return ModeInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ModeInfo_Multi = ModeInfo_Multi;
function createBaseFee() {
  return {
    amount: [],
    gas_limit: _helpers.Long.UZERO,
    payer: "",
    granter: ""
  };
}
var Fee = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator8 = _createForOfIteratorHelper(message.amount),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (!message.gas_limit.isZero()) {
      writer.uint32(16).uint64(message.gas_limit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFee();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gas_limit = reader.uint64();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
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
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      gas_limit: (0, _helpers.isSet)(object.gas_limit) ? _helpers.Long.fromValue(object.gas_limit) : _helpers.Long.UZERO,
      payer: (0, _helpers.isSet)(object.payer) ? String(object.payer) : "",
      granter: (0, _helpers.isSet)(object.granter) ? String(object.granter) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;
    var message = createBaseFee();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.gas_limit = object.gas_limit !== undefined && object.gas_limit !== null ? _helpers.Long.fromValue(object.gas_limit) : _helpers.Long.UZERO;
    message.payer = (_object$payer = object.payer) !== null && _object$payer !== void 0 ? _object$payer : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    return message;
  }
};
exports.Fee = Fee;
function createBaseTip() {
  return {
    amount: [],
    tipper: ""
  };
}
var Tip = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator9 = _createForOfIteratorHelper(message.amount),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTip();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tipper = reader.string();
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
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      tipper: (0, _helpers.isSet)(object.tipper) ? String(object.tipper) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amount2, _object$tipper;
    var message = createBaseTip();
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.tipper = (_object$tipper = object.tipper) !== null && _object$tipper !== void 0 ? _object$tipper : "";
    return message;
  }
};
exports.Tip = Tip;
function createBaseAuxSignerData() {
  return {
    address: "",
    sign_doc: SignDocDirectAux.fromPartial({}),
    mode: 0,
    sig: new Uint8Array()
  };
}
var AuxSignerData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sign_doc !== undefined) {
      SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuxSignerData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sign_doc = SignDocDirectAux.decode(reader, reader.uint32());
          break;
        case 3:
          message.mode = reader.int32();
          break;
        case 4:
          message.sig = reader.bytes();
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
      sign_doc: (0, _helpers.isSet)(object.sign_doc) ? SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
      mode: (0, _helpers.isSet)(object.mode) ? (0, _signing.signModeFromJSON)(object.mode) : -1,
      sig: (0, _helpers.isSet)(object.sig) ? (0, _helpers.bytesFromBase64)(object.sig) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$mode2, _object$sig;
    var message = createBaseAuxSignerData();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.sign_doc = object.sign_doc !== undefined && object.sign_doc !== null ? SignDocDirectAux.fromPartial(object.sign_doc) : undefined;
    message.mode = (_object$mode2 = object.mode) !== null && _object$mode2 !== void 0 ? _object$mode2 : 0;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  }
};
exports.AuxSignerData = AuxSignerData;