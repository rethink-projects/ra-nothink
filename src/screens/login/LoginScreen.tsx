import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Components
import Intro from "./components/intro/Intro";

const LoginScreen = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.signin(
      {
        name: "Ana",
        email: "ana.ramos@rethink.dev",
        avatar:
          "https://uploads.spiritfanfiction.com/historias/capitulos/202101/amantes-ou-inimigos-21561631-260120211846.jpg",
      },
      // essa callback é chamada quando o usuário faz login
      // essa callback leva o usuário para o dashboard após o login
      () => navigate("/dashboard", { replace: true })
    );
  };

  useEffect(() => {
    let localStorageUser = localStorage.getItem("@nothink:user");
    if (localStorageUser) {
      auth.signin(JSON.parse(localStorageUser), () =>
        navigate("/dashboard", { replace: true })
      );
    }
  }, []);

  // if (!auth.user) {
  //   return (
  //     <div>
  //       <h1>Login Screen</h1>
  //       <button onClick={handleLogin}>Fazer login</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>Login Screen</h1>
  //     <p>{auth.user?.name}</p>
  //   </div>
  // );
  return (
    <div>
      {/* <h1>Login Screen</h1> */}
      {/* <button onClick={handleLogin}>Fazer login</button> */}
      {/* {auth.user && <p>{auth.user?.name}</p>}
      {!auth.user && <button onClick={handleLogin}>Fazer login</button>} */}
      <Intro />
    </div>
  );
};

export default LoginScreen;
