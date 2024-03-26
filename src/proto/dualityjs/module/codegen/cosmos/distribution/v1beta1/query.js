import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */

/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */

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
function createBaseQueryValidatorDistributionInfoRequest() {
  return {
    validator_address: ""
  };
}
export const QueryValidatorDistributionInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$validator_add;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    return message;
  }
};
function createBaseQueryValidatorDistributionInfoResponse() {
  return {
    operator_address: "",
    self_bond_rewards: [],
    commission: []
  };
}
export const QueryValidatorDistributionInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    for (const v of message.self_bond_rewards) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;
        case 2:
          message.self_bond_rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
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
      operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
      self_bond_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.self_bond_rewards) ? object.self_bond_rewards.map(e => DecCoin.fromJSON(e)) : [],
      commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$operator_addr, _object$self_bond_rew, _object$commission;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operator_address = (_object$operator_addr = object.operator_address) !== null && _object$operator_addr !== void 0 ? _object$operator_addr : "";
    message.self_bond_rewards = ((_object$self_bond_rew = object.self_bond_rewards) === null || _object$self_bond_rew === void 0 ? void 0 : _object$self_bond_rew.map(e => DecCoin.fromPartial(e))) || [];
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
  return {
    validator_address: ""
  };
}
export const QueryValidatorOutstandingRewardsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$validator_add2;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    return message;
  }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
  return {
    rewards: ValidatorOutstandingRewards.fromPartial({})
  };
}
export const QueryValidatorOutstandingRewardsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
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
      rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  }
};
function createBaseQueryValidatorCommissionRequest() {
  return {
    validator_address: ""
  };
}
export const QueryValidatorCommissionRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$validator_add3;
    const message = createBaseQueryValidatorCommissionRequest();
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    return message;
  }
};
function createBaseQueryValidatorCommissionResponse() {
  return {
    commission: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const QueryValidatorCommissionResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
      commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = object.commission !== undefined && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
    return message;
  }
};
function createBaseQueryValidatorSlashesRequest() {
  return {
    validator_address: "",
    starting_height: Long.UZERO,
    ending_height: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryValidatorSlashesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (!message.starting_height.isZero()) {
      writer.uint32(16).uint64(message.starting_height);
    }
    if (!message.ending_height.isZero()) {
      writer.uint32(24).uint64(message.ending_height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.starting_height = reader.uint64();
          break;
        case 3:
          message.ending_height = reader.uint64();
          break;
        case 4:
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
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_height: isSet(object.starting_height) ? Long.fromValue(object.starting_height) : Long.UZERO,
      ending_height: isSet(object.ending_height) ? Long.fromValue(object.ending_height) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add4;
    const message = createBaseQueryValidatorSlashesRequest();
    message.validator_address = (_object$validator_add4 = object.validator_address) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    message.starting_height = object.starting_height !== undefined && object.starting_height !== null ? Long.fromValue(object.starting_height) : Long.UZERO;
    message.ending_height = object.ending_height !== undefined && object.ending_height !== null ? Long.fromValue(object.ending_height) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryValidatorSlashesResponse() {
  return {
    slashes: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryValidatorSlashesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
      slashes: Array.isArray(object === null || object === void 0 ? void 0 : object.slashes) ? object.slashes.map(e => ValidatorSlashEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$slashes;
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = ((_object$slashes = object.slashes) === null || _object$slashes === void 0 ? void 0 : _object$slashes.map(e => ValidatorSlashEvent.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegationRewardsRequest() {
  return {
    delegator_address: "",
    validator_address: ""
  };
}
export const QueryDelegationRewardsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add, _object$validator_add5;
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_address = (_object$validator_add5 = object.validator_address) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    return message;
  }
};
function createBaseQueryDelegationRewardsResponse() {
  return {
    rewards: []
  };
}
export const QueryDelegationRewardsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$rewards;
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryDelegationTotalRewardsRequest() {
  return {
    delegator_address: ""
  };
}
export const QueryDelegationTotalRewardsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add2;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    return message;
  }
};
function createBaseQueryDelegationTotalRewardsResponse() {
  return {
    rewards: [],
    total: []
  };
}
export const QueryDelegationTotalRewardsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(e => DelegationDelegatorReward.fromJSON(e)) : [],
      total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$rewards2, _object$total;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map(e => DelegationDelegatorReward.fromPartial(e))) || [];
    message.total = ((_object$total = object.total) === null || _object$total === void 0 ? void 0 : _object$total.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegator_address: ""
  };
}
export const QueryDelegatorValidatorsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add3;
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegator_address = (_object$delegator_add3 = object.delegator_address) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    return message;
  }
};
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: []
  };
}
export const QueryDelegatorValidatorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validators) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => e)) || [];
    return message;
  }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
  return {
    delegator_address: ""
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
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
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add4;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegator_address = (_object$delegator_add4 = object.delegator_address) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    return message;
  }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
  return {
    withdraw_address: ""
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.withdraw_address !== "") {
      writer.uint32(10).string(message.withdraw_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraw_address = reader.string();
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
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  fromPartial(object) {
    var _object$withdraw_addr;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdraw_address = (_object$withdraw_addr = object.withdraw_address) !== null && _object$withdraw_addr !== void 0 ? _object$withdraw_addr : "";
    return message;
  }
};
function createBaseQueryCommunityPoolRequest() {
  return {};
}
export const QueryCommunityPoolRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  }
};
function createBaseQueryCommunityPoolResponse() {
  return {
    pool: []
  };
}
export const QueryCommunityPoolResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pool) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
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
      pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool) ? object.pool.map(e => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$pool;
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = ((_object$pool = object.pool) === null || _object$pool === void 0 ? void 0 : _object$pool.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};