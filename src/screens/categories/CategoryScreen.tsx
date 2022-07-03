import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Cards } from "../../components";
import { useData } from "../../context/DataContext";
import { Loading } from "../../components";
import styles from "./Categories.module.css";
import Images from "../../assets";

const CategoryScreen = () => {
  const { fetchSnnipets, snnipets, isLoading, isCreating } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnnipets(categoryId);

    console.log(snnipets);
  }, [fetchSnnipets, location.pathname]);

  useEffect(() => {
    handleData();
    console.log(location);
  }, [handleData]);

  //   <div>
  //   CategoryScreen
  //   {snnipets.map((s) => (
  //     <Cards key={s.id} category={s} />
  //   ))}
  // </div>
  return (
    <div>
      <div className={styles.snnipets_title_container}>
        <img
          src={Images.icons.back}
          alt="Voltar"
          onClick={() => navigate(-1)}
        />
        <span> {`${location.state}`}</span>
      </div>
      <div className={styles.snnipets_breadcrumb}>
        <span className={styles.caminho} onClick={() => navigate(-1)}>
          Categorias
        </span>
        <img
          src={Images.icons.higher}
          alt="contém"
          onClick={() => navigate(-1)}
        />
        <span> {`${location.state}`}</span>
      </div>

      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Snnipet..." />}
      {snnipets.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Crie o primeiro Snnipet para a categoria =D" />
      )}

      {!isLoading && !isCreating && snnipets.length > 0 && (
        <div className={styles.render_grid_categories}>
          {snnipets.map((snnipet, index) => (
            <Cards
              type="snnipet"
              key={snnipet.id}
              index={index}
              category={snnipet}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
