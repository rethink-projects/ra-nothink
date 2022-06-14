import Images from "../../../../assets";
import { useAuth } from "../../../../context/AuthContext";
import styles from "./Header.module.css";

function Header() {
  const auth = useAuth();

  return (
    <div className={styles.header_container}>
      <img
        className={styles.header_logo}
        src={Images.logo.light}
        alt="Logo Nothink tema claro"
      />
      {auth.user.avatarUrl && (
        <img
          className={styles.header_avatar}
          src={auth.user.avatarUrl}
          alt="Foto de perfil"
        />
      )}
      <p className={styles.header_txt}>Snnipets Curtidos</p>
      <button className={styles.header_create_snnipet}>Criar Snnipet</button>
    </div>
  );
}

export default Header;
