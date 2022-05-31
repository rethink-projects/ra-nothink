import styles from "./LoginScreen.module.css";

//components
import Form from "./components/Form/Form";
import Presentation from "./components/Presentation/Presentation";

export const LoginScreen = () => {
 
  return (
    <div className={styles.container}>
      <Presentation />
      <Form />
    </div>
  );
};
