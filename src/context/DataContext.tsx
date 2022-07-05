import { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../types";

export interface DataContextType {

  //categories
  create: (category: TypeCreateCategory) => Promise<void>;
  fetch: () => Promise<void>;
  categories: TypeCategory[];
  isLoading: Boolean;
  isCreating: Boolean;

  //snnipets
  snnipets: TypeSnnipet[];
  fetchSnnipets: (category_id: string) => Promise<void>;
  createSnnipet: (snnipet: Partial<TypeSnnipet>) => Promise<void>;


}

export const DataContext = createContext<DataContextType>(null!);

export const useData = () => {
  return useContext(DataContext);
};
