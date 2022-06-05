import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import RequireAuth from "../../../services/auth/Auth";

import Images from "../../../assets";
import styles from "./Layout.module.css";

const Layout = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <RequireAuth>
      <>
        <div className={styles.header}>
          <h1>Nothink.</h1>

          <div className={styles.header_right_side}>
            {auth.user && auth.user.avatarUrl && (
              <img
                className={styles.profile_image}
                src={auth.user.avatarUrl && auth.user.avatarUrl}
                alt=""
              ></img>
            )}
            {auth.user && !auth.user.avatarUrl && (
              <img
                className={styles.profile_image}
                src={`https://ui-avatars.com/api/?name=${auth.user.name.replace(
                  "",
                  "+"
                )}`}
                alt=""
              ></img>
            )}
            <span>Snippets Curtidos</span>
            <button className={styles.create_snippet_button}>
              Criar snippet
            </button>
          </div>
        </div>
        <Outlet />
      </>
    </RequireAuth>
  );
};

export default Layout;
