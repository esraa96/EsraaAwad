import { motion } from "framer-motion";
import { Calendar, Trophy, Award } from "lucide-react";

const EducationCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            
           
            whileHover={{ 
                y: -10, 
                boxShadow: "0px 0px 25px rgba(244, 114, 182, 0.5)" 
            }}
            
        
            className="relative border rounded-2xl p-8 sm:p-6 transition-colors duration-300 bg-zinc-900/95 backdrop-blur-sm border-gray-800/50 h-full hover:border-pink-400 w-full max-w-none shadow-2xl"
        >
            <div className="space-y-8 sm:space-y-6">
                <div className="space-y-4 sm:space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="text-5xl sm:text-3xl text-pink-300 flex-shrink-0">{item.icon}</span>
                        <h3 className="text-3xl sm:text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-xl sm:text-base text-gray-300 flex items-center gap-2">
                        {item.institution}
                    </p>
                    <p className="text-lg sm:text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {item.date}
                    </p>
                </div>
                <p className="text-gray-400 text-lg sm:text-sm italic border-l-2 border-pink-500 pl-4 leading-relaxed">
                    {item.description}
                </p>
                {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-lg sm:text-sm font-semibold text-white flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" /> Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.achievements.map((ach, index) => (
                                <div key={index} className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 flex items-center gap-2 text-lg sm:text-sm">
                                    {ach.icon}
                                    <span>{ach.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-2 text-base sm:text-xs rounded-full bg-pink-500/20 text-pink-300">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default EducationCard;