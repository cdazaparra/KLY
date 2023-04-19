// Librerias de react
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
//Imagenes
import imgLogo from "../assets/images/logo.png";
import imgLanguageMenuEs from "../assets/icons/languageEs.png";
import imgLanguageMenuEn from "../assets/icons/languageEng.png";
import imgThemeMenu from "../assets/icons/day-and-night.png";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
const Menu = () => {
  const { languajeSelected } = useLanguajeContex();
  const { handleLanguaje } = useLanguajeContex();
  const { languaje } = useLanguajeContex();
  const { colorSelectedKly } = useInteractionContex();
  const { handleColor } = useInteractionContex();
  const [state, setState] = useState(false);
  const handleMenu = () => {
    setState(!state);
  };
  return (
    <div
      className={`mt-0 fixed w-full z-10 top-0 text-center flex flex-wrap items-center justify-between ${colorSelectedKly}`}
    >
      <div className="mx-6 flex flex-shrink-0 items-center text-white">
        <img
          className="mr-3"
          alt="Logo Kly"
          src={imgLogo}
          width="54"
          height="54"
        ></img>
        <span className="text-xl font-semibold tracking-tight">KLY SHOP</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="mx-4 flex items-center rounded border border-white-400 px-3 py-2 text-white hover:border-white hover:text-white"
          onClick={handleMenu}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          state
            ? "block grid w-full flex-grow justify-items-center  items-center text-center lg:flex lg:w-auto"
            : "block grid hidden w-full flex-grow justify-items-center  items-center text-center lg:flex  lg:w-auto"
        }
      >
        <div className="container justify-center align-middle text-sm lg:flex-grow">
          <NavLink
            to="/"
            className="mx-4 mt-4 block text-lg text-kly-900 hover:text-white lg:mt-0 lg:inline-block active:text-white"
            onClick={() => setState(!state)}
          >
            {languajeSelected.menuHome}
          </NavLink>
          <NavLink
            to="/Tshirt"
            className="mx-4 mt-4 block text-lg text-kly-900 hover:text-white lg:mt-0 lg:inline-block active:text-white"
            onClick={() => setState(!state)}
          >
            {languajeSelected.menuTshirt}
          </NavLink>
        </div>
        <div className="container m-2 text-sm lg:flex-grow">
          <div className="grid grid-cols-2 justify-between justify-items-center gap-4">
            <img
              src={languaje ? imgLanguageMenuEn : imgLanguageMenuEs}
              className="icons col-span-1 mx-4 block text-lg hover:text-white lg:mt-0 lg:inline-block"
              alt="Languaje Eng or Esp"
              width="25"
              height="25"
              onClick={() => {
                handleLanguaje(), setState(!state);
              }}
            ></img>
            <img
              src={imgThemeMenu}
              className="icons col-span-1 mx-4 block text-lg hover:text-white lg:mt-0 lg:inline-block"
              alt="Theme"
              width="25"
              height="25"
              onClick={() => {
                handleColor(), setState(!state);
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
