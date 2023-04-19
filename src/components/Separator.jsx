import React from "react";
import logoSeparator from "../assets/icons/logoP.png";
const Separator = ({ name }) => {
  return (
    <div className="grid justify-items-center  items-center grid-cols-1 sm:grid-cols-2 mt-20">
      <img
        className="grid justify-items-center  items-center"
        src={logoSeparator}
        alt="Logo Kly"
        width="150"
      ></img>
      <h1 className="gird justify-items-center  items-center text-center text-3xl font-bold sm:text-6xl text-kly-400">
        {name}
      </h1>
    </div>
  );
};

export default Separator;
