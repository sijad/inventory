import { Asset } from "inventory";
import { useMemo } from "react";
import { useCoins, Coin } from "./coingecko";

interface AssetDetails {
  iconUrl: string;
  symbol: string;
  name: string;
}

type CoinKey = string;

export function useAssetDetails(
  asset: Asset,
): [AssetDetails | undefined, boolean] {
  const [data, isLoading] = useCoinsMap();

  const details = useMemo(() => {
    const coin = data?.get(asset.typeId);
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

export function useCoinsMap(): [Map<CoinKey, Coin> | undefined, boolean] {
  const { data, isLoading } = useCoins();
  const map = useMemo(() => {
    return data?.coins.reduce((o, c) => {
      const id = c.id;

      if (!id) {
        return o;
      }

      o.set(c.id, c);

      return o;
    }, new Map<CoinKey, Coin>());
  }, [data]);

  return [map, isLoading];
}
