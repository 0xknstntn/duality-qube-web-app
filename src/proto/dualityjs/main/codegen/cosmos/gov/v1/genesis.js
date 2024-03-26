"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _gov = require("./gov");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the gov module's genesis state. */

function createBaseGenesisState() {
  return {
    starting_proposal_id: _helpers.Long.UZERO,
    deposits: [],
    votes: [],
    proposals: [],
    deposit_params: _gov.DepositParams.fromPartial({}),
    voting_params: _gov.VotingParams.fromPartial({}),
    tally_params: _gov.TallyParams.fromPartial({}),
    params: _gov.Params.fromPartial({})
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.starting_proposal_id.isZero()) {
      writer.uint32(8).uint64(message.starting_proposal_id);
    }
    var _iterator = _createForOfIteratorHelper(message.deposits),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _gov.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.votes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _gov.Vote.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.proposals),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _gov.Proposal.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.deposit_params !== undefined) {
      _gov.DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).ldelim();
    }
    if (message.voting_params !== undefined) {
      _gov.VotingParams.encode(message.voting_params, writer.uint32(50).fork()).ldelim();
    }
    if (message.tally_params !== undefined) {
      _gov.TallyParams.encode(message.tally_params, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      _gov.Params.encode(message.params, writer.uint32(66).fork()).ldelim();
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
          message.starting_proposal_id = reader.uint64();
          break;
        case 2:
          message.deposits.push(_gov.Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(_gov.Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(_gov.Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.deposit_params = _gov.DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.voting_params = _gov.VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tally_params = _gov.TallyParams.decode(reader, reader.uint32());
          break;
        case 8:
          message.params = _gov.Params.decode(reader, reader.uint32());
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
      starting_proposal_id: (0, _helpers.isSet)(object.starting_proposal_id) ? _helpers.Long.fromValue(object.starting_proposal_id) : _helpers.Long.UZERO,
      deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map(function (e) {
        return _gov.Deposit.fromJSON(e);
      }) : [],
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return _gov.Vote.fromJSON(e);
      }) : [],
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) {
        return _gov.Proposal.fromJSON(e);
      }) : [],
      deposit_params: (0, _helpers.isSet)(object.deposit_params) ? _gov.DepositParams.fromJSON(object.deposit_params) : undefined,
      voting_params: (0, _helpers.isSet)(object.voting_params) ? _gov.VotingParams.fromJSON(object.voting_params) : undefined,
      tally_params: (0, _helpers.isSet)(object.tally_params) ? _gov.TallyParams.fromJSON(object.tally_params) : undefined,
      params: (0, _helpers.isSet)(object.params) ? _gov.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$deposits, _object$votes, _object$proposals;
    var message = createBaseGenesisState();
    message.starting_proposal_id = object.starting_proposal_id !== undefined && object.starting_proposal_id !== null ? _helpers.Long.fromValue(object.starting_proposal_id) : _helpers.Long.UZERO;
    message.deposits = ((_object$deposits = object.deposits) === null || _object$deposits === void 0 ? void 0 : _object$deposits.map(function (e) {
      return _gov.Deposit.fromPartial(e);
    })) || [];
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return _gov.Vote.fromPartial(e);
    })) || [];
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(function (e) {
      return _gov.Proposal.fromPartial(e);
    })) || [];
    message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? _gov.DepositParams.fromPartial(object.deposit_params) : undefined;
    message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? _gov.VotingParams.fromPartial(object.voting_params) : undefined;
    message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? _gov.TallyParams.fromPartial(object.tally_params) : undefined;
    message.params = object.params !== undefined && object.params !== null ? _gov.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.GenesisState = GenesisState;