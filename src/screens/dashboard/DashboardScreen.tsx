// import { useNavigate } from "react-router-dom";

// CSS
import styles from "./Dashboard.module.css";

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Types
import { ICurrentUser } from "../../types";

// Components
import { Loading } from "../../components";

export default function DashboardScreen() {
  const auth = useAuth();
  // let navigate = useNavigate();
  const { isCreating, categories } = useData();
  const currentUser: ICurrentUser = auth.user;
  // const onSignout = () => {
  //   auth.signout(() => navigate("/"));
  // };

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  if (isCreating) {
    return <Loading text="Criando Categoria.." />;
  }

  return (
    <div className={styles.dashboard_container}>
      {isCreating && <Loading text="Criando Categoria..." />}
      {categories.length <= 0 && !isCreating && (
        <Loading text="Nenhuma Categoria encontrada" />
      )}
      {!isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <p key={index}>{category.title}</p>
          ))}
        </div>
      )}
    </div>
  );
}
