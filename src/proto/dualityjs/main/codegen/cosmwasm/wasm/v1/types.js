"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.Model = exports.ContractInfo = exports.ContractCodeHistoryOperationType = exports.ContractCodeHistoryEntry = exports.CodeInfo = exports.AccessTypeParam = exports.AccessType = exports.AccessConfig = exports.AbsoluteTxPosition = void 0;
exports.accessTypeFromJSON = accessTypeFromJSON;
exports.accessTypeToJSON = accessTypeToJSON;
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
var _any = require("../../../google/protobuf/any");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** AccessType permission types */
var AccessType = /*#__PURE__*/function (AccessType) {
  AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
  AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
  AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
  AccessType[AccessType["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
  AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AccessType;
}({});
exports.AccessType = AccessType;
function accessTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;
    case 4:
    case "ACCESS_TYPE_ANY_OF_ADDRESSES":
      return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
function accessTypeToJSON(object) {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";
    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";
    case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
      return "ACCESS_TYPE_ANY_OF_ADDRESSES";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType = /*#__PURE__*/function (ContractCodeHistoryOperationType) {
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ContractCodeHistoryOperationType;
}({});
exports.ContractCodeHistoryOperationType = ContractCodeHistoryOperationType;
function contractCodeHistoryOperationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}
function contractCodeHistoryOperationTypeToJSON(object) {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    case ContractCodeHistoryOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AccessTypeParam */

/** AccessConfig access control type. */

/** Params defines the set of wasm parameters. */

/** CodeInfo is data for the uploaded contract WASM code */

/** ContractInfo stores a WASM contract instance */

/** ContractCodeHistoryEntry metadata to a contract. */

/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */

/** Model is a struct that holds a KV pair */

function createBaseAccessTypeParam() {
  return {
    value: 0
  };
}
var AccessTypeParam = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccessTypeParam();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
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
      value: (0, _helpers.isSet)(object.value) ? accessTypeFromJSON(object.value) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$value;
    var message = createBaseAccessTypeParam();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : 0;
    return message;
  }
};
exports.AccessTypeParam = AccessTypeParam;
function createBaseAccessConfig() {
  return {
    permission: 0,
    addresses: []
  };
}
var AccessConfig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    var _iterator = _createForOfIteratorHelper(message.addresses),
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
    var message = createBaseAccessConfig();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;
        case 3:
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
      permission: (0, _helpers.isSet)(object.permission) ? accessTypeFromJSON(object.permission) : -1,
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$permission, _object$addresses;
    var message = createBaseAccessConfig();
    message.permission = (_object$permission = object.permission) !== null && _object$permission !== void 0 ? _object$permission : 0;
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.AccessConfig = AccessConfig;
function createBaseParams() {
  return {
    code_upload_access: AccessConfig.fromPartial({}),
    instantiate_default_permission: 0
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code_upload_access !== undefined) {
      AccessConfig.encode(message.code_upload_access, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiate_default_permission !== 0) {
      writer.uint32(16).int32(message.instantiate_default_permission);
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
          message.code_upload_access = AccessConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiate_default_permission = reader.int32();
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
      code_upload_access: (0, _helpers.isSet)(object.code_upload_access) ? AccessConfig.fromJSON(object.code_upload_access) : undefined,
      instantiate_default_permission: (0, _helpers.isSet)(object.instantiate_default_permission) ? accessTypeFromJSON(object.instantiate_default_permission) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$instantiate_d;
    var message = createBaseParams();
    message.code_upload_access = object.code_upload_access !== undefined && object.code_upload_access !== null ? AccessConfig.fromPartial(object.code_upload_access) : undefined;
    message.instantiate_default_permission = (_object$instantiate_d = object.instantiate_default_permission) !== null && _object$instantiate_d !== void 0 ? _object$instantiate_d : 0;
    return message;
  }
};
exports.Params = Params;
function createBaseCodeInfo() {
  return {
    code_hash: new Uint8Array(),
    creator: "",
    instantiate_config: AccessConfig.fromPartial({})
  };
}
var CodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code_hash.length !== 0) {
      writer.uint32(10).bytes(message.code_hash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiate_config !== undefined) {
      AccessConfig.encode(message.instantiate_config, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_hash = reader.bytes();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 5:
          message.instantiate_config = AccessConfig.decode(reader, reader.uint32());
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      instantiate_config: (0, _helpers.isSet)(object.instantiate_config) ? AccessConfig.fromJSON(object.instantiate_config) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$code_hash, _object$creator;
    var message = createBaseCodeInfo();
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.instantiate_config = object.instantiate_config !== undefined && object.instantiate_config !== null ? AccessConfig.fromPartial(object.instantiate_config) : undefined;
    return message;
  }
};
exports.CodeInfo = CodeInfo;
function createBaseContractInfo() {
  return {
    code_id: _helpers.Long.UZERO,
    creator: "",
    admin: "",
    label: "",
    created: AbsoluteTxPosition.fromPartial({}),
    ibc_port_id: "",
    extension: _any.Any.fromPartial({})
  };
}
var ContractInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibc_port_id !== "") {
      writer.uint32(50).string(message.ibc_port_id);
    }
    if (message.extension !== undefined) {
      _any.Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibc_port_id = reader.string();
          break;
        case 7:
          message.extension = _any.Any.decode(reader, reader.uint32());
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      label: (0, _helpers.isSet)(object.label) ? String(object.label) : "",
      created: (0, _helpers.isSet)(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibc_port_id: (0, _helpers.isSet)(object.ibc_port_id) ? String(object.ibc_port_id) : "",
      extension: (0, _helpers.isSet)(object.extension) ? _any.Any.fromJSON(object.extension) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$admin, _object$label, _object$ibc_port_id;
    var message = createBaseContractInfo();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibc_port_id = (_object$ibc_port_id = object.ibc_port_id) !== null && _object$ibc_port_id !== void 0 ? _object$ibc_port_id : "";
    message.extension = object.extension !== undefined && object.extension !== null ? _any.Any.fromPartial(object.extension) : undefined;
    return message;
  }
};
exports.ContractInfo = ContractInfo;
function createBaseContractCodeHistoryEntry() {
  return {
    operation: 0,
    code_id: _helpers.Long.UZERO,
    updated: AbsoluteTxPosition.fromPartial({}),
    msg: new Uint8Array()
  };
}
var ContractCodeHistoryEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(16).uint64(message.code_id);
    }
    if (message.updated !== undefined) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractCodeHistoryEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.int32();
          break;
        case 2:
          message.code_id = reader.uint64();
          break;
        case 3:
          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
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
      operation: (0, _helpers.isSet)(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
      code_id: (0, _helpers.isSet)(object.code_id) ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO,
      updated: (0, _helpers.isSet)(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : undefined,
      msg: (0, _helpers.isSet)(object.msg) ? (0, _helpers.bytesFromBase64)(object.msg) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$operation, _object$msg;
    var message = createBaseContractCodeHistoryEntry();
    message.operation = (_object$operation = object.operation) !== null && _object$operation !== void 0 ? _object$operation : 0;
    message.code_id = object.code_id !== undefined && object.code_id !== null ? _helpers.Long.fromValue(object.code_id) : _helpers.Long.UZERO;
    message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    return message;
  }
};
exports.ContractCodeHistoryEntry = ContractCodeHistoryEntry;
function createBaseAbsoluteTxPosition() {
  return {
    block_height: _helpers.Long.UZERO,
    tx_index: _helpers.Long.UZERO
  };
}
var AbsoluteTxPosition = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.block_height.isZero()) {
      writer.uint32(8).uint64(message.block_height);
    }
    if (!message.tx_index.isZero()) {
      writer.uint32(16).uint64(message.tx_index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAbsoluteTxPosition();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_height = reader.uint64();
          break;
        case 2:
          message.tx_index = reader.uint64();
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
      block_height: (0, _helpers.isSet)(object.block_height) ? _helpers.Long.fromValue(object.block_height) : _helpers.Long.UZERO,
      tx_index: (0, _helpers.isSet)(object.tx_index) ? _helpers.Long.fromValue(object.tx_index) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAbsoluteTxPosition();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? _helpers.Long.fromValue(object.block_height) : _helpers.Long.UZERO;
    message.tx_index = object.tx_index !== undefined && object.tx_index !== null ? _helpers.Long.fromValue(object.tx_index) : _helpers.Long.UZERO;
    return message;
  }
};
exports.AbsoluteTxPosition = AbsoluteTxPosition;
function createBaseModel() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
var Model = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModel();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$value2;
    var message = createBaseModel();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    return message;
  }
};
exports.Model = Model;