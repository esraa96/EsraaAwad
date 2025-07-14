import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-32 text-white">
            <div className="mx-auto max-w-6xl px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 text-4xl font-bold lg:text-5xl text-center mb-16"
                >
                    Developer, <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">Front End</span>, Cross Platforms
                </motion.h2>

                <div className="grid gap-10 md:gap-12 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="p-1.5 rounded-2xl bg-gradient-to-r from-pink-400 to-fuchsia-500">
                             
                            
                            
                            <img 
                                src="/profile-pic.jpg" 
                                className="rounded-xl shadow-lg block" 
                                alt="Esraa Awad" 
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <p className="text-lg text-gray-300">
                            Hello! I'm Esraa Awad, a passionate developer with experience in building robust and user-friendly web applications. Skilled in front-end and back-end technologies, I enjoy turning complex problems into beautiful and intuitive digital experiences.
                        </p>
                        <p className="text-gray-400">
                            My focus is on making web development faster, easier, and more accessible. I'm currently expanding my skills in cross-platform development to grow as a full-stack developer and create seamless, high-performance applications.
                        </p>
                        <div className="pt-6">
                            <blockquote className="border-l-4 border-pink-500 pl-4">
                                <p className="text-gray-300 italic">
                                    "I am a lifelong learner and innovator, passionate about expanding my knowledge and contributing to the developer community through new ideas and solutions."
                                </p>
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;