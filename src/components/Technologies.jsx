// import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { SiFlask } from "react-icons/si";
// import { FaJava } from "react-icons/fa";
// import { IoLogoFirebase } from "react-icons/io5";
// import { FaUnity } from "react-icons/fa6";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { animate, motion } from "framer-motion";
// import { RiNextjsFill } from "react-icons/ri";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24 pt-14">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-12 py-12 text-center text-4xl text-fuchsia-300 font-medium"
//       >
//         Technologies
//       </motion.h2>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -50 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <RiReactjsLine className="text-5xl text-cyan-400" />
//         </motion.div>

//         <motion.div
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <FaNodeJs className="text-5xl text-lime-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <SiMongodb className="text-5xl text-green-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <RiTailwindCssFill className="text-5xl text-sky-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <RiNextjsFill className="text-5xl text-neutral-700" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <IoLogoFirebase className="text-5xl text-amber-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <RiReactjsLine className="text-5xl text-neutral-300" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <FaJava className="text-5xl text-sky-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl p-4"
//         >
//           <SiFlask className="text-5xl text-neutral-400" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;