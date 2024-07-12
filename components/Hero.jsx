"use client";

import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full md:px-28 md:mt-6">
      <div className="md:flex md:items-center">
        <motion.h1
          ref={ref}
          className="text-3xl text-center py-8 pb-0 px-4 font-bold md:text-6xl md:px-4 md:w-full"
          initial="hidden"
          animate={controls}
          variants={variants}>
          Discover your authentic self-
          <span className="text-xl md:text-3xl block md:mt-4">
            Because your life’s purpose is not a job.
          </span>
          <p className=" text-base text-justify font-normal md:mt-6 py-6">
            Ikigai- a Japanese term combining “iki” or Life and “gai” or
            meaning, starts with Life for a reason. Who you are- your character,
            personality and passions- drive your ability to be authentic. We
            create clarity to align your passion with purpose and enable a focus
            and conviction that most never achieve.
          </p>
        </motion.h1>
        <Image
          src={"/hero.jpg"}
          height={400}
          width={400}
          alt="hero"
          className="w-full h-[500px] md:rounded-lg"
        />
      </div>
      <p className="text-justify py-6 px-4 drop-shadow">
        At{" "}
        <motion.span
          className="border text-[#003a56] animate-pulse font-bold px-2 rounded-3xl"
          initial="hidden"
          animate={controls}
          variants={variants}>
          LifeWork
        </motion.span>
        , we are revolutionizing personal and professional growth by harnessing
        the power of innovative hybrid AI technology. Our platform focuses only
        on individual users, and is designed to help remove the noise from
        decision making by turning data into knowledge, and knowledge into
        insight. Our users gain clarity, are able to focus on their passions and
        create opportunities for themselves in ways they otherwise would never
        have imagined.
      </p>

      <div className="md:justify-center md:gap-10 flex-col md:flex-row  py-6 px-4 ">
        <button className="bg-[#003a56] text-white rounded-md px-6 py-2 mb-4 cursor-pointer hover: md:mb-0 md:w-[30%] hidden  ">
          Join Now
        </button>
        <button className="text-[#003a56] border rounded-md px-6 py-2 border-[#003a56] cursor-pointer md:w-[30%]  hover:">
          <Link href={"/explorers"}> Learn More</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
