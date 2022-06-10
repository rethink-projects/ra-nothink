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
import returnIcon from "./return.png"

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
  }
};

export const Messages = {
  buttons: {
    share: "Compartilhar",
    edit: "Editar",
    cancel: "Cancelar",
    save: "Salvar",
    default: "Criar Snnipets",
    return: "Voltar para o início",

  }
}

export default Images;
