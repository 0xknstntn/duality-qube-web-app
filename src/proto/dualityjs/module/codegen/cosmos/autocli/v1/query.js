import { ModuleOptions } from "./options";
import * as _m0 from "protobufjs/minimal";
import { isSet, isObject } from "../../../helpers";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */

/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */

function createBaseAppOptionsRequest() {
  return {};
}
export const AppOptionsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsRequest();
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
    const message = createBaseAppOptionsRequest();
    return message;
  }
};
function createBaseAppOptionsResponse_ModuleOptionsEntry() {
  return {
    key: "",
    value: ModuleOptions.fromPartial({})
  };
}
export const AppOptionsResponse_ModuleOptionsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ModuleOptions.decode(reader, reader.uint32());
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ModuleOptions.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? ModuleOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseAppOptionsResponse() {
  return {
    module_options: {}
  };
}
export const AppOptionsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    Object.entries(message.module_options).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode({
        key: key,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.module_options[entry1.key] = entry1.value;
          }
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
      module_options: isObject(object.module_options) ? Object.entries(object.module_options).reduce((acc, [key, value]) => {
        acc[key] = ModuleOptions.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object) {
    var _object$module_option;
    const message = createBaseAppOptionsResponse();
    message.module_options = Object.entries((_object$module_option = object.module_options) !== null && _object$module_option !== void 0 ? _object$module_option : {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};