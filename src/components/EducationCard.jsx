import { motion } from "framer-motion";
import { Calendar, Trophy, Award } from "lucide-react";

const EducationCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            
            // هذا هو الجزء الذي تمت إضافته وتعديله
            whileHover={{ 
                y: -10, // تحريك البطاقة للأعلى بمقدار 10 بكسل
                boxShadow: "0px 0px 25px rgba(244, 114, 182, 0.5)" // إضافة التوهج
            }}
            
            // تم حذف كلاسات الـ hover من هنا ووضعها في whileHover
            className="relative border rounded-xl p-8 transition-colors duration-300 bg-gray-900/50 backdrop-blur-sm border-pink-400/20 h-full hover:border-pink-400"
        >
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl text-pink-300">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                        {item.institution}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {item.date}
                    </p>
                </div>
                <p className="text-gray-300 text-sm italic border-l-2 border-pink-500 pl-3">
                    {item.description}
                </p>
                {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" /> Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.achievements.map((ach, index) => (
                                <div key={index} className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 flex items-center gap-2 text-sm">
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