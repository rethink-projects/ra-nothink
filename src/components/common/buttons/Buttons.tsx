import styles from "./Buttons.module.css";
import Images from "../../../assets";
import Divider from "../../ui/loginbuttons/Divider";
//há botões de 150, 200 e 480px (arredondando)
//

type ButtonsProps = {
  image?: "github" | "google" | "check" | "cancel" | "share" | "delete"; //image
  underDivider?: boolean; //divider for different buttons
  size: "mini" | "small" | "medium" | "large" | "almostmedium";
  color: "detail" | "light" | "dark" | "danger";
  text?: string; // inner content
  onClick?: () => void; //todo
  extrabehavior?: string;
};

const Buttons = ({
  image,
  underDivider = false,
  size,
  color,
  text,
  extrabehavior,
  onClick,
}: ButtonsProps) => {
  return (
    <>
      <button
        className={
          styles.allbuttons +
          " " +
          extrabehavior +
          " " +
          (size === "small"
            ? styles.btn_small
            : size === "medium"
            ? styles.btn_medium
            : size === "almostmedium"
            ? styles.btn_almost_medium
            : styles.btn_large) +
          " " +
          (color === "detail"
            ? styles.btn_detail
            : color === "danger"
            ? styles.btn_danger
            : color === "light"
            ? styles.btn_light
            : styles.btn_dark)
        }
        onClick={onClick}
      >
        {image && (
          <img
            src={
              image === "github"
                ? Images.icons.github
                : image === "google"
                ? Images.icons.google
                : image === "check"
                ? Images.icons.check
                : image === "delete"
                ? Images.icons.del
                : image === "share"
                ? Images.icons.share
                : Images.icons.del
            }
          />
        )}
        <span>{text}</span>
      </button>

      {underDivider && <Divider />}
    </>
  );
};

export default Buttons;
