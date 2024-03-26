import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.class_id}`;
    return QueryBalanceResponse.fromJSON(await this.req.get<QueryBalanceResponse>(endpoint));
  }
  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  async owner(params: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const endpoint = `cosmos/nft/v1beta1/owner/${params.class_id}/${params.id}`;
    return QueryOwnerResponse.fromJSON(await this.req.get<QueryOwnerResponse>(endpoint));
  }
  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const endpoint = `cosmos/nft/v1beta1/supply/${params.class_id}`;
    return QuerySupplyResponse.fromJSON(await this.req.get<QuerySupplyResponse>(endpoint));
  }
  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   ERC721Enumerable */
  async nFTs(params: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.class_id !== "undefined") {
      options.params.class_id = params.class_id;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/nft/v1beta1/nfts`;
    return QueryNFTsResponse.fromJSON(await this.req.get<QueryNFTsResponse>(endpoint, options));
  }
  /* NFT queries an NFT based on its class and id. */
  async nFT(params: QueryNFTRequest): Promise<QueryNFTResponse> {
    const endpoint = `cosmos/nft/v1beta1/nfts/${params.class_id}/${params.id}`;
    return QueryNFTResponse.fromJSON(await this.req.get<QueryNFTResponse>(endpoint));
  }
  /* Class queries an NFT class based on its id */
  async class(params: QueryClassRequest): Promise<QueryClassResponse> {
    const endpoint = `cosmos/nft/v1beta1/classes/${params.class_id}`;
    return QueryClassResponse.fromJSON(await this.req.get<QueryClassResponse>(endpoint));
  }
  /* Classes queries all NFT classes */
  async classes(params: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/nft/v1beta1/classes`;
    return QueryClassesResponse.fromJSON(await this.req.get<QueryClassesResponse>(endpoint, options));
  }
}