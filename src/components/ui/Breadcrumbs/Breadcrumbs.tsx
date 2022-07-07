import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import Images from "../../../assets";

function Breadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.category_breadcrumb}>
      <span onClick={() => navigate("/categories")}>Categorias</span>
      <img src={Images.icons.back} alt="BreadCrumb" />
      <p>{`${location.state}`}</p>
    </div>
  );
}

export default Breadcrumbs;
