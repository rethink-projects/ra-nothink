import Images from "../../../assets";
import styles from "./GeneralButton.module.css";

interface Props {
  onClick?: () => void;
  text: string;
  height?: string;
  hasIcon?: boolean;
  type?: "cancel" | "save";
}

const GeneralButton: React.FC<Props> = ({
  onClick,
  text,
  height,
  type = "save",
  hasIcon = false,
}) => {
  let imgSrc = Images.icons[type];
  let buttonClass =
    type === "cancel" ? styles.defaultButton_outline : styles.generalButton;
  return (
    <button onClick={onClick} className={buttonClass} style={{ height }}>
      {hasIcon && (
        <img src={imgSrc} alt="Icon Button" className={styles.icon} />
      )}
      <span> {text}</span>
    </button>
  );
};
export default GeneralButton;
