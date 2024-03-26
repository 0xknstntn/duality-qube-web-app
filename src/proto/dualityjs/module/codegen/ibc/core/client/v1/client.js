import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * the actual client state structure will depend on what type of client is being used
 * "chain_id" exists on the tendermint light client but not on the localhost client
 * we use it here so that chain_id can be read properly as a string
 * (we only interact with tendermint clients on our frontend)
 */

/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */

/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */

/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */

/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */

/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */

/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */

/** Params defines the set of IBC light client parameters. */

function createBaseClientState() {
  return {
    chain_id: ""
  };
}
export const ClientState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
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
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial(object) {
    var _object$chain_id;
    const message = createBaseClientState();
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    return message;
  }
};
function createBaseIdentifiedClientState() {
  return {
    client_id: "",
    client_state: ClientState.fromPartial({})
  };
}
export const IdentifiedClientState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.client_state !== undefined) {
      ClientState.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_state = ClientState.decode(reader, reader.uint32());
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      client_state: isSet(object.client_state) ? ClientState.fromJSON(object.client_state) : undefined
    };
  },
  fromPartial(object) {
    var _object$client_id;
    const message = createBaseIdentifiedClientState();
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? ClientState.fromPartial(object.client_state) : undefined;
    return message;
  }
};
function createBaseConsensusStateWithHeight() {
  return {
    height: Height.fromPartial({}),
    consensus_state: Any.fromPartial({})
  };
}
export const ConsensusStateWithHeight = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensus_state = Any.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    return message;
  }
};
function createBaseClientConsensusStates() {
  return {
    client_id: "",
    consensus_states: []
  };
}
export const ClientConsensusStates = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.consensus_states) {
      ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      consensus_states: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_states) ? object.consensus_states.map(e => ConsensusStateWithHeight.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$client_id2, _object$consensus_sta;
    const message = createBaseClientConsensusStates();
    message.client_id = (_object$client_id2 = object.client_id) !== null && _object$client_id2 !== void 0 ? _object$client_id2 : "";
    message.consensus_states = ((_object$consensus_sta = object.consensus_states) === null || _object$consensus_sta === void 0 ? void 0 : _object$consensus_sta.map(e => ConsensusStateWithHeight.fromPartial(e))) || [];
    return message;
  }
};
function createBaseClientUpdateProposal() {
  return {
    title: "",
    description: "",
    subject_client_id: "",
    substitute_client_id: ""
  };
}
export const ClientUpdateProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subject_client_id !== "") {
      writer.uint32(26).string(message.subject_client_id);
    }
    if (message.substitute_client_id !== "") {
      writer.uint32(34).string(message.substitute_client_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.subject_client_id = reader.string();
          break;
        case 4:
          message.substitute_client_id = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subject_client_id: isSet(object.subject_client_id) ? String(object.subject_client_id) : "",
      substitute_client_id: isSet(object.substitute_client_id) ? String(object.substitute_client_id) : ""
    };
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$subject_clien, _object$substitute_cl;
    const message = createBaseClientUpdateProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.subject_client_id = (_object$subject_clien = object.subject_client_id) !== null && _object$subject_clien !== void 0 ? _object$subject_clien : "";
    message.substitute_client_id = (_object$substitute_cl = object.substitute_client_id) !== null && _object$substitute_cl !== void 0 ? _object$substitute_cl : "";
    return message;
  }
};
function createBaseUpgradeProposal() {
  return {
    title: "",
    description: "",
    plan: Plan.fromPartial({}),
    upgraded_client_state: Any.fromPartial({})
  };
}
export const UpgradeProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    if (message.upgraded_client_state !== undefined) {
      Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 4:
          message.upgraded_client_state = Any.decode(reader, reader.uint32());
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined
    };
  },
  fromPartial(object) {
    var _object$title2, _object$description2;
    const message = createBaseUpgradeProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  }
};
function createBaseHeight() {
  return {
    revision_number: Long.UZERO,
    revision_height: Long.UZERO
  };
}
export const Height = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.revision_number.isZero()) {
      writer.uint32(8).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(16).uint64(message.revision_height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revision_number = reader.uint64();
          break;
        case 2:
          message.revision_height = reader.uint64();
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
      revision_number: isSet(object.revision_number) ? Long.fromValue(object.revision_number) : Long.UZERO,
      revision_height: isSet(object.revision_height) ? Long.fromValue(object.revision_height) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseHeight();
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
    return message;
  }
};
function createBaseParams() {
  return {
    allowed_clients: []
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.allowed_clients) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowed_clients.push(reader.string());
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
      allowed_clients: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_clients) ? object.allowed_clients.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$allowed_clien;
    const message = createBaseParams();
    message.allowed_clients = ((_object$allowed_clien = object.allowed_clients) === null || _object$allowed_clien === void 0 ? void 0 : _object$allowed_clien.map(e => e)) || [];
    return message;
  }
};