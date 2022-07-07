import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../../assets";
import { Loading } from "../../components";
import Card from "../../components/ui/Card/Card";
import { useData } from "../../context/DataContext";

// Styles
import styles from "./Categories.module.css";

const CategoryScreen = () => {
  const { fetchSnippets, snippets, isLoading } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnippets(categoryId);
  }, [fetchSnippets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  // console.log(location);
  // console.log({ snippets });
  return (
    <div className={styles.category_container}>
      <div className={styles.category_actions}>
        <img
          onClick={() => navigate(-1)}
          src={Images.icons.back}
          alt="Ícone de Voltar"
        />
        <span>{`${location.state}`}</span>
      </div>
      <div className={styles.category_breadcrumb}>
        <span>Categorias</span>
        <img src={Images.icons.back} alt="Breadcrumb" />
        <p>{`${location.state}`}</p>
      </div>
      {isLoading && <Loading />}
      {snippets.length <= 0 && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada" />
      )}
      {!isLoading && snippets.length > 0 && (
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
};

export default CategoryScreen;
