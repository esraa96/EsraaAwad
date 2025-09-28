import { motion } from "framer-motion";
import { PROJECTS } from "../constants"; 
import ProjectCard from "../components/ProjectCard";    

export default function Projects() {
  return (
    <motion.main 
      className="bg-black relative overflow-hidden min-h-screen" 
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

      <section className="text-white w-full bg-slate-950/50 relative backdrop-blur-sm py-20 pt-24">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                url={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

