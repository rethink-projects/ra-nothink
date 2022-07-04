import React, { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../types";

export interface DataContextType {
  create: (category: TypeCreateCategory) => Promise<void>;
  fetch: () => Promise<void>;
  categories: TypeCategory[];
  isLoading: Boolean;
  isCreating: Boolean;

  snnipets: TypeSnnipet[];
  fetchSnnipets: (categoryId: string) => Promise<void>;
  createSnnipet: (snnipet: Partial<TypeSnnipet>) => Promise<void>;
}

const DataContext = createContext<DataContextType>(null!);

function useData() {
  return useContext(DataContext);
}

export { DataContext, useData };
