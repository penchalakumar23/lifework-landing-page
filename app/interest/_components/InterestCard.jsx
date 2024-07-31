"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { GrOrganization } from "react-icons/gr";
import { HiLightBulb } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";

import { IoPersonSharp } from "react-icons/io5";
function InterestCard() {
  const [flippedStates, setFlippedStates] = useState(Array(4).fill(false));

  const handleClick = (index) => {
    setFlippedStates((prev) =>
      prev.map((isFlipped, i) => (i === index ? !isFlipped : false))
    );
  };

  const cards = [
    {
      img: <IoPersonSharp size={30} color="white" />,
      heading: "Users",
      text: "sign up for the waitlist!",
      backheading: "Coming Soon!",
      backtext:
        "We are hard at work preparing a product that will change lives.",
      list: ["Get updates", "Referral program"],
    },
    {
      img: <GrOrganization size={30} color="white" />,
      heading: "Organization",
      text: "Find your perfect fit",
      backheading: "Learn More",
      backtext: "",
      list: [
        "High quality and rapid hiring",
        "Early discounts",
        "Partner opportunities",
        "Licensing opportunities",
      ],
    },
    {
      img: <HiLightBulb size={30} color="white" />,
      heading: "Early Access",
      text: "Test Drive",
      backheading: "Help us Launch",
      backtext: "",
      list: ["Alpha program: test and earn", "Early Adopter Access"],
    },
    {
      img: <ImCheckmark size={30} color="white" />,
      heading: "Other Support",
      text: "Test Drive",
      backheading: "Other Help",
      backtext: "",
      list: ["Share on social media", "Discounts", "Careers & internships"],
    },
  ];

  return (
    <div className="w-full  grid md:grid-cols-2 gap-4  place-items-center">
      {cards.map(
        ({ img, heading, text, backheading, backtext, list }, index) => (
          <ReactCardFlip
            key={index}
            isFlipped={flippedStates[index]}
            flipDirection="horizontal">
            <div
              className="border rounded-md my-4 px-4 py-6 w-[400px] flex justify-center flex-col items-center capitalize gap-4"
              onMouseEnter={() => handleClick(index)}
              onClick={() => handleClick(index)}>
              <div className=" p-4 rounded-full bg-[#003a56]">{img}</div>
              <h2 className="font-montserrat font-black  text-2xl">
                {heading}
              </h2>
              <p className="font-open_sans">{text}</p>
            </div>

            <div
              onMouseLeave={() => handleClick(index)}
              onClick={() => handleClick(index)}
              className=" my-4 px-4 py-6 border rounded-md w-[400px] flex justify-center flex-col items-center capitalize gap-4">
              <h2 className="font-montserrat font-black  text-2xl">
                {backheading}
              </h2>
              <p className="font-open_sans">{backtext}</p>
              <ul>
                {list.map((singlelist, i) => (
                  <li key={i} className="font-open_sans py-1 list-disc">
                    {singlelist}
                  </li>
                ))}
              </ul>
            </div>
          </ReactCardFlip>
        )
      )}
    </div>
  );
}

export default InterestCard;
