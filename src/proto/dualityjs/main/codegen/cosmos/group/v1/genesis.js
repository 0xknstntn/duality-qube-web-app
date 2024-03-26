"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _types = require("./types");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the group module's genesis state. */

function createBaseGenesisState() {
  return {
    group_seq: _helpers.Long.UZERO,
    groups: [],
    group_members: [],
    group_policy_seq: _helpers.Long.UZERO,
    group_policies: [],
    proposal_seq: _helpers.Long.UZERO,
    proposals: [],
    votes: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.group_seq.isZero()) {
      writer.uint32(8).uint64(message.group_seq);
    }
    var _iterator = _createForOfIteratorHelper(message.groups),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.group_members),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _types.GroupMember.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!message.group_policy_seq.isZero()) {
      writer.uint32(32).uint64(message.group_policy_seq);
    }
    var _iterator3 = _createForOfIteratorHelper(message.group_policies),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _types.GroupPolicyInfo.encode(_v2, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (!message.proposal_seq.isZero()) {
      writer.uint32(48).uint64(message.proposal_seq);
    }
    var _iterator4 = _createForOfIteratorHelper(message.proposals),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _types.Proposal.encode(_v3, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.votes),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        _types.Vote.encode(_v4, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_seq = reader.uint64();
          break;
        case 2:
          message.groups.push(_types.GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.group_members.push(_types.GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.group_policy_seq = reader.uint64();
          break;
        case 5:
          message.group_policies.push(_types.GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposal_seq = reader.uint64();
          break;
        case 7:
          message.proposals.push(_types.Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(_types.Vote.decode(reader, reader.uint32()));
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
      group_seq: (0, _helpers.isSet)(object.group_seq) ? _helpers.Long.fromValue(object.group_seq) : _helpers.Long.UZERO,
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) {
        return _types.GroupInfo.fromJSON(e);
      }) : [],
      group_members: Array.isArray(object === null || object === void 0 ? void 0 : object.group_members) ? object.group_members.map(function (e) {
        return _types.GroupMember.fromJSON(e);
      }) : [],
      group_policy_seq: (0, _helpers.isSet)(object.group_policy_seq) ? _helpers.Long.fromValue(object.group_policy_seq) : _helpers.Long.UZERO,
      group_policies: Array.isArray(object === null || object === void 0 ? void 0 : object.group_policies) ? object.group_policies.map(function (e) {
        return _types.GroupPolicyInfo.fromJSON(e);
      }) : [],
      proposal_seq: (0, _helpers.isSet)(object.proposal_seq) ? _helpers.Long.fromValue(object.proposal_seq) : _helpers.Long.UZERO,
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) {
        return _types.Proposal.fromJSON(e);
      }) : [],
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return _types.Vote.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$groups, _object$group_members, _object$group_policie, _object$proposals, _object$votes;
    var message = createBaseGenesisState();
    message.group_seq = object.group_seq !== undefined && object.group_seq !== null ? _helpers.Long.fromValue(object.group_seq) : _helpers.Long.UZERO;
    message.groups = ((_object$groups = object.groups) === null || _object$groups === void 0 ? void 0 : _object$groups.map(function (e) {
      return _types.GroupInfo.fromPartial(e);
    })) || [];
    message.group_members = ((_object$group_members = object.group_members) === null || _object$group_members === void 0 ? void 0 : _object$group_members.map(function (e) {
      return _types.GroupMember.fromPartial(e);
    })) || [];
    message.group_policy_seq = object.group_policy_seq !== undefined && object.group_policy_seq !== null ? _helpers.Long.fromValue(object.group_policy_seq) : _helpers.Long.UZERO;
    message.group_policies = ((_object$group_policie = object.group_policies) === null || _object$group_policie === void 0 ? void 0 : _object$group_policie.map(function (e) {
      return _types.GroupPolicyInfo.fromPartial(e);
    })) || [];
    message.proposal_seq = object.proposal_seq !== undefined && object.proposal_seq !== null ? _helpers.Long.fromValue(object.proposal_seq) : _helpers.Long.UZERO;
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(function (e) {
      return _types.Proposal.fromPartial(e);
    })) || [];
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return _types.Vote.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;