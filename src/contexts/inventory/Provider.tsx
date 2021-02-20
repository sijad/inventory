import { v4 as uuid } from "uuid";
import { useState, useCallback, useMemo, useEffect, ReactNode } from "react";
import { InventoryContext } from "./context";
import type { Inventory, Asset, AssetKey } from "./types";

interface InventoryProviderProps {
  children: ReactNode;
}

const localStorageKey = "inventory-assets";

export default function InventoryProvider({
  children,
}: InventoryProviderProps): JSX.Element {
  const [assets, setAssets] = useState<Inventory["assets"]>(() => {
    const _assets = process.browser && localStorage.getItem(localStorageKey);
    return _assets ? JSON.parse(_assets) : {};
  });

  const addAsset = useCallback((asset: Asset): AssetKey => {
    const id = uuid();
    setAssets((old) => ({ ...old, [id]: asset }));
    return id;
  }, []);

  const updateAsset = useCallback((id: AssetKey, asset: Asset): void => {
    setAssets((old) => ({ ...old, [id]: asset }));
  }, []);

  useEffect(() => {
    if (assets) {
      localStorage.setItem(localStorageKey, JSON.stringify(assets));
    }
  }, [assets]);

  const value = useMemo(
    () => ({
      assets,
      addAsset,
      updateAsset,
    }),
    [assets, addAsset, updateAsset],
  );

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
}
