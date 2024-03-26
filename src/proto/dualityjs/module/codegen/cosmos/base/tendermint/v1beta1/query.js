import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** Validator is the type for the validator-set. */

/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */

/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */

/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */

/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */

/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */

/** VersionInfo is the type for the GetNodeInfoResponse message. */

/** Module is the type for VersionInfo */

/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */

/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 * 
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */

/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 * 
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */

/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 * 
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */

function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: Long.ZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const GetValidatorSetByHeightRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetValidatorSetByHeightResponse() {
  return {
    block_height: Long.ZERO,
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const GetValidatorSetByHeightResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block_height.isZero()) {
      writer.uint32(8).int64(message.block_height);
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_height = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      block_height: isSet(object.block_height) ? Long.fromValue(object.block_height) : Long.ZERO,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseGetValidatorSetByHeightResponse();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? Long.fromValue(object.block_height) : Long.ZERO;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const GetLatestValidatorSetRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetLatestValidatorSetResponse() {
  return {
    block_height: Long.ZERO,
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const GetLatestValidatorSetResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block_height.isZero()) {
      writer.uint32(8).int64(message.block_height);
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_height = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      block_height: isSet(object.block_height) ? Long.fromValue(object.block_height) : Long.ZERO,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$validators2;
    const message = createBaseGetLatestValidatorSetResponse();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? Long.fromValue(object.block_height) : Long.ZERO;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(e => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseValidator() {
  return {
    address: "",
    pub_key: Any.fromPartial({}),
    voting_power: Long.ZERO,
    proposer_priority: Long.ZERO
  };
}
export const Validator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pub_key !== undefined) {
      Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (!message.voting_power.isZero()) {
      writer.uint32(24).int64(message.voting_power);
    }
    if (!message.proposer_priority.isZero()) {
      writer.uint32(32).int64(message.proposer_priority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pub_key = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.voting_power = reader.int64();
          break;
        case 4:
          message.proposer_priority = reader.int64();
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
      address: isSet(object.address) ? String(object.address) : "",
      pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? Long.fromValue(object.voting_power) : Long.ZERO,
      proposer_priority: isSet(object.proposer_priority) ? Long.fromValue(object.proposer_priority) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
    message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? Long.fromValue(object.voting_power) : Long.ZERO;
    message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? Long.fromValue(object.proposer_priority) : Long.ZERO;
    return message;
  }
};
function createBaseGetBlockByHeightRequest() {
  return {
    height: Long.ZERO
  };
}
export const GetBlockByHeightRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object) {
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseGetBlockByHeightResponse() {
  return {
    block_id: BlockID.fromPartial({}),
    block: Block1.fromPartial({}),
    sdk_block: Block2.fromPartial({})
  };
}
export const GetBlockByHeightResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdk_block !== undefined) {
      Block2.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdk_block = Block2.decode(reader, reader.uint32());
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
      block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      block: isSet(object.block) ? Block1.fromJSON(object.block) : undefined,
      sdk_block: isSet(object.sdk_block) ? Block2.fromJSON(object.sdk_block) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetBlockByHeightResponse();
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block1.fromPartial(object.block) : undefined;
    message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? Block2.fromPartial(object.sdk_block) : undefined;
    return message;
  }
};
function createBaseGetLatestBlockRequest() {
  return {};
}
export const GetLatestBlockRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetLatestBlockRequest();
    return message;
  }
};
function createBaseGetLatestBlockResponse() {
  return {
    block_id: BlockID.fromPartial({}),
    block: Block1.fromPartial({}),
    sdk_block: Block2.fromPartial({})
  };
}
export const GetLatestBlockResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdk_block !== undefined) {
      Block2.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdk_block = Block2.decode(reader, reader.uint32());
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
      block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
      block: isSet(object.block) ? Block1.fromJSON(object.block) : undefined,
      sdk_block: isSet(object.sdk_block) ? Block2.fromJSON(object.sdk_block) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetLatestBlockResponse();
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block1.fromPartial(object.block) : undefined;
    message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? Block2.fromPartial(object.sdk_block) : undefined;
    return message;
  }
};
function createBaseGetSyncingRequest() {
  return {};
}
export const GetSyncingRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetSyncingRequest();
    return message;
  }
};
function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}
export const GetSyncingResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
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
      syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  fromPartial(object) {
    var _object$syncing;
    const message = createBaseGetSyncingResponse();
    message.syncing = (_object$syncing = object.syncing) !== null && _object$syncing !== void 0 ? _object$syncing : false;
    return message;
  }
};
function createBaseGetNodeInfoRequest() {
  return {};
}
export const GetNodeInfoRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseGetNodeInfoRequest();
    return message;
  }
};
function createBaseGetNodeInfoResponse() {
  return {
    default_node_info: DefaultNodeInfo.fromPartial({}),
    application_version: VersionInfo.fromPartial({})
  };
}
export const GetNodeInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.default_node_info !== undefined) {
      DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
    }
    if (message.application_version !== undefined) {
      VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.default_node_info = DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.application_version = VersionInfo.decode(reader, reader.uint32());
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
      default_node_info: isSet(object.default_node_info) ? DefaultNodeInfo.fromJSON(object.default_node_info) : undefined,
      application_version: isSet(object.application_version) ? VersionInfo.fromJSON(object.application_version) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGetNodeInfoResponse();
    message.default_node_info = object.default_node_info !== undefined && object.default_node_info !== null ? DefaultNodeInfo.fromPartial(object.default_node_info) : undefined;
    message.application_version = object.application_version !== undefined && object.application_version !== null ? VersionInfo.fromPartial(object.application_version) : undefined;
    return message;
  }
};
function createBaseVersionInfo() {
  return {
    name: "",
    app_name: "",
    version: "",
    git_commit: "",
    build_tags: "",
    go_version: "",
    build_deps: [],
    cosmos_sdk_version: ""
  };
}
export const VersionInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.app_name !== "") {
      writer.uint32(18).string(message.app_name);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.git_commit !== "") {
      writer.uint32(34).string(message.git_commit);
    }
    if (message.build_tags !== "") {
      writer.uint32(42).string(message.build_tags);
    }
    if (message.go_version !== "") {
      writer.uint32(50).string(message.go_version);
    }
    for (const v of message.build_deps) {
      Module.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmos_sdk_version !== "") {
      writer.uint32(66).string(message.cosmos_sdk_version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.app_name = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.git_commit = reader.string();
          break;
        case 5:
          message.build_tags = reader.string();
          break;
        case 6:
          message.go_version = reader.string();
          break;
        case 7:
          message.build_deps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmos_sdk_version = reader.string();
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
      name: isSet(object.name) ? String(object.name) : "",
      app_name: isSet(object.app_name) ? String(object.app_name) : "",
      version: isSet(object.version) ? String(object.version) : "",
      git_commit: isSet(object.git_commit) ? String(object.git_commit) : "",
      build_tags: isSet(object.build_tags) ? String(object.build_tags) : "",
      go_version: isSet(object.go_version) ? String(object.go_version) : "",
      build_deps: Array.isArray(object === null || object === void 0 ? void 0 : object.build_deps) ? object.build_deps.map(e => Module.fromJSON(e)) : [],
      cosmos_sdk_version: isSet(object.cosmos_sdk_version) ? String(object.cosmos_sdk_version) : ""
    };
  },
  fromPartial(object) {
    var _object$name, _object$app_name, _object$version, _object$git_commit, _object$build_tags, _object$go_version, _object$build_deps, _object$cosmos_sdk_ve;
    const message = createBaseVersionInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.app_name = (_object$app_name = object.app_name) !== null && _object$app_name !== void 0 ? _object$app_name : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.git_commit = (_object$git_commit = object.git_commit) !== null && _object$git_commit !== void 0 ? _object$git_commit : "";
    message.build_tags = (_object$build_tags = object.build_tags) !== null && _object$build_tags !== void 0 ? _object$build_tags : "";
    message.go_version = (_object$go_version = object.go_version) !== null && _object$go_version !== void 0 ? _object$go_version : "";
    message.build_deps = ((_object$build_deps = object.build_deps) === null || _object$build_deps === void 0 ? void 0 : _object$build_deps.map(e => Module.fromPartial(e))) || [];
    message.cosmos_sdk_version = (_object$cosmos_sdk_ve = object.cosmos_sdk_version) !== null && _object$cosmos_sdk_ve !== void 0 ? _object$cosmos_sdk_ve : "";
    return message;
  }
};
function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
export const Module = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
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
      path: isSet(object.path) ? String(object.path) : "",
      version: isSet(object.version) ? String(object.version) : "",
      sum: isSet(object.sum) ? String(object.sum) : ""
    };
  },
  fromPartial(object) {
    var _object$path, _object$version2, _object$sum;
    const message = createBaseModule();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.sum = (_object$sum = object.sum) !== null && _object$sum !== void 0 ? _object$sum : "";
    return message;
  }
};
function createBaseABCIQueryRequest() {
  return {
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false
  };
}
export const ABCIQueryRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      prove: isSet(object.prove) ? Boolean(object.prove) : false
    };
  },
  fromPartial(object) {
    var _object$data, _object$path2, _object$prove;
    const message = createBaseABCIQueryRequest();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path2 = object.path) !== null && _object$path2 !== void 0 ? _object$path2 : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
function createBaseABCIQueryResponse() {
  return {
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proof_ops: ProofOps.fromPartial({}),
    height: Long.ZERO,
    codespace: ""
  };
}
export const ABCIQueryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proof_ops !== undefined) {
      ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proof_ops = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
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
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  fromPartial(object) {
    var _object$code, _object$log, _object$info, _object$key, _object$value, _object$codespace;
    const message = createBaseABCIQueryResponse();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const ProofOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
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
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$type, _object$key2, _object$data2;
    const message = createBaseProofOp();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
function createBaseProofOps() {
  return {
    ops: []
  };
}
export const ProofOps = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.ops) {
      ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
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
      ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops) ? object.ops.map(e => ProofOp.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$ops;
    const message = createBaseProofOps();
    message.ops = ((_object$ops = object.ops) === null || _object$ops === void 0 ? void 0 : _object$ops.map(e => ProofOp.fromPartial(e))) || [];
    return message;
  }
};