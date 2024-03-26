import { TallyResult, proposalExecutorResultFromJSON, proposalStatusFromJSON } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    group_id: Long.UZERO
  };
}
export const EventCreateGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      group_id: isSet(object.group_id) ? Long.fromValue(object.group_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEventCreateGroup();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? Long.fromValue(object.group_id) : Long.UZERO;
    return message;
  }
};
function createBaseEventUpdateGroup() {
  return {
    group_id: Long.UZERO
  };
}
export const EventUpdateGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      group_id: isSet(object.group_id) ? Long.fromValue(object.group_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEventUpdateGroup();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? Long.fromValue(object.group_id) : Long.UZERO;
    return message;
  }
};
function createBaseEventCreateGroupPolicy() {
  return {
    address: ""
  };
}
export const EventCreateGroupPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseEventCreateGroupPolicy();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseEventUpdateGroupPolicy() {
  return {
    address: ""
  };
}
export const EventUpdateGroupPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseEventUpdateGroupPolicy();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseEventSubmitProposal() {
  return {
    proposal_id: Long.UZERO
  };
}
export const EventSubmitProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEventSubmitProposal();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    return message;
  }
};
function createBaseEventWithdrawProposal() {
  return {
    proposal_id: Long.UZERO
  };
}
export const EventWithdrawProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEventWithdrawProposal();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    return message;
  }
};
function createBaseEventVote() {
  return {
    proposal_id: Long.UZERO
  };
}
export const EventVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseEventVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    return message;
  }
};
function createBaseEventExec() {
  return {
    proposal_id: Long.UZERO,
    result: 0,
    logs: ""
  };
}
export const EventExec = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1,
      logs: isSet(object.logs) ? String(object.logs) : ""
    };
  },
  fromPartial(object) {
    var _object$result, _object$logs;
    const message = createBaseEventExec();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    message.logs = (_object$logs = object.logs) !== null && _object$logs !== void 0 ? _object$logs : "";
    return message;
  }
};
function createBaseEventLeaveGroup() {
  return {
    group_id: Long.UZERO,
    address: ""
  };
}
export const EventLeaveGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      group_id: isSet(object.group_id) ? Long.fromValue(object.group_id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseEventLeaveGroup();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? Long.fromValue(object.group_id) : Long.UZERO;
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    return message;
  }
};
function createBaseEventProposalPruned() {
  return {
    proposal_id: Long.UZERO,
    status: 0,
    tally_result: TallyResult.fromPartial({})
  };
}
export const EventProposalPruned = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tally_result !== undefined) {
      TallyResult.encode(message.tally_result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.status = reader.int32();
          break;
        case 3:
          message.tally_result = TallyResult.decode(reader, reader.uint32());
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
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      tally_result: isSet(object.tally_result) ? TallyResult.fromJSON(object.tally_result) : undefined
    };
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseEventProposalPruned();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tally_result = object.tally_result !== undefined && object.tally_result !== null ? TallyResult.fromPartial(object.tally_result) : undefined;
    return message;
  }
};