"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helpers = require("../../../../helpers");
var _query = require("./query");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.channel = this.channel.bind(this);
    this.channels = this.channels.bind(this);
    this.connectionChannels = this.connectionChannels.bind(this);
    this.channelClientState = this.channelClientState.bind(this);
    this.channelConsensusState = this.channelConsensusState.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
    this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
    this.nextSequenceSend = this.nextSequenceSend.bind(this);
  }
  /* Channel queries an IBC Channel. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "channel",
    value: function () {
      var _channel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id);
              _context.t0 = _query.QueryChannelResponse;
              _context.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.fromJSON.call(_context.t0, _context.t1));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function channel(_x) {
        return _channel.apply(this, arguments);
      }
      return channel;
    }() /* Channels queries all the IBC channels of a chain. */
  }, {
    key: "channels",
    value: function () {
      var _channels = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var params,
          options,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "ibc/core/channel/v1/channels";
              _context2.t0 = _query.QueryChannelsResponse;
              _context2.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.fromJSON.call(_context2.t0, _context2.t1));
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function channels() {
        return _channels.apply(this, arguments);
      }
      return channels;
    }()
    /* ConnectionChannels queries all the channels associated with a connection
     end. */
  }, {
    key: "connectionChannels",
    value: function () {
      var _connectionChannels = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "ibc/core/channel/v1/connections/".concat(params.connection, "/channels");
              _context3.t0 = _query.QueryConnectionChannelsResponse;
              _context3.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", _context3.t0.fromJSON.call(_context3.t0, _context3.t1));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function connectionChannels(_x2) {
        return _connectionChannels.apply(this, arguments);
      }
      return connectionChannels;
    }()
    /* ChannelClientState queries for the client state for the channel associated
     with the provided channel identifiers. */
  }, {
    key: "channelClientState",
    value: function () {
      var _channelClientState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/client_state");
              _context4.t0 = _query.QueryChannelClientStateResponse;
              _context4.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context4.t1 = _context4.sent;
              return _context4.abrupt("return", _context4.t0.fromJSON.call(_context4.t0, _context4.t1));
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function channelClientState(_x3) {
        return _channelClientState.apply(this, arguments);
      }
      return channelClientState;
    }()
    /* ChannelConsensusState queries for the consensus state for the channel
     associated with the provided channel identifiers. */
  }, {
    key: "channelConsensusState",
    value: function () {
      var _channelConsensusState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/consensus_state/revision/").concat(params.revision_number, "/height/").concat(params.revision_height);
              _context5.t0 = _query.QueryChannelConsensusStateResponse;
              _context5.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context5.t1 = _context5.sent;
              return _context5.abrupt("return", _context5.t0.fromJSON.call(_context5.t0, _context5.t1));
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function channelConsensusState(_x4) {
        return _channelConsensusState.apply(this, arguments);
      }
      return channelConsensusState;
    }() /* PacketCommitment queries a stored packet commitment hash. */
  }, {
    key: "packetCommitment",
    value: function () {
      var _packetCommitment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_commitments/").concat(params.sequence);
              _context6.t0 = _query.QueryPacketCommitmentResponse;
              _context6.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context6.t1 = _context6.sent;
              return _context6.abrupt("return", _context6.t0.fromJSON.call(_context6.t0, _context6.t1));
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function packetCommitment(_x5) {
        return _packetCommitment.apply(this, arguments);
      }
      return packetCommitment;
    }()
    /* PacketCommitments returns all the packet commitments hashes associated
     with a channel. */
  }, {
    key: "packetCommitments",
    value: function () {
      var _packetCommitments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_commitments");
              _context7.t0 = _query.QueryPacketCommitmentsResponse;
              _context7.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context7.t1 = _context7.sent;
              return _context7.abrupt("return", _context7.t0.fromJSON.call(_context7.t0, _context7.t1));
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function packetCommitments(_x6) {
        return _packetCommitments.apply(this, arguments);
      }
      return packetCommitments;
    }()
    /* PacketReceipt queries if a given packet sequence has been received on the
     queried chain */
  }, {
    key: "packetReceipt",
    value: function () {
      var _packetReceipt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_receipts/").concat(params.sequence);
              _context8.t0 = _query.QueryPacketReceiptResponse;
              _context8.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context8.t1 = _context8.sent;
              return _context8.abrupt("return", _context8.t0.fromJSON.call(_context8.t0, _context8.t1));
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function packetReceipt(_x7) {
        return _packetReceipt.apply(this, arguments);
      }
      return packetReceipt;
    }() /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  }, {
    key: "packetAcknowledgement",
    value: function () {
      var _packetAcknowledgement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_acks/").concat(params.sequence);
              _context9.t0 = _query.QueryPacketAcknowledgementResponse;
              _context9.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context9.t1 = _context9.sent;
              return _context9.abrupt("return", _context9.t0.fromJSON.call(_context9.t0, _context9.t1));
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function packetAcknowledgement(_x8) {
        return _packetAcknowledgement.apply(this, arguments);
      }
      return packetAcknowledgement;
    }()
    /* PacketAcknowledgements returns all the packet acknowledgements associated
     with a channel. */
  }, {
    key: "packetAcknowledgements",
    value: function () {
      var _packetAcknowledgements = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.packet_commitment_sequences) !== "undefined") {
                options.params.packet_commitment_sequences = params.packet_commitment_sequences;
              }
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_acknowledgements");
              _context10.t0 = _query.QueryPacketAcknowledgementsResponse;
              _context10.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context10.t1 = _context10.sent;
              return _context10.abrupt("return", _context10.t0.fromJSON.call(_context10.t0, _context10.t1));
            case 9:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function packetAcknowledgements(_x9) {
        return _packetAcknowledgements.apply(this, arguments);
      }
      return packetAcknowledgements;
    }()
    /* UnreceivedPackets returns all the unreceived IBC packets associated with a
     channel and sequences. */
  }, {
    key: "unreceivedPackets",
    value: function () {
      var _unreceivedPackets = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_commitments/").concat(params.packet_commitment_sequences, "/unreceived_packets");
              _context11.t0 = _query.QueryUnreceivedPacketsResponse;
              _context11.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context11.t1 = _context11.sent;
              return _context11.abrupt("return", _context11.t0.fromJSON.call(_context11.t0, _context11.t1));
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function unreceivedPackets(_x10) {
        return _unreceivedPackets.apply(this, arguments);
      }
      return unreceivedPackets;
    }()
    /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     with a channel and sequences. */
  }, {
    key: "unreceivedAcks",
    value: function () {
      var _unreceivedAcks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/packet_commitments/").concat(params.packet_ack_sequences, "/unreceived_acks");
              _context12.t0 = _query.QueryUnreceivedAcksResponse;
              _context12.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context12.t1 = _context12.sent;
              return _context12.abrupt("return", _context12.t0.fromJSON.call(_context12.t0, _context12.t1));
            case 6:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function unreceivedAcks(_x11) {
        return _unreceivedAcks.apply(this, arguments);
      }
      return unreceivedAcks;
    }() /* NextSequenceReceive returns the next receive sequence for a given channel. */
  }, {
    key: "nextSequenceReceive",
    value: function () {
      var _nextSequenceReceive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/next_sequence");
              _context13.t0 = _query.QueryNextSequenceReceiveResponse;
              _context13.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context13.t1 = _context13.sent;
              return _context13.abrupt("return", _context13.t0.fromJSON.call(_context13.t0, _context13.t1));
            case 6:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function nextSequenceReceive(_x12) {
        return _nextSequenceReceive.apply(this, arguments);
      }
      return nextSequenceReceive;
    }() /* NextSequenceSend returns the next send sequence for a given channel. */
  }, {
    key: "nextSequenceSend",
    value: function () {
      var _nextSequenceSend = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              endpoint = "ibc/core/channel/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/next_sequence_send");
              _context14.t0 = _query.QueryNextSequenceSendResponse;
              _context14.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context14.t1 = _context14.sent;
              return _context14.abrupt("return", _context14.t0.fromJSON.call(_context14.t0, _context14.t1));
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function nextSequenceSend(_x13) {
        return _nextSequenceSend.apply(this, arguments);
      }
      return nextSequenceSend;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;