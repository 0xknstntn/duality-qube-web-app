import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../../helpers";
import { QueryChannelResponse, QueryChannelsResponse, QueryConnectionChannelsResponse, QueryChannelClientStateResponse, QueryChannelConsensusStateResponse, QueryPacketCommitmentResponse, QueryPacketCommitmentsResponse, QueryPacketReceiptResponse, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveResponse, QueryNextSequenceSendResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
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
  async channel(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}`;
    return QueryChannelResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Channels queries all the IBC channels of a chain. */
  async channels(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels`;
    return QueryChannelsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ConnectionChannels queries all the channels associated with a connection
   end. */
  async connectionChannels(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return QueryConnectionChannelsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */
  async channelClientState(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/client_state`;
    return QueryChannelClientStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */
  async channelConsensusState(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/consensus_state/revision/${params.revision_number}/height/${params.revision_height}`;
    return QueryChannelConsensusStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* PacketCommitment queries a stored packet commitment hash. */
  async packetCommitment(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.sequence}`;
    return QueryPacketCommitmentResponse.fromJSON(await this.req.get(endpoint));
  }
  /* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */
  async packetCommitments(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments`;
    return QueryPacketCommitmentsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */
  async packetReceipt(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_receipts/${params.sequence}`;
    return QueryPacketReceiptResponse.fromJSON(await this.req.get(endpoint));
  }
  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  async packetAcknowledgement(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acks/${params.sequence}`;
    return QueryPacketAcknowledgementResponse.fromJSON(await this.req.get(endpoint));
  }
  /* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */
  async packetAcknowledgements(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.packet_commitment_sequences) !== "undefined") {
      options.params.packet_commitment_sequences = params.packet_commitment_sequences;
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acknowledgements`;
    return QueryPacketAcknowledgementsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */
  async unreceivedPackets(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_commitment_sequences}/unreceived_packets`;
    return QueryUnreceivedPacketsResponse.fromJSON(await this.req.get(endpoint));
  }
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */
  async unreceivedAcks(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_ack_sequences}/unreceived_acks`;
    return QueryUnreceivedAcksResponse.fromJSON(await this.req.get(endpoint));
  }
  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  async nextSequenceReceive(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence`;
    return QueryNextSequenceReceiveResponse.fromJSON(await this.req.get(endpoint));
  }
  /* NextSequenceSend returns the next send sequence for a given channel. */
  async nextSequenceSend(params) {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence_send`;
    return QueryNextSequenceSendResponse.fromJSON(await this.req.get(endpoint));
  }
}