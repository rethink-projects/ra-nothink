import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

const DashboardScreen = () => {
  const auth = useAuth();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };
  if (!currentUser) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
  return (
    <div>
      <>
        <h1>Dashboard Screen</h1>
        <h2>{auth.user.email}</h2>
        <button onClick={onSignout}> Fazer Logout</button>
      </>
    </div>
  );
};

export default DashboardScreen;
