import Imagens from "../../assets";
import Style from "./LoginButton.module.css";

type LoginButtonProps = {
  app: "Google" | "GitHub";
  onClick?: () => void;
};

const LoginButton = ({ app, onClick }: LoginButtonProps) => {
  return (
    <button className={[Style[app], Style.button].join(" ")} onClick={onClick}>
      <img src={Imagens.icons[app]} alt={app} />
      Entrar com o {app}
    </button>
  );
};

export default LoginButton;
