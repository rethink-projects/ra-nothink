import React, { useCallback, useState } from "react";
import firebaseInstance from "../../services/firebase";
import { TypeCategory, TypeCreateCategory, TypeSnippet } from "../../types";
import { DataContext, DataContextType } from "../DataContext";

function DataProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<TypeCategory[]>([]);
  const [snippets, setSnippets] = useState<TypeSnippet[]>([]);
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

  let fetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const allCategories = await firebaseInstance.getAllCategories();
      setTimeout(() => {
        setCategories(allCategories);
        setIsLoading(false);
      }, 600);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
  }, []);

  let fetchSnippets = useCallback(async (category_id: string) => {
    try {
      setIsLoading(true);
      const allSnippetsByCategoryId =
        await firebaseInstance.getSnippetsByCategoryId(category_id);
      setSnippets(allSnippetsByCategoryId);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
    snippets,
    fetchSnippets,
  };

  // Provider que por sua vez recebe o user e vai transmitir as informações pra outros componentes
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
