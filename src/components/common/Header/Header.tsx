import { Link, useNavigate } from "react-router-dom";
import Imagens from "../../../assets";
import { usePageActive } from "../../../hooks";

import { ICurrentUser } from "../../../types";
import Styles from "./Header.module.css";

const Header = () => {
  const currentUser: ICurrentUser = JSON.parse(
    localStorage.getItem("@nothink:user") || ""
  );
  const navigate = useNavigate();
  const isPageActive = usePageActive();

  return (
    <div className={isPageActive ? Styles.nav_bar_active : Styles.nav_bar}>
      <div className={Styles.nav_bar_inner}>
        <Link className={Styles.nav_bar_logo} to={""}>
          <img src={Imagens.logo.nav} alt="Nothink Logo" />
        </Link>

        <div className={Styles.nav_bar_right}>
          <img
            className={Styles.nav_bar_avatar}
            src={currentUser.avatarUrl}
            alt="User Imagem"
          />

          <button
            className={Styles.nav_bar_button}
            onClick={() => navigate("add")}
          >
            Criar Snnipet
          </button>
        </div>
      </div>
      <div className={Styles.header_info}>
        <h1 className={Styles.header_welcome_title}>
          Olá<strong>, {currentUser.name}!</strong>
        </h1>
        <span className={Styles.header_welcome_description}>
          Essas são as categorias disponíveis para você.
        </span>
      </div>
    </div>
  );
};

export default Header;
