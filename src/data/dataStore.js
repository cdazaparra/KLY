import tshirt1 from "../assets/images/Tshirt01.png";
import tshirt2 from "../assets/images/Tshirt02.png";
import tshirt3 from "../assets/images/Tshirt03.png";
import tshirt4 from "../assets/images/Tshirt04.png";
import tshirt5 from "../assets/images/Tshirt05.png";
import tshirt6 from "../assets/images/Tshirt06.png";
import tshirt7 from "../assets/images/Tshirt07.png";
import tshirt8 from "../assets/images/Tshirt08.png";
import tshirt9 from "../assets/images/Tshirt09.png";
import tshirt10 from "../assets/images/Tshirt10.png";
import tshirt11 from "../assets/images/Tshirt11.png";
import tshirt12 from "../assets/images/Tshirt12.png";
import tshirt13 from "../assets/images/Tshirt13.png";
import tshirt14 from "../assets/images/Tshirt14.png";
import tshirt15 from "../assets/images/Tshirt15.png";
import tshirt16 from "../assets/images/Tshirt16.png";
import tshirt17 from "../assets/images/Tshirt17.png";
import tshirt18 from "../assets/images/Tshirt18.png";
import tshirt19 from "../assets/images/Tshirt19.png";
import tshirt20 from "../assets/images/Tshirt20.png";
//NETWORKS
import imgFacebook from "../assets/icons/facebook.png";
import imgInstagram from "../assets/icons/instagram.png";
import imgWhatpsApp from "../assets/icons/whatsapp.png";
let id = 0;
const changeId = () => {
  id = id + 1;
  return id;
};
export const dataStore = [
  { name: "Leopardo", src: tshirt1, id: changeId() },
  { name: "Leopardo", src: tshirt2, id: changeId() },
  { name: "Tree leaves", src: tshirt3, id: changeId() },
  { name: "Enjoy", src: tshirt4, id: changeId() },
  { name: "Love", src: tshirt5, id: changeId() },
  { name: "Enjoy", src: tshirt6, id: changeId() },
  { name: "Face", src: tshirt7, id: changeId() },
  { name: "Back", src: tshirt8, id: changeId() },
  { name: "Believe", src: tshirt9, id: changeId() },
  { name: "Love", src: tshirt10, id: changeId() },
  { name: "Dreams", src: tshirt11, id: changeId() },
  { name: "Flowers", src: tshirt12, id: changeId() },
  { name: "Dream", src: tshirt13, id: changeId() },
  { name: "Spikes", src: tshirt14, id: changeId() },
  { name: "Face", src: tshirt15, id: changeId() },
  { name: "Faith", src: tshirt16, id: changeId() },
  { name: "Spikes", src: tshirt17, id: changeId() },
  { name: "Back", src: tshirt18, id: changeId() },
  { name: "Bird", src: tshirt19, id: changeId() },
  { name: "Grace", src: tshirt20, id: changeId() }
];
export const dataNetworks = [
  {
    name: "Facebook",
    id: changeId(),
    src: imgFacebook,
    href: "https://www.facebook.com/KLYCosmeticShop"
  },
  { name: "Instagram", id: changeId(), src: imgInstagram, href: "" },
  {
    name: "WhatsApp",
    id: changeId(),
    src: imgWhatpsApp,
    href: "https://wa.me/573026637419"
  }
];
export const dataMenu = [
  { name: "Home", id: changeId(), to: "/" },
  { name: "Camisetas", id: changeId(), to: "/Tshirt" }
  // { name: "Maquillaje", id: changeId(), to: "/Tshirt" },
  // { name: "Otros", id: changeId(), to: "/Tshirt" }
];
export const spanish = {
  menuHome: "Inicio",
  menuTshirt: "Camisetas",
  menuMakeUp: "Maquillaje",
  menuOthers: "Others",
  Tshirts: "Camisetas"
};
export const english = {
  menuHome: "Home",
  menuTshirt: "Tshirts",
  menuMakeUp: "Make Up",
  menuOthers: "Others",
  Tshirts: "Tshirts"
};
