import React from "react";

function Card({ title, text }) {
  return (
    <div className=" rounded shadow  py-6 px-4 mx-4 mb-4 bg-[#003a56] text-white hover:bg-[#15139A] cursor-pointer">
      <h3 className="font-bold text-xl font-mono mb-4">{title}.</h3>
      <p className="text-pretty">{text}</p>
    </div>
  );
}

export default Card;
