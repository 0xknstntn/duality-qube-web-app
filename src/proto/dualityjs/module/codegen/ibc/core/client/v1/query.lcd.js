import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../../helpers";
import { QueryClientStateResponse, QueryClientStatesResponse, QueryConsensusStateResponse, QueryConsensusStatesResponse, QueryConsensusStateHeightsResponse, QueryClientStatusResponse, QueryClientParamsResponse, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  /* ClientState queries an IBC light client. */
  async clientState(params) {
    const endpoint = `ibc/core/client/v1/client_states/${params.client_id}`;
    return QueryClientStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ClientStates queries all the IBC light clients of a chain. */
  async clientStates(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/client_states`;
    return QueryClientStatesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */
  async consensusState(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.latest_height) !== "undefined") {
      options.params.latest_height = params.latest_height;
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.client_id}/revision/${params.revision_number}/height/${params.revision_height}`;
    return QueryConsensusStateResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ConsensusStates queries all the consensus state associated with a given
   client. */
  async consensusStates(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.client_id}`;
    return QueryConsensusStatesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  async consensusStateHeights(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.client_id}/heights`;
    return QueryConsensusStateHeightsResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Status queries the status of an IBC client. */
  async clientStatus(params) {
    const endpoint = `ibc/core/client/v1/client_status/${params.client_id}`;
    return QueryClientStatusResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ClientParams queries all parameters of the ibc client submodule. */
  async clientParams(_params = {}) {
    const endpoint = `ibc/core/client/v1/params`;
    return QueryClientParamsResponse.fromJSON(await this.req.get(endpoint));
  }
  /* UpgradedClientState queries an Upgraded IBC light client. */
  async upgradedClientState(_params = {}) {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return QueryUpgradedClientStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  async upgradedConsensusState(_params = {}) {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return QueryUpgradedConsensusStateResponse.fromJSON(await this.req.get(endpoint));
  }
}