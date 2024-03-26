import { RequestDeliverTx, ResponseDeliverTx, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, ResponseCommit } from "../../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, DeepPartial } from "../../../../helpers";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  store_key: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  request_begin_block: RequestBeginBlock;
  response_begin_block: ResponseBeginBlock;
  deliver_txs: BlockMetadata_DeliverTx[];
  request_end_block: RequestEndBlock;
  response_end_block: ResponseEndBlock;
  response_commit: ResponseCommit;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {
  request: RequestDeliverTx;
  response: ResponseDeliverTx;
}
function createBaseStoreKVPair(): StoreKVPair {
  return {
    store_key: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const StoreKVPair = {
  encode(message: StoreKVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store_key !== "") {
      writer.uint32(10).string(message.store_key);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store_key = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKVPair {
    return {
      store_key: isSet(object.store_key) ? String(object.store_key) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.store_key = object.store_key ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseBlockMetadata(): BlockMetadata {
  return {
    request_begin_block: RequestBeginBlock.fromPartial({}),
    response_begin_block: ResponseBeginBlock.fromPartial({}),
    deliver_txs: [],
    request_end_block: RequestEndBlock.fromPartial({}),
    response_end_block: ResponseEndBlock.fromPartial({}),
    response_commit: ResponseCommit.fromPartial({})
  };
}
export const BlockMetadata = {
  encode(message: BlockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request_begin_block !== undefined) {
      RequestBeginBlock.encode(message.request_begin_block, writer.uint32(10).fork()).ldelim();
    }
    if (message.response_begin_block !== undefined) {
      ResponseBeginBlock.encode(message.response_begin_block, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deliver_txs) {
      BlockMetadata_DeliverTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.request_end_block !== undefined) {
      RequestEndBlock.encode(message.request_end_block, writer.uint32(34).fork()).ldelim();
    }
    if (message.response_end_block !== undefined) {
      ResponseEndBlock.encode(message.response_end_block, writer.uint32(42).fork()).ldelim();
    }
    if (message.response_commit !== undefined) {
      ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request_begin_block = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.response_begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.deliver_txs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.request_end_block = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 5:
          message.response_end_block = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 6:
          message.response_commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata {
    return {
      request_begin_block: isSet(object.request_begin_block) ? RequestBeginBlock.fromJSON(object.request_begin_block) : undefined,
      response_begin_block: isSet(object.response_begin_block) ? ResponseBeginBlock.fromJSON(object.response_begin_block) : undefined,
      deliver_txs: Array.isArray(object?.deliver_txs) ? object.deliver_txs.map((e: any) => BlockMetadata_DeliverTx.fromJSON(e)) : [],
      request_end_block: isSet(object.request_end_block) ? RequestEndBlock.fromJSON(object.request_end_block) : undefined,
      response_end_block: isSet(object.response_end_block) ? ResponseEndBlock.fromJSON(object.response_end_block) : undefined,
      response_commit: isSet(object.response_commit) ? ResponseCommit.fromJSON(object.response_commit) : undefined
    };
  },
  fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.request_begin_block = object.request_begin_block !== undefined && object.request_begin_block !== null ? RequestBeginBlock.fromPartial(object.request_begin_block) : undefined;
    message.response_begin_block = object.response_begin_block !== undefined && object.response_begin_block !== null ? ResponseBeginBlock.fromPartial(object.response_begin_block) : undefined;
    message.deliver_txs = object.deliver_txs?.map(e => BlockMetadata_DeliverTx.fromPartial(e)) || [];
    message.request_end_block = object.request_end_block !== undefined && object.request_end_block !== null ? RequestEndBlock.fromPartial(object.request_end_block) : undefined;
    message.response_end_block = object.response_end_block !== undefined && object.response_end_block !== null ? ResponseEndBlock.fromPartial(object.response_end_block) : undefined;
    message.response_commit = object.response_commit !== undefined && object.response_commit !== null ? ResponseCommit.fromPartial(object.response_commit) : undefined;
    return message;
  }
};
function createBaseBlockMetadata_DeliverTx(): BlockMetadata_DeliverTx {
  return {
    request: RequestDeliverTx.fromPartial({}),
    response: ResponseDeliverTx.fromPartial({})
  };
}
export const BlockMetadata_DeliverTx = {
  encode(message: BlockMetadata_DeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata_DeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata_DeliverTx {
    return {
      request: isSet(object.request) ? RequestDeliverTx.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? ResponseDeliverTx.fromJSON(object.response) : undefined
    };
  },
  fromPartial(object: DeepPartial<BlockMetadata_DeliverTx>): BlockMetadata_DeliverTx {
    const message = createBaseBlockMetadata_DeliverTx();
    message.request = object.request !== undefined && object.request !== null ? RequestDeliverTx.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? ResponseDeliverTx.fromPartial(object.response) : undefined;
    return message;
  }
};