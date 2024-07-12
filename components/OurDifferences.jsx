"use client";

import React, { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EyeIcon } from "lucide-react";

const items = [
  {
    title: "1.5 Million",
    text: "Layoffs in Q1 of 2024",
  },
  {
    title: "48%",
    text: "Estimated people actively seeking new roles",
  },
  {
    title: "23%",
    text: "Expected churn in labor market over 5 years.",
  },
];

function OurDifferences() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [visibleText, setVisibleText] = useState(
    Array(items.length).fill(false)
  );

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 1, duration: 0.5 },
      }));
    }
  }, [controls, inView]);

  const handleToggle = (index) => {
    const newVisibleText = [...visibleText];
    newVisibleText[index] = !newVisibleText[index];
    setVisibleText(newVisibleText);
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl text-center my-3 font-mono">
          Our Difference.
        </h2>
        <p className="text-justify px-4">
          In our system, organizations are competing for you, not the other way
          around. We are going to fix this market disparity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 mx-4 my-12 ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="border shadow-lg text-center first-of-type:rounded-l last-of-type:rounded-r  bg-neutral-200 border-gray-400 py-4 px-2"
            custom={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            ref={ref}>
            <motion.p
              className={` pb-2 ${item.title.includes("Million") ? "" : ""}`}
              animate={{
                transition: { duration: 0.6 },
              }}>
              {item.text}
            </motion.p>
            <div className="relative h-10 flex justify-between items-center flex-col mt-4 ">
              {visibleText[index] ? (
                <motion.h3
                  className={`text-base font-bold   left-1/2 ${
                    item.title.includes("Million") ? "text-red-500 " : ""
                  }`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleToggle(index)}>
                  {item.title}
                </motion.h3>
              ) : (
                <motion.span
                  className={`text-xs place-items-center cursor-pointer  
                   block ${item.title.includes("Million") ? " " : ""}`}
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleToggle(index)}>
                  <EyeIcon size={25} color="#003a56" />
                </motion.span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurDifferences;
