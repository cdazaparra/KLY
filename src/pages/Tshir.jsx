import React from "react";
import { dataStore } from "../data/dataStore";
import Separator from "../components/Separator";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
const Tshir = () => {
  const { languajeSelected } = useLanguajeContex();
  const { colorSelectedKly } = useInteractionContex();
  const { boderSelectedKly } = useInteractionContex();
  return (
    <div className="grid justify-items-center  items-center my-10">
      <Separator name={`${languajeSelected.Tshirts}`}></Separator>
      <div className="mt-20 grid grid-cols-4 p-4">
        {dataStore.map((data) => {
          return (
            <div
              className={`grid border ${boderSelectedKly} ${colorSelectedKly} rounded-lg m-5 col-span-1 gap-2`}
              key={data.id}
            >
              <div className="grid justify-items-center  items-center">
                <a
                  href={`https://wa.me/573026637419?text=Cordial%20saludo%20quiero%20saber%20más%20sobre%20este%20producto:%20${data.name}`}
                  target="_blank"
                >
                  <img
                    className=" rounded"
                    src={data.src}
                    alt={data.id}
                    width="300"
                    height="300"
                  ></img>
                  <p className="text-center m-3 font-bold text-kly-900">
                    {data.name}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tshir;
