import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */

/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */

/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */

/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */

/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */

/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */

/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */

function createBaseQueryDenomTraceRequest() {
  return {
    hash: ""
  };
}
export const QueryDenomTraceRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseQueryDenomTraceRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseQueryDenomTraceResponse() {
  return {
    denom_trace: DenomTrace.fromPartial({})
  };
}
export const QueryDenomTraceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom_trace !== undefined) {
      DenomTrace.encode(message.denom_trace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_trace = DenomTrace.decode(reader, reader.uint32());
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
      denom_trace: isSet(object.denom_trace) ? DenomTrace.fromJSON(object.denom_trace) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryDenomTraceResponse();
    message.denom_trace = object.denom_trace !== undefined && object.denom_trace !== null ? DenomTrace.fromPartial(object.denom_trace) : undefined;
    return message;
  }
};
function createBaseQueryDenomTracesRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDenomTracesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
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
    const message = createBaseQueryDenomTracesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDenomTracesResponse() {
  return {
    denom_traces: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDenomTracesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.denom_traces) {
      DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_traces.push(DenomTrace.decode(reader, reader.uint32()));
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
      denom_traces: Array.isArray(object === null || object === void 0 ? void 0 : object.denom_traces) ? object.denom_traces.map(e => DenomTrace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$denom_traces;
    const message = createBaseQueryDenomTracesResponse();
    message.denom_traces = ((_object$denom_traces = object.denom_traces) === null || _object$denom_traces === void 0 ? void 0 : _object$denom_traces.map(e => DenomTrace.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
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
function createBaseQueryDenomHashRequest() {
  return {
    trace: ""
  };
}
export const QueryDenomHashRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
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
      trace: isSet(object.trace) ? String(object.trace) : ""
    };
  },
  fromPartial(object) {
    var _object$trace;
    const message = createBaseQueryDenomHashRequest();
    message.trace = (_object$trace = object.trace) !== null && _object$trace !== void 0 ? _object$trace : "";
    return message;
  }
};
function createBaseQueryDenomHashResponse() {
  return {
    hash: ""
  };
}
export const QueryDenomHashResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial(object) {
    var _object$hash2;
    const message = createBaseQueryDenomHashResponse();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : "";
    return message;
  }
};
function createBaseQueryEscrowAddressRequest() {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryEscrowAddressRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
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
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  fromPartial(object) {
    var _object$port_id, _object$channel_id;
    const message = createBaseQueryEscrowAddressRequest();
    message.port_id = (_object$port_id = object.port_id) !== null && _object$port_id !== void 0 ? _object$port_id : "";
    message.channel_id = (_object$channel_id = object.channel_id) !== null && _object$channel_id !== void 0 ? _object$channel_id : "";
    return message;
  }
};
function createBaseQueryEscrowAddressResponse() {
  return {
    escrow_address: ""
  };
}
export const QueryEscrowAddressResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.escrow_address !== "") {
      writer.uint32(10).string(message.escrow_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrow_address = reader.string();
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
      escrow_address: isSet(object.escrow_address) ? String(object.escrow_address) : ""
    };
  },
  fromPartial(object) {
    var _object$escrow_addres;
    const message = createBaseQueryEscrowAddressResponse();
    message.escrow_address = (_object$escrow_addres = object.escrow_address) !== null && _object$escrow_addres !== void 0 ? _object$escrow_addres : "";
    return message;
  }
};
function createBaseQueryTotalEscrowForDenomRequest() {
  return {
    denom: ""
  };
}
export const QueryTotalEscrowForDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object) {
    var _object$denom;
    const message = createBaseQueryTotalEscrowForDenomRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseQueryTotalEscrowForDenomResponse() {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryTotalEscrowForDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryTotalEscrowForDenomResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};