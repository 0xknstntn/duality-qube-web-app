import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
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
  async channel(params: QueryChannelRequest): Promise<QueryChannelResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}`;
    return QueryChannelResponse.fromJSON(await this.req.get<QueryChannelResponse>(endpoint));
  }
  /* Channels queries all the IBC channels of a chain. */
  async channels(params: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels`;
    return QueryChannelsResponse.fromJSON(await this.req.get<QueryChannelsResponse>(endpoint, options));
  }
  /* ConnectionChannels queries all the channels associated with a connection
   end. */
  async connectionChannels(params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return QueryConnectionChannelsResponse.fromJSON(await this.req.get<QueryConnectionChannelsResponse>(endpoint, options));
  }
  /* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */
  async channelClientState(params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/client_state`;
    return QueryChannelClientStateResponse.fromJSON(await this.req.get<QueryChannelClientStateResponse>(endpoint));
  }
  /* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */
  async channelConsensusState(params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/consensus_state/revision/${params.revision_number}/height/${params.revision_height}`;
    return QueryChannelConsensusStateResponse.fromJSON(await this.req.get<QueryChannelConsensusStateResponse>(endpoint));
  }
  /* PacketCommitment queries a stored packet commitment hash. */
  async packetCommitment(params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.sequence}`;
    return QueryPacketCommitmentResponse.fromJSON(await this.req.get<QueryPacketCommitmentResponse>(endpoint));
  }
  /* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */
  async packetCommitments(params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments`;
    return QueryPacketCommitmentsResponse.fromJSON(await this.req.get<QueryPacketCommitmentsResponse>(endpoint, options));
  }
  /* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */
  async packetReceipt(params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_receipts/${params.sequence}`;
    return QueryPacketReceiptResponse.fromJSON(await this.req.get<QueryPacketReceiptResponse>(endpoint));
  }
  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  async packetAcknowledgement(params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acks/${params.sequence}`;
    return QueryPacketAcknowledgementResponse.fromJSON(await this.req.get<QueryPacketAcknowledgementResponse>(endpoint));
  }
  /* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */
  async packetAcknowledgements(params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.packet_commitment_sequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packet_commitment_sequences;
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acknowledgements`;
    return QueryPacketAcknowledgementsResponse.fromJSON(await this.req.get<QueryPacketAcknowledgementsResponse>(endpoint, options));
  }
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */
  async unreceivedPackets(params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_commitment_sequences}/unreceived_packets`;
    return QueryUnreceivedPacketsResponse.fromJSON(await this.req.get<QueryUnreceivedPacketsResponse>(endpoint));
  }
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */
  async unreceivedAcks(params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_ack_sequences}/unreceived_acks`;
    return QueryUnreceivedAcksResponse.fromJSON(await this.req.get<QueryUnreceivedAcksResponse>(endpoint));
  }
  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  async nextSequenceReceive(params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence`;
    return QueryNextSequenceReceiveResponse.fromJSON(await this.req.get<QueryNextSequenceReceiveResponse>(endpoint));
  }
  /* NextSequenceSend returns the next send sequence for a given channel. */
  async nextSequenceSend(params: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence_send`;
    return QueryNextSequenceSendResponse.fromJSON(await this.req.get<QueryNextSequenceSendResponse>(endpoint));
  }
}