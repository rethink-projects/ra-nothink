import styles from "./Buttons.module.css";
import Images from "../../../assets";
import Divider from "../../ui/loginbuttons/Divider";
//há botões de 150, 200 e 480px (arredondando)
//

type ButtonsProps = {
  image?: "github" | "google" | "check" | "cancel" | "share" | "del"; //image
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
        className={[
          styles.allbuttons,
          styles["btn_" + size],
          styles["btn_" + color],
          extrabehavior,
        ].join(" ")}
      >
        {image && <img src={Images.icons[image]} />}
        <span>{text}</span>
      </button>

      {underDivider && <Divider />}
    </>
  );
};

export default Buttons;
