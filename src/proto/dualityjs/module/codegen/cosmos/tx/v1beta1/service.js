import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OrderBy defines the sorting order */
export let OrderBy = /*#__PURE__*/function (OrderBy) {
  OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OrderBy;
}({});
export function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object) {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export let BroadcastMode = /*#__PURE__*/function (BroadcastMode) {
  BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BroadcastMode;
}({});
export function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object) {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

/** GetTxResponse is the response type for the Service.GetTx method. */

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: PageRequest.fromPartial({}),
    order_by: 0,
    page: Long.UZERO,
    limit: Long.UZERO
  };
}
export const GetTxsEventRequest = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.events) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.order_by !== 0) {
      writer.uint32(24).int32(message.order_by);
    }
    if (!message.page.isZero()) {
      writer.uint32(32).uint64(message.page);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.order_by = reader.int32();
          break;
        case 4:
          message.page = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      order_by: isSet(object.order_by) ? orderByFromJSON(object.order_by) : -1,
      page: isSet(object.page) ? Long.fromValue(object.page) : Long.UZERO,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$events, _object$order_by;
    const message = createBaseGetTxsEventRequest();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(e => e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.order_by = (_object$order_by = object.order_by) !== null && _object$order_by !== void 0 ? _object$order_by : 0;
    message.page = object.page !== undefined && object.page !== null ? Long.fromValue(object.page) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }
};
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    tx_responses: [],
    pagination: PageResponse.fromPartial({}),
    total: Long.UZERO
  };
}
export const GetTxsEventResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tx_responses) {
      TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total.isZero()) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tx_responses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = reader.uint64();
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => Tx.fromJSON(e)) : [],
      tx_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.tx_responses) ? object.tx_responses.map(e => TxResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      total: isSet(object.total) ? Long.fromValue(object.total) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$txs, _object$tx_responses;
    const message = createBaseGetTxsEventResponse();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => Tx.fromPartial(e))) || [];
    message.tx_responses = ((_object$tx_responses = object.tx_responses) === null || _object$tx_responses === void 0 ? void 0 : _object$tx_responses.map(e => TxResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  }
};
function createBaseBroadcastTxRequest() {
  return {
    tx_bytes: new Uint8Array(),
    mode: 0
  };
}
export const BroadcastTxRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
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
      tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(),
      mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : -1
    };
  },
  fromPartial(object) {
    var _object$tx_bytes, _object$mode;
    const message = createBaseBroadcastTxRequest();
    message.tx_bytes = (_object$tx_bytes = object.tx_bytes) !== null && _object$tx_bytes !== void 0 ? _object$tx_bytes : new Uint8Array();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
function createBaseBroadcastTxResponse() {
  return {
    tx_response: TxResponse.fromPartial({})
  };
}
export const BroadcastTxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx_response !== undefined) {
      TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_response = TxResponse.decode(reader, reader.uint32());
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
      tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseBroadcastTxResponse();
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
    return message;
  }
};
function createBaseSimulateRequest() {
  return {
    tx: Tx.fromPartial({}),
    tx_bytes: new Uint8Array()
  };
}
export const SimulateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.tx_bytes.length !== 0) {
      writer.uint32(18).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.tx_bytes = reader.bytes();
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$tx_bytes2;
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.tx_bytes = (_object$tx_bytes2 = object.tx_bytes) !== null && _object$tx_bytes2 !== void 0 ? _object$tx_bytes2 : new Uint8Array();
    return message;
  }
};
function createBaseSimulateResponse() {
  return {
    gas_info: GasInfo.fromPartial({}),
    result: Result.fromPartial({})
  };
}
export const SimulateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.gas_info !== undefined) {
      GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_info = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
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
      gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseSimulateResponse();
    message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
export const GetTxRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
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
    const message = createBaseGetTxRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseGetTxResponse() {
  return {
    tx: Tx.fromPartial({}),
    tx_response: TxResponse.fromPartial({})
  };
}
export const GetTxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.tx_response !== undefined) {
      TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.tx_response = TxResponse.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
    return message;
  }
};
function createBaseGetBlockWithTxsRequest() {
  return {
    height: Long.ZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const GetBlockWithTxsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    block_id: BlockID.fromPartial({}),
    block: Block.fromPartial({}),
    pagination: PageResponse.fromPartial({})
  };
}
export const GetBlockWithTxsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => Tx.fromJSON(e)) : [],
      block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$txs2;
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(e => Tx.fromPartial(e))) || [];
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseTxDecodeRequest() {
  return {
    tx_bytes: new Uint8Array()
  };
}
export const TxDecodeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
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
      tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$tx_bytes3;
    const message = createBaseTxDecodeRequest();
    message.tx_bytes = (_object$tx_bytes3 = object.tx_bytes) !== null && _object$tx_bytes3 !== void 0 ? _object$tx_bytes3 : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeResponse() {
  return {
    tx: Tx.fromPartial({})
  };
}
export const TxDecodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseTxDecodeResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxEncodeRequest() {
  return {
    tx: Tx.fromPartial({})
  };
}
export const TxEncodeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseTxEncodeRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxEncodeResponse() {
  return {
    tx_bytes: new Uint8Array()
  };
}
export const TxEncodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
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
      tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$tx_bytes4;
    const message = createBaseTxEncodeResponse();
    message.tx_bytes = (_object$tx_bytes4 = object.tx_bytes) !== null && _object$tx_bytes4 !== void 0 ? _object$tx_bytes4 : new Uint8Array();
    return message;
  }
};
function createBaseTxEncodeAminoRequest() {
  return {
    amino_json: ""
  };
}
export const TxEncodeAminoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amino_json !== "") {
      writer.uint32(10).string(message.amino_json);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_json = reader.string();
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
      amino_json: isSet(object.amino_json) ? String(object.amino_json) : ""
    };
  },
  fromPartial(object) {
    var _object$amino_json;
    const message = createBaseTxEncodeAminoRequest();
    message.amino_json = (_object$amino_json = object.amino_json) !== null && _object$amino_json !== void 0 ? _object$amino_json : "";
    return message;
  }
};
function createBaseTxEncodeAminoResponse() {
  return {
    amino_binary: new Uint8Array()
  };
}
export const TxEncodeAminoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amino_binary.length !== 0) {
      writer.uint32(10).bytes(message.amino_binary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_binary = reader.bytes();
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
      amino_binary: isSet(object.amino_binary) ? bytesFromBase64(object.amino_binary) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$amino_binary;
    const message = createBaseTxEncodeAminoResponse();
    message.amino_binary = (_object$amino_binary = object.amino_binary) !== null && _object$amino_binary !== void 0 ? _object$amino_binary : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeAminoRequest() {
  return {
    amino_binary: new Uint8Array()
  };
}
export const TxDecodeAminoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amino_binary.length !== 0) {
      writer.uint32(10).bytes(message.amino_binary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_binary = reader.bytes();
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
      amino_binary: isSet(object.amino_binary) ? bytesFromBase64(object.amino_binary) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$amino_binary2;
    const message = createBaseTxDecodeAminoRequest();
    message.amino_binary = (_object$amino_binary2 = object.amino_binary) !== null && _object$amino_binary2 !== void 0 ? _object$amino_binary2 : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeAminoResponse() {
  return {
    amino_json: ""
  };
}
export const TxDecodeAminoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amino_json !== "") {
      writer.uint32(10).string(message.amino_json);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amino_json = reader.string();
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
      amino_json: isSet(object.amino_json) ? String(object.amino_json) : ""
    };
  },
  fromPartial(object) {
    var _object$amino_json2;
    const message = createBaseTxDecodeAminoResponse();
    message.amino_json = (_object$amino_json2 = object.amino_json) !== null && _object$amino_json2 !== void 0 ? _object$amino_json2 : "";
    return message;
  }
};