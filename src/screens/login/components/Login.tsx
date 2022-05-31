import Imagens from "../../../assets";
import LoginButton from "../../../components/LoginButton";
import Styles from "../LoginScreen.module.css";

const Login = ({ login }: { login: VoidFunction }) => {
  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginTitles}>
        <img src={Imagens.title} alt="Nothink" className={Styles.imagem} />
        {/* <h1 className={Styles.Nothink}>Nothink</h1> */}
        <p>Escolha sua forma de login</p>
      </div>
      <div className={Styles.LoginButtons}>
        <LoginButton login={login} app={"Google"} />
        {/* <div className={Styles.lineDiv}> */}
        <hr className={Styles.line} />
        <p className={Styles.lineText}>ou</p>
        {/* </div> */}
        <LoginButton login={login} app={"GitHub"} />
      </div>
    </div>
  );
};

export default Login;
