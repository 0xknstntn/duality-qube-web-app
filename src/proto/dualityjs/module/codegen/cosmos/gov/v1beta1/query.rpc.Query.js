import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the gRPC querier service for gov module */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  proposal(request) {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  }
  proposals(request) {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new _m0.Reader(data)));
  }
  vote(request) {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new _m0.Reader(data)));
  }
  votes(request) {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new _m0.Reader(data)));
  }
  params(request) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  deposit(request) {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new _m0.Reader(data)));
  }
  deposits(request) {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }
  tallyResult(request) {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proposal(request) {
      return queryService.proposal(request);
    },
    proposals(request) {
      return queryService.proposals(request);
    },
    vote(request) {
      return queryService.vote(request);
    },
    votes(request) {
      return queryService.votes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    deposit(request) {
      return queryService.deposit(request);
    },
    deposits(request) {
      return queryService.deposits(request);
    },
    tallyResult(request) {
      return queryService.tallyResult(request);
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
  const useProposal = ({
    request,
    options
  }) => {
    return useQuery(["proposalQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposal(request);
    }, options);
  };
  const useProposals = ({
    request,
    options
  }) => {
    return useQuery(["proposalsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposals(request);
    }, options);
  };
  const useVote = ({
    request,
    options
  }) => {
    return useQuery(["voteQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.vote(request);
    }, options);
  };
  const useVotes = ({
    request,
    options
  }) => {
    return useQuery(["votesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votes(request);
    }, options);
  };
  const useParams = ({
    request,
    options
  }) => {
    return useQuery(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useDeposit = ({
    request,
    options
  }) => {
    return useQuery(["depositQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deposit(request);
    }, options);
  };
  const useDeposits = ({
    request,
    options
  }) => {
    return useQuery(["depositsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deposits(request);
    }, options);
  };
  const useTallyResult = ({
    request,
    options
  }) => {
    return useQuery(["tallyResultQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tallyResult(request);
    }, options);
  };
  return {
    /** Proposal queries proposal details based on ProposalID. */useProposal,
    /** Proposals queries all proposals based on given status. */useProposals,
    /** Vote queries voted information based on proposalID, voterAddr. */useVote,
    /** Votes queries votes of a given proposal. */useVotes,
    /** Params queries all parameters of the gov module. */useParams,
    /** Deposit queries single deposit information based proposalID, depositAddr. */useDeposit,
    /** Deposits queries all deposits of a single proposal. */useDeposits,
    /** TallyResult queries the tally of a proposal vote. */useTallyResult
  };
};