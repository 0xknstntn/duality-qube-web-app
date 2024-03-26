"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxDescriptor = exports.SigningModeDescriptor = exports.QueryServicesDescriptor = exports.QueryServiceDescriptor = exports.QueryMethodDescriptor = exports.MsgDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.ConfigurationDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.AuthnDescriptor = exports.AppDescriptor = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** AppDescriptor describes a cosmos-sdk based application */

/** TxDescriptor describes the accepted transaction type */

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */

/** ChainDescriptor describes chain information of the application */

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */

/** InterfaceDescriptor describes the implementation of an interface */

/** InterfaceImplementerDescriptor describes an interface implementer */

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */

/** ConfigurationDescriptor contains metadata information on the sdk.Config */

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */

function createBaseAppDescriptor() {
  return {
    authn: AuthnDescriptor.fromPartial({}),
    chain: ChainDescriptor.fromPartial({}),
    codec: CodecDescriptor.fromPartial({}),
    configuration: ConfigurationDescriptor.fromPartial({}),
    query_services: QueryServicesDescriptor.fromPartial({}),
    tx: TxDescriptor.fromPartial({})
  };
}
var AppDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.query_services !== undefined) {
      QueryServicesDescriptor.encode(message.query_services, writer.uint32(42).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAppDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        case 5:
          message.query_services = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
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
      authn: (0, _helpers.isSet)(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
      chain: (0, _helpers.isSet)(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
      codec: (0, _helpers.isSet)(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
      configuration: (0, _helpers.isSet)(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
      query_services: (0, _helpers.isSet)(object.query_services) ? QueryServicesDescriptor.fromJSON(object.query_services) : undefined,
      tx: (0, _helpers.isSet)(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.query_services = object.query_services !== undefined && object.query_services !== null ? QueryServicesDescriptor.fromPartial(object.query_services) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
exports.AppDescriptor = AppDescriptor;
function createBaseTxDescriptor() {
  return {
    fullname: "",
    msgs: []
  };
}
var TxDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    var _iterator = _createForOfIteratorHelper(message.msgs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseTxDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(function (e) {
        return MsgDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname, _object$msgs;
    var message = createBaseTxDescriptor();
    message.fullname = (_object$fullname = object.fullname) !== null && _object$fullname !== void 0 ? _object$fullname : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map(function (e) {
      return MsgDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxDescriptor = TxDescriptor;
function createBaseAuthnDescriptor() {
  return {
    sign_modes: []
  };
}
var AuthnDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.sign_modes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sign_modes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
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
      sign_modes: Array.isArray(object === null || object === void 0 ? void 0 : object.sign_modes) ? object.sign_modes.map(function (e) {
        return SigningModeDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sign_modes;
    var message = createBaseAuthnDescriptor();
    message.sign_modes = ((_object$sign_modes = object.sign_modes) === null || _object$sign_modes === void 0 ? void 0 : _object$sign_modes.map(function (e) {
      return SigningModeDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AuthnDescriptor = AuthnDescriptor;
function createBaseSigningModeDescriptor() {
  return {
    name: "",
    number: 0,
    authn_info_provider_method_fullname: ""
  };
}
var SigningModeDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authn_info_provider_method_fullname !== "") {
      writer.uint32(26).string(message.authn_info_provider_method_fullname);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authn_info_provider_method_fullname = reader.string();
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
      number: (0, _helpers.isSet)(object.number) ? Number(object.number) : 0,
      authn_info_provider_method_fullname: (0, _helpers.isSet)(object.authn_info_provider_method_fullname) ? String(object.authn_info_provider_method_fullname) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$number, _object$authn_info_pr;
    var message = createBaseSigningModeDescriptor();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.authn_info_provider_method_fullname = (_object$authn_info_pr = object.authn_info_provider_method_fullname) !== null && _object$authn_info_pr !== void 0 ? _object$authn_info_pr : "";
    return message;
  }
};
exports.SigningModeDescriptor = SigningModeDescriptor;
function createBaseChainDescriptor() {
  return {
    id: ""
  };
}
var ChainDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChainDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$id;
    var message = createBaseChainDescriptor();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  }
};
exports.ChainDescriptor = ChainDescriptor;
function createBaseCodecDescriptor() {
  return {
    interfaces: []
  };
}
var CodecDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.interfaces),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
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
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(function (e) {
        return InterfaceDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$interfaces;
    var message = createBaseCodecDescriptor();
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(function (e) {
      return InterfaceDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.CodecDescriptor = CodecDescriptor;
function createBaseInterfaceDescriptor() {
  return {
    fullname: "",
    interface_accepting_messages: [],
    interface_implementers: []
  };
}
var InterfaceDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    var _iterator4 = _createForOfIteratorHelper(message.interface_accepting_messages),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.interface_implementers),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v = _step5.value;
        InterfaceImplementerDescriptor.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interface_accepting_messages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.interface_implementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      interface_accepting_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_accepting_messages) ? object.interface_accepting_messages.map(function (e) {
        return InterfaceAcceptingMessageDescriptor.fromJSON(e);
      }) : [],
      interface_implementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_implementers) ? object.interface_implementers.map(function (e) {
        return InterfaceImplementerDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname2, _object$interface_acc, _object$interface_imp;
    var message = createBaseInterfaceDescriptor();
    message.fullname = (_object$fullname2 = object.fullname) !== null && _object$fullname2 !== void 0 ? _object$fullname2 : "";
    message.interface_accepting_messages = ((_object$interface_acc = object.interface_accepting_messages) === null || _object$interface_acc === void 0 ? void 0 : _object$interface_acc.map(function (e) {
      return InterfaceAcceptingMessageDescriptor.fromPartial(e);
    })) || [];
    message.interface_implementers = ((_object$interface_imp = object.interface_implementers) === null || _object$interface_imp === void 0 ? void 0 : _object$interface_imp.map(function (e) {
      return InterfaceImplementerDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.InterfaceDescriptor = InterfaceDescriptor;
function createBaseInterfaceImplementerDescriptor() {
  return {
    fullname: "",
    type_url: ""
  };
}
var InterfaceImplementerDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.type_url !== "") {
      writer.uint32(18).string(message.type_url);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.type_url = reader.string();
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      type_url: (0, _helpers.isSet)(object.type_url) ? String(object.type_url) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname3, _object$type_url;
    var message = createBaseInterfaceImplementerDescriptor();
    message.fullname = (_object$fullname3 = object.fullname) !== null && _object$fullname3 !== void 0 ? _object$fullname3 : "";
    message.type_url = (_object$type_url = object.type_url) !== null && _object$type_url !== void 0 ? _object$type_url : "";
    return message;
  }
};
exports.InterfaceImplementerDescriptor = InterfaceImplementerDescriptor;
function createBaseInterfaceAcceptingMessageDescriptor() {
  return {
    fullname: "",
    field_descriptor_names: []
  };
}
var InterfaceAcceptingMessageDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    var _iterator6 = _createForOfIteratorHelper(message.field_descriptor_names),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint32(18).string(v);
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
    var message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.field_descriptor_names.push(reader.string());
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      field_descriptor_names: Array.isArray(object === null || object === void 0 ? void 0 : object.field_descriptor_names) ? object.field_descriptor_names.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname4, _object$field_descrip;
    var message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = (_object$fullname4 = object.fullname) !== null && _object$fullname4 !== void 0 ? _object$fullname4 : "";
    message.field_descriptor_names = ((_object$field_descrip = object.field_descriptor_names) === null || _object$field_descrip === void 0 ? void 0 : _object$field_descrip.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.InterfaceAcceptingMessageDescriptor = InterfaceAcceptingMessageDescriptor;
function createBaseConfigurationDescriptor() {
  return {
    bech32_account_address_prefix: ""
  };
}
var ConfigurationDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bech32_account_address_prefix !== "") {
      writer.uint32(10).string(message.bech32_account_address_prefix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32_account_address_prefix = reader.string();
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
      bech32_account_address_prefix: (0, _helpers.isSet)(object.bech32_account_address_prefix) ? String(object.bech32_account_address_prefix) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$bech32_accoun;
    var message = createBaseConfigurationDescriptor();
    message.bech32_account_address_prefix = (_object$bech32_accoun = object.bech32_account_address_prefix) !== null && _object$bech32_accoun !== void 0 ? _object$bech32_accoun : "";
    return message;
  }
};
exports.ConfigurationDescriptor = ConfigurationDescriptor;
function createBaseMsgDescriptor() {
  return {
    msg_type_url: ""
  };
}
var MsgDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.msg_type_url !== "") {
      writer.uint32(10).string(message.msg_type_url);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_type_url = reader.string();
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
      msg_type_url: (0, _helpers.isSet)(object.msg_type_url) ? String(object.msg_type_url) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$msg_type_url;
    var message = createBaseMsgDescriptor();
    message.msg_type_url = (_object$msg_type_url = object.msg_type_url) !== null && _object$msg_type_url !== void 0 ? _object$msg_type_url : "";
    return message;
  }
};
exports.MsgDescriptor = MsgDescriptor;
function createBaseGetAuthnDescriptorRequest() {
  return {};
}
var GetAuthnDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAuthnDescriptorRequest();
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
    var message = createBaseGetAuthnDescriptorRequest();
    return message;
  }
};
exports.GetAuthnDescriptorRequest = GetAuthnDescriptorRequest;
function createBaseGetAuthnDescriptorResponse() {
  return {
    authn: AuthnDescriptor.fromPartial({})
  };
}
var GetAuthnDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
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
      authn: (0, _helpers.isSet)(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  }
};
exports.GetAuthnDescriptorResponse = GetAuthnDescriptorResponse;
function createBaseGetChainDescriptorRequest() {
  return {};
}
var GetChainDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetChainDescriptorRequest();
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
    var message = createBaseGetChainDescriptorRequest();
    return message;
  }
};
exports.GetChainDescriptorRequest = GetChainDescriptorRequest;
function createBaseGetChainDescriptorResponse() {
  return {
    chain: ChainDescriptor.fromPartial({})
  };
}
var GetChainDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
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
      chain: (0, _helpers.isSet)(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  }
};
exports.GetChainDescriptorResponse = GetChainDescriptorResponse;
function createBaseGetCodecDescriptorRequest() {
  return {};
}
var GetCodecDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetCodecDescriptorRequest();
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
    var message = createBaseGetCodecDescriptorRequest();
    return message;
  }
};
exports.GetCodecDescriptorRequest = GetCodecDescriptorRequest;
function createBaseGetCodecDescriptorResponse() {
  return {
    codec: CodecDescriptor.fromPartial({})
  };
}
var GetCodecDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
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
      codec: (0, _helpers.isSet)(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  }
};
exports.GetCodecDescriptorResponse = GetCodecDescriptorResponse;
function createBaseGetConfigurationDescriptorRequest() {
  return {};
}
var GetConfigurationDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetConfigurationDescriptorRequest();
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
    var message = createBaseGetConfigurationDescriptorRequest();
    return message;
  }
};
exports.GetConfigurationDescriptorRequest = GetConfigurationDescriptorRequest;
function createBaseGetConfigurationDescriptorResponse() {
  return {
    config: ConfigurationDescriptor.fromPartial({})
  };
}
var GetConfigurationDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
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
      config: (0, _helpers.isSet)(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  }
};
exports.GetConfigurationDescriptorResponse = GetConfigurationDescriptorResponse;
function createBaseGetQueryServicesDescriptorRequest() {
  return {};
}
var GetQueryServicesDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetQueryServicesDescriptorRequest();
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
    var message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  }
};
exports.GetQueryServicesDescriptorRequest = GetQueryServicesDescriptorRequest;
function createBaseGetQueryServicesDescriptorResponse() {
  return {
    queries: QueryServicesDescriptor.fromPartial({})
  };
}
var GetQueryServicesDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
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
      queries: (0, _helpers.isSet)(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  }
};
exports.GetQueryServicesDescriptorResponse = GetQueryServicesDescriptorResponse;
function createBaseGetTxDescriptorRequest() {
  return {};
}
var GetTxDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxDescriptorRequest();
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
    var message = createBaseGetTxDescriptorRequest();
    return message;
  }
};
exports.GetTxDescriptorRequest = GetTxDescriptorRequest;
function createBaseGetTxDescriptorResponse() {
  return {
    tx: TxDescriptor.fromPartial({})
  };
}
var GetTxDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
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
      tx: (0, _helpers.isSet)(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
exports.GetTxDescriptorResponse = GetTxDescriptorResponse;
function createBaseQueryServicesDescriptor() {
  return {
    query_services: []
  };
}
var QueryServicesDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.query_services),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query_services.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
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
      query_services: Array.isArray(object === null || object === void 0 ? void 0 : object.query_services) ? object.query_services.map(function (e) {
        return QueryServiceDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$query_service;
    var message = createBaseQueryServicesDescriptor();
    message.query_services = ((_object$query_service = object.query_services) === null || _object$query_service === void 0 ? void 0 : _object$query_service.map(function (e) {
      return QueryServiceDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryServicesDescriptor = QueryServicesDescriptor;
function createBaseQueryServiceDescriptor() {
  return {
    fullname: "",
    is_module: false,
    methods: []
  };
}
var QueryServiceDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.is_module === true) {
      writer.uint32(16).bool(message.is_module);
    }
    var _iterator8 = _createForOfIteratorHelper(message.methods),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.is_module = reader.bool();
          break;
        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      is_module: (0, _helpers.isSet)(object.is_module) ? Boolean(object.is_module) : false,
      methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(function (e) {
        return QueryMethodDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname5, _object$is_module, _object$methods;
    var message = createBaseQueryServiceDescriptor();
    message.fullname = (_object$fullname5 = object.fullname) !== null && _object$fullname5 !== void 0 ? _object$fullname5 : "";
    message.is_module = (_object$is_module = object.is_module) !== null && _object$is_module !== void 0 ? _object$is_module : false;
    message.methods = ((_object$methods = object.methods) === null || _object$methods === void 0 ? void 0 : _object$methods.map(function (e) {
      return QueryMethodDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryServiceDescriptor = QueryServiceDescriptor;
function createBaseQueryMethodDescriptor() {
  return {
    name: "",
    full_query_path: ""
  };
}
var QueryMethodDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.full_query_path !== "") {
      writer.uint32(18).string(message.full_query_path);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.full_query_path = reader.string();
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
      full_query_path: (0, _helpers.isSet)(object.full_query_path) ? String(object.full_query_path) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$full_query_pa;
    var message = createBaseQueryMethodDescriptor();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.full_query_path = (_object$full_query_pa = object.full_query_path) !== null && _object$full_query_pa !== void 0 ? _object$full_query_pa : "";
    return message;
  }
};
exports.QueryMethodDescriptor = QueryMethodDescriptor;