import { useContext } from "react";
import { InventoryContext } from "./context";
import type { Inventory } from "./types";

export function useInventory(): Inventory {
  const inventory = useContext(InventoryContext);
  if (!inventory) {
    throw new Error("You need to wrap you component with inventory provider!");
  }
  return inventory;
}
