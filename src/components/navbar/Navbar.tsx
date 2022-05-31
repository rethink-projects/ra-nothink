import Images from "../../assets";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
          <button onClick={onSignout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
