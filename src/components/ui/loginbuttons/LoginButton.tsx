import Images from "../../../assets";
import Divider from "./Divider";

import styles from "./LoginButton.module.css";

type LoginButtonProps = {
  type: "google" | "github";
  underDivider?: boolean;
  onClick?: () => void;
};

const LoginButton = ({
  type,
  underDivider = false,
  onClick,
}: LoginButtonProps) => {
  const btnType = type;
  const divider = underDivider;

  return (
    <>
      {btnType === "google" && (
        <div className={styles.google_login} onClick={onClick}>
          <img src={Images.icons.google} />
          Entrar com Google
        </div>
      )}
      {type === "github" && (
        <div className={styles.git_login} onClick={onClick}>
          <img src={Images.icons.github} />
          Entrar com GitHub
        </div>
      )}
      {divider && <Divider />}
    </>
  );
};

export default LoginButton;
