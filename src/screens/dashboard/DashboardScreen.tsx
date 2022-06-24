import styles from "./Dashboard.module.css";
/* import { useNavigate } from "react-router-dom"; */

//components
import { Card, Loading } from "../../components";

//context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

//types
import { ICurrentUser } from "../../types";
import { useCallback, useEffect } from "react";

export const DashboardScreen = () => {
  const auth = useAuth();
  const { isCreating, categories, fetch, isLoading } = useData();
  const currentUser: ICurrentUser = auth.user;
  /*  let navigate = useNavigate(); */

  /*  const onSignout = () => {
    auth.signOut(() => navigate("/"));
  }; */

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
      {isCreating && <Loading text="Criando categoria..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma categoria encontrada." />
      )}

      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <Card key={category?.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};
