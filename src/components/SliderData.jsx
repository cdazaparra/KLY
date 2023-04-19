import React from "react";

const SliderData = ({ id, src, name }) => {
  return (
    <div key={id} className="col-span-8 rounded bg-blue-50/70 p-1">
      <a
        href={`https://wa.me/573026637419?text=Cordial%20saludo%20quiero%20saber%20más%20sobre%20este%20producto:%20${name}`}
        target="_blank"
      >
        <img
          src={src}
          alt={name}
          width="400"
          className="grid border border-kly-100 rounded-3xl"
        ></img>
      </a>
    </div>
  );
};

export default SliderData;
