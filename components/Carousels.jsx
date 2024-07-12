import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import FeatureCard from "./FeatureCard";
import { IoMdFlame } from "react-icons/io";

function Carousels() {
  return (
    <div className="flex justify-center w-full flex-col items-center md:hidden">
      <Carousel >
        <CarouselContent>
          <CarouselItem>
            <FeatureCard
              logo={<IoMdFlame color="#000000" size={40} />}
              text={
                "Understand multiple factors at play and get personalized feedback tailored to your life goals and skill development."
              }
              header={"Real-time Feedback."}
            />
          </CarouselItem>
          <CarouselItem>
            <FeatureCard
              imgSrc={"/chart.png"}
              text={
                "Explore options that are driven directly from your engagement. Your platform, your data, your path- a GPS for your life."
              }
              header={"Life Pathways."}
            />
          </CarouselItem>

          <CarouselItem>
            <FeatureCard
              imgSrc={"/profile.png"}
              text={
                "As you make choices and connect more, your digital twin starts to understand and refine options into focus and clarity."
              }
              header={"Digital You."}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Carousels;
