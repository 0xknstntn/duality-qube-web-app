"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _staking = require("./staking");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      status: (0, _helpers.isSet)(object.status) ? String(object.status) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$status;
    var message = createBaseQueryValidatorsRequest();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryValidatorsRequest = QueryValidatorsRequest;
function createBaseQueryValidatorsResponse() {
  return {
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _staking.Validator.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(_staking.Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return _staking.Validator.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validators;
    var message = createBaseQueryValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return _staking.Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryValidatorsResponse = QueryValidatorsResponse;
function createBaseQueryValidatorRequest() {
  return {
    validator_addr: ""
  };
}
var QueryValidatorRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      validator_addr: (0, _helpers.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add;
    var message = createBaseQueryValidatorRequest();
    message.validator_addr = (_object$validator_add = object.validator_addr) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    return message;
  }
};
exports.QueryValidatorRequest = QueryValidatorRequest;
function createBaseQueryValidatorResponse() {
  return {
    validator: _staking.Validator.fromPartial({})
  };
}
var QueryValidatorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator !== undefined) {
      _staking.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = _staking.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validator: (0, _helpers.isSet)(object.validator) ? _staking.Validator.fromJSON(object.validator) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? _staking.Validator.fromPartial(object.validator) : undefined;
    return message;
  }
};
exports.QueryValidatorResponse = QueryValidatorResponse;
function createBaseQueryValidatorDelegationsRequest() {
  return {
    validator_addr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorDelegationsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validator_addr: (0, _helpers.isSet)(object.validator_addr) ? String(object.validator_addr) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add2;
    var message = createBaseQueryValidatorDelegationsRequest();
    message.validator_addr = (_object$validator_add2 = object.validator_addr) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryValidatorDelegationsRequest = QueryValidatorDelegationsRequest;
function createBaseQueryValidatorDelegationsResponse() {
  return {
    delegation_responses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorDelegationsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.delegation_responses),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _staking.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_responses.push(_staking.DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses) ? object.delegation_responses.map(function (e) {
        return _staking.DelegationResponse.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegation_re;
    var message = createBaseQueryValidatorDelegationsResponse();
    message.delegation_responses = ((_object$delegation_re = object.delegation_responses) === null || _object$delegation_re === void 0 ? void 0 : _object$delegation_re.map(function (e) {
      return _staking.DelegationResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryValidatorDelegationsResponse = QueryValidatorDelegationsResponse;
function createBaseQueryValidatorUnbondingDelegationsRequest() {
  return {
    validator_addr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorUnbondingDelegationsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validator_addr: (0, _helpers.isSet)(object.validator_addr) ? String(object.validator_addr) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add3;
    var message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validator_addr = (_object$validator_add3 = object.validator_addr) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryValidatorUnbondingDelegationsRequest = QueryValidatorUnbondingDelegationsRequest;
function createBaseQueryValidatorUnbondingDelegationsResponse() {
  return {
    unbonding_responses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorUnbondingDelegationsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.unbonding_responses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _staking.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_responses.push(_staking.UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      unbonding_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses) ? object.unbonding_responses.map(function (e) {
        return _staking.UnbondingDelegation.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$unbonding_res;
    var message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbonding_responses = ((_object$unbonding_res = object.unbonding_responses) === null || _object$unbonding_res === void 0 ? void 0 : _object$unbonding_res.map(function (e) {
      return _staking.UnbondingDelegation.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryValidatorUnbondingDelegationsResponse = QueryValidatorUnbondingDelegationsResponse;
function createBaseQueryDelegationRequest() {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}
var QueryDelegationRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: (0, _helpers.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add, _object$validator_add4;
    var message = createBaseQueryDelegationRequest();
    message.delegator_addr = (_object$delegator_add = object.delegator_addr) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_addr = (_object$validator_add4 = object.validator_addr) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    return message;
  }
};
exports.QueryDelegationRequest = QueryDelegationRequest;
function createBaseQueryDelegationResponse() {
  return {
    delegation_response: _staking.DelegationResponse.fromPartial({})
  };
}
var QueryDelegationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegation_response !== undefined) {
      _staking.DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_response = _staking.DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegation_response: (0, _helpers.isSet)(object.delegation_response) ? _staking.DelegationResponse.fromJSON(object.delegation_response) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDelegationResponse();
    message.delegation_response = object.delegation_response !== undefined && object.delegation_response !== null ? _staking.DelegationResponse.fromPartial(object.delegation_response) : undefined;
    return message;
  }
};
exports.QueryDelegationResponse = QueryDelegationResponse;
function createBaseQueryUnbondingDelegationRequest() {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}
var QueryUnbondingDelegationRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: (0, _helpers.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add2, _object$validator_add5;
    var message = createBaseQueryUnbondingDelegationRequest();
    message.delegator_addr = (_object$delegator_add2 = object.delegator_addr) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_addr = (_object$validator_add5 = object.validator_addr) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    return message;
  }
};
exports.QueryUnbondingDelegationRequest = QueryUnbondingDelegationRequest;
function createBaseQueryUnbondingDelegationResponse() {
  return {
    unbond: _staking.UnbondingDelegation.fromPartial({})
  };
}
var QueryUnbondingDelegationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.unbond !== undefined) {
      _staking.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = _staking.UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      unbond: (0, _helpers.isSet)(object.unbond) ? _staking.UnbondingDelegation.fromJSON(object.unbond) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? _staking.UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  }
};
exports.QueryUnbondingDelegationResponse = QueryUnbondingDelegationResponse;
function createBaseQueryDelegatorDelegationsRequest() {
  return {
    delegator_addr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDelegatorDelegationsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add3;
    var message = createBaseQueryDelegatorDelegationsRequest();
    message.delegator_addr = (_object$delegator_add3 = object.delegator_addr) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDelegatorDelegationsRequest = QueryDelegatorDelegationsRequest;
function createBaseQueryDelegatorDelegationsResponse() {
  return {
    delegation_responses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDelegatorDelegationsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.delegation_responses),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _staking.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_responses.push(_staking.DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses) ? object.delegation_responses.map(function (e) {
        return _staking.DelegationResponse.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegation_re2;
    var message = createBaseQueryDelegatorDelegationsResponse();
    message.delegation_responses = ((_object$delegation_re2 = object.delegation_responses) === null || _object$delegation_re2 === void 0 ? void 0 : _object$delegation_re2.map(function (e) {
      return _staking.DelegationResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDelegatorDelegationsResponse = QueryDelegatorDelegationsResponse;
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
  return {
    delegator_addr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDelegatorUnbondingDelegationsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add4;
    var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegator_addr = (_object$delegator_add4 = object.delegator_addr) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDelegatorUnbondingDelegationsRequest = QueryDelegatorUnbondingDelegationsRequest;
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
  return {
    unbonding_responses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDelegatorUnbondingDelegationsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.unbonding_responses),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _staking.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_responses.push(_staking.UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      unbonding_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses) ? object.unbonding_responses.map(function (e) {
        return _staking.UnbondingDelegation.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$unbonding_res2;
    var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbonding_responses = ((_object$unbonding_res2 = object.unbonding_responses) === null || _object$unbonding_res2 === void 0 ? void 0 : _object$unbonding_res2.map(function (e) {
      return _staking.UnbondingDelegation.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDelegatorUnbondingDelegationsResponse = QueryDelegatorUnbondingDelegationsResponse;
function createBaseQueryRedelegationsRequest() {
  return {
    delegator_addr: "",
    src_validator_addr: "",
    dst_validator_addr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryRedelegationsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      src_validator_addr: (0, _helpers.isSet)(object.src_validator_addr) ? String(object.src_validator_addr) : "",
      dst_validator_addr: (0, _helpers.isSet)(object.dst_validator_addr) ? String(object.dst_validator_addr) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add5, _object$src_validator, _object$dst_validator;
    var message = createBaseQueryRedelegationsRequest();
    message.delegator_addr = (_object$delegator_add5 = object.delegator_addr) !== null && _object$delegator_add5 !== void 0 ? _object$delegator_add5 : "";
    message.src_validator_addr = (_object$src_validator = object.src_validator_addr) !== null && _object$src_validator !== void 0 ? _object$src_validator : "";
    message.dst_validator_addr = (_object$dst_validator = object.dst_validator_addr) !== null && _object$dst_validator !== void 0 ? _object$dst_validator : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryRedelegationsRequest = QueryRedelegationsRequest;
function createBaseQueryRedelegationsResponse() {
  return {
    redelegation_responses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryRedelegationsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.redelegation_responses),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _staking.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation_responses.push(_staking.RedelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      redelegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_responses) ? object.redelegation_responses.map(function (e) {
        return _staking.RedelegationResponse.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$redelegation_;
    var message = createBaseQueryRedelegationsResponse();
    message.redelegation_responses = ((_object$redelegation_ = object.redelegation_responses) === null || _object$redelegation_ === void 0 ? void 0 : _object$redelegation_.map(function (e) {
      return _staking.RedelegationResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryRedelegationsResponse = QueryRedelegationsResponse;
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegator_addr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDelegatorValidatorsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add6;
    var message = createBaseQueryDelegatorValidatorsRequest();
    message.delegator_addr = (_object$delegator_add6 = object.delegator_addr) !== null && _object$delegator_add6 !== void 0 ? _object$delegator_add6 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDelegatorValidatorsRequest = QueryDelegatorValidatorsRequest;
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDelegatorValidatorsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.validators),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _staking.Validator.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(_staking.Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return _staking.Validator.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2;
    var message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return _staking.Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDelegatorValidatorsResponse = QueryDelegatorValidatorsResponse;
function createBaseQueryDelegatorValidatorRequest() {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}
var QueryDelegatorValidatorRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }
    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      delegator_addr: (0, _helpers.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: (0, _helpers.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add7, _object$validator_add6;
    var message = createBaseQueryDelegatorValidatorRequest();
    message.delegator_addr = (_object$delegator_add7 = object.delegator_addr) !== null && _object$delegator_add7 !== void 0 ? _object$delegator_add7 : "";
    message.validator_addr = (_object$validator_add6 = object.validator_addr) !== null && _object$validator_add6 !== void 0 ? _object$validator_add6 : "";
    return message;
  }
};
exports.QueryDelegatorValidatorRequest = QueryDelegatorValidatorRequest;
function createBaseQueryDelegatorValidatorResponse() {
  return {
    validator: _staking.Validator.fromPartial({})
  };
}
var QueryDelegatorValidatorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator !== undefined) {
      _staking.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = _staking.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      validator: (0, _helpers.isSet)(object.validator) ? _staking.Validator.fromJSON(object.validator) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? _staking.Validator.fromPartial(object.validator) : undefined;
    return message;
  }
};
exports.QueryDelegatorValidatorResponse = QueryDelegatorValidatorResponse;
function createBaseQueryHistoricalInfoRequest() {
  return {
    height: _helpers.Long.ZERO
  };
}
var QueryHistoricalInfoRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.QueryHistoricalInfoRequest = QueryHistoricalInfoRequest;
function createBaseQueryHistoricalInfoResponse() {
  return {
    hist: _staking.HistoricalInfo.fromPartial({})
  };
}
var QueryHistoricalInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hist !== undefined) {
      _staking.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = _staking.HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      hist: (0, _helpers.isSet)(object.hist) ? _staking.HistoricalInfo.fromJSON(object.hist) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? _staking.HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  }
};
exports.QueryHistoricalInfoResponse = QueryHistoricalInfoResponse;
function createBaseQueryPoolRequest() {
  return {};
}
var QueryPoolRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryPoolRequest();
    return message;
  }
};
exports.QueryPoolRequest = QueryPoolRequest;
function createBaseQueryPoolResponse() {
  return {
    pool: _staking.Pool.fromPartial({})
  };
}
var QueryPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pool !== undefined) {
      _staking.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = _staking.Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      pool: (0, _helpers.isSet)(object.pool) ? _staking.Pool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? _staking.Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
exports.QueryPoolResponse = QueryPoolResponse;
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _staking.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _staking.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _staking.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      params: (0, _helpers.isSet)(object.params) ? _staking.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _staking.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;