import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";
import { useData } from "../../context/DataContext";
import { Loading, Card } from "../../components";
import styles from "./Categories.module.css";

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

  //console.log(auth.user);

  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categorias..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada." />
      )}
      {!isCreating && categories.length > 0 && !isLoading && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <Card key={category?.id} index={index} data={category} />
          ))}
        </div>
      )}
    </div>
  );
}
