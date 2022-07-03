import styles from "./Cards.module.css";
import Images from "../../../assets";
import { useNavigate } from "react-router-dom";
import { TypeCategory, TypeSnnipet } from "../../../types";

type CardsProps = {
  index?: number;
  type?: string;
  data: TypeCategory | TypeSnnipet;
};

const Cards = ({ index, type = "category", data }: CardsProps) => {
  const navigate = useNavigate();

  let totalLikes;
  let totalSnnipets;
  const title = data.title;
  const owner_id = data.owner_id;
  const id = data.id;
  if (type == "data") {
    totalLikes = (data as TypeCategory).totalLikes ?? 0;
    totalSnnipets = (data as TypeCategory).totalSnnipets ?? 0;
  } else {
    totalLikes = (data as TypeSnnipet).likes.length ?? 0;
    totalSnnipets = -1;
  }

  const openCategory = () => {
    return type === "category" ? navigate(`${id}`, { state: title }) : null;
  };

  // if (likes != null) totalLikes = likes.length;

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
