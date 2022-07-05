import styles from "./Cards.module.css";
import Images from "../../../assets";
import { useNavigate } from "react-router-dom";
import { TypeCategory, TypeSnnipet } from "../../../types";

type CardsProps = {
  index?: number;
  type?: "category" | "snnipet";
  data: TypeCategory | TypeSnnipet;
};
// class TypeCategory implements TypeCategory{
//   constructor TypeCategory(id?,
//     owner_id,
//     title,
//     totalLikes,
//     totalSnnipets)
// }

const Cards = ({ index, type = "category", data }: CardsProps) => {
  const navigate = useNavigate();

  const isTypeCategory = type == "category";
  
  // console.log((data) instanceof TypeCategory)

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
