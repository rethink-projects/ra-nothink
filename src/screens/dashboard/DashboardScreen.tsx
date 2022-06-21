// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Types
import { ICurrentUser } from "../../types";

// Components
import { Loading } from "../../components";

// Styles
import styles from "./Dashboard.module.css";

export default function DashboardScreen() {
  const auth = useAuth();
  const { isCreating, categories } = useData();
  const currentUser: ICurrentUser = auth.user;

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard_container}>
      {isCreating && <Loading text="Criando Categorias..." />}
      {categories.length <= 0 && !isCreating && (
        <Loading text="Nenhuma Categoria encontrada." />
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
