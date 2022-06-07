import Images from "../../../assets";
import styles from "./Navbar.module.css";

//context
import { useAuth } from "../../../context/AuthContext";

//component
import { GeneralButton } from "../..";

import { useNavigate } from "react-router-dom";

import { ICurrentUser } from "../../../types";

const Navbar = () => {
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;
  let navigate = useNavigate();

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img
          className={styles.logoImage}
          src={Images.logo.navbarLogo}
          alt="Nothink Header Logo"
          onClick={() => navigate("/dashboard")}
        />
        <div className={styles.navbuttons}>
          <img src={currentUser.avatarUrl} alt="User" />
          <GeneralButton
            onClick={() => navigate("/dashboard/create")}
            children="Criar Snnipet"
            height="29px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
