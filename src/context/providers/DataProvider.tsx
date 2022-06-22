import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";
import { TypeCategory, TypeCreateCategory } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

function DataProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [isLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  let create = useCallback(
    async (category: TypeCreateCategory) => {
      try {
        setIsCreating(true);
        const newCategory = await firebaseInstance.createCategory(category);
        if (newCategory?.owner_id) {
          setCategories([...categories, newCategory]);
          setIsCreating(false);
        }
      } catch (error) {
        setIsCreating(false);
      }
    },
    [categories]
  );

  let value: DataContextType = {
    create,
    categories,
    isCreating,
    isLoading,
  };

  // Provider que por sua vez recebe o user e vai transmitir as informações pra outros componentes
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
