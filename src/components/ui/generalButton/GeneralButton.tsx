import styles from "./GeneralButton.module.css";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
  height?: string;
}

const GeneralButton: React.FC<Props> = ({ onClick, children, height }) => {
  return (
    <button onClick={onClick} className={styles.generalButton} style={{height}}>
      {children}
    </button>
  );
};
export default GeneralButton;
