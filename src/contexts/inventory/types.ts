export type AssetKey = string;

export interface IncreaseTransaction {
  type: "increase";
  date: number;
  amount: number;
  price: number;
}

export interface DecreaseTransaction {
  type: "decrease";
  date: number;
  amount: number;
}

export type Transaction = IncreaseTransaction | DecreaseTransaction;

export interface Asset {
  symbol: string;
  name: string;
  transactions: Transaction[];
}

export interface Inventory {
  assets: Record<AssetKey, Asset>;
  updateAsset(key: AssetKey, asset: Asset): void;
  addAsset(asset: Asset): AssetKey;
}
