import styles from "./GeneralButton.module.css";

interface Props {
  onClick?: () => void;
  text?: string;
  height?: string;
}

const GeneralButton: React.FC<Props> = ({ onClick, text, height }) => {
  return (
    <button onClick={onClick} className={styles.generalButton} style={{height}}>
      {text}
    </button>
  );
};
export default GeneralButton;
