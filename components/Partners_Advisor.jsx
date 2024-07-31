"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

function Partners_Advisor() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex justify-center w-full flex-col items-center md:px-28">
      <h3 className="font-bold font-montserrat mt-8 text-2xl">
        OUR PARTNERS & ADVISORS
      </h3>
      <p className="py-4 px-4 text-justify font-open_sans">
        We can't do this on our own. This is a massive undertaking, but it has
        to start somewhere. Our partners below have begun the journey with us.
        We are always looking for other like-minded individuals and
        organizations that believe there is a better way to achieve fulfillment
        while helping solve labor gaps and opportunity inequalities. We are
        looking to grow and develop our relationships. If you are interested in
        growing with us and becoming part of the solution, there is a place for
        you at{" "}
        <motion.span
          className="border text-[#003a56] animate-pulse font-bold px-2 rounded-3xl"
          initial="hidden"
          animate={controls}
          variants={variants}>
          LifeWork
        </motion.span>
        .
      </p>

      <div className="w-full flex justify-center items-center max-w-[500px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://www.bamboo-minds.com/"}>
                  <Image
                    src={"/Bamboo.png"}
                    alt="image"
                    width={300}
                    height={300}
                    className="cursor-pointer h-auto w-auto"
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Gen Z Mental healthcare.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://www.cookman.edu/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/Bethune-Cookman_University.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Bethune Cookman University.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://discoverymachine.com/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/DMI.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Discovery Machine-Coginitive AI.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://funnelstorms.com/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/Funnel.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Our Internal Market support Team.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://skillbridge.osd.mil/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/Skillbridge.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">SkillBridge Apprentice Program.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://www.frostbolt.io/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/Frostbolt.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Digital Media and OutReach.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://testpilotcreative.com/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/TestPiliot.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Our Branding and Creative Partners.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative flex justify-center rounded-md group">
                <Link href={"https://testpilotcreative.com/"}>
                  <Image
                    className="self-center place-self-center"
                    src={"/CF.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="absolute h-full w-full top-0 bg-[rgba(0,58,86,.6)] text-white text-center text-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-2">Our World-Class Legal Team.</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Partners_Advisor;
