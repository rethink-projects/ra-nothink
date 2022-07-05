import { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../types";

export interface DataContextType {
  // Categories
  create: (category: TypeCreateCategory) => Promise<void>;
  fetch: () => Promise<void>;
  categories: TypeCategory[];
  isLoading: Boolean;
  isCreating: Boolean;

  // Snnipets
  snnipets: TypeSnnipet[];
  fetchSnnipets: (category_id: string) => Promise<void>;
}

// Criação do contexto
// O contexto será do tipo DataContextType indicado em <>
// O parâmetro null! avisa que não terá um caso null, garantindo que sempre terá alguma coisa
const DataContext = createContext<DataContextType>(null!);

// Função para renderizar o contexto
function useData() {
  return useContext(DataContext);
}

export { DataContext, useData };
