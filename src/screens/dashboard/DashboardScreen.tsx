import { useAuth } from "../../context/AuthContext";
import { ICurrentUser } from "../../types";



export const DashboardScreen = () => {

    const auth = useAuth();
    const currentUser: ICurrentUser = auth.user;

    if(!currentUser){
      return <p>Carregando...</p>
    }

  return (
    <div>
      <h1>Dashboard Screen</h1>
      <h2>{currentUser.name}</h2>
      <h2>{currentUser.email}</h2>
    </div>
  );
};
