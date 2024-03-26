"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventWithdrawProposal = exports.EventVote = exports.EventUpdateGroupPolicy = exports.EventUpdateGroup = exports.EventSubmitProposal = exports.EventProposalPruned = exports.EventLeaveGroup = exports.EventExec = exports.EventCreateGroupPolicy = exports.EventCreateGroup = void 0;
var _types = require("./types");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** EventCreateGroup is an event emitted when a group is created. */

/** EventUpdateGroup is an event emitted when a group is updated. */

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */

/** EventSubmitProposal is an event emitted when a proposal is created. */

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */

/** EventVote is an event emitted when a voter votes on a proposal. */

/** EventExec is an event emitted when a proposal is executed. */

/** EventLeaveGroup is an event emitted when group member leaves the group. */

/** EventProposalPruned is an event emitted when a proposal is pruned. */

function createBaseEventCreateGroup() {
  return {
    group_id: _helpers.Long.UZERO
  };
}
var EventCreateGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
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
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventCreateGroup();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.EventCreateGroup = EventCreateGroup;
function createBaseEventUpdateGroup() {
  return {
    group_id: _helpers.Long.UZERO
  };
}
var EventUpdateGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
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
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventUpdateGroup();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.EventUpdateGroup = EventUpdateGroup;
function createBaseEventCreateGroupPolicy() {
  return {
    address: ""
  };
}
var EventCreateGroupPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseEventCreateGroupPolicy();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.EventCreateGroupPolicy = EventCreateGroupPolicy;
function createBaseEventUpdateGroupPolicy() {
  return {
    address: ""
  };
}
var EventUpdateGroupPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseEventUpdateGroupPolicy();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
exports.EventUpdateGroupPolicy = EventUpdateGroupPolicy;
function createBaseEventSubmitProposal() {
  return {
    proposal_id: _helpers.Long.UZERO
  };
}
var EventSubmitProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventSubmitProposal();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.EventSubmitProposal = EventSubmitProposal;
function createBaseEventWithdrawProposal() {
  return {
    proposal_id: _helpers.Long.UZERO
  };
}
var EventWithdrawProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventWithdrawProposal();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.EventWithdrawProposal = EventWithdrawProposal;
function createBaseEventVote() {
  return {
    proposal_id: _helpers.Long.UZERO
  };
}
var EventVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.EventVote = EventVote;
function createBaseEventExec() {
  return {
    proposal_id: _helpers.Long.UZERO,
    result: 0,
    logs: ""
  };
}
var EventExec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventExec();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.result = reader.int32();
          break;
        case 3:
          message.logs = reader.string();
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO,
      result: (0, _helpers.isSet)(object.result) ? (0, _types.proposalExecutorResultFromJSON)(object.result) : -1,
      logs: (0, _helpers.isSet)(object.logs) ? String(object.logs) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$result, _object$logs;
    var message = createBaseEventExec();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    message.logs = (_object$logs = object.logs) !== null && _object$logs !== void 0 ? _object$logs : "";
    return message;
  }
};
exports.EventExec = EventExec;
function createBaseEventLeaveGroup() {
  return {
    group_id: _helpers.Long.UZERO,
    address: ""
  };
}
var EventLeaveGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
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
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseEventLeaveGroup();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    return message;
  }
};
exports.EventLeaveGroup = EventLeaveGroup;
function createBaseEventProposalPruned() {
  return {
    proposal_id: _helpers.Long.UZERO,
    status: 0,
    tally_result: _types.TallyResult.fromPartial({})
  };
}
var EventProposalPruned = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tally_result !== undefined) {
      _types.TallyResult.encode(message.tally_result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.status = reader.int32();
          break;
        case 3:
          message.tally_result = _types.TallyResult.decode(reader, reader.uint32());
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO,
      status: (0, _helpers.isSet)(object.status) ? (0, _types.proposalStatusFromJSON)(object.status) : -1,
      tally_result: (0, _helpers.isSet)(object.tally_result) ? _types.TallyResult.fromJSON(object.tally_result) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$status;
    var message = createBaseEventProposalPruned();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tally_result = object.tally_result !== undefined && object.tally_result !== null ? _types.TallyResult.fromPartial(object.tally_result) : undefined;
    return message;
  }
};
exports.EventProposalPruned = EventProposalPruned;