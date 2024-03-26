import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */

/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */

/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */

/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */

function createBaseListAllInterfacesRequest() {
  return {};
}
export const ListAllInterfacesRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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
    const message = createBaseListAllInterfacesRequest();
    return message;
  }
};
function createBaseListAllInterfacesResponse() {
  return {
    interface_names: []
  };
}
export const ListAllInterfacesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.interface_names) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interface_names.push(reader.string());
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
      interface_names: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_names) ? object.interface_names.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$interface_nam;
    const message = createBaseListAllInterfacesResponse();
    message.interface_names = ((_object$interface_nam = object.interface_names) === null || _object$interface_nam === void 0 ? void 0 : _object$interface_nam.map(e => e)) || [];
    return message;
  }
};
function createBaseListImplementationsRequest() {
  return {
    interface_name: ""
  };
}
export const ListImplementationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interface_name !== "") {
      writer.uint32(10).string(message.interface_name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interface_name = reader.string();
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
      interface_name: isSet(object.interface_name) ? String(object.interface_name) : ""
    };
  },
  fromPartial(object) {
    var _object$interface_nam2;
    const message = createBaseListImplementationsRequest();
    message.interface_name = (_object$interface_nam2 = object.interface_name) !== null && _object$interface_nam2 !== void 0 ? _object$interface_nam2 : "";
    return message;
  }
};
function createBaseListImplementationsResponse() {
  return {
    implementation_message_names: []
  };
}
export const ListImplementationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.implementation_message_names) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementation_message_names.push(reader.string());
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
      implementation_message_names: Array.isArray(object === null || object === void 0 ? void 0 : object.implementation_message_names) ? object.implementation_message_names.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$implementatio;
    const message = createBaseListImplementationsResponse();
    message.implementation_message_names = ((_object$implementatio = object.implementation_message_names) === null || _object$implementatio === void 0 ? void 0 : _object$implementatio.map(e => e)) || [];
    return message;
  }
};