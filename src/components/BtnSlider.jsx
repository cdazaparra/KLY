import React from "react";

const BtnSlider = ({ btn, action, position }) => {
  return (
    <div className={position}>
      <button className="col-span-2" onClick={action}>
        <img className="" src={btn} alt="anterior" width="30" height="30"></img>
      </button>
    </div>
  );
};

export default BtnSlider;
