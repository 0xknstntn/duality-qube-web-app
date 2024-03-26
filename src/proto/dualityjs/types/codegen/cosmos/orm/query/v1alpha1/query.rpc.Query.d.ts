import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
    /** Get queries an ORM table against an unique index. */
    get(request: GetRequest): Promise<GetResponse>;
    /** List queries an ORM table against an index. */
    list(request: ListRequest): Promise<ListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    get(request: GetRequest): Promise<GetResponse>;
    list(request: ListRequest): Promise<ListResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    get(request: GetRequest): Promise<GetResponse>;
    list(request: ListRequest): Promise<ListResponse>;
};
export interface UseGetQuery<TData> extends ReactQueryParams<GetResponse, TData> {
    request: GetRequest;
}
export interface UseListQuery<TData> extends ReactQueryParams<ListResponse, TData> {
    request: ListRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Get queries an ORM table against an unique index. */ useGet: <TData = GetResponse>({ request, options }: UseGetQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** List queries an ORM table against an index. */ useList: <TData_1 = ListResponse>({ request, options }: UseListQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
};
