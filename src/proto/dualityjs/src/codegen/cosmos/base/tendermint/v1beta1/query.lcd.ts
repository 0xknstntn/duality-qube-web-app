import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  /* GetNodeInfo queries the current node info. */
  async getNodeInfo(_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return GetNodeInfoResponse.fromJSON(await this.req.get<GetNodeInfoResponse>(endpoint));
  }
  /* GetSyncing queries node syncing. */
  async getSyncing(_params: GetSyncingRequest = {}): Promise<GetSyncingResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return GetSyncingResponse.fromJSON(await this.req.get<GetSyncingResponse>(endpoint));
  }
  /* GetLatestBlock returns the latest block. */
  async getLatestBlock(_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return GetLatestBlockResponse.fromJSON(await this.req.get<GetLatestBlockResponse>(endpoint));
  }
  /* GetBlockByHeight queries block for given height. */
  async getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return GetBlockByHeightResponse.fromJSON(await this.req.get<GetBlockByHeightResponse>(endpoint));
  }
  /* GetLatestValidatorSet queries latest validator-set. */
  async getLatestValidatorSet(params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return GetLatestValidatorSetResponse.fromJSON(await this.req.get<GetLatestValidatorSetResponse>(endpoint, options));
  }
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  async getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return GetValidatorSetByHeightResponse.fromJSON(await this.req.get<GetValidatorSetByHeightResponse>(endpoint, options));
  }
  /* ABCIQuery defines a query handler that supports ABCI queries directly to the
   application, bypassing Tendermint completely. The ABCI query must contain
   a valid and supported path, including app, custom, p2p, and store.
  
   Since: cosmos-sdk 0.46 */
  async aBCIQuery(params: ABCIQueryRequest): Promise<ABCIQueryResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.data !== "undefined") {
      options.params.data = params.data;
    }
    if (typeof params?.path !== "undefined") {
      options.params.path = params.path;
    }
    if (typeof params?.height !== "undefined") {
      options.params.height = params.height;
    }
    if (typeof params?.prove !== "undefined") {
      options.params.prove = params.prove;
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/abci_query`;
    return ABCIQueryResponse.fromJSON(await this.req.get<ABCIQueryResponse>(endpoint, options));
  }
}