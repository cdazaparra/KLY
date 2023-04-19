import React, { useState } from "react";
import { InteractionContex } from "../context/InteractionContex";
const InteractionProvider = ({ children }) => {
  const [color, setColor] = useState(false);
  const colorSelectedKly = color ? "bg-kly-700" : "bg-kly-400";
  const boderSelectedKly = color ? "border-kly-700" : "border-kly-400";
  const handleColor = () => {
    setColor(!color);
  };
  return (
    <InteractionContex.Provider
      value={{
        color,
        colorSelectedKly,
        handleColor,
        boderSelectedKly
      }}
    >
      {children}
    </InteractionContex.Provider>
  );
};

export default InteractionProvider;
