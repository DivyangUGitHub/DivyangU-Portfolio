import React from "react";
import ShowcaseSection from "./ShowcaseSection";
import HeroSection from "./HeroSection";
// import ProjectsSection from "./ProjectsSection";
import PhilosophySection from "./PhilosophySection";
import StatsSection from "./StatsSection";
interface HomeProps {
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({
  setActivePage,
}) => {
  return (
    <div className="bg-black overflow-hidden">

      <HeroSection
        setActivePage={setActivePage}
      />
      <ShowcaseSection />
      {/* <ProjectsSection /> */}

      <PhilosophySection />

      <StatsSection />

    </div>
  );
};

export default Home;