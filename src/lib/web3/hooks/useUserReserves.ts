import BigNumber from 'bignumber.js'; 
import { useMemo, useRef, useEffect, useState } from 'react';
import { UseQueryResult, useQueries } from '@tanstack/react-query';
import { Coin } from '@cosmjs/proto-signing';
import { PoolMetadata } from '@duality-labs/dualityjs/types/codegen/duality/dex/pool_metadata';
import { DepositRecord } from '@duality-labs/dualityjs/types/codegen/duality/dex/deposit_record';

import { useDeepCompareMemoize } from 'use-deep-compare-effect';

import { useUserDeposits } from './useUserDeposits';
import { useSimplePrice } from '../../tokenPrices';

import { getPairID } from '../utils/pairs';
import { priceToTickIndex, tickIndexToPrice } from '../utils/ticks';
import {
  Token,
  TokenIdPair,
  TokenPair,
  getBaseDenomAmount,
  getTokenId,
  resolveTokenIdPair,
} from '../utils/tokens';
import useTokens, { useTokensWithIbcInfo } from './useTokens';
import { useTokenPairMapLiquidity } from '../../web3/hooks/useTickLiquidity';
import { useOrderedTokenPair } from './useTokenPairs';
import { useUserDexDenomBalances } from './useUserBankBalances';
import { getDexSharePoolID } from '../utils/shares';
import { PairID } from '@duality-labs/dualityjs/types/codegen/duality/dex/pair_id';

interface PairReserves {
  reserves0: string;
  reserves1: string;
}

interface PoolTotalShares {
  balance: Coin;
  totalShares: string;
}

interface UserReservesTotalShares {
  deposit: DepositRecord;
  totalShares: string;
}
interface UserReservesTotalReserves {
  deposit: DepositRecord;
  totalReserves: PairReserves;
}
interface IndicativeUserReserves {
  deposit: DepositRecord;
  indicativeReserves: PairReserves;
}
export interface UserReserves {
  deposit: DepositRecord;
  reserves: PairReserves;
}
export interface UserValuedReserves extends UserReserves {
  value: number;
}

interface CombinedUseQueries<T> {
  data: T | undefined;
  isFetching: boolean;
  error: Error | null;
}

async function getPoolMetadata(userDexDenomBalances: Coin[]): Promise<PoolMetadata[]> {
  const result: PoolMetadata[] = [];
  //console.log("QLABS: DEBUG: result: ", userDexDenomBalances)
  try {
    userDexDenomBalances?.map(async(balance) => {
      const id = getDexSharePoolID(balance);
      //console.log("QLABS: DEBUG: result: ", id)
      if (id != undefined) {
        const res = await fetch(`https://api-rest.qubedao.com/api/core/dex/v1beta1/pool_metadata/${id}`)
        const pool_metadata_json = await res.json()
        result.push({
          ID: pool_metadata_json.PoolMetadata.ID,
          tick: pool_metadata_json.PoolMetadata.tick,
          fee: pool_metadata_json.PoolMetadata.fee,
          pairID: <PairID> {
            token0: pool_metadata_json.PoolMetadata.pairID.token0,
            token1: pool_metadata_json.PoolMetadata.pairID.token1,
          }
        })
    }});
  } catch(e) {
    console.error(e)
  }
  return result
}


function useUserPoolMetadata(
  tokenPair?: TokenPair | TokenIdPair
): CombinedUseQueries<PoolMetadata[]>  {
  //const lcdClientPromise = useLcdClientPromise();
  const { data: userDexDenomBalances } = useUserDexDenomBalances();
  const [data, dataSet] = useState<any>(null)
  useEffect(() => {
    async function main() {
      const res = await getPoolMetadata(userDexDenomBalances!)
      dataSet(res)
    }
    main()
  }, [userDexDenomBalances])

  const result = <CombinedUseQueries<PoolMetadata[]>>{
    data,
    isFetching: true,
    error: null,
  }


  const tokenPairIDs = useDeepCompareMemoize(resolveTokenIdPair(tokenPair));
    // filter to tokenPair now that we have metadata about the pool
    const userTokenPairPoolMetadata = useMemo(() => {
      // filter to token pair if specified
      if (tokenPairIDs) {
        const [tokenA, tokenB] = tokenPairIDs;
        return result.data?.filter((metadata) => {
          return (
            (metadata.pairID.token0 === tokenA &&
              metadata.pairID.token1 === tokenB) ||
            (metadata.pairID.token0 === tokenB &&
              metadata.pairID.token1 === tokenA)
          );
        });
      }
      // don't filter if no token pair is specified
      return result.data;
    }, [result.data, tokenPairIDs]);

  return {
    ...result,
    data: userTokenPairPoolMetadata,
  };

}

async function getBalanceByPoolDenom(userDexDenomBalances: Coin[]): Promise<PoolTotalShares[]> {
  const result: PoolTotalShares[] = [];
  try {
    const res = await fetch('https://api-rest.qubedao.com/api/cosmos/bank/v1beta1/supply')
    const supplyArrayJson = await res.json()
    userDexDenomBalances?.map((balance) => {
      const { denom } = balance;
      if (getDexSharePoolID(balance) !== undefined) {
        supplyArrayJson.supply.map((token: any) => {
          if(token.denom == denom) {
            result.push({
              balance,
              totalShares: token.amount,
            })
          }
        })
      }
    });
  } catch (e) {
    console.error(e)
  }
  //console.log("QLABS: DEBUG: result: ", result)
  return result
}

function useUserPoolTotalShares(): CombinedUseQueries<PoolTotalShares[]> {
    //const lcdClientPromise = useLcdClientPromise();
    const [data, dataSet] = useState<any>(null)
    const { data: userDexDenomBalances } = useUserDexDenomBalances();
    useEffect(() => {
      async function main() {
        const res = await getBalanceByPoolDenom(userDexDenomBalances!)
        dataSet(res)
      }
      main()
    }, [userDexDenomBalances])
    return {
      data,
      isFetching: false,
      error: Error(),
    };
}

function useUserDepositsTotalShares(
  tokenPair?: TokenPair | TokenIdPair
): UseQueryResult<UserReservesTotalShares[]> {
  const { data: userPoolMetadata } = useUserPoolMetadata(tokenPair);
  const { data: userPoolTotalShares, ...rest } = useUserPoolTotalShares();
  const totalSharesByPoolID = useMemo<Map<number, PoolTotalShares>>(() => {
    const totalSharesByPoolID = new Map<number, PoolTotalShares>();
    for (const userPoolTotalShare of userPoolTotalShares || []) {
      // make map here
      const poolID = getDexSharePoolID(userPoolTotalShare.balance);
      if (poolID) {
        totalSharesByPoolID.set(poolID, userPoolTotalShare);
      }
    }
    return totalSharesByPoolID;
  }, [userPoolTotalShares]);

  const { data: userPairDeposits } = useUserDeposits(tokenPair);

  const userDepositsWithPoolID = useMemo(() => {
    const userPoolMetadataSet = new Set(userPoolMetadata);
    return userPairDeposits?.map(
      (deposit): { deposit: DepositRecord; metadata?: PoolMetadata } => {
        const remainingUserPoolMetadataSet = Array.from(userPoolMetadataSet);
        for (const metadata of remainingUserPoolMetadataSet) {
          if (
            metadata.pairID.token0 === deposit.pairID.token0 &&
            metadata.pairID.token1 === deposit.pairID.token1 &&
            metadata.tick == deposit.centerTickIndex &&
            metadata.fee == deposit.fee
          ) {
            //console.log("QLABS: { deposit, metadata }: ",  { deposit, metadata })
            // remove this value from the search set
            userPoolMetadataSet.delete(metadata);
            return { deposit, metadata };
          }
        }
        return { deposit };
      }
    );
  }, [userPairDeposits, userPoolMetadata]);

  const userDepositsTotalShares = useMemo(() => {
    return userDepositsWithPoolID?.map(({ deposit, metadata }) => {
      const poolID = Number(metadata?.ID);
      const totalShares =
        totalSharesByPoolID.get(poolID || -1)?.totalShares ?? '0';
      return {
        deposit,
        totalShares,
      };
    });
  }, [userDepositsWithPoolID, totalSharesByPoolID]);

  return { ...rest, data: userDepositsTotalShares } as UseQueryResult<
    UserReservesTotalShares[]
  >;
}

async function getPoolByParams(userPairDeposits: DepositRecord[]): Promise<DepositRecord[]> {
  const result: DepositRecord[] = [];
  //console.log("QLABS: DEBUG: userPairDeposits: ", userPairDeposits)
  try {
    userPairDeposits?.flatMap(async (deposit) => {
      const { pairID, fee, sharesOwned } = deposit;
        if (Number(sharesOwned) > 0) {
            const res = await fetch(`https://api-rest.qubedao.com/api/core/dex/v1beta1/pool/${getPairID(pairID.token0, pairID.token1)}/${deposit.centerTickIndex}/${fee}`)
           // console.log('QLABS: ', `https://api-rest.qubedao.com/api/core/dex/v1beta1/pool/${getPairID(pairID.token0, pairID.token1)}/${deposit.centerTickIndex}/${fee}`)
            const poolJson = await res.json()
            //console.log("QLABS: DEBUG: poolJson: ", poolJson)
            result.push({
              pairID: poolJson.pairID,
              sharesOwned: poolJson.sharesOwned,
              centerTickIndex: poolJson.centerTickIndex,
              lowerTickIndex: poolJson.lowerTickIndex,
              upperTickIndex: poolJson.upperTickIndex,
              fee: poolJson.fee,
            })
        }
    });
  } catch (e) {
    console.error(e)
  }
  //console.log("QLABS: DEBUG: result: ", result)
  return result
}

function useUserDepositsTotalReserves(
  tokenPair?: TokenPair | TokenIdPair
): CombinedUseQueries<UserReservesTotalReserves[]> {
  const { data: userPairDeposits } = useUserDeposits(tokenPair);
  const [data, dataSet] = useState<any>(null)
  useEffect(() => {
    async function main() {
      const res = await getPoolByParams(userPairDeposits!)
      dataSet(res)
    }
    main()
  }, [userPairDeposits])
  return {
    data,
    isFetching: false,
    error: Error(),
  };
}

function useUserIndicativeReserves(
  tokenPair?: TokenPair | TokenIdPair
): CombinedUseQueries<IndicativeUserReserves[]> {
  const userDepositsResults = useUserDeposits(tokenPair);
  const userTotalSharesResults = useUserDepositsTotalShares(tokenPair);
  const userTotalReservesResults = useUserDepositsTotalReserves(tokenPair);

  const data = useMemo((): IndicativeUserReserves[] | undefined => {
    return userDepositsResults.data?.flatMap<IndicativeUserReserves>(
      (deposit) => {
        const foundTotalShares = userTotalSharesResults.data?.find((data: any) => 
          isEqualDeposit(data.deposit, deposit)
        );
        const foundTotalReserves = userTotalReservesResults.data?.find((data) =>
          isEqualDeposit(data.deposit, deposit)
        );
        //console.log("QLABS: equal: ", (foundTotalReserves !== undefined))
        if ((foundTotalShares !== undefined) && (foundTotalReserves !== undefined)) {
          //console.log("QLABS: DEBUG: test")
          const sharesOwned = new BigNumber(deposit.sharesOwned);
          const totalShares = new BigNumber(foundTotalShares.totalShares);
          const totalReserves = foundTotalReserves.totalReserves;
          const reserves0 = new BigNumber(totalReserves.reserves0);
          const reserves1 = new BigNumber(totalReserves.reserves1);
          const userPercentageOfShares = totalShares.isZero()
            ? totalShares
            : sharesOwned.dividedBy(totalShares);
          const lowerTickIndex = new BigNumber(deposit.lowerTickIndex.toInt());
          const upperTickIndex = new BigNumber(deposit.upperTickIndex.toInt());
          const allReservesAsToken0 = reserves0.plus(
            reserves1.multipliedBy(tickIndexToPrice(lowerTickIndex))
          );
          const allReservesAsToken1 = reserves1.plus(
            reserves0.dividedBy(tickIndexToPrice(upperTickIndex))
          );
          return {
            deposit,
            indicativeReserves: {
              reserves0: userPercentageOfShares
                .multipliedBy(allReservesAsToken0)
                .toFixed(0),
              reserves1: userPercentageOfShares
                .multipliedBy(allReservesAsToken1)
                .toFixed(0),
            },
          };
        }
        return [];
      }
    );
  }, [
    userDepositsResults,
    userTotalSharesResults,
    userTotalReservesResults,
  ]);
  //console.log("QLABS: DEBUG: data: ", data)

  return {
    data,
    isFetching:
      userDepositsResults.isFetching ||
      userTotalSharesResults.isFetching ||
      userTotalReservesResults.isFetching,
    error:
      userDepositsResults.error ||
      userTotalSharesResults.error ||
      userTotalReservesResults.error,
  };
}

export function useEstimatedUserReserves(
  tokenPair?: TokenPair | TokenIdPair
): CombinedUseQueries<UserValuedReserves[]> {
  const {
    data: userIndicatveReserves,
    isFetching,
    error,
  } = useUserIndicativeReserves(tokenPair);

  const allTokens = useTokensWithIbcInfo(useTokens());
  const allTokensByIdMap = useMemo<Map<string, Token>>(() => {
    return allTokens.reduce<Map<string, Token>>((acc, token) => {
      const id = getTokenId(token);
      if (id && !acc.has(id)) {
        acc.set(id, token);
      }
      return acc;
    }, new Map());
  }, [allTokens]);

  const tokenByIdMap = useMemo<Map<string, Token>>(() => {
    const searchedTokenStrings: string[] = [];
    return (userIndicatveReserves || []).reduce<Map<string, Token>>(
      (acc, indicateReserves) => {
        for (const tokenId of Object.values(indicateReserves.deposit.pairID)) {
          if (!searchedTokenStrings.includes(tokenId)) {
            const foundToken = allTokensByIdMap.get(tokenId);
            if (foundToken) {
              acc.set(tokenId, foundToken);
            }
            searchedTokenStrings.push(tokenId);
          }
        }
        return acc;
      },
      new Map()
    );
  }, [userIndicatveReserves, allTokensByIdMap]);

  const tokenList = useMemo(
    () => Array.from(tokenByIdMap.values()),
    [tokenByIdMap]
  );

  const { data: tokenPrices } = useSimplePrice(tokenList);

  const tokenPriceByIdMap = useMemo(() => {
    return tokenList.reduce<Map<string, number | undefined>>(
      (acc, token, index) => {
        const tokenId = getTokenId(token);
        if (tokenId) {
          acc.set(tokenId, tokenPrices[index]);
        }
        return acc;
      },
      new Map()
    );
  }, [tokenList, tokenPrices]);

  // using the current price, make assumptions about the current reserves
  return useMemo(() => {
    if (Object.values(tokenPriceByIdMap).every((price = 0) => price > 0)) {
      const userReserves = userIndicatveReserves?.flatMap<UserValuedReserves>(
        ({ deposit, indicativeReserves: { reserves0, reserves1 } }) => {
          const token0 = tokenByIdMap.get(deposit.pairID.token0);
          const token1 = tokenByIdMap.get(deposit.pairID.token1);
          const tokenPrice0 = tokenPriceByIdMap.get(deposit.pairID.token0);
          const tokenPrice1 = tokenPriceByIdMap.get(deposit.pairID.token1);
          if (token0 && token1 && tokenPrice0 && tokenPrice1) {
            const display0 = getBaseDenomAmount(token0, 1) || 1;
            const display1 = getBaseDenomAmount(token1, 1) || 1;
            const basePrice0 = new BigNumber(tokenPrice0).dividedBy(display0);
            const basePrice1 = new BigNumber(tokenPrice1).dividedBy(display1);
            const centerTickIndex = priceToTickIndex(
              basePrice1.div(basePrice0)
            );
            // decide if the reserves are of token0 or token1
            const depositIsLeftOfPrice = centerTickIndex.isLessThan(
              deposit.centerTickIndex.toInt()
            );
            return depositIsLeftOfPrice
              ? {
                  deposit,
                  reserves: {
                    reserves0,
                    reserves1: '0',
                  },
                  value: basePrice0.multipliedBy(reserves0).toNumber(),
                }
              : {
                  deposit,
                  reserves: {
                    reserves0: '0',
                    reserves1,
                  },
                  value: basePrice1.multipliedBy(reserves1).toNumber(),
                };
          }
          return [];
        }
      );
      return {
        data: userReserves,
        isFetching,
        error,
      };
    }
    return {
      data: undefined,
      isFetching,
      error,
    };
  }, [
    tokenByIdMap,
    tokenPriceByIdMap,
    userIndicatveReserves,
    isFetching,
    error,
  ]);
}

// calculate total
export function useEstimatedUserReservesValue(
  tokenPair?: TokenPair | TokenIdPair
): BigNumber {
  const { data: estimatedUserReserves } = useEstimatedUserReserves(tokenPair);
  return useMemo(() => {
    return (estimatedUserReserves || []).reduce<BigNumber>(
      (acc, estimatedUserReserve) => acc.plus(estimatedUserReserve.value),
      new BigNumber(0)
    );
  }, [estimatedUserReserves]);
}

function isEqualDeposit(a: DepositRecord, b: DepositRecord) {
  // compare by reference or compare by properties
  try {
    //console.log("QLABS: DEBUG: EQUAL: ", {a, b})
    const val = a === b ||
    (a.sharesOwned === b.sharesOwned &&
      a.pairID.token0 === b.pairID.token0 &&
      a.pairID.token1 === b.pairID.token1 &&
      a.centerTickIndex == b.centerTickIndex &&
      a.fee == b.fee)
    return val;
  } catch(e) {
    //console.error(e)
    return false
  }
}

const emptyDataSet: never[] = [];
export function useAccurateUserReserves(
  tokenPair?: TokenPair | TokenIdPair
): CombinedUseQueries<UserReserves[]> {
  const tokenIdPair = resolveTokenIdPair(tokenPair) || [];
  const [tokenId0, tokenId1] = useOrderedTokenPair(tokenIdPair) || [];
  const [tokenIdA, tokenIdB] = tokenIdPair;
  const forward = tokenId0 === tokenIdA && tokenId1 === tokenIdB;
  const reverse = tokenId0 === tokenIdB && tokenId1 === tokenIdA;

  // combine data from user reserves and tick liquidity
  const {
    data: userIndicativeReserves,
    isFetching,
    error,
  } = useUserIndicativeReserves(tokenPair);
  const { data: [liquidityMapA, liquidityMapB] = [] } =
    useTokenPairMapLiquidity(tokenIdPair);

  const liquidityMap0 = forward ? liquidityMapA : liquidityMapB;
  const liquidityMap1 = reverse ? liquidityMapA : liquidityMapB;

  // note: memoize this middle state as an optimization
  //       - liquidity maps update frequently
  //       - user indicative reserves update infrequently
  //       - the relevant liquidity pools to the user don't update that often
  const userSpecificLiquidityKeyValues = useDeepCompareMemoize(
    useMemo(() => {
      return userIndicativeReserves?.map<[number, [number, number]]>(
        ({ deposit }) => {
          // find state from tick liquidity
          // note: reserve of token is in tickIndexTakerToMaker and needs to be
          //       converted into tickIndex1to0 to align with token0/token1 math
          const reserves0 =
            liquidityMap0?.get(deposit.lowerTickIndex.toNumber()) || 0;
          const reserves1 =
            liquidityMap1?.get(deposit.upperTickIndex.negate().toNumber()) || 0;
          // return in key, value format ready to create an array or map
          // use this format because it is easy to memoize and deep-compare
          return [deposit.centerTickIndex.toNumber(), [reserves0, reserves1]];
        }
      );
    }, [liquidityMap0, liquidityMap1, userIndicativeReserves])
  );

  const userReserves = useMemo<UserReserves[]>(() => {
    if (
      userIndicativeReserves?.length &&
      userSpecificLiquidityKeyValues?.length
    ) {
      const liquidityMap = new Map(userSpecificLiquidityKeyValues);
      return (userIndicativeReserves || []).map(
        ({ deposit, indicativeReserves }) => {
          // find state from tick liquidity
          const [reserves0, reserves1] = liquidityMap?.get(
            deposit.centerTickIndex.toNumber()
          ) || [0, 0];
          // compute user reserves from state to
          const reserves1As0 =
            reserves1 *
            tickIndexToPrice(
              new BigNumber(deposit.centerTickIndex.toNumber())
            ).toNumber();
          const totalAs0 = reserves0 + reserves1As0;
          const percentage0 = totalAs0 > 0 ? reserves0 / totalAs0 : 0;
          const percentage1 = totalAs0 > 0 ? reserves1As0 / totalAs0 : 0;
          return {
            deposit,
            reserves: {
              reserves0: new BigNumber(indicativeReserves.reserves0)
                .multipliedBy(percentage0)
                .toFixed(0),
              reserves1: new BigNumber(indicativeReserves.reserves1)
                .multipliedBy(percentage1)
                .toFixed(0),
            },
          };
        }
      );
    }
    return emptyDataSet;
  }, [userIndicativeReserves, userSpecificLiquidityKeyValues]);

  return { data: userReserves, isFetching, error };
}
