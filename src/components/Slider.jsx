// Librerias de React
import React from "react";
import { useState } from "react";
//Imagenes
import btnLeft from "../assets/icons/left.png";
import btnRight from "../assets/icons/right.png";
// Arreglo con información de lo que soy
import { dataStore } from "../data/dataStore";
import SliderData from "./SliderData";
import BtnSlider from "./BtnSlider";
const Slider = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = dataStore?.length;
  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  if (!Array.isArray(dataStore) || cantidad === 0) return;
  return (
    <div className="grid justify-items-center bg-cover bg-center bg-no-repeat items-center my-10">
      <div className="m-2 grid justify-items-center  items-center">
        {dataStore.map((data, index) => {
          return (
            imagenActual === index && (
              <div
                key={data.id}
                className="grid grid-cols-12 justify-items-center  items-center"
              >
                <BtnSlider
                  btn={btnLeft}
                  action={anteriorImagen}
                  position="col-start-2"
                ></BtnSlider>
                <SliderData
                  id={data.id}
                  src={data.src}
                  name={data.name}
                ></SliderData>
                <BtnSlider
                  btn={btnRight}
                  action={siguienteImagen}
                  position="col-end-12"
                ></BtnSlider>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
