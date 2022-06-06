import Imagens from "../../../assets";
import Styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={Styles.intro_container}>
      <h1 className={Styles.intro_title}>
        Anotações rápidas <br /> para devs!
      </h1>
      <img
        src={Imagens.arrow}
        alt="Rethink Arrow"
        className={Styles.intro_image}
      />
    </div>
  );
};

export default Intro;
