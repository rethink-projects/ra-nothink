import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";

import {
  ICurrentUser,
  TypeCategory,
  TypeCreateCategory,
  TypeProvider,
} from "../../types";
import { AuthContext } from "../AuthContext";
import { DataContext, DataContextType } from "../DataContext";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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
    categories,
    isCreating,
    isLoading,
    create
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
