import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";
import { TypeCategory, TypeCreateCategory } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const create = useCallback(
    async (category: TypeCreateCategory) => {
      try {
        setIsCreating(true);
        const newCategory = await firebaseInstance.createCategory(category);
        if (newCategory?.owner_id) {
          setCategories([...categories, newCategory]);
          setIsCreating(false);
        }
      } catch (e: any) {
        setIsCreating(false);
      }
    },
    [categories]
  );

  const value: DataContextType = {
    create,
    categories,
    isCreating,
    isLoading,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
