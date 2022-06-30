import styles from "./InfoCard.module.css";

import Images from "../../../assets";
import { useEffect } from "react";

type infoCardProps = {
    imageType: "avatarCategory" | "avatarSnnipets" | "likeCard" | "quantitySnnipets";
    info: string | number;
}

const InfoCard = ({ imageType, info }: infoCardProps) => {

    useEffect(() => {
        if (typeof info === "number") {
            info = info.toString();
        }
    }, [])


    const typeIcon = imageType === "likeCard" && info != "0" ? styles.liked_icon : styles.default_icon;

    return (
        <div className={styles.info_user_card}>
            <img className={typeIcon} src={Images.icons[imageType]} alt="" />
            <p>{info}</p>
        </div>
    )
}

export default InfoCard