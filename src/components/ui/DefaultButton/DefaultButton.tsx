import styles from "./DefaultButton.module.css"

type DefaultButtonProps = {
    text: string;
    onClick?: () => void;
}

const DefaultButton = ({ text, onClick }: DefaultButtonProps) => {
    return (
        <button onClick={onClick} className={styles.defaultButton}>{text}</button>
    )
}

export default DefaultButton