import { useRef } from "react";
import { useScroll } from "framer-motion";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative snap-y snap-mandatory overflow-y-scroll h-screen"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
          My Projects
        </h1>
      </div>

      {PROJECTS.map((project, i) => {
        const targetScale = 1 - (PROJECTS.length - i - 1) * 0.05;
        const range = [i / PROJECTS.length, (i + 1) / PROJECTS.length];

        return (
          <ProjectCard
            key={project.title}
            project={project}
            i={i}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
            total={PROJECTS.length}
          />
        );
      })}
    </section>
  );
};

export default Projects;
