/* eslint-disable react-hooks/exhaustive-deps */

// Styles
import styles from "./Dashboard.module.css";

// Types
import { ICurrentUser } from "../../types";

// Contexts
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Components
import { Loading } from "../../components";
import Card from "../../components/common/Card/Card";

// React
import { useCallback, useEffect } from "react";

const DashboardScreen = () => {
  let auth = useAuth();
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
        <Loading text="Nenhuma categoria encontrada." />
      )}

      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            // <div
            //   style={{
            //     backgroundColor: "white",
            //     width: "200px",
            //     border: "1px solid #c3c3c3",
            //     height: "100px",
            //     color: "black",
            //   }}
            // >
            //   <h1>{category.title}</h1>
            //   <span>{category.owner_id}</span>
            //   <span>{category.totalLikes}</span>
            //   <span>{category.totalSnnipets}</span>
            // </div>
            // Criar Component Card e listar os cards.
            // <Card key={category?.id} category={category} />
            <Card key={category?.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;
