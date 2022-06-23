import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { ICurrentUser } from "../../types";

import styles from "./Dashboard.module.css";

import { Loading } from "../../components";

const DashboardScreen = () => {
  const auth = useAuth();
  const { isCreating, categories } = useData();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

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
      {isCreating && <Loading text="Criando Categoria..." />}
      {categories.length <= 0 && !isCreating && (
        <Loading text="Nenhuma Categoria encontrada..." />
      )}
      {!isCreating && categories.length > 0 && (
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
