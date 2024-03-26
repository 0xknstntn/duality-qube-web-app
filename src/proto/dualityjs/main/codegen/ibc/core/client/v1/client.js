"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpgradeProposal = exports.Params = exports.IdentifiedClientState = exports.Height = exports.ConsensusStateWithHeight = exports.ClientUpdateProposal = exports.ClientState = exports.ClientConsensusStates = void 0;
var _any = require("../../../../google/protobuf/any");
var _upgrade = require("../../../../cosmos/upgrade/v1beta1/upgrade");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var ClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClientState();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$chain_id;
    var message = createBaseClientState();
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    return message;
  }
};
exports.ClientState = ClientState;
function createBaseIdentifiedClientState() {
  return {
    client_id: "",
    client_state: ClientState.fromPartial({})
  };
}
var IdentifiedClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.client_state !== undefined) {
      ClientState.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : "",
      client_state: (0, _helpers.isSet)(object.client_state) ? ClientState.fromJSON(object.client_state) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id;
    var message = createBaseIdentifiedClientState();
    message.client_id = (_object$client_id = object.client_id) !== null && _object$client_id !== void 0 ? _object$client_id : "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? ClientState.fromPartial(object.client_state) : undefined;
    return message;
  }
};
exports.IdentifiedClientState = IdentifiedClientState;
function createBaseConsensusStateWithHeight() {
  return {
    height: Height.fromPartial({}),
    consensus_state: _any.Any.fromPartial({})
  };
}
var ConsensusStateWithHeight = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      _any.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensus_state = _any.Any.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? Height.fromJSON(object.height) : undefined,
      consensus_state: (0, _helpers.isSet)(object.consensus_state) ? _any.Any.fromJSON(object.consensus_state) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? _any.Any.fromPartial(object.consensus_state) : undefined;
    return message;
  }
};
exports.ConsensusStateWithHeight = ConsensusStateWithHeight;
function createBaseClientConsensusStates() {
  return {
    client_id: "",
    consensus_states: []
  };
}
var ClientConsensusStates = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    var _iterator = _createForOfIteratorHelper(message.consensus_states),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      client_id: (0, _helpers.isSet)(object.client_id) ? String(object.client_id) : "",
      consensus_states: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_states) ? object.consensus_states.map(function (e) {
        return ConsensusStateWithHeight.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$client_id2, _object$consensus_sta;
    var message = createBaseClientConsensusStates();
    message.client_id = (_object$client_id2 = object.client_id) !== null && _object$client_id2 !== void 0 ? _object$client_id2 : "";
    message.consensus_states = ((_object$consensus_sta = object.consensus_states) === null || _object$consensus_sta === void 0 ? void 0 : _object$consensus_sta.map(function (e) {
      return ConsensusStateWithHeight.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ClientConsensusStates = ClientConsensusStates;
function createBaseClientUpdateProposal() {
  return {
    title: "",
    description: "",
    subject_client_id: "",
    substitute_client_id: ""
  };
}
var ClientUpdateProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClientUpdateProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      subject_client_id: (0, _helpers.isSet)(object.subject_client_id) ? String(object.subject_client_id) : "",
      substitute_client_id: (0, _helpers.isSet)(object.substitute_client_id) ? String(object.substitute_client_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$description, _object$subject_clien, _object$substitute_cl;
    var message = createBaseClientUpdateProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.subject_client_id = (_object$subject_clien = object.subject_client_id) !== null && _object$subject_clien !== void 0 ? _object$subject_clien : "";
    message.substitute_client_id = (_object$substitute_cl = object.substitute_client_id) !== null && _object$substitute_cl !== void 0 ? _object$substitute_cl : "";
    return message;
  }
};
exports.ClientUpdateProposal = ClientUpdateProposal;
function createBaseUpgradeProposal() {
  return {
    title: "",
    description: "",
    plan: _upgrade.Plan.fromPartial({}),
    upgraded_client_state: _any.Any.fromPartial({})
  };
}
var UpgradeProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      _upgrade.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    if (message.upgraded_client_state !== undefined) {
      _any.Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUpgradeProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = _upgrade.Plan.decode(reader, reader.uint32());
          break;
        case 4:
          message.upgraded_client_state = _any.Any.decode(reader, reader.uint32());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      plan: (0, _helpers.isSet)(object.plan) ? _upgrade.Plan.fromJSON(object.plan) : undefined,
      upgraded_client_state: (0, _helpers.isSet)(object.upgraded_client_state) ? _any.Any.fromJSON(object.upgraded_client_state) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$title2, _object$description2;
    var message = createBaseUpgradeProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.plan = object.plan !== undefined && object.plan !== null ? _upgrade.Plan.fromPartial(object.plan) : undefined;
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? _any.Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  }
};
exports.UpgradeProposal = UpgradeProposal;
function createBaseHeight() {
  return {
    revision_number: _helpers.Long.UZERO,
    revision_height: _helpers.Long.UZERO
  };
}
var Height = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.revision_number.isZero()) {
      writer.uint32(8).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(16).uint64(message.revision_height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHeight();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      revision_number: (0, _helpers.isSet)(object.revision_number) ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO,
      revision_height: (0, _helpers.isSet)(object.revision_height) ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseHeight();
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? _helpers.Long.fromValue(object.revision_number) : _helpers.Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? _helpers.Long.fromValue(object.revision_height) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Height = Height;
function createBaseParams() {
  return {
    allowed_clients: []
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.allowed_clients),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(10).string(v);
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
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      allowed_clients: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_clients) ? object.allowed_clients.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$allowed_clien;
    var message = createBaseParams();
    message.allowed_clients = ((_object$allowed_clien = object.allowed_clients) === null || _object$allowed_clien === void 0 ? void 0 : _object$allowed_clien.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.Params = Params;