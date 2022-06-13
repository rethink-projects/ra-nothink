import { useNavigate } from "react-router-dom";

//components
import { GeneralButton } from "../../components";

//context
import { useAuth } from "../../context/AuthContext";

//types
import { ICurrentUser } from "../../types";


export const DashboardScreen = () => {
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;
  let navigate = useNavigate();

  

  const onSignout = () => {
    auth.signOut(() => navigate("/"));
  };

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

 

  return (
    <div>
      <h1>Dashboard Screen</h1>
      <h2>{currentUser.name}</h2>
      <h2>{currentUser.email}</h2>
      <GeneralButton onClick={onSignout} text="Logout" height="34px" />
    </div>
  );
};
