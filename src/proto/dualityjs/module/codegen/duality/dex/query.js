import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { MultiHopRoute, limitOrderTypeFromJSON } from "./tx";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params } from "./params";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { LimitOrderTranche } from "./limit_order_tranche";
import { DepositRecord } from "./deposit_record";
import { TickLiquidity } from "./tick_liquidity";
import { PoolReserves } from "./pool_reserves";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Pool } from "./pool";
import { PoolMetadata } from "./pool_metadata";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheUserRequest() {
  return {
    address: "",
    trancheKey: ""
  };
}
export const QueryGetLimitOrderTrancheUserRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object) {
    var _object$address, _object$trancheKey;
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheUserResponse() {
  return {
    LimitOrderTrancheUser: undefined
  };
}
export const QueryGetLimitOrderTrancheUserResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.LimitOrderTrancheUser !== undefined) {
      LimitOrderTrancheUser.encode(message.LimitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTrancheUser = LimitOrderTrancheUser.decode(reader, reader.uint32());
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
      LimitOrderTrancheUser: isSet(object.LimitOrderTrancheUser) ? LimitOrderTrancheUser.fromJSON(object.LimitOrderTrancheUser) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    message.LimitOrderTrancheUser = object.LimitOrderTrancheUser !== undefined && object.LimitOrderTrancheUser !== null ? LimitOrderTrancheUser.fromPartial(object.LimitOrderTrancheUser) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheUserRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheUserRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheUserResponse() {
  return {
    LimitOrderTrancheUser: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheUserResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.LimitOrderTrancheUser) {
      LimitOrderTrancheUser.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTrancheUser.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      LimitOrderTrancheUser: Array.isArray(object === null || object === void 0 ? void 0 : object.LimitOrderTrancheUser) ? object.LimitOrderTrancheUser.map(e => LimitOrderTrancheUser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$LimitOrderTra;
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.LimitOrderTrancheUser = ((_object$LimitOrderTra = object.LimitOrderTrancheUser) === null || _object$LimitOrderTra === void 0 ? void 0 : _object$LimitOrderTra.map(e => LimitOrderTrancheUser.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheRequest() {
  return {
    pairID: "",
    tickIndex: Long.ZERO,
    tokenIn: "",
    trancheKey: ""
  };
}
export const QueryGetLimitOrderTrancheRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object) {
    var _object$pairID, _object$tokenIn, _object$trancheKey2;
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    message.pairID = (_object$pairID = object.pairID) !== null && _object$pairID !== void 0 ? _object$pairID : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.trancheKey = (_object$trancheKey2 = object.trancheKey) !== null && _object$trancheKey2 !== void 0 ? _object$trancheKey2 : "";
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheResponse() {
  return {
    LimitOrderTranche: undefined
  };
}
export const QueryGetLimitOrderTrancheResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.LimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.LimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
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
      LimitOrderTranche: isSet(object.LimitOrderTranche) ? LimitOrderTranche.fromJSON(object.LimitOrderTranche) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    message.LimitOrderTranche = object.LimitOrderTranche !== undefined && object.LimitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.LimitOrderTranche) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheRequest() {
  return {
    pairID: "",
    tokenIn: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$pairID2, _object$tokenIn2;
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    message.pairID = (_object$pairID2 = object.pairID) !== null && _object$pairID2 !== void 0 ? _object$pairID2 : "";
    message.tokenIn = (_object$tokenIn2 = object.tokenIn) !== null && _object$tokenIn2 !== void 0 ? _object$tokenIn2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheResponse() {
  return {
    LimitOrderTranche: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.LimitOrderTranche) {
      LimitOrderTranche.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      LimitOrderTranche: Array.isArray(object === null || object === void 0 ? void 0 : object.LimitOrderTranche) ? object.LimitOrderTranche.map(e => LimitOrderTranche.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$LimitOrderTra2;
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    message.LimitOrderTranche = ((_object$LimitOrderTra2 = object.LimitOrderTranche) === null || _object$LimitOrderTra2 === void 0 ? void 0 : _object$LimitOrderTra2.map(e => LimitOrderTranche.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserDepositsRequest() {
  return {
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUserDepositsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseQueryAllUserDepositsRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserDepositsResponse() {
  return {
    Deposits: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUserDepositsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.Deposits) {
      DepositRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Deposits.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      Deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.Deposits) ? object.Deposits.map(e => DepositRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$Deposits;
    const message = createBaseQueryAllUserDepositsResponse();
    message.Deposits = ((_object$Deposits = object.Deposits) === null || _object$Deposits === void 0 ? void 0 : _object$Deposits.map(e => DepositRecord.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserLimitOrdersRequest() {
  return {
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUserLimitOrdersRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserLimitOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseQueryAllUserLimitOrdersRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserLimitOrdersResponse() {
  return {
    limitOrders: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUserLimitOrdersResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.limitOrders) {
      LimitOrderTrancheUser.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserLimitOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrders.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      limitOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrders) ? object.limitOrders.map(e => LimitOrderTrancheUser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$limitOrders;
    const message = createBaseQueryAllUserLimitOrdersResponse();
    message.limitOrders = ((_object$limitOrders = object.limitOrders) === null || _object$limitOrders === void 0 ? void 0 : _object$limitOrders.map(e => LimitOrderTrancheUser.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllTickLiquidityRequest() {
  return {
    pairID: "",
    tokenIn: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllTickLiquidityRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$pairID3, _object$tokenIn3;
    const message = createBaseQueryAllTickLiquidityRequest();
    message.pairID = (_object$pairID3 = object.pairID) !== null && _object$pairID3 !== void 0 ? _object$pairID3 : "";
    message.tokenIn = (_object$tokenIn3 = object.tokenIn) !== null && _object$tokenIn3 !== void 0 ? _object$tokenIn3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllTickLiquidityResponse() {
  return {
    tickLiquidity: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllTickLiquidityResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.tickLiquidity) {
      TickLiquidity.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickLiquidity.push(TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      tickLiquidity: Array.isArray(object === null || object === void 0 ? void 0 : object.tickLiquidity) ? object.tickLiquidity.map(e => TickLiquidity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$tickLiquidity;
    const message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = ((_object$tickLiquidity = object.tickLiquidity) === null || _object$tickLiquidity === void 0 ? void 0 : _object$tickLiquidity.map(e => TickLiquidity.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetInactiveLimitOrderTrancheRequest() {
  return {
    pairID: "",
    tokenIn: "",
    tickIndex: Long.ZERO,
    trancheKey: ""
  };
}
export const QueryGetInactiveLimitOrderTrancheRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = reader.int64();
          break;
        case 4:
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object) {
    var _object$pairID4, _object$tokenIn4, _object$trancheKey3;
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    message.pairID = (_object$pairID4 = object.pairID) !== null && _object$pairID4 !== void 0 ? _object$pairID4 : "";
    message.tokenIn = (_object$tokenIn4 = object.tokenIn) !== null && _object$tokenIn4 !== void 0 ? _object$tokenIn4 : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.trancheKey = (_object$trancheKey3 = object.trancheKey) !== null && _object$trancheKey3 !== void 0 ? _object$trancheKey3 : "";
    return message;
  }
};
function createBaseQueryGetInactiveLimitOrderTrancheResponse() {
  return {
    inactiveLimitOrderTranche: undefined
  };
}
export const QueryGetInactiveLimitOrderTrancheResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.inactiveLimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
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
      inactiveLimitOrderTranche: isSet(object.inactiveLimitOrderTranche) ? LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche) : undefined;
    return message;
  }
};
function createBaseQueryAllInactiveLimitOrderTrancheRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllInactiveLimitOrderTrancheRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllInactiveLimitOrderTrancheResponse() {
  return {
    inactiveLimitOrderTranche: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllInactiveLimitOrderTrancheResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.inactiveLimitOrderTranche) {
      LimitOrderTranche.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      inactiveLimitOrderTranche: Array.isArray(object === null || object === void 0 ? void 0 : object.inactiveLimitOrderTranche) ? object.inactiveLimitOrderTranche.map(e => LimitOrderTranche.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$inactiveLimit;
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = ((_object$inactiveLimit = object.inactiveLimitOrderTranche) === null || _object$inactiveLimit === void 0 ? void 0 : _object$inactiveLimit.map(e => LimitOrderTranche.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolReservesRequest() {
  return {
    pairID: "",
    tokenIn: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllPoolReservesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$pairID5, _object$tokenIn5;
    const message = createBaseQueryAllPoolReservesRequest();
    message.pairID = (_object$pairID5 = object.pairID) !== null && _object$pairID5 !== void 0 ? _object$pairID5 : "";
    message.tokenIn = (_object$tokenIn5 = object.tokenIn) !== null && _object$tokenIn5 !== void 0 ? _object$tokenIn5 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolReservesResponse() {
  return {
    poolReserves: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllPoolReservesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.poolReserves) {
      PoolReserves.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves.push(PoolReserves.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      poolReserves: Array.isArray(object === null || object === void 0 ? void 0 : object.poolReserves) ? object.poolReserves.map(e => PoolReserves.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$poolReserves;
    const message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = ((_object$poolReserves = object.poolReserves) === null || _object$poolReserves === void 0 ? void 0 : _object$poolReserves.map(e => PoolReserves.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolReservesRequest() {
  return {
    pairID: "",
    tokenIn: "",
    tickIndex: Long.ZERO,
    fee: Long.UZERO
  };
}
export const QueryGetPoolReservesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(32).uint64(message.fee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = reader.int64();
          break;
        case 4:
          message.fee = reader.uint64();
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      fee: isSet(object.fee) ? Long.fromValue(object.fee) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$pairID6, _object$tokenIn6;
    const message = createBaseQueryGetPoolReservesRequest();
    message.pairID = (_object$pairID6 = object.pairID) !== null && _object$pairID6 !== void 0 ? _object$pairID6 : "";
    message.tokenIn = (_object$tokenIn6 = object.tokenIn) !== null && _object$tokenIn6 !== void 0 ? _object$tokenIn6 : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Long.fromValue(object.fee) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetPoolReservesResponse() {
  return {
    poolReserves: undefined
  };
}
export const QueryGetPoolReservesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
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
      poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryGetPoolReservesResponse();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? PoolReserves.fromPartial(object.poolReserves) : undefined;
    return message;
  }
};
function createBaseQueryEstimateMultiHopSwapRequest() {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false
  };
}
export const QueryEstimateMultiHopSwapRequest = {
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
    const message = createBaseQueryEstimateMultiHopSwapRequest();
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
    var _object$creator, _object$receiver, _object$routes, _object$amountIn, _object$exitLimitPric, _object$pickBestRoute;
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(e => MultiHopRoute.fromPartial(e))) || [];
    message.amountIn = (_object$amountIn = object.amountIn) !== null && _object$amountIn !== void 0 ? _object$amountIn : "";
    message.exitLimitPrice = (_object$exitLimitPric = object.exitLimitPrice) !== null && _object$exitLimitPric !== void 0 ? _object$exitLimitPric : "";
    message.pickBestRoute = (_object$pickBestRoute = object.pickBestRoute) !== null && _object$pickBestRoute !== void 0 ? _object$pickBestRoute : false;
    return message;
  }
};
function createBaseQueryEstimateMultiHopSwapResponse() {
  return {
    coinOut: Coin.fromPartial({})
  };
}
export const QueryEstimateMultiHopSwapResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapResponse();
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
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    message.coinOut = object.coinOut !== undefined && object.coinOut !== null ? Coin.fromPartial(object.coinOut) : undefined;
    return message;
  }
};
function createBaseQueryEstimatePlaceLimitOrderRequest() {
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
export const QueryEstimatePlaceLimitOrderRequest = {
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
      writer.uint32(50).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(56).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(74).string(message.maxAmountOut);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
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
        case 6:
          message.amountIn = reader.string();
          break;
        case 7:
          message.orderType = reader.int32();
          break;
        case 8:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
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
    var _object$creator2, _object$receiver2, _object$tokenIn7, _object$tokenOut, _object$amountIn2, _object$orderType, _object$maxAmountOut;
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.receiver = (_object$receiver2 = object.receiver) !== null && _object$receiver2 !== void 0 ? _object$receiver2 : "";
    message.tokenIn = (_object$tokenIn7 = object.tokenIn) !== null && _object$tokenIn7 !== void 0 ? _object$tokenIn7 : "";
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO;
    message.amountIn = (_object$amountIn2 = object.amountIn) !== null && _object$amountIn2 !== void 0 ? _object$amountIn2 : "";
    message.orderType = (_object$orderType = object.orderType) !== null && _object$orderType !== void 0 ? _object$orderType : 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = (_object$maxAmountOut = object.maxAmountOut) !== null && _object$maxAmountOut !== void 0 ? _object$maxAmountOut : undefined;
    return message;
  }
};
function createBaseQueryEstimatePlaceLimitOrderResponse() {
  return {
    totalInCoin: Coin.fromPartial({}),
    swapInCoin: Coin.fromPartial({}),
    swapOutCoin: Coin.fromPartial({})
  };
}
export const QueryEstimatePlaceLimitOrderResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.totalInCoin !== undefined) {
      Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapInCoin !== undefined) {
      Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapOutCoin !== undefined) {
      Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapOutCoin = Coin.decode(reader, reader.uint32());
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
      totalInCoin: isSet(object.totalInCoin) ? Coin.fromJSON(object.totalInCoin) : undefined,
      swapInCoin: isSet(object.swapInCoin) ? Coin.fromJSON(object.swapInCoin) : undefined,
      swapOutCoin: isSet(object.swapOutCoin) ? Coin.fromJSON(object.swapOutCoin) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    message.totalInCoin = object.totalInCoin !== undefined && object.totalInCoin !== null ? Coin.fromPartial(object.totalInCoin) : undefined;
    message.swapInCoin = object.swapInCoin !== undefined && object.swapInCoin !== null ? Coin.fromPartial(object.swapInCoin) : undefined;
    message.swapOutCoin = object.swapOutCoin !== undefined && object.swapOutCoin !== null ? Coin.fromPartial(object.swapOutCoin) : undefined;
    return message;
  }
};
function createBaseQueryPoolRequest() {
  return {
    pairID: "",
    tickIndex: Long.ZERO,
    fee: Long.UZERO
  };
}
export const QueryPoolRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.fee = reader.uint64();
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
      pairID: isSet(object.pairID) ? String(object.pairID) : "",
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      fee: isSet(object.fee) ? Long.fromValue(object.fee) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$pairID7;
    const message = createBaseQueryPoolRequest();
    message.pairID = (_object$pairID7 = object.pairID) !== null && _object$pairID7 !== void 0 ? _object$pairID7 : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Long.fromValue(object.fee) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPoolByIDRequest() {
  return {
    poolID: Long.UZERO
  };
}
export const QueryPoolByIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64();
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
      poolID: isSet(object.poolID) ? Long.fromValue(object.poolID) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseQueryPoolByIDRequest();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPoolResponse() {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
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
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolMetadataRequest() {
  return {
    id: Long.UZERO
  };
}
export const QueryGetPoolMetadataRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseQueryGetPoolMetadataRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetPoolMetadataResponse() {
  return {
    PoolMetadata: PoolMetadata.fromPartial({})
  };
}
export const QueryGetPoolMetadataResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.PoolMetadata !== undefined) {
      PoolMetadata.encode(message.PoolMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata = PoolMetadata.decode(reader, reader.uint32());
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
      PoolMetadata: isSet(object.PoolMetadata) ? PoolMetadata.fromJSON(object.PoolMetadata) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryGetPoolMetadataResponse();
    message.PoolMetadata = object.PoolMetadata !== undefined && object.PoolMetadata !== null ? PoolMetadata.fromPartial(object.PoolMetadata) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolMetadataRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllPoolMetadataRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAllPoolMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolMetadataResponse() {
  return {
    PoolMetadata: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllPoolMetadataResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.PoolMetadata) {
      PoolMetadata.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata.push(PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      PoolMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.PoolMetadata) ? object.PoolMetadata.map(e => PoolMetadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$PoolMetadata;
    const message = createBaseQueryAllPoolMetadataResponse();
    message.PoolMetadata = ((_object$PoolMetadata = object.PoolMetadata) === null || _object$PoolMetadata === void 0 ? void 0 : _object$PoolMetadata.map(e => PoolMetadata.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};