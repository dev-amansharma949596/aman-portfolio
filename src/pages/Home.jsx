import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import ProjectsSlider from "../sections/ProjectsSlider"; 
import Experience from "../sections/Experience";
import LatestWork from "../sections/LatestWork";
import Education from "../sections/Education";
import ToolkitMarquee from "../sections/ToolkitMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 dark:bg-zinc-950 dark:text-gray-100">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <LatestWork />
        <Education />
        <ToolkitMarquee />
        <ProjectsSlider /> 
      </main>
      <Footer />
    </>
  );
}
