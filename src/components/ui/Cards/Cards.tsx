import styles from "./Cards.module.css";
import Images from "../../../assets";
import { useNavigate } from "react-router-dom";
import { TypeCategory } from "../../../types";

type CardsProps = {
  index?: number;
  category: TypeCategory;
};

const Cards = ({
  index,
  category: { title, owner_id, totalLikes, totalSnnipets = -1, id },
}: CardsProps) => {
  const navigate = useNavigate();
  const openCategory = () => {
    navigate(`${id}`);
  };
  return (
    <div
      style={{ animationDelay: `${index}05ms` }}
      className={styles.card_container}
      onClick={openCategory}
    >
      <div className={styles.card_name}>
        <span>{title}</span>
      </div>
      <div className={styles.card_details_container}>
        <div className={styles.card_details_subcontainer}>
          <img className={styles.card_icons} src={Images.icons.silhueta} />
          <span>{owner_id.split("@")[0].replace(/[^a-zA-Z]/g, "")}</span>
        </div>
        <div className={styles.card_stats}>
          {totalSnnipets >= 0 && (
            <div className={styles.card_details_subcontainer}>
              <img className={styles.card_icons} src={Images.icons.tag} />
              <span>{totalSnnipets}</span>
            </div>
          )}
          <div className={styles.card_details_subcontainer}>
            <img className={styles.card_icons} src={Images.icons.like} />
            <span>{totalLikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
