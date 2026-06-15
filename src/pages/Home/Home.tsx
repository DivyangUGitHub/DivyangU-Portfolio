// pages/Home/Home.tsx

import React from "react";
import ShowcaseSection from "./ShowcaseSection";
import HeroSection from "./HeroSection";
import SectionThird from "./SectionThird";
import TechSection from "./TechSection";
import CreativeSection from "./CreativeSection";
import VentureShowcase from "../../components/VentureShowcase"; 
import FlowSection  from "./FlowSection";

interface HomeProps {
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="bg-black overflow-hidden">
      <HeroSection setActivePage={setActivePage} />
      <ShowcaseSection />
             <SectionThird 
      setActivePage={setActivePage} />
      <TechSection />
      <VentureShowcase />
      <FlowSection/>
       <CreativeSection />
    </div>
  );
};

export default Home;



 
      {/* <ProjectsSection /> */}

      {/* <PhilosophySection /> */}

      {/* <StatsSection /> */}
        {/* <VentureShowcase /> */}
      {/* <GithubCard />
      <LeetcodeCard />
      <SpotifyCard /> */}


      // import GithubCard from "../../components/GithubCard";
// import LeetcodeCard from "../../components/LeetcodeCard";
// import SpotifyCard from "../../components/SpotifyCard";
// import InfiniteRibbon from "./InfiniteRibbon";
// import ProjectsSection from "./ProjectsSection";
// import PhilosophySection from "./PhilosophySection";
// import StatsSection from "./StatsSection";
// import VentureShowcase from "../../components/VentureShowcase";