import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cards } from "../../components";
import { useData } from "../../context/DataContext";
import { Loading } from "../../components";
import styles from "./Categories.module.css";

const CategoryScreen = () => {
  const { fetchSnnipets, snnipets, isLoading, isCreating } = useData();
  const location = useLocation();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnnipets(categoryId);

    console.log(snnipets);
  }, [fetchSnnipets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  //   <div>
  //   CategoryScreen
  //   {snnipets.map((s) => (
  //     <Cards key={s.id} category={s} />
  //   ))}
  // </div>
  return (
    <div>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Snnipet..." />}
      {snnipets.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Crie o primeiro Snnipet para a categoria =D" />
      )}

      {!isLoading && !isCreating && snnipets.length > 0 && (
        <div className={styles.render_grid_categories}>
          {snnipets.map((snnipet, index) => (
            <Cards key={snnipet.id} index={index} category={snnipet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
