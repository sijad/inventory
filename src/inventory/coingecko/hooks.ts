import ky from "ky/index";
import { useQuery, QueryObserverResult } from "react-query";

const client = ky.create({
  prefixUrl: "https://api.coingecko.com/api/v3",
});

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export function useCoins(): QueryObserverResult<{ coins: Coin[] }> {
  return useQuery(
    "search-coins",
    async () => client.get("search").json<{ coins: Coin[] }>(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  );
}
