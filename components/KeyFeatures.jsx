import React from "react";
import Carousels from "./Carousels";
import FeatureCard from "./FeatureCard";
import { IoMdFlame } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";

function KeyFeatures() {
  return (
    <div className="md:px-28">
      <h2 className=" font-montserrat font-extrabold mb-4 text-center text-2xl">
        Key Features
      </h2>
      <p className="py-4 px-2 mx-4 text-justify font-open_sans">
        When you focus on a growth mindset, the opportunities come to you.
        Access real time feedback, review and adjust personal goals and engage
        in an environment that is entirely focused on you.
      </p>

      <Carousels />
      <div className="hidden md:grid md:grid-cols-3 gap-6 ">
        <FeatureCard
          logo={<IoMdFlame color="#003a56" size={40} />}
          text={
            "Understand multiple factors at play and get personalized feedback tailored to your life goals and skill development."
          }
          header={"Real-time Feedback."}
        />

        <FeatureCard
          logo={<BiBarChart color="#003a56" size={40} />}
          text={
            "Explore options that are driven directly from your engagement. Your platform, your data, your path- a GPS for your life."
          }
          header={"Life Pathways."}
        />

        <FeatureCard
          imgSrc={"/profile.png"}
          text={
            "As you make choices and connect more, your digital twin starts to understand and refine options into focus and clarity."
          }
          header={"Digital You."}
        />
      </div>
    </div>
  );
}

export default KeyFeatures;
