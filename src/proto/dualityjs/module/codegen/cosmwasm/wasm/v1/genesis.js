import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - genesis state of x/wasm */

/** Code struct encompasses CodeInfo and CodeBytes */

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

/** Sequence key and value of an id generation counter */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes) ? object.codes.map(e => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts) ? object.contracts.map(e => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map(e => Sequence.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$codes, _object$contracts, _object$sequences;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = ((_object$codes = object.codes) === null || _object$codes === void 0 ? void 0 : _object$codes.map(e => Code.fromPartial(e))) || [];
    message.contracts = ((_object$contracts = object.contracts) === null || _object$contracts === void 0 ? void 0 : _object$contracts.map(e => Contract.fromPartial(e))) || [];
    message.sequences = ((_object$sequences = object.sequences) === null || _object$sequences === void 0 ? void 0 : _object$sequences.map(e => Sequence.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCode() {
  return {
    code_id: Long.UZERO,
    code_info: CodeInfo.fromPartial({}),
    code_bytes: new Uint8Array(),
    pinned: false
  };
}
export const Code = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.code_info !== undefined) {
      CodeInfo.encode(message.code_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.code_bytes.length !== 0) {
      writer.uint32(26).bytes(message.code_bytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.code_info = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.code_bytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
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
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      code_info: isSet(object.code_info) ? CodeInfo.fromJSON(object.code_info) : undefined,
      code_bytes: isSet(object.code_bytes) ? bytesFromBase64(object.code_bytes) : new Uint8Array(),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
    };
  },
  fromPartial(object) {
    var _object$code_bytes, _object$pinned;
    const message = createBaseCode();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.code_info = object.code_info !== undefined && object.code_info !== null ? CodeInfo.fromPartial(object.code_info) : undefined;
    message.code_bytes = (_object$code_bytes = object.code_bytes) !== null && _object$code_bytes !== void 0 ? _object$code_bytes : new Uint8Array();
    message.pinned = (_object$pinned = object.pinned) !== null && _object$pinned !== void 0 ? _object$pinned : false;
    return message;
  }
};
function createBaseContract() {
  return {
    contract_address: "",
    contract_info: ContractInfo.fromPartial({}),
    contract_state: [],
    contract_code_history: []
  };
}
export const Contract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.contract_info !== undefined) {
      ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contract_state) {
      Model.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contract_code_history) {
      ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;
        case 2:
          message.contract_info = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contract_state.push(Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contract_code_history.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      contract_info: isSet(object.contract_info) ? ContractInfo.fromJSON(object.contract_info) : undefined,
      contract_state: Array.isArray(object === null || object === void 0 ? void 0 : object.contract_state) ? object.contract_state.map(e => Model.fromJSON(e)) : [],
      contract_code_history: Array.isArray(object === null || object === void 0 ? void 0 : object.contract_code_history) ? object.contract_code_history.map(e => ContractCodeHistoryEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$contract_addr, _object$contract_stat, _object$contract_code;
    const message = createBaseContract();
    message.contract_address = (_object$contract_addr = object.contract_address) !== null && _object$contract_addr !== void 0 ? _object$contract_addr : "";
    message.contract_info = object.contract_info !== undefined && object.contract_info !== null ? ContractInfo.fromPartial(object.contract_info) : undefined;
    message.contract_state = ((_object$contract_stat = object.contract_state) === null || _object$contract_stat === void 0 ? void 0 : _object$contract_stat.map(e => Model.fromPartial(e))) || [];
    message.contract_code_history = ((_object$contract_code = object.contract_code_history) === null || _object$contract_code === void 0 ? void 0 : _object$contract_code.map(e => ContractCodeHistoryEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSequence() {
  return {
    id_key: new Uint8Array(),
    value: Long.UZERO
  };
}
export const Sequence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id_key.length !== 0) {
      writer.uint32(10).bytes(message.id_key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id_key = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
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
      id_key: isSet(object.id_key) ? bytesFromBase64(object.id_key) : new Uint8Array(),
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$id_key;
    const message = createBaseSequence();
    message.id_key = (_object$id_key = object.id_key) !== null && _object$id_key !== void 0 ? _object$id_key : new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }
};