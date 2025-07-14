import { ReactLenis } from "lenis/react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { PROJECTS } from "../constants"; 
import ProjectCard from "../components/ProjectCard";    

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <motion.main 
        className="bg-black relative overflow-hidden" 
        ref={container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background animated gradient */}
        <motion.div
          className="fixed inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 50%, #1e293b 0%, #000000 100%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, #1e293b 0%, #000000 100%)`,
              `radial-gradient(circle at 80% 20%, #1e293b 0%, #000000 100%)`,
              `radial-gradient(circle at 20% 80%, #1e293b 0%, #000000 100%)`,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating particles background */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <section className="text-white w-full bg-slate-950/50 relative backdrop-blur-sm">
          {PROJECTS.map((project, i) => {
            // Enhanced scroll-based calculations
            const targetScale = 1 - (PROJECTS.length - i) * 0.05;
            const rangeStart = i * 0.1;
            const rangeEnd = 1;
            
            return (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[rangeStart, rangeEnd]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
        
        {/* Progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.main>
    </ReactLenis>
  );
}

