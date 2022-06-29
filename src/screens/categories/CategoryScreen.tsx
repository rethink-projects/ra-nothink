import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../../assets";
import { Card, Loading } from "../../components";
import { useData } from "../../context/DataContext";

// Styles
import styles from "./Categories.module.css";

function CategoryScreen() {
  const { fetchSnnnipets, snnipets, isLoading } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnnnipets(categoryId);
  }, [fetchSnnnipets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <div className={styles.category_container}>
      <div className={styles.category_actions}>
        <img
          onClick={() => navigate(-1)}
          src={Images.icons.back}
          alt="Voltar"
        />
        <span>{`${location.state}`}</span>
      </div>
      <div className={styles.category_breadcrumb}>
        <span>Categorias</span>
        <img src={Images.icons.back} alt="BreadCrumb" />
        <p>{`${location.state}`}</p>
      </div>
      {isLoading && <Loading />}
      {snnipets.length <= 0 && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada." />
      )}
      {!isLoading && snnipets.length > 0 && (
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
