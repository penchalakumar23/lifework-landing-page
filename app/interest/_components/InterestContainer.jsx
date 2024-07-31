"use client";
import React, { useState } from "react";
import InterestCard from "./InterestCard";
import InterestFormInput from "./InterestFormInput";
import InterestFormCheckbox from "./InterestFormCheckbox";

function InterestContainer() {
  const [flipCards, setFlipCards] = useState(!true);

  return (
    <div className="flex flex-col justify-center items-center mx-12 ">
      <p className=" font-montserrat font-bold text-xl md:w-1/2 mt-4 px-6 text-justify">
        This is where it all starts. We have a small, passionate team with big
        ideas and a mission to change the world. We can't do it without you!
      </p>

      <div
        className=" text-end w-full animate-pulse font-black align-self-end flex justify-end"
        >
        <p className=" border w-fit  px-4 py-2 rounded-md cursor-pointer " onClick={() => {
          setFlipCards(!flipCards);
        }}>
          {flipCards ? "Hide Cards" : "Show Cards"}.
        </p>
      </div>
      {flipCards && <InterestCard />}

      <InterestFormInput />
      <InterestFormCheckbox />
    </div>
  );
}

export default InterestContainer;
