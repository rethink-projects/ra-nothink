import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";
import { TypeCategory, TypeCreateCategory } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const create = useCallback(
    async (category: TypeCreateCategory) => {
      try {
        setIsCreating(true);
        const newCategory = await firebaseInstance.createCategory(category);
        if (newCategory?.owner_id) {
          setCategories([ newCategory, ...categories]);
          setIsCreating(false);
        }
      } catch (e: any) {
        setIsCreating(false);
      }
    },
    [categories]
  );

  let fetch = useCallback(async () => {
    try {
      setIsLoading(true);

      const allCategories = await firebaseInstance.getAllCategories();

      allCategories
        .sort(
          (prevCategory: TypeCategory, nextCategory: TypeCategory) =>
            Number(prevCategory.timestamp) - Number(nextCategory.timestamp)
        )
        .reverse();

      setTimeout(() => {
        setCategories(allCategories);
        setIsLoading(false);
      }, 600);
    } catch (error) {
      console.info(error);
      setIsLoading(false);
      return;
    }
  }, []);
  const value: DataContextType = {
    create,
    fetch,
    categories,
    isCreating,
    isLoading,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
