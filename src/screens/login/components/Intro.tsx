import Imagens from "../../../assets";
import Styles from "../LoginScreen.module.css";

const Intro = () => {
  return (
    <div className={Styles.introContainer}>
      <h1 className={Styles.introTitle}>
        Anotações rápidas <br /> para devs!
      </h1>
      <img
        src={Imagens.arrow}
        alt="Rethink Arrow"
        className={Styles.IntroArrow}
      />
    </div>
  );
};

export default Intro;
