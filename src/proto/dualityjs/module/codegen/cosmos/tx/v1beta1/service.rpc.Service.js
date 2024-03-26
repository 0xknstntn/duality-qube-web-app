import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */

export class ServiceClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    this.txDecode = this.txDecode.bind(this);
    this.txEncode = this.txEncode.bind(this);
    this.txEncodeAmino = this.txEncodeAmino.bind(this);
    this.txDecodeAmino = this.txDecodeAmino.bind(this);
  }
  simulate(request) {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new _m0.Reader(data)));
  }
  getTx(request) {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new _m0.Reader(data)));
  }
  broadcastTx(request) {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new _m0.Reader(data)));
  }
  getTxsEvent(request) {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new _m0.Reader(data)));
  }
  getBlockWithTxs(request) {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new _m0.Reader(data)));
  }
  txDecode(request) {
    const data = TxDecodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
    return promise.then(data => TxDecodeResponse.decode(new _m0.Reader(data)));
  }
  txEncode(request) {
    const data = TxEncodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
    return promise.then(data => TxEncodeResponse.decode(new _m0.Reader(data)));
  }
  txEncodeAmino(request) {
    const data = TxEncodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
    return promise.then(data => TxEncodeAminoResponse.decode(new _m0.Reader(data)));
  }
  txDecodeAmino(request) {
    const data = TxDecodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
    return promise.then(data => TxDecodeAminoResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    simulate(request) {
      return queryService.simulate(request);
    },
    getTx(request) {
      return queryService.getTx(request);
    },
    broadcastTx(request) {
      return queryService.broadcastTx(request);
    },
    getTxsEvent(request) {
      return queryService.getTxsEvent(request);
    },
    getBlockWithTxs(request) {
      return queryService.getBlockWithTxs(request);
    },
    txDecode(request) {
      return queryService.txDecode(request);
    },
    txEncode(request) {
      return queryService.txEncode(request);
    },
    txEncodeAmino(request) {
      return queryService.txEncodeAmino(request);
    },
    txDecodeAmino(request) {
      return queryService.txDecodeAmino(request);
    }
  };
};
const _queryClients = new WeakMap();
const getQueryService = rpc => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new ServiceClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = rpc => {
  const queryService = getQueryService(rpc);
  const useSimulate = ({
    request,
    options
  }) => {
    return useQuery(["simulateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.simulate(request);
    }, options);
  };
  const useGetTx = ({
    request,
    options
  }) => {
    return useQuery(["getTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTx(request);
    }, options);
  };
  const useBroadcastTx = ({
    request,
    options
  }) => {
    return useQuery(["broadcastTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.broadcastTx(request);
    }, options);
  };
  const useGetTxsEvent = ({
    request,
    options
  }) => {
    return useQuery(["getTxsEventQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTxsEvent(request);
    }, options);
  };
  const useGetBlockWithTxs = ({
    request,
    options
  }) => {
    return useQuery(["getBlockWithTxsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getBlockWithTxs(request);
    }, options);
  };
  const useTxDecode = ({
    request,
    options
  }) => {
    return useQuery(["txDecodeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txDecode(request);
    }, options);
  };
  const useTxEncode = ({
    request,
    options
  }) => {
    return useQuery(["txEncodeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txEncode(request);
    }, options);
  };
  const useTxEncodeAmino = ({
    request,
    options
  }) => {
    return useQuery(["txEncodeAminoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txEncodeAmino(request);
    }, options);
  };
  const useTxDecodeAmino = ({
    request,
    options
  }) => {
    return useQuery(["txDecodeAminoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txDecodeAmino(request);
    }, options);
  };
  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */useSimulate,
    /** GetTx fetches a tx by hash. */useGetTx,
    /** BroadcastTx broadcast transaction. */useBroadcastTx,
    /** GetTxsEvent fetches txs by event. */useGetTxsEvent,
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs,
    /**
     * TxDecode decodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecode,
    /**
     * TxEncode encodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncode,
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncodeAmino,
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecodeAmino
  };
};