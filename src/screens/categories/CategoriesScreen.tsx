// import { useNavigate } from "react-router-dom";

// CSS
import styles from "./Categories.module.css";

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Types
import { ICurrentUser } from "../../types";

// Components
import { Loading } from "../../components";
import { useCallback, useEffect } from "react";
import Card from "../../components/ui/Card/Card";

export default function CategoriesScreen() {
  const auth = useAuth();
  // let navigate = useNavigate();
  const { fetch, isLoading, categories, isCreating } = useData();
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
  }, []);

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  if (isCreating) {
    return <Loading text="Criando Categoria.." />;
  }
  console.log(categories);

  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categoria..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada" />
      )}
      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <div>
              <Card key={category?.id} category={category} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
