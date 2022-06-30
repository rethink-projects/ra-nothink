import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import InfoCard from "./InfoCard";

import { TypeCategory, TypeSnnipet } from "../../../types"
import { useEffect, useState } from "react";
import { FieldValue } from "firebase/firestore";

type dataProps = {
    index: number,
    type: "snnipet" | "category",
    data: {
        snnipet?: TypeSnnipet;
        category?: TypeCategory;
    }

}




const Card = ({ index, data, type }: dataProps) => {

    // let data: any;

    // if (category) {
    //     data = category
    // } else {
    //     data = snnipet;
    // }

    useEffect(() => {
        if (type === "snnipet") {
            setIsSnnipet(true);
        }
    }, []);

    const ownerIdName = data[type]!.owner_id?.split("@")[0];
    const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "");
    const navigate = useNavigate();
    const [isSnnipet, setIsSnnipet] = useState(false);

    const onClickCard = () => {

        return type === "category" ? navigate(`${data[type]!.id}`, { state: data[type]!.title }) : null;
    }


    return (
        <div onClick={onClickCard} className={styles.card} style={{ animationDelay: `${index}05ms` }}>
            <div className={styles.content_card}>
                <h3 className={styles.title_card}>{data[type]!.title}</h3>

                <div className={styles.footer_card}>
                    <div className={styles.content_footer_card}>

                        <InfoCard imageType="avatarCategory" info={replacedName} />

                        <div className={styles.info_card}>
                            {type === "category" && <InfoCard imageType="quantitySnnipets" info={data[type]!.totalSnnipets!} />}
                            <InfoCard imageType="likeCard" info={type === "snnipet" ? data[type]!.likes?.length! : data[type]!.totalLikes!} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card


