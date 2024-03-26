import { TradePairID } from "./trade_pair_id";
import { LimitOrderType, limitOrderTypeFromJSON } from "./tx";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface LimitOrderTrancheUser {
  tradePairID: TradePairID;
  tickIndexTakerToMaker: Long;
  trancheKey: string;
  address: string;
  sharesOwned: string;
  sharesWithdrawn: string;
  sharesCancelled: string;
  orderType: LimitOrderType;
}
function createBaseLimitOrderTrancheUser(): LimitOrderTrancheUser {
  return {
    tradePairID: TradePairID.fromPartial({}),
    tickIndexTakerToMaker: Long.ZERO,
    trancheKey: "",
    address: "",
    sharesOwned: "",
    sharesWithdrawn: "",
    sharesCancelled: "",
    orderType: 0
  };
}
export const LimitOrderTrancheUser = {
  encode(message: LimitOrderTrancheUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradePairID !== undefined) {
      TradePairID.encode(message.tradePairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.tickIndexTakerToMaker.isZero()) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.sharesOwned !== "") {
      writer.uint32(42).string(message.sharesOwned);
    }
    if (message.sharesWithdrawn !== "") {
      writer.uint32(50).string(message.sharesWithdrawn);
    }
    if (message.sharesCancelled !== "") {
      writer.uint32(58).string(message.sharesCancelled);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTrancheUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheUser();
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
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.sharesOwned = reader.string();
          break;
        case 6:
          message.sharesWithdrawn = reader.string();
          break;
        case 7:
          message.sharesCancelled = reader.string();
          break;
        case 8:
          message.orderType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderTrancheUser {
    return {
      tradePairID: isSet(object.tradePairID) ? TradePairID.fromJSON(object.tradePairID) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
      address: isSet(object.address) ? String(object.address) : "",
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : "",
      sharesWithdrawn: isSet(object.sharesWithdrawn) ? String(object.sharesWithdrawn) : "",
      sharesCancelled: isSet(object.sharesCancelled) ? String(object.sharesCancelled) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1
    };
  },
  fromPartial(object: DeepPartial<LimitOrderTrancheUser>): LimitOrderTrancheUser {
    const message = createBaseLimitOrderTrancheUser();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? TradePairID.fromPartial(object.tradePairID) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO;
    message.trancheKey = object.trancheKey ?? "";
    message.address = object.address ?? "";
    message.sharesOwned = object.sharesOwned ?? "";
    message.sharesWithdrawn = object.sharesWithdrawn ?? "";
    message.sharesCancelled = object.sharesCancelled ?? "";
    message.orderType = object.orderType ?? 0;
    return message;
  }
};