import React from "react";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
const Footer = () => {
  const { languajeSelected } = useLanguajeContex();
  const { colorSelectedKly } = useInteractionContex();
  const { handleColor } = useInteractionContex();
  return (
    <div
      className={`${colorSelectedKly} fixed bottom-0 left-0 right-0 text-center text-white`}
    >
      Design by Carlos Daza 2023
    </div>
  );
};

export default Footer;
Footer;
