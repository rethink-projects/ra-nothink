import styles from "./Cards.module.css";
import Images from "../../../assets";
import { useNavigate } from "react-router-dom";
import { TypeCategory, TypeSnnipet } from "../../../types";

type CardsProps = {
  index?: number;
  data: TypeCategory | TypeSnnipet;
};

const Cards = ({ index, data }: CardsProps) => {
  const navigate = useNavigate();
  const isTypeCategory = "totalLikes" in data;

  let totalLikes, totalSnnipets;
  const title = data.title;
  const owner_id = data.owner_id.split("@")[0].replace(/[^a-zA-Z]/g, "");
  const id = data.id;

  if (isTypeCategory) {
    const temp = data as TypeCategory;
    totalLikes = temp.totalLikes ?? 0;
    totalSnnipets = temp.totalSnnipets ?? 0;
  } else {
    const temp = data as TypeSnnipet;
    totalLikes = temp.likes != null ? temp.likes.length : 0;
    totalSnnipets = -1;
  }

  const openCategory = () => {
    return isTypeCategory ? navigate(`${id}`, { state: title }) : null;
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
          <span>{owner_id}</span>
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
