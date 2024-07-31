import React from "react";

function Card({ title, text }) {
  return (
    <div className=" rounded shadow  py-6 px-4 mx-4 mb-4 bg-[#003a56] text-white hover:bg-[#002a51] cursor-pointer">
      <h3 className="font-bold text-xl font-montserrat   mb-4">{title}.</h3>
      <p className="text-pretty font-open_sans">{text}</p>
    </div>
  );
}

export default Card;
