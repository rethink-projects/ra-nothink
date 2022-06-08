import styles from "./IconButton.module.css";
import Images from "../../../assets";

type IconButtonProps = {
  type: "google" | "github";
  onClick?: () => void;
};

function IconButton({ type, onClick }: IconButtonProps) {
  const defaultIconClass =
    type === "google"
      ? styles.defaultIconButton
      : `${styles.defaultIconButton} ${styles.darkButtonClass}`;

  return (
    <button onClick={onClick} className={defaultIconClass}>
      <img
        className={styles.default_img}
        src={Images.icons[type]}
        alt={type === "google" ? "Google Icon Nothin" : "Github Icon Nothin"}
      />
      Entrar com {type === "google" ? "Google" : "Github"}
    </button>
  );
}

export default IconButton;
