import { Timestamp } from '../../google/protobuf/timestamp';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Long, isSet, DeepPartial, fromJsonTimestamp } from '../../helpers';
import * as _m0 from 'protobufjs/minimal';
export enum LimitOrderType {
  GOOD_TIL_CANCELLED = 0,
  FILL_OR_KILL = 1,
  IMMEDIATE_OR_CANCEL = 2,
  JUST_IN_TIME = 3,
  GOOD_TIL_TIME = 4,
  UNRECOGNIZED = -1,
}
export function limitOrderTypeFromJSON(object: any): LimitOrderType {
  switch (object) {
    case 0:
    case 'GOOD_TIL_CANCELLED':
      return LimitOrderType.GOOD_TIL_CANCELLED;
    case 1:
    case 'FILL_OR_KILL':
      return LimitOrderType.FILL_OR_KILL;
    case 2:
    case 'IMMEDIATE_OR_CANCEL':
      return LimitOrderType.IMMEDIATE_OR_CANCEL;
    case 3:
    case 'JUST_IN_TIME':
      return LimitOrderType.JUST_IN_TIME;
    case 4:
    case 'GOOD_TIL_TIME':
      return LimitOrderType.GOOD_TIL_TIME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return LimitOrderType.UNRECOGNIZED;
  }
}
export function limitOrderTypeToJSON(object: LimitOrderType): string {
  switch (object) {
    case LimitOrderType.GOOD_TIL_CANCELLED:
      return 'GOOD_TIL_CANCELLED';
    case LimitOrderType.FILL_OR_KILL:
      return 'FILL_OR_KILL';
    case LimitOrderType.IMMEDIATE_OR_CANCEL:
      return 'IMMEDIATE_OR_CANCEL';
    case LimitOrderType.JUST_IN_TIME:
      return 'JUST_IN_TIME';
    case LimitOrderType.GOOD_TIL_TIME:
      return 'GOOD_TIL_TIME';
    case LimitOrderType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
export interface DepositOptions {
  disable_autoswap: boolean;
}
export interface MsgDexDeposit {
  creator: string;
  receiver: string;
  tokenA: string;
  tokenB: string;
  amountsA: string[];
  amountsB: string[];
  tickIndexesAToB: Long[];
  fees: Long[];
  Options: DepositOptions[];
}
export interface MsgDexDepositResponse {
  Reserve0Deposited: string[];
  Reserve1Deposited: string[];
}
export interface MsgWithdrawal {
  creator: string;
  receiver: string;
  tokenA: string;
  tokenB: string;
  sharesToRemove: string[];
  tickIndexesAToB: Long[];
  fees: Long[];
}
export interface MsgWithdrawalResponse {}
export interface MsgPlaceLimitOrder {
  creator: string;
  receiver: string;
  tokenIn: string;
  tokenOut: string;
  tickIndexInToOut: Long;
  amountIn: string;
  orderType: LimitOrderType;
  /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
  expirationTime?: Timestamp;
  maxAmountOut?: string;
}
export interface MsgPlaceLimitOrderResponse {
  trancheKey: string;
  /** Total amount of coin used for the limit order */
  coinIn: Coin;
  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after executing the
   * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
   */
  takerCoinOut: Coin;
}
export interface MsgWithdrawFilledLimitOrder {
  creator: string;
  trancheKey: string;
}
export interface MsgWithdrawFilledLimitOrderResponse {}
export interface MsgCancelLimitOrder {
  creator: string;
  trancheKey: string;
}
export interface MsgCancelLimitOrderResponse {}
export interface MultiHopRoute {
  hops: string[];
}
export interface MsgMultiHopSwap {
  creator: string;
  receiver: string;
  routes: MultiHopRoute[];
  amountIn: string;
  exitLimitPrice: string;
  /**
   * If pickBestRoute == true then all routes are run and the route with the best price is chosen
   * otherwise, the first succesful route is used.
   */
  pickBestRoute: boolean;
}
export interface MsgMultiHopSwapResponse {
  coinOut: Coin;
}
function createBaseDepositOptions(): DepositOptions {
  return {
    disable_autoswap: false
  };
}
export const DepositOptions = {
  encode(message: DepositOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disable_autoswap === true) {
      writer.uint32(8).bool(message.disable_autoswap);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): DepositOptions {
    return {
      disable_autoswap: isSet(object.disable_autoswap) ? Boolean(object.disable_autoswap) : false
    };
  },
  fromPartial(object: DeepPartial<DepositOptions>): DepositOptions {
    const message = createBaseDepositOptions();
    message.disable_autoswap = object.disable_autoswap ?? false;
    return message;
  }
};
function createBaseMsgDexDeposit(): MsgDexDeposit {
  return {
    creator: '',
    receiver: '',
    tokenA: '',
    tokenB: '',
    amountsA: [],
    amountsB: [],
    tickIndexesAToB: [],
    fees: [],
    Options: []
  };
}
export const MsgDexDeposit = {
  encode(message: MsgDexDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== '') {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== '') {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.amountsA) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.amountsB) {
      writer.uint32(50).string(v!);
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
      DepositOptions.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDexDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDexDeposit();
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
              message.tickIndexesAToB.push((reader.int64() as Long));
            }
          } else {
            message.tickIndexesAToB.push((reader.int64() as Long));
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push((reader.uint64() as Long));
            }
          } else {
            message.fees.push((reader.uint64() as Long));
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
  fromJSON(object: any): MsgDexDeposit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : '',
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : '',
      amountsA: Array.isArray(object?.amountsA) ? object.amountsA.map((e: any) => String(e)) : [],
      amountsB: Array.isArray(object?.amountsB) ? object.amountsB.map((e: any) => String(e)) : [],
      tickIndexesAToB: Array.isArray(object?.tickIndexesAToB) ? object.tickIndexesAToB.map((e: any) => Long.fromValue(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Long.fromValue(e)) : [],
      Options: Array.isArray(object?.Options) ? object.Options.map((e: any) => DepositOptions.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgDexDeposit>): MsgDexDeposit {
    const message = createBaseMsgDexDeposit();
    message.creator = object.creator ?? '';
    message.receiver = object.receiver ?? '';
    message.tokenA = object.tokenA ?? '';
    message.tokenB = object.tokenB ?? '';
    message.amountsA = object.amountsA?.map(e => e) || [];
    message.amountsB = object.amountsB?.map(e => e) || [];
    message.tickIndexesAToB = object.tickIndexesAToB?.map(e => Long.fromValue(e)) || [];
    message.fees = object.fees?.map(e => Long.fromValue(e)) || [];
    message.Options = object.Options?.map(e => DepositOptions.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgDexDepositResponse(): MsgDexDepositResponse {
  return {
    Reserve0Deposited: [],
    Reserve1Deposited: []
  };
}
export const MsgDexDepositResponse = {
  encode(message: MsgDexDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Reserve0Deposited) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.Reserve1Deposited) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDexDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDexDepositResponse();
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
  fromJSON(object: any): MsgDexDepositResponse {
    return {
      Reserve0Deposited: Array.isArray(object?.Reserve0Deposited) ? object.Reserve0Deposited.map((e: any) => String(e)) : [],
      Reserve1Deposited: Array.isArray(object?.Reserve1Deposited) ? object.Reserve1Deposited.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgDexDepositResponse>): MsgDexDepositResponse {
    const message = createBaseMsgDexDepositResponse();
    message.Reserve0Deposited = object.Reserve0Deposited?.map(e => e) || [];
    message.Reserve1Deposited = object.Reserve1Deposited?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgWithdrawal(): MsgWithdrawal {
  return {
    creator: '',
    receiver: '',
    tokenA: '',
    tokenB: '',
    sharesToRemove: [],
    tickIndexesAToB: [],
    fees: []
  };
}
export const MsgWithdrawal = {
  encode(message: MsgWithdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== '') {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== '') {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.sharesToRemove) {
      writer.uint32(42).string(v!);
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
              message.tickIndexesAToB.push((reader.int64() as Long));
            }
          } else {
            message.tickIndexesAToB.push((reader.int64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push((reader.uint64() as Long));
            }
          } else {
            message.fees.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : '',
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : '',
      sharesToRemove: Array.isArray(object?.sharesToRemove) ? object.sharesToRemove.map((e: any) => String(e)) : [],
      tickIndexesAToB: Array.isArray(object?.tickIndexesAToB) ? object.tickIndexesAToB.map((e: any) => Long.fromValue(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MsgWithdrawal>): MsgWithdrawal {
    const message = createBaseMsgWithdrawal();
    message.creator = object.creator ?? '';
    message.receiver = object.receiver ?? '';
    message.tokenA = object.tokenA ?? '';
    message.tokenB = object.tokenB ?? '';
    message.sharesToRemove = object.sharesToRemove?.map(e => e) || [];
    message.tickIndexesAToB = object.tickIndexesAToB?.map(e => Long.fromValue(e)) || [];
    message.fees = object.fees?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgWithdrawalResponse(): MsgWithdrawalResponse {
  return {};
}
export const MsgWithdrawalResponse = {
  encode(_: MsgWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(_: any): MsgWithdrawalResponse {
    return {};
  },
  fromPartial(_: DeepPartial<MsgWithdrawalResponse>): MsgWithdrawalResponse {
    const message = createBaseMsgWithdrawalResponse();
    return message;
  }
};
function createBaseMsgPlaceLimitOrder(): MsgPlaceLimitOrder {
  return {
    creator: '',
    receiver: '',
    tokenIn: '',
    tokenOut: '',
    tickIndexInToOut: Long.ZERO,
    amountIn: '',
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: undefined
  };
}
export const MsgPlaceLimitOrder = {
  encode(message: MsgPlaceLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== '') {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== '') {
      writer.uint32(34).string(message.tokenOut);
    }
    if (!message.tickIndexInToOut.isZero()) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== '') {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
          message.tickIndexInToOut = (reader.int64() as Long);
          break;
        case 7:
          message.amountIn = reader.string();
          break;
        case 8:
          message.orderType = (reader.int32() as any);
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
  fromJSON(object: any): MsgPlaceLimitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : '',
      tickIndexInToOut: isSet(object.tickIndexInToOut) ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : '',
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      maxAmountOut: isSet(object.maxAmountOut) ? String(object.maxAmountOut) : undefined
    };
  },
  fromPartial(object: DeepPartial<MsgPlaceLimitOrder>): MsgPlaceLimitOrder {
    const message = createBaseMsgPlaceLimitOrder();
    message.creator = object.creator ?? '';
    message.receiver = object.receiver ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.tokenOut = object.tokenOut ?? '';
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO;
    message.amountIn = object.amountIn ?? '';
    message.orderType = object.orderType ?? 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = object.maxAmountOut ?? undefined;
    return message;
  }
};
function createBaseMsgPlaceLimitOrderResponse(): MsgPlaceLimitOrderResponse {
  return {
    trancheKey: '',
    coinIn: Coin.fromPartial({}),
    takerCoinOut: Coin.fromPartial({})
  };
}
export const MsgPlaceLimitOrderResponse = {
  encode(message: MsgPlaceLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trancheKey !== '') {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): MsgPlaceLimitOrderResponse {
    return {
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : '',
      coinIn: Coin.fromJSON(object.coinIn),
      takerCoinOut:  Coin.fromJSON(object.takerCoinOut),
    };
  },
  fromPartial(object: DeepPartial<MsgPlaceLimitOrderResponse>): MsgPlaceLimitOrderResponse {
    const message = createBaseMsgPlaceLimitOrderResponse();
    message.trancheKey = object.trancheKey ?? '';
    message.coinIn = Coin.fromPartial(object?.coinIn ? object?.coinIn : {denom: undefined, amount: undefined})
    message.takerCoinOut =Coin.fromPartial(object?.coinIn ? object?.coinIn : {denom: undefined, amount: undefined})
    return message;
  }
};
function createBaseMsgWithdrawFilledLimitOrder(): MsgWithdrawFilledLimitOrder {
  return {
    creator: '',
    trancheKey: ''
  };
}
export const MsgWithdrawFilledLimitOrder = {
  encode(message: MsgWithdrawFilledLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== '') {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): MsgWithdrawFilledLimitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ''
    };
  },
  fromPartial(object: DeepPartial<MsgWithdrawFilledLimitOrder>): MsgWithdrawFilledLimitOrder {
    const message = createBaseMsgWithdrawFilledLimitOrder();
    message.creator = object.creator ?? '';
    message.trancheKey = object.trancheKey ?? '';
    return message;
  }
};
function createBaseMsgWithdrawFilledLimitOrderResponse(): MsgWithdrawFilledLimitOrderResponse {
  return {};
}
export const MsgWithdrawFilledLimitOrderResponse = {
  encode(_: MsgWithdrawFilledLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(_: any): MsgWithdrawFilledLimitOrderResponse {
    return {};
  },
  fromPartial(_: DeepPartial<MsgWithdrawFilledLimitOrderResponse>): MsgWithdrawFilledLimitOrderResponse {
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    return message;
  }
};
function createBaseMsgCancelLimitOrder(): MsgCancelLimitOrder {
  return {
    creator: '',
    trancheKey: ''
  };
}
export const MsgCancelLimitOrder = {
  encode(message: MsgCancelLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== '') {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): MsgCancelLimitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ''
    };
  },
  fromPartial(object: DeepPartial<MsgCancelLimitOrder>): MsgCancelLimitOrder {
    const message = createBaseMsgCancelLimitOrder();
    message.creator = object.creator ?? '';
    message.trancheKey = object.trancheKey ?? '';
    return message;
  }
};
function createBaseMsgCancelLimitOrderResponse(): MsgCancelLimitOrderResponse {
  return {};
}
export const MsgCancelLimitOrderResponse = {
  encode(_: MsgCancelLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(_: any): MsgCancelLimitOrderResponse {
    return {};
  },
  fromPartial(_: DeepPartial<MsgCancelLimitOrderResponse>): MsgCancelLimitOrderResponse {
    const message = createBaseMsgCancelLimitOrderResponse();
    return message;
  }
};
function createBaseMultiHopRoute(): MultiHopRoute {
  return {
    hops: []
  };
}
export const MultiHopRoute = {
  encode(message: MultiHopRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hops) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MultiHopRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): MultiHopRoute {
    return {
      hops: Array.isArray(object?.hops) ? object.hops.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: DeepPartial<MultiHopRoute>): MultiHopRoute {
    const message = createBaseMultiHopRoute();
    message.hops = object.hops?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgMultiHopSwap(): MsgMultiHopSwap {
  return {
    creator: '',
    receiver: '',
    routes: [],
    amountIn: '',
    exitLimitPrice: '',
    pickBestRoute: false
  };
}
export const MsgMultiHopSwap = {
  encode(message: MsgMultiHopSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== '') {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== '') {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): MsgMultiHopSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : '',
      exitLimitPrice: isSet(object.exitLimitPrice) ? String(object.exitLimitPrice) : '',
      pickBestRoute: isSet(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false
    };
  },
  fromPartial(object: DeepPartial<MsgMultiHopSwap>): MsgMultiHopSwap {
    const message = createBaseMsgMultiHopSwap();
    message.creator = object.creator ?? '';
    message.receiver = object.receiver ?? '';
    message.routes = object.routes?.map(e => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? '';
    message.exitLimitPrice = object.exitLimitPrice ?? '';
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  }
};
function createBaseMsgMultiHopSwapResponse(): MsgMultiHopSwapResponse {
  return {
    coinOut: Coin.fromPartial({})
  };
}
export const MsgMultiHopSwapResponse = {
  encode(message: MsgMultiHopSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): MsgMultiHopSwapResponse {
    return {
      coinOut: Coin.fromJSON(object?.coinOut ? object?.coinOut : {denom: undefined, amount: undefined})
    };
  },
  fromPartial(object: DeepPartial<MsgMultiHopSwapResponse>): MsgMultiHopSwapResponse {
    const message = createBaseMsgMultiHopSwapResponse();
    message.coinOut = Coin.fromPartial(object?.coinOut ? object?.coinOut : {denom: undefined, amount: undefined})
    return message;
  }
};