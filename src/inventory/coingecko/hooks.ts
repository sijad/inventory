import ky from "ky/index";
import { useQuery, QueryObserverResult } from "react-query";

type CoinKey = string;

const client = ky.create({
  prefixUrl: "https://api.coingecko.com/api/v3",
});

interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export function useCoins(): QueryObserverResult<Record<CoinKey, Coin>> {
  return useQuery(
    "search-coins",
    async () => {
      const res = await client.get("search").json<{ coins: Coin[] }>();
      return res.coins.reduce((o, c) => {
        o[c.id] = c;
        return o;
      }, {} as Record<CoinKey, Coin>);
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  );
}
