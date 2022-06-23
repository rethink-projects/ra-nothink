import { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory } from "../types";

export interface DataContextType {
  create: (category: TypeCreateCategory) => Promise<void>;
  fetch: () => Promise<void>;
  categories: TypeCategory[];
  isLoading: Boolean;
  isCreating: Boolean;
}

export const DataContext = createContext<DataContextType>(null!);

export const useData = () => {
  return useContext(DataContext);
};
