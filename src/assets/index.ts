import logo from "./logo.svg";
import intro from "./arrow.png";
import githubIcon from "./github.png";
import googleIcon from "./google.png";
import instagramIcon from "./instagram.png";
import linkedinIcon from "./linkedin.png";
import nothinkLight from "./logoLight.svg";
import shareIcon from "./Share.png";
import cancelIcon from "./Cancel.png";
import editorIcon from "./Editor.png";
import doneIcon from "./Done.png";
import iconProfile from "./Person.svg";
import code from "./code.svg";
import like from "./heart.svg";
import greenLike from "./greenHeart.svg";
import backIcon from "./back.svg";

const Images = {
  logo: {
    default: logo,
    white: nothinkLight,
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
    cancel: cancelIcon,
    editor: editorIcon,
    done: doneIcon,
    back: backIcon,
  },
  cards: {
    person: iconProfile,
    code: code,
    like: like,
    greenLike: greenLike,
  },
};

export default Images;
