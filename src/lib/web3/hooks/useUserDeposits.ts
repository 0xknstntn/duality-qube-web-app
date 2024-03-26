import { useEffect, useState } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { DepositRecord } from '@duality-labs/dualityjs/types/codegen/duality/dex/deposit_record';
import { useDeepCompareMemoize } from 'use-deep-compare-effect';
import { useWeb3 } from '../useWeb3';
import { TokenIdPair, TokenPair, resolveTokenIdPair } from '../utils/tokens';

async function getUsersDepositsByTokenPair(tokenPairIDs?: [string | undefined, string | undefined], address?: string): Promise<DepositRecord[]> {
        let result: DepositRecord[] = [];
        try {
                if(tokenPairIDs) {
                        let res = await fetch(`https://api-rest.qubedao.com/api/core/dex/v1beta1/user/deposits/${address}`)
                        let depositsJson = await res.json()
                        const [tokenIdA, tokenIdB] = tokenPairIDs || [];
                        //console.log("QLABS: DEBUG: getUsersDepositsByTokenPair: tokenPairIDs: ", [tokenIdA, tokenIdB])
                        //console.log("QLABS: DEBUG: getUsersDepositsByTokenPair: depositsJson: ", [tokenIdA, tokenIdB])
                        depositsJson.Deposits.map((deposit: any) => {
                                if(tokenIdA == deposit.pairID.token0 && tokenIdB == deposit.pairID.token1){
                                        //console.log("QLABS: DEBUG: getUsersDepositsByTokenPair: deposit: ", deposit)
                                        result.push({
                                                pairID: deposit.pairID,
                                                sharesOwned: deposit.sharesOwned,
                                                centerTickIndex: deposit.centerTickIndex,
                                                lowerTickIndex: deposit.lowerTickIndex,
                                                upperTickIndex: deposit.upperTickIndex,
                                                fee: deposit.fee,
                                        })
                                }
                        })
                } else {
                        let res = await fetch(`https://api-rest.qubedao.com/api/core/dex/v1beta1/user/deposits/${address}`)
                        let depositsJson = await res.json()
                        //console.log("QLABS: DEBUG: getUsersDepositsByTokenPair: depositsJson: ", depositsJson)
                        depositsJson.Deposits.map((deposit: any) => {
                                result.push({
                                        pairID: deposit.pairID,
                                        sharesOwned: deposit.sharesOwned,
                                        centerTickIndex: deposit.centerTickIndex,
                                        lowerTickIndex: deposit.lowerTickIndex,
                                        upperTickIndex: deposit.upperTickIndex,
                                        fee: deposit.fee,
                                })
                        })
                }
        } catch (e) {
                console.error(e)
        }
        //console.log("QLABS: DEBUG: result: result: ", result)
        return result
}

export function useUserDeposits(
        tokenPair?: TokenPair | TokenIdPair
): UseQueryResult<DepositRecord[] | undefined> {
        const { address } = useWeb3();
        const tokenPairIDs = useDeepCompareMemoize(resolveTokenIdPair(tokenPair));
        const [data, dataSet] = useState<any>(null)
        useEffect(() => {
                async function main() {
                        let res = await getUsersDepositsByTokenPair(tokenPairIDs, address!)
                        dataSet(res)
                }
                main()
        }, [tokenPairIDs, address])
        return <UseQueryResult<DepositRecord[] | undefined>>{
                data,
                error: null
        }
}

export function useUserHasDeposits(
  tokenPair?: TokenPair | TokenIdPair
): UseQueryResult<boolean | undefined> {
  const result = useUserDeposits(tokenPair);
  //console.log("QLABS: DEBUG: useUserHasDeposits: ", result)
  return {
    ...result,
    data: result.data && result.data.length > 0,
  } as UseQueryResult<boolean | undefined>;
}
