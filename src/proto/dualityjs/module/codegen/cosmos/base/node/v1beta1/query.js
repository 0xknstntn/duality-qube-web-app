import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** ConfigRequest defines the request structure for the Config gRPC query. */

/** ConfigResponse defines the response structure for the Config gRPC query. */

function createBaseConfigRequest() {
  return {};
}
export const ConfigRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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
    const message = createBaseConfigRequest();
    return message;
  }
};
function createBaseConfigResponse() {
  return {
    minimum_gas_price: ""
  };
}
export const ConfigResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.minimum_gas_price !== "") {
      writer.uint32(10).string(message.minimum_gas_price);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimum_gas_price = reader.string();
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
      minimum_gas_price: isSet(object.minimum_gas_price) ? String(object.minimum_gas_price) : ""
    };
  },
  fromPartial(object) {
    var _object$minimum_gas_p;
    const message = createBaseConfigResponse();
    message.minimum_gas_price = (_object$minimum_gas_p = object.minimum_gas_price) !== null && _object$minimum_gas_p !== void 0 ? _object$minimum_gas_p : "";
    return message;
  }
};