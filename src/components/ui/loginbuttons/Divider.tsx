import Images from "../../../assets"
import styles from "./Divider.module.css"

const Divider = () => {
  return (
    <div className={styles.divisoria}>
        <img src={Images.icons.hl} />
        ou
        <img src={Images.icons.hl} />
    </div>
  )
}

export default Divider