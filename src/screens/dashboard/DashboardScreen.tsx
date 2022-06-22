import styles from "./Dashboard.module.css";
/* import { useNavigate } from "react-router-dom"; */

//components
import { Loading } from "../../components";

//context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

//types
import { ICurrentUser } from "../../types";

export const DashboardScreen = () => {
  const auth = useAuth();
  const { isCreating, categories } = useData();
  const currentUser: ICurrentUser = auth.user;
 /*  let navigate = useNavigate(); */

 /*  const onSignout = () => {
    auth.signOut(() => navigate("/"));
  }; */

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard_container}>
      {isCreating && <Loading text="Criando categoria..." />}
      {categories.length <= 0 && !isCreating && (
        <Loading text="Nenhuma categoria encontrada." />
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
};
