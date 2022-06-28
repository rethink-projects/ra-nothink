/* eslint-disable react-hooks/exhaustive-deps */

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Types
import { ICurrentUser } from "../../types";

// Components
import { Card, Loading } from "../../components";

// Styles
import styles from "./Categories.module.css";
import { useCallback, useEffect } from "react";

export default function CategoriesScreen() {
  const auth = useAuth();
  const { fetch, isLoading, categories, isCreating } = useData();
  const currentUser: ICurrentUser = auth.user;

  const fetchCategories = useCallback(async () => {
    await fetch();
  }, [fetch]);

  useEffect(() => {
    if (categories.length <= 0) {
      fetchCategories();
    }
  }, []);

  if (!currentUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categorias..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada." />
      )}

      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <Card key={category?.id} index={index} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}