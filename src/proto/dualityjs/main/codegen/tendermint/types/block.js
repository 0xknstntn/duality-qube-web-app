"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;
var _types = require("./types");
var _evidence = require("./evidence");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseBlock() {
  return {
    header: _types.Header.fromPartial({}),
    data: _types.Data.fromPartial({}),
    evidence: _evidence.EvidenceList.fromPartial({}),
    last_commit: _types.Commit.fromPartial({})
  };
}
var Block = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      _types.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      _evidence.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.last_commit !== undefined) {
      _types.Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = _types.Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = _evidence.EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.last_commit = _types.Commit.decode(reader, reader.uint32());
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
      header: (0, _helpers.isSet)(object.header) ? _types.Header.fromJSON(object.header) : undefined,
      data: (0, _helpers.isSet)(object.data) ? _types.Data.fromJSON(object.data) : undefined,
      evidence: (0, _helpers.isSet)(object.evidence) ? _evidence.EvidenceList.fromJSON(object.evidence) : undefined,
      last_commit: (0, _helpers.isSet)(object.last_commit) ? _types.Commit.fromJSON(object.last_commit) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? _types.Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _evidence.EvidenceList.fromPartial(object.evidence) : undefined;
    message.last_commit = object.last_commit !== undefined && object.last_commit !== null ? _types.Commit.fromPartial(object.last_commit) : undefined;
    return message;
  }
};
exports.Block = Block;