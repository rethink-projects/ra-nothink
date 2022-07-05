// CSS
import styles from "./Categories.module.css";

// Types
import { ICurrentUser } from "../../types";

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Components
import { Card, Loading } from "../../components";
import { useCallback, useEffect } from "react";

export default function CategoriesScreen() {
  const auth = useAuth();
  const { isCreating, categories, fetch, isLoading } = useData();
  const currentUser: ICurrentUser = auth.user;

  // const onSignout = () => {
  //   auth.signout(() => navigate("/"));
  // };

  const fetchCategories = useCallback(async () => {
    await fetch();
  }, [fetch]);

  useEffect(() => {
    if (categories.length <= 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categorias..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada!" />
      )}

      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <Card key={category?.id} index={index} data={category} />
          ))}
        </div>
      )}
      {/* <h1>Tela de Dashboard / Outlet</h1>
      <button onClick={onSignout}>Fazer Logout</button> */}
    </div>
  );
}
