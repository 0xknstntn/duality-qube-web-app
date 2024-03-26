import { useHasPriceData } from '../lib/tokenPrices';
import { Token } from '../lib/web3/utils/tokens';

export default function PriceDataDisclaimer({
  tokenA,
  tokenB,
}: {
  tokenA: Token | undefined;
  tokenB: Token | undefined;
}) {
  const hasPriceData = useHasPriceData([tokenA, tokenB]);

  return !hasPriceData ? null : (
    <></>
  );
}
