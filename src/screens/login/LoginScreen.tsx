import Form from "./components/Form/Form";
import Presentation from "./components/Presentation/Presentation";
import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
 
  return (
    <div className={styles.container}>
      <Presentation />
      <Form />
    </div>
  );
};
