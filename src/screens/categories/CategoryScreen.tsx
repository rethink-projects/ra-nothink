import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Styles
import styles from "./Categories.module.css";

// Components
import { Card, Loading } from "../../components";

// Context
import { useData } from "../../context/DataContext";

// Assets
import Images from "../../assets";

const CategoryScreen = () => {
  const { fetchSnnipets, snnipets, isLoading } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    const category_id = location.pathname.replace("/categories/", "");
    await fetchSnnipets(category_id);
  }, [fetchSnnipets, location.pathname]);

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
        <img
          onClick={() => navigate(-1)}
          src={Images.icons.back}
          alt="BreadCrumb"
        />
        <p>{`${location.state}`}</p>
      </div>

      {isLoading && <Loading />}
      {snnipets.length <= 0 && !isLoading && (
        <Loading text="Nenhum Snnipet encontrado." />
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
};

export default CategoryScreen;
