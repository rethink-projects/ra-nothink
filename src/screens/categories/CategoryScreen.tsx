import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Loading, Breadcrumbs } from "../../components";
import { useData } from "../../context/DataContext";
import Images from "../../assets";
import styles from "./Categories.module.css";

function CategoryScreen() {
  const { fetchSnippets, snippets, isLoading, isCreating } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnippets(categoryId);
  }, [fetchSnippets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);
  //console.log(location);
  return (
    <div className={styles.category_container}>
      <div className={styles.category_actions}>
        <img
          onClick={() => navigate(-2)}
          src={Images.icons.back}
          alt="Voltar"
        />
        <span>{`${location.state}`}</span>
      </div>
      <Breadcrumbs />
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Snnipet..." />}
      {snippets.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhum Snippet encontrado." />
      )}
      {!isCreating && !isLoading && snippets.length > 0 && (
        <div className={styles.render_grid_category}>
          {snippets.map((snippet, index) => (
            <Card
              key={snippet.id}
              index={index}
              type="snippet"
              data={{ ...snippet }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryScreen;
