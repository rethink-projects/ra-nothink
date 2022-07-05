import { info } from "console";
import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";
import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

/* <DataProvider>
    <Children />
    <Children />
    <Children />
    <Children />
    <Children />
</DatProvider> */
function DataProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  // const [snnipets, setSnnipets] = useState<TypeSnnipet[]>([]);
  const [snnipets, setSnnipets] = useState<TypeSnnipet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  let create = useCallback(
    async (category: TypeCreateCategory) => {
      try {
        setIsCreating(true);
        const newCategory = await firebaseInstance.createCategory(category);
        if (newCategory?.owner_id) {
          setCategories([newCategory, ...categories]);
          setIsCreating(false);
        }
      } catch (error) {
        setIsCreating(false);
      }
    },
    [categories]
  );

  let fetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const allCategories = await firebaseInstance.getAllCategories();
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

  let fetchSnnipets = useCallback(async (category_id: string) => {
    try {
      setIsLoading(true);
      const allSnnipetsByCategoryId =
        await firebaseInstance.getSnnipetsByCategoryId(category_id);

      setTimeout(() => {
        setSnnipets(allSnnipetsByCategoryId);
        setIsLoading(false);
      }, 600);
    } catch (error) {
      console.info(error);
      setIsLoading(false);
      return;
    }
  }, []);

  let value: DataContextType = {
    create,
    fetch,
    categories,
    isCreating,

    isLoading,
    snnipets,
    fetchSnnipets,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
