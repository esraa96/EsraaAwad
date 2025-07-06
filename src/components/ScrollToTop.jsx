// import React, { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const classNames = (...classes) => {
//   return classes.filter(Boolean).join(" ");
// };

// export const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   return (
//     <div className=" text-center pb-4 py-12 pt-14 container mx-auto">
//       <motion.button
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -40 }}
//         transition={{ duration: 1 }}
//         type="button"
//         onClick={scrollToTop}
//         className={classNames(
//           isVisible ? "opacity-100" : "opacity-0",
//           "bg-neutral-700 hover:bg-neutral-900 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none"
//         )}
//       >
//         Scroll To Top
//         <p className="px-2">{""}</p>
//         <FaArrowUp />
//       </motion.button>
//     </div>
//   );
// };

// export default ScrollToTop;