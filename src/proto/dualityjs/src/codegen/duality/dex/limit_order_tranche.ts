import { TradePairID } from './trade_pair_id';
import { Timestamp } from '../../google/protobuf/timestamp';
import { Long, isSet, DeepPartial, fromJsonTimestamp } from '../../helpers';
import * as _m0 from 'protobufjs/minimal';
export interface LimitOrderTrancheKey {
  tradePairID: TradePairID;
  tickIndexTakerToMaker: Long;
  trancheKey: string;
}
export interface LimitOrderTranche {
  key: LimitOrderTrancheKey;
  reservesMakerDenom: string;
  reservesTakerDenom: string;
  totalMakerDenom: string;
  totalTakerDenom: string;
  /**
   * JIT orders also use goodTilDate to handle deletion but represent a special case
   * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
   * Order deletion still functions the same and the orders will be deleted at the end of the block
   */
  expirationTime?: Timestamp;
  priceTakerToMaker: string;
}
function createBaseLimitOrderTrancheKey(): LimitOrderTrancheKey {
  return {
    tradePairID: TradePairID.fromPartial({}),
    tickIndexTakerToMaker: Long.ZERO,
    trancheKey: ''
  };
}
export const LimitOrderTrancheKey = {
  encode(message: LimitOrderTrancheKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradePairID !== undefined) {
      TradePairID.encode(message.tradePairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.tickIndexTakerToMaker.isZero()) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== '') {
      writer.uint32(26).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTrancheKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairID = TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickIndexTakerToMaker = (reader.int64() as Long);
          break;
        case 3:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderTrancheKey {
    return {
      tradePairID: isSet(object.tradePairID) ? TradePairID.fromJSON(object.tradePairID) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ''
    };
  },
  fromPartial(object: DeepPartial<LimitOrderTrancheKey>): LimitOrderTrancheKey {
    const message = createBaseLimitOrderTrancheKey();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? TradePairID.fromPartial(object.tradePairID) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO;
    message.trancheKey = object.trancheKey ?? '';
    return message;
  }
};
function createBaseLimitOrderTranche(): LimitOrderTranche {
  return {
    key: LimitOrderTrancheKey.fromPartial({}),
    reservesMakerDenom: '',
    reservesTakerDenom: '',
    totalMakerDenom: '',
    totalTakerDenom: '',
    expirationTime: undefined,
    priceTakerToMaker: ''
  };
}
export const LimitOrderTranche = {
  encode(message: LimitOrderTranche, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== '') {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.reservesTakerDenom !== '') {
      writer.uint32(26).string(message.reservesTakerDenom);
    }
    if (message.totalMakerDenom !== '') {
      writer.uint32(34).string(message.totalMakerDenom);
    }
    if (message.totalTakerDenom !== '') {
      writer.uint32(42).string(message.totalTakerDenom);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceTakerToMaker !== '') {
      writer.uint32(58).string(message.priceTakerToMaker);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTranche {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTranche();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = LimitOrderTrancheKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.reservesTakerDenom = reader.string();
          break;
        case 4:
          message.totalMakerDenom = reader.string();
          break;
        case 5:
          message.totalTakerDenom = reader.string();
          break;
        case 6:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.priceTakerToMaker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderTranche {
    return {
      key: isSet(object.key) ? LimitOrderTrancheKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: isSet(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : '',
      reservesTakerDenom: isSet(object.reservesTakerDenom) ? String(object.reservesTakerDenom) : '',
      totalMakerDenom: isSet(object.totalMakerDenom) ? String(object.totalMakerDenom) : '',
      totalTakerDenom: isSet(object.totalTakerDenom) ? String(object.totalTakerDenom) : '',
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      priceTakerToMaker: isSet(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : ''
    };
  },
  fromPartial(object: DeepPartial<LimitOrderTranche>): LimitOrderTranche {
    const message = createBaseLimitOrderTranche();
    message.key = object.key !== undefined && object.key !== null ? LimitOrderTrancheKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = object.reservesMakerDenom ?? '';
    message.reservesTakerDenom = object.reservesTakerDenom ?? '';
    message.totalMakerDenom = object.totalMakerDenom ?? '';
    message.totalTakerDenom = object.totalTakerDenom ?? '';
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.priceTakerToMaker = object.priceTakerToMaker ?? '';
    return message;
  }
};