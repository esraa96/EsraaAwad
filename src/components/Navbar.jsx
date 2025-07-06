import { FaHome, FaCog, FaLaptopCode, FaEnvelope, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Home", icon: <FaHome />, to: "/" },
    { name: "Skills", icon: <FaCog />, to: "/skills" },
    { name: "Education", icon: <FaUserGraduate />, to: "/education" },
    { name: "Projects", icon: <FaLaptopCode />, to: "/projects" },
    { name: "Contact", icon: <FaEnvelope />, to: "/contact" },
];

const Navbar = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            // تم تغيير التدرج اللوني هنا
            className="relative p-[2px] bg-gradient-to-r from-pink-300 to-fuchsia-300 rounded-full"
        >
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                                // تم تغيير لون الرابط النشط
                                isActive ? 'bg-pink-500/20 text-white' : 'text-neutral-300 hover:text-white'
                            }`
                        }
                    >
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                    </NavLink>
                ))}
            </div>
        </motion.nav>
    </div>
  );
};

export default Navbar;