import { useState } from "react";
import { FaHome, FaCog, FaBriefcase, FaEnvelope, FaUserGraduate, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Home", icon: <FaHome />, to: "/" },
    { name: "Skills", icon: <FaCog />, to: "/skills" },
    { name: "Education", icon: <FaUserGraduate />, to: "/education" },
    { name: "Projects", icon: <FaBriefcase />, to: "/projects" },
    { name: "Contact", icon: <FaEnvelope />, to: "/contact" },
];

// مكون داخلي لعرض الروابط، سنستخدمه في كلا الحالتين
const NavLinks = ({ onClick }) => (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
        {navItems.map((item) => (
            <NavLink
                key={item.name}
                to={item.to}
                onClick={onClick} // لإغلاق القائمة عند الضغط على رابط
                className={({ isActive }) =>
                    `px-3 py-2 w-full md:w-auto text-center md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                     transition-all duration-300 flex items-center justify-center gap-2
                     hover:bg-white/10 
                     ${isActive ? 'bg-pink-500/15 text-white' : 'text-gray-300 hover:text-white'}`
                }
            >
                {item.icon}
                <span>{item.name}</span>
            </NavLink>
        ))}
    </div>
);

const Navbar = () => {
    // حالة لتتبع فتح وإغلاق قائمة الجوال
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* الشريط العلوي الرئيسي */}
            <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
                <div className="p-[2px] md:rounded-full bg-gradient-to-r from-pink-300 to-fuchsia-300 animate-gradient-x">
                    <nav className="bg-gray-800/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
                        {/* رأس الشريط على الجوال (اسم وزر القائمة) */}
                        <div className="flex justify-between items-center md:hidden px-2">
                            <a className="text-white font-bold" href="/">Esraa's Portfolio</a>
                            <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                        {/* القائمة على الشاشات الكبيرة */}
                        <div className="hidden md:flex">
                            <NavLinks />
                        </div>
                    </nav>
                </div>
            </div>

            {/* القائمة المنسدلة للجوال */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="md:hidden bg-gray-900/95 backdrop-blur-md pb-4"
                    >
                        <NavLinks onClick={() => setIsOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;