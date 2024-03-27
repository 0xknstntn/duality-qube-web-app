import { PairID } from './pair_id';
import { Long, isSet, DeepPartial } from '../../helpers';
import * as _m0 from 'protobufjs/minimal';
export interface DepositRecord {
  pairID: PairID;
  sharesOwned: string;
  centerTickIndex: Long;
  lowerTickIndex: Long;
  upperTickIndex: Long;
  fee: Long;
}
function createBaseDepositRecord(): DepositRecord {
  return {
    pairID: PairID.fromPartial({}),
    sharesOwned: '',
    centerTickIndex: Long.ZERO,
    lowerTickIndex: Long.ZERO,
    upperTickIndex: Long.ZERO,
    fee: Long.UZERO
  };
}
export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== undefined) {
      PairID.encode(message.pairID, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOwned !== '') {
      writer.uint32(18).string(message.sharesOwned);
    }
    if (!message.centerTickIndex.isZero()) {
      writer.uint32(24).int64(message.centerTickIndex);
    }
    if (!message.lowerTickIndex.isZero()) {
      writer.uint32(32).int64(message.lowerTickIndex);
    }
    if (!message.upperTickIndex.isZero()) {
      writer.uint32(40).int64(message.upperTickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(48).uint64(message.fee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = PairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.sharesOwned = reader.string();
          break;
        case 3:
          message.centerTickIndex = (reader.int64() as Long);
          break;
        case 4:
          message.lowerTickIndex = (reader.int64() as Long);
          break;
        case 5:
          message.upperTickIndex = (reader.int64() as Long);
          break;
        case 6:
          message.fee = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositRecord {
    return {
      pairID: isSet(object.pairID) ? PairID.fromJSON(object.pairID) : undefined,
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : '',
      centerTickIndex: isSet(object.centerTickIndex) ? Long.fromValue(object.centerTickIndex) : Long.ZERO,
      lowerTickIndex: isSet(object.lowerTickIndex) ? Long.fromValue(object.lowerTickIndex) : Long.ZERO,
      upperTickIndex: isSet(object.upperTickIndex) ? Long.fromValue(object.upperTickIndex) : Long.ZERO,
      fee: isSet(object.fee) ? Long.fromValue(object.fee) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.pairID = object.pairID !== undefined && object.pairID !== null ? PairID.fromPartial(object.pairID) : undefined;
    message.sharesOwned = object.sharesOwned ?? '';
    message.centerTickIndex = object.centerTickIndex !== undefined && object.centerTickIndex !== null ? Long.fromValue(object.centerTickIndex) : Long.ZERO;
    message.lowerTickIndex = object.lowerTickIndex !== undefined && object.lowerTickIndex !== null ? Long.fromValue(object.lowerTickIndex) : Long.ZERO;
    message.upperTickIndex = object.upperTickIndex !== undefined && object.upperTickIndex !== null ? Long.fromValue(object.upperTickIndex) : Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Long.fromValue(object.fee) : Long.UZERO;
    return message;
  }
};