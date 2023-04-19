import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ state, setState, name, to }) => {
  return (
    <NavLink
      to={to}
      className="mx-4 mt-4 block text-lg text-kly-900 hover:text-white lg:mt-0 lg:inline-block active:text-white"
      onClick={() => setState(!state)}
    >
      {name}
    </NavLink>
  );
};

export default MenuItem;
MenuItem;
