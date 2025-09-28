import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  i,
  title,
  description,
  url,
  technologies,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="w-full h-full"
    >
      <motion.div
        className="bg-zinc-900/95 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm h-full flex flex-col"
        whileHover={{ boxShadow: "0px 0px 30px rgba(244, 114, 182, 0.3)" }}
      >
        <div className="flex flex-col h-full">
          {/* Image Section */}
          <div className="w-full h-48 relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <motion.h2
                className="text-xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {title}
              </motion.h2>
              
              <motion.p
                className="text-gray-400 mb-4 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                {description}
              </motion.p>
              
              {/* Technologies */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Links */}
            <motion.div
              className="flex gap-4 mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.6 }}
            >
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                <FaGithub size={16} />
                <span>Code</span>
              </motion.a>

              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                <FaExternalLinkAlt size={14} />
                <span>Live Demo</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

