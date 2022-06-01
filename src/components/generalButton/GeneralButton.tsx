import styles from "./GeneralButton.module.css";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const GeneralButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.generalButton}>
      {children}
    </button>
  );
};
export default GeneralButton;
