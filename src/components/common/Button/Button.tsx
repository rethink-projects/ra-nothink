// CSS
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: VoidFunction;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.header_btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
