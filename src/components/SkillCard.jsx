import { motion } from "framer-motion";

const SkillCard = ({ icon, category, skills }) => {
    return (
        <motion.div 
            whileHover={{ 
                y: -8, 
                // Changed the glow color to pink
                boxShadow: "0px 10px 30px rgba(244, 114, 182, 0.2)" 
            }}
            className="bg-gray-800/50 p-6 rounded-2xl border border-pink-500/20 h-full transition-colors duration-300 hover:border-pink-400"
        >
            <div className="flex items-center gap-4 mb-6">
                {/* Changed the main icon color to pink */}
                <span className="text-3xl text-pink-400">{icon}</span>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-md">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-light">{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;