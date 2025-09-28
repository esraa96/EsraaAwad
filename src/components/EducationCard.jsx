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
            
        
            className="relative border rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-colors duration-300 bg-gray-900/50 backdrop-blur-sm border-pink-400/20 h-full hover:border-pink-400 w-full"
        >
            <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                        <span className="text-2xl sm:text-3xl text-pink-300 flex-shrink-0">{item.icon}</span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 flex items-center gap-2">
                        {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {item.date}
                    </p>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm italic border-l-2 border-pink-500 pl-3 leading-relaxed">
                    {item.description}
                </p>
                {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" /> Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.achievements.map((ach, index) => (
                                <div key={index} className="px-2 sm:px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                    {ach.icon}
                                    <span>{ach.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded bg-fuchsia-500/10 text-fuchsia-300">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default EducationCard;