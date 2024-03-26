import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ClientState, Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import { Any } from "../../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */

/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */

/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */

/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */

/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */

/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */

/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */

/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */

/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */

/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */

/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */

/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */

/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */

/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */

/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */

/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */

/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */

/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */

function createBaseQueryClientStateRequest() {
  return {
    client_id: ""
  };
}
export const QueryClientStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
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
      client_id: isSet(object.client_id) ? String(object.client_id) : ""
    };
  },
  fromPartial(object) {
    var _object$client_id;
    const message = createBaseQueryClientStateRequest();
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    return message;
  }
};
function createBaseQueryClientStateResponse() {
  return {
    client_state: ClientState.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryClientStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_state !== undefined) {
      ClientState.encode(message.client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_state = ClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
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
      client_state: isSet(object.client_state) ? ClientState.fromJSON(object.client_state) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial(object) {
    var _object$proof;
    const message = createBaseQueryClientStateResponse();
    message.client_state = object.client_state !== undefined && object.client_state !== null ? ClientState.fromPartial(object.client_state) : undefined;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
function createBaseQueryClientStatesRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClientStatesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
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
    const message = createBaseQueryClientStatesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClientStatesResponse() {
  return {
    client_states: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClientStatesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.client_states) {
      IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_states.push(IdentifiedClientState.decode(reader, reader.uint32()));
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
      client_states: Array.isArray(object === null || object === void 0 ? void 0 : object.client_states) ? object.client_states.map(e => IdentifiedClientState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$client_states;
    const message = createBaseQueryClientStatesResponse();
    message.client_states = ((_object$client_states = object.client_states) === null || _object$client_states === void 0 ? void 0 : _object$client_states.map(e => IdentifiedClientState.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryConsensusStateRequest() {
  return {
    client_id: "",
    revision_number: Long.UZERO,
    revision_height: Long.UZERO,
    latest_height: false
  };
}
export const QueryConsensusStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (!message.revision_number.isZero()) {
      writer.uint32(16).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(24).uint64(message.revision_height);
    }
    if (message.latest_height === true) {
      writer.uint32(32).bool(message.latest_height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.revision_number = reader.uint64();
          break;
        case 3:
          message.revision_height = reader.uint64();
          break;
        case 4:
          message.latest_height = reader.bool();
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      revision_number: isSet(object.revision_number) ? Long.fromValue(object.revision_number) : Long.UZERO,
      revision_height: isSet(object.revision_height) ? Long.fromValue(object.revision_height) : Long.UZERO,
      latest_height: isSet(object.latest_height) ? Boolean(object.latest_height) : false
    };
  },
  fromPartial(object) {
    var _object$client_id2, _object$latest_height;
    const message = createBaseQueryConsensusStateRequest();
    message.client_id = (_object$client_id2 = object.client_id) !== null && _object$client_id2 !== void 0 ? _object$client_id2 : "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
    message.latest_height = (_object$latest_height = object.latest_height) !== null && _object$latest_height !== void 0 ? _object$latest_height : false;
    return message;
  }
};
function createBaseQueryConsensusStateResponse() {
  return {
    consensus_state: Any.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConsensusStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
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
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  fromPartial(object) {
    var _object$proof2;
    const message = createBaseQueryConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }
};
function createBaseQueryConsensusStatesRequest() {
  return {
    client_id: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryConsensusStatesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$client_id3;
    const message = createBaseQueryConsensusStatesRequest();
    message.client_id = (_object$client_id3 = object.client_id) !== null && _object$client_id3 !== void 0 ? _object$client_id3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryConsensusStatesResponse() {
  return {
    consensus_states: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryConsensusStatesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.consensus_states) {
      ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
      consensus_states: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_states) ? object.consensus_states.map(e => ConsensusStateWithHeight.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$consensus_sta;
    const message = createBaseQueryConsensusStatesResponse();
    message.consensus_states = ((_object$consensus_sta = object.consensus_states) === null || _object$consensus_sta === void 0 ? void 0 : _object$consensus_sta.map(e => ConsensusStateWithHeight.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryConsensusStateHeightsRequest() {
  return {
    client_id: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryConsensusStateHeightsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$client_id4;
    const message = createBaseQueryConsensusStateHeightsRequest();
    message.client_id = (_object$client_id4 = object.client_id) !== null && _object$client_id4 !== void 0 ? _object$client_id4 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryConsensusStateHeightsResponse() {
  return {
    consensus_state_heights: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryConsensusStateHeightsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.consensus_state_heights) {
      Height.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state_heights.push(Height.decode(reader, reader.uint32()));
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
      consensus_state_heights: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_state_heights) ? object.consensus_state_heights.map(e => Height.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$consensus_sta2;
    const message = createBaseQueryConsensusStateHeightsResponse();
    message.consensus_state_heights = ((_object$consensus_sta2 = object.consensus_state_heights) === null || _object$consensus_sta2 === void 0 ? void 0 : _object$consensus_sta2.map(e => Height.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClientStatusRequest() {
  return {
    client_id: ""
  };
}
export const QueryClientStatusRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
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
      client_id: isSet(object.client_id) ? String(object.client_id) : ""
    };
  },
  fromPartial(object) {
    var _object$client_id5;
    const message = createBaseQueryClientStatusRequest();
    message.client_id = (_object$client_id5 = object.client_id) !== null && _object$client_id5 !== void 0 ? _object$client_id5 : "";
    return message;
  }
};
function createBaseQueryClientStatusResponse() {
  return {
    status: ""
  };
}
export const QueryClientStatusResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
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
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseQueryClientStatusResponse();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    return message;
  }
};
function createBaseQueryClientParamsRequest() {
  return {};
}
export const QueryClientParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
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
    const message = createBaseQueryClientParamsRequest();
    return message;
  }
};
function createBaseQueryClientParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryClientParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
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
    const message = createBaseQueryClientParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryUpgradedClientStateRequest() {
  return {};
}
export const QueryUpgradedClientStateRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
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
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  }
};
function createBaseQueryUpgradedClientStateResponse() {
  return {
    upgraded_client_state: Any.fromPartial({})
  };
}
export const QueryUpgradedClientStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.upgraded_client_state !== undefined) {
      Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgraded_client_state = Any.decode(reader, reader.uint32());
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
      upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedClientStateResponse();
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  }
};
function createBaseQueryUpgradedConsensusStateRequest() {
  return {};
}
export const QueryUpgradedConsensusStateRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
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
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  }
};
function createBaseQueryUpgradedConsensusStateResponse() {
  return {
    upgraded_consensus_state: Any.fromPartial({})
  };
}
export const QueryUpgradedConsensusStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.upgraded_consensus_state !== undefined) {
      Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgraded_consensus_state = Any.decode(reader, reader.uint32());
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
      upgraded_consensus_state: isSet(object.upgraded_consensus_state) ? Any.fromJSON(object.upgraded_consensus_state) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgraded_consensus_state = object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null ? Any.fromPartial(object.upgraded_consensus_state) : undefined;
    return message;
  }
};