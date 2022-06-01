import Imagens from "../../../assets";
import { Socials, LoginButton } from "../../../components";
import Styles from "../LoginScreen.module.css";

const Login = ({ login }: { login: VoidFunction }) => {
  return (
    <div className={Styles.loginContainer}>
      <Socials />
      <div className={Styles.innerForm}>
        <div className={Styles.loginTitles}>
          <img src={Imagens.title} alt="Nothink" className={Styles.imagem} />
          <p>Escolha sua forma de login</p>
        </div>
        <div className={Styles.LoginButtons}>
          <LoginButton login={login} app={"Google"} />
          <hr className={Styles.line} />
          <p className={Styles.lineText}>ou</p>
          <LoginButton login={login} app={"GitHub"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
