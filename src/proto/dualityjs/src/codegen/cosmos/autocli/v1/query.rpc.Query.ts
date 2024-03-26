import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */
export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.appOptions = this.appOptions.bind(this);
  }
  appOptions(request: AppOptionsRequest = {}): Promise<AppOptionsResponse> {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.autocli.v1.Query", "AppOptions", data);
    return promise.then(data => AppOptionsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse> {
      return queryService.appOptions(request);
    }
  };
};
export interface UseAppOptionsQuery<TData> extends ReactQueryParams<AppOptionsResponse, TData> {
  request?: AppOptionsRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useAppOptions = <TData = AppOptionsResponse,>({
    request,
    options
  }: UseAppOptionsQuery<TData>) => {
    return useQuery<AppOptionsResponse, Error, TData>(["appOptionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.appOptions(request);
    }, options);
  };
  return {
    /** AppOptions returns the autocli options for all of the modules in an app. */useAppOptions
  };
};