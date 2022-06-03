import Images from "../../../assets";
import styles from ".././LoginScreen.module.css";

const Intro = () => {
  return (
    <div className={styles.left_side}>
      <h1>
        Anotações rápidas <br></br>para devs!{" "}
      </h1>
      <img src={Images.icons.arrow} />
    </div>
  );
};
    
export default Intro;
