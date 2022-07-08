import { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory, TypeSnippet } from "../types";

export interface DataContextType {
  create: (category: TypeCreateCategory) => Promise<void>;
  fetch: () => Promise<void>;
  categories: TypeCategory[];
  isLoading: boolean;
  isCreating: boolean;

  snippets: TypeSnippet[];
  fetchSnippets: (category_id: string) => Promise<void>;
  createSnippet: (snippet: Partial<TypeSnippet>) => Promise<void>;
}

const DataContext = createContext<DataContextType>(null!);

function useData() {
  return useContext(DataContext);
}

export { DataContext, useData };
