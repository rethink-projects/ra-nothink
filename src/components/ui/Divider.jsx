import Styles from "./Divider.module.css";

const Divider = () => {
  return (
    <div className={Styles.form_divider}>
      <hr className={Styles.divider} />
      <p className={Styles.divider_text}>ou</p>
    </div>
  );
};

export default Divider;
