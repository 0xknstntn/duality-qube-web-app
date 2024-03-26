import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
import { QueryContractInfoResponse, QueryContractHistoryResponse, QueryContractsByCodeResponse, QueryAllContractStateResponse, QueryRawContractStateResponse, QuerySmartContractStateResponse, QueryCodeResponse, QueryCodesResponse, QueryPinnedCodesResponse, QueryParamsResponse, QueryContractsByCreatorResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  /* ContractInfo gets the contract meta data */
  async contractInfo(params) {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return QueryContractInfoResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ContractHistory gets the contract code history */
  async contractHistory(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return QueryContractHistoryResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* ContractsByCode lists all smart contracts for a code id */
  async contractsByCode(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}/contracts`;
    return QueryContractsByCodeResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* AllContractState gets all raw store data for a single contract */
  async allContractState(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return QueryAllContractStateResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* RawContractState gets single key from the raw store data of a contract */
  async rawContractState(params) {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/raw/${params.query_data}`;
    return QueryRawContractStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* SmartContractState get smart query result from the contract */
  async smartContractState(params) {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/smart/${params.query_data}`;
    return QuerySmartContractStateResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Code gets the binary code and metadata for a singe wasm code */
  async code(params) {
    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}`;
    return QueryCodeResponse.fromJSON(await this.req.get(endpoint));
  }
  /* Codes gets the metadata for all stored wasm codes */
  async codes(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code`;
    return QueryCodesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* PinnedCodes gets the pinned code ids */
  async pinnedCodes(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return QueryPinnedCodesResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* Params gets the module params */
  async params(_params = {}) {
    const endpoint = `cosmwasm/wasm/v1/codes/params`;
    return QueryParamsResponse.fromJSON(await this.req.get(endpoint));
  }
  /* ContractsByCreator gets the contracts by creator */
  async contractsByCreator(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contracts/creator/${params.creator_address}`;
    return QueryContractsByCreatorResponse.fromJSON(await this.req.get(endpoint, options));
  }
}