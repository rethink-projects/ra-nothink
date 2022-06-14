import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";

export default function DashboardScreen() {
  const auth = useAuth();
  let navigate = useNavigate();
  const currentUser: ICurrentUser = auth.user;

  const onSignout = () => {
    auth.signout(() => navigate("/"));
  };

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Dahsboard Screen</h1>
      <h2>{auth.user.name}</h2>
      <h2>{auth.user.email}</h2>
      <button onClick={onSignout}>Fazer Logout</button>
    </div>
  );
}
