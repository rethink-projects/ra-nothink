import { useNavigate } from "react-router-dom";

// CSS
import styles from "./Dashboard.module.css";

// Types
import { ICurrentUser } from "../../types";

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Components
import { Loading } from "../../components";

export default function DashboardScreen() {
  const auth = useAuth();
  const { isCreating, categories } = useData();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard_container}>
      {isCreating && <Loading text="Criando Categorias..." />}
      {categories.length <= 0 && !isCreating && (
        <Loading text="Nenhuma Categoria encontrada!" />
      )}
      {!isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <p key={index}>{category.title}</p>
          ))}
        </div>
      )}
      {/* <h1>Tela de Dashboard / Outlet</h1>
      <button onClick={onSignout}>Fazer Logout</button> */}
    </div>
  );
}
