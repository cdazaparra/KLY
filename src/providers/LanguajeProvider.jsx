import React, { useState } from "react";
import { LanguajeContex } from "../context/LanguajeContex";
import { spanish, english } from "../data/dataStore";
const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState(false);
  const languajeSelected = languaje ? english : spanish;
  const handleLanguaje = () => {
    setLanguaje(!languaje);
  };
  return (
    <LanguajeContex.Provider
      value={{ languaje, handleLanguaje, languajeSelected }}
    >
      {children}
    </LanguajeContex.Provider>
  );
};

export default LanguajeProvider;
