import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../../assets";
import { Card, Loading } from "../../components";
import { useData } from "../../context/DataContext";

// Styles
import styles from "./Categories.module.css";

function CategoryScreen() {
  const { fetchSnnipets, snnipets, isLoading, isCreating } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnnipets(categoryId);
  }, [fetchSnnipets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <div className={styles.category_container}>
      <div className={styles.category_actions}>
        <img
          onClick={() => navigate(-1)}
          src={Images.iconsButton.back}
          alt="Voltar"
        />
        <span>{`${location.state}`}</span>
      </div>
      <div className={styles.category_breadcrumb}>
        <span>Categorias</span>
        <img src={Images.iconsButton.back} alt="BreadCrumb" />
        <p>{`${location.state}`}</p>
      </div>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Snnipet..." />}
      {snnipets.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhum Snnipet encontrado." />
      )}
      {!isLoading && !isCreating && snnipets.length > 0 && (
        <div className={styles.render_grid_category}>
          {snnipets.map((snnipet, index) => (
            <Card
              key={snnipet.id}
              index={index}
              type="snnipet"
              data={{ ...snnipet, totalLikes: 0, totalSnnipets: 0 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryScreen;
