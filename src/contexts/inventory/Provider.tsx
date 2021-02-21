import { v4 as uuid } from "uuid";
import { useState, useCallback, useMemo, useEffect, ReactNode } from "react";
import { InventoryContext } from "./context";
import type { Asset, AssetKey } from "./types";

interface InventoryProviderProps {
  children: ReactNode;
}

const localStorageKey = "inventory-assets";

export function InventoryProvider({
  children,
}: InventoryProviderProps): JSX.Element {
  const [assets, setAssets] = useState<Asset[]>(() => {
    const _assets = process.browser && localStorage.getItem(localStorageKey);
    return _assets ? JSON.parse(_assets) : [];
  });

  const addAsset = useCallback((asset: Exclude<Asset, "id">): AssetKey => {
    const id = uuid();
    setAssets((old) => [...old, { ...asset, id }]);
    return id;
  }, []);

  const updateAsset = useCallback((asset: Asset): void => {
    setAssets((old) => [asset, ...old.filter(({ id }) => id != asset.id)]);
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
