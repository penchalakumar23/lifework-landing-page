"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import MapSection from "./Navigate";
import Navigate from "./Navigate";

function WhyChooseUs() {
  const cards = [
    {
      title: "Personalized Development",
      text: "Our platform creates a dynamic persona for each user, blending both internal traits and external factors.",
    },
    {
      title: "Continuous Skill Building",
      text: "Microlearning happens daily for all of us. Capture and use daily learning to grow!",
    },
    {
      title: "Real Time Feedback",
      text: "Understand yourself, market conditions, opportunities, movement and and ways to make meaningful impacts when it matters.",
    },
    {
      title: "Opportunity Matching",
      text: "LifeWork matches you with careers, volunteer roles, and learning to fit your unique profile",
    },
    {
      title: "Holistic Life Management",
      text: "Drive focus on individual passion to do things you enjoy, and drive career success from your interests.",
    },
    {
      title: "Explore Custom Options",
      text: "Nearly limitless opportunities exist to monitor and adjust your life goals. Explore with LifeWork.",
    },
  ];

  const variantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const variantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="md:px-28">
      <h2 className="font-bold text-2xl text-center capitalize font-montserrat py-6 px-4 mx-4">
        Why choose us?
      </h2>
      <p className="py-6 px-4 pt-0 text-justify font-open_sans">
        We enable every individual with the power to search inside themselves to
        truly understand their purpose.
      </p>

      <div className="overflow-hidden md:grid md:grid-cols-3">
        {cards.map((card, index) => {
          const [ref, inView] = useInView({
            threshold: 0.3,
            triggerOnce: true,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? variantsLeft : variantsRight}
              className="my-4">
              <Card title={card.title} text={card.text} />
            </motion.div>
          );
        })}
      </div>

      <Navigate />
    </div>
  );
}

export default WhyChooseUs;
