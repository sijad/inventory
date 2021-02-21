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
  type: "crypto";
  typeId: string;
  id: string;
  name: string;
  transactions: Transaction[];
}

export interface Inventory {
  assets: Asset[];
  updateAsset(asset: Asset): void;
  addAsset(asset: Asset): AssetKey;
}
