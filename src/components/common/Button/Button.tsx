import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: VoidFunction;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={styles.defaultButton} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
