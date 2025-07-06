import { motion, useTransform } from 'framer-motion';
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project, i, progress, range, targetScale }) => {
    
    // هذا هو السطر الوحيد الذي تم تصحيحه.
    // إنه الآن يستخدم 'range' الذي تم تمريره بشكل صحيح.
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className="relative w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] h-auto rounded-2xl overflow-hidden shadow-xl"
            >
                <div className="w-full h-full flex flex-col md:flex-row bg-gray-900/80 backdrop-blur-sm border border-pink-400/20">
                    <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                                <div className="h-[1px] w-20 bg-gray-600"></div>
                            </div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">{project.title}</h2>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">{project.description}</p>
                        </div>
                        <div className="mt-6 pt-4">
                            <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6"></div>
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="text-xs font-medium text-pink-300 bg-pink-500/10 py-1 px-3 rounded-full">{tech}</span>
                                ))}
                            </div>
                            <div className="flex items-center gap-6">
                                <a 
                                  href={project.githubLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="group flex items-center gap-2 text-pink-400 hover:text-white transition-colors"
                                >
                                    <FaGithub className="text-xl" />
                                    <span className="text-sm font-medium">Code</span>
                                </a>
                                <a 
                                  href={project.liveLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="group flex items-center gap-2 text-pink-400 hover:text-white transition-colors"
                                >
                                    <FaGlobe className="text-xl" />
                                    <span className="text-sm font-medium">Live</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;