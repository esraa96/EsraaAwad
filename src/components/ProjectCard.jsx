import { motion, useTransform } from 'framer-motion';
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project, i, progress, range, targetScale, total }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.2]);
  const translateY = useTransform(progress, range, [0, -100]);
  const zIndex = total - i; 

  return (
    <motion.div
      className="h-screen sticky top-0 flex items-center justify-center"
      style={{ zIndex }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y: translateY,
        }}
        className="relative w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] bg-gray-900/80 backdrop-blur-md border border-pink-400/20 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-pink-300 bg-pink-500/10 py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-6">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-white"
              >
                <FaGithub className="text-xl" />
                <span>Code</span>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-white"
              >
                <FaGlobe className="text-xl" />
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
