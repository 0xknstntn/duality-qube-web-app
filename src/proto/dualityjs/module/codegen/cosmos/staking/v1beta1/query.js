import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */

/** QueryValidatorRequest is response type for the Query/Validator RPC method */

/** QueryValidatorResponse is response type for the Query/Validator RPC method */

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */

/** QueryPoolRequest is request type for the Query/Pool RPC method. */

/** QueryPoolResponse is response type for the Query/Pool RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryValidatorsRequest() {
  return {
    status: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryValidatorsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
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
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseQueryValidatorsRequest();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryValidatorsResponse() {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryValidatorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseQueryValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryValidatorRequest() {
  return {
    validator_addr: ""
  };
}
export const QueryValidatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
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
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial(object) {
    var _object$validator_add;
    const message = createBaseQueryValidatorRequest();
    message.validator_addr = (_object$validator_add = object.validator_addr) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    return message;
  }
};
function createBaseQueryValidatorResponse() {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryValidatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
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
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }
};
function createBaseQueryValidatorDelegationsRequest() {
  return {
    validator_addr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryValidatorDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
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
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add2;
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validator_addr = (_object$validator_add2 = object.validator_addr) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryValidatorDelegationsResponse() {
  return {
    delegation_responses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryValidatorDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.delegation_responses) {
      DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
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
      delegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses) ? object.delegation_responses.map(e => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegation_re;
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegation_responses = ((_object$delegation_re = object.delegation_responses) === null || _object$delegation_re === void 0 ? void 0 : _object$delegation_re.map(e => DelegationResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
  return {
    validator_addr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
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
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validator_add3;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validator_addr = (_object$validator_add3 = object.validator_addr) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
  return {
    unbonding_responses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.unbonding_responses) {
      UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
      unbonding_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses) ? object.unbonding_responses.map(e => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$unbonding_res;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbonding_responses = ((_object$unbonding_res = object.unbonding_responses) === null || _object$unbonding_res === void 0 ? void 0 : _object$unbonding_res.map(e => UnbondingDelegation.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegationRequest() {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}
export const QueryDelegationRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.validator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add, _object$validator_add4;
    const message = createBaseQueryDelegationRequest();
    message.delegator_addr = (_object$delegator_add = object.delegator_addr) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_addr = (_object$validator_add4 = object.validator_addr) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    return message;
  }
};
function createBaseQueryDelegationResponse() {
  return {
    delegation_response: DelegationResponse.fromPartial({})
  };
}
export const QueryDelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegation_response !== undefined) {
      DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_response = DelegationResponse.decode(reader, reader.uint32());
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
      delegation_response: isSet(object.delegation_response) ? DelegationResponse.fromJSON(object.delegation_response) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationResponse();
    message.delegation_response = object.delegation_response !== undefined && object.delegation_response !== null ? DelegationResponse.fromPartial(object.delegation_response) : undefined;
    return message;
  }
};
function createBaseQueryUnbondingDelegationRequest() {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}
export const QueryUnbondingDelegationRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.validator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add2, _object$validator_add5;
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegator_addr = (_object$delegator_add2 = object.delegator_addr) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_addr = (_object$validator_add5 = object.validator_addr) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    return message;
  }
};
function createBaseQueryUnbondingDelegationResponse() {
  return {
    unbond: UnbondingDelegation.fromPartial({})
  };
}
export const QueryUnbondingDelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
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
      unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorDelegationsRequest() {
  return {
    delegator_addr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDelegatorDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add3;
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegator_addr = (_object$delegator_add3 = object.delegator_addr) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorDelegationsResponse() {
  return {
    delegation_responses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDelegatorDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.delegation_responses) {
      DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
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
      delegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses) ? object.delegation_responses.map(e => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegation_re2;
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegation_responses = ((_object$delegation_re2 = object.delegation_responses) === null || _object$delegation_re2 === void 0 ? void 0 : _object$delegation_re2.map(e => DelegationResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
  return {
    delegator_addr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add4;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegator_addr = (_object$delegator_add4 = object.delegator_addr) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
  return {
    unbonding_responses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.unbonding_responses) {
      UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
      unbonding_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses) ? object.unbonding_responses.map(e => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$unbonding_res2;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbonding_responses = ((_object$unbonding_res2 = object.unbonding_responses) === null || _object$unbonding_res2 === void 0 ? void 0 : _object$unbonding_res2.map(e => UnbondingDelegation.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRedelegationsRequest() {
  return {
    delegator_addr: "",
    src_validator_addr: "",
    dst_validator_addr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryRedelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.src_validator_addr !== "") {
      writer.uint32(18).string(message.src_validator_addr);
    }
    if (message.dst_validator_addr !== "") {
      writer.uint32(26).string(message.dst_validator_addr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.src_validator_addr = reader.string();
          break;
        case 3:
          message.dst_validator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      src_validator_addr: isSet(object.src_validator_addr) ? String(object.src_validator_addr) : "",
      dst_validator_addr: isSet(object.dst_validator_addr) ? String(object.dst_validator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add5, _object$src_validator, _object$dst_validator;
    const message = createBaseQueryRedelegationsRequest();
    message.delegator_addr = (_object$delegator_add5 = object.delegator_addr) !== null && _object$delegator_add5 !== void 0 ? _object$delegator_add5 : "";
    message.src_validator_addr = (_object$src_validator = object.src_validator_addr) !== null && _object$src_validator !== void 0 ? _object$src_validator : "";
    message.dst_validator_addr = (_object$dst_validator = object.dst_validator_addr) !== null && _object$dst_validator !== void 0 ? _object$dst_validator : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRedelegationsResponse() {
  return {
    redelegation_responses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryRedelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.redelegation_responses) {
      RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation_responses.push(RedelegationResponse.decode(reader, reader.uint32()));
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
      redelegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_responses) ? object.redelegation_responses.map(e => RedelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$redelegation_;
    const message = createBaseQueryRedelegationsResponse();
    message.redelegation_responses = ((_object$redelegation_ = object.redelegation_responses) === null || _object$redelegation_ === void 0 ? void 0 : _object$redelegation_.map(e => RedelegationResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegator_addr: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDelegatorValidatorsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.delegator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add6;
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegator_addr = (_object$delegator_add6 = object.delegator_addr) !== null && _object$delegator_add6 !== void 0 ? _object$delegator_add6 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDelegatorValidatorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validators2;
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(e => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDelegatorValidatorRequest() {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}
export const QueryDelegatorValidatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.validator_addr = reader.string();
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
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial(object) {
    var _object$delegator_add7, _object$validator_add6;
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegator_addr = (_object$delegator_add7 = object.delegator_addr) !== null && _object$delegator_add7 !== void 0 ? _object$delegator_add7 : "";
    message.validator_addr = (_object$validator_add6 = object.validator_addr) !== null && _object$validator_add6 !== void 0 ? _object$validator_add6 : "";
    return message;
  }
};
function createBaseQueryDelegatorValidatorResponse() {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryDelegatorValidatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
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
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }
};
function createBaseQueryHistoricalInfoRequest() {
  return {
    height: Long.ZERO
  };
}
export const QueryHistoricalInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseQueryHistoricalInfoResponse() {
  return {
    hist: HistoricalInfo.fromPartial({})
  };
}
export const QueryHistoricalInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
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
      hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  }
};
function createBaseQueryPoolRequest() {
  return {};
}
export const QueryPoolRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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
    const message = createBaseQueryPoolRequest();
    return message;
  }
};
function createBaseQueryPoolResponse() {
  return {
    pool: Pool.fromPartial({})
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