import { useNavigate } from "react-router-dom";
import Imagens from "../../../assets";

import { ICurrentUser } from "../../../types";
import Styles from "./Header.module.css";

const Header = () => {
  let localStorageUser: ICurrentUser = JSON.parse(
    localStorage.getItem("@nothink:user") || ""
  );
  let navigate = useNavigate();

  console.log({ localStorageUser });

  return (
    <div className={Styles.nav_bar}>
      <img
        className={Styles.nav_bar_logo}
        src={Imagens.logo.nav}
        alt="Nothink Logo"
      />

      <div className={Styles.nav_bar_right}>
        <img
          className={Styles.nav_bar_avatar}
          src={localStorageUser.avatarUrl}
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
  );
};

export default Header;
