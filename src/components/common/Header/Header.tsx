import { Link, useNavigate } from "react-router-dom";

// CSS
import styles from "./Header.module.css";

// Assets
import Images from "../../../../src/assets";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

import { useAuth } from "../../../context/AuthContext";
import { ICurrentUser } from "../../../types";

const Header = () => {
  const auth = useAuth();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

  if (!currentUser) {
    return <p>Carregando..</p>;
  }

  //   const toDashboardScreen = () => {
  //     navigate("/dashboard");
  //   };

  return (
    <div className={styles.header_container}>
      <Wrapper>
        <Link to={"/dashboard"}>
          <img
            className={styles.header_logo}
            src={Images.nothink}
            alt="Logo Nothink"
          />
        </Link>

        {/* <img
        className={styles.header_logo}
        onClick={() => {
          navigate("/dashboard");
        }}
        src={Images.nothink}
        alt="Logo Nothink"
      /> */}

        <div className={styles.header_response}>
          <img
            className={styles.header_avatar}
            src={currentUser.avatarUrl}
            alt="Imagem do avatar retirada da conta do usuário do Google ou Github"
          />
          <Button text="Criar Snippet" onClick={() => navigate("add")} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
