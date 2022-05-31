import Images from "../../assets";
import styles from "./LoginButton.module.css";

type LoginButtonProps = {
  type: "google" | "github";
  onClick?: () => void;
};

const LoginButton = ({ type, onClick }: LoginButtonProps) => {
  const defaultLoginButton =
    type === "google"
      ? styles.defaultLoginButton
      : ` ${styles.githubButtonClass}
     ${styles.defaultLoginButton}`;

  return (
    <button onClick={onClick} className={defaultLoginButton}>
      <img
        src={Images.icons[type]}
        alt={type === "google" ? "Google Icon Nothink" : "Github Icon Nothink"}
      />
      Entrar com {type === "google" ? "Google" : "Github"}
    </button>
  );
};

export default LoginButton;
