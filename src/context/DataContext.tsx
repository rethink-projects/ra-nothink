import { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory } from "../types";

export interface DataContextType {
  create: (category: TypeCreateCategory) => Promise<void>;
  fetch: () => Promise<void>;
  categories: TypeCategory[];
  isLoading: Boolean;
  isCreating: Boolean;
}

const DataContext = createContext<DataContextType>(null!);

function useData() {
  return useContext(DataContext);
}

export { DataContext, useData };
