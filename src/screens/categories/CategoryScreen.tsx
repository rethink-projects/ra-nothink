import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../../components";
import { useData } from "../../context/DataContext";

const CategoryScreen = () => {
  const { fetchSnippets, snippets, isLoading } = useData();
  const location = useLocation();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnippets(categoryId);
  }, [fetchSnippets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <div>
      {isLoading && <Loading />}
      {snippets.length <= 0 && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada" />
      )}
      {!isLoading && snippets.length > 0 && (
        <div>
          {snippets.map((snippet, index) => (
            <div key={snippet.id}>
              <p>{snippet.title}</p>
              <p>{snippet.category_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
