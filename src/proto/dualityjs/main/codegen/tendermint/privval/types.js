"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignedVoteResponse = exports.SignedProposalResponse = exports.SignVoteRequest = exports.SignProposalRequest = exports.RemoteSignerError = exports.PubKeyResponse = exports.PubKeyRequest = exports.PingResponse = exports.PingRequest = exports.Message = exports.Errors = void 0;
exports.errorsFromJSON = errorsFromJSON;
exports.errorsToJSON = errorsToJSON;
var _keys = require("../crypto/keys");
var _types = require("../types/types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Errors = /*#__PURE__*/function (Errors) {
  Errors[Errors["ERRORS_UNKNOWN"] = 0] = "ERRORS_UNKNOWN";
  Errors[Errors["ERRORS_UNEXPECTED_RESPONSE"] = 1] = "ERRORS_UNEXPECTED_RESPONSE";
  Errors[Errors["ERRORS_NO_CONNECTION"] = 2] = "ERRORS_NO_CONNECTION";
  Errors[Errors["ERRORS_CONNECTION_TIMEOUT"] = 3] = "ERRORS_CONNECTION_TIMEOUT";
  Errors[Errors["ERRORS_READ_TIMEOUT"] = 4] = "ERRORS_READ_TIMEOUT";
  Errors[Errors["ERRORS_WRITE_TIMEOUT"] = 5] = "ERRORS_WRITE_TIMEOUT";
  Errors[Errors["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Errors;
}({});
exports.Errors = Errors;
function errorsFromJSON(object) {
  switch (object) {
    case 0:
    case "ERRORS_UNKNOWN":
      return Errors.ERRORS_UNKNOWN;
    case 1:
    case "ERRORS_UNEXPECTED_RESPONSE":
      return Errors.ERRORS_UNEXPECTED_RESPONSE;
    case 2:
    case "ERRORS_NO_CONNECTION":
      return Errors.ERRORS_NO_CONNECTION;
    case 3:
    case "ERRORS_CONNECTION_TIMEOUT":
      return Errors.ERRORS_CONNECTION_TIMEOUT;
    case 4:
    case "ERRORS_READ_TIMEOUT":
      return Errors.ERRORS_READ_TIMEOUT;
    case 5:
    case "ERRORS_WRITE_TIMEOUT":
      return Errors.ERRORS_WRITE_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Errors.UNRECOGNIZED;
  }
}
function errorsToJSON(object) {
  switch (object) {
    case Errors.ERRORS_UNKNOWN:
      return "ERRORS_UNKNOWN";
    case Errors.ERRORS_UNEXPECTED_RESPONSE:
      return "ERRORS_UNEXPECTED_RESPONSE";
    case Errors.ERRORS_NO_CONNECTION:
      return "ERRORS_NO_CONNECTION";
    case Errors.ERRORS_CONNECTION_TIMEOUT:
      return "ERRORS_CONNECTION_TIMEOUT";
    case Errors.ERRORS_READ_TIMEOUT:
      return "ERRORS_READ_TIMEOUT";
    case Errors.ERRORS_WRITE_TIMEOUT:
      return "ERRORS_WRITE_TIMEOUT";
    case Errors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** PubKeyRequest requests the consensus public key from the remote signer. */

/** PubKeyResponse is a response message containing the public key. */

/** SignVoteRequest is a request to sign a vote */

/** SignedVoteResponse is a response containing a signed vote or an error */

/** SignProposalRequest is a request to sign a proposal */

/** SignedProposalResponse is response containing a signed proposal or an error */

/** PingRequest is a request to confirm that the connection is alive. */

/** PingResponse is a response to confirm that the connection is alive. */

function createBaseRemoteSignerError() {
  return {
    code: 0,
    description: ""
  };
}
var RemoteSignerError = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRemoteSignerError();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.description = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$description;
    var message = createBaseRemoteSignerError();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    return message;
  }
};
exports.RemoteSignerError = RemoteSignerError;
function createBasePubKeyRequest() {
  return {
    chain_id: ""
  };
}
var PubKeyRequest = {
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
    var message = createBasePubKeyRequest();
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
    var message = createBasePubKeyRequest();
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    return message;
  }
};
exports.PubKeyRequest = PubKeyRequest;
function createBasePubKeyResponse() {
  return {
    pub_key: _keys.PublicKey.fromPartial({}),
    error: RemoteSignerError.fromPartial({})
  };
}
var PubKeyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pub_key !== undefined) {
      _keys.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePubKeyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = _keys.PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
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
      pub_key: (0, _helpers.isSet)(object.pub_key) ? _keys.PublicKey.fromJSON(object.pub_key) : undefined,
      error: (0, _helpers.isSet)(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePubKeyResponse();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? _keys.PublicKey.fromPartial(object.pub_key) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
exports.PubKeyResponse = PubKeyResponse;
function createBaseSignVoteRequest() {
  return {
    vote: _types.Vote.fromPartial({}),
    chain_id: ""
  };
}
var SignVoteRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignVoteRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = _types.Vote.decode(reader, reader.uint32());
          break;
        case 2:
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
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$chain_id2;
    var message = createBaseSignVoteRequest();
    message.vote = object.vote !== undefined && object.vote !== null ? _types.Vote.fromPartial(object.vote) : undefined;
    message.chain_id = (_object$chain_id2 = object.chain_id) !== null && _object$chain_id2 !== void 0 ? _object$chain_id2 : "";
    return message;
  }
};
exports.SignVoteRequest = SignVoteRequest;
function createBaseSignedVoteResponse() {
  return {
    vote: _types.Vote.fromPartial({}),
    error: RemoteSignerError.fromPartial({})
  };
}
var SignedVoteResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignedVoteResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = _types.Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
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
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined,
      error: (0, _helpers.isSet)(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignedVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? _types.Vote.fromPartial(object.vote) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
exports.SignedVoteResponse = SignedVoteResponse;
function createBaseSignProposalRequest() {
  return {
    proposal: _types.Proposal.fromPartial({}),
    chain_id: ""
  };
}
var SignProposalRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignProposalRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
          break;
        case 2:
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
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$chain_id3;
    var message = createBaseSignProposalRequest();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? _types.Proposal.fromPartial(object.proposal) : undefined;
    message.chain_id = (_object$chain_id3 = object.chain_id) !== null && _object$chain_id3 !== void 0 ? _object$chain_id3 : "";
    return message;
  }
};
exports.SignProposalRequest = SignProposalRequest;
function createBaseSignedProposalResponse() {
  return {
    proposal: _types.Proposal.fromPartial({}),
    error: RemoteSignerError.fromPartial({})
  };
}
var SignedProposalResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignedProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
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
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined,
      error: (0, _helpers.isSet)(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignedProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? _types.Proposal.fromPartial(object.proposal) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
exports.SignedProposalResponse = SignedProposalResponse;
function createBasePingRequest() {
  return {};
}
var PingRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePingRequest();
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
    var message = createBasePingRequest();
    return message;
  }
};
exports.PingRequest = PingRequest;
function createBasePingResponse() {
  return {};
}
var PingResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePingResponse();
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
    var message = createBasePingResponse();
    return message;
  }
};
exports.PingResponse = PingResponse;
function createBaseMessage() {
  return {
    pub_key_request: undefined,
    pub_key_response: undefined,
    sign_vote_request: undefined,
    signed_vote_response: undefined,
    sign_proposal_request: undefined,
    signed_proposal_response: undefined,
    ping_request: undefined,
    ping_response: undefined
  };
}
var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pub_key_request !== undefined) {
      PubKeyRequest.encode(message.pub_key_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.pub_key_response !== undefined) {
      PubKeyResponse.encode(message.pub_key_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.sign_vote_request !== undefined) {
      SignVoteRequest.encode(message.sign_vote_request, writer.uint32(26).fork()).ldelim();
    }
    if (message.signed_vote_response !== undefined) {
      SignedVoteResponse.encode(message.signed_vote_response, writer.uint32(34).fork()).ldelim();
    }
    if (message.sign_proposal_request !== undefined) {
      SignProposalRequest.encode(message.sign_proposal_request, writer.uint32(42).fork()).ldelim();
    }
    if (message.signed_proposal_response !== undefined) {
      SignedProposalResponse.encode(message.signed_proposal_response, writer.uint32(50).fork()).ldelim();
    }
    if (message.ping_request !== undefined) {
      PingRequest.encode(message.ping_request, writer.uint32(58).fork()).ldelim();
    }
    if (message.ping_response !== undefined) {
      PingResponse.encode(message.ping_response, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key_request = PubKeyRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.pub_key_response = PubKeyResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.sign_vote_request = SignVoteRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.signed_vote_response = SignedVoteResponse.decode(reader, reader.uint32());
          break;
        case 5:
          message.sign_proposal_request = SignProposalRequest.decode(reader, reader.uint32());
          break;
        case 6:
          message.signed_proposal_response = SignedProposalResponse.decode(reader, reader.uint32());
          break;
        case 7:
          message.ping_request = PingRequest.decode(reader, reader.uint32());
          break;
        case 8:
          message.ping_response = PingResponse.decode(reader, reader.uint32());
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
      pub_key_request: (0, _helpers.isSet)(object.pub_key_request) ? PubKeyRequest.fromJSON(object.pub_key_request) : undefined,
      pub_key_response: (0, _helpers.isSet)(object.pub_key_response) ? PubKeyResponse.fromJSON(object.pub_key_response) : undefined,
      sign_vote_request: (0, _helpers.isSet)(object.sign_vote_request) ? SignVoteRequest.fromJSON(object.sign_vote_request) : undefined,
      signed_vote_response: (0, _helpers.isSet)(object.signed_vote_response) ? SignedVoteResponse.fromJSON(object.signed_vote_response) : undefined,
      sign_proposal_request: (0, _helpers.isSet)(object.sign_proposal_request) ? SignProposalRequest.fromJSON(object.sign_proposal_request) : undefined,
      signed_proposal_response: (0, _helpers.isSet)(object.signed_proposal_response) ? SignedProposalResponse.fromJSON(object.signed_proposal_response) : undefined,
      ping_request: (0, _helpers.isSet)(object.ping_request) ? PingRequest.fromJSON(object.ping_request) : undefined,
      ping_response: (0, _helpers.isSet)(object.ping_response) ? PingResponse.fromJSON(object.ping_response) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
    message.pub_key_request = object.pub_key_request !== undefined && object.pub_key_request !== null ? PubKeyRequest.fromPartial(object.pub_key_request) : undefined;
    message.pub_key_response = object.pub_key_response !== undefined && object.pub_key_response !== null ? PubKeyResponse.fromPartial(object.pub_key_response) : undefined;
    message.sign_vote_request = object.sign_vote_request !== undefined && object.sign_vote_request !== null ? SignVoteRequest.fromPartial(object.sign_vote_request) : undefined;
    message.signed_vote_response = object.signed_vote_response !== undefined && object.signed_vote_response !== null ? SignedVoteResponse.fromPartial(object.signed_vote_response) : undefined;
    message.sign_proposal_request = object.sign_proposal_request !== undefined && object.sign_proposal_request !== null ? SignProposalRequest.fromPartial(object.sign_proposal_request) : undefined;
    message.signed_proposal_response = object.signed_proposal_response !== undefined && object.signed_proposal_response !== null ? SignedProposalResponse.fromPartial(object.signed_proposal_response) : undefined;
    message.ping_request = object.ping_request !== undefined && object.ping_request !== null ? PingRequest.fromPartial(object.ping_request) : undefined;
    message.ping_response = object.ping_response !== undefined && object.ping_response !== null ? PingResponse.fromPartial(object.ping_response) : undefined;
    return message;
  }
};
exports.Message = Message;