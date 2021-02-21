import { Asset } from "inventory";
import { useMemo } from "react";
import { useCoins } from "./coingecko";

interface AssetDetails {
  iconUrl: string;
  symbol: string;
  name: string;
}

export function useAssetDetails(
  asset: Asset,
): [AssetDetails | undefined, boolean] {
  const { data, isLoading } = useCoins();

  const details = useMemo(() => {
    const coin = data?.[asset.typeId];
    return coin
      ? {
          iconUrl: coin.large,
          symbol: coin.symbol,
          name: coin.name,
        }
      : undefined;
  }, [asset, data]);

  return [details, isLoading];
}
