import Images from "../../assets";
import styles from "./Navbar.module.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {GeneralButton} from "../../components";


const Navbar = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  const onSignout = () => {
    auth.signOut(() => navigate("/"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src={Images.logo.navbarLogo} alt="" />
        <div className={styles.navbuttons}>
          <img src={auth.user.avatarUrl} alt="" />
          <GeneralButton onClick={onSignout} children="Logout"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
