import { motion, useTransform, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });
  
  // 1. Scroll-Based Animation (Parallax/Depth Animation)
  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, [0, -i * 100]);
  const rotateX = useTransform(progress, range, [0, -5]);
  const opacity = useTransform(progress, range, [1, 0.8]);
  
  // 2. Perspective Transform - Enhanced depth effect
  const perspective = useTransform(progress, range, [1000, 1200]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
      style={{
        zIndex: 100 - i, // المشاريع اللاحقة لها z-index أعلى
      }}
    >
      {/* 5. Animated Entrances */}
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 100, 
          rotateX: -15,
          scale: 0.8 
        }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          scale: 1 
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay: i * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          scale,
          y,
          rotateX,
          opacity,
          transformPerspective: perspective,
        }}
        className="relative h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        // 3. Hover Animation (Floating Cards)
        whileHover={{
          y: -20,
          rotateX: 5,
          scale: 1.02,
          transition: { 
            duration: 0.4,
            ease: "easeOut"
          },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800/50 backdrop-blur-sm">
          
          {/* Image Section with Enhanced Effects */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden group">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.6 }
              }}
            />
            
            {/* 4. Overlay Motion - Enhanced */}
            <motion.div
              className="absolute inset-0"
              style={{ 
                backgroundColor: color, 
                mixBlendMode: "overlay"
              }}
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 0.4,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Additional gradient overlay for depth */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              initial={{ opacity: 0.3 }}
              whileHover={{ 
                opacity: 0.6,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Project Number Badge */}
            <motion.div
              className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/70 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 + 0.5 }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: color,
                transition: { duration: 0.2 }
              }}
            >
              Project {i + 1}
            </motion.div>
            
            {/* Floating particles effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${20 + index * 30}%`,
                    top: `${30 + index * 20}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Content Section with Enhanced Animations */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between relative">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${color} 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '20px 20px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="relative z-10">
              {/* Header with animated line */}
              <motion.div
                className="flex items-center gap-3 mb-4 md:mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.3 }}
              >
                <motion.div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [`0 0 0 0 ${color}40`, `0 0 0 10px ${color}00`, `0 0 0 0 ${color}00`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="h-[1px] bg-gray-600"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "3rem" } : {}}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                />
              </motion.div>

              {/* Title with typewriter effect */}
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.4 }}
                whileHover={{
                  color: color,
                  transition: { duration: 0.3 }
                }}
              >
                {title}
              </motion.h2>
              
              {/* Description with fade-in */}
              <motion.p
                className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.6 }}
              >
                {description}
              </motion.p>
            </div>

            {/* Footer with enhanced link animations */}
            <motion.div
              className="mt-4 md:mt-auto pt-4 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.8 }}
            >
              <motion.div
                className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.9, duration: 0.6 }}
                style={{ originX: 0 }}
              />
              
              <div className="flex items-center gap-6">
                {/* GitHub Link with enhanced hover */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 relative"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaGithub className="text-pink-500 group-hover:text-pink-400" size={22} />
                  </motion.div>
                  <span className="text-xs md:text-sm font-medium text-pink-500 group-hover:text-pink-400 relative">
                    Code
                    <motion.div
                      className="absolute -bottom-1 left-0 h-[1px] bg-pink-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>

                {/* Live Link with enhanced hover */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 relative"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: -45,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaExternalLinkAlt className="text-pink-500 group-hover:text-pink-400" size={20} />
                  </motion.div>
                  <span className="text-xs md:text-sm font-medium text-pink-500 group-hover:text-pink-400 relative">
                    Live
                    <motion.div
                      className="absolute -bottom-1 left-0 h-[1px] bg-pink-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// PropTypes validation
ProjectCard.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

