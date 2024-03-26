import { TradePairID } from "./trade_pair_id";
import { limitOrderTypeFromJSON } from "./tx";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseLimitOrderTrancheUser() {
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
  decode(input, length) {
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
          message.tickIndexTakerToMaker = reader.int64();
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
          message.orderType = reader.int32();
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
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
      address: isSet(object.address) ? String(object.address) : "",
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : "",
      sharesWithdrawn: isSet(object.sharesWithdrawn) ? String(object.sharesWithdrawn) : "",
      sharesCancelled: isSet(object.sharesCancelled) ? String(object.sharesCancelled) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1
    };
  },
  fromPartial(object) {
    var _object$trancheKey, _object$address, _object$sharesOwned, _object$sharesWithdra, _object$sharesCancell, _object$orderType;
    const message = createBaseLimitOrderTrancheUser();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? TradePairID.fromPartial(object.tradePairID) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? Long.fromValue(object.tickIndexTakerToMaker) : Long.ZERO;
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.sharesOwned = (_object$sharesOwned = object.sharesOwned) !== null && _object$sharesOwned !== void 0 ? _object$sharesOwned : "";
    message.sharesWithdrawn = (_object$sharesWithdra = object.sharesWithdrawn) !== null && _object$sharesWithdra !== void 0 ? _object$sharesWithdra : "";
    message.sharesCancelled = (_object$sharesCancell = object.sharesCancelled) !== null && _object$sharesCancell !== void 0 ? _object$sharesCancell : "";
    message.orderType = (_object$orderType = object.orderType) !== null && _object$orderType !== void 0 ? _object$orderType : 0;
    return message;
  }
};