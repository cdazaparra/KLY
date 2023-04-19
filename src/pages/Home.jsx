import React from "react";
import NetWorks from "../components/NetWorks";
import Slider from "../components/Slider";
import Separator from "../components/Separator";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
const Home = () => {
  const { languajeSelected } = useLanguajeContex();
  return (
    <div className="mt-10 grid justify-items-center  items-center">
      <Separator name={`${languajeSelected.Tshirts}`}></Separator>
      <Slider></Slider>
      <NetWorks></NetWorks>
    </div>
  );
};

export default Home;
