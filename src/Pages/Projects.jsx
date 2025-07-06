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
      className="relative"
      // نعطي الحاوية ارتفاعاً كافياً لعملية التمرير
      style={{ height: `${PROJECTS.length * 100}vh` }}
    >
      <div className="sticky top-24 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent mb-12">
          My Projects
        </h1>
      </div>

      {PROJECTS.map((project, i) => {
        const targetScale = 1 - (PROJECTS.length - i - 1) * 0.05;
        // هنا نحسب نطاق الحركة لكل بطاقة
        const range = [i / PROJECTS.length, (i + 1) / PROJECTS.length];

        return (
          <ProjectCard
            key={project.title}
            project={project}
            i={i}
            progress={scrollYProgress}
            range={range} // نمرر النطاق الصحيح هنا
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Projects;
