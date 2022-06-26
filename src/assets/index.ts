import logo from "./logo.svg";
import intro from "./arrow.png";
import githubIcon from "./github.png";
import googleIcon from "./google.png";
import instagramIcon from "./instagram.png";
import linkedinIcon from "./linkedin.png";
import logoLight from "./logoLight.svg";
import shareIcon from "./Share.png";
import vectorIcon from "./Vector.png";
import cancelIcon from "./Cancel.png";
import saveIcon from "./Done.png";
import returnIcon from "./return.png";
import deleteIcon from "./Delete.png";
import personIcon from "./Person.png";
import favoriteIcon from "./Favorite.png";
import favoriteBorderIcon from "./Favorite border.png";
import snnipetsCountIcon from "./snnipets.png";

const Images = {
  logo: {
    default: logo,
    light: logoLight,
  },
  intro: intro,

  icons: {
    github: githubIcon,
    google: googleIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
  },

  iconsButton: {
    share: shareIcon,
    edit: vectorIcon,
    cancel: cancelIcon,
    save: saveIcon,
    return: returnIcon,
    delete: deleteIcon,
  },

  cardsAssets: {
    person: personIcon,
    favorite: favoriteIcon,
    favoriteBorder: favoriteBorderIcon,
    snnipetsCount: snnipetsCountIcon,
  },
};

export default Images;
