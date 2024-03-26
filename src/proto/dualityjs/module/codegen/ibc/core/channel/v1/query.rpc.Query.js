import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse } from "./query";
/** Query provides defines the gRPC querier service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
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
  channel(request) {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then(data => QueryChannelResponse.decode(new _m0.Reader(data)));
  }
  channels(request = {
    pagination: undefined
  }) {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then(data => QueryChannelsResponse.decode(new _m0.Reader(data)));
  }
  connectionChannels(request) {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then(data => QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
  }
  channelClientState(request) {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then(data => QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
  }
  channelConsensusState(request) {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then(data => QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
  }
  packetCommitment(request) {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then(data => QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
  }
  packetCommitments(request) {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then(data => QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
  }
  packetReceipt(request) {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then(data => QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
  }
  packetAcknowledgement(request) {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then(data => QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
  }
  packetAcknowledgements(request) {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then(data => QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
  }
  unreceivedPackets(request) {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then(data => QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
  }
  unreceivedAcks(request) {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then(data => QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
  }
  nextSequenceReceive(request) {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then(data => QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
  }
  nextSequenceSend(request) {
    const data = QueryNextSequenceSendRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceSend", data);
    return promise.then(data => QueryNextSequenceSendResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    channel(request) {
      return queryService.channel(request);
    },
    channels(request) {
      return queryService.channels(request);
    },
    connectionChannels(request) {
      return queryService.connectionChannels(request);
    },
    channelClientState(request) {
      return queryService.channelClientState(request);
    },
    channelConsensusState(request) {
      return queryService.channelConsensusState(request);
    },
    packetCommitment(request) {
      return queryService.packetCommitment(request);
    },
    packetCommitments(request) {
      return queryService.packetCommitments(request);
    },
    packetReceipt(request) {
      return queryService.packetReceipt(request);
    },
    packetAcknowledgement(request) {
      return queryService.packetAcknowledgement(request);
    },
    packetAcknowledgements(request) {
      return queryService.packetAcknowledgements(request);
    },
    unreceivedPackets(request) {
      return queryService.unreceivedPackets(request);
    },
    unreceivedAcks(request) {
      return queryService.unreceivedAcks(request);
    },
    nextSequenceReceive(request) {
      return queryService.nextSequenceReceive(request);
    },
    nextSequenceSend(request) {
      return queryService.nextSequenceSend(request);
    }
  };
};
const _queryClients = new WeakMap();
const getQueryService = rpc => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = rpc => {
  const queryService = getQueryService(rpc);
  const useChannel = ({
    request,
    options
  }) => {
    return useQuery(["channelQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channel(request);
    }, options);
  };
  const useChannels = ({
    request,
    options
  }) => {
    return useQuery(["channelsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channels(request);
    }, options);
  };
  const useConnectionChannels = ({
    request,
    options
  }) => {
    return useQuery(["connectionChannelsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionChannels(request);
    }, options);
  };
  const useChannelClientState = ({
    request,
    options
  }) => {
    return useQuery(["channelClientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channelClientState(request);
    }, options);
  };
  const useChannelConsensusState = ({
    request,
    options
  }) => {
    return useQuery(["channelConsensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.channelConsensusState(request);
    }, options);
  };
  const usePacketCommitment = ({
    request,
    options
  }) => {
    return useQuery(["packetCommitmentQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetCommitment(request);
    }, options);
  };
  const usePacketCommitments = ({
    request,
    options
  }) => {
    return useQuery(["packetCommitmentsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetCommitments(request);
    }, options);
  };
  const usePacketReceipt = ({
    request,
    options
  }) => {
    return useQuery(["packetReceiptQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetReceipt(request);
    }, options);
  };
  const usePacketAcknowledgement = ({
    request,
    options
  }) => {
    return useQuery(["packetAcknowledgementQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetAcknowledgement(request);
    }, options);
  };
  const usePacketAcknowledgements = ({
    request,
    options
  }) => {
    return useQuery(["packetAcknowledgementsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.packetAcknowledgements(request);
    }, options);
  };
  const useUnreceivedPackets = ({
    request,
    options
  }) => {
    return useQuery(["unreceivedPacketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unreceivedPackets(request);
    }, options);
  };
  const useUnreceivedAcks = ({
    request,
    options
  }) => {
    return useQuery(["unreceivedAcksQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unreceivedAcks(request);
    }, options);
  };
  const useNextSequenceReceive = ({
    request,
    options
  }) => {
    return useQuery(["nextSequenceReceiveQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nextSequenceReceive(request);
    }, options);
  };
  const useNextSequenceSend = ({
    request,
    options
  }) => {
    return useQuery(["nextSequenceSendQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.nextSequenceSend(request);
    }, options);
  };
  return {
    /** Channel queries an IBC Channel. */useChannel,
    /** Channels queries all the IBC channels of a chain. */useChannels,
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels,
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState,
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState,
    /** PacketCommitment queries a stored packet commitment hash. */usePacketCommitment,
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments,
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt,
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */usePacketAcknowledgement,
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements,
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets,
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks,
    /** NextSequenceReceive returns the next receive sequence for a given channel. */useNextSequenceReceive,
    /** NextSequenceSend returns the next send sequence for a given channel. */useNextSequenceSend
  };
};