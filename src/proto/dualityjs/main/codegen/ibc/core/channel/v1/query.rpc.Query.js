"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _reactQuery = require("@tanstack/react-query");
var _query = require("./query");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Query provides defines the gRPC querier service */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
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
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "channel",
    value: function channel(request) {
      var data = _query.QueryChannelRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
      return promise.then(function (data) {
        return _query.QueryChannelResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "channels",
    value: function channels() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryChannelsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
      return promise.then(function (data) {
        return _query.QueryChannelsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionChannels",
    value: function connectionChannels(request) {
      var data = _query.QueryConnectionChannelsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
      return promise.then(function (data) {
        return _query.QueryConnectionChannelsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "channelClientState",
    value: function channelClientState(request) {
      var data = _query.QueryChannelClientStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
      return promise.then(function (data) {
        return _query.QueryChannelClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "channelConsensusState",
    value: function channelConsensusState(request) {
      var data = _query.QueryChannelConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryChannelConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetCommitment",
    value: function packetCommitment(request) {
      var data = _query.QueryPacketCommitmentRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
      return promise.then(function (data) {
        return _query.QueryPacketCommitmentResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetCommitments",
    value: function packetCommitments(request) {
      var data = _query.QueryPacketCommitmentsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
      return promise.then(function (data) {
        return _query.QueryPacketCommitmentsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetReceipt",
    value: function packetReceipt(request) {
      var data = _query.QueryPacketReceiptRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
      return promise.then(function (data) {
        return _query.QueryPacketReceiptResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetAcknowledgement",
    value: function packetAcknowledgement(request) {
      var data = _query.QueryPacketAcknowledgementRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
      return promise.then(function (data) {
        return _query.QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetAcknowledgements",
    value: function packetAcknowledgements(request) {
      var data = _query.QueryPacketAcknowledgementsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
      return promise.then(function (data) {
        return _query.QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unreceivedPackets",
    value: function unreceivedPackets(request) {
      var data = _query.QueryUnreceivedPacketsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
      return promise.then(function (data) {
        return _query.QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unreceivedAcks",
    value: function unreceivedAcks(request) {
      var data = _query.QueryUnreceivedAcksRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
      return promise.then(function (data) {
        return _query.QueryUnreceivedAcksResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "nextSequenceReceive",
    value: function nextSequenceReceive(request) {
      var data = _query.QueryNextSequenceReceiveRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
      return promise.then(function (data) {
        return _query.QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "nextSequenceSend",
    value: function nextSequenceSend(request) {
      var data = _query.QueryNextSequenceSendRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceSend", data);
      return promise.then(function (data) {
        return _query.QueryNextSequenceSendResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new QueryClientImpl(rpc);
  return {
    channel: function channel(request) {
      return queryService.channel(request);
    },
    channels: function channels(request) {
      return queryService.channels(request);
    },
    connectionChannels: function connectionChannels(request) {
      return queryService.connectionChannels(request);
    },
    channelClientState: function channelClientState(request) {
      return queryService.channelClientState(request);
    },
    channelConsensusState: function channelConsensusState(request) {
      return queryService.channelConsensusState(request);
    },
    packetCommitment: function packetCommitment(request) {
      return queryService.packetCommitment(request);
    },
    packetCommitments: function packetCommitments(request) {
      return queryService.packetCommitments(request);
    },
    packetReceipt: function packetReceipt(request) {
      return queryService.packetReceipt(request);
    },
    packetAcknowledgement: function packetAcknowledgement(request) {
      return queryService.packetAcknowledgement(request);
    },
    packetAcknowledgements: function packetAcknowledgements(request) {
      return queryService.packetAcknowledgements(request);
    },
    unreceivedPackets: function unreceivedPackets(request) {
      return queryService.unreceivedPackets(request);
    },
    unreceivedAcks: function unreceivedAcks(request) {
      return queryService.unreceivedAcks(request);
    },
    nextSequenceReceive: function nextSequenceReceive(request) {
      return queryService.nextSequenceReceive(request);
    },
    nextSequenceSend: function nextSequenceSend(request) {
      return queryService.nextSequenceSend(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
var _queryClients = new WeakMap();
var getQueryService = function getQueryService(rpc) {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  var queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
var createRpcQueryHooks = function createRpcQueryHooks(rpc) {
  var queryService = getQueryService(rpc);
  var useChannel = function useChannel(_ref) {
    var request = _ref.request,
      options = _ref.options;
    return (0, _reactQuery.useQuery)(["channelQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channel(request);
    }, options);
  };
  var useChannels = function useChannels(_ref2) {
    var request = _ref2.request,
      options = _ref2.options;
    return (0, _reactQuery.useQuery)(["channelsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channels(request);
    }, options);
  };
  var useConnectionChannels = function useConnectionChannels(_ref3) {
    var request = _ref3.request,
      options = _ref3.options;
    return (0, _reactQuery.useQuery)(["connectionChannelsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionChannels(request);
    }, options);
  };
  var useChannelClientState = function useChannelClientState(_ref4) {
    var request = _ref4.request,
      options = _ref4.options;
    return (0, _reactQuery.useQuery)(["channelClientStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channelClientState(request);
    }, options);
  };
  var useChannelConsensusState = function useChannelConsensusState(_ref5) {
    var request = _ref5.request,
      options = _ref5.options;
    return (0, _reactQuery.useQuery)(["channelConsensusStateQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channelConsensusState(request);
    }, options);
  };
  var usePacketCommitment = function usePacketCommitment(_ref6) {
    var request = _ref6.request,
      options = _ref6.options;
    return (0, _reactQuery.useQuery)(["packetCommitmentQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetCommitment(request);
    }, options);
  };
  var usePacketCommitments = function usePacketCommitments(_ref7) {
    var request = _ref7.request,
      options = _ref7.options;
    return (0, _reactQuery.useQuery)(["packetCommitmentsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetCommitments(request);
    }, options);
  };
  var usePacketReceipt = function usePacketReceipt(_ref8) {
    var request = _ref8.request,
      options = _ref8.options;
    return (0, _reactQuery.useQuery)(["packetReceiptQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetReceipt(request);
    }, options);
  };
  var usePacketAcknowledgement = function usePacketAcknowledgement(_ref9) {
    var request = _ref9.request,
      options = _ref9.options;
    return (0, _reactQuery.useQuery)(["packetAcknowledgementQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetAcknowledgement(request);
    }, options);
  };
  var usePacketAcknowledgements = function usePacketAcknowledgements(_ref10) {
    var request = _ref10.request,
      options = _ref10.options;
    return (0, _reactQuery.useQuery)(["packetAcknowledgementsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetAcknowledgements(request);
    }, options);
  };
  var useUnreceivedPackets = function useUnreceivedPackets(_ref11) {
    var request = _ref11.request,
      options = _ref11.options;
    return (0, _reactQuery.useQuery)(["unreceivedPacketsQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unreceivedPackets(request);
    }, options);
  };
  var useUnreceivedAcks = function useUnreceivedAcks(_ref12) {
    var request = _ref12.request,
      options = _ref12.options;
    return (0, _reactQuery.useQuery)(["unreceivedAcksQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unreceivedAcks(request);
    }, options);
  };
  var useNextSequenceReceive = function useNextSequenceReceive(_ref13) {
    var request = _ref13.request,
      options = _ref13.options;
    return (0, _reactQuery.useQuery)(["nextSequenceReceiveQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nextSequenceReceive(request);
    }, options);
  };
  var useNextSequenceSend = function useNextSequenceSend(_ref14) {
    var request = _ref14.request,
      options = _ref14.options;
    return (0, _reactQuery.useQuery)(["nextSequenceSendQuery", request], function () {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nextSequenceSend(request);
    }, options);
  };
  return {
    /** Channel queries an IBC Channel. */useChannel: useChannel,
    /** Channels queries all the IBC channels of a chain. */useChannels: useChannels,
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels: useConnectionChannels,
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState: useChannelClientState,
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState: useChannelConsensusState,
    /** PacketCommitment queries a stored packet commitment hash. */usePacketCommitment: usePacketCommitment,
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments: usePacketCommitments,
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt: usePacketReceipt,
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */usePacketAcknowledgement: usePacketAcknowledgement,
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements: usePacketAcknowledgements,
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets: useUnreceivedPackets,
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks: useUnreceivedAcks,
    /** NextSequenceReceive returns the next receive sequence for a given channel. */useNextSequenceReceive: useNextSequenceReceive,
    /** NextSequenceSend returns the next send sequence for a given channel. */useNextSequenceSend: useNextSequenceSend
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;