import { createContext } from "react";

import type { Inventory } from "../types";

export const InventoryContext = createContext<Inventory | undefined>(undefined);
