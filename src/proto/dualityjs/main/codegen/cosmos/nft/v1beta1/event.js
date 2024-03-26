"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventSend = exports.EventMint = exports.EventBurn = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** EventSend is emitted on Msg/Send */

/** EventMint is emitted on Mint */

/** EventBurn is emitted on Burn */

function createBaseEventSend() {
  return {
    class_id: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
var EventSend = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventSend();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class_id = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
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
      class_id: (0, _helpers.isSet)(object.class_id) ? String(object.class_id) : "",
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : "",
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$class_id, _object$id, _object$sender, _object$receiver;
    var message = createBaseEventSend();
    message.class_id = (_object$class_id = object.class_id) !== null && _object$class_id !== void 0 ? _object$class_id : "";
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    return message;
  }
};
exports.EventSend = EventSend;
function createBaseEventMint() {
  return {
    class_id: "",
    id: "",
    owner: ""
  };
}
var EventMint = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventMint();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class_id = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
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
      class_id: (0, _helpers.isSet)(object.class_id) ? String(object.class_id) : "",
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : "",
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$class_id2, _object$id2, _object$owner;
    var message = createBaseEventMint();
    message.class_id = (_object$class_id2 = object.class_id) !== null && _object$class_id2 !== void 0 ? _object$class_id2 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
exports.EventMint = EventMint;
function createBaseEventBurn() {
  return {
    class_id: "",
    id: "",
    owner: ""
  };
}
var EventBurn = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventBurn();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class_id = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
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
      class_id: (0, _helpers.isSet)(object.class_id) ? String(object.class_id) : "",
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : "",
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$class_id3, _object$id3, _object$owner2;
    var message = createBaseEventBurn();
    message.class_id = (_object$class_id3 = object.class_id) !== null && _object$class_id3 !== void 0 ? _object$class_id3 : "";
    message.id = (_object$id3 = object.id) !== null && _object$id3 !== void 0 ? _object$id3 : "";
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  }
};
exports.EventBurn = EventBurn;