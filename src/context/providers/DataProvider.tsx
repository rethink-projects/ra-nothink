import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";
import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [snnipets, setSnipets] = useState<TypeSnnipet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const create = useCallback(
    async (category: TypeCreateCategory) => {
      try {
        setIsCreating(true);
        const newCategory = await firebaseInstance.createCategory(category);
        if (newCategory?.owner_id) {
          setCategories([newCategory, ...categories]);
          setIsCreating(false);
        }
      } catch (e: any) {
        setIsCreating(false);
      }
    },
    [categories]
  );

  const fetch = useCallback(async () => {
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
  const fetchSnnipets = useCallback(async (categoryId: string) => {
    try {
      setIsLoading(true);

      const allSnnipetsByCategoryId =
        await firebaseInstance.getSnnipetsByCategoryId(categoryId);

      // allSnnipetsByCategoryId
      //   .sort(
      //     (prevCategory: TypeCategory, nextCategory: TypeCategory) =>
      //       Number(prevCategory.timestamp) - Number(nextCategory.timestamp)
      //   )
      //   .reverse();

      setTimeout(() => {
        setSnipets(allSnnipetsByCategoryId);
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
    snnipets,
    fetchSnnipets,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
