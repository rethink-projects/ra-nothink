// CSS
import styles from "./Card.module.css";

// Types
import { TypeCategory } from "../../../types";
import Images from "../../../assets";

type cardProp = {
  category: TypeCategory;
  index: number;
};

const Card = ({ category, index }: cardProp) => {
  const username = category.owner_id.split("@", 1)[0];

  return (
    <div className={styles.cards_cointainer}>
      <div className={styles.card_category}>
        <h1 className={styles.card_title}>{category.title}</h1>
        <div className={styles.card_content}>
          <div className={styles.card_informations}>
            <img src={Images.icons.github} alt="Github Icon" />
            <span>{username}</span>
            <div className={styles.card_informations}>
              <div className={styles.card_informations_item}>
                <img src={Images.icons.code} alt="code Icon" />
                <span>{category.totalSnippets}</span>
              </div>
              <div className={styles.card_informations_item}>
                <img src={Images.icons.like} alt="heart Icon" />
                <span>{category.totalLikes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
