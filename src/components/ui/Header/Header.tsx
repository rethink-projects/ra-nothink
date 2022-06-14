import Images from "../../../assets";
import { ICurrentUser } from "../../../types";
import styles from "./Header.module.css";

function Header() {
  // const auth = useAuth();
  const user: ICurrentUser = JSON.parse(localStorage.getItem("@nothink:user")!);
  console.log(user);

  return (
    <div className={styles.header_container}>
      <img
        className={styles.header_logo}
        src={Images.logo.light}
        alt="Logo Nothink tema claro"
      />
      <div className={styles.header_profile}>
        {user.avatarUrl && (
          <img
            className={styles.header_avatar}
            src={user.avatarUrl}
            alt="Foto de perfil"
          />
        )}
        <button className={styles.header_create_snnipet}>Criar Snnipet</button>
      </div>
    </div>
  );
}

export default Header;
