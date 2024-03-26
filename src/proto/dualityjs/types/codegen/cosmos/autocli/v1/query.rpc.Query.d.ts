import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */
export interface Query {
    /** AppOptions returns the autocli options for all of the modules in an app. */
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
};
export interface UseAppOptionsQuery<TData> extends ReactQueryParams<AppOptionsResponse, TData> {
    request?: AppOptionsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** AppOptions returns the autocli options for all of the modules in an app. */ useAppOptions: <TData = AppOptionsResponse>({ request, options }: UseAppOptionsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
};
