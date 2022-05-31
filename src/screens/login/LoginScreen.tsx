import { useAuth } from "../../context/AuthContext";
import Form from "./components/Form/Form";
import Presentation from "./components/Presentation/Presentation";
import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
  let auth = useAuth();

  if (!auth.user) {
    return (
      <div className={styles.container}>
        <Presentation />
        <Form />
      </div>
    );
  }
  return (
    <div>
      <p>{auth.user?.name}</p>
    </div>
  );
};
