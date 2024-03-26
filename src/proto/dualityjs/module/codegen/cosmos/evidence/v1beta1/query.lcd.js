import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
import { QueryEvidenceResponse, QueryAllEvidenceResponse } from "./query";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  /* Evidence queries evidence based on evidence hash. */
  async evidence(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.evidence_hash) !== "undefined") {
      options.params.evidence_hash = params.evidence_hash;
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.hash}`;
    return QueryEvidenceResponse.fromJSON(await this.req.get(endpoint, options));
  }
  /* AllEvidence queries all evidence. */
  async allEvidence(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return QueryAllEvidenceResponse.fromJSON(await this.req.get(endpoint, options));
  }
}