import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Styles
import styles from "./Breadcrumb.module.css";

// Assets
import Images from "../../../assets";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.category_breadcrumb}>
      <span>Categorias</span>
      <img
        onClick={() => navigate(-1)}
        src={Images.icons.back}
        alt="BreadCrumb"
      />
      <p>{`${location.state}`}</p>
    </div>
  );
};

export default Breadcrumb;
