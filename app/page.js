import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import Our_Team from "@/components/Our_Team";
import OurDifferences from "@/components/OurDifferences";
import Partners_Advisor from "@/components/Partners_Advisor";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Hero />
      <WhyChooseUs />
      <OurDifferences />
      <KeyFeatures />
      <Our_Team />
    </main>
  );
}
