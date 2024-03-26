import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Allowance returns fee granted to the grantee by the granter. */
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for address. */
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    /**
     * AllowancesByGranter returns all the grants given by an address
     *
     * Since: cosmos-sdk 0.46
     */
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
};
export interface UseAllowanceQuery<TData> extends ReactQueryParams<QueryAllowanceResponse, TData> {
    request: QueryAllowanceRequest;
}
export interface UseAllowancesQuery<TData> extends ReactQueryParams<QueryAllowancesResponse, TData> {
    request: QueryAllowancesRequest;
}
export interface UseAllowancesByGranterQuery<TData> extends ReactQueryParams<QueryAllowancesByGranterResponse, TData> {
    request: QueryAllowancesByGranterRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Allowance returns fee granted to the grantee by the granter. */ useAllowance: <TData = QueryAllowanceResponse>({ request, options }: UseAllowanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Allowances returns all the grants for address. */ useAllowances: <TData_1 = QueryAllowancesResponse>({ request, options }: UseAllowancesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * AllowancesByGranter returns all the grants given by an address
     *
     * Since: cosmos-sdk 0.46
     */
    useAllowancesByGranter: <TData_2 = QueryAllowancesByGranterResponse>({ request, options }: UseAllowancesByGranterQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
