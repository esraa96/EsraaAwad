import { SKILLS_DATA } from "../constants";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const SkillsGrid = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {SKILLS_DATA.map((data, index) => (
                <SkillCard 
                    key={index}
                    icon={data.icon}
                    category={data.category}
                    skills={data.skills}
                />
            ))}
        </motion.div>
    );
};

export default SkillsGrid;