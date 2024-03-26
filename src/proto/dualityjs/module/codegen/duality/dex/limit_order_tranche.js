import { TradePairID } from "./trade_pair_id";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseLimitOrderTrancheKey() {
  return {
    tradePairID: TradePairID.fromPartial({}),
    tickIndexTakerToMaker: Long.ZERO,
    trancheKey: ""
  };
}
export const LimitOrderTrancheKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tradePairID !== undefined) {
      TradePairID.encode(message.tradePairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.tickIndexTakerToMaker.isZero()) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairID = TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickIndexTakerToMaker = reader.int64();
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
  fromJSON(object) {
    return {
      tradePairID: isSet(object.tradePairID) ? TradePairID.fromJSON(object.tradePairID) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object) {
    var _object$trancheKey;
    const message = createBaseLimitOrderTrancheKey();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? TradePairID.fromPartial(object.tradePairID) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO;
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    return message;
  }
};
function createBaseLimitOrderTranche() {
  return {
    key: LimitOrderTrancheKey.fromPartial({}),
    reservesMakerDenom: "",
    reservesTakerDenom: "",
    totalMakerDenom: "",
    totalTakerDenom: "",
    expirationTime: undefined,
    priceTakerToMaker: ""
  };
}
export const LimitOrderTranche = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== undefined) {
      LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.reservesTakerDenom !== "") {
      writer.uint32(26).string(message.reservesTakerDenom);
    }
    if (message.totalMakerDenom !== "") {
      writer.uint32(34).string(message.totalMakerDenom);
    }
    if (message.totalTakerDenom !== "") {
      writer.uint32(42).string(message.totalTakerDenom);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(58).string(message.priceTakerToMaker);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? LimitOrderTrancheKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: isSet(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      reservesTakerDenom: isSet(object.reservesTakerDenom) ? String(object.reservesTakerDenom) : "",
      totalMakerDenom: isSet(object.totalMakerDenom) ? String(object.totalMakerDenom) : "",
      totalTakerDenom: isSet(object.totalTakerDenom) ? String(object.totalTakerDenom) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      priceTakerToMaker: isSet(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : ""
    };
  },
  fromPartial(object) {
    var _object$reservesMaker, _object$reservesTaker, _object$totalMakerDen, _object$totalTakerDen, _object$priceTakerToM;
    const message = createBaseLimitOrderTranche();
    message.key = object.key !== undefined && object.key !== null ? LimitOrderTrancheKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = (_object$reservesMaker = object.reservesMakerDenom) !== null && _object$reservesMaker !== void 0 ? _object$reservesMaker : "";
    message.reservesTakerDenom = (_object$reservesTaker = object.reservesTakerDenom) !== null && _object$reservesTaker !== void 0 ? _object$reservesTaker : "";
    message.totalMakerDenom = (_object$totalMakerDen = object.totalMakerDenom) !== null && _object$totalMakerDen !== void 0 ? _object$totalMakerDen : "";
    message.totalTakerDenom = (_object$totalTakerDen = object.totalTakerDenom) !== null && _object$totalTakerDen !== void 0 ? _object$totalTakerDen : "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.priceTakerToMaker = (_object$priceTakerToM = object.priceTakerToMaker) !== null && _object$priceTakerToM !== void 0 ? _object$priceTakerToM : "";
    return message;
  }
};