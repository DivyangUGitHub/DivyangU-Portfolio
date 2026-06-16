
import AboutIntro from "./AboutIntro";
// import Experience from "./Experience";
import GithubActivity from "../../components/common/GithubActivity";
import CreativeSection from "../Home/CreativeSection";
const About = () => {
  return (
    <main className="bg-black overflow-hidden">
      <AboutIntro />
      <GithubActivity />
      <CreativeSection />
      {/* <Experience /> */}
    </main>
  );
};

export default About;