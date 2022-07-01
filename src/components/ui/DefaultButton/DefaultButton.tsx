import Images from "../../../assets";
import styles from "./DefaultButton.module.css"

type DefaultButtonProps = {
    text: string;
    type?: "cancel" | "save";
    hasIcon: boolean;
    onClick?: () => void;
}

const DefaultButton = ({ text, onClick, type = "save", hasIcon = false }: DefaultButtonProps) => {

    let imgSrc = Images.icons[type];
    let buttonClass = type === "cancel" ? styles.defaultButton_outiline : styles.defaultButton;

    return (
        <button onClick={onClick} className={buttonClass}>
            {hasIcon && (
                <img src={imgSrc} alt="Icon Button" className={styles.icon}></img>
            )}
            <span>{text}</span>
        </button>
    )
}

export default DefaultButton