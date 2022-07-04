import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { ICurrentUser } from "../../types";

import styles from "./Categories.module.css";

import { Loading } from "../../components";
import { useCallback, useEffect } from "react";
import { Cards } from "../../components";

const CategoriesScreen = () => {
  const auth = useAuth();
  const { isCreating, categories, fetch, isLoading } = useData();
  const navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

  const fetchCategories = useCallback(async () => {
    await fetch();
  }, [fetch]);

  useEffect(() => {
    if (categories.length <= 0) {
      fetchCategories();
    }
  }, []);
  
  // const onSignout = () => {
  //   auth.signout(() => navigate("/"));
  // };
  // if (!currentUser) {
  //   return (
  //     <div>
  //       <p>Carregando...</p>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.categories_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categoria..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma Categoria" />
      )}

      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_categories}>
          {categories.map((category, index) => (
            <Cards key={category.id} index={index} data={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesScreen;
