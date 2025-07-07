import { motion } from "framer-motion";
import { EDUCATION_DATA } from "../constants"; 
import EducationCard from "../components/EducationCard";

const Education = () => {
    return (
            <main className="container mx-auto px-8 pt-20">
        <section className="min-h-screen relative py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent mb-6">
                        Educational Journey
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        My academic and educational background that shaped my skills.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EDUCATION_DATA.map((item, index) => (
                        <EducationCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
        </main>
    );
};

export default Education;