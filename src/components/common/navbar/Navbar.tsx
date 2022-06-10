import Images from "../../../assets";
import styles from "./Navbar.module.css";

//context
import { useAuth } from "../../../context/AuthContext";

//component
import { GeneralButton } from "../..";

import { useNavigate } from "react-router-dom";

import { ICurrentUser } from "../../../types";
import Wrapper from "../wrapper/Wrapper";

const Navbar = () => {
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;
  let navigate = useNavigate();

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.navbar_container}>
      <Wrapper>
        <div className={styles.navbar_main}>
          <img
            className={styles.navbar_logoImage}
            src={Images.logo.navbarLogo}
            alt="Nothink Header Logo"
            onClick={() => navigate("/dashboard")}
          />
          <div className={styles.navbar_navbuttons}>
            <img src={currentUser.avatarUrl} alt="User" />
            <GeneralButton
              onClick={() => navigate("create")}
              text="Criar Snnipet"
              height="29px"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
