import { useState } from "react";
import Images from "../../assets";
import { useData } from "../../context/DataContext";
import { TypeCategory } from "../../types";
import styles from "./Card.module.css";

interface cardProps {
  index: number;
  type: "category" | "snnipet";
  category: TypeCategory;
}

function Card({ index, type, category }: cardProps) {
  const owner = category.owner_id.split("@");
  console.log(owner);

  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_title}>
        <h1>{category.title}</h1>
      </div>
      {type === "category" ? (
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.person} alt="personIcon" />
            <p>{owner[0]}</p>
          </div>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.snnipetsCount} alt="" />
            <p>{category.totalSnnipets}</p>
            <img
              src={liked ? Images.cardsAssets.favorite : Images.cardsAssets.favoriteBorder}
              alt="a"
              onClick={() => setLiked(!liked)}
            />
            <p>{category.totalLikes}</p>
          </div>
        </div>
      ) : (
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.person} alt="personIcon" />
            <p>{owner[0]}</p>
          </div>
          <div className={styles.card_footer_inner}>
            <img
              src={liked ? Images.cardsAssets.favorite : Images.cardsAssets.favoriteBorder}
              alt="a"
              onClick={() => setLiked(!liked)}
            />
            <p>{category.totalLikes}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
