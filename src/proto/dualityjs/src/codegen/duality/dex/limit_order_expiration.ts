import { Timestamp } from '../../google/protobuf/timestamp';
import * as _m0 from 'protobufjs/minimal';
import { isSet, fromJsonTimestamp, bytesFromBase64, DeepPartial } from '../../helpers';
export interface LimitOrderExpiration {
  /** see limitOrderTranche.proto for details on goodTilDate */
  expirationTime: Timestamp;
  trancheRef: Uint8Array;
}
function createBaseLimitOrderExpiration(): LimitOrderExpiration {
  return {
    expirationTime: Timestamp.fromPartial({}),
    trancheRef: new Uint8Array()
  };
}
export const LimitOrderExpiration = {
  encode(message: LimitOrderExpiration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.trancheRef.length !== 0) {
      writer.uint32(18).bytes(message.trancheRef);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderExpiration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.trancheRef = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderExpiration {
    return {
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      trancheRef: isSet(object.trancheRef) ? bytesFromBase64(object.trancheRef) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<LimitOrderExpiration>): LimitOrderExpiration {
    const message = createBaseLimitOrderExpiration();
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.trancheRef = object.trancheRef ?? new Uint8Array();
    return message;
  }
};