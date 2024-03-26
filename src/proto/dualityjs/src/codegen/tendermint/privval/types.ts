import { PublicKey } from "../crypto/keys";
import { Vote, Proposal } from "../types/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export enum Errors {
  ERRORS_UNKNOWN = 0,
  ERRORS_UNEXPECTED_RESPONSE = 1,
  ERRORS_NO_CONNECTION = 2,
  ERRORS_CONNECTION_TIMEOUT = 3,
  ERRORS_READ_TIMEOUT = 4,
  ERRORS_WRITE_TIMEOUT = 5,
  UNRECOGNIZED = -1,
}
export function errorsFromJSON(object: any): Errors {
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
export function errorsToJSON(object: Errors): string {
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
export interface RemoteSignerError {
  code: number;
  description: string;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
  chain_id: string;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
  pub_key: PublicKey;
  error: RemoteSignerError;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
  vote: Vote;
  chain_id: string;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
  vote: Vote;
  error: RemoteSignerError;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
  proposal: Proposal;
  chain_id: string;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
  proposal: Proposal;
  error: RemoteSignerError;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {}
export interface Message {
  pub_key_request?: PubKeyRequest;
  pub_key_response?: PubKeyResponse;
  sign_vote_request?: SignVoteRequest;
  signed_vote_response?: SignedVoteResponse;
  sign_proposal_request?: SignProposalRequest;
  signed_proposal_response?: SignedProposalResponse;
  ping_request?: PingRequest;
  ping_response?: PingResponse;
}
function createBaseRemoteSignerError(): RemoteSignerError {
  return {
    code: 0,
    description: ""
  };
}
export const RemoteSignerError = {
  encode(message: RemoteSignerError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSignerError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteSignerError();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object: any): RemoteSignerError {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: DeepPartial<RemoteSignerError>): RemoteSignerError {
    const message = createBaseRemoteSignerError();
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    return message;
  }
};
function createBasePubKeyRequest(): PubKeyRequest {
  return {
    chain_id: ""
  };
}
export const PubKeyRequest = {
  encode(message: PubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyRequest();
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
  fromJSON(object: any): PubKeyRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial(object: DeepPartial<PubKeyRequest>): PubKeyRequest {
    const message = createBasePubKeyRequest();
    message.chain_id = object.chain_id ?? "";
    return message;
  }
};
function createBasePubKeyResponse(): PubKeyResponse {
  return {
    pub_key: PublicKey.fromPartial({}),
    error: RemoteSignerError.fromPartial({})
  };
}
export const PubKeyResponse = {
  encode(message: PubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
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
  fromJSON(object: any): PubKeyResponse {
    return {
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial(object: DeepPartial<PubKeyResponse>): PubKeyResponse {
    const message = createBasePubKeyResponse();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
function createBaseSignVoteRequest(): SignVoteRequest {
  return {
    vote: Vote.fromPartial({}),
    chain_id: ""
  };
}
export const SignVoteRequest = {
  encode(message: SignVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
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
  fromJSON(object: any): SignVoteRequest {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial(object: DeepPartial<SignVoteRequest>): SignVoteRequest {
    const message = createBaseSignVoteRequest();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.chain_id = object.chain_id ?? "";
    return message;
  }
};
function createBaseSignedVoteResponse(): SignedVoteResponse {
  return {
    vote: Vote.fromPartial({}),
    error: RemoteSignerError.fromPartial({})
  };
}
export const SignedVoteResponse = {
  encode(message: SignedVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignedVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
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
  fromJSON(object: any): SignedVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial(object: DeepPartial<SignedVoteResponse>): SignedVoteResponse {
    const message = createBaseSignedVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
function createBaseSignProposalRequest(): SignProposalRequest {
  return {
    proposal: Proposal.fromPartial({}),
    chain_id: ""
  };
}
export const SignProposalRequest = {
  encode(message: SignProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
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
  fromJSON(object: any): SignProposalRequest {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  fromPartial(object: DeepPartial<SignProposalRequest>): SignProposalRequest {
    const message = createBaseSignProposalRequest();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.chain_id = object.chain_id ?? "";
    return message;
  }
};
function createBaseSignedProposalResponse(): SignedProposalResponse {
  return {
    proposal: Proposal.fromPartial({}),
    error: RemoteSignerError.fromPartial({})
  };
}
export const SignedProposalResponse = {
  encode(message: SignedProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignedProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
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
  fromJSON(object: any): SignedProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial(object: DeepPartial<SignedProposalResponse>): SignedProposalResponse {
    const message = createBaseSignedProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
function createBasePingRequest(): PingRequest {
  return {};
}
export const PingRequest = {
  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
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
  fromJSON(_: any): PingRequest {
    return {};
  },
  fromPartial(_: DeepPartial<PingRequest>): PingRequest {
    const message = createBasePingRequest();
    return message;
  }
};
function createBasePingResponse(): PingResponse {
  return {};
}
export const PingResponse = {
  encode(_: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
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
  fromJSON(_: any): PingResponse {
    return {};
  },
  fromPartial(_: DeepPartial<PingResponse>): PingResponse {
    const message = createBasePingResponse();
    return message;
  }
};
function createBaseMessage(): Message {
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
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object: any): Message {
    return {
      pub_key_request: isSet(object.pub_key_request) ? PubKeyRequest.fromJSON(object.pub_key_request) : undefined,
      pub_key_response: isSet(object.pub_key_response) ? PubKeyResponse.fromJSON(object.pub_key_response) : undefined,
      sign_vote_request: isSet(object.sign_vote_request) ? SignVoteRequest.fromJSON(object.sign_vote_request) : undefined,
      signed_vote_response: isSet(object.signed_vote_response) ? SignedVoteResponse.fromJSON(object.signed_vote_response) : undefined,
      sign_proposal_request: isSet(object.sign_proposal_request) ? SignProposalRequest.fromJSON(object.sign_proposal_request) : undefined,
      signed_proposal_response: isSet(object.signed_proposal_response) ? SignedProposalResponse.fromJSON(object.signed_proposal_response) : undefined,
      ping_request: isSet(object.ping_request) ? PingRequest.fromJSON(object.ping_request) : undefined,
      ping_response: isSet(object.ping_response) ? PingResponse.fromJSON(object.ping_response) : undefined
    };
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
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