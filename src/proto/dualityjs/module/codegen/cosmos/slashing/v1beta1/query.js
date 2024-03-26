import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method */

/** QueryParamsResponse is the response type for the Query/Params RPC method */

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQuerySigningInfoRequest() {
  return {
    cons_address: ""
  };
}
export const QuerySigningInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.cons_address !== "") {
      writer.uint32(10).string(message.cons_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cons_address = reader.string();
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
      cons_address: isSet(object.cons_address) ? String(object.cons_address) : ""
    };
  },
  fromPartial(object) {
    var _object$cons_address;
    const message = createBaseQuerySigningInfoRequest();
    message.cons_address = (_object$cons_address = object.cons_address) !== null && _object$cons_address !== void 0 ? _object$cons_address : "";
    return message;
  }
};
function createBaseQuerySigningInfoResponse() {
  return {
    val_signing_info: ValidatorSigningInfo.fromPartial({})
  };
}
export const QuerySigningInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.val_signing_info !== undefined) {
      ValidatorSigningInfo.encode(message.val_signing_info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
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
      val_signing_info: isSet(object.val_signing_info) ? ValidatorSigningInfo.fromJSON(object.val_signing_info) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQuerySigningInfoResponse();
    message.val_signing_info = object.val_signing_info !== undefined && object.val_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.val_signing_info) : undefined;
    return message;
  }
};
function createBaseQuerySigningInfosRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QuerySigningInfosRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQuerySigningInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySigningInfosResponse() {
  return {
    info: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QuerySigningInfosResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      info: Array.isArray(object === null || object === void 0 ? void 0 : object.info) ? object.info.map(e => ValidatorSigningInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$info;
    const message = createBaseQuerySigningInfosResponse();
    message.info = ((_object$info = object.info) === null || _object$info === void 0 ? void 0 : _object$info.map(e => ValidatorSigningInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};