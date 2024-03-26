"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgVoteResponse = exports.MsgVote = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgUpdateGroupPolicyAdmin = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgCreateGroupResponse = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgCreateGroup = exports.Exec = void 0;
exports.execFromJSON = execFromJSON;
exports.execToJSON = execToJSON;
var _types = require("./types");
var _any = require("../../../google/protobuf/any");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec = /*#__PURE__*/function (Exec) {
  Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
  Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Exec;
}({});
exports.Exec = Exec;
function execFromJSON(object) {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
function execToJSON(object) {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */

/** MsgVote is the Msg/Vote request type. */

/** MsgVoteResponse is the Msg/Vote response type. */

/** MsgExec is the Msg/Exec request type. */

/** MsgExecResponse is the Msg/Exec request type. */

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */

function createBaseMsgCreateGroup() {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
var MsgCreateGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    var _iterator = _createForOfIteratorHelper(message.members),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(_types.MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) {
        return _types.MemberRequest.fromJSON(e);
      }) : [],
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin, _object$members, _object$metadata;
    var message = createBaseMsgCreateGroup();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(function (e) {
      return _types.MemberRequest.fromPartial(e);
    })) || [];
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  }
};
exports.MsgCreateGroup = MsgCreateGroup;
function createBaseMsgCreateGroupResponse() {
  return {
    group_id: _helpers.Long.UZERO
  };
}
var MsgCreateGroupResponse = {
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
    var message = createBaseMsgCreateGroupResponse();
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
    var message = createBaseMsgCreateGroupResponse();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgCreateGroupResponse = MsgCreateGroupResponse;
function createBaseMsgUpdateGroupMembers() {
  return {
    admin: "",
    group_id: _helpers.Long.UZERO,
    member_updates: []
  };
}
var MsgUpdateGroupMembers = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.group_id.isZero()) {
      writer.uint32(16).uint64(message.group_id);
    }
    var _iterator2 = _createForOfIteratorHelper(message.member_updates),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _types.MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.member_updates.push(_types.MemberRequest.decode(reader, reader.uint32()));
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      member_updates: Array.isArray(object === null || object === void 0 ? void 0 : object.member_updates) ? object.member_updates.map(function (e) {
        return _types.MemberRequest.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin2, _object$member_update;
    var message = createBaseMsgUpdateGroupMembers();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.member_updates = ((_object$member_update = object.member_updates) === null || _object$member_update === void 0 ? void 0 : _object$member_update.map(function (e) {
      return _types.MemberRequest.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgUpdateGroupMembers = MsgUpdateGroupMembers;
function createBaseMsgUpdateGroupMembersResponse() {
  return {};
}
var MsgUpdateGroupMembersResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMembersResponse();
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
    var message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  }
};
exports.MsgUpdateGroupMembersResponse = MsgUpdateGroupMembersResponse;
function createBaseMsgUpdateGroupAdmin() {
  return {
    admin: "",
    group_id: _helpers.Long.UZERO,
    new_admin: ""
  };
}
var MsgUpdateGroupAdmin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.group_id.isZero()) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.new_admin = reader.string();
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      new_admin: (0, _helpers.isSet)(object.new_admin) ? String(object.new_admin) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin3, _object$new_admin;
    var message = createBaseMsgUpdateGroupAdmin();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.new_admin = (_object$new_admin = object.new_admin) !== null && _object$new_admin !== void 0 ? _object$new_admin : "";
    return message;
  }
};
exports.MsgUpdateGroupAdmin = MsgUpdateGroupAdmin;
function createBaseMsgUpdateGroupAdminResponse() {
  return {};
}
var MsgUpdateGroupAdminResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupAdminResponse();
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
    var message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  }
};
exports.MsgUpdateGroupAdminResponse = MsgUpdateGroupAdminResponse;
function createBaseMsgUpdateGroupMetadata() {
  return {
    admin: "",
    group_id: _helpers.Long.UZERO,
    metadata: ""
  };
}
var MsgUpdateGroupMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.group_id.isZero()) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin4, _object$metadata2;
    var message = createBaseMsgUpdateGroupMetadata();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
exports.MsgUpdateGroupMetadata = MsgUpdateGroupMetadata;
function createBaseMsgUpdateGroupMetadataResponse() {
  return {};
}
var MsgUpdateGroupMetadataResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMetadataResponse();
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
    var message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  }
};
exports.MsgUpdateGroupMetadataResponse = MsgUpdateGroupMetadataResponse;
function createBaseMsgCreateGroupPolicy() {
  return {
    admin: "",
    group_id: _helpers.Long.UZERO,
    metadata: "",
    decision_policy: _any.Any.fromPartial({})
  };
}
var MsgCreateGroupPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.group_id.isZero()) {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decision_policy !== undefined) {
      _any.Any.encode(message.decision_policy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_id = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decision_policy = _any.Any.decode(reader, reader.uint32());
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO,
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      decision_policy: (0, _helpers.isSet)(object.decision_policy) ? _any.Any.fromJSON(object.decision_policy) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin5, _object$metadata3;
    var message = createBaseMsgCreateGroupPolicy();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? _any.Any.fromPartial(object.decision_policy) : undefined;
    return message;
  }
};
exports.MsgCreateGroupPolicy = MsgCreateGroupPolicy;
function createBaseMsgCreateGroupPolicyResponse() {
  return {
    address: ""
  };
}
var MsgCreateGroupPolicyResponse = {
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
    var message = createBaseMsgCreateGroupPolicyResponse();
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
    var message = createBaseMsgCreateGroupPolicyResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.MsgCreateGroupPolicyResponse = MsgCreateGroupPolicyResponse;
function createBaseMsgUpdateGroupPolicyAdmin() {
  return {
    admin: "",
    group_policy_address: "",
    new_admin: ""
  };
}
var MsgUpdateGroupPolicyAdmin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.new_admin = reader.string();
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_policy_address: (0, _helpers.isSet)(object.group_policy_address) ? String(object.group_policy_address) : "",
      new_admin: (0, _helpers.isSet)(object.new_admin) ? String(object.new_admin) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin6, _object$group_policy_, _object$new_admin2;
    var message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = (_object$admin6 = object.admin) !== null && _object$admin6 !== void 0 ? _object$admin6 : "";
    message.group_policy_address = (_object$group_policy_ = object.group_policy_address) !== null && _object$group_policy_ !== void 0 ? _object$group_policy_ : "";
    message.new_admin = (_object$new_admin2 = object.new_admin) !== null && _object$new_admin2 !== void 0 ? _object$new_admin2 : "";
    return message;
  }
};
exports.MsgUpdateGroupPolicyAdmin = MsgUpdateGroupPolicyAdmin;
function createBaseMsgUpdateGroupPolicyAdminResponse() {
  return {};
}
var MsgUpdateGroupPolicyAdminResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
    var message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  }
};
exports.MsgUpdateGroupPolicyAdminResponse = MsgUpdateGroupPolicyAdminResponse;
function createBaseMsgCreateGroupWithPolicy() {
  return {
    admin: "",
    members: [],
    group_metadata: "",
    group_policy_metadata: "",
    group_policy_as_admin: false,
    decision_policy: _any.Any.fromPartial({})
  };
}
var MsgCreateGroupWithPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    var _iterator3 = _createForOfIteratorHelper(message.members),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _types.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.group_metadata !== "") {
      writer.uint32(26).string(message.group_metadata);
    }
    if (message.group_policy_metadata !== "") {
      writer.uint32(34).string(message.group_policy_metadata);
    }
    if (message.group_policy_as_admin === true) {
      writer.uint32(40).bool(message.group_policy_as_admin);
    }
    if (message.decision_policy !== undefined) {
      _any.Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(_types.MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.group_metadata = reader.string();
          break;
        case 4:
          message.group_policy_metadata = reader.string();
          break;
        case 5:
          message.group_policy_as_admin = reader.bool();
          break;
        case 6:
          message.decision_policy = _any.Any.decode(reader, reader.uint32());
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) {
        return _types.MemberRequest.fromJSON(e);
      }) : [],
      group_metadata: (0, _helpers.isSet)(object.group_metadata) ? String(object.group_metadata) : "",
      group_policy_metadata: (0, _helpers.isSet)(object.group_policy_metadata) ? String(object.group_policy_metadata) : "",
      group_policy_as_admin: (0, _helpers.isSet)(object.group_policy_as_admin) ? Boolean(object.group_policy_as_admin) : false,
      decision_policy: (0, _helpers.isSet)(object.decision_policy) ? _any.Any.fromJSON(object.decision_policy) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin7, _object$members2, _object$group_metadat, _object$group_policy_2, _object$group_policy_3;
    var message = createBaseMsgCreateGroupWithPolicy();
    message.admin = (_object$admin7 = object.admin) !== null && _object$admin7 !== void 0 ? _object$admin7 : "";
    message.members = ((_object$members2 = object.members) === null || _object$members2 === void 0 ? void 0 : _object$members2.map(function (e) {
      return _types.MemberRequest.fromPartial(e);
    })) || [];
    message.group_metadata = (_object$group_metadat = object.group_metadata) !== null && _object$group_metadat !== void 0 ? _object$group_metadat : "";
    message.group_policy_metadata = (_object$group_policy_2 = object.group_policy_metadata) !== null && _object$group_policy_2 !== void 0 ? _object$group_policy_2 : "";
    message.group_policy_as_admin = (_object$group_policy_3 = object.group_policy_as_admin) !== null && _object$group_policy_3 !== void 0 ? _object$group_policy_3 : false;
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? _any.Any.fromPartial(object.decision_policy) : undefined;
    return message;
  }
};
exports.MsgCreateGroupWithPolicy = MsgCreateGroupWithPolicy;
function createBaseMsgCreateGroupWithPolicyResponse() {
  return {
    group_id: _helpers.Long.UZERO,
    group_policy_address: ""
  };
}
var MsgCreateGroupWithPolicyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.group_id.isZero()) {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = reader.uint64();
          break;
        case 2:
          message.group_policy_address = reader.string();
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
      group_policy_address: (0, _helpers.isSet)(object.group_policy_address) ? String(object.group_policy_address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$group_policy_4;
    var message = createBaseMsgCreateGroupWithPolicyResponse();
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    message.group_policy_address = (_object$group_policy_4 = object.group_policy_address) !== null && _object$group_policy_4 !== void 0 ? _object$group_policy_4 : "";
    return message;
  }
};
exports.MsgCreateGroupWithPolicyResponse = MsgCreateGroupWithPolicyResponse;
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
  return {
    admin: "",
    group_policy_address: "",
    decision_policy: _any.Any.fromPartial({})
  };
}
var MsgUpdateGroupPolicyDecisionPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.decision_policy !== undefined) {
      _any.Any.encode(message.decision_policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.decision_policy = _any.Any.decode(reader, reader.uint32());
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_policy_address: (0, _helpers.isSet)(object.group_policy_address) ? String(object.group_policy_address) : "",
      decision_policy: (0, _helpers.isSet)(object.decision_policy) ? _any.Any.fromJSON(object.decision_policy) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin8, _object$group_policy_5;
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = (_object$admin8 = object.admin) !== null && _object$admin8 !== void 0 ? _object$admin8 : "";
    message.group_policy_address = (_object$group_policy_5 = object.group_policy_address) !== null && _object$group_policy_5 !== void 0 ? _object$group_policy_5 : "";
    message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? _any.Any.fromPartial(object.decision_policy) : undefined;
    return message;
  }
};
exports.MsgUpdateGroupPolicyDecisionPolicy = MsgUpdateGroupPolicyDecisionPolicy;
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
  return {};
}
var MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  }
};
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = MsgUpdateGroupPolicyDecisionPolicyResponse;
function createBaseMsgUpdateGroupPolicyMetadata() {
  return {
    admin: "",
    group_policy_address: "",
    metadata: ""
  };
}
var MsgUpdateGroupPolicyMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.group_policy_address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      group_policy_address: (0, _helpers.isSet)(object.group_policy_address) ? String(object.group_policy_address) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$admin9, _object$group_policy_6, _object$metadata4;
    var message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = (_object$admin9 = object.admin) !== null && _object$admin9 !== void 0 ? _object$admin9 : "";
    message.group_policy_address = (_object$group_policy_6 = object.group_policy_address) !== null && _object$group_policy_6 !== void 0 ? _object$group_policy_6 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    return message;
  }
};
exports.MsgUpdateGroupPolicyMetadata = MsgUpdateGroupPolicyMetadata;
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
  return {};
}
var MsgUpdateGroupPolicyMetadataResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
    var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  }
};
exports.MsgUpdateGroupPolicyMetadataResponse = MsgUpdateGroupPolicyMetadataResponse;
function createBaseMsgSubmitProposal() {
  return {
    group_policy_address: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0,
    title: "",
    summary: ""
  };
}
var MsgSubmitProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.group_policy_address !== "") {
      writer.uint32(10).string(message.group_policy_address);
    }
    var _iterator4 = _createForOfIteratorHelper(message.proposers),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    var _iterator5 = _createForOfIteratorHelper(message.messages),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v = _step5.value;
        _any.Any.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_policy_address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = reader.int32();
          break;
        case 6:
          message.title = reader.string();
          break;
        case 7:
          message.summary = reader.string();
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
      group_policy_address: (0, _helpers.isSet)(object.group_policy_address) ? String(object.group_policy_address) : "",
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function (e) {
        return String(e);
      }) : [],
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      exec: (0, _helpers.isSet)(object.exec) ? execFromJSON(object.exec) : -1,
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      summary: (0, _helpers.isSet)(object.summary) ? String(object.summary) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$group_policy_7, _object$proposers, _object$metadata5, _object$messages, _object$exec, _object$title, _object$summary;
    var message = createBaseMsgSubmitProposal();
    message.group_policy_address = (_object$group_policy_7 = object.group_policy_address) !== null && _object$group_policy_7 !== void 0 ? _object$group_policy_7 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(function (e) {
      return e;
    })) || [];
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.exec = (_object$exec = object.exec) !== null && _object$exec !== void 0 ? _object$exec : 0;
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
exports.MsgSubmitProposal = MsgSubmitProposal;
function createBaseMsgSubmitProposalResponse() {
  return {
    proposal_id: _helpers.Long.UZERO
  };
}
var MsgSubmitProposalResponse = {
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
    var message = createBaseMsgSubmitProposalResponse();
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
    var message = createBaseMsgSubmitProposalResponse();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSubmitProposalResponse = MsgSubmitProposalResponse;
function createBaseMsgWithdrawProposal() {
  return {
    proposal_id: _helpers.Long.UZERO,
    address: ""
  };
}
var MsgWithdrawProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
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
      proposal_id: (0, _helpers.isSet)(object.proposal_id) ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO,
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseMsgWithdrawProposal();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
exports.MsgWithdrawProposal = MsgWithdrawProposal;
function createBaseMsgWithdrawProposalResponse() {
  return {};
}
var MsgWithdrawProposalResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawProposalResponse();
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
    var message = createBaseMsgWithdrawProposalResponse();
    return message;
  }
};
exports.MsgWithdrawProposalResponse = MsgWithdrawProposalResponse;
function createBaseMsgVote() {
  return {
    proposal_id: _helpers.Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
var MsgVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32();
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
      voter: (0, _helpers.isSet)(object.voter) ? String(object.voter) : "",
      option: (0, _helpers.isSet)(object.option) ? (0, _types.voteOptionFromJSON)(object.option) : -1,
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      exec: (0, _helpers.isSet)(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6, _object$exec2;
    var message = createBaseMsgVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.exec = (_object$exec2 = object.exec) !== null && _object$exec2 !== void 0 ? _object$exec2 : 0;
    return message;
  }
};
exports.MsgVote = MsgVote;
function createBaseMsgVoteResponse() {
  return {};
}
var MsgVoteResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteResponse();
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
    var message = createBaseMsgVoteResponse();
    return message;
  }
};
exports.MsgVoteResponse = MsgVoteResponse;
function createBaseMsgExec() {
  return {
    proposal_id: _helpers.Long.UZERO,
    executor: ""
  };
}
var MsgExec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExec();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = reader.uint64();
          break;
        case 2:
          message.executor = reader.string();
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
      executor: (0, _helpers.isSet)(object.executor) ? String(object.executor) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$executor;
    var message = createBaseMsgExec();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? _helpers.Long.fromValue(object.proposal_id) : _helpers.Long.UZERO;
    message.executor = (_object$executor = object.executor) !== null && _object$executor !== void 0 ? _object$executor : "";
    return message;
  }
};
exports.MsgExec = MsgExec;
function createBaseMsgExecResponse() {
  return {
    result: 0
  };
}
var MsgExecResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = reader.int32();
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
      result: (0, _helpers.isSet)(object.result) ? (0, _types.proposalExecutorResultFromJSON)(object.result) : -1
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$result;
    var message = createBaseMsgExecResponse();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
exports.MsgExecResponse = MsgExecResponse;
function createBaseMsgLeaveGroup() {
  return {
    address: "",
    group_id: _helpers.Long.UZERO
  };
}
var MsgLeaveGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.group_id.isZero()) {
      writer.uint32(16).uint64(message.group_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      group_id: (0, _helpers.isSet)(object.group_id) ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseMsgLeaveGroup();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.group_id = object.group_id !== undefined && object.group_id !== null ? _helpers.Long.fromValue(object.group_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgLeaveGroup = MsgLeaveGroup;
function createBaseMsgLeaveGroupResponse() {
  return {};
}
var MsgLeaveGroupResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLeaveGroupResponse();
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
    var message = createBaseMsgLeaveGroupResponse();
    return message;
  }
};
exports.MsgLeaveGroupResponse = MsgLeaveGroupResponse;