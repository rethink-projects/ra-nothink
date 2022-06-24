import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { ICurrentUser } from "../../types";

import styles from "./Dashboard.module.css";

import { Loading } from "../../components";
import { useCallback, useEffect } from "react";
import Cards from "../../components/ui/Cards/Cards";

const DashboardScreen = () => {
  const auth = useAuth();
  const { isCreating, categories, fetch, isLoading } = useData();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

  const fetchCategories = useCallback(async () => {
    await fetch();
  }, [fetch]);

  useEffect(() => {
    if (categories.length < 0) {
      fetchCategories();
    }
  }, []);

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };
  if (!currentUser) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categoria..." />}
      {categories.length <= 0 && !isCreating && (
        <>
        {/* <Loading text="Nenhuma Categoria encontrada..." /> */}
        <Cards /></>
      )}

      {!isLoading && !isCreating && categories.length > 0 && !isLoading && (
        <div className={styles.render_grid_categories}>
          {categories.map((category, index) => (
            <p key={index}>{category.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;
