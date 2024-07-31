import Image from "next/image";
import React from "react";

function FeatureCard({ imgSrc, logo, header, text }) {
  return (
    <div className="flex justify-center flex-col items-center bg-neutral-100 rounded-sm py-4">
      {logo ? <>{logo}</> : null}
      {imgSrc ? (
        <Image src={imgSrc} alt="image" width={30} height={30} />
      ) : null}
      <h3 className="font-bold py-3 font-Montserrat">{header}</h3>
      <p className="text-justify px-4 font-open_sans">{text}</p>
    </div>
  );
}

export default FeatureCard;
