import styles from "./Cards.module.css";
import Images from "../../../assets";

type CardsProps = {
  cardTitle: string; //divider for different buttons
  creator: string; //
  snnipets: number;
  likes: number; // inner content
  onClick: () => void; //todo
  chave?: number;
};

const Cards = ({
  cardTitle,
  creator,
  snnipets,
  likes,
  onClick,
}: CardsProps) => {
  return (
    <div className={styles.card_container} onClick={onClick}>
      <div className={styles.card_name}>
        <span>{cardTitle}</span>
      </div>
      <div className={styles.card_details_container}>
        <div className={styles.card_details_subcontainer}>
          <img className={styles.card_icons} src={Images.icons.silhueta} />
          <span>{creator.split("@")[0]}</span>
        </div>
        <div className={styles.card_stats}>
          {snnipets>=0 && (
            <div className={styles.card_details_subcontainer}>
              <img className={styles.card_icons} src={Images.icons.tag} />
              <span>{snnipets}</span>
            </div>
          )}
          <div className={styles.card_details_subcontainer}>
            <img className={styles.card_icons} src={Images.icons.like} />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
