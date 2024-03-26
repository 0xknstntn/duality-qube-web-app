import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
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
export const AppDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
      chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
      codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
      configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
      query_services: isSet(object.query_services) ? QueryServicesDescriptor.fromJSON(object.query_services) : undefined,
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.query_services = object.query_services !== undefined && object.query_services !== null ? QueryServicesDescriptor.fromPartial(object.query_services) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxDescriptor() {
  return {
    fullname: "",
    msgs: []
  };
}
export const TxDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(e => MsgDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$fullname, _object$msgs;
    const message = createBaseTxDescriptor();
    message.fullname = (_object$fullname = object.fullname) !== null && _object$fullname !== void 0 ? _object$fullname : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map(e => MsgDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAuthnDescriptor() {
  return {
    sign_modes: []
  };
}
export const AuthnDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.sign_modes) {
      SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      sign_modes: Array.isArray(object === null || object === void 0 ? void 0 : object.sign_modes) ? object.sign_modes.map(e => SigningModeDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$sign_modes;
    const message = createBaseAuthnDescriptor();
    message.sign_modes = ((_object$sign_modes = object.sign_modes) === null || _object$sign_modes === void 0 ? void 0 : _object$sign_modes.map(e => SigningModeDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSigningModeDescriptor() {
  return {
    name: "",
    number: 0,
    authn_info_provider_method_fullname: ""
  };
}
export const SigningModeDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      authn_info_provider_method_fullname: isSet(object.authn_info_provider_method_fullname) ? String(object.authn_info_provider_method_fullname) : ""
    };
  },
  fromPartial(object) {
    var _object$name, _object$number, _object$authn_info_pr;
    const message = createBaseSigningModeDescriptor();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.authn_info_provider_method_fullname = (_object$authn_info_pr = object.authn_info_provider_method_fullname) !== null && _object$authn_info_pr !== void 0 ? _object$authn_info_pr : "";
    return message;
  }
};
function createBaseChainDescriptor() {
  return {
    id: ""
  };
}
export const ChainDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object) {
    var _object$id;
    const message = createBaseChainDescriptor();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  }
};
function createBaseCodecDescriptor() {
  return {
    interfaces: []
  };
}
export const CodecDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(e => InterfaceDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$interfaces;
    const message = createBaseCodecDescriptor();
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(e => InterfaceDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseInterfaceDescriptor() {
  return {
    fullname: "",
    interface_accepting_messages: [],
    interface_implementers: []
  };
}
export const InterfaceDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interface_accepting_messages) {
      InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interface_implementers) {
      InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      interface_accepting_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_accepting_messages) ? object.interface_accepting_messages.map(e => InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
      interface_implementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_implementers) ? object.interface_implementers.map(e => InterfaceImplementerDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$fullname2, _object$interface_acc, _object$interface_imp;
    const message = createBaseInterfaceDescriptor();
    message.fullname = (_object$fullname2 = object.fullname) !== null && _object$fullname2 !== void 0 ? _object$fullname2 : "";
    message.interface_accepting_messages = ((_object$interface_acc = object.interface_accepting_messages) === null || _object$interface_acc === void 0 ? void 0 : _object$interface_acc.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e))) || [];
    message.interface_implementers = ((_object$interface_imp = object.interface_implementers) === null || _object$interface_imp === void 0 ? void 0 : _object$interface_imp.map(e => InterfaceImplementerDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseInterfaceImplementerDescriptor() {
  return {
    fullname: "",
    type_url: ""
  };
}
export const InterfaceImplementerDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.type_url !== "") {
      writer.uint32(18).string(message.type_url);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      type_url: isSet(object.type_url) ? String(object.type_url) : ""
    };
  },
  fromPartial(object) {
    var _object$fullname3, _object$type_url;
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = (_object$fullname3 = object.fullname) !== null && _object$fullname3 !== void 0 ? _object$fullname3 : "";
    message.type_url = (_object$type_url = object.type_url) !== null && _object$type_url !== void 0 ? _object$type_url : "";
    return message;
  }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
  return {
    fullname: "",
    field_descriptor_names: []
  };
}
export const InterfaceAcceptingMessageDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.field_descriptor_names) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      field_descriptor_names: Array.isArray(object === null || object === void 0 ? void 0 : object.field_descriptor_names) ? object.field_descriptor_names.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$fullname4, _object$field_descrip;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = (_object$fullname4 = object.fullname) !== null && _object$fullname4 !== void 0 ? _object$fullname4 : "";
    message.field_descriptor_names = ((_object$field_descrip = object.field_descriptor_names) === null || _object$field_descrip === void 0 ? void 0 : _object$field_descrip.map(e => e)) || [];
    return message;
  }
};
function createBaseConfigurationDescriptor() {
  return {
    bech32_account_address_prefix: ""
  };
}
export const ConfigurationDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.bech32_account_address_prefix !== "") {
      writer.uint32(10).string(message.bech32_account_address_prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      bech32_account_address_prefix: isSet(object.bech32_account_address_prefix) ? String(object.bech32_account_address_prefix) : ""
    };
  },
  fromPartial(object) {
    var _object$bech32_accoun;
    const message = createBaseConfigurationDescriptor();
    message.bech32_account_address_prefix = (_object$bech32_accoun = object.bech32_account_address_prefix) !== null && _object$bech32_accoun !== void 0 ? _object$bech32_accoun : "";
    return message;
  }
};
function createBaseMsgDescriptor() {
  return {
    msg_type_url: ""
  };
}
export const MsgDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg_type_url !== "") {
      writer.uint32(10).string(message.msg_type_url);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : ""
    };
  },
  fromPartial(object) {
    var _object$msg_type_url;
    const message = createBaseMsgDescriptor();
    message.msg_type_url = (_object$msg_type_url = object.msg_type_url) !== null && _object$msg_type_url !== void 0 ? _object$msg_type_url : "";
    return message;
  }
};
function createBaseGetAuthnDescriptorRequest() {
  return {};
}
export const GetAuthnDescriptorRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  }
};
function createBaseGetAuthnDescriptorResponse() {
  return {
    authn: AuthnDescriptor.fromPartial({})
  };
}
export const GetAuthnDescriptorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  }
};
function createBaseGetChainDescriptorRequest() {
  return {};
}
export const GetChainDescriptorRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  }
};
function createBaseGetChainDescriptorResponse() {
  return {
    chain: ChainDescriptor.fromPartial({})
  };
}
export const GetChainDescriptorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  }
};
function createBaseGetCodecDescriptorRequest() {
  return {};
}
export const GetCodecDescriptorRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  }
};
function createBaseGetCodecDescriptorResponse() {
  return {
    codec: CodecDescriptor.fromPartial({})
  };
}
export const GetCodecDescriptorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  }
};
function createBaseGetConfigurationDescriptorRequest() {
  return {};
}
export const GetConfigurationDescriptorRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  }
};
function createBaseGetConfigurationDescriptorResponse() {
  return {
    config: ConfigurationDescriptor.fromPartial({})
  };
}
export const GetConfigurationDescriptorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  }
};
function createBaseGetQueryServicesDescriptorRequest() {
  return {};
}
export const GetQueryServicesDescriptorRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  }
};
function createBaseGetQueryServicesDescriptorResponse() {
  return {
    queries: QueryServicesDescriptor.fromPartial({})
  };
}
export const GetQueryServicesDescriptorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  }
};
function createBaseGetTxDescriptorRequest() {
  return {};
}
export const GetTxDescriptorRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  }
};
function createBaseGetTxDescriptorResponse() {
  return {
    tx: TxDescriptor.fromPartial({})
  };
}
export const GetTxDescriptorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseQueryServicesDescriptor() {
  return {
    query_services: []
  };
}
export const QueryServicesDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.query_services) {
      QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      query_services: Array.isArray(object === null || object === void 0 ? void 0 : object.query_services) ? object.query_services.map(e => QueryServiceDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$query_service;
    const message = createBaseQueryServicesDescriptor();
    message.query_services = ((_object$query_service = object.query_services) === null || _object$query_service === void 0 ? void 0 : _object$query_service.map(e => QueryServiceDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryServiceDescriptor() {
  return {
    fullname: "",
    is_module: false,
    methods: []
  };
}
export const QueryServiceDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.is_module === true) {
      writer.uint32(16).bool(message.is_module);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      is_module: isSet(object.is_module) ? Boolean(object.is_module) : false,
      methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(e => QueryMethodDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$fullname5, _object$is_module, _object$methods;
    const message = createBaseQueryServiceDescriptor();
    message.fullname = (_object$fullname5 = object.fullname) !== null && _object$fullname5 !== void 0 ? _object$fullname5 : "";
    message.is_module = (_object$is_module = object.is_module) !== null && _object$is_module !== void 0 ? _object$is_module : false;
    message.methods = ((_object$methods = object.methods) === null || _object$methods === void 0 ? void 0 : _object$methods.map(e => QueryMethodDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryMethodDescriptor() {
  return {
    name: "",
    full_query_path: ""
  };
}
export const QueryMethodDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.full_query_path !== "") {
      writer.uint32(18).string(message.full_query_path);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      full_query_path: isSet(object.full_query_path) ? String(object.full_query_path) : ""
    };
  },
  fromPartial(object) {
    var _object$name2, _object$full_query_pa;
    const message = createBaseQueryMethodDescriptor();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.full_query_path = (_object$full_query_pa = object.full_query_path) !== null && _object$full_query_pa !== void 0 ? _object$full_query_pa : "";
    return message;
  }
};