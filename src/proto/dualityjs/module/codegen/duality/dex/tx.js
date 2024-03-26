import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export let LimitOrderType = /*#__PURE__*/function (LimitOrderType) {
  LimitOrderType[LimitOrderType["GOOD_TIL_CANCELLED"] = 0] = "GOOD_TIL_CANCELLED";
  LimitOrderType[LimitOrderType["FILL_OR_KILL"] = 1] = "FILL_OR_KILL";
  LimitOrderType[LimitOrderType["IMMEDIATE_OR_CANCEL"] = 2] = "IMMEDIATE_OR_CANCEL";
  LimitOrderType[LimitOrderType["JUST_IN_TIME"] = 3] = "JUST_IN_TIME";
  LimitOrderType[LimitOrderType["GOOD_TIL_TIME"] = 4] = "GOOD_TIL_TIME";
  LimitOrderType[LimitOrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LimitOrderType;
}({});
export function limitOrderTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "GOOD_TIL_CANCELLED":
      return LimitOrderType.GOOD_TIL_CANCELLED;
    case 1:
    case "FILL_OR_KILL":
      return LimitOrderType.FILL_OR_KILL;
    case 2:
    case "IMMEDIATE_OR_CANCEL":
      return LimitOrderType.IMMEDIATE_OR_CANCEL;
    case 3:
    case "JUST_IN_TIME":
      return LimitOrderType.JUST_IN_TIME;
    case 4:
    case "GOOD_TIL_TIME":
      return LimitOrderType.GOOD_TIL_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LimitOrderType.UNRECOGNIZED;
  }
}
export function limitOrderTypeToJSON(object) {
  switch (object) {
    case LimitOrderType.GOOD_TIL_CANCELLED:
      return "GOOD_TIL_CANCELLED";
    case LimitOrderType.FILL_OR_KILL:
      return "FILL_OR_KILL";
    case LimitOrderType.IMMEDIATE_OR_CANCEL:
      return "IMMEDIATE_OR_CANCEL";
    case LimitOrderType.JUST_IN_TIME:
      return "JUST_IN_TIME";
    case LimitOrderType.GOOD_TIL_TIME:
      return "GOOD_TIL_TIME";
    case LimitOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseDepositOptions() {
  return {
    disable_autoswap: false
  };
}
export const DepositOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.disable_autoswap === true) {
      writer.uint32(8).bool(message.disable_autoswap);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disable_autoswap = reader.bool();
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
      disable_autoswap: isSet(object.disable_autoswap) ? Boolean(object.disable_autoswap) : false
    };
  },
  fromPartial(object) {
    var _object$disable_autos;
    const message = createBaseDepositOptions();
    message.disable_autoswap = (_object$disable_autos = object.disable_autoswap) !== null && _object$disable_autos !== void 0 ? _object$disable_autos : false;
    return message;
  }
};
function createBaseMsgDeposit() {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    amountsA: [],
    amountsB: [],
    tickIndexesAToB: [],
    fees: [],
    Options: []
  };
}
export const MsgDeposit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.amountsA) {
      writer.uint32(42).string(v);
    }
    for (const v of message.amountsB) {
      writer.uint32(50).string(v);
    }
    writer.uint32(58).fork();
    for (const v of message.tickIndexesAToB) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.fees) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.Options) {
      DepositOptions.encode(v, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.amountsA.push(reader.string());
          break;
        case 6:
          message.amountsB.push(reader.string());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(reader.int64());
            }
          } else {
            message.tickIndexesAToB.push(reader.int64());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.uint64());
            }
          } else {
            message.fees.push(reader.uint64());
          }
          break;
        case 9:
          message.Options.push(DepositOptions.decode(reader, reader.uint32()));
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : "",
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : "",
      amountsA: Array.isArray(object === null || object === void 0 ? void 0 : object.amountsA) ? object.amountsA.map(e => String(e)) : [],
      amountsB: Array.isArray(object === null || object === void 0 ? void 0 : object.amountsB) ? object.amountsB.map(e => String(e)) : [],
      tickIndexesAToB: Array.isArray(object === null || object === void 0 ? void 0 : object.tickIndexesAToB) ? object.tickIndexesAToB.map(e => Long.fromValue(e)) : [],
      fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map(e => Long.fromValue(e)) : [],
      Options: Array.isArray(object === null || object === void 0 ? void 0 : object.Options) ? object.Options.map(e => DepositOptions.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$creator, _object$receiver, _object$tokenA, _object$tokenB, _object$amountsA, _object$amountsB, _object$tickIndexesAT, _object$fees, _object$Options;
    const message = createBaseMsgDeposit();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    message.tokenA = (_object$tokenA = object.tokenA) !== null && _object$tokenA !== void 0 ? _object$tokenA : "";
    message.tokenB = (_object$tokenB = object.tokenB) !== null && _object$tokenB !== void 0 ? _object$tokenB : "";
    message.amountsA = ((_object$amountsA = object.amountsA) === null || _object$amountsA === void 0 ? void 0 : _object$amountsA.map(e => e)) || [];
    message.amountsB = ((_object$amountsB = object.amountsB) === null || _object$amountsB === void 0 ? void 0 : _object$amountsB.map(e => e)) || [];
    message.tickIndexesAToB = ((_object$tickIndexesAT = object.tickIndexesAToB) === null || _object$tickIndexesAT === void 0 ? void 0 : _object$tickIndexesAT.map(e => Long.fromValue(e))) || [];
    message.fees = ((_object$fees = object.fees) === null || _object$fees === void 0 ? void 0 : _object$fees.map(e => Long.fromValue(e))) || [];
    message.Options = ((_object$Options = object.Options) === null || _object$Options === void 0 ? void 0 : _object$Options.map(e => DepositOptions.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgDepositResponse() {
  return {
    Reserve0Deposited: [],
    Reserve1Deposited: []
  };
}
export const MsgDepositResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.Reserve0Deposited) {
      writer.uint32(10).string(v);
    }
    for (const v of message.Reserve1Deposited) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Reserve0Deposited.push(reader.string());
          break;
        case 2:
          message.Reserve1Deposited.push(reader.string());
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
      Reserve0Deposited: Array.isArray(object === null || object === void 0 ? void 0 : object.Reserve0Deposited) ? object.Reserve0Deposited.map(e => String(e)) : [],
      Reserve1Deposited: Array.isArray(object === null || object === void 0 ? void 0 : object.Reserve1Deposited) ? object.Reserve1Deposited.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$Reserve0Depos, _object$Reserve1Depos;
    const message = createBaseMsgDepositResponse();
    message.Reserve0Deposited = ((_object$Reserve0Depos = object.Reserve0Deposited) === null || _object$Reserve0Depos === void 0 ? void 0 : _object$Reserve0Depos.map(e => e)) || [];
    message.Reserve1Deposited = ((_object$Reserve1Depos = object.Reserve1Deposited) === null || _object$Reserve1Depos === void 0 ? void 0 : _object$Reserve1Depos.map(e => e)) || [];
    return message;
  }
};
function createBaseMsgWithdrawal() {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    sharesToRemove: [],
    tickIndexesAToB: [],
    fees: []
  };
}
export const MsgWithdrawal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.sharesToRemove) {
      writer.uint32(42).string(v);
    }
    writer.uint32(50).fork();
    for (const v of message.tickIndexesAToB) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.fees) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.sharesToRemove.push(reader.string());
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(reader.int64());
            }
          } else {
            message.tickIndexesAToB.push(reader.int64());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.uint64());
            }
          } else {
            message.fees.push(reader.uint64());
          }
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : "",
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : "",
      sharesToRemove: Array.isArray(object === null || object === void 0 ? void 0 : object.sharesToRemove) ? object.sharesToRemove.map(e => String(e)) : [],
      tickIndexesAToB: Array.isArray(object === null || object === void 0 ? void 0 : object.tickIndexesAToB) ? object.tickIndexesAToB.map(e => Long.fromValue(e)) : [],
      fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$creator2, _object$receiver2, _object$tokenA2, _object$tokenB2, _object$sharesToRemov, _object$tickIndexesAT2, _object$fees2;
    const message = createBaseMsgWithdrawal();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.receiver = (_object$receiver2 = object.receiver) !== null && _object$receiver2 !== void 0 ? _object$receiver2 : "";
    message.tokenA = (_object$tokenA2 = object.tokenA) !== null && _object$tokenA2 !== void 0 ? _object$tokenA2 : "";
    message.tokenB = (_object$tokenB2 = object.tokenB) !== null && _object$tokenB2 !== void 0 ? _object$tokenB2 : "";
    message.sharesToRemove = ((_object$sharesToRemov = object.sharesToRemove) === null || _object$sharesToRemov === void 0 ? void 0 : _object$sharesToRemov.map(e => e)) || [];
    message.tickIndexesAToB = ((_object$tickIndexesAT2 = object.tickIndexesAToB) === null || _object$tickIndexesAT2 === void 0 ? void 0 : _object$tickIndexesAT2.map(e => Long.fromValue(e))) || [];
    message.fees = ((_object$fees2 = object.fees) === null || _object$fees2 === void 0 ? void 0 : _object$fees2.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseMsgWithdrawalResponse() {
  return {};
}
export const MsgWithdrawalResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgWithdrawalResponse();
    return message;
  }
};
function createBaseMsgPlaceLimitOrder() {
  return {
    creator: "",
    receiver: "",
    tokenIn: "",
    tokenOut: "",
    tickIndexInToOut: Long.ZERO,
    amountIn: "",
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: undefined
  };
}
export const MsgPlaceLimitOrder = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (!message.tickIndexInToOut.isZero()) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(58).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(82).string(message.maxAmountOut);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.tickIndexInToOut = reader.int64();
          break;
        case 7:
          message.amountIn = reader.string();
          break;
        case 8:
          message.orderType = reader.int32();
          break;
        case 9:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.maxAmountOut = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      tickIndexInToOut: isSet(object.tickIndexInToOut) ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      maxAmountOut: isSet(object.maxAmountOut) ? String(object.maxAmountOut) : undefined
    };
  },
  fromPartial(object) {
    var _object$creator3, _object$receiver3, _object$tokenIn, _object$tokenOut, _object$amountIn, _object$orderType, _object$maxAmountOut;
    const message = createBaseMsgPlaceLimitOrder();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.receiver = (_object$receiver3 = object.receiver) !== null && _object$receiver3 !== void 0 ? _object$receiver3 : "";
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO;
    message.amountIn = (_object$amountIn = object.amountIn) !== null && _object$amountIn !== void 0 ? _object$amountIn : "";
    message.orderType = (_object$orderType = object.orderType) !== null && _object$orderType !== void 0 ? _object$orderType : 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = (_object$maxAmountOut = object.maxAmountOut) !== null && _object$maxAmountOut !== void 0 ? _object$maxAmountOut : undefined;
    return message;
  }
};
function createBaseMsgPlaceLimitOrderResponse() {
  return {
    trancheKey: "",
    coinIn: Coin.fromPartial({}),
    takerCoinOut: Coin.fromPartial({})
  };
}
export const MsgPlaceLimitOrderResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.trancheKey !== "") {
      writer.uint32(10).string(message.trancheKey);
    }
    if (message.coinIn !== undefined) {
      Coin.encode(message.coinIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.takerCoinOut !== undefined) {
      Coin.encode(message.takerCoinOut, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trancheKey = reader.string();
          break;
        case 2:
          message.coinIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.takerCoinOut = Coin.decode(reader, reader.uint32());
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
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
      coinIn: isSet(object.coinIn) ? Coin.fromJSON(object.coinIn) : undefined,
      takerCoinOut: isSet(object.takerCoinOut) ? Coin.fromJSON(object.takerCoinOut) : undefined
    };
  },
  fromPartial(object) {
    var _object$trancheKey;
    const message = createBaseMsgPlaceLimitOrderResponse();
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    message.coinIn = object.coinIn !== undefined && object.coinIn !== null ? Coin.fromPartial(object.coinIn) : undefined;
    message.takerCoinOut = object.takerCoinOut !== undefined && object.takerCoinOut !== null ? Coin.fromPartial(object.takerCoinOut) : undefined;
    return message;
  }
};
function createBaseMsgWithdrawFilledLimitOrder() {
  return {
    creator: "",
    trancheKey: ""
  };
}
export const MsgWithdrawFilledLimitOrder = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFilledLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object) {
    var _object$creator4, _object$trancheKey2;
    const message = createBaseMsgWithdrawFilledLimitOrder();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.trancheKey = (_object$trancheKey2 = object.trancheKey) !== null && _object$trancheKey2 !== void 0 ? _object$trancheKey2 : "";
    return message;
  }
};
function createBaseMsgWithdrawFilledLimitOrderResponse() {
  return {};
}
export const MsgWithdrawFilledLimitOrderResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    return message;
  }
};
function createBaseMsgCancelLimitOrder() {
  return {
    creator: "",
    trancheKey: ""
  };
}
export const MsgCancelLimitOrder = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object) {
    var _object$creator5, _object$trancheKey3;
    const message = createBaseMsgCancelLimitOrder();
    message.creator = (_object$creator5 = object.creator) !== null && _object$creator5 !== void 0 ? _object$creator5 : "";
    message.trancheKey = (_object$trancheKey3 = object.trancheKey) !== null && _object$trancheKey3 !== void 0 ? _object$trancheKey3 : "";
    return message;
  }
};
function createBaseMsgCancelLimitOrderResponse() {
  return {};
}
export const MsgCancelLimitOrderResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgCancelLimitOrderResponse();
    return message;
  }
};
function createBaseMultiHopRoute() {
  return {
    hops: []
  };
}
export const MultiHopRoute = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.hops) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiHopRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hops.push(reader.string());
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
      hops: Array.isArray(object === null || object === void 0 ? void 0 : object.hops) ? object.hops.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$hops;
    const message = createBaseMultiHopRoute();
    message.hops = ((_object$hops = object.hops) === null || _object$hops === void 0 ? void 0 : _object$hops.map(e => e)) || [];
    return message;
  }
};
function createBaseMsgMultiHopSwap() {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false
  };
}
export const MsgMultiHopSwap = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.exitLimitPrice = reader.string();
          break;
        case 6:
          message.pickBestRoute = reader.bool();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      routes: Array.isArray(object === null || object === void 0 ? void 0 : object.routes) ? object.routes.map(e => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      exitLimitPrice: isSet(object.exitLimitPrice) ? String(object.exitLimitPrice) : "",
      pickBestRoute: isSet(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false
    };
  },
  fromPartial(object) {
    var _object$creator6, _object$receiver4, _object$routes, _object$amountIn2, _object$exitLimitPric, _object$pickBestRoute;
    const message = createBaseMsgMultiHopSwap();
    message.creator = (_object$creator6 = object.creator) !== null && _object$creator6 !== void 0 ? _object$creator6 : "";
    message.receiver = (_object$receiver4 = object.receiver) !== null && _object$receiver4 !== void 0 ? _object$receiver4 : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(e => MultiHopRoute.fromPartial(e))) || [];
    message.amountIn = (_object$amountIn2 = object.amountIn) !== null && _object$amountIn2 !== void 0 ? _object$amountIn2 : "";
    message.exitLimitPrice = (_object$exitLimitPric = object.exitLimitPrice) !== null && _object$exitLimitPric !== void 0 ? _object$exitLimitPric : "";
    message.pickBestRoute = (_object$pickBestRoute = object.pickBestRoute) !== null && _object$pickBestRoute !== void 0 ? _object$pickBestRoute : false;
    return message;
  }
};
function createBaseMsgMultiHopSwapResponse() {
  return {
    coinOut: Coin.fromPartial({})
  };
}
export const MsgMultiHopSwapResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = Coin.decode(reader, reader.uint32());
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
      coinOut: isSet(object.coinOut) ? Coin.fromJSON(object.coinOut) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMsgMultiHopSwapResponse();
    message.coinOut = object.coinOut !== undefined && object.coinOut !== null ? Coin.fromPartial(object.coinOut) : undefined;
    return message;
  }
};