import Imagens from "../assets";
import Style from "./LoginButton.module.css";

type paramsType = {
  app: "Google" | "GitHub";
  login: VoidFunction;
};

const LoginButton = ({ app, login }: paramsType) => {
  return (
    <button className={Style[app]} onClick={login}>
      <img src={Imagens.icons[app]} alt={app} />
      Entrar com o {app}
    </button>
  );
};

export default LoginButton;
