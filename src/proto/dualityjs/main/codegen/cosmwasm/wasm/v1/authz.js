"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreCodeAuthorization = exports.MaxFundsLimit = exports.MaxCallsLimit = exports.ContractMigrationAuthorization = exports.ContractGrant = exports.ContractExecutionAuthorization = exports.CombinedLimit = exports.CodeGrant = exports.AllowAllMessagesFilter = exports.AcceptedMessagesFilter = exports.AcceptedMessageKeysFilter = void 0;
var _types = require("./types");
var _any = require("../../../google/protobuf/any");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */

/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */

/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */

/** CodeGrant a granted permission for a single code */

/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */

/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */

/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */

/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */

/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */

/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */

/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */

function createBaseStoreCodeAuthorization() {
  return {
    grants: []
  };
}
var StoreCodeAuthorization = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.grants),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        CodeGrant.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseStoreCodeAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(CodeGrant.decode(reader, reader.uint32()));
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(function (e) {
        return CodeGrant.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$grants;
    var message = createBaseStoreCodeAuthorization();
    message.grants = ((_object$grants = object.grants) === null || _object$grants === void 0 ? void 0 : _object$grants.map(function (e) {
      return CodeGrant.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.StoreCodeAuthorization = StoreCodeAuthorization;
function createBaseContractExecutionAuthorization() {
  return {
    grants: []
  };
}
var ContractExecutionAuthorization = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.grants),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(function (e) {
        return ContractGrant.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$grants2;
    var message = createBaseContractExecutionAuthorization();
    message.grants = ((_object$grants2 = object.grants) === null || _object$grants2 === void 0 ? void 0 : _object$grants2.map(function (e) {
      return ContractGrant.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ContractExecutionAuthorization = ContractExecutionAuthorization;
function createBaseContractMigrationAuthorization() {
  return {
    grants: []
  };
}
var ContractMigrationAuthorization = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.grants),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(function (e) {
        return ContractGrant.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$grants3;
    var message = createBaseContractMigrationAuthorization();
    message.grants = ((_object$grants3 = object.grants) === null || _object$grants3 === void 0 ? void 0 : _object$grants3.map(function (e) {
      return ContractGrant.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ContractMigrationAuthorization = ContractMigrationAuthorization;
function createBaseCodeGrant() {
  return {
    code_hash: new Uint8Array(),
    instantiate_permission: _types.AccessConfig.fromPartial({})
  };
}
var CodeGrant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code_hash.length !== 0) {
      writer.uint32(10).bytes(message.code_hash);
    }
    if (message.instantiate_permission !== undefined) {
      _types.AccessConfig.encode(message.instantiate_permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCodeGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_hash = reader.bytes();
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
      code_hash: (0, _helpers.isSet)(object.code_hash) ? (0, _helpers.bytesFromBase64)(object.code_hash) : new Uint8Array(),
      instantiate_permission: (0, _helpers.isSet)(object.instantiate_permission) ? _types.AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$code_hash;
    var message = createBaseCodeGrant();
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? _types.AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }
};
exports.CodeGrant = CodeGrant;
function createBaseContractGrant() {
  return {
    contract: "",
    limit: _any.Any.fromPartial({}),
    filter: _any.Any.fromPartial({})
  };
}
var ContractGrant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      _any.Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      _any.Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.filter = _any.Any.decode(reader, reader.uint32());
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
      contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
      limit: (0, _helpers.isSet)(object.limit) ? _any.Any.fromJSON(object.limit) : undefined,
      filter: (0, _helpers.isSet)(object.filter) ? _any.Any.fromJSON(object.filter) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$contract;
    var message = createBaseContractGrant();
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.limit = object.limit !== undefined && object.limit !== null ? _any.Any.fromPartial(object.limit) : undefined;
    message.filter = object.filter !== undefined && object.filter !== null ? _any.Any.fromPartial(object.filter) : undefined;
    return message;
  }
};
exports.ContractGrant = ContractGrant;
function createBaseMaxCallsLimit() {
  return {
    remaining: _helpers.Long.UZERO
  };
}
var MaxCallsLimit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.remaining.isZero()) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.uint64();
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
      remaining: (0, _helpers.isSet)(object.remaining) ? _helpers.Long.fromValue(object.remaining) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== undefined && object.remaining !== null ? _helpers.Long.fromValue(object.remaining) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MaxCallsLimit = MaxCallsLimit;
function createBaseMaxFundsLimit() {
  return {
    amounts: []
  };
}
var MaxFundsLimit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.amounts),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(_coin.Coin.decode(reader, reader.uint32()));
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
      amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amounts;
    var message = createBaseMaxFundsLimit();
    message.amounts = ((_object$amounts = object.amounts) === null || _object$amounts === void 0 ? void 0 : _object$amounts.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MaxFundsLimit = MaxFundsLimit;
function createBaseCombinedLimit() {
  return {
    calls_remaining: _helpers.Long.UZERO,
    amounts: []
  };
}
var CombinedLimit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.calls_remaining.isZero()) {
      writer.uint32(8).uint64(message.calls_remaining);
    }
    var _iterator5 = _createForOfIteratorHelper(message.amounts),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseCombinedLimit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calls_remaining = reader.uint64();
          break;
        case 2:
          message.amounts.push(_coin.Coin.decode(reader, reader.uint32()));
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
      calls_remaining: (0, _helpers.isSet)(object.calls_remaining) ? _helpers.Long.fromValue(object.calls_remaining) : _helpers.Long.UZERO,
      amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$amounts2;
    var message = createBaseCombinedLimit();
    message.calls_remaining = object.calls_remaining !== undefined && object.calls_remaining !== null ? _helpers.Long.fromValue(object.calls_remaining) : _helpers.Long.UZERO;
    message.amounts = ((_object$amounts2 = object.amounts) === null || _object$amounts2 === void 0 ? void 0 : _object$amounts2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.CombinedLimit = CombinedLimit;
function createBaseAllowAllMessagesFilter() {
  return {};
}
var AllowAllMessagesFilter = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAllowAllMessagesFilter();
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
    var message = createBaseAllowAllMessagesFilter();
    return message;
  }
};
exports.AllowAllMessagesFilter = AllowAllMessagesFilter;
function createBaseAcceptedMessageKeysFilter() {
  return {
    keys: []
  };
}
var AcceptedMessageKeysFilter = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.keys),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint32(10).string(v);
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
    var message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
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
      keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$keys;
    var message = createBaseAcceptedMessageKeysFilter();
    message.keys = ((_object$keys = object.keys) === null || _object$keys === void 0 ? void 0 : _object$keys.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.AcceptedMessageKeysFilter = AcceptedMessageKeysFilter;
function createBaseAcceptedMessagesFilter() {
  return {
    messages: []
  };
}
var AcceptedMessagesFilter = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.messages),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        writer.uint32(10).bytes(v);
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
    var message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
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
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$messages;
    var message = createBaseAcceptedMessagesFilter();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.AcceptedMessagesFilter = AcceptedMessagesFilter;