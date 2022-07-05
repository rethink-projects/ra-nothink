import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";

import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [snnipets, setSnnipets] = useState<TypeSnnipet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

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

  let createSnnipet = useCallback(
    async (snnipet: Partial<TypeSnnipet>) => {
      try {
        setIsCreating(true);
        const newSnnipet = await firebaseInstance.createSnnipet(snnipet);
        if (newSnnipet?.owner_id) {
          setSnnipets([newSnnipet, ...snnipets]);
          setIsCreating(false);
        }
      } catch (error) {
        setIsCreating(false);
      }
    },
    [snnipets]
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
      });
    } catch (error) {
      console.info(error);
      setIsLoading(false);
      return;
    }
  }, []);

  let value: DataContextType = {
    categories,
    isCreating,
    isLoading,
    create,
    fetch,
    snnipets,
    fetchSnnipets,
    createSnnipet,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
