import WorkIntro from "./WorkIntro";
import CreativeSection from "../Home/CreativeSection";
import GithubActivity from "../../components/GithubActivity";
import FlowSection  from "../Home/FlowSection";
// import ProjectCard from "./ProjectCard";
const Work = () => {
  return (
    <main className="bg-black overflow-hidden">
      <WorkIntro />
      {/* <ProjectCard /> */}
       <FlowSection/>
      <GithubActivity />
      <CreativeSection />
    </main>
  );
};

export default Work;