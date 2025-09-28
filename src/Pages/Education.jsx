import { motion } from "framer-motion";
import { EDUCATION_DATA } from "../constants"; 
import EducationCard from "../components/EducationCard";

const Education = () => {
    return (
            <main className="w-full px-4 sm:container sm:mx-auto sm:px-8 pt-24">
        <section className="min-h-screen relative py-20 md:py-32">
            <div className="w-full max-w-none sm:max-w-6xl mx-auto px-0 sm:px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent mb-6">
                        Educational Journey
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        My academic and educational background that shaped my skills.
                    </p>
                </motion.div>
                
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:gap-8">
                    {EDUCATION_DATA.map((item, index) => (
                        <div key={index} className={`${index === 2 ? 'lg:col-span-2 lg:max-w-md lg:mx-auto' : ''}`}>
                            <EducationCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </main>
    );
};

export default Education;