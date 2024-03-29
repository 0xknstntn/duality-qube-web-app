import { useEffect, useMemo, useState } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Coin } from '@cosmjs/proto-signing';

import { Token, getDenomAmount } from '../utils/tokens';
import useTokens, {
  matchTokenByDenom,
  matchTokens,
  useTokensWithIbcInfo,
} from './useTokens';
import { useWeb3 } from '../useWeb3';
import { isDexShare } from '../utils/shares';

async function getUserBalance(address?: string): Promise<Coin[]> {
  const result: Coin[] = [];
  try {
    if (address) {
      const res = await fetch(`https://api-rest.qubedao.com/api/cosmos/bank/v1beta1/balances/${address}?pagination.limit=1000`)
      let balanceJson = await res.json()
      let balanceArray = balanceJson.balances;
      balanceArray.map((token: any) => {
        result.push(<Coin>{
          amount: token.amount,
          denom: token.denom,
        })
      })
    }
  } catch (e) {
    console.error(e)
  }
  //console.log("QLABS: DEBUG: result: result: ", result)
  return result
}

// fetch all the user's bank balance
function useAllUserBankBalances(): UseQueryResult<Coin[]> {
  const { address } = useWeb3();
  const [data, dataSet] = useState<any>(null)
  useEffect(() => {
    async function main() {
      const res = await getUserBalance(address!)
      dataSet(res)
    }
    main()
  }, [address])
  //console.log(data)
  return <UseQueryResult<Coin[]>>{
    data,
    error: null
  }
}

export function useUserDexDenomBalances(): UseQueryResult<Coin[]> {
  const result = useAllUserBankBalances();
  // filter the data to only Dex coins
  const data = useMemo(() => {
    return result.data?.filter((balance) => !!isDexShare(balance));
  }, [result.data]);
  return {
    ...result,
    data,
  } as UseQueryResult<Coin[]>;
}

function useUserChainDenomBalances(): UseQueryResult<Coin[]> {
  const result = useAllUserBankBalances();
  // filter the data to only plain coins
  const data = useMemo(() => {
    return result.data?.filter((balance) => !isDexShare(balance));
  }, [result.data]);
  return {
    ...result,
    data,
  } as UseQueryResult<Coin[]>;
}

// define TokenCoin to represent a Coin paired with its chain-registry token
export interface TokenCoin extends Coin {
  token: Token;
}
export function useUserBankBalances(): UseQueryResult<TokenCoin[]> {
  const result = useUserChainDenomBalances();

  // add token information to balances
  const allTokensWithIBC = useTokensWithIbcInfo(useTokens());
  const data = useMemo<TokenCoin[] | undefined>(() => {
    // check all known tokens with IBC context for matching balance denoms
    return result.data?.reduce<TokenCoin[]>((result, balance) => {
      const token = allTokensWithIBC.find(matchTokenByDenom(balance.denom));
      if (token) {
        result.push({ token, ...balance });
      }
      return result;
    }, []);
  }, [result.data, allTokensWithIBC]);

  return {
    ...result,
    data,
  } as UseQueryResult<TokenCoin[]>;
}

// note: if dealing with IBC tokens, ensure Token has IBC context
//       (by fetching it with useTokensWithIbcInfo)
function useUserBankBalance(
  token: Token | undefined
): UseQueryResult<TokenCoin> {
  const { data: balances, ...rest } = useUserBankBalances();
  const balance = useMemo(() => {
    // find the balance that matches the token
    return (
      token && balances?.find((balance) => matchTokens(balance.token, token))
    );
  }, [balances, token]);
  return { data: balance, ...rest } as UseQueryResult<TokenCoin>;
}

// the bank balances may be in denoms that are neither base or display units
// convert them to base or display units with the following handler functions
export function useBankBalanceBaseAmount(
  token: Token | undefined
): UseQueryResult<string> {
  const { data: balance, ...rest } = useUserBankBalance(token);
  const balanceAmount = useMemo(() => {
    return (
      balance &&
      getDenomAmount(
        balance.token,
        balance.amount,
        balance.denom,
        balance.token.base
      )
    );
  }, [balance]);
  return { data: balanceAmount, ...rest } as UseQueryResult<string>;
}
export function useBankBalanceDisplayAmount(
  token: Token | undefined
): UseQueryResult<string> {
  const { data: balance, ...rest } = useUserBankBalance(token);
  const balanceAmount = useMemo(() => {
    return (
      balance &&
      getDenomAmount(
        balance.token,
        balance.amount,
        balance.denom,
        balance.token.display
      )
    );
  }, [balance]);
  return { data: balanceAmount, ...rest } as UseQueryResult<string>;
}
