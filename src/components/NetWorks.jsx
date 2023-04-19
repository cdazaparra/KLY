import React from "react";
import { dataNetworks } from "../data/dataStore";

const NetWorks = () => {
  return (
    <div className="grid grid-cols-3 mb-10 justify-items-center  items-center">
      {dataNetworks.map((netWork) => {
        return (
          <div
            key={netWork.id}
            className="mx-6 grid justify-items-center  items-center"
          >
            <a href={netWork.href} target="_blank">
              <img
                src={netWork.src}
                alt={netWork.name}
                width="80"
                className="cursor-pointer"
              ></img>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NetWorks;
