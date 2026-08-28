import Hero from "@/components/recruit/Hero";
import About from "@/components/recruit/About";
import Numbers from "@/components/recruit/Numbers";
import Work from "@/components/recruit/Work";
import Environment from "@/components/recruit/Environment";
import People from "@/components/recruit/People";
import RecruitInfo from "@/components/recruit/RecruitInfo";
import EntryCTA from "@/components/recruit/EntryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Numbers />
      <Work />
      <Environment />
      <People />
      <RecruitInfo />
      <EntryCTA />
    </>
  );
}
