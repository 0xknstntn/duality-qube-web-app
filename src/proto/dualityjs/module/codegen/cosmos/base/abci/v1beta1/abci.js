import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */

/** GasInfo defines tx execution gas context. */

/** Result is the union of ResponseFormat and ResponseCheckTx. */

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
/** SearchTxsResult defines a structure for querying txs pageable */
function createBaseTxResponse() {
  return {
    height: Long.ZERO,
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    raw_log: "",
    logs: [],
    info: "",
    gas_wanted: Long.ZERO,
    gas_used: Long.ZERO,
    tx: Any.fromPartial({}),
    timestamp: "",
    events: []
  };
}
export const TxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.raw_log !== "") {
      writer.uint32(50).string(message.raw_log);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (!message.gas_wanted.isZero()) {
      writer.uint32(72).int64(message.gas_wanted);
    }
    if (!message.gas_used.isZero()) {
      writer.uint32(80).int64(message.gas_used);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.raw_log = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gas_wanted = reader.int64();
          break;
        case 10:
          message.gas_used = reader.int64();
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      raw_log: isSet(object.raw_log) ? String(object.raw_log) : "",
      logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map(e => ABCIMessageLog.fromJSON(e)) : [],
      info: isSet(object.info) ? String(object.info) : "",
      gas_wanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gas_used: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$txhash, _object$codespace, _object$code, _object$data, _object$raw_log, _object$logs, _object$info, _object$timestamp, _object$events;
    const message = createBaseTxResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.txhash = (_object$txhash = object.txhash) !== null && _object$txhash !== void 0 ? _object$txhash : "";
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : "";
    message.raw_log = (_object$raw_log = object.raw_log) !== null && _object$raw_log !== void 0 ? _object$raw_log : "";
    message.logs = ((_object$logs = object.logs) === null || _object$logs === void 0 ? void 0 : _object$logs.map(e => ABCIMessageLog.fromPartial(e))) || [];
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.ZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.ZERO;
    message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : "";
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(e => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseABCIMessageLog() {
  return {
    msg_index: 0,
    log: "",
    events: []
  };
}
export const ABCIMessageLog = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg_index !== 0) {
      writer.uint32(8).uint32(message.msg_index);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_index = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
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
      msg_index: isSet(object.msg_index) ? Number(object.msg_index) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => StringEvent.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$msg_index, _object$log, _object$events2;
    const message = createBaseABCIMessageLog();
    message.msg_index = (_object$msg_index = object.msg_index) !== null && _object$msg_index !== void 0 ? _object$msg_index : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(e => StringEvent.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStringEvent() {
  return {
    type: "",
    attributes: []
  };
}
export const StringEvent = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(e => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$type, _object$attributes;
    const message = createBaseStringEvent();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(e => Attribute.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAttribute() {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
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
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object) {
    var _object$key, _object$value;
    const message = createBaseAttribute();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
function createBaseGasInfo() {
  return {
    gas_wanted: Long.UZERO,
    gas_used: Long.UZERO
  };
}
export const GasInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.gas_wanted.isZero()) {
      writer.uint32(8).uint64(message.gas_wanted);
    }
    if (!message.gas_used.isZero()) {
      writer.uint32(16).uint64(message.gas_used);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_wanted = reader.uint64();
          break;
        case 2:
          message.gas_used = reader.uint64();
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
      gas_wanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.UZERO,
      gas_used: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseGasInfo();
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.UZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.UZERO;
    return message;
  }
};
function createBaseResult() {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msg_responses: []
  };
}
export const Result = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msg_responses) {
      Any.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msg_responses.push(Any.decode(reader, reader.uint32()));
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : [],
      msg_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(e => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$data2, _object$log2, _object$events3, _object$msg_responses;
    const message = createBaseResult();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(e => Event.fromPartial(e))) || [];
    message.msg_responses = ((_object$msg_responses = object.msg_responses) === null || _object$msg_responses === void 0 ? void 0 : _object$msg_responses.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSimulationResponse() {
  return {
    gas_info: GasInfo.fromPartial({}),
    result: Result.fromPartial({})
  };
}
export const SimulationResponse = {
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
    const message = createBaseSimulationResponse();
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
    const message = createBaseSimulationResponse();
    message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseMsgData() {
  return {
    msg_type: "",
    data: new Uint8Array()
  };
}
export const MsgData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg_type !== "") {
      writer.uint32(10).string(message.msg_type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_type = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      msg_type: isSet(object.msg_type) ? String(object.msg_type) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$msg_type, _object$data3;
    const message = createBaseMsgData();
    message.msg_type = (_object$msg_type = object.msg_type) !== null && _object$msg_type !== void 0 ? _object$msg_type : "";
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
function createBaseTxMsgData() {
  return {
    data: [],
    msg_responses: []
  };
}
export const TxMsgData = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.data) {
      MsgData.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msg_responses) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msg_responses.push(Any.decode(reader, reader.uint32()));
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
      data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(e => MsgData.fromJSON(e)) : [],
      msg_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(e => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$data4, _object$msg_responses2;
    const message = createBaseTxMsgData();
    message.data = ((_object$data4 = object.data) === null || _object$data4 === void 0 ? void 0 : _object$data4.map(e => MsgData.fromPartial(e))) || [];
    message.msg_responses = ((_object$msg_responses2 = object.msg_responses) === null || _object$msg_responses2 === void 0 ? void 0 : _object$msg_responses2.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSearchTxsResult() {
  return {
    total_count: Long.UZERO,
    count: Long.UZERO,
    page_number: Long.UZERO,
    page_total: Long.UZERO,
    limit: Long.UZERO,
    txs: []
  };
}
export const SearchTxsResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.total_count.isZero()) {
      writer.uint32(8).uint64(message.total_count);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    if (!message.page_number.isZero()) {
      writer.uint32(24).uint64(message.page_number);
    }
    if (!message.page_total.isZero()) {
      writer.uint32(32).uint64(message.page_total);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_count = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.page_number = reader.uint64();
          break;
        case 4:
          message.page_total = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
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
      total_count: isSet(object.total_count) ? Long.fromValue(object.total_count) : Long.UZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
      page_number: isSet(object.page_number) ? Long.fromValue(object.page_number) : Long.UZERO,
      page_total: isSet(object.page_total) ? Long.fromValue(object.page_total) : Long.UZERO,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => TxResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$txs;
    const message = createBaseSearchTxsResult();
    message.total_count = object.total_count !== undefined && object.total_count !== null ? Long.fromValue(object.total_count) : Long.UZERO;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    message.page_number = object.page_number !== undefined && object.page_number !== null ? Long.fromValue(object.page_number) : Long.UZERO;
    message.page_total = object.page_total !== undefined && object.page_total !== null ? Long.fromValue(object.page_total) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => TxResponse.fromPartial(e))) || [];
    return message;
  }
};