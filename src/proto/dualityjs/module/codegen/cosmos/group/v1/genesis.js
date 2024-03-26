import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the group module's genesis state. */

function createBaseGenesisState() {
  return {
    group_seq: Long.UZERO,
    groups: [],
    group_members: [],
    group_policy_seq: Long.UZERO,
    group_policies: [],
    proposal_seq: Long.UZERO,
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.group_seq.isZero()) {
      writer.uint32(8).uint64(message.group_seq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.group_members) {
      GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (!message.group_policy_seq.isZero()) {
      writer.uint32(32).uint64(message.group_policy_seq);
    }
    for (const v of message.group_policies) {
      GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposal_seq.isZero()) {
      writer.uint32(48).uint64(message.proposal_seq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_seq = reader.uint64();
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.group_members.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.group_policy_seq = reader.uint64();
          break;
        case 5:
          message.group_policies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposal_seq = reader.uint64();
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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
      group_seq: isSet(object.group_seq) ? Long.fromValue(object.group_seq) : Long.UZERO,
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(e => GroupInfo.fromJSON(e)) : [],
      group_members: Array.isArray(object === null || object === void 0 ? void 0 : object.group_members) ? object.group_members.map(e => GroupMember.fromJSON(e)) : [],
      group_policy_seq: isSet(object.group_policy_seq) ? Long.fromValue(object.group_policy_seq) : Long.UZERO,
      group_policies: Array.isArray(object === null || object === void 0 ? void 0 : object.group_policies) ? object.group_policies.map(e => GroupPolicyInfo.fromJSON(e)) : [],
      proposal_seq: isSet(object.proposal_seq) ? Long.fromValue(object.proposal_seq) : Long.UZERO,
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(e => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(e => Vote.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$groups, _object$group_members, _object$group_policie, _object$proposals, _object$votes;
    const message = createBaseGenesisState();
    message.group_seq = object.group_seq !== undefined && object.group_seq !== null ? Long.fromValue(object.group_seq) : Long.UZERO;
    message.groups = ((_object$groups = object.groups) === null || _object$groups === void 0 ? void 0 : _object$groups.map(e => GroupInfo.fromPartial(e))) || [];
    message.group_members = ((_object$group_members = object.group_members) === null || _object$group_members === void 0 ? void 0 : _object$group_members.map(e => GroupMember.fromPartial(e))) || [];
    message.group_policy_seq = object.group_policy_seq !== undefined && object.group_policy_seq !== null ? Long.fromValue(object.group_policy_seq) : Long.UZERO;
    message.group_policies = ((_object$group_policie = object.group_policies) === null || _object$group_policie === void 0 ? void 0 : _object$group_policie.map(e => GroupPolicyInfo.fromPartial(e))) || [];
    message.proposal_seq = object.proposal_seq !== undefined && object.proposal_seq !== null ? Long.fromValue(object.proposal_seq) : Long.UZERO;
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(e => Proposal.fromPartial(e))) || [];
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => Vote.fromPartial(e))) || [];
    return message;
  }
};